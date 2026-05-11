import { Step } from "@/lib/types"

export const lesson9: Step[] = [
  {
    type: "text",
    title: "🔍 LIKE i wyszukiwanie danych",
    content:
`W tej lekcji nauczysz się wyszukiwać dane w SQL.

Do wyszukiwania tekstu używa się:
👉 LIKE

📌 LIKE pozwala wyszukiwać fragmenty tekstu.`,
  },

  {
    type: "text",
    title: "🧠 Co robi LIKE?",
    content:
`LIKE porównuje tekst z podanym wzorem.

Możemy wyszukiwać:
👉 imiona  
👉 emaile  
👉 produkty  
👉 fragmenty nazw  

📌 LIKE działa razem z WHERE.`,
  },

  {
    type: "code",
    title: "👀 Podstawowe LIKE",
    content: `SELECT * FROM users
WHERE name LIKE 'Jan';`,
  },

  {
    type: "text",
    title: "🔍 Symbol %",
    content:
`% oznacza:
👉 dowolny ciąg znaków

Przykład:

'J%'

oznacza:
✔ Jan
✔ Jakub
✔ Julia

📌 % działa jak „cokolwiek”.`,
  },

  {
    type: "code",
    title: "👀 Wyszukiwanie od litery J",
    content: `SELECT * FROM users
WHERE name LIKE 'J%';`,
  },

  {
    type: "text",
    title: "🔤 Wyszukiwanie końcówki",
    content:
`Możemy wyszukiwać tekst kończący się na określone litery.

Przykład:

'%gmail.com'

📌 Zostaną znalezione wszystkie adresy Gmail.`,
  },

  {
    type: "code",
    title: "👀 Wyszukiwanie Gmail",
    content: `SELECT * FROM users
WHERE email LIKE '%gmail.com';`,
  },

  {
    type: "text",
    title: "🧩 Wyszukiwanie fragmentu tekstu",
    content:
`LIKE może wyszukiwać fragment tekstu.

Przykład:

'%an%'

znajdzie:
✔ Anna
✔ Joanna
✔ Sandra

📌 % można używać z obu stron tekstu.`,
  },

  {
    type: "code",
    title: "👀 Wyszukiwanie fragmentu",
    content: `SELECT * FROM users
WHERE name LIKE '%an%';`,
  },

  {
    type: "text",
    title: "⚙ Jak używać LIKE w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w:
SQL

4️⃣ Wpisz zapytanie LIKE

5️⃣ Kliknij:
Wykonaj

📌 Wyniki zostaną przefiltrowane.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania LIKE uczniowie często popełniają błędy:

❌ brak apostrofów ''  
❌ brak %  
❌ używanie LIKE bez WHERE  
❌ literówki w nazwach kolumn  

📌 LIKE działa tylko dla tekstu.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz 3 zapytania SQL:

1️⃣ Wyszukaj użytkowników:
zaczynających się na A

2️⃣ Wyszukaj email:
kończący się na gmail.com

3️⃣ Wyszukaj imiona:
zawierające "an"

📌 Użyj:
✔ WHERE
✔ LIKE
✔ %`,
  },

  {
    type: "quiz",
    question: "Do czego służy LIKE?",
    answers: [
      "Do tworzenia tabel",
      "Do wyszukiwania tekstu",
      "Do usuwania rekordów",
      "Do dodawania danych",
    ],
    correct: 1,
    explanation:
`LIKE służy do wyszukiwania tekstu według wzoru.`,
  },

  {
    type: "quiz",
    question: "Co oznacza symbol % w LIKE?",
    answers: [
      "Jedną literę",
      "Dowolny ciąg znaków",
      "Usunięcie danych",
      "Liczbę całkowitą",
    ],
    correct: 1,
    explanation:
`% oznacza dowolny ciąg znaków.`,
  },
]

export const lesson9Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się wyszukiwania danych za pomocą LIKE.

Zapamiętaj:

✔ LIKE wyszukuje tekst  
✔ LIKE działa z WHERE  
✔ % oznacza dowolny ciąg znaków  
✔ Można wyszukiwać początek, koniec lub fragment tekstu  

Najważniejsze elementy:
🔹 LIKE  
🔹 WHERE  
🔹 %  

👉 LIKE jest bardzo często używany w wyszukiwarkach i formularzach.
`,
}