// ====================================================
//  Repository for å hente ut kategorier fra databasen
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
public class KategoriRepository {

    @Autowired
    private JdbcTemplate db;

    Logger logger = LoggerFactory.getLogger(KategoriRepository.class);


    class KategoriRowMapper implements RowMapper<Kategori> {

        // Mapper rader fra datasett til Kategori-objekter
        @Override
        public Kategori mapRow(ResultSet rs, int rowNum) throws SQLException {
            Kategori kat = new Kategori();
            kat.setNr(rs.getInt("katNr"));
            kat.setAreal(rs.getFloat("areal"));
            kat.setVolum(rs.getFloat("volum"));
            kat.setPris(rs.getInt("pris"));
            return kat;
        }
    }

    // Henter kategori-info fra database og legger i kategori-objekt-liste
    // Returnerer liste med kategori-objekter
    public List<Kategori> getKategorierFromDatabase() {
        // Forsøker å hente ut data fra database
        try {
            List<Kategori> kategorier = db.query("SELECT * FROM Kategori", new KategoriRowMapper());
            logger.info("(Kategori Repository) Hentet kategorier fra database");
            return kategorier;
        // m den ikke klarer å hente data fra database skriver ut error og returnerer null
        } catch (Exception e) {
            logger.error("Error: (Kategori Repository) Kunne ikke hente kategorier fra databasen: " + e);
            return null;
        }
    }

    // Går gjenom hver kategori og populerer med bodene som tilhører den kategorien
    // Returnerer liste med populerte Kategori-objekter
    public List<Kategori> populerKategorier(Map<Integer, List<Integer>> bodKategorier, List<Integer> erOpptatt) {
        List<Kategori> kategorier = getKategorierFromDatabase();

        // Går gjennom alle Kategori-objektene
        for (Kategori kategori : kategorier) {

            // Går gjennom alle bodene som tilhører kategorien og oppretter Bod-objekter
            // Legger Bod-ojektene i listen over boder til Kategori-objektet
            for (int bodNr : bodKategorier.get(kategori.getNr())) {
                int etasje = 1;
                if (bodNr >= 400) etasje = -1;
                kategori.addBoder(new Bod(bodNr, kategori.getNr(), etasje));
                kategori.incAntallBoder();
            }

            kategori.settOpptatt(erOpptatt);    // Går gjennom alle Bod-objektene til kategorien og oppdaterer om de er opptatt eller ikke
        }

        return kategorier;
    }

    // Sender lise med kategori-objekter
    public List<Kategori> getKategorier(Map<Integer, List<Integer>> bodKategorier, List<Integer> opptatt) {
        return populerKategorier(bodKategorier, opptatt);
    }
}


























