public class Main {
	public static void main(String[] args) throws Exception {
        Logger x = Logger.getInstance();
        Logger y = Logger.getInstance();
        Logger z = Logger.getInstance();

        System.out.println(x.hashCode());
        System.out.println(y.hashCode());
        System.out.println(z.hashCode());

        if(x.hashCode() == y.hashCode() && y.hashCode() == z.hashCode()) {
            System.out.println("x, y, and z are the same instance.");
        } else {
            System.out.println("x, y, and z are different instances.");
        }
    }
}
