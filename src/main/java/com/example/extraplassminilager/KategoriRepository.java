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

    private List<Kategori> kategorier;

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

    public void getKategorier() {
        try {
            List<Kategori> kategorier = db.query("SELECT * FROM Kategori", new KategoriRowMapper());
            logger.info("Hentet kategorier fra database");
            this.kategorier = kategorier;
        } catch (Exception e) {
            logger.error("Error: Kunne ikke hente kategorier fra databasen: " + e);
        }
    }

    // Går gjenom hver kategori og populerer med bodene som tilhører den kategorien
    public void populerKategorier(Map<Integer, Integer> bodKategorier, List<Integer> opptatt) {
        for (Kategori kategori : kategorier) {
            bodKategorier.forEach( (bodNr, katNr) -> {
                if (katNr == kategori.getNr()) {
                    kategori.addBoder(new Bod(bodNr, katNr));
                    kategori.incAntallBoder();
                }
            });
            kategori.settOpptatt(opptatt);
        }
    }

    public List<Kategori> sendKategorier(Map<Integer, Integer> bodKategorier, List<Integer> opptatt) {
        populerKategorier(bodKategorier, opptatt);
        return kategorier;
    }
}


























