// =======================================================
//  Repository for å hente ut bodklasser fra databasen
// =======================================================

package com.example.extraplassminilager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class BodKlasseRepository {

    @Autowired
    private JdbcTemplate db;

    Logger logger = LoggerFactory.getLogger(BodKlasseRepository.class);

    class BodKlasseRowMapper implements RowMapper<BodKlasse> {

        // Mapper rader fra datasett til BodKlasse-objekter
        // Returnerer BodKlasse-objekt
        @Override
        public BodKlasse mapRow(ResultSet rs, int rowNum) throws SQLException {
            BodKlasse bodklasse = new BodKlasse();
            bodklasse.setBodNr(rs.getInt("bodNr"));
            bodklasse.setKlasseNr(rs.getInt("klasseNr"));
            return bodklasse;
        }
    }

    // Henter ut alle linjer fra BodKlasser og legger i BodKlasse-objekter
    // Returnerer en liste med BodKlasse-objekter
    public List<BodKlasse> hentBodKlasserFraDatabase() {
        // Forsøker å hente ut data fra database og legge i BodKlasse-objekter
        try {
            List<BodKlasse> bodKlasser = db.query("SELECT * FROM BodKlasse", new BodKlasseRowMapper());
            logger.info("(BodKlasse Repository) Hentet bodklasserr fra database");
            return bodKlasser;
        // Om den ikke klarer å hente data fra database skriver ut error og returnerer null
        } catch (Exception e) {
            logger.error("Error:(BodKlasse Repository) Kunne ikke hente bodklasser fra database: " + e);
            return null;
        }
    }

    // Mapper Bodklasser til et HashMap
    //
    // Key: klasse
    // Value: Liste med boder tilhørende klassen
    //
    // Returnerer mapet
    public Map<Integer, List<Integer>> opprettBodKlasseMap(List<BodKlasse> bodKlasser) {
        Map<Integer, List<Integer>> bodklasser = new HashMap<>();

        // Går gjennom liste med BodKlasse-objekter og legger i et map
        // med katNr som nøkkel og liste med tilhørende bodNr som verdi
        for (BodKlasse bodKat : bodKlasser) {
            bodklasser.putIfAbsent(bodKat.getKlasseNr(), new ArrayList<>());    // Oppretter ny liste om klassen ikke allerede har en
            bodklasser.get(bodKat.getKlasseNr()).add(bodKat.getBodNr());        // Legger til bodnr i lista tilhørende nøkkel
        }

        return bodklasser;
    }
}































