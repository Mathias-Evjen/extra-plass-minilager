// =======================
//  Klasse for klasser
// =======================

package com.example.extraplassminilager;

import java.util.ArrayList;
import java.util.List;

public class Klasse {
    private int nr, antallBoder, antallOpptatt, pris;
    private double areal, volum;
    private List<Bod> boder = new ArrayList<>();

    public Klasse() {}

    public Klasse(int nr, double areal, double volum, int pris) {
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

    public void inkrementerAntallBoder() {
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

    public double getAreal() {
        return areal;
    }

    public void setAreal(float areal) {
        this.areal = areal;
    }

    public double getVolum() {
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

    public void leggTilBoder(Bod bod) {
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

    @Override
    public String toString() {
        return "KlasseNr: " + nr + ", Areal: " + areal + ", Volum: " + volum + ", Pris: " + pris;
    }

    @Override
    public boolean equals(Object other) {
        return this.toString().equals(other.toString());
    }
}
















