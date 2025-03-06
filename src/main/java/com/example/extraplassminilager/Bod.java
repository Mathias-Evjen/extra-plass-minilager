// ==================
//  Klasse for boder
// ==================


package com.example.extraplassminilager;

import java.util.Objects;

public class Bod {
    private int nr, klasseNr;
    private boolean erOpptatt = false;
    private int etasje;

    public Bod() {}

    public Bod(int nr) {
        this.nr = nr;
    }

    public Bod(int nr, int klasseNr, int etasje) {
        this.nr = nr;
        this.klasseNr = klasseNr;
        this.etasje = etasje;
    }

    public int getNr() {
        return nr;
    }

    public void setNr(int nr) {
        this.nr = nr;
    }

    public int getKlasseNr() {
        return klasseNr;
    }

    public void setKlasseNr(int klasseNr) {
        this.klasseNr = klasseNr;
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

    public void setEtasje(int etasje) {
        this.etasje = etasje;
    }

    public int getEtasje() {
        return this.etasje;
    }

    @Override
    public String toString() {
        return "BodNr: " + nr + ", KlasseNr: " + klasseNr + ", Etasje: " + etasje;
    }

    @Override
    public boolean equals(Object other) {
        return this.toString().equals(other.toString());
    }

    @Override
    public int hashCode() {
        return Objects.hash(nr, klasseNr, etasje);
    }
}
