import { Step } from "@/lib/types"

export const lesson11: Step[] = [
  {
    type: "text",
    title: "🗑 Usuwanie danych z MySQL",
    content:
`PHP może usuwać rekordy z bazy danych MySQL.

Do usuwania używamy:
👉 DELETE
👉 FROM
👉 WHERE

📌 To ostatni element CRUD.`,
  },

  {
    type: "text",
    title: "🧠 DELETE FROM",
    content:
`DELETE FROM usuwa rekordy z tabeli.

Przykłady:
👉 usunięcie użytkownika  
👉 usunięcie produktu  
👉 usunięcie komentarza`,
  },

  {
    type: "code",
    title: "👀 Podstawowe DELETE",
    content:
`DELETE FROM users
WHERE id = 1`,
  },

  {
    type: "text",
    title: "⚠ Dlaczego WHERE jest ważne?",
    content:
`WHERE wskazuje,
który rekord ma zostać usunięty.

📌 Bez WHERE usuniesz WSZYSTKIE rekordy z tabeli.`,
  },

  {
    type: "code",
    title: "🖥 DELETE w PHP",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$sql = "DELETE FROM users
WHERE id = 1";

mysqli_query($conn, $sql);

?>`,
  },

  {
    type: "text",
    title: "📦 Formularz usuwania",
    content:
`Najczęściej usuwamy rekord po kliknięciu przycisku.

Przykład:
👉 przycisk Usuń użytkownika
👉 PHP wykonuje DELETE`,
  },

  {
    type: "code",
    title: "📝 Formularz usuwania",
    content:
`<form method="POST">

    <button type="submit">
        Usuń użytkownika
    </button>

</form>`,
  },

  {
    type: "code",
    title: "⚙ Formularz + DELETE",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $sql = "DELETE FROM users
    WHERE id = 1";

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
👉 zła nazwa tabeli  
👉 zły id  
👉 brak połączenia z bazą  

📌 DELETE działa od razu po wykonaniu.`,
  },

  {
    type: "text",
    title: "📊 CRUD",
    content:
`DELETE to ostatni element CRUD.

CRUD:
👉 Create  
👉 Read  
👉 Update  
👉 Delete  

📌 CRUD bardzo często pojawia się na INF.03.`,
  },

  {
    type: "text",
    title: "⚠ DELETE vs DROP",
    content:
`DELETE usuwa rekordy.

DROP usuwa całą tabelę.

📌 To bardzo duża różnica.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz przycisk:
Usuń użytkownika

2️⃣ Po kliknięciu:
usuń rekord o id = 1

3️⃣ Użyj:
DELETE FROM
WHERE

📌 Sprawdź w phpMyAdmin czy rekord został usunięty.`,
  },

  {
    type: "quiz",
    question: "Do czego służy DELETE FROM?",
    answers: [
      "Do pobierania danych",
      "Do edycji danych",
      "Do usuwania rekordów",
      "Do tworzenia tabel",
    ],
    correct: 2,
    explanation:
`DELETE FROM usuwa rekordy z tabeli.`,
  },

  {
    type: "quiz",
    question: "Co może się stać bez WHERE w DELETE?",
    answers: [
      "Nic",
      "Usunie się jedna kolumna",
      "Usuną się wszystkie rekordy",
      "Baza się wyłączy",
    ],
    correct: 2,
    explanation:
`Bez WHERE DELETE może usunąć wszystkie rekordy z tabeli.`,
  },
]

export const lesson11Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może usuwać rekordy z MySQL.

Zapamiętaj:

✔ DELETE FROM usuwa dane  
✔ WHERE wskazuje rekord  
✔ DELETE jest częścią CRUD  
✔ mysqli_query() wykonuje SQL  

Najważniejsze elementy:
🔹 DELETE FROM  
🔹 WHERE  
🔹 CRUD  
🔹 formularze POST  

👉 Teraz znasz pełny podstawowy CRUD w PHP i MySQL.
`,
}