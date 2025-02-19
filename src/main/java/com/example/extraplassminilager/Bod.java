// ==================
//  Klasse for boder
// ==================


package com.example.extraplassminilager;

public class Bod {
    private int nr, katNr;
    private boolean erOpptatt;

    public Bod() {}

    public Bod(int nr) {
        this.nr = nr;
        this.erOpptatt = false;
    }

    public Bod(int nr, int katNr) {
        this.nr = nr;
        this.katNr = katNr;
        this.erOpptatt = false;
    }

    public int getNr() {
        return nr;
    }

    public void setNr(int nr) {
        this.nr = nr;
    }

    public int getKatNr() {
        return katNr;
    }

    public void setKatNr(int katNr) {
        this.katNr = katNr;
    }

    public void settLedig() {
        this.erOpptatt = false;
    }

    public void settOpptatt() {
        this.erOpptatt = true;
    }
}
