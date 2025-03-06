// ===========================
//  Klasse for bodklasser
// ===========================


package com.example.extraplassminilager;

public class BodKlasse {
    private int bodNr;
    private int klasseNr;

    public BodKlasse() {}

    public BodKlasse(int bodNr, int klasseNr) {
        this.bodNr = bodNr;
        this.klasseNr = klasseNr;
    }

    public int getBodNr() {
        return bodNr;
    }

    public void setBodNr(int bodNr) {
        this.bodNr = bodNr;
    }

    public int getKlasseNr() {
        return klasseNr;
    }

    public void setKlasseNr(int klasseNr) {
        this.klasseNr = klasseNr;
    }
}
