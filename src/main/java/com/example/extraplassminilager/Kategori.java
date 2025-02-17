package com.example.extraplassminilager;

import java.util.ArrayList;
import java.util.List;

public class Kategori {
    private int nr, antallBoder, antallOpptatt, pris;
    private float areal, volum;
    private List<Bod> boder = new ArrayList<>();
    private int[] boderIKLasse;

    public Kategori() {}

    public Kategori(int nr, float areal, float volum, int pris, int[] boderIKLasse) {
        this.nr = nr;
        this.areal = areal;
        this.volum = volum;
        this.antallBoder = boderIKLasse.length;
        this.pris = pris;
        this.boderIKLasse = boderIKLasse;
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

    public int getAntallOpptatt() {
        return antallOpptatt;
    }

    public void setAntallOpptatt(int antallOpptatt) {
        this.antallOpptatt = antallOpptatt;
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

    public int[] getBoderIKLasse() {
        return boderIKLasse;
    }

    public List<Bod> getBoder() {
        return boder;
    }

    public int antallLedig() {
        return antallBoder - antallOpptatt;
    }
}
