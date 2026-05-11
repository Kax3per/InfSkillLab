import { Step } from "@/lib/types"

export const lesson7: Step[] = [
  {
    type: "text",
    title: "🎯 WHERE i filtrowanie danych",
    content:
`W tej lekcji nauczysz się filtrować dane w SQL.

Do filtrowania rekordów używa się:
👉 WHERE

📌 WHERE pozwala pobierać tylko konkretne dane.`,
  },

  {
    type: "text",
    title: "🧠 Co robi WHERE?",
    content:
`WHERE ustawia warunek.

Dzięki temu możemy pobierać:
👉 konkretnego użytkownika  
👉 produkty o wybranej cenie  
👉 zamówienia konkretnej osoby  

📌 Bez WHERE SELECT pobiera wszystkie rekordy.`,
  },

  {
    type: "code",
    title: "👀 SELECT z WHERE",
    content: `SELECT * FROM users
WHERE id = 1;`,
  },

  {
    type: "text",
    title: "🔍 Budowa zapytania",
    content:
`Elementy zapytania:

👉 SELECT *
pobranie wszystkich kolumn

👉 FROM users
tabela users

👉 WHERE id = 1
warunek filtrowania

📌 Zostanie pobrany tylko rekord z id = 1.`,
  },

  {
    type: "text",
    title: "⚡ Operatory porównania",
    content:
`Najważniejsze operatory WHERE:

✔ =  równe  
✔ != różne  
✔ >  większe  
✔ <  mniejsze  
✔ >= większe lub równe  
✔ <= mniejsze lub równe  

📌 Operatory pozwalają dokładnie filtrować dane.`,
  },

  {
    type: "code",
    title: "👀 Produkty droższe niż 100",
    content: `SELECT * FROM products
WHERE price > 100;`,
  },

  {
    type: "text",
    title: "🔤 Filtrowanie tekstu",
    content:
`WHERE działa również dla tekstu.

Przykład:
👉 użytkownik o imieniu Jan

📌 Tekst zapisujemy w apostrofach ''.`,
  },

  {
    type: "code",
    title: "👀 WHERE dla tekstu",
    content: `SELECT * FROM users
WHERE name = 'Jan';`,
  },

  {
    type: "text",
    title: "⚙ Jak filtrować dane w phpMyAdmin?",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij tabelę

3️⃣ Wejdź w zakładkę:
SQL

4️⃣ Wpisz zapytanie z WHERE

5️⃣ Kliknij:
Wykonaj

📌 phpMyAdmin pokaże tylko rekordy spełniające warunek.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas używania WHERE uczniowie często popełniają błędy:

❌ brak WHERE  
❌ używanie == zamiast =  
❌ brak apostrofów przy tekście  
❌ literówki w nazwach kolumn  

📌 SQL używa pojedynczego =.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz 2 zapytania SQL:

1️⃣ Pobierz użytkownika:
id = 2

2️⃣ Pobierz produkt:
price > 500

📌 Użyj WHERE.`,
  },

  {
    type: "quiz",
    question: "Do czego służy WHERE?",
    answers: [
      "Do tworzenia tabel",
      "Do filtrowania danych",
      "Do usuwania bazy danych",
      "Do dodawania rekordów",
    ],
    correct: 1,
    explanation:
`WHERE służy do filtrowania rekordów według warunku.`,
  },

  {
    type: "quiz",
    question: "Który operator oznacza „większe niż”?",
    answers: [
      "=",
      "<",
      ">",
      "!=",
    ],
    correct: 2,
    explanation:
`Operator > oznacza „większe niż”.`,
  },
]

export const lesson7Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się filtrować dane za pomocą WHERE.

Zapamiętaj:

✔ WHERE ustawia warunek  
✔ Można filtrować liczby i tekst  
✔ Tekst zapisujemy w ''  
✔ WHERE działa razem z SELECT  

Najważniejsze operatory:
🔹 =  
🔹 >  
🔹 <  
🔹 !=  
🔹 >=  
🔹 <=  

👉 WHERE jest jedną z najważniejszych części SQL.
`,
}