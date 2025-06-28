-- Control Structures

-- Scenario 1
SET SERVEROUTPUT ON;
DECLARE
    age NUMBER(3);
BEGIN
    FOR i IN (
        SELECT
            c.CustomerID AS cust_id,
            c.Name,
            c.DOB,
            l.LoanID,
            l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID
    ) LOOP
        age := TRUNC(MONTHS_BETWEEN(SYSDATE, i.DOB)/12);
        IF age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = i.LoanID;

            UPDATE Customers SET LastModified = SYSDATE WHERE CustomerID = i.cust_id;

            DBMS_OUTPUT.PUT_LINE('Discount given to ' || i.Name || ' with ID ' || i.cust_id);
        END IF;
    END LOOP;
END;


-- Scenario 2
-- First we have to add the field isVIP as there is no such field yet in the given customers table
ALTER TABLE Customers ADD isVIP CHAR(1) DEFAULT 'N';

-- Block to set the isVIP to 'Y' for customers having balance > $10,000
BEGIN
    FOR i IN (SELECT * FROM Customers) LOOP
        IF i.Balance > 10000 AND i.isVIP = 'N' THEN
            UPDATE Customers 
            SET isVIP = 'Y', 
            LastModified = SYSDATE
            WHERE CustomerID = i.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE(I.Name||' is now a VIP a customer');
        END IF;
    END LOOP;
END;


-- Scenario 3
DECLARE
    days NUMBER;
BEGIN
    FOR i IN (SELECT c.Name, c.CustomerID, l.LoanID, l.LoanAmount, l.EndDate FROM Customers c JOIN Loans l ON c.CustomerID = l.CustomerID) LOOP
    days := TRUNC(i.EndDate) - TRUNC(SYSDATE);
        IF days BETWEEN 0 AND 30 THEN
            DBMS_OUTPUT.PUT_LINE('Dear '||i.Name||
                            ' with Customer ID: '||i.CustomerID||
                            ', your loan of amount '||i.LoanAmount||
                            ' and ID:'||i.LoanID||' is ending in '||
                            days||' days');
        END IF;
    END LOOP;
END;

















