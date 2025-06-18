package solution.implementations;

import solution.interfaces.Document;

public class WordDocument implements Document {
	@Override
    public void open() {
        System.out.println("Word document opened");
    }
}
