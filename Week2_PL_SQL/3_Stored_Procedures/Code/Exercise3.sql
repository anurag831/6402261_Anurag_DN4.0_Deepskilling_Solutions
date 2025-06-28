-- Exercise 3 - Stored Procedures

-- Scenario 1
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
CURSOR accs IS SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings';
BEGIN
    FOR i IN accs LOOP
        UPDATE Accounts SET Balance = Balance + Balance*0.01 WHERE AccountID = i.AccountID;
    END LOOP;
END;

BEGIN
    ProcessMonthlyInterest;
END;

-- Scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    dept_name IN Employees.Department%TYPE,
    bonus_pct IN NUMBER
)
IS
    no_emp_found EXCEPTION;
    emp_count NUMBER := 0;
BEGIN
    -- Update salaries with the bonus
    UPDATE Employees
    SET Salary = Salary + Salary * bonus_pct/100
    WHERE Department = dept_name;

    emp_count := SQL%ROWCOUNT;

    IF emp_count = 0 THEN
        RAISE no_emp_found;
    END IF;

    DBMS_OUTPUT.PUT_LINE(emp_count || ' employee(s) updated in department: ' || dept_name);

EXCEPTION
    WHEN no_emp_found THEN
        DBMS_OUTPUT.PUT_LINE('No employees found in department: ' || dept_name);
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error occurred: ' || SQLERRM);
END;

BEGIN
    UpdateEmployeeBonus('IT', 2);
END;


-- Scenario 3
-- TransferFunds 
CREATE OR REPLACE PROCEDURE TransferFunds (acc_id1 IN AccounTs.AccountID%TYPE, acc_id2 IN Accounts.AccountID%TYPE, amount IN Accounts.Balance%TYPE) IS
    balance1 Accounts.Balance%TYPE;
    insufficient_funds EXCEPTION;
    account_not_found EXCEPTION;
    last_transaction_id Transactions.TransactionID%TYPE;
    BEGIN
    
        BEGIN
            SELECT Balance INTO balance1 FROM Accounts WHERE AccountID = acc_id1;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
            DBMS_OUTPUT.PUT_LINE('No record associated with account id: '||acc_id1);
            balance1 := NULL;
            RAISE account_not_found;
        END;
        
        DECLARE
            dummy Accounts.Balance%TYPE;
        BEGIN
            SELECT Balance INTO dummy FROM Accounts WHERE AccountID = acc_id2;
        EXCEPTION
            WHEN NO_DATA_FOUND THEN
            DBMS_OUTPUT.PUT_LINE('No record associated with account id: '||acc_id2);
            RAISE account_not_found;
        END;
        
        
        IF balance1 < amount THEN
            RAISE insufficient_funds;
        END IF;
        
        
        UPDATE Accounts SET Balance = Balance - amount, LastModified = SYSDATE WHERE AccountID = acc_id1;
        UPDATE Accounts SET Balance = Balance + amount, LastModified = SYSDATE WHERE AccountID = acc_id2;
        SELECT TransactionID INTO last_transaction_id FROM (SELECT TransactionID FROM Transactions ORDER BY TransactionID DESC) WHERE ROWNUM = 1;
        INSERT INTO Transactions VALUES (
            last_transaction_id + 1,
            acc_id1,
            SYSDATE,
            amount,
            'Debit'
        );
        INSERT INTO Transactions VALUES (
            last_transaction_id + 2,
            acc_id2,
            SYSDATE,
            amount,
            'Credit'
        );
        
        DBMS_OUTPUT.PUT_LINE('Transaction Complete');
        COMMIT;
        
    EXCEPTION
        WHEN insufficient_funds THEN
            ROLLBACK;
            DBMS_OUTPUT.PUT_LINE('Insufficient funds in Account ID: '||acc_id1);
            balance1 := NULL;
            
        WHEN account_not_found THEN
            ROLLBACK;
            NULL;
            
        WHEN OTHERS THEN
            ROLLBACK;
            DBMS_OUTPUT.PUT_LINE('Some other error has occured');
            balance1 := NULL;
    END;
    
DECLARE
    acc1 Accounts.AccountID%TYPE := 3;
    b1 Accounts.Balance%TYPE;
    acc2 Accounts.AccountID%TYPE := 4;
    b2 Accounts.Balance%TYPE;
    FUNCTION GET_BALANCE (accID IN Accounts.AccountID%TYPE) RETURN Accounts.Balance%TYPE IS
        b Accounts.Balance%TYPE;
        BEGIN
            SELECT balance INTO b FROM Accounts WHERE AccountID = accID;
            RETURN b;
        END;
BEGIN
    DBMS_OUTPUT.PUT_LINE('Balance of Acc: '||acc1||', before transaction was '||GET_BALANCE(acc1));
    DBMS_OUTPUT.PUT_LINE('Balance of Acc: '||acc2||', before transaction was '||GET_BALANCE(acc2));
    SafeTransferFunds(acc1, acc2, 1000);
    DBMS_OUTPUT.PUT_LINE('Balance of Acc: '||acc1||', after transaction is '||GET_BALANCE(acc1));
    DBMS_OUTPUT.PUT_LINE('Balance of Acc: '||acc2||', after transaction is '||GET_BALANCE(acc2));
END;

