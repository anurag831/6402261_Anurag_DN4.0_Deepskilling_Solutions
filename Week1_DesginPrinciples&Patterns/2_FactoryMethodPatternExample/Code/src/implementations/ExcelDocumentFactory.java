package implementations;

import interfaces.DocumentFactory;
import interfaces.Document;

public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
    
}
