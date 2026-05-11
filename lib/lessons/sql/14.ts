import { Step } from "@/lib/types"

export const lesson14: Step[] = [
  {
    type: "text",
    title: "⬅ LEFT JOIN",
    content:
`W tej lekcji nauczysz się używać LEFT JOIN.

LEFT JOIN:
👉 łączy dane z tabel  
👉 pokazuje wszystkie rekordy z lewej tabeli  

📌 LEFT JOIN działa inaczej niż INNER JOIN.`,
  },

  {
    type: "text",
    title: "🧠 Co robi LEFT JOIN?",
    content:
`LEFT JOIN zwraca:
✔ wszystkie rekordy z lewej tabeli  
✔ pasujące rekordy z prawej tabeli  

Jeśli relacja nie istnieje:
👉 SQL pokaże NULL

📌 LEFT JOIN nie ukrywa brakujących danych.`,
  },

  {
    type: "text",
    title: "📋 Przykład tabel",
    content:
`Tabela users:

| id | name |
|----|------|
| 1  | Jan  |
| 2  | Anna |
| 3  | Adam |

Tabela orders:

| id | product | user_id |
|----|---------|--------|
| 1  | Laptop | 1 |
| 2  | Mouse  | 2 |

📌 Adam nie posiada zamówienia.`,
  },

  {
    type: "code",
    title: "👀 LEFT JOIN w SQL",
    content: `SELECT
  users.name,
  orders.product
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;`,
  },

  {
    type: "text",
    title: "🔍 Budowa LEFT JOIN",
    content:
`Elementy zapytania:

👉 FROM users
lewa tabela

👉 LEFT JOIN orders
prawa tabela

👉 ON users.id = orders.user_id
warunek połączenia

📌 Wszystkie rekordy z users zostaną pokazane.`,
  },

  {
    type: "text",
    title: "📦 Wynik LEFT JOIN",
    content:
`Wynik:

| name | product |
|------|---------|
| Jan  | Laptop |
| Anna | Mouse |
| Adam | NULL |

📌 Adam został pokazany mimo braku zamówienia.`,
  },

  {
    type: "text",
    title: "⚡ INNER JOIN vs LEFT JOIN",
    content:
`INNER JOIN:
👉 pokazuje tylko pasujące rekordy

LEFT JOIN:
👉 pokazuje wszystkie rekordy z lewej tabeli

📌 LEFT JOIN jest bardzo przydatny przy raportach i panelach administratora.`,
  },

  {
    type: "text",
    title: "⚙ LEFT JOIN w phpMyAdmin",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Wejdź w:
SQL

3️⃣ Wpisz zapytanie LEFT JOIN

4️⃣ Kliknij:
Wykonaj

📌 Wyniki pokażą również rekordy bez relacji.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania LEFT JOIN uczniowie często popełniają błędy:

❌ pomylenie LEFT JOIN z INNER JOIN  
❌ brak ON  
❌ złe kolumny relacji  
❌ odwrotna kolejność tabel  

📌 Kolejność tabel w LEFT JOIN ma znaczenie.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz zapytanie LEFT JOIN.

Połącz:
👉 users
👉 orders

Pobierz:
✔ users.name
✔ orders.product

📌 Użyj:
✔ LEFT JOIN
✔ ON`,
  },

  {
    type: "quiz",
    question: "Co pokazuje LEFT JOIN?",
    answers: [
      "Tylko rekordy z relacją",
      "Wszystkie rekordy z lewej tabeli",
      "Usunięte rekordy",
      "Tylko liczby",
    ],
    correct: 1,
    explanation:
`LEFT JOIN pokazuje wszystkie rekordy z lewej tabeli.`,
  },

  {
    type: "quiz",
    question: "Co pojawi się przy braku relacji?",
    answers: [
      "ERROR",
      "0",
      "FALSE",
      "NULL",
    ],
    correct: 3,
    explanation:
`NULL oznacza brak danych lub brak relacji.`,
  },
]

export const lesson14Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się LEFT JOIN.

Zapamiętaj:

✔ LEFT JOIN pokazuje wszystkie rekordy z lewej tabeli  
✔ Brak relacji zwraca NULL  
✔ Kolejność tabel ma znaczenie  
✔ LEFT JOIN działa inaczej niż INNER JOIN  

Najważniejsze elementy:
🔹 LEFT JOIN  
🔹 ON  
🔹 NULL  

👉 LEFT JOIN jest bardzo często używany w profesjonalnych aplikacjach.
`,
}