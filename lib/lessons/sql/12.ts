import { Step } from "@/lib/types"

export const lesson12: Step[] = [
  {
    type: "text",
    title: "🔗 Relacje między tabelami",
    content:
`W tej lekcji nauczysz się łączyć tabele w bazie danych.

Relacje pozwalają:
👉 łączyć dane z różnych tabel  
👉 budować profesjonalne bazy danych  
👉 unikać powielania informacji  

📌 Relacje są podstawą nowoczesnych baz danych.`,
  },

  {
    type: "text",
    title: "🧠 Co to jest relacja?",
    content:
`Relacja to połączenie między tabelami.

Przykład:

Tabela users:
przechowuje użytkowników

Tabela orders:
przechowuje zamówienia

Relacja:
👉 zamówienie należy do użytkownika

📌 Dzięki relacjom dane są uporządkowane.`,
  },

  {
    type: "text",
    title: "📋 Przykład relacji",
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

📌 user_id wskazuje użytkownika.`,
  },

  {
    type: "text",
    title: "🔑 Co to jest FOREIGN KEY?",
    content:
`FOREIGN KEY oznacza:
👉 klucz obcy

Łączy tabelę z inną tabelą.

Przykład:
👉 user_id
łączy orders z users

📌 FOREIGN KEY najczęściej wskazuje PRIMARY KEY innej tabeli.`,
  },

  {
    type: "code",
    title: "👀 FOREIGN KEY w SQL",
    content: `CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product VARCHAR(100),
  user_id INT,
  FOREIGN KEY (user_id)
  REFERENCES users(id)
);`,
  },

  {
    type: "text",
    title: "🔍 Jak działa FOREIGN KEY?",
    content:
`Elementy:

👉 FOREIGN KEY (user_id)
kolumna relacji

👉 REFERENCES users(id)
połączenie z tabelą users

📌 user_id musi istnieć w tabeli users.`,
  },

  {
    type: "text",
    title: "⚙ Jak tworzyć relacje w phpMyAdmin?",
    content:
`1️⃣ Utwórz 2 tabele

2️⃣ Dodaj:
PRIMARY KEY w users

3️⃣ Dodaj:
user_id w orders

4️⃣ Wejdź w:
Structure

5️⃣ Kliknij:
Relation view

6️⃣ Połącz:
user_id → users.id

📌 phpMyAdmin utworzy relację.`,
  },

  {
    type: "text",
    title: "📦 Dlaczego relacje są ważne?",
    content:
`Relacje pozwalają:
✔ organizować dane  
✔ łączyć informacje  
✔ unikać duplikatów  
✔ tworzyć profesjonalne aplikacje  

📌 Relacje są używane:
👉 w sklepach internetowych  
👉 systemach logowania  
👉 social media  
👉 bankach`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas tworzenia relacji uczniowie często popełniają błędy:

❌ brak PRIMARY KEY  
❌ zły typ danych  
❌ relacja do złej kolumny  
❌ brak istniejących rekordów  

📌 Typ FOREIGN KEY musi zgadzać się z PRIMARY KEY.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz 2 tabele:

1️⃣ users
👉 id
👉 name

2️⃣ orders
👉 id
👉 product
👉 user_id

Następnie:
✔ ustaw PRIMARY KEY
✔ ustaw FOREIGN KEY
✔ połącz orders.user_id z users.id`,
  },

  {
    type: "quiz",
    question: "Do czego służy FOREIGN KEY?",
    answers: [
      "Do usuwania tabel",
      "Do tworzenia strony",
      "Do łączenia tabel",
      "Do sortowania danych",
    ],
    correct: 2,
    explanation:
`FOREIGN KEY służy do tworzenia relacji między tabelami.`,
  },

  {
    type: "quiz",
    question: "Która kolumna najczęściej jest łączona przez FOREIGN KEY?",
    answers: [
      "VARCHAR",
      "TEXT",
      "PRIMARY KEY",
      "DATE",
    ],
    correct: 2,
    explanation:
`FOREIGN KEY najczęściej wskazuje PRIMARY KEY innej tabeli.`,
  },
]

export const lesson12Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się relacji między tabelami.

Zapamiętaj:

✔ Relacje łączą tabele  
✔ FOREIGN KEY tworzy połączenie  
✔ FOREIGN KEY wskazuje PRIMARY KEY  
✔ Relacje organizują dane  

Najważniejsze elementy:
🔹 FOREIGN KEY  
🔹 PRIMARY KEY  
🔹 REFERENCES  

👉 Relacje są podstawą profesjonalnych baz danych.
`,
}