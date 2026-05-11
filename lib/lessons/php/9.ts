import { Step } from "@/lib/types"

export const lesson9: Step[] = [
  {
    type: "text",
    title: "➕ Dodawanie danych do MySQL",
    content:
`PHP może dodawać dane do bazy danych MySQL.

Najczęściej używamy:
👉 formularzy HTML
👉 metody POST
👉 INSERT INTO

📌 To podstawa systemów logowania i rejestracji.`,
  },

  {
    type: "text",
    title: "🧠 INSERT INTO",
    content:
`INSERT INTO dodaje nowe rekordy do tabeli.

Przykład:
👉 nowy użytkownik
👉 nowy produkt
👉 nowy komentarz

📌 INSERT bardzo często pojawia się na INF.03.`,
  },

  {
    type: "code",
    title: "👀 Zapytanie INSERT",
    content:
`INSERT INTO users(name)
VALUES ('Adam')`,
  },

  {
    type: "text",
    title: "📦 Formularz HTML",
    content:
`Najczęściej dane dodajemy przez formularz.

Użytkownik wpisuje dane,
a PHP zapisuje je do MySQL.`,
  },

  {
    type: "code",
    title: "🖥 Formularz dodawania użytkownika",
    content:
`<form method="POST">

    <input type="text" name="username">

    <button type="submit">
        Dodaj
    </button>

</form>`,
  },

  {
    type: "text",
    title: "📥 Pobieranie danych z formularza",
    content:
`Dane odbieramy za pomocą:

$_POST

Przykład:

$_POST["username"]

📌 name w formularzu musi być identyczne.`,
  },

  {
    type: "code",
    title: "⚙ PHP + INSERT",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$name = $_POST["username"];

$sql = "INSERT INTO users(name)
VALUES ('$name')";

mysqli_query($conn, $sql);

?>`,
  },

  {
    type: "text",
    title: "🛡 isset() przy formularzu",
    content:
`Przed użyciem $_POST warto sprawdzić:

isset()

📌 Dzięki temu unikamy błędów.`,
  },

  {
    type: "code",
    title: "✅ Bezpieczne dodawanie danych",
    content:
`<?php

if (isset($_POST["username"])) {

    $name = $_POST["username"];

    echo $name;
}

?>`,
  },

  {
    type: "text",
    title: "📊 Jak działa zapis do bazy?",
    content:
`Schemat działania:

1️⃣ użytkownik wpisuje dane

2️⃣ formularz wysyła POST

3️⃣ PHP odbiera dane

4️⃣ INSERT dodaje rekord do MySQL

📌 To fundament backendu.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 zła nazwa tabeli  
👉 zła nazwa kolumny  
👉 brak method POST  
👉 brak name w input  
👉 MySQL nie działa  

📌 Nazwy muszą być identyczne.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz tabelę:
users

2️⃣ Dodaj kolumnę:
name

3️⃣ Utwórz formularz z input:
username

4️⃣ Po kliknięciu przycisku:
dodaj użytkownika do bazy danych

📌 Użyj:
POST oraz INSERT INTO.`,
  },

  {
    type: "quiz",
    question: "Do czego służy INSERT INTO?",
    answers: [
      "Do pobierania danych",
      "Do dodawania rekordów",
      "Do usuwania tabel",
      "Do stylowania strony",
    ],
    correct: 1,
    explanation:
`INSERT INTO dodaje nowe rekordy do tabeli.`,
  },

  {
    type: "quiz",
    question: "Która metoda formularza najczęściej służy do dodawania danych?",
    answers: [
      "GET",
      "FETCH",
      "POST",
      "CONNECT",
    ],
    correct: 2,
    explanation:
`POST najczęściej służy do przesyłania danych formularzy.`,
  },
]

export const lesson9Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może dodawać dane do MySQL.

Zapamiętaj:

✔ INSERT INTO dodaje rekordy  
✔ $_POST odbiera dane formularza  
✔ mysqli_query() wykonuje SQL  
✔ Formularze są podstawą backendu  

Najważniejsze elementy:
🔹 INSERT INTO  
🔹 VALUES  
🔹 $_POST  
🔹 method="POST"  

👉 To podstawa systemów logowania i rejestracji.
`,
}