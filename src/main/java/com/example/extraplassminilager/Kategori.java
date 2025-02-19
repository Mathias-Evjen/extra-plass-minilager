// =======================
//  Klasse for kategorier
// =======================

package com.example.extraplassminilager;

import java.util.ArrayList;
import java.util.List;

public class Kategori {
    private int nr, antallBoder, antallOpptatt, pris;
    private float areal, volum;
    private List<Bod> boder = new ArrayList<>();

    public Kategori() {}

    public Kategori(int nr, float areal, float volum, int pris) {
        this.nr = nr;
        this.areal = areal;
        this.volum = volum;
        this.pris = pris;
    }

    public int getNr() {
        return nr;
    }

    public void setNr(int nr) {
        this.nr = nr;
    }

    public int getAntallBoder() {
        return antallBoder;
    }

    public void setAntallBoder(int antallBoder) {
        this.antallBoder = antallBoder;
    }

    public void incAntallBoder() {
        this.antallBoder++;
    }

    public int getAntallOpptatt() {
        return antallOpptatt;
    }

    public void setAntallOpptatt(int antallOpptatt) {
        this.antallOpptatt = antallOpptatt;
    }

    public void incAntallOpptatt() {
        this.antallOpptatt++;
    }

    public float getAreal() {
        return areal;
    }

    public void setAreal(float areal) {
        this.areal = areal;
    }

    public float getVolum() {
        return volum;
    }

    public void setVolum(float volum) {
        this.volum = volum;
    }

    public int getPris() {
        return pris;
    }

    public void setPris(int pris) {
        this.pris = pris;
    }

    public List<Bod> getBoder() {
        return this.boder;
    }

    public void addBoder(Bod bod) {
        this.boder.add(bod);
    }

    public void settOpptatt(List<Integer> opptatt) {
        for (int tatt : opptatt) {
            for (Bod bod : getBoder()) {
                if (bod.getNr() == tatt) {
                    bod.settOpptatt();
                    incAntallOpptatt();
                }
            }
        }
    }
}
















