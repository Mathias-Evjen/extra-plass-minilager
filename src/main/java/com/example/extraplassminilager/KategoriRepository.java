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
        try {
            List<Kategori> kategorier = db.query("SELECT * FROM Kategori", new KategoriRowMapper());
            logger.info("Hentet kategorier fra database");
            return kategorier;
        } catch (Exception e) {
            logger.error("Error: Kunne ikke hente kategorier fra databasen: " + e);
            return null;
        }
    }


    // Går gjennom hver kategori og populerer med bod-objekter som tilhører den kategorien
    // Returnerer liste med alle kategori-objekter
    public List<Kategori> populerKategorierFromDatabase(Map<Integer, List<Integer>> bodKategorier, List<Integer> opptatt) {
        List<Kategori> kategorier = getKategorierFromDatabase();

    // Går gjenom hver kategori og populerer med bodene som tilhører den kategorien
    public void populerKategorier(Map<Integer, Integer> bodKategorier, List<Integer> opptatt) {
        getKategorierFromDatabase();
        for (Kategori kategori : kategorier) {
            for (int bodNr : bodKategorier.get(kategori.getNr())) {
                kategori.addBoder(new Bod(bodNr, kategori.getNr()));
                kategori.incAntallBoder();
            }

            kategori.settOpptatt(opptatt);
        }
        return kategorier;
    }

    // Sender lise med kategori-objekter
    public List<Kategori> getKategorier(Map<Integer, List<Integer>> bodKategorier, List<Integer> opptatt) {
        List<Kategori> kategorier = populerKategorier(bodKategorier, opptatt);
        return kategorier;
    }
}


























