import { Step } from "@/lib/types"

export const lesson3: Step[] = [
  {
    type: "text",
    title: "📝 Typy danych w SQL",
    content:
`Każda kolumna w tabeli musi posiadać typ danych.

Typ danych określa:
👉 jakie informacje można zapisać  
👉 ile miejsca zajmą dane  
👉 jak baza będzie je przechowywać  

📌 Dobór odpowiedniego typu danych jest bardzo ważny.`,
  },

  {
    type: "text",
    title: "🔢 Typ INT",
    content:
`INT służy do przechowywania liczb całkowitych.

Przykłady:
✔ id użytkownika  
✔ wiek  
✔ liczba produktów  
✔ ilość punktów  

Przykład:
25
100
999

📌 INT nie przechowuje tekstu.`,
  },

  {
    type: "code",
    title: "👀 Przykład INT",
    content: `age INT`,
  },

  {
    type: "text",
    title: "🔤 Typ VARCHAR",
    content:
`VARCHAR służy do przechowywania krótkiego tekstu.

Najczęściej używa się go dla:
👉 loginów  
👉 emaili  
👉 nazw użytkowników  
👉 haseł  

📌 VARCHAR wymaga podania maksymalnej długości.`,
  },

  {
    type: "code",
    title: "👀 Przykład VARCHAR",
    content: `name VARCHAR(100)`,
  },

  {
    type: "text",
    title: "📄 Typ TEXT",
    content:
`TEXT służy do przechowywania dużej ilości tekstu.

Przykłady:
👉 komentarze  
👉 opisy produktów  
👉 artykuły  
👉 wiadomości  

📌 TEXT nie wymaga podawania długości.`,
  },

  {
    type: "code",
    title: "👀 Przykład TEXT",
    content: `description TEXT`,
  },

  {
    type: "text",
    title: "📅 Typ DATE",
    content:
`DATE służy do przechowywania dat.

Przykłady:
👉 data urodzenia  
👉 data zamówienia  
👉 data rejestracji  

Format:
YYYY-MM-DD

Przykład:
2025-05-11`,
  },

  {
    type: "code",
    title: "👀 Przykład DATE",
    content: `created_at DATE`,
  },

  {
    type: "text",
    title: "⚡ Typ BOOLEAN",
    content:
`BOOLEAN przechowuje wartości:
✔ TRUE  
✔ FALSE  

Często używany dla:
👉 aktywnego konta  
👉 statusu premium  
👉 ukończonych zadań`,
  },

  {
    type: "code",
    title: "👀 Przykład BOOLEAN",
    content: `is_admin BOOLEAN`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas wybierania typów danych uczniowie często popełniają błędy:

❌ używanie INT dla tekstu  
❌ ustawianie zbyt małego VARCHAR  
❌ używanie TEXT dla krótkich danych  
❌ błędny format DATE  

📌 Dobry typ danych poprawia wydajność bazy.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz tabelę products.

Dodaj kolumny:
👉 id — INT  
👉 name — VARCHAR  
👉 description — TEXT  
👉 price — INT  
👉 created_at — DATE  

📌 id ma posiadać:
✔ PRIMARY KEY
✔ AUTO_INCREMENT`,
  },

  {
    type: "quiz",
    question: "Który typ danych służy do przechowywania tekstu?",
    answers: [
      "INT",
      "BOOLEAN",
      "VARCHAR",
      "DATE",
    ],
    correct: 2,
    explanation:
`VARCHAR służy do przechowywania tekstu.`,
  },

  {
    type: "quiz",
    question: "Który typ danych służy do przechowywania dat?",
    answers: [
      "DATE",
      "TEXT",
      "VARCHAR",
      "INT",
    ],
    correct: 0,
    explanation:
`DATE służy do przechowywania dat w formacie YYYY-MM-DD.`,
  },
]

export const lesson3Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się typów danych SQL.

Zapamiętaj:

✔ INT przechowuje liczby  
✔ VARCHAR przechowuje krótki tekst  
✔ TEXT przechowuje długi tekst  
✔ DATE przechowuje daty  
✔ BOOLEAN przechowuje TRUE/FALSE  

Najważniejsze typy:
🔹 INT  
🔹 VARCHAR  
🔹 TEXT  
🔹 DATE  
🔹 BOOLEAN  

👉 Odpowiedni typ danych jest bardzo ważny podczas projektowania bazy danych.
`,
}