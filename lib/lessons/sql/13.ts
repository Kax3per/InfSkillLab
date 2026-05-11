import { Step } from "@/lib/types"

export const lesson13: Step[] = [
  {
    type: "text",
    title: "🤝 INNER JOIN",
    content:
`W tej lekcji nauczysz się łączyć dane z wielu tabel.

Do łączenia rekordów używa się:
👉 JOIN

Najczęściej używany:
👉 INNER JOIN

📌 INNER JOIN jest bardzo ważny na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Co robi INNER JOIN?",
    content:
`INNER JOIN łączy rekordy z dwóch tabel.

Pokazuje tylko dane:
👉 które mają pasujące relacje

Przykład:
✔ użytkownik posiada zamówienie

📌 INNER JOIN ignoruje rekordy bez połączenia.`,
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

📌 user_id łączy tabele.`,
  },

  {
    type: "code",
    title: "👀 INNER JOIN w SQL",
    content: `SELECT
  users.name,
  orders.product
FROM orders
INNER JOIN users
ON orders.user_id = users.id;`,
  },

  {
    type: "text",
    title: "🔍 Budowa INNER JOIN",
    content:
`Elementy zapytania:

👉 SELECT
wybór danych

👉 FROM orders
główna tabela

👉 INNER JOIN users
łączenie tabeli users

👉 ON orders.user_id = users.id
warunek połączenia

📌 ON określa relację między tabelami.`,
  },

  {
    type: "text",
    title: "📦 Wynik INNER JOIN",
    content:
`Wynik:

| name | product |
|------|---------|
| Jan  | Laptop |
| Anna | Mouse |

📌 Dane zostały połączone z dwóch tabel.`,
  },

  {
    type: "text",
    title: "⚙ INNER JOIN w phpMyAdmin",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Wejdź w:
SQL

3️⃣ Wpisz zapytanie INNER JOIN

4️⃣ Kliknij:
Wykonaj

📌 phpMyAdmin pokaże połączone dane.`,
  },

  {
    type: "text",
    title: "🧩 Dlaczego używa się JOIN?",
    content:
`JOIN pozwala:
✔ łączyć dane  
✔ tworzyć profesjonalne aplikacje  
✔ pobierać dane z wielu tabel  
✔ unikać duplikatów  

📌 JOIN jest używany praktycznie wszędzie:
👉 sklepy internetowe
👉 systemy logowania
👉 social media`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania INNER JOIN uczniowie często popełniają błędy:

❌ brak ON  
❌ złe kolumny relacji  
❌ literówki w nazwach tabel  
❌ brak FOREIGN KEY  

📌 JOIN wymaga poprawnych relacji.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz zapytanie INNER JOIN.

Połącz:
👉 users
👉 orders

Pobierz:
✔ users.name
✔ orders.product

📌 Użyj:
✔ INNER JOIN
✔ ON`,
  },

  {
    type: "quiz",
    question: "Do czego służy INNER JOIN?",
    answers: [
      "Do usuwania danych",
      "Do łączenia tabel",
      "Do tworzenia tabel",
      "Do sortowania danych",
    ],
    correct: 1,
    explanation:
`INNER JOIN służy do łączenia rekordów z wielu tabel.`,
  },

  {
    type: "quiz",
    question: "Które słowo określa warunek połączenia tabel?",
    answers: [
      "WHERE",
      "VALUES",
      "SET",
      "ON",
    ],
    correct: 3,
    explanation:
`ON określa relację między tabelami podczas JOIN.`,
  },
]

export const lesson13Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się INNER JOIN.

Zapamiętaj:

✔ INNER JOIN łączy tabele  
✔ ON określa relację  
✔ JOIN pobiera dane z wielu tabel  
✔ Relacje są wymagane do poprawnego JOIN  

Najważniejsze elementy:
🔹 INNER JOIN  
🔹 ON  
🔹 FOREIGN KEY  

👉 JOIN to jedna z najważniejszych umiejętności SQL.
`,
}