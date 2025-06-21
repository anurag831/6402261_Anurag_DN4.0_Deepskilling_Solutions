package implementations;

import interfaces.Document;

public class ExcelDocument implements Document {
    @Override
    public void open() {
        System.out.println("Excel document opened");
    }
    
}
