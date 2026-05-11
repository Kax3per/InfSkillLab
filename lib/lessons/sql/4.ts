import { Step } from "@/lib/types"

export const lesson4: Step[] = [
  {
    type: "text",
    title: "🔑 PRIMARY KEY i AUTO_INCREMENT",
    content:
`W tej lekcji poznasz dwa bardzo ważne elementy baz danych:

👉 PRIMARY KEY  
👉 AUTO_INCREMENT  

Są one używane praktycznie w każdej profesjonalnej bazie danych.

📌 Na egzaminie INF.03 bardzo często pojawiają się pytania dotyczące kluczy głównych.`,
  },

  {
    type: "text",
    title: "🧠 Co to jest PRIMARY KEY?",
    content:
`PRIMARY KEY oznacza klucz główny tabeli.

Jego zadaniem jest:
👉 jednoznaczne identyfikowanie rekordów  

Każdy rekord musi posiadać:
✔ unikalne id  
✔ inną wartość niż pozostałe rekordy  

📌 PRIMARY KEY nie może się powtarzać.`,
  },

  {
    type: "text",
    title: "📋 Przykład działania PRIMARY KEY",
    content:
`Tabela users:

| id | name |
|----|------|
| 1  | Jan  |
| 2  | Anna |
| 3  | Adam |

Kolumna id:
✔ jest unikalna  
✔ identyfikuje użytkownika  

📌 Nie można dodać drugiego rekordu z id = 1.`,
  },

  {
    type: "code",
    title: "👀 PRIMARY KEY w SQL",
    content: `id INT PRIMARY KEY`,
  },

  {
    type: "text",
    title: "⚡ Co to jest AUTO_INCREMENT?",
    content:
`AUTO_INCREMENT automatycznie zwiększa wartość liczbową.

Przykład:

1
2
3
4
5

Po dodaniu nowego rekordu baza sama nada kolejne id.

📌 Dzięki temu nie musimy ręcznie wpisywać numerów.`,
  },

  {
    type: "code",
    title: "👀 AUTO_INCREMENT w SQL",
    content: `id INT AUTO_INCREMENT PRIMARY KEY`,
  },

  {
    type: "text",
    title: "⚙ Jak ustawić PRIMARY KEY w phpMyAdmin?",
    content:
`1️⃣ Otwórz tabelę

2️⃣ Wejdź w zakładkę:
Structure

3️⃣ Przy kolumnie id zaznacz:
A_I

(AUTO_INCREMENT)

4️⃣ Kliknij ikonę klucza 🔑

📌 Kolumna stanie się PRIMARY KEY.`,
  },

  {
    type: "text",
    title: "📦 Dlaczego używa się id?",
    content:
`Kolumna id jest standardem w bazach danych.

Najczęściej:
✔ id użytkownika  
✔ id produktu  
✔ id zamówienia  

Dzięki temu:
👉 łatwo wyszukiwać rekordy  
👉 tworzyć relacje między tabelami  
👉 aktualizować dane`,
  },

  {
    type: "code",
    title: "👀 Tworzenie tabeli z PRIMARY KEY",
    content: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z PRIMARY KEY uczniowie często popełniają błędy:

❌ brak PRIMARY KEY  
❌ brak AUTO_INCREMENT  
❌ ustawienie PRIMARY KEY na złej kolumnie  
❌ powtarzające się id  

📌 Każda profesjonalna tabela powinna posiadać PRIMARY KEY.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz tabelę products.

Dodaj kolumny:
👉 id
👉 name
👉 price

Ustaw:
✔ PRIMARY KEY dla id
✔ AUTO_INCREMENT dla id

📌 Wykonaj zadanie w phpMyAdmin.`,
  },

  {
    type: "quiz",
    question: "Do czego służy PRIMARY KEY?",
    answers: [
      "Do usuwania tabel",
      "Do identyfikowania rekordów",
      "Do stylowania danych",
      "Do tworzenia strony internetowej",
    ],
    correct: 1,
    explanation:
`PRIMARY KEY służy do jednoznacznego identyfikowania rekordów w tabeli.`,
  },

  {
    type: "quiz",
    question: "Co robi AUTO_INCREMENT?",
    answers: [
      "Usuwa rekordy",
      "Automatycznie zwiększa id",
      "Tworzy tabele",
      "Zmienia typ danych",
    ],
    correct: 1,
    explanation:
`AUTO_INCREMENT automatycznie zwiększa wartość liczbową kolejnych rekordów.`,
  },
]

export const lesson4Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się PRIMARY KEY i AUTO_INCREMENT.

Zapamiętaj:

✔ PRIMARY KEY identyfikuje rekord  
✔ PRIMARY KEY musi być unikalny  
✔ AUTO_INCREMENT automatycznie zwiększa id  
✔ Kolumna id jest standardem w bazach danych  

Najważniejsze elementy:
🔹 PRIMARY KEY  
🔹 AUTO_INCREMENT  
🔹 id INT  

👉 To fundament relacji i profesjonalnych baz danych.
`,
}