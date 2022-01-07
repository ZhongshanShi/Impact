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

    @RequestMapping("/getAddResult")
    public ResponseEntity<Integer> getAddResult(@RequestParam("firstNumber") int firstNumber ,@RequestParam("secondNumber") int secondNumber){
        try{
            int result=firstNumber+secondNumber;
            return ResponseEntity.status(HttpStatus.OK).body(result);
        }catch (Exception e){
            return new ResponseEntity<>(0,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @RequestMapping("/getSubtractResult")
    public ResponseEntity<Integer> getSubtractResult(@RequestParam("firstNumber") int firstNumber ,@RequestParam("secondNumber") int secondNumber){
        try{
            int result=firstNumber-secondNumber;
            return ResponseEntity.status(HttpStatus.OK).body(result);
        }catch (Exception e){
            return new ResponseEntity<>(0,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @RequestMapping("/getMultiplyResult")
    public ResponseEntity<Integer> getMultiplyResult(@RequestParam("firstNumber") int firstNumber ,@RequestParam("secondNumber") int secondNumber){
        try{
            int result=firstNumber*secondNumber;
            return ResponseEntity.status(HttpStatus.OK).body(result);
        }catch (Exception e){
            return new ResponseEntity<>(0,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}


