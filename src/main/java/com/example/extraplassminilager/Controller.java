package com.example.extraplassminilager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {
    @Autowired
    private KlasseRepository klasseRepo;
    @Autowired
    private BodKlasseRepository bodKlasseRepo;
    @Autowired
    private DataRepository dataRepo;

    @GetMapping("/hentKlasser")
    public List<Klasse> hentKlasser() {
        List<Klasse> klasser = klasseRepo.getKlasser(bodKlasseRepo.bodKlasseMap(), dataRepo.getOpptatt());
        return klasser;
    }

    @GetMapping("/hentBoder")
    public List<Bod> hentBoder() {
        List<Bod> boder = dataRepo.getBoder(bodKlasseRepo.hentBodKlasserFraDatabase());
        return boder;
    }
}
