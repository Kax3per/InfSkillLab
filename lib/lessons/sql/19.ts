import { Step } from "@/lib/types"

export const lesson19: Step[] = [
  {
    type: "text",
    title: "⚡ Indeksy i wydajność bazy danych",
    content:
`W tej lekcji nauczysz się:
👉 czym są indeksy  
👉 jak przyspieszają bazę danych  
👉 dlaczego wydajność SQL jest ważna  

📌 Indeksy są bardzo ważne w dużych aplikacjach.`,
  },

  {
    type: "text",
    title: "🧠 Co to jest indeks?",
    content:
`Indeks działa podobnie do:
👉 spisu treści w książce

Dzięki indeksowi MySQL:
✔ szybciej znajduje dane  
✔ szybciej wykonuje SELECT  
✔ poprawia wydajność aplikacji  

📌 Bez indeksów duże bazy działają wolniej.`,
  },

  {
    type: "text",
    title: "📦 Gdzie używa się indeksów?",
    content:
`Indeksy najczęściej dodaje się do:

✔ id  
✔ email  
✔ username  
✔ user_id  
✔ product_id  

📌 Indeksy stosuje się w kolumnach często wyszukiwanych.`,
  },

  {
    type: "code",
    title: "👀 Tworzenie indeksu",
    content: `CREATE INDEX idx_email
ON users(email);`,
  },

  {
    type: "text",
    title: "🔍 Jak działa CREATE INDEX?",
    content:
`Elementy zapytania:

👉 CREATE INDEX
tworzenie indeksu

👉 idx_email
nazwa indeksu

👉 ON users(email)
kolumna email tabeli users

📌 Od teraz wyszukiwanie email będzie szybsze.`,
  },

  {
    type: "text",
    title: "⚡ Jak indeks przyspiesza SQL?",
    content:
`Bez indeksu:
👉 MySQL sprawdza wszystkie rekordy

Z indeksem:
👉 MySQL szybciej znajduje dane

📌 Różnica jest ogromna przy tysiącach rekordów.`,
  },

  {
    type: "code",
    title: "👀 SELECT korzystający z indeksu",
    content: `SELECT *
FROM users
WHERE email = 'test@gmail.com';`,
  },

  {
    type: "text",
    title: "⚙ Indeksy w phpMyAdmin",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w:
Structure

4️⃣ Wybierz kolumnę

5️⃣ Kliknij:
Index

6️⃣ Zapisz zmiany

📌 phpMyAdmin utworzy indeks automatycznie.`,
  },

  {
    type: "text",
    title: "🛡 Kiedy NIE używać indeksów?",
    content:
`Zbyt dużo indeksów może:
❌ spowolnić INSERT  
❌ spowolnić UPDATE  
❌ zajmować miejsce na dysku  

📌 Indeksy powinny być używane rozsądnie.`,
  },

  {
    type: "text",
    title: "📋 PRIMARY KEY a indeks",
    content:
`PRIMARY KEY automatycznie tworzy indeks.

Przykład:

id INT PRIMARY KEY

📌 Nie trzeba tworzyć dodatkowego indeksu dla PRIMARY KEY.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z indeksami uczniowie często popełniają błędy:

❌ dodawanie indeksów do wszystkich kolumn  
❌ brak indeksu dla email  
❌ tworzenie wielu niepotrzebnych indeksów  
❌ mylenie PRIMARY KEY z INDEX  

📌 Najważniejsze są indeksy dla często wyszukiwanych danych.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz tabelę:
users

Dodaj kolumny:
✔ id
✔ email
✔ username

Następnie:
👉 dodaj indeks dla email
👉 dodaj indeks dla username

📌 Użyj:
✔ CREATE INDEX`,
  },

  {
    type: "quiz",
    question: "Do czego służy indeks w SQL?",
    answers: [
      "Do usuwania rekordów",
      "Do przyspieszania wyszukiwania danych",
      "Do tworzenia użytkowników",
      "Do eksportu bazy danych",
    ],
    correct: 1,
    explanation:
`Indeksy przyspieszają wyszukiwanie danych w bazie.`,
  },

  {
    type: "quiz",
    question: "Która kolumna często posiada indeks?",
    answers: [
      "email",
      "background",
      "font-size",
      "padding",
    ],
    correct: 0,
    explanation:
`Kolumna email bardzo często posiada indeks.`,
  },
]

export const lesson19Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się czym są indeksy SQL.

Zapamiętaj:

✔ Indeksy przyspieszają wyszukiwanie danych  
✔ CREATE INDEX tworzy indeks  
✔ PRIMARY KEY automatycznie tworzy indeks  
✔ Zbyt dużo indeksów może spowalniać bazę  

Najważniejsze elementy:
🔹 CREATE INDEX  
🔹 PRIMARY KEY  
🔹 INDEX  

👉 Indeksy są bardzo ważne dla wydajności profesjonalnych aplikacji.
`,
}