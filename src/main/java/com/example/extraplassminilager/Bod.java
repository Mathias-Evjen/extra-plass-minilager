package com.example.extraplassminilager;

public class Bod {
    private int nr, katNr;
    private String prisgruppe;
    private boolean erOpptatt = false;

    public Bod() {}

    public Bod(int nr, String prisgruppe) {
        this.nr = nr;
        this.prisgruppe = prisgruppe;
    }

    public Bod(int nr, String prisgruppe, int katNr) {
        this.nr = nr;
        this.prisgruppe = prisgruppe;
        this.katNr = katNr;
    }

    public int getNr() {
        return nr;
    }

    public void setNr(int nr) {
        this.nr = nr;
    }

    public String getPrisgruppe() {
        return prisgruppe;
    }

    public void setPrisgruppe(String prisgruppe) {
        this.prisgruppe = prisgruppe;
    }

    public int getKatNr() {
        return katNr;
    }

    public void setKatNr(int katNr) {
        this.katNr = katNr;
    }

    public boolean sjekkLedig() {
        if (prisgruppe.equals("FLYTTET")) {
            return true;
        }
        return false;
    }
}
