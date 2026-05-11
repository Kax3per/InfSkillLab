import { Step } from "@/lib/types"

export const lesson20: Step[] = [
  {
    type: "text",
    title: "🚀 Projekt końcowy SQL",
    content:
`W tej lekcji wykonasz swój pierwszy większy projekt SQL.

Celem projektu jest:
👉 stworzenie kompletnej bazy danych  
👉 utworzenie tabel  
👉 dodawanie danych  
👉 używanie JOIN  
👉 wykonywanie zapytań SQL  

📌 Projekt podsumowuje cały kurs SQL.`,
  },

  {
    type: "text",
    title: "🧠 Co zbudujemy?",
    content:
`Stworzysz prostą bazę danych sklepu internetowego.

Projekt będzie zawierał:
✔ users  
✔ products  
✔ orders  

📌 Tabele będą połączone relacjami.`,
  },

  {
    type: "text",
    title: "📦 Struktura projektu",
    content:
`Baza danych:
shop

Tabele:
👉 users
👉 products
👉 orders

Relacje:
👉 orders.user_id → users.id
👉 orders.product_id → products.id`,
  },

  {
    type: "code",
    title: "👀 Tworzenie bazy danych",
    content: `CREATE DATABASE shop;`,
  },

  {
    type: "code",
    title: "👀 Tabela users",
    content: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);`,
  },

  {
    type: "code",
    title: "👀 Tabela products",
    content: `CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price INT
);`,
  },

  {
    type: "code",
    title: "👀 Tabela orders",
    content: `CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,

  FOREIGN KEY (user_id)
  REFERENCES users(id),

  FOREIGN KEY (product_id)
  REFERENCES products(id)
);`,
  },

  {
    type: "text",
    title: "➕ Dodawanie danych",
    content:
`Dodaj przykładowe dane do tabel:

✔ użytkowników  
✔ produkty  
✔ zamówienia  

📌 Dzięki temu będzie można wykonywać JOIN.`,
  },

  {
    type: "code",
    title: "👀 INSERT INTO",
    content: `INSERT INTO users (name, email)
VALUES
('Jan', 'jan@gmail.com'),
('Anna', 'anna@gmail.com');

INSERT INTO products (name, price)
VALUES
('Laptop', 5000),
('Mouse', 150);`,
  },

  {
    type: "text",
    title: "🔗 INNER JOIN w projekcie",
    content:
`Po dodaniu danych można połączyć tabele.

Pobierz:
👉 nazwę użytkownika
👉 nazwę produktu

📌 Użyj INNER JOIN.`,
  },

  {
    type: "code",
    title: "👀 JOIN projektu",
    content: `SELECT
  users.name,
  products.name
FROM orders

INNER JOIN users
ON orders.user_id = users.id

INNER JOIN products
ON orders.product_id = products.id;`,
  },

  {
    type: "text",
    title: "⚙ Projekt w phpMyAdmin",
    content:
`1️⃣ Utwórz bazę:
shop

2️⃣ Utwórz wszystkie tabele

3️⃣ Dodaj relacje

4️⃣ Dodaj dane

5️⃣ Uruchom JOIN

📌 Projekt najlepiej wykonywać krok po kroku.`,
  },

  {
    type: "text",
    title: "🛡 Co już potrafisz?",
    content:
`Po ukończeniu kursu potrafisz:

✔ tworzyć bazy danych  
✔ tworzyć tabele  
✔ dodawać dane  
✔ aktualizować dane  
✔ usuwać dane  
✔ używać JOIN  
✔ tworzyć relacje  
✔ wykonywać backup bazy danych  

📌 To solidne podstawy SQL i phpMyAdmin.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas projektu uczniowie często popełniają błędy:

❌ brak FOREIGN KEY  
❌ zła kolejność tworzenia tabel  
❌ brak danych do JOIN  
❌ literówki w nazwach kolumn  

📌 Relacje muszą być poprawnie połączone.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Wykonaj cały projekt SQL:

1️⃣ Utwórz bazę:
shop

2️⃣ Utwórz:
✔ users
✔ products
✔ orders

3️⃣ Dodaj:
✔ PRIMARY KEY
✔ FOREIGN KEY

4️⃣ Dodaj przykładowe dane

5️⃣ Wykonaj:
INNER JOIN

📌 Projekt wykonaj w phpMyAdmin.`,
  },

  {
    type: "quiz",
    question: "Która tabela przechowuje zamówienia w projekcie?",
    answers: [
      "users",
      "products",
      "orders",
      "emails",
    ],
    correct: 2,
    explanation:
`Tabela orders przechowuje zamówienia.`,
  },

  {
    type: "quiz",
    question: "Który JOIN został użyty w projekcie?",
    answers: [
      "LEFT JOIN",
      "RIGHT JOIN",
      "DELETE JOIN",
      "INNER JOIN",
    ],
    correct: 3,
    explanation:
`Projekt wykorzystuje INNER JOIN do łączenia tabel.`,
  },
]

export const lesson20Summary = {
  title: "🏆 Ukończenie kursu SQL",
  content: `
Gratulacje! Ukończyłeś kurs SQL i phpMyAdmin 🎉

Potrafisz już:

✔ tworzyć bazy danych  
✔ tworzyć tabele  
✔ dodawać dane  
✔ aktualizować rekordy  
✔ usuwać dane  
✔ używać WHERE  
✔ sortować dane  
✔ używać LIKE  
✔ tworzyć relacje  
✔ używać JOIN  
✔ tworzyć użytkowników  
✔ wykonywać backup  
✔ używać indeksów  

Najważniejsze elementy kursu:
🔹 SELECT  
🔹 INSERT  
🔹 UPDATE  
🔹 DELETE  
🔹 JOIN  
🔹 FOREIGN KEY  
🔹 GROUP BY  
🔹 CREATE INDEX  

👉 To bardzo mocna podstawa do nauki PHP, Laravel, Node.js i backend developmentu.
`,
}