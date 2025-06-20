package implementations;

import interfaces.Document;

public class PdfDocument implements Document {
	@Override
    public void open() {
        System.out.println("PDF document opened");
    }
}
