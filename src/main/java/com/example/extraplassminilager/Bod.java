// ==================
//  Klasse for boder
// ==================


package com.example.extraplassminilager;

public class Bod {
    private int nr, katNr;
    private boolean erOpptatt = false;

    public Bod() {}

    public Bod(int nr) {
        this.nr = nr;
    }

    public Bod(int nr, int katNr) {
        this.nr = nr;
        this.katNr = katNr;
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

    public boolean getOpptatt() {
        if (erOpptatt) return true;
        return false;
    }
}
