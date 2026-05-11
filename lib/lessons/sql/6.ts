import { Step } from "@/lib/types"

export const lesson6: Step[] = [
  {
    type: "text",
    title: "📖 Pobieranie danych — SELECT",
    content:
`W tej lekcji nauczysz się pobierać dane z tabel.

Do pobierania danych używa się:
👉 SELECT

📌 SELECT to najczęściej używana komenda SQL.`,
  },

  {
    type: "text",
    title: "🧠 Co robi SELECT?",
    content:
`SELECT pobiera dane z tabeli.

Możemy pobierać:
👉 wszystkich użytkowników  
👉 produkty  
👉 zamówienia  
👉 konkretne kolumny  

📌 SELECT nie zmienia danych w bazie.`,
  },

  {
    type: "code",
    title: "👀 Pobranie wszystkich danych",
    content: `SELECT * FROM users;`,
  },

  {
    type: "text",
    title: "🔍 Budowa SELECT",
    content:
`Elementy zapytania:

👉 SELECT
wybór danych

👉 *
wszystkie kolumny

👉 FROM users
tabela users

📌 * oznacza:
„wszystko”.`,
  },

  {
    type: "text",
    title: "📋 Jak wygląda wynik SELECT?",
    content:
`Tabela users:

| id | name | email |
|----|------|-------|
| 1  | Jan  | jan@gmail.com |
| 2  | Anna | anna@gmail.com |

Zapytanie:

SELECT * FROM users;

zwróci wszystkie rekordy z tabeli.`,
  },

  {
    type: "text",
    title: "🎯 Pobieranie konkretnych kolumn",
    content:
`Nie zawsze potrzebujemy wszystkich danych.

Możemy pobrać tylko wybrane kolumny.

Przykład:
👉 name
👉 email

📌 Dzięki temu zapytanie jest szybsze.`,
  },

  {
    type: "code",
    title: "👀 SELECT konkretnych kolumn",
    content: `SELECT name, email FROM users;`,
  },

  {
    type: "text",
    title: "⚙ Jak wykonać SELECT w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w zakładkę:
SQL

4️⃣ Wpisz zapytanie SELECT

5️⃣ Kliknij:
Wykonaj

📌 Wynik pojawi się poniżej.`,
  },

  {
    type: "text",
    title: "📦 Zakładka Browse",
    content:
`phpMyAdmin posiada zakładkę:
Browse

Służy ona do:
👉 podglądu rekordów  
👉 przeglądania danych  
👉 szybkiego sprawdzania tabeli  

📌 Browse działa podobnie do SELECT.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania SELECT uczniowie często popełniają błędy:

❌ brak FROM  
❌ literówki w nazwie tabeli  
❌ brak przecinków między kolumnami  
❌ brak średnika ;  

📌 SQL jest bardzo wrażliwy na składnię.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Wykonaj dwa zapytania SQL:

1️⃣ Pobierz wszystkie dane z tabeli users

2️⃣ Pobierz tylko:
👉 name
👉 email

📌 Wykonaj zadanie w phpMyAdmin.`,
  },

  {
    type: "quiz",
    question: "Do czego służy SELECT?",
    answers: [
      "Do usuwania danych",
      "Do pobierania danych",
      "Do tworzenia tabel",
      "Do dodawania rekordów",
    ],
    correct: 1,
    explanation:
`SELECT służy do pobierania danych z tabeli.`,
  },

  {
    type: "quiz",
    question: "Co oznacza symbol * w SELECT?",
    answers: [
      "Usuń tabelę",
      "Wszystkie rekordy",
      "Wszystkie kolumny",
      "Tylko id",
    ],
    correct: 2,
    explanation:
`* oznacza wszystkie kolumny tabeli.`,
  },
]

export const lesson6Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się pobierania danych za pomocą SELECT.

Zapamiętaj:

✔ SELECT pobiera dane  
✔ FROM określa tabelę  
✔ * oznacza wszystkie kolumny  
✔ Można pobierać konkretne kolumny  

Najważniejsze elementy:
🔹 SELECT  
🔹 FROM  
🔹 *  
🔹 Browse  

👉 SELECT to najważniejsza komenda SQL.
`,
}