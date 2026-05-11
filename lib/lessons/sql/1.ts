import { Step } from "@/lib/types"

export const lesson1: Step[] = [
  {
    type: "text",
    title: "🗄 Co to jest SQL?",
    content:
`SQL (Structured Query Language) to język używany do pracy z bazami danych.

Dzięki SQL możemy:
👉 tworzyć bazy danych  
👉 dodawać dane  
👉 usuwać dane  
👉 edytować dane  
👉 wyszukiwać informacje  

SQL jest używany praktycznie we wszystkich nowoczesnych stronach i aplikacjach.

📌 Na egzaminie INF.03 bardzo często pojawiają się:
✔ zapytania SQL  
✔ tworzenie tabel  
✔ filtrowanie danych  
✔ relacje między tabelami`,
  },

  {
    type: "text",
    title: "🧠 Co to jest baza danych?",
    content:
`Baza danych to miejsce przechowywania informacji.

Przykłady:
👉 użytkownicy  
👉 produkty sklepu  
👉 wiadomości  
👉 zamówienia  
👉 oceny uczniów  

Baza danych składa się z tabel.

Tabela zawiera:
✔ kolumny  
✔ rekordy (wiersze)

📌 Najpopularniejszą bazą danych jest MySQL.`,
  },

  {
    type: "text",
    title: "⚙ Co to jest XAMPP?",
    content:
`XAMPP to pakiet programów potrzebnych do tworzenia stron internetowych i baz danych lokalnie na komputerze.

XAMPP zawiera:
👉 Apache — serwer WWW  
👉 MySQL — baza danych  
👉 phpMyAdmin — panel do zarządzania bazą  
👉 PHP — język backendowy  

📌 Dzięki XAMPP możemy pracować bez internetu na własnym komputerze.`,
  },

  {
    type: "text",
    title: "⬇ Jak zainstalować XAMPP?",
    content:
`1️⃣ Wejdź na stronę:
https://www.apachefriends.org

2️⃣ Pobierz XAMPP dla Windows

3️⃣ Uruchom instalator

4️⃣ Klikaj:
Next → Next → Next

5️⃣ Zostaw zaznaczone:
✔ Apache  
✔ MySQL  
✔ PHP  
✔ phpMyAdmin  

6️⃣ Po instalacji uruchom:
XAMPP Control Panel

📌 Najlepiej instalować XAMPP na dysku C.`,
  },

  {
    type: "text",
    title: "🚀 Jak uruchomić MySQL i Apache?",
    content:
`Po uruchomieniu XAMPP:

1️⃣ Kliknij START przy:
👉 Apache  
👉 MySQL  

2️⃣ Moduły powinny podświetlić się na zielono.

3️⃣ Jeśli wszystko działa poprawnie:
✔ serwer działa  
✔ baza danych działa  

📌 Jeśli port jest zajęty:
zamknij Skype, Discord albo inne programy korzystające z portu 80.`,
  },

  {
    type: "text",
    title: "🌐 Jak wejść do phpMyAdmin?",
    content:
`1️⃣ Uruchom Apache i MySQL

2️⃣ Otwórz przeglądarkę

3️⃣ Wpisz:

http://localhost/phpmyadmin

4️⃣ Otworzy się panel phpMyAdmin

📌 localhost oznacza:
„twój własny komputer”.`,
  },

  {
    type: "text",
    title: "🧭 Gdzie co znajduje się w phpMyAdmin?",
    content:
`Najważniejsze elementy phpMyAdmin:

1️⃣ Lewy panel
👉 lista baz danych

2️⃣ Górne menu
👉 SQL
👉 Import
👉 Export
👉 Structure

3️⃣ Zakładka SQL
👉 wpisywanie zapytań SQL

4️⃣ Structure
👉 tworzenie tabel i kolumn

5️⃣ Browse
👉 podgląd danych

📌 To najważniejsze miejsca używane na INF.03.`,
  },

  {
    type: "code",
    title: "👀 Pierwsze zapytanie SQL",
    content: `SELECT * FROM users;`,
  },

  {
    type: "text",
    title: "🔍 Co robi SELECT?",
    content:
`Zapytanie SELECT służy do pobierania danych z tabeli.

Przykład:

SELECT * FROM users;

Elementy:
👉 SELECT — wybierz dane  
👉 * — wszystkie kolumny  
👉 FROM users — z tabeli users  

📌 Średnik ; kończy zapytanie SQL.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Uruchom XAMPP

2️⃣ Włącz:
👉 Apache
👉 MySQL

3️⃣ Wejdź na:
http://localhost/phpmyadmin

4️⃣ Otwórz zakładkę SQL

5️⃣ Wpisz zapytanie:

SELECT * FROM users;

📌 Nie musisz jeszcze tworzyć tabeli.
Chodzi o poznanie interfejsu phpMyAdmin.`,
  },

  {
    type: "quiz",
    question: "Do czego służy phpMyAdmin?",
    answers: [
      "Do tworzenia grafik",
      "Do zarządzania bazą danych",
      "Do programowania CSS",
      "Do montowania filmów",
    ],
    correct: 1,
    explanation:
`phpMyAdmin służy do zarządzania bazami danych MySQL przez przeglądarkę.`,
  },

  {
    type: "quiz",
    question: "Który moduł trzeba uruchomić do działania bazy danych?",
    answers: [
      "Apache",
      "FileZilla",
      "Tomcat",
      "MySQL",
    ],
    correct: 3,
    explanation:
`MySQL odpowiada za działanie bazy danych.`,
  },
]

export const lesson1Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
SQL to język używany do pracy z bazami danych.

Zapamiętaj:

✔ SQL służy do zarządzania danymi  
✔ Baza danych składa się z tabel  
✔ XAMPP pozwala uruchomić serwer lokalny  
✔ phpMyAdmin służy do zarządzania bazą danych  
✔ SELECT pobiera dane z tabeli  

Najważniejsze elementy:
🔹 Apache — serwer WWW  
🔹 MySQL — baza danych  
🔹 phpMyAdmin — panel do obsługi baz  
🔹 localhost — własny komputer  

👉 To fundament dalszej nauki SQL i PHP.
`,
}