public class Order {
	int orderId;
	String customerName;
	double totalPrice;
	
	Order(int orderId, String customerName, double totalPrice){
		this.orderId = orderId;
		this.customerName = customerName;
		this.totalPrice = totalPrice;
	}
	
	public void printOrder() {
		System.out.println(this.orderId + " " + this.customerName + " " + this.totalPrice);
	}
}