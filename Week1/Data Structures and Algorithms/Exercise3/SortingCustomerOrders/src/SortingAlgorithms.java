
public class SortingAlgorithms {
	
	public static Order[] BubbleSort(Order[] orders) {
		boolean swapped = false;
		for(int i = 0; i < orders.length - 1; i++) {
			swapped = false;
			for(int j = 0; j < orders.length - 1 - i; j++) {
				if(orders[j+1].totalPrice < orders[j].totalPrice) {
					Order temp = orders[j];
					orders[j] = orders[j+1];
					orders[j+1] = temp;
					swapped = true;
				}
			}
			if(swapped == false) {
				break;
			}
		}
		return orders;
	}
	
	public static int partition(Order[] orders, int start, int end) {
		double pivot = orders[start].totalPrice;
		int i = start;
		int j = end;
		while(i < j) {
			while(orders[i].totalPrice <= pivot && i <= end-1) {
				i++;
			}
			while(orders[j].totalPrice > pivot && j >= start+1) {
				j--;
			}
			if( i < j) {
				Order temp = orders[i];
				orders[i] = orders[j];
				orders[j] = temp;
			}
		}
		Order temp = orders[j];
		orders[j] = orders[start];
		orders[start] = temp;
		return j;
	}
	public static void QuickSort(Order[] orders, int start, int end) {
		if(start < end) {
			int p = partition(orders, start, end);
			QuickSort(orders, start, p-1);
			QuickSort(orders, p+1, end);
		}
	}
}
