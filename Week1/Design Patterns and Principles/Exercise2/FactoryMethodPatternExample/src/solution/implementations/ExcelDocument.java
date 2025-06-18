package solution.implementations;

import solution.interfaces.Document;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Excel document opened");
    }
    
}
