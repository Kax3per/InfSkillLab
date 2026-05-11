import { Step } from "@/lib/types"

export const lesson17: Step[] = [
  {
    type: "text",
    title: "👤 Tworzenie użytkowników i nadawanie uprawnień",
    content:
`W tej lekcji nauczysz się:
👉 tworzyć użytkowników MySQL  
👉 nadawać uprawnienia  
👉 zarządzać dostępem do baz danych  

📌 Uprawnienia są bardzo ważne dla bezpieczeństwa bazy danych.`,
  },

  {
    type: "text",
    title: "🧠 Po co tworzy się użytkowników?",
    content:
`Nie każdy użytkownik powinien mieć pełny dostęp do bazy danych.

Przykłady:
👉 administrator  
👉 pracownik  
👉 aplikacja internetowa  
👉 klient  

📌 Dzięki uprawnieniom można ograniczyć dostęp do danych.`,
  },

  {
    type: "text",
    title: "🔑 Najważniejsze uprawnienia",
    content:
`Najczęściej używane uprawnienia:

✔ SELECT
pobieranie danych

✔ INSERT
dodawanie danych

✔ UPDATE
edycja danych

✔ DELETE
usuwanie danych

✔ ALL PRIVILEGES
pełny dostęp

📌 Uprawnienia zwiększają bezpieczeństwo.`,
  },

  {
    type: "code",
    title: "👀 Tworzenie użytkownika",
    content: `CREATE USER 'student'@'localhost'
IDENTIFIED BY 'haslo123';`,
  },

  {
    type: "text",
    title: "🔍 Jak działa CREATE USER?",
    content:
`Elementy zapytania:

👉 CREATE USER
tworzenie użytkownika

👉 'student'@'localhost'
nazwa użytkownika i host

👉 IDENTIFIED BY
ustawienie hasła

📌 localhost oznacza:
„ten komputer”.`,
  },

  {
    type: "code",
    title: "👀 Nadawanie uprawnień",
    content: `GRANT SELECT, INSERT
ON school.*
TO 'student'@'localhost';`,
  },

  {
    type: "text",
    title: "🔍 Jak działa GRANT?",
    content:
`Elementy zapytania:

👉 GRANT
nadawanie uprawnień

👉 SELECT, INSERT
typ uprawnień

👉 ON school.*
baza danych school

👉 TO 'student'@'localhost'
użytkownik

📌 school.* oznacza wszystkie tabele bazy school.`,
  },

  {
    type: "text",
    title: "⚙ Użytkownicy w phpMyAdmin",
    content:
`1️⃣ Otwórz phpMyAdmin

2️⃣ Kliknij:
Konta użytkowników

3️⃣ Kliknij:
Dodaj konto użytkownika

4️⃣ Wpisz:
👉 nazwę
👉 host
👉 hasło

5️⃣ Nadaj uprawnienia

6️⃣ Kliknij:
Wykonaj

📌 phpMyAdmin pozwala tworzyć użytkowników bez pisania SQL.`,
  },

  {
    type: "text",
    title: "🛡 Dlaczego uprawnienia są ważne?",
    content:
`Bezpieczeństwo bazy danych jest bardzo ważne.

Dzięki uprawnieniom:
✔ można ograniczyć dostęp  
✔ chronić dane użytkowników  
✔ zapobiegać usuwaniu danych  
✔ tworzyć bezpieczne aplikacje  

📌 Profesjonalne aplikacje zawsze używają ograniczonych uprawnień.`,
  },

  {
    type: "code",
    title: "👀 Pełne uprawnienia",
    content: `GRANT ALL PRIVILEGES
ON school.*
TO 'admin'@'localhost';`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas nadawania uprawnień uczniowie często popełniają błędy:

❌ brak hasła  
❌ nadawanie ALL PRIVILEGES każdemu  
❌ literówki w nazwach baz  
❌ brak localhost  

📌 Uprawnienia powinny być ograniczone do minimum.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`W phpMyAdmin:

1️⃣ Utwórz użytkownika:
student

2️⃣ Ustaw hasło:
sql123

3️⃣ Nadaj uprawnienia:
✔ SELECT
✔ INSERT

dla bazy:
school`,
  },

  {
    type: "quiz",
    question: "Do czego służy GRANT?",
    answers: [
      "Do usuwania tabel",
      "Do nadawania uprawnień",
      "Do tworzenia rekordów",
      "Do sortowania danych",
    ],
    correct: 1,
    explanation:
`GRANT służy do nadawania uprawnień użytkownikom.`,
  },

  {
    type: "quiz",
    question: "Które uprawnienie pozwala pobierać dane?",
    answers: [
      "DELETE",
      "UPDATE",
      "SELECT",
      "DROP",
    ],
    correct: 2,
    explanation:
`SELECT pozwala pobierać dane z tabel.`,
  },
]

export const lesson17Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W tej lekcji nauczyłeś się tworzenia użytkowników i nadawania uprawnień.

Zapamiętaj:

✔ CREATE USER tworzy użytkownika  
✔ GRANT nadaje uprawnienia  
✔ SELECT pobiera dane  
✔ INSERT dodaje dane  
✔ ALL PRIVILEGES daje pełny dostęp  

Najważniejsze elementy:
🔹 CREATE USER  
🔹 GRANT  
🔹 SELECT  
🔹 INSERT  
🔹 ALL PRIVILEGES  

👉 Uprawnienia są bardzo ważne dla bezpieczeństwa baz danych.
`,
}