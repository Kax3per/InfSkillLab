import { Step } from "@/lib/types"

export const lesson10: Step[] = [
  {
    type: "text",
    title: "✏ Edycja danych w MySQL",
    content:
`PHP może edytować rekordy w bazie danych MySQL.

Do edycji danych używamy:
👉 UPDATE
👉 SET
👉 WHERE

📌 To bardzo ważna część systemów CRUD.`,
  },

  {
    type: "text",
    title: "🧠 UPDATE",
    content:
`UPDATE służy do zmiany istniejących danych.

Przykłady:
👉 zmiana nazwy użytkownika  
👉 edycja produktu  
👉 zmiana hasła  
👉 aktualizacja danych konta`,
  },

  {
    type: "code",
    title: "👀 Podstawowy UPDATE",
    content:
`UPDATE users
SET name = 'Adam'
WHERE id = 1`,
  },

  {
    type: "text",
    title: "📦 Co robi SET?",
    content:
`SET określa:
co chcemy zmienić.

Przykład:

SET name = 'Adam'

oznacza:
„ustaw kolumnę name na Adam”.`,
  },

  {
    type: "text",
    title: "⚠ Dlaczego WHERE jest ważne?",
    content:
`WHERE wskazuje,
który rekord ma zostać zmieniony.

📌 Bez WHERE mogą zostać zmienione WSZYSTKIE rekordy w tabeli.`,
  },

  {
    type: "code",
    title: "🖥 UPDATE w PHP",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$sql = "UPDATE users
SET name='Kacper'
WHERE id=1";

mysqli_query($conn, $sql);

?>`,
  },

  {
    type: "text",
    title: "📥 Formularz edycji",
    content:
`Najczęściej dane edytujemy formularzem.

Użytkownik:
👉 wpisuje nowe dane
👉 klika przycisk
👉 PHP wykonuje UPDATE`,
  },

  {
    type: "code",
    title: "📝 Formularz edycji użytkownika",
    content:
`<form method="POST">

    <input type="text" name="username">

    <button type="submit">
        Zapisz
    </button>

</form>`,
  },

  {
    type: "code",
    title: "⚙ Formularz + UPDATE",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

if (isset($_POST["username"])) {

    $name = $_POST["username"];

    $sql = "UPDATE users
    SET name='$name'
    WHERE id=1";

    mysqli_query($conn, $sql);
}

?>`,
  },

  {
    type: "text",
    title: "🛡 Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 brak WHERE  
👉 zła nazwa kolumny  
👉 zła nazwa tabeli  
👉 brak połączenia z bazą  
👉 literówki w SQL  

📌 UPDATE jest bardzo wrażliwy na błędy.`,
  },

  {
    type: "text",
    title: "📊 CRUD",
    content:
`UPDATE to część CRUD.

CRUD:
👉 Create
👉 Read
👉 Update
👉 Delete

📌 To podstawa większości aplikacji backendowych.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz formularz:
username

2️⃣ Po kliknięciu przycisku:
zmień nazwę użytkownika w bazie danych

3️⃣ Użyj:

UPDATE users
SET
WHERE

📌 Zmień rekord o id = 1.`,
  },

  {
    type: "quiz",
    question: "Do czego służy UPDATE?",
    answers: [
      "Do pobierania danych",
      "Do edycji rekordów",
      "Do usuwania tabel",
      "Do tworzenia CSS",
    ],
    correct: 1,
    explanation:
`UPDATE służy do zmiany istniejących rekordów w bazie danych.`,
  },

  {
    type: "quiz",
    question: "Która część UPDATE wskazuje rekord do zmiany?",
    answers: [
      "SET",
      "INSERT",
      "WHERE",
      "VALUES",
    ],
    correct: 2,
    explanation:
`WHERE wskazuje, który rekord ma zostać zmieniony.`,
  },
]

export const lesson10Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może edytować dane w MySQL.

Zapamiętaj:

✔ UPDATE zmienia rekordy  
✔ SET określa nowe wartości  
✔ WHERE wskazuje rekord  
✔ mysqli_query() wykonuje SQL  

Najważniejsze elementy:
🔹 UPDATE  
🔹 SET  
🔹 WHERE  
🔹 formularze POST  

👉 UPDATE to bardzo ważny element systemów CRUD.
`,
}