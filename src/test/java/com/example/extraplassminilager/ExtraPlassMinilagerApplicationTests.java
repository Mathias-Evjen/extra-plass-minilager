package com.example.extraplassminilager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ExtraPlassMinilagerApplicationTests {
	private final DataRepository dataRepo = new DataRepository();
	private final KategoriRepository katRepo = new KategoriRepository();

	@Test
	void contextLoads() {
	}

	/*
	===========================

	 Tester for DataRepository

	===========================

	 */
	@Test
	void splitBoderTest() {
		// Tester mot skråstrek
		List<Data> skråstrekList = new ArrayList<>();
		skråstrekList.add(new Data("89/95", "ÅR"));
		assertTrue(dataRepo.splitBoder(skråstrekList), "Klarer ikke å splitte boder med skråstrek");

		// Tester mot bindestrek
		List<Data> bindestrekList = new ArrayList<>();
		bindestrekList.add(new Data("135 - 48-98", "HALVÅR"));
		assertTrue(dataRepo.splitBoder(bindestrekList), "Klarer ikke å splitte boder med bindestrek");

		// Tester at andre registreringsmåter ikke fungerer
		List<Data> annetList = new ArrayList<>();
		annetList.add(new Data("135 og 48", "KVARTAL"));
		assertFalse(dataRepo.splitBoder(annetList), "splitboder() slipper gjennom rader som ikke skal kunne splittes");
	}

	@Test
	void getBoderTest() {
		List<BodKategori> bodkat = new ArrayList<>();
		bodkat.add(new BodKategori(313, 1));
		bodkat.add(new BodKategori(600, 3));
		List<Bod> ut = dataRepo.getBoder(bodkat);

		List<Bod> boder = new ArrayList<>();
		boder.add(new Bod(313, 1, 1));
		boder.add(new Bod(600, 3, -1));

		// Tester at getBoder oppretter Bod-objekter riktig
		assertIterableEquals(boder, ut, "getBoder returnerer feil liste");

		// Tester at getBoder håndterer null-verdier i lista
		assertThrows(NullPointerException.class, () -> dataRepo.getBoder(null), "Gir ingen eller gal feilmelding dersom lista som tas inn er null");
	}


	/*
	===============================

	 Tester for KategoriRepository

	===============================

	 */

	@Test
	void populerKategorierTest() {
		Map<Integer, List<Integer>> bodKat = new HashMap<>();
		List<Integer> boder = new ArrayList<>();
		for (int i = 0; i < 400; i++) boder.add(i);
		bodKat.put(1, boder);
		bodKat.put(2, boder);
		bodKat.put(3, boder);

		List<Integer> opptatt = new ArrayList<>();
		for (int i = 5; i < 15; i++) opptatt.add(i);

//		assertEquals(bodKat.size(), katRepo.populerKategorier(bodKat, opptatt).size(), "");

		// Tester at populerKategorier håndterer null-verdier
		assertThrows(NullPointerException.class, () -> katRepo.populerKategorier(null, null), "Gir ingen eller gal feilmelding dersom en eller begge listene som tas inn er null");
		assertThrows(NullPointerException.class, () -> katRepo.populerKategorier(null, opptatt), "Gir ingen eller gal feilmelding dersom en eller begge listene som tas inn er null");
		assertThrows(NullPointerException.class, () -> katRepo.populerKategorier(bodKat, null), "Gir ingen eller gal feilmelding dersom en eller begge listene som tas inn er null");
	}


	/*
	==================================

	 Tester for BodKategoriRepository

	==================================

	 */
}

























