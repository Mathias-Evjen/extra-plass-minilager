linje = []

with open("bod.csv", "r") as f:
    c = 0
    for line in f:
        c += 1
        line = line.strip()
        line = line.split(";")
        for ord in line:
            linje.append(ord)
        if c == 2:
            break

print(linje)