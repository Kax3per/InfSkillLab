import { Step } from "@/lib/types"

export const lesson20: Step[] = [
  {
    type: "text",
    title: "🏗 Mini projekt PHP + MySQL",
    content:
`W tej lekcji połączymy:
👉 formularze
👉 PHP
👉 MySQL
👉 sesje
👉 CRUD

📌 To podsumowanie najważniejszych rzeczy z kursu.`,
  },

  {
    type: "text",
    title: "🧠 Co zbudujemy?",
    content:
`Mini system użytkowników.

Funkcje:
👉 dodawanie użytkownika
👉 wyświetlanie użytkowników
👉 logowanie
👉 sesja użytkownika`,
  },

  {
    type: "text",
    title: "📦 Tabela users",
    content:
`Najpierw potrzebujemy tabeli:

users

Kolumny:
👉 id
👉 login
👉 password`,
  },

  {
    type: "code",
    title: "🗄 Tworzenie tabeli",
    content:
`CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    login VARCHAR(100),

    password VARCHAR(255)

)`,
  },

  {
    type: "text",
    title: "🖥 Formularz rejestracji",
    content:
`Użytkownik wpisuje:
👉 login
👉 hasło

PHP zapisuje dane do MySQL.`,
  },

  {
    type: "code",
    title: "📋 Formularz",
    content:
`<form method="POST">

    <input
        type="text"
        name="login"
        placeholder="Login"
    >

    <input
        type="password"
        name="password"
        placeholder="Hasło"
    >

    <button type="submit">
        Zarejestruj
    </button>

</form>`,
  },

  {
    type: "code",
    title: "⚙ Rejestracja użytkownika",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$login = $_POST["login"];

$password = password_hash(
    $_POST["password"],
    PASSWORD_DEFAULT
);

$sql = "INSERT INTO users(
    login,
    password
)
VALUES(
    '$login',
    '$password'
)";

mysqli_query($conn, $sql);

?>`,
  },

  {
    type: "text",
    title: "🔐 Logowanie",
    content:
`Po rejestracji użytkownik może się zalogować.

PHP:
👉 pobiera dane
👉 sprawdza bazę
👉 tworzy sesję`,
  },

  {
    type: "code",
    title: "✅ Tworzenie sesji",
    content:
`<?php

session_start();

$_SESSION["user"] = $login;

?>`,
  },

  {
    type: "text",
    title: "👀 Wyświetlanie użytkowników",
    content:
`Możemy pobierać dane z bazy
i wyświetlać użytkowników na stronie.`,
  },

  {
    type: "code",
    title: "📊 SELECT users",
    content:
`SELECT * FROM users`,
  },

  {
    type: "text",
    title: "🛡 Najważniejsze zasady",
    content:
`Zawsze pamiętaj:

👉 waliduj dane  
👉 używaj password_hash()  
👉 używaj sesji  
👉 zabezpieczaj formularze  

📌 To podstawa backendu PHP.`,
  },

  {
    type: "text",
    title: "🚀 Co dalej?",
    content:
`Po tym kursie możesz rozwijać:
👉 system logowania
👉 panel admina
👉 blog
👉 sklep internetowy
👉 API
👉 frameworki PHP`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz tabelę:
users

2️⃣ Dodaj formularz rejestracji

3️⃣ Zapisz użytkownika do MySQL

4️⃣ Utwórz sesję po logowaniu

5️⃣ Wyświetl login zalogowanego użytkownika

📌 Spróbuj połączyć wiedzę z całego kursu.`,
  },

  {
    type: "quiz",
    question: "Do czego służy password_hash()?",
    answers: [
      "Do usuwania danych",
      "Do szyfrowania hasła",
      "Do tworzenia tabel",
      "Do sesji",
    ],
    correct: 1,
    explanation:
`password_hash() szyfruje hasło użytkownika.`,
  },

  {
    type: "quiz",
    question: "Która zmienna przechowuje dane sesji?",
    answers: [
      "$_POST",
      "$_FILES",
      "$_SESSION",
      "$_GET",
    ],
    correct: 2,
    explanation:
`$_SESSION przechowuje dane użytkownika po zalogowaniu.`,
  },
]

export const lesson20Summary = {
  title: "🏁 Podsumowanie kursu PHP",
  content:
`
Ukończyłeś podstawy PHP 

Poznałeś:

✔ formularze HTML  
✔ GET i POST  
✔ połączenie z MySQL  
✔ INSERT, UPDATE, DELETE  
✔ logowanie użytkownika  
✔ sesje  
✔ upload plików  
✔ walidację danych  
✔ bezpieczeństwo PHP  

Najważniejsze elementy:
🔹 PHP  
🔹 MySQL  
🔹 CRUD  
🔹 $_POST  
🔹 $_GET  
🔹 $_SESSION  
🔹 password_hash()  

👉 To solidna baza do tworzenia aplikacji backendowych.
`,
}