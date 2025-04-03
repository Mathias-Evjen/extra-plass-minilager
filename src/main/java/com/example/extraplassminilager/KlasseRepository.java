// ====================================================
//  Repository for å hente ut klasser fra databasen
// ====================================================

package com.example.extraplassminilager;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Repository
public class KlasseRepository {

    @Autowired
    private JdbcTemplate db;

    Logger logger = LoggerFactory.getLogger(KlasseRepository.class);


    class klasseRowMapper implements RowMapper<Klasse> {

        // Mapper rader fra datasett til Klasse-objekter
        @Override
        public Klasse mapRow(ResultSet rs, int rowNum) throws SQLException {
            Klasse klasse = new Klasse();
            klasse.setNr(rs.getInt("klasseNr"));
            klasse.setAreal(rs.getFloat("areal"));
            klasse.setVolum(rs.getFloat("volum"));
            klasse.setPris(rs.getInt("pris"));
            return klasse;
        }
    }

    // Går gjenom hver klasse og populerer med bodene som tilhører den klassen
    // Returnerer liste med populerte Klasse-objekter
    public List<Klasse> populerKlasser(Map<Integer, List<Integer>> bodKlasser, List<Integer> erOpptatt, List<Klasse> klasser) {
        // Går gjennom alle Klasse-objektene
        for (Klasse klasse : klasser) {

            // Går gjennom alle bodene som tilhører klassen og oppretter Bod-objekter
            // Legger Bod-ojektene i listen over boder til Klasse-objektet
            for (int bodNr : bodKlasser.get(klasse.getNr())) {
                int etasje = 1;
                if (bodNr >= 400) etasje = -1;
                klasse.leggTilBoder(new Bod(bodNr, klasse.getNr(), etasje));
                klasse.inkrementerAntallBoder();
            }

            klasse.settOpptatt(erOpptatt);    // Går gjennom alle Bod-objektene til klassen og oppdaterer om de er opptatt eller ikke
        }

        return klasser;
    }

    // Henter klasse-info fra database og legger i klasse-objekt-liste
    // Returnerer liste med klasse-objekter
    public List<Klasse> hentKlasserFraDatabase() {
        // Forsøker å hente ut data fra database
        try {
            List<Klasse> klasser = db.query("SELECT * FROM klasse", new klasseRowMapper());
            logger.info("(Klasse Repository) Hentet klasser fra database");
            return klasser;
        // m den ikke klarer å hente data fra database skriver ut error og returnerer null
        } catch (Exception e) {
            logger.error("Error: (Klasse Repository) Kunne ikke hente klasser fra databasen: " + e);
            return null;
        }
    }
}


























