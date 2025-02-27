// =======================================================
//  Repository for å hente ut bodkategorier fra databasen
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
public class BodKategoriRepository {

    @Autowired
    private JdbcTemplate db;

    Logger logger = LoggerFactory.getLogger(BodKategoriRepository.class);

    class BodKategoriRowMapper implements RowMapper<BodKategori> {

        // Mapper rader fra datasett til BodKategori-objekter
        // Returnerer BodKategori-objekt
        @Override
        public BodKategori mapRow(ResultSet rs, int rowNum) throws SQLException {
            BodKategori bodkat = new BodKategori();
            bodkat.setBodNr(rs.getInt("bodNr"));
            bodkat.setKatNr(rs.getInt("katNr"));
            return bodkat;
        }
    }

    // Henter ut alle linjer fra BodKategori og legger i BodKategori-objekter
    // Returnerer en liste med BodKategori-objekter
    public List<BodKategori> hentBodKategorierFraDatabase() {
        // Forsøker å hente ut data fra database og legge i BodKategori-objekter
        try {
            List<BodKategori> bodKategorier = db.query("SELECT * FROM BodKategori", new BodKategoriRowMapper());
            logger.info("(BodKategori Repository) Hentet bodkategoerier fra database");
            return bodKategorier;
        // Om den ikke klarer å hente data fra database skriver ut error og returnerer null
        } catch (Exception e) {
            logger.error("Error:(BodKategori Repository) Kunne ikke hente bodkategorier fra database: " + e);
            return null;
        }
    }

    // Mapper BodKategorier til et HashMap
    //
    // Key: kategori
    // Value: Liste med boder tilhørende kategorien
    //
    // Returnerer mapet
    public Map<Integer, List<Integer>> bodKategoriMap() {
        Map<Integer, List<Integer>> bodKategorier = new HashMap<>();

        // Går gjennom liste med BodKategori-objekter og legger i et map
        // med katNr som nøkkel og liste med tilhørende bodNr som verdi
        for (BodKategori bodKat : hentBodKategorierFraDatabase()) {
            bodKategorier.putIfAbsent(bodKat.getKatNr(), new ArrayList<>());    // Oppretter ny liste om kategorien ikke allerede har en
            bodKategorier.get(bodKat.getKatNr()).add(bodKat.getBodNr());        // Legger til bodnr i lista tilhørende nøkkel
        }

        return bodKategorier;
    }
}































