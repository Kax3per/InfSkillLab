import { Step } from "@/lib/types"

export const lesson5: Step[] = [
  {
    type: "text",
    title: "➕ Dodawanie danych — INSERT INTO",
    content:
`W tej lekcji nauczysz się dodawać dane do tabeli.

Do dodawania rekordów używa się:
👉 INSERT INTO

📌 To jedna z najważniejszych komend SQL.`,
  },

  {
    type: "text",
    title: "🧠 Co robi INSERT INTO?",
    content:
`INSERT INTO dodaje nowy rekord do tabeli.

Przykłady:
👉 nowy użytkownik  
👉 nowy produkt  
👉 nowe zamówienie  
👉 nowa wiadomość  

📌 Każde dodanie danych tworzy nowy wiersz w tabeli.`,
  },

  {
    type: "code",
    title: "👀 Podstawowy INSERT INTO",
    content: `INSERT INTO users (
  name,
  email
)
VALUES (
  'Jan',
  'jan@gmail.com'
);`,
  },

  {
    type: "text",
    title: "🔍 Budowa zapytania INSERT",
    content:
`Elementy zapytania:

👉 INSERT INTO users
określa tabelę

👉 (name, email)
określa kolumny

👉 VALUES
oznacza wartości

👉 ('Jan', 'jan@gmail.com')
dane dodawane do tabeli

📌 Kolejność wartości musi zgadzać się z kolejnością kolumn.`,
  },

  {
    type: "text",
    title: "⚙ Jak dodać dane w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij bazę danych

3️⃣ Otwórz tabelę

4️⃣ Kliknij zakładkę:
Insert

5️⃣ Wpisz dane do pól

6️⃣ Kliknij:
Wykonaj

📌 phpMyAdmin sam wygeneruje zapytanie SQL.`,
  },

  {
    type: "text",
    title: "📋 Przykład dodanych rekordów",
    content:
`Tabela users:

| id | name | email |
|----|------|-------|
| 1  | Jan  | jan@gmail.com |
| 2  | Anna | anna@gmail.com |

📌 Każdy INSERT dodaje nowy rekord.`,
  },

  {
    type: "text",
    title: "⚡ AUTO_INCREMENT podczas INSERT",
    content:
`Jeśli kolumna id posiada:
✔ AUTO_INCREMENT

to nie trzeba wpisywać id ręcznie.

Przykład:

INSERT INTO users (
  name
)
VALUES (
  'Jan'
);

📌 Baza sama ustawi kolejne id.`,
  },

  {
    type: "code",
    title: "👀 INSERT bez podawania id",
    content: `INSERT INTO products (
  name,
  price
)
VALUES (
  'Laptop',
  3500
);`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania INSERT INTO uczniowie często popełniają błędy:

❌ zła kolejność wartości  
❌ brak apostrofów przy tekście  
❌ wpisywanie id mimo AUTO_INCREMENT  
❌ brak VALUES  
❌ brak przecinków  

📌 Tekst w SQL zapisujemy w apostrofach ''.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz zapytanie INSERT INTO dla tabeli users.

Dodaj:
👉 name
👉 email

Dane:
✔ Anna
✔ anna@gmail.com

📌 Nie wpisuj id ręcznie.`,
  },

  {
    type: "quiz",
    question: "Do czego służy INSERT INTO?",
    answers: [
      "Do pobierania danych",
      "Do usuwania tabel",
      "Do dodawania rekordów",
      "Do edytowania kolumn",
    ],
    correct: 2,
    explanation:
`INSERT INTO służy do dodawania nowych rekordów do tabeli.`,
  },

  {
    type: "quiz",
    question: "Które słowo służy do podania wartości?",
    answers: [
      "FROM",
      "VALUES",
      "WHERE",
      "DELETE",
    ],
    correct: 1,
    explanation:
`VALUES służy do podawania danych dodawanych do tabeli.`,
  },
]

export const lesson5Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się dodawania danych do tabeli.

Zapamiętaj:

✔ INSERT INTO dodaje rekordy  
✔ VALUES określa dane  
✔ Tekst zapisujemy w ''  
✔ AUTO_INCREMENT automatycznie ustawia id  

Najważniejsze elementy:
🔹 INSERT INTO  
🔹 VALUES  
🔹 rekord  
🔹 tabela  

👉 To podstawa pracy z danymi w SQL.
`,
}