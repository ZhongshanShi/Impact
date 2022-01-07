package com.example.demo.controller;


import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ResponseMessage {
     int statusCode;
     String message;
}
