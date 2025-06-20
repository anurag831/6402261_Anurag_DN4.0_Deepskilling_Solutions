import java.util.*;

public class Iteration {
	public static double futureValue(double[] pastValues, int years) {
		List<Double> data = new ArrayList<>();
		for(double d : pastValues) {
			data.add(d);
		}
		
		double growth = 0;
		for(int i= 0; i < years; i++) {
			growth = 0;
			for(int j = 1; j < data.size(); j++) {
				growth += data.get(j) - data.get(j-1);
			}
			double avgGrowth = growth / (data.size() - 1);
			data.add(data.get(data.size() - 1) + avgGrowth);
		}
		
		return data.get(data.size() - 1);
	}
	
	public static void main(String[] args) {
		double[] pastValues = {100.02, 105.00, 87.98, 93.01, 101.001};
		int years = 20;
		double finalValue = futureValue(pastValues, years);
		System.out.println("The value after " + years + "years would be " + String.format("%.2f", finalValue));
	}
}
