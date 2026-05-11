import { Step } from "@/lib/types"

export const lesson8: Step[] = [
  {
    type: "text",
    title: "↕ ORDER BY i sortowanie danych",
    content:
`W tej lekcji nauczysz się sortować dane w SQL.

Do sortowania rekordów używa się:
👉 ORDER BY

📌 Dzięki ORDER BY możemy ustawiać kolejność wyników.`,
  },

  {
    type: "text",
    title: "🧠 Co robi ORDER BY?",
    content:
`ORDER BY sortuje rekordy.

Możemy sortować:
👉 od najmniejszej wartości  
👉 od największej wartości  
👉 alfabetycznie  
👉 według daty  

📌 ORDER BY działa razem z SELECT.`,
  },

  {
    type: "code",
    title: "👀 Podstawowe ORDER BY",
    content: `SELECT * FROM products
ORDER BY price;`,
  },

  {
    type: "text",
    title: "🔍 Jak działa ORDER BY?",
    content:
`Elementy zapytania:

👉 SELECT *
pobiera wszystkie dane

👉 FROM products
tabela products

👉 ORDER BY price
sortowanie według kolumny price

📌 Domyślnie SQL sortuje rosnąco.`,
  },

  {
    type: "text",
    title: "⬆ Sortowanie rosnące — ASC",
    content:
`ASC oznacza:
👉 rosnąco

Przykład:
1
2
3
4
5

lub:
A → Z

📌 ASC jest domyślnym sortowaniem.`,
  },

  {
    type: "code",
    title: "👀 ORDER BY ASC",
    content: `SELECT * FROM products
ORDER BY price ASC;`,
  },

  {
    type: "text",
    title: "⬇ Sortowanie malejące — DESC",
    content:
`DESC oznacza:
👉 malejąco

Przykład:
5
4
3
2
1

lub:
Z → A

📌 DESC często używa się dla:
✔ najnowszych produktów  
✔ najwyższych cen  
✔ największej liczby punktów`,
  },

  {
    type: "code",
    title: "👀 ORDER BY DESC",
    content: `SELECT * FROM products
ORDER BY price DESC;`,
  },

  {
    type: "text",
    title: "🔤 Sortowanie tekstu",
    content:
`ORDER BY działa również dla tekstu.

Przykład:
👉 sortowanie użytkowników po name

📌 SQL może sortować:
✔ tekst  
✔ liczby  
✔ daty`,
  },

  {
    type: "code",
    title: "👀 Sortowanie po nazwie",
    content: `SELECT * FROM users
ORDER BY name ASC;`,
  },

  {
    type: "text",
    title: "⚙ Jak sortować dane w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w:
SQL

4️⃣ Wpisz zapytanie ORDER BY

5️⃣ Kliknij:
Wykonaj

📌 Wyniki zostaną posortowane.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania ORDER BY uczniowie często popełniają błędy:

❌ brak nazwy kolumny  
❌ literówki w nazwach  
❌ używanie ORDER zamiast ORDER BY  
❌ pomylenie ASC i DESC  

📌 ORDER BY zawsze używa nazwy kolumny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz 2 zapytania SQL:

1️⃣ Posortuj produkty:
od najtańszych do najdroższych

2️⃣ Posortuj użytkowników:
od Z do A według name

📌 Użyj:
✔ ORDER BY
✔ ASC
✔ DESC`,
  },

  {
    type: "quiz",
    question: "Do czego służy ORDER BY?",
    answers: [
      "Do usuwania danych",
      "Do filtrowania danych",
      "Do sortowania danych",
      "Do tworzenia tabel",
    ],
    correct: 2,
    explanation:
`ORDER BY służy do sortowania rekordów.`,
  },

  {
    type: "quiz",
    question: "Które słowo oznacza sortowanie malejące?",
    answers: [
      "ASC",
      "DOWN",
      "DESC",
      "SORT",
    ],
    correct: 2,
    explanation:
`DESC oznacza sortowanie malejące.`,
  },
]

export const lesson8Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się sortowania danych za pomocą ORDER BY.

Zapamiętaj:

✔ ORDER BY sortuje rekordy  
✔ ASC oznacza rosnąco  
✔ DESC oznacza malejąco  
✔ Można sortować liczby, tekst i daty  

Najważniejsze elementy:
🔹 ORDER BY  
🔹 ASC  
🔹 DESC  

👉 Sortowanie danych jest bardzo często używane w aplikacjach i na egzaminie INF.03.
`,
}