package com.example.extraplassminilager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class KlasseRepositoryTest {
    @Test
    public void kanPopulereKlasser() {
        KlasseRepository klasseRepo = new KlasseRepository();
        Map<Integer, List<Integer>> bodKlasser = new HashMap<>();
        List<Integer> opptatt = new ArrayList<>();
        List<Klasse> klasser = new ArrayList<>();

        bodKlasser.put(14, new ArrayList<>());
        bodKlasser.get(14).add(48);
        bodKlasser.get(14).add(309);
        bodKlasser.get(14).add(247);

        bodKlasser.put(17, new ArrayList<>());
        bodKlasser.get(17).add(214);

        bodKlasser.put(3, new ArrayList<>());
        bodKlasser.get(3).add(116);
        bodKlasser.get(3).add(600);
        bodKlasser.get(3).add(445);
        bodKlasser.get(3).add(124);

        opptatt.add(48);
        opptatt.add(247);
        opptatt.add(116);
        opptatt.add(445);
        opptatt.add(124);

        klasser.add(new Klasse(14, 9.3f, 25.5f, 1760));
        klasser.add(new Klasse(17, 13.9f, 37.6f, 2250));
        klasser.add(new Klasse(3, 2.3f, 6.2f, 525));

        klasser = klasseRepo.populerKlasser(bodKlasser, opptatt, klasser);
        assertEquals(3, klasser.size());
        assertEquals(3, klasser.get(0).getBoder().size());
        assertEquals(1, klasser.get(1).getBoder().size());
        assertEquals(4, klasser.get(2).getBoder().size());

    }
}












