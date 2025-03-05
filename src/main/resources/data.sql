CREATE TABLE IF NOT EXISTS Bod (
    klasseNr INT PRIMARY KEY,
    navn VARCHAR(255),
    prisgruppe VARCHAR(255),
    bodNr VARCHAR(255)
    );

INSERT INTO Bod (klasseNr, navn, prisgruppe, bodNr)
SELECT * FROM CSVREAD('file:src/main/resources/bod.csv', NULL, 'charset=UTF-8 fieldSeparator=;');

CREATE TABLE IF NOT EXISTS Klasse (
    klasseNr INT PRIMARY KEY,
    areal FLOAT,
    volum FLOAT,
    pris INT
);

INSERT INTO Klasse (klasseNr, areal, volum, pris)
SELECT * FROM CSVREAD('file:src/main/resources/klasse.csv');

CREATE TABLE IF NOT EXISTS BodKlasse (
      bodNr INT,
      klasseNr INT,
      primary key (bodNr, klasseNr)
);

INSERT INTO BodKlasse (bodNr, klasseNr)
SELECT * FROM CSVREAD('file:src/main/resources/bod-klasse.csv', NULL, 'charset=UTF-8 fieldSeparator=;');