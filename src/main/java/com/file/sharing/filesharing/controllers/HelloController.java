package com.file.sharing.filesharing.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
public class HelloController {
    @GetMapping("/api/hello")
    public String hello() {
        SimpleDateFormat format = new SimpleDateFormat("HH:mm:ss");

        return "Hello, the time now is " + format.format(new Date()) + "\n";
    }
}