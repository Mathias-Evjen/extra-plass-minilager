CREATE TABLE IF NOT EXISTS Bod (
    kNr INT PRIMARY KEY,
    navn VARCHAR(255),
    prisgruppe VARCHAR(255),
    bodNr VARCHAR(255)
    );

INSERT INTO Bod (kNr, navn, prisgruppe, bodNr)
SELECT * FROM CSVREAD('file:src/main/resources/bod.csv', NULL, 'charset=UTF-8 fieldSeparator=;');

CREATE TABLE IF NOT EXISTS Kategori (
    katNr INT PRIMARY KEY,
    areal FLOAT,
    volum FLOAT,
    pris INT
);

INSERT INTO Kategori (katNr, areal, volum, pris)
SELECT * FROM CSVREAD('file:src/main/resources/kategori.csv');