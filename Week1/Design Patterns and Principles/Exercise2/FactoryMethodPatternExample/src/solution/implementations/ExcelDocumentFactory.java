package solution.implementations;

import solution.interfaces.DocumentFactory;
import solution.interfaces.Document;

public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new ExcelDocument();
    }
    
}
