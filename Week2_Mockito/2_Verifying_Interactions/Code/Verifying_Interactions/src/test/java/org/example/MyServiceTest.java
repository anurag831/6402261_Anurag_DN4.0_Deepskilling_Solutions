package org.example;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        ExternaAPI mockApi = Mockito.mock(ExternaAPI.class);
        MyService service = new MyService(mockApi);

        service.fetchData();
        verify(mockApi).getData();
    }

    @Test
    public void testSendData() {
        ExternaAPI apiMock = Mockito.mock(ExternaAPI.class);
        MyService service = new MyService(apiMock);

        String customData = "My name is Anurag";
        service.sendCustomData(customData);

        verify(apiMock).sendData(customData);
        verify(apiMock, times(1)).sendData(customData);
    }
}