package solution.implementations;

import solution.interfaces.DocumentFactory;
import solution.interfaces.Document;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new PdfDocument();
    }
    
}
