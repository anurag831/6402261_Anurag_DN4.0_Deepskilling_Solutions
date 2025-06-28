-- EXCERCISE 2 - ERROR HANDLING

--Scenario1
CREATE OR REPLACE PROCEDURE SafeTransferFunds (acc_id1 IN AccounTs.AccountID%TYPE, acc_id2 IN Accounts.AccountID%TYPE, amount IN Accounts.Balance%TYPE) IS
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
    SafeTransferFunds(acc2, acc1, 500);
    DBMS_OUTPUT.PUT_LINE('Balance of Acc: '||acc1||', after transaction is '||GET_BALANCE(acc1));
    DBMS_OUTPUT.PUT_LINE('Balance of Acc: '||acc2||', after transaction is '||GET_BALANCE(acc2));
END;

--Scenario 2
CREATE OR REPLACE PROCEDURE INCREASE_SALARY (emp_id Employees.EmployeeID%TYPE, percentage NUMBER) IS 
    emp_not_found EXCEPTION;
    BEGIN
        UPDATE Employees SET Salary = TRUNC(Salary + Salary*percentage/100) WHERE EmployeeID = emp_id;
        IF SQL%ROWCOUNT = 0 THEN
            RAISE emp_not_found;
        END IF;
    EXCEPTION
        WHEN emp_not_found THEN
            DBMS_OUTPUT.PUT_LINE('No employee exists with given ID: '||emp_id);
    END;
    

BEGIN
    INCREASE_SALARY(3, 2);
END;

--Scenario 3
CREATE OR REPLACE PROCEDURE ADD_NEW_CUSTOMER(
    emp_id Customers.CustomerID%TYPE,
    name Customers.Name%TYPE,
    dob Customers.DOB%TYPE,
    balance Customers.Balance%TYPE
) 
IS
    emp_exists EXCEPTION;
    row Customers%ROWTYPE;
BEGIN
    BEGIN
        SELECT * INTO row FROM Customers WHERE CustomerID = emp_id;
        RAISE emp_exists;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
            VALUES (emp_id, name, dob, balance, SYSDATE);
            IF SQL%ROWCOUNT = 1 THEN
                DBMS_OUTPUT.PUT_LINE('New row added');
            END IF;
    END;

EXCEPTION
    WHEN emp_exists THEN
        DBMS_OUTPUT.PUT_LINE('Employee already exists with id: ' || emp_id);

    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
END;

    
DECLARE
    emp_id Customers.CustomerID%TYPE := 6;
    name Customers.Name%TYPE := 'Pritam Roy';
    dob Customers.DOB%TYPE := TO_DATE('2000-10-20', 'YYYY-MM-DD');
    balance Customers.Balance%TYPE := 20000; 
BEGIN
    ADD_NEW_CUSTOMER(emp_id, name, dob, balance);
END;
    
    