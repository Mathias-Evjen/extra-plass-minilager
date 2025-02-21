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

    private Map<Integer, String> bodTilgjengelighet = new HashMap<>();

    private boolean splittet = false;

    Logger logger = LoggerFactory.getLogger(DataRepository.class);

    class DataRowMapper implements RowMapper<Data> {

        // Mapper rader fra datasett på klassen Data
        @Override
        public Data mapRow(ResultSet rs, int rowNum) throws SQLException {
            Data data = new Data();
            data.setBodNr(rs.getString("bodNr"));
            data.setPrisgruppe(rs.getString("prisgruppe"));
            return data;
        }
    }

    // Returnerer liste med alle bodnummere som er opptatt
    public List<Integer> getOpptatt() {
        if (!splittet) splitBoder(hentData());  // Sjekker om boder har blitt splittet, splitter om de ikke allerede er det
        List<Integer> erOpptatt = new ArrayList<>();

        // Går gjennom alle bodene i bodTilgjengelighet og oppdaterer status som opptatt eller ledig utifra prisgruppe
        bodTilgjengelighet.forEach( (bodNr, tilgjengelighet) -> {
            if (tilgjengelighet.equals("MND") || tilgjengelighet.equals("KVARTAL") || tilgjengelighet.equals("HALVÅR") || tilgjengelighet.equals("ÅR")) {
                erOpptatt.add(bodNr);
            }
        });

        //System.out.println(erOpptatt);
        return erOpptatt;
    }

    // Splitter linjer som har flere boder og lagrer i bodNr- og prisgruppe-array
    public void splitBoder(List<Data> data) {
        try {
            for (Data linje : data) {
                String lNr = linje.getBodNr().replaceAll("\\s", "");    // Fjerner whitespace

                String[] nrs = lNr.split("[-/]+");  // Splitter på bindestrek og skråstrek

                for (String nr : nrs) {
                    bodTilgjengelighet.put(Integer.parseInt(nr), linje.getPrisgruppe());    // Legger inn hver bod og dets tilhørende prisgruppe i bodTilgjengelighet
                }
            }
            logger.info("(Data Repository) Splittet linjer med flere boder");
            //System.out.println(bodTilgjengelighet);
            splittet = true;
        } catch (Exception e) {
            logger.error("(Data Repository) Formateringsfeil: Kunne ikke splitte boder: " + e);
        }

    }

    // Henter ut alle linjer fra database og legger i data-objekter
    // Returnerer liste med data-objekter
    public List<Data> hentData() {
        try {
            List<Data> data = db.query("SELECT * FROM Bod", new DataRowMapper());
            logger.info("(Data Repository) Hentet boder fra database");
            return data;
        } catch (Exception e) {
            logger.error("Error: (Data Repository) Kunne ikke hente boder fra databasen: " + e);
            return null;
        }
    }

    // Oppretter bod-objekter og oppdaterer om de er ledige eller ikke
    // Returnerer liste med bod-objektene
    public List<Bod> getBoder(List<BodKategori> bodKategori) {
        List<Bod> boder = new ArrayList<>();

        // Går gjennom bodKategori og oppretter Bod-objekter for alle bodene
        for (BodKategori bodKat : bodKategori) {
            int etasje = 1;
            if (bodKat.getBodNr() >= 400) etasje = -1;
            boder.add(new Bod(bodKat.getBodNr(), bodKat.getKatNr(), etasje));
        }

        // Går gjennom alle bodene og oppdaterer dere status som opptatt eller ledig
        for (Bod bod : boder) {
            for (int tatt : getOpptatt()) {
                if (bod.getNr() == tatt) {
                    bod.settOpptatt();
                }
            }
        }

        return boder;
    }
}






















