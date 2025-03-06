package com.example.extraplassminilager;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ExtraPlassMinilagerApplicationTests {
	private final DataRepository dataRepo = new DataRepository();
	private final KlasseRepository klasseRepo = new KlasseRepository();

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
		List<BodKlasse> bodKlasse = new ArrayList<>();
		bodKlasse.add(new BodKlasse(313, 1));
		bodKlasse.add(new BodKlasse(600, 3));
		List<Bod> ut = dataRepo.getBoder(bodKlasse);

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

	 Tester for KlasseRepository

	===============================

	 */

	@Test
	void populerKlasserTest() {
		Map<Integer, List<Integer>> bodKlasse = new HashMap<>();
		List<Integer> boder = new ArrayList<>();
		for (int i = 0; i < 400; i++) boder.add(i);
		bodKlasse.put(1, boder);
		bodKlasse.put(2, boder);
		bodKlasse.put(3, boder);

		List<Integer> opptatt = new ArrayList<>();
		for (int i = 5; i < 15; i++) opptatt.add(i);

//		assertEquals(bodKlasse.size(), klasseRepo.populerKlasser(bodKlasse, opptatt).size(), "");

		// Tester at populerKlasser håndterer null-verdier
		assertThrows(NullPointerException.class, () -> klasseRepo.populerklasser(null, null), "Gir ingen eller gal feilmelding dersom en eller begge listene som tas inn er null");
		assertThrows(NullPointerException.class, () -> klasseRepo.populerklasser(null, opptatt), "Gir ingen eller gal feilmelding dersom en eller begge listene som tas inn er null");
		assertThrows(NullPointerException.class, () -> klasseRepo.populerklasser(bodKlasse, null), "Gir ingen eller gal feilmelding dersom en eller begge listene som tas inn er null");
	}


	/*
	==================================

	 Tester for BodKlasseiRepository

	==================================

	 */
}

























