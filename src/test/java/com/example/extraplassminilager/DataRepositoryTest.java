package com.example.extraplassminilager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class DataRepositoryTest {
    @Test
    public void kanSplitteBoder() {
        DataRepository dataRepo = new DataRepository();
        List<Data> list = new ArrayList<>();

        list.add(new Data("88/95", "ÅR"));
        assertTrue(dataRepo.splitBoder(list), "Klarer ikke å splitte boder med skråstrek");
        assertEquals(2, dataRepo.getBodTilgjengelighet().get("ÅR").size());

        list.add(new Data("135 - 48-98", "HALVÅR"));
        assertTrue(dataRepo.splitBoder(list), "Klarer ikke å splitte boder med bindestrek");
        assertEquals(3, dataRepo.getBodTilgjengelighet().get("HALVÅR").size());

        list.add(new Data("135 og 48", "FLYTTET"));
        assertFalse(dataRepo.splitBoder(list), "splitboder() slipper gjennom rader som ikke skal kunne splittes");
        assertEquals(3, dataRepo.getBodTilgjengelighet().size());
    }

    @Test
    public void kanFinneOpptatteBoder() {
        DataRepository dataRepo = new DataRepository();
        List<Data> list = new ArrayList<>();

        list.add(new Data("88/95", "MND"));
        dataRepo.splitBoder(list);
        assertEquals(2, dataRepo.getOpptatt().size());

        dataRepo.setBodTilgjengelighetEmpty();
        list.add(new Data("135 - 48-98", "HALVÅR"));
        dataRepo.splitBoder(list);
        assertEquals(5, dataRepo.getOpptatt().size());

        dataRepo.setBodTilgjengelighetEmpty();
        list.add(new Data("600 - 602", "KVARTAL"));
        dataRepo.splitBoder(list);
        assertEquals(7, dataRepo.getOpptatt().size());

        dataRepo.setBodTilgjengelighetEmpty();
        list.add(new Data("240", "ÅR"));
        dataRepo.splitBoder(list);
        assertEquals(8, dataRepo.getOpptatt().size());

        dataRepo.setBodTilgjengelighetEmpty();
        list.add(new Data("13 - 14", "FLYTTET"));
        dataRepo.splitBoder(list);
        assertEquals(8, dataRepo.getOpptatt().size());
    }

    @Test
    public void burdeHaandtereDuplikatBoder() {
        DataRepository dataRepo = new DataRepository();
        List<Data> list = new ArrayList<>();

        list.add(new Data("5", "ÅR"));
        list.add(new Data("18", "ÅR"));
        list.add(new Data("15", "MND"));
        list.add(new Data("5 - 6", "FLYTTET"));
        list.add(new Data("15", "FLYTTET"));
        dataRepo.splitBoder(list);

        assertEquals(3, dataRepo.getOpptatt().size());
    }

    @Test
    public void kanHenteBoder() {
        DataRepository dataRepo = new DataRepository();
        List<BodKlasse> bodKlasser = new ArrayList<>();

        assertThrows(NullPointerException.class, () -> dataRepo.getBoder(null), "Null-objekt kastet ikke NullPointerException");
        assertThrows(NullPointerException.class, () -> dataRepo.getBoder(bodKlasser), "Tom liste kastet ikke NullPointerException");

        bodKlasser.add(new BodKlasse(5, 14));
        bodKlasser.add(new BodKlasse(472, 7));

        List<Bod> boder = dataRepo.getBoder(bodKlasser);
        assertEquals(bodKlasser.size(), boder.size());

        assertEquals(5, boder.get(0).getNr());
        assertEquals(1, boder.get(0).getEtasje());
        assertEquals(14, boder.get(0).getKlasseNr());

        assertEquals(472, boder.get(1).getNr());
        assertEquals(-1, boder.get(1).getEtasje());
        assertEquals(7, boder.get(1).getKlasseNr());
    }

    @Test
    public void kanSetteOpptatteBoder() {
        DataRepository dataRepo = new DataRepository();
        List<Data> data = new ArrayList<>();
        List<Bod> boder = new ArrayList<>();


        data.add(new Data("5", "ÅR"));
        data.add(new Data("18", "ÅR"));
        data.add(new Data("5 - 6", "FLYTTET"));
        dataRepo.splitBoder(data);

        boder.add(new Bod(5, 14, 1));
        boder.add(new Bod(18, 9, 1));
        boder.add(new Bod(6, 14, 1));

        boder = dataRepo.oppdaterOpptatteBoder(boder);
        assertTrue(boder.get(0).getOpptatt(), "Bod skulle være opptatt men er satt til ledig");
        assertTrue(boder.get(1).getOpptatt(), "Bod skulle være opptatt men er satt til ledig");
        assertFalse(boder.get(2).getOpptatt(), "Bod skulle være ledig men er satt til opptatt");
    }
}



























