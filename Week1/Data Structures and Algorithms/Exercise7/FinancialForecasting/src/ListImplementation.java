import java.util.*;

public class ListImplementation {
	public static double futureValue(List<Double> pastValues, int years) {
		if(years == 0) {
			return pastValues.get(pastValues.size()-1);
		}
		double growth = 0;
		for(int i = 1; i < pastValues.size(); i++) {
			growth += pastValues.get(i) - pastValues.get(i-1);
		}
		double avgGrowth = growth / (pastValues.size() - 1);
		double newValue = pastValues.get(pastValues.size()-1) + avgGrowth;
		pastValues.add(newValue);
		
		return futureValue(pastValues, years-1);
	}
	
	public static void main(String[] args) {
		List<Double> pastValues = new ArrayList<Double>();
		Collections.addAll(pastValues, 100.02, 105.00, 87.98, 93.01, 101.001);
		int years = 20;
		double finalValue = futureValue(pastValues, years);
		System.out.println("The value after " + years + "years would be " + String.format("%.2f", finalValue));
	}
}
