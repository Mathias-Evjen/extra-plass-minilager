package com.example.extraplassminilager;

public class Data {
    private String bodNr;
    private String prisgruppe;

    public Data() {
    }

    public Data(String bodNr, String prisgruppe) {
        this.bodNr = bodNr;
        this.prisgruppe = prisgruppe;
    }

    public String getBodNr() {
        return bodNr;
    }

    public void setBodNr(String bodNr) {
        this.bodNr = bodNr;
    }

    public String getPrisgruppe() {
        return prisgruppe;
    }

    public void setPrisgruppe(String prisgruppe) {
        this.prisgruppe = prisgruppe;
    }

    @Override
    public String toString() {
        return "\nBodNr: " + bodNr + ", Prisgruppe: " + prisgruppe;
    }
}
