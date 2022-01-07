package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/impact.com/api")
public class ApiController {

    @GetMapping("/healthCheck")
    public ResponseEntity<ResponseMessage> healthCheck(){
        String message = "healthCheck successful";
        return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(200,message));
    }

    @RequestMapping("/getResult")
    public ResponseEntity<Integer> calculateResult(@RequestParam("input") String input){
        try{
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
        }catch (Exception e){
            return new ResponseEntity<>(0,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


