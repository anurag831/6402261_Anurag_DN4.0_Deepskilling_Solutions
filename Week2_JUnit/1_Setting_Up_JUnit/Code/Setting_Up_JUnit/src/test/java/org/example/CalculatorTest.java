package org.example;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        int expected = 3;
        assertEquals(expected, calc.add(1, 2), "Error in addition");
    }

    @Test
    public void testMultiply() {
        Calculator calc = new Calculator();
        int expected = 6;
        assertEquals(expected, calc.multiply(2, 3), "Error in multiplication");
    }
}