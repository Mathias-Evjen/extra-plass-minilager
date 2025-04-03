// ==============================================
//  Repository for å hente ut boder fra databasen
// ==============================================

package com.example.extraplassminilager;

import org.hibernate.event.spi.SaveOrUpdateEvent;
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

    private Map<String, List<Integer>> bodTilgjengelighet = new HashMap<>();

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

    // Oppretter bod-objekter og oppdaterer om de er ledige eller ikke
    // Returnerer liste med bod-objektene
    public List<Bod> getBoder(List<BodKlasse> bodKlasser) {
        if (bodKlasser.isEmpty()) throw new NullPointerException("Lista kan ikke være tom");

        List<Bod> boder = new ArrayList<>();

        // Går gjennom bodKlasse og oppretter Bod-objekter for alle bodene
        for (BodKlasse bodKlasse : bodKlasser) {
            // Setter bodens etasje som oppe dersom bodNr er under 400 og nede dersom bodNr er 400 eller over
            int etasje = 1;
            if (bodKlasse.getBodNr() >= 400) etasje = -1;
            boder.add(new Bod(bodKlasse.getBodNr(), bodKlasse.getKlasseNr(), etasje));   // Legger til Bod-objekt i boder-lista
        }

        return oppdaterOpptatteBoder(boder);
    }

    public List<Bod> oppdaterOpptatteBoder(List<Bod> boder) {
        // Går gjennom alle bodene og oppdaterer dere status som opptatt eller ledig
        for (Bod bod : boder) {
            // Går gjennom bodene i liste over bodNr som er opptatt
            for (int tatt : getOpptatt()) {
                // Dersom bodens bodNr finnes i opptatt settes boden som opptatt
                if (bod.getNr() == tatt) {
                    bod.settOpptatt();
                }
            }
        }
        return boder;
    }

    // Returnerer liste med alle bodnummere som er opptatt
    public List<Integer> getOpptatt() {
        if (!splittet) splitBoder(hentData());  // Sjekker om boder har blitt splittet, splitter om de ikke allerede er det
        List<Integer> erOpptatt = new ArrayList<>();

        // Går gjennom alle bodene i bodTilgjengelighet og oppdaterer status som opptatt eller ledig utifra prisgruppe
        bodTilgjengelighet.forEach( (tilgjengelighet, bodNrListe) -> {
            if (tilgjengelighet.equals("MND") ||
                    tilgjengelighet.equals("KVARTAL") ||
                    tilgjengelighet.equals("HALVÅR") ||
                    tilgjengelighet.equals("ÅR")) {
                for (int bodNr : bodNrListe) {
                    erOpptatt.add(bodNr);
                }
            }
        });
        return erOpptatt;
    }

    // Splitter linjer som har flere boder og lagrer i bodNr- og prisgruppe-array
    // Returnerer true dersom den klarte å splitte, ellers returnerer false
    public boolean splitBoder(List<Data> data) {
        // Forsøker å splitte boder
        try {
            for (Data linje : data) {
                String lNr = linje.getBodNr().replaceAll("\\s", "");    // Fjerner whitespace

                String[] nrs = lNr.split("[-/]+");  // Splitter på bindestrek og skråstrek

                for (String nr : nrs) {
                    bodTilgjengelighet.putIfAbsent(linje.getPrisgruppe(), new ArrayList<>());
                    bodTilgjengelighet.get(linje.getPrisgruppe()).add(Integer.parseInt(nr));
                }
            }
            logger.info("(Data Repository) Splittet linjer med flere boder");
            splittet = true;
            return true;
        // Om den ikke kan splitte bodene skriver ut error og returnerer false
        } catch (Exception e) {
            logger.error("(Data Repository) Formateringsfeil: Kunne ikke splitte boder: " + e);
            return false;
        }

    }

    // Henter ut alle linjer fra database Bod og legger i data-objekter
    // Returnerer liste med data-objekter
    public List<Data> hentData() {
        // Forsøker å hente data fra database og legge i Data-objekter
        try {
            List<Data> data = db.query("SELECT * FROM Bod", new DataRowMapper());
            logger.info("(Data Repository) Hentet boder fra database");
            return data;
        // Om den ikke klarer å hente data fra database skriver ut error og returnerer null
        } catch (Exception e) {
            logger.error("Error: (Data Repository) Kunne ikke hente boder fra databasen: " + e);
            return null;
        }
    }

    public Map<String, List<Integer>> getBodTilgjengelighet() {
        return bodTilgjengelighet;
    }

    public void setBodTilgjengelighetEmpty() {
        bodTilgjengelighet = new HashMap<>();
    }
}






















