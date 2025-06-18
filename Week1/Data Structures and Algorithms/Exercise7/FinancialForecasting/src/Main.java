import java.util.Arrays;

public class Main {
	public static double futureValue(double[] pastValues, int years) {
		if(years == 0) {
			return pastValues[pastValues.length-1];
		}
		double growth = 0;
		for(int i = 1; i < pastValues.length; i++) {
			growth += pastValues[i] - pastValues[i-1];
		}
		double avgGrowth = growth / (pastValues.length - 1);
		double newValue = pastValues[pastValues.length-1] + avgGrowth;
		double[] newArr = Arrays.copyOf(pastValues, pastValues.length+1);
		newArr[newArr.length-1] = newValue;
		
		return futureValue(newArr, years-1);
	}
	
	public static void main(String[] args) {
		double[] pastValues = {100.02, 105.00, 87.98, 93.01, 101.001};
		int years = 20;
		double finalValue = futureValue(pastValues, years);
		System.out.println("The value after " + years + "years would be " + String.format("%.2f", finalValue));
	}
}
