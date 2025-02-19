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
        @Override
        public BodKategori mapRow(ResultSet rs, int rowNum) throws SQLException {
            BodKategori bodkat = new BodKategori();
            bodkat.setBodNr(rs.getInt("bodNr"));
            bodkat.setKatNr(rs.getInt("katNr"));
            return bodkat;
        }
    }

    public List<BodKategori> hentBodKategorier() {
        try {
            List<BodKategori> bodKategorier = db.query("SELECT * FROM BodKategori", new BodKategoriRowMapper());
            logger.info("(BodKategori Repository) Hentet bodkategoerier fra database");
            return bodKategorier;
        } catch (Exception e) {
            logger.error("Error:(BodKategori Repository) Kunne ikke hente bodkategorier fra database: " + e);
            return null;
        }
    }

    public Map<Integer, List<Integer>> bodKategoriMap() {
        Map<Integer, List<Integer>> bodKategorier = new HashMap<>();
        for (BodKategori bodKat : hentBodKategorier()) {
            bodKategorier.putIfAbsent(bodKat.getKatNr(), new ArrayList<>());
            bodKategorier.get(bodKat.getKatNr()).add(bodKat.getBodNr());
        }
        //System.out.println(bodKategorier);
        return bodKategorier;
    }
}































