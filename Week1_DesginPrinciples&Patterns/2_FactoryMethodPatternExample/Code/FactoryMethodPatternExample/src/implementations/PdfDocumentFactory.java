package implementations;

import interfaces.DocumentFactory;
import interfaces.Document;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
    
}
