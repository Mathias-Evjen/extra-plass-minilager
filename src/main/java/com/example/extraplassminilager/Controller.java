package com.example.extraplassminilager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {
    @Autowired
    private KategoriRepository katRepo;
    @Autowired
    private BodKategoriRepository bodKatRepo;
    @Autowired
    private DataRepository dataRepo;

    @GetMapping("/hentKategorier")
    public List<Kategori> hentKategorier() {
        List<Kategori> kategorier = katRepo.sendKategorier(bodKatRepo.bodKategoriMap(), dataRepo.getOpptatt());
        return kategorier;
    }
}
