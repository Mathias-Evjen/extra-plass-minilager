package com.example.extraplassminilager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    @Autowired
    private DataRepository repo;

    @GetMapping("/hentBoder")
    public List<Integer> hentBoder() {
        List<Integer> boder = repo.getBodNr();
        return boder;
    }

    @GetMapping("/hentOpptatt")
    public List<Integer> hentOpptatt() {
        List<Integer> erOpptatt = repo.getOpptatt();
        System.out.println("Controller: " + erOpptatt);
        return erOpptatt;
    }
}
