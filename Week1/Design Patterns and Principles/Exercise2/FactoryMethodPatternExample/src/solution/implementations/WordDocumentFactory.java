package solution.implementations;

import solution.interfaces.DocumentFactory;
import solution.interfaces.Document;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
