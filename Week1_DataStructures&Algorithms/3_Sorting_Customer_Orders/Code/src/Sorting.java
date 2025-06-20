
public class Sorting {
	public static void main(String[] args) {
		Order [] orders = new Order[] {
				new Order(004, "Ankush", 40000.098),
				new Order(002, "Anurag", 7300.01),
				new Order(001, "Arghodeep", 10000.0),
				new Order(005, "Debanjan", 500.5),
				new Order(003, "Kaushik", 60.21),
		};
		
		orders = SortingAlgorithms.BubbleSort(orders);
		System.out.println("Bubble Sort Output: ");
		for(int i = 0; i < orders.length; i++) {
			orders[i].printOrder();
		}
		
		System.out.println();
		
		SortingAlgorithms.QuickSort(orders, 0, orders.length-1);
		System.out.println("Quick Sort Output: ");
		for(int i = 0; i < orders.length; i++) {
			orders[i].printOrder();
		}
	}
}
