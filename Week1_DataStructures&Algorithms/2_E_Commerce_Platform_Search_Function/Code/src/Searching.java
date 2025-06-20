public class Searching {
	public static void main(String[] args) {
        Product[] unsorted = {
            new Product(103, "Jeans", "Fashion"),
            new Product(101, "Laptop", "Electronics"),
            new Product(104, "TV", "Electronics"),
            new Product(102, "Rice", "Food"),
        };

        Product[] sorted = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Rice", "Food"),
            new Product(103, "Jeans", "Fashion"),
            new Product(104, "TV", "Electronics"),
        };

        SearchingAlgorithms algo = new SearchingAlgorithms();
        
        int position1 = algo.LinearSearch(unsorted, 102);
        int position2 = algo.BinarySearch(sorted, 103);

        System.out.println( unsorted[position1].productName + " found at positon " + position1 + " by Linear Search");
        System.out.println(sorted[position2].productName + " found at positon " + position2 + " by Binary Search");
        
    }
}
