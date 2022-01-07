package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/impact.com/api")
public class ApiController {


    @GetMapping("/healthCheck")
    public ResponseEntity<ResponseMessage> healthCheck(){
        String message = "healthcheck successful";
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(200,message));
    }


    @RequestMapping("/getResult")
    public ResponseEntity<Integer> findDescendants(@RequestParam("input") String input){
        int result=0;
        if(input.contains("+")) {
            String[] num = input.split("\\+");
            result = Integer.parseInt(num[0])+Integer.parseInt(num[1]);
        }else if(input.contains("-")){
            String[] num = input.split("\\-");
            result = Integer.parseInt(num[0])-Integer.parseInt(num[1]);
        }else {
            String[] num = input.split("\\×");
            result = Integer.parseInt(num[0])*Integer.parseInt(num[1]);
        }
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }
}


