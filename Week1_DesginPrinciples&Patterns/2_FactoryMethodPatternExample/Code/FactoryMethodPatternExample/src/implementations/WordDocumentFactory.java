package implementations;

import interfaces.DocumentFactory;
import interfaces.Document;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
