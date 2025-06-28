package org.example;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    private static Calculator calculator;

    @BeforeAll
    static void init() {
        calculator = new Calculator();
        System.out.println("Setting up unit tests");
    }

    @AfterAll
    static void teardown() {
        calculator = null;
        System.out.println("Cleaning up...");
    }

    @Test
    void add() {
        assertEquals(7, calculator.add(2,5), "Error in addition method");
    }

    @Test
    void subtract() {
        assertEquals(6, calculator.subtract(8, 2), "Error in addition method");
    }
}