package solution.Main;

import java.util.Scanner;

import solution.implementations.*;
import solution.interfaces.*;

public class FactoryMethodPatternExample {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the type of document you want to open (word/pdf/excel) : ");
        String type = sc.nextLine().trim().toLowerCase();

        DocumentFactory factory;

        if (type.equals("pdf")) {
            factory = new PdfDocumentFactory();
        } else if (type.equals("excel")) {
            factory = new ExcelDocumentFactory();
        } else if (type.equals("word")) {
            factory = new WordDocumentFactory();
        } else {
            System.out.print("Invalid document format requested");
            sc.close();
            return;
        }

        Document doc = factory.createDocument();
        doc.open();

        sc.close();
    }
}
