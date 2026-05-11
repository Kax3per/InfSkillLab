import { Step } from "@/lib/types"

export const lesson10: Step[] = [
  {
    type: "text",
    title: "✏ Aktualizacja danych — UPDATE",
    content:
`W tej lekcji nauczysz się edytować dane w tabeli.

Do aktualizacji rekordów używa się:
👉 UPDATE

📌 UPDATE zmienia istniejące dane w bazie.`,
  },

  {
    type: "text",
    title: "🧠 Co robi UPDATE?",
    content:
`UPDATE pozwala zmieniać dane rekordów.

Przykłady:
👉 zmiana emaila użytkownika  
👉 zmiana ceny produktu  
👉 zmiana hasła  
👉 aktualizacja nazwy produktu  

📌 UPDATE nie dodaje nowych rekordów.`,
  },

  {
    type: "code",
    title: "👀 Podstawowy UPDATE",
    content: `UPDATE users
SET name = 'Anna'
WHERE id = 1;`,
  },

  {
    type: "text",
    title: "🔍 Budowa UPDATE",
    content:
`Elementy zapytania:

👉 UPDATE users
wybór tabeli

👉 SET
ustawienie nowych danych

👉 name = 'Anna'
nowa wartość

👉 WHERE id = 1
wybór rekordu

📌 WHERE określa który rekord ma zostać zmieniony.`,
  },

  {
    type: "text",
    title: "⚠ Bardzo ważne — WHERE",
    content:
`UPDATE bez WHERE zmieni WSZYSTKIE rekordy w tabeli.

Przykład NIEBEZPIECZNY:

UPDATE users
SET name = 'Test';

📌 Wszystkie rekordy otrzymają:
name = 'Test'`,
  },

  {
    type: "code",
    title: "👀 Aktualizacja kilku kolumn",
    content: `UPDATE products
SET
  name = 'Laptop',
  price = 5000
WHERE id = 2;`,
  },

  {
    type: "text",
    title: "⚙ Jak edytować dane w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w:
Browse

4️⃣ Kliknij:
Edytuj ✏

5️⃣ Zmień dane

6️⃣ Kliknij:
Wykonaj

📌 phpMyAdmin automatycznie używa UPDATE.`,
  },

  {
    type: "text",
    title: "📋 Przykład działania UPDATE",
    content:
`Przed UPDATE:

| id | name |
|----|------|
| 1  | Jan  |

Po UPDATE:

| id | name |
|----|------|
| 1  | Anna |

📌 UPDATE zmienia istniejące dane.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania UPDATE uczniowie często popełniają błędy:

❌ brak WHERE  
❌ brak SET  
❌ używanie == zamiast =  
❌ brak apostrofów przy tekście  
❌ literówki w nazwach kolumn  

📌 UPDATE bez WHERE jest bardzo niebezpieczny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz 2 zapytania UPDATE:

1️⃣ Zmień:
name = 'Adam'
dla:
id = 1

2️⃣ Zmień:
price = 2500
dla:
id = 3

📌 Użyj:
✔ UPDATE
✔ SET
✔ WHERE`,
  },

  {
    type: "quiz",
    question: "Do czego służy UPDATE?",
    answers: [
      "Do usuwania rekordów",
      "Do pobierania danych",
      "Do aktualizacji danych",
      "Do tworzenia tabel",
    ],
    correct: 2,
    explanation:
`UPDATE służy do zmieniania istniejących danych w tabeli.`,
  },

  {
    type: "quiz",
    question: "Które słowo określa nowe wartości w UPDATE?",
    answers: [
      "FROM",
      "SET",
      "VALUES",
      "SELECT",
    ],
    correct: 1,
    explanation:
`SET ustawia nowe wartości kolumn.`,
  },
]

export const lesson10Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się aktualizacji danych za pomocą UPDATE.

Zapamiętaj:

✔ UPDATE zmienia dane  
✔ SET ustawia nowe wartości  
✔ WHERE wybiera rekord  
✔ UPDATE bez WHERE zmienia wszystkie rekordy  

Najważniejsze elementy:
🔹 UPDATE  
🔹 SET  
🔹 WHERE  

👉 UPDATE jest bardzo często używany w aplikacjach internetowych.
`,
}