package solution;

public class Logger {
	private static Logger instance = null;

    public String s;

    private Logger() {
        s = "Hello, I am a logger!";
    }

    public static synchronized Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
}
