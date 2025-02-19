// ===========================
//  Klasse for bodkategorier
// ===========================


package com.example.extraplassminilager;

public class BodKategori {
    private int bodNr;
    private int katNr;

    public BodKategori() {}

    public BodKategori(int bodNr, int katNr) {
        this.bodNr = bodNr;
        this.katNr = katNr;
    }

    public int getBodNr() {
        return bodNr;
    }

    public void setBodNr(int bodNr) {
        this.bodNr = bodNr;
    }

    public int getKatNr() {
        return katNr;
    }

    public void setKatNr(int katNr) {
        this.katNr = katNr;
    }
}
