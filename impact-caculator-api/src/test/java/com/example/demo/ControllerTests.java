package com.example.demo;

import com.example.demo.controller.ApiController;
import com.example.demo.controller.ResponseMessage;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.http.ResponseEntity;


@WebMvcTest(value = ApiController.class, excludeFilters = @ComponentScan.Filter(type= FilterType.ASSIGNABLE_TYPE))
@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
public class ControllerTests {

    @InjectMocks
    ApiController apiController;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void getMessageTest() {
        ResponseEntity<ResponseMessage> response = apiController.healthCheck();
        Assert.assertEquals("healthCheck successful",response.getBody().getMessage());
    }

    @Test
    public void getAddResultTest() {
        Assert.assertEquals(5,apiController.getAddResult(2,3).getBody().intValue());
    }

    @Test
    public void getSubtractResultTest() {
        Assert.assertEquals(-1,apiController.getSubtractResult(2,3).getBody().intValue());
    }

    @Test
    public void getMultiplyResultTest() {
        Assert.assertEquals(6,apiController.getMultiplyResult(2,3).getBody().intValue());
    }

}
