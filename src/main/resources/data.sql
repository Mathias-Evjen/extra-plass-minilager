CREATE TABLE IF NOT EXISTS Bod (
    Nr INT PRIMARY KEY,
    Navn VARCHAR(255),
    Kundeprisgruppe VARCHAR(255),
    Bodnummer VARCHAR(255)
    );

INSERT INTO Bod (Nr, Navn, Kundeprisgruppe, Bodnummer)
SELECT * FROM CSVREAD('file:src/main/resources/bod.csv', NULL, 'charset=UTF-8 fieldSeparator=;');