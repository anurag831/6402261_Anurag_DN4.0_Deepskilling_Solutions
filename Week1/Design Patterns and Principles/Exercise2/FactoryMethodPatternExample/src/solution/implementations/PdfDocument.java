package solution.implementations;

import solution.interfaces.Document;

public class PdfDocument implements Document {
	@Override
    public void open() {
        System.out.println("PDF document opened");
    }
}
