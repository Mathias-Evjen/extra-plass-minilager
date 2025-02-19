// ==============================================
//  Repository for å hente ut boder fra databasen
// ==============================================

package com.example.extraplassminilager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Repository
public class DataRepository {
    @Autowired
    private JdbcTemplate db;

    private List<Integer> bodNr = new ArrayList<>();
    private List<String> prisgruppe = new ArrayList<>();

    private Map<Integer, String> bodTilgjengelighet = new HashMap<>();

    private boolean splittet = false;

    Logger logger = LoggerFactory.getLogger(DataRepository.class);

    class DataRowMapper implements RowMapper<Data> {
        @Override
        public Data mapRow(ResultSet rs, int rowNum) throws SQLException {
            Data data = new Data();
            data.setBodNr(rs.getString("bodNr"));
            data.setPrisgruppe(rs.getString("prisgruppe"));
            return data;
        }
    }

    public List<Integer> getBodNr() {
        splitBoder(hentData());
        return bodNr;
    }

    public List<Integer> getOpptatt() {
        if (!splittet) splitBoder(hentData());
        List<Integer> erOpptatt = new ArrayList<>();

        bodTilgjengelighet.forEach( (bodNr, tilgjengelighet) -> {
            if (tilgjengelighet.equals("MND") || tilgjengelighet.equals("KVARTAL") || tilgjengelighet.equals("HALVÅR") || tilgjengelighet.equals("ÅR")) {
                erOpptatt.add(bodNr);
            }
        });

        Collections.sort(erOpptatt);
        //System.out.println(erOpptatt);
        return erOpptatt;
    }

    // Splitter linjer som har flere boder og lagrer i bodNr- og prisgruppe-array
    public void splitBoder(List<Data> data) {
        try {
            for (Data linje : data) {
                String lNr = linje.getBodNr().replaceAll("\\s", "");

                String[] nrs = lNr.split("[-/]+");

                for (String nr : nrs) {
                    bodTilgjengelighet.put(Integer.parseInt(nr), linje.getPrisgruppe());
                }
            }
            logger.info("Splittet linjer med flere boder");
            //System.out.println(bodTilgjengelighet);
            splittet = true;
        } catch (Exception e) {
            logger.error("Formateringsfeil: Kunne ikke splitte boder: " + e);
        }

    }

    // Henter ut alle linjer fra database
    public List<Data> hentData() {
        try {
            List<Data> data = db.query("SELECT * FROM Bod", new DataRowMapper());
            logger.info("Hentet boder fra database");
            return data;
        } catch (Exception e) {
            logger.error("Error: Kunne ikke hente boder fra databasen: " + e);
            return null;
        }
    }

    public List<String> getPrisgruppe() {
        return prisgruppe;
    }
}
