import { Step } from "@/lib/types"

export const lesson16: Step[] = [
  {
    type: "text",
    title: "📊 GROUP BY i COUNT",
    content:
`W tej lekcji nauczysz się grupować i zliczać dane w SQL.

Najważniejsze elementy:
👉 GROUP BY  
👉 COUNT()

📌 Są one bardzo często używane w raportach i statystykach.`,
  },

  {
    type: "text",
    title: "🧠 Co robi COUNT()?",
    content:
`COUNT() zlicza rekordy.

Możemy policzyć:
👉 użytkowników  
👉 produkty  
👉 zamówienia  
👉 komentarze  

📌 COUNT() zwraca liczbę rekordów.`,
  },

  {
    type: "code",
    title: "👀 Liczenie rekordów",
    content: `SELECT COUNT(*) FROM users;`,
  },

  {
    type: "text",
    title: "🔍 Jak działa COUNT()?",
    content:
`Elementy zapytania:

👉 COUNT(*)
zliczanie rekordów

👉 FROM users
tabela users

📌 * oznacza wszystkie rekordy.`,
  },

  {
    type: "text",
    title: "🧱 Co robi GROUP BY?",
    content:
`GROUP BY grupuje rekordy.

Możemy grupować:
👉 produkty według kategorii  
👉 użytkowników według miasta  
👉 zamówienia według użytkownika  

📌 GROUP BY tworzy grupy danych.`,
  },

  {
    type: "code",
    title: "👀 GROUP BY",
    content: `SELECT city, COUNT(*)
FROM users
GROUP BY city;`,
  },

  {
    type: "text",
    title: "📋 Przykład GROUP BY",
    content:
`Tabela users:

| id | name | city |
|----|------|------|
| 1  | Jan  | Warszawa |
| 2  | Anna | Kraków |
| 3  | Adam | Warszawa |

Wynik:

| city | COUNT |
|------|------|
| Warszawa | 2 |
| Kraków | 1 |

📌 Dane zostały pogrupowane według city.`,
  },

  {
    type: "text",
    title: "⚡ COUNT(id) vs COUNT(*)",
    content:
`COUNT(*) 
👉 liczy wszystkie rekordy

COUNT(id)
👉 liczy tylko wartości id

📌 Najczęściej używa się COUNT(*).`,
  },

  {
    type: "code",
    title: "👀 COUNT z GROUP BY",
    content: `SELECT user_id, COUNT(*)
FROM orders
GROUP BY user_id;`,
  },

  {
    type: "text",
    title: "⚙ GROUP BY w phpMyAdmin",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Wejdź w:
SQL

3️⃣ Wpisz zapytanie GROUP BY

4️⃣ Kliknij:
Wykonaj

📌 phpMyAdmin pokaże pogrupowane dane.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania GROUP BY uczniowie często popełniają błędy:

❌ brak GROUP BY przy COUNT  
❌ złe nazwy kolumn  
❌ literówki  
❌ używanie GROUP zamiast GROUP BY  

📌 GROUP BY grupuje dane według kolumny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz 2 zapytania SQL:

1️⃣ Policz wszystkich użytkowników

2️⃣ Pogrupuj użytkowników:
według city

📌 Użyj:
✔ COUNT()
✔ GROUP BY`,
  },

  {
    type: "quiz",
    question: "Do czego służy COUNT()?",
    answers: [
      "Do usuwania danych",
      "Do liczenia rekordów",
      "Do tworzenia tabel",
      "Do aktualizacji danych",
    ],
    correct: 1,
    explanation:
`COUNT() służy do zliczania rekordów.`,
  },

  {
    type: "quiz",
    question: "Do czego służy GROUP BY?",
    answers: [
      "Do grupowania danych",
      "Do usuwania rekordów",
      "Do sortowania danych",
      "Do tworzenia relacji",
    ],
    correct: 0,
    explanation:
`GROUP BY służy do grupowania rekordów według kolumny.`,
  },
]

export const lesson16Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się GROUP BY i COUNT().

Zapamiętaj:

✔ COUNT() liczy rekordy  
✔ GROUP BY grupuje dane  
✔ GROUP BY często działa z COUNT()  
✔ Można tworzyć statystyki i raporty  

Najważniejsze elementy:
🔹 COUNT()  
🔹 GROUP BY  

👉 GROUP BY i COUNT są bardzo często używane w profesjonalnych aplikacjach.
`,
}