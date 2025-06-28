package org.example;

public class MyService {
    private ExternaAPI externaAPI;

    public MyService(ExternaAPI externaAPI){
        this.externaAPI = externaAPI;
    }

    public String fetchData() {
        return externaAPI.getData();
    }

    public void sendCustomData(String data) {
        externaAPI.sendData(data);
    }
}
