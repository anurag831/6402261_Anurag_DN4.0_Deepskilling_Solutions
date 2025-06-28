package org.example;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class MyServiceTest {
    @Test
    public void testExternalApi() {
        ExternalAPI mockAPI = Mockito.mock(ExternalAPI.class);
        when(mockAPI.getData()).thenReturn("Mock Data");
        MyService service = new MyService(mockAPI);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}