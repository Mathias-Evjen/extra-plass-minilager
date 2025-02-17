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
import java.util.List;

@Repository
public class DataRepository {
    @Autowired
    private JdbcTemplate db;

    private List<Integer> bodNr = new ArrayList<>();
    private List<String> prisgruppe = new ArrayList<>();

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

        for (int i = 0; i < bodNr.size(); i++) {
            //System.out.println(prisgruppe.get(i));
            if (prisgruppe.get(i).equals("MND") || prisgruppe.get(i).equals("ÅR") || prisgruppe.get(i).equals("HALVÅR") || prisgruppe.get(i).equals("KVARTAL")) {
                erOpptatt.add(bodNr.get(i));
            }
        }
        return erOpptatt;
    }

    // Splitter linjer som har flere boder og lagrer i bodNr- og prisgruppe-array
    public void splitBoder(List<Data> data) {
        for (Data linje : data) {
            String lNr = linje.getBodNr().replaceAll("\\s", "");

            String[] nrs = lNr.split("[-/]+");

            for (String nr : nrs) {
                bodNr.add(Integer.parseInt(nr));
                prisgruppe.add(linje.getPrisgruppe());
            }
        }
        splittet = true;
    }

    // Henter ut alle linjer fra database
    public List<Data> hentData() {
        List<Data> data = db.query("SELECT * FROM Bod", new DataRowMapper());
        //System.out.println(data);
        return data;
    }

    public List<String> getPrisgruppe() {
        return prisgruppe;
    }
}
