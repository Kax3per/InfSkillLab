import { Step } from "@/lib/types"

export const lesson11: Step[] = [
  {
    type: "text",
    title: "❌ Usuwanie danych — DELETE",
    content:
`W tej lekcji nauczysz się usuwać rekordy z tabeli.

Do usuwania danych używa się:
👉 DELETE

📌 DELETE usuwa rekordy z bazy danych.`,
  },

  {
    type: "text",
    title: "🧠 Co robi DELETE?",
    content:
`DELETE usuwa dane z tabeli.

Przykłady:
👉 usunięcie użytkownika  
👉 usunięcie produktu  
👉 usunięcie wiadomości  
👉 usunięcie zamówienia  

📌 DELETE usuwa rekordy na stałe.`,
  },

  {
    type: "code",
    title: "👀 Podstawowy DELETE",
    content: `DELETE FROM users
WHERE id = 1;`,
  },

  {
    type: "text",
    title: "🔍 Budowa DELETE",
    content:
`Elementy zapytania:

👉 DELETE FROM users
wybór tabeli

👉 WHERE id = 1
wybór rekordu

📌 Zostanie usunięty rekord z id = 1.`,
  },

  {
    type: "text",
    title: "⚠ Bardzo ważne — WHERE",
    content:
`DELETE bez WHERE usunie WSZYSTKIE rekordy z tabeli.

Przykład NIEBEZPIECZNY:

DELETE FROM users;

📌 Wszystkie dane zostaną usunięte.`,
  },

  {
    type: "code",
    title: "👀 Usuwanie produktu",
    content: `DELETE FROM products
WHERE id = 3;`,
  },

  {
    type: "text",
    title: "⚙ Jak usuwać dane w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w:
Browse

4️⃣ Kliknij:
Usuń ❌

5️⃣ Potwierdź operację

📌 phpMyAdmin automatycznie używa DELETE.`,
  },

  {
    type: "text",
    title: "📋 Przykład działania DELETE",
    content:
`Przed DELETE:

| id | name |
|----|------|
| 1  | Jan  |
| 2  | Anna |

Po DELETE:

| id | name |
|----|------|
| 2  | Anna |

📌 Rekord został usunięty.`,
  },

  {
    type: "text",
    title: "🧱 DELETE a AUTO_INCREMENT",
    content:
`DELETE nie resetuje AUTO_INCREMENT.

Przykład:

Usunięto:
id = 2

Nowy rekord otrzyma:
id = 3

📌 Numery id nie cofają się automatycznie.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania DELETE uczniowie często popełniają błędy:

❌ brak WHERE  
❌ usuwanie złego rekordu  
❌ literówki w nazwach tabel  
❌ używanie DELETE zamiast UPDATE  

📌 DELETE bez WHERE jest bardzo niebezpieczny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz 2 zapytania DELETE:

1️⃣ Usuń użytkownika:
id = 2

2️⃣ Usuń produkt:
id = 5

📌 Użyj:
✔ DELETE
✔ FROM
✔ WHERE`,
  },

  {
    type: "quiz",
    question: "Do czego służy DELETE?",
    answers: [
      "Do pobierania danych",
      "Do usuwania rekordów",
      "Do tworzenia tabel",
      "Do aktualizacji danych",
    ],
    correct: 1,
    explanation:
`DELETE służy do usuwania rekordów z tabeli.`,
  },

  {
    type: "quiz",
    question: "Co stanie się po użyciu DELETE bez WHERE?",
    answers: [
      "Usunięty zostanie jeden rekord",
      "Nic się nie stanie",
      "Usunięte zostaną wszystkie rekordy",
      "Tabela zmieni nazwę",
    ],
    correct: 2,
    explanation:
`DELETE bez WHERE usuwa wszystkie rekordy z tabeli.`,
  },
]

export const lesson11Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się usuwać dane za pomocą DELETE.

Zapamiętaj:

✔ DELETE usuwa rekordy  
✔ FROM określa tabelę  
✔ WHERE wybiera rekord do usunięcia  
✔ DELETE bez WHERE usuwa wszystkie rekordy  

Najważniejsze elementy:
🔹 DELETE  
🔹 FROM  
🔹 WHERE  

👉 DELETE jest bardzo potężną i niebezpieczną komendą SQL.
`,
}