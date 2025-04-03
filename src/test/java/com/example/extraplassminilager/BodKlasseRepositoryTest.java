package com.example.extraplassminilager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BodKlasseRepositoryTest {
    @Test
    public void kanMappeBodKlasser() {
        BodKlasseRepository bodKlasseRepo = new BodKlasseRepository();
        List<BodKlasse> bodKlasseObjekter = new ArrayList<>();

        bodKlasseObjekter.add(new BodKlasse(5, 14));
        bodKlasseObjekter.add(new BodKlasse(83, 14));

        bodKlasseObjekter.add(new BodKlasse(250, 19));

        bodKlasseObjekter.add(new BodKlasse(30, 9));
        bodKlasseObjekter.add(new BodKlasse(242, 9));
        bodKlasseObjekter.add(new BodKlasse(269, 9));

        Map<Integer, List<Integer>> bodKlasser = bodKlasseRepo.opprettBodKlasseMap(bodKlasseObjekter);
        assertEquals(3, bodKlasser.size());
        assertEquals(2, bodKlasser.get(14).size());
        assertEquals(1, bodKlasser.get(19).size());
        assertEquals(3, bodKlasser.get(9).size());
    }
}
