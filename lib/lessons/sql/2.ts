import { Step } from "@/lib/types"

export const lesson2: Step[] = [
  {
    type: "text",
    title: "🧱 Tworzenie pierwszej bazy danych",
    content:
`W tej lekcji nauczysz się:
👉 tworzyć bazę danych  
👉 tworzyć tabele  
👉 dodawać kolumny  
👉 zapisywać strukturę tabeli  

📌 To jedna z najważniejszych umiejętności w SQL i na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🗄 Co to jest baza danych?",
    content:
`Baza danych przechowuje informacje aplikacji.

Przykłady:
👉 użytkownicy  
👉 produkty  
👉 zamówienia  
👉 wiadomości  

Jedna baza danych może zawierać wiele tabel.

📌 Przykład:
Baza danych sklepu może mieć:
✔ users  
✔ products  
✔ orders`,
  },

  {
    type: "text",
    title: "📋 Co to jest tabela?",
    content:
`Tabela przechowuje konkretne dane.

Przykład:
Tabela users przechowuje użytkowników.

Tabela składa się z:
👉 kolumn  
👉 rekordów  

Kolumny opisują typ danych.

Przykłady kolumn:
✔ id  
✔ name  
✔ email  
✔ password`,
  },

  {
    type: "text",
    title: "⚙ Jak utworzyć bazę danych w phpMyAdmin?",
    content:
`1️⃣ Otwórz:
http://localhost/phpmyadmin

2️⃣ Kliknij:
Nowa

3️⃣ Wpisz nazwę bazy danych:
school

4️⃣ Kliknij:
Utwórz

📌 Nazwy baz danych najlepiej pisać:
✔ małymi literami  
✔ bez spacji`,
  },

  {
    type: "text",
    title: "🧱 Jak utworzyć tabelę?",
    content:
`Po utworzeniu bazy danych:

1️⃣ Kliknij nazwę bazy danych po lewej stronie

2️⃣ W sekcji:
Utwórz nową tabelę

3️⃣ Wpisz nazwę:
users

4️⃣ Ustaw liczbę kolumn:
4

5️⃣ Kliknij:
Utwórz

📌 Tabela będzie przechowywać użytkowników.`,
  },

  {
    type: "text",
    title: "📦 Dodawanie kolumn",
    content:
`Przykładowe kolumny tabeli users:

✔ id  
✔ name  
✔ email  
✔ password  

Przykładowe typy danych:
👉 INT — liczby  
👉 VARCHAR — tekst  
👉 TEXT — długi tekst  

📌 VARCHAR najczęściej używa się dla:
✔ loginów  
✔ emaili  
✔ nazw`,
  },

  {
    type: "text",
    title: "🔑 PRIMARY KEY i AUTO_INCREMENT",
    content:
`Kolumna id najczęściej posiada:

✔ PRIMARY KEY  
✔ AUTO_INCREMENT  

PRIMARY KEY:
👉 unikalny identyfikator rekordu

AUTO_INCREMENT:
👉 automatyczne zwiększanie numeru id

Przykład:
1
2
3
4

📌 To bardzo ważne na egzaminie INF.03.`,
  },

  {
    type: "code",
    title: "👀 SQL tworzący tabelę",
    content: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);`,
  },

  {
    type: "text",
    title: "🔍 Co robi CREATE TABLE?",
    content:
`CREATE TABLE służy do tworzenia tabel.

Przykład:

CREATE TABLE users (...)

Elementy:
👉 CREATE TABLE — tworzenie tabeli  
👉 users — nazwa tabeli  
👉 INT — liczba  
👉 VARCHAR — tekst  

📌 Każda kolumna posiada:
✔ nazwę  
✔ typ danych`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas tworzenia tabel uczniowie często popełniają błędy:

❌ brak PRIMARY KEY  
❌ brak AUTO_INCREMENT  
❌ używanie spacji w nazwach  
❌ zły typ danych  
❌ brak przecinków między kolumnami  

📌 SQL jest bardzo wrażliwy na składnię.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Utwórz bazę danych:
school

3️⃣ Utwórz tabelę:
users

4️⃣ Dodaj kolumny:
👉 id
👉 name
👉 email
👉 password

5️⃣ Ustaw:
✔ PRIMARY KEY
✔ AUTO_INCREMENT dla id`,
  },

  {
    type: "quiz",
    question: "Do czego służy PRIMARY KEY?",
    answers: [
      "Do usuwania tabel",
      "Do stylowania tabel",
      "Do unikalnego identyfikowania rekordów",
      "Do uruchamiania serwera",
    ],
    correct: 2,
    explanation:
`PRIMARY KEY pozwala jednoznacznie identyfikować rekordy w tabeli.`,
  },

  {
    type: "quiz",
    question: "Który typ danych służy do przechowywania tekstu?",
    answers: [
      "INT",
      "VARCHAR",
      "AUTO_INCREMENT",
      "PRIMARY KEY",
    ],
    correct: 1,
    explanation:
`VARCHAR służy do przechowywania tekstu.`,
  },
]

export const lesson2Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się tworzyć bazę danych i tabelę.

Zapamiętaj:

✔ Baza danych może zawierać wiele tabel  
✔ Tabela składa się z kolumn i rekordów  
✔ CREATE TABLE tworzy tabelę  
✔ PRIMARY KEY identyfikuje rekord  
✔ AUTO_INCREMENT automatycznie zwiększa id  

Najważniejsze typy danych:
🔹 INT — liczby  
🔹 VARCHAR — tekst  
🔹 TEXT — długi tekst  

👉 To fundament wszystkich kolejnych operacji SQL.
`,
}