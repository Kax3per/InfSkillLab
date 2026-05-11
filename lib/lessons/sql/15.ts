import { Step } from "@/lib/types"

export const lesson15: Step[] = [
  {
    type: "text",
    title: "➡ RIGHT JOIN",
    content:
`W tej lekcji nauczysz się używać RIGHT JOIN.

RIGHT JOIN:
👉 łączy dane z tabel  
👉 pokazuje wszystkie rekordy z prawej tabeli  

📌 RIGHT JOIN działa odwrotnie do LEFT JOIN.`,
  },

  {
    type: "text",
    title: "🧠 Co robi RIGHT JOIN?",
    content:
`RIGHT JOIN zwraca:
✔ wszystkie rekordy z prawej tabeli  
✔ pasujące rekordy z lewej tabeli  

Jeśli relacja nie istnieje:
👉 SQL pokaże NULL

📌 RIGHT JOIN nie ukrywa rekordów z prawej tabeli.`,
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

Tabela orders:

| id | product | user_id |
|----|---------|--------|
| 1  | Laptop | 1 |
| 2  | Mouse  | 2 |
| 3  | Phone  | NULL |

📌 Ostatnie zamówienie nie ma przypisanego użytkownika.`,
  },

  {
    type: "code",
    title: "👀 RIGHT JOIN w SQL",
    content: `SELECT
  users.name,
  orders.product
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;`,
  },

  {
    type: "text",
    title: "🔍 Budowa RIGHT JOIN",
    content:
`Elementy zapytania:

👉 FROM users
lewa tabela

👉 RIGHT JOIN orders
prawa tabela

👉 ON users.id = orders.user_id
warunek połączenia

📌 Wszystkie rekordy z orders zostaną pokazane.`,
  },

  {
    type: "text",
    title: "📦 Wynik RIGHT JOIN",
    content:
`Wynik:

| name | product |
|------|---------|
| Jan  | Laptop |
| Anna | Mouse |
| NULL | Phone |

📌 Zamówienie zostało pokazane mimo braku użytkownika.`,
  },

  {
    type: "text",
    title: "⚡ LEFT JOIN vs RIGHT JOIN",
    content:
`LEFT JOIN:
👉 pokazuje wszystkie rekordy z lewej tabeli

RIGHT JOIN:
👉 pokazuje wszystkie rekordy z prawej tabeli

📌 To praktycznie to samo — różni się kolejność tabel.`,
  },

  {
    type: "code",
    title: "👀 LEFT JOIN i RIGHT JOIN",
    content: `-- LEFT JOIN
SELECT *
FROM users
LEFT JOIN orders
ON users.id = orders.user_id;

-- RIGHT JOIN
SELECT *
FROM users
RIGHT JOIN orders
ON users.id = orders.user_id;`,
  },

  {
    type: "text",
    title: "⚙ RIGHT JOIN w phpMyAdmin",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Wejdź w:
SQL

3️⃣ Wpisz zapytanie RIGHT JOIN

4️⃣ Kliknij:
Wykonaj

📌 Wyniki pokażą wszystkie rekordy z prawej tabeli.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania RIGHT JOIN uczniowie często popełniają błędy:

❌ pomylenie LEFT JOIN z RIGHT JOIN  
❌ odwrotna kolejność tabel  
❌ brak ON  
❌ złe kolumny relacji  

📌 W RIGHT JOIN bardzo ważna jest kolejność tabel.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz zapytanie RIGHT JOIN.

Połącz:
👉 users
👉 orders

Pobierz:
✔ users.name
✔ orders.product

📌 Użyj:
✔ RIGHT JOIN
✔ ON`,
  },

  {
    type: "quiz",
    question: "Co pokazuje RIGHT JOIN?",
    answers: [
      "Wszystkie rekordy z lewej tabeli",
      "Tylko rekordy z relacją",
      "Wszystkie rekordy z prawej tabeli",
      "Usunięte rekordy",
    ],
    correct: 2,
    explanation:
`RIGHT JOIN pokazuje wszystkie rekordy z prawej tabeli.`,
  },

  {
    type: "quiz",
    question: "Który JOIN działa odwrotnie do LEFT JOIN?",
    answers: [
      "INNER JOIN",
      "RIGHT JOIN",
      "DELETE JOIN",
      "SELECT JOIN",
    ],
    correct: 1,
    explanation:
`RIGHT JOIN działa odwrotnie do LEFT JOIN.`,
  },
]

export const lesson15Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się RIGHT JOIN.

Zapamiętaj:

✔ RIGHT JOIN pokazuje wszystkie rekordy z prawej tabeli  
✔ Brak relacji zwraca NULL  
✔ Kolejność tabel ma znaczenie  
✔ RIGHT JOIN działa odwrotnie do LEFT JOIN  

Najważniejsze elementy:
🔹 RIGHT JOIN  
🔹 ON  
🔹 NULL  

👉 RIGHT JOIN pomaga analizować brakujące relacje w bazie danych.
`,
}