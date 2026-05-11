import { Step } from "@/lib/types"

export const lesson8: Step[] = [
  {
    type: "text",
    title: "📥 Pobieranie danych z MySQL",
    content:
`Po połączeniu PHP z bazą danych możemy pobierać rekordy z tabel.

Najczęściej używamy:
👉 SELECT
👉 mysqli_query()
👉 while

📌 To jedna z najważniejszych rzeczy w PHP i INF.03.`,
  },

  {
    type: "text",
    title: "🧠 mysqli_query()",
    content:
`mysqli_query() wykonuje zapytanie SQL.

Przykład:
👉 SELECT
👉 INSERT
👉 UPDATE
👉 DELETE

📌 Funkcja wysyła zapytanie do MySQL.`,
  },

  {
    type: "code",
    title: "👀 Pierwsze zapytanie SELECT",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$sql = "SELECT * FROM users";

$result = mysqli_query($conn, $sql);

?>`,
  },

  {
    type: "text",
    title: "📦 Zmienna $result",
    content:
`Wynik zapytania zapisujemy najczęściej do:

$result

Przykład:

$result = mysqli_query(...);

📌 W tej zmiennej znajdują się rekordy z bazy danych.`,
  },

  {
    type: "text",
    title: "🔁 mysqli_fetch_assoc()",
    content:
`mysqli_fetch_assoc() pobiera jeden rekord z bazy danych.

📌 Najczęściej używamy jej razem z while.`,
  },

  {
    type: "code",
    title: "🖥 Wyświetlanie rekordów",
    content:
`<?php

while ($row = mysqli_fetch_assoc($result)) {

    echo $row["name"];

}

?>`,
  },

  {
    type: "text",
    title: "🧾 Co oznacza $row?",
    content:
`$row oznacza jeden rekord z tabeli.

Przykład:

$row["name"]

👉 pobiera kolumnę name

📌 Nazwa musi być identyczna jak w bazie danych.`,
  },

  {
    type: "text",
    title: "📊 while i rekordy",
    content:
`while przechodzi po wszystkich rekordach z bazy.

Schemat:
👉 pobierz rekord
👉 wyświetl dane
👉 pobierz następny rekord

📌 while bardzo często pojawia się na INF.03.`,
  },

  {
    type: "code",
    title: "👀 Pełny przykład",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

$sql = "SELECT * FROM users";

$result = mysqli_query($conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {

    echo $row["name"] . "<br>";
}

?>`,
  },

  {
    type: "text",
    title: "🛡 Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 zła nazwa tabeli  
👉 zła nazwa kolumny  
👉 brak połączenia z bazą  
👉 literówki w SQL  

📌 Nazwy w PHP i MySQL muszą być identyczne.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz tabelę:
users

2️⃣ Dodaj kolumnę:
name

3️⃣ Dodaj kilka rekordów

4️⃣ Pobierz dane za pomocą:

SELECT * FROM users

5️⃣ Wyświetl wszystkie imiona używając:
while oraz mysqli_fetch_assoc()

📌 Użyj:
echo oraz <br>.`,
  },

  {
    type: "quiz",
    question: "Do czego służy mysqli_query()?",
    answers: [
      "Do stylowania strony",
      "Do wykonywania zapytań SQL",
      "Do tworzenia CSS",
      "Do usuwania plików",
    ],
    correct: 1,
    explanation:
`mysqli_query() wykonuje zapytania SQL w MySQL.`,
  },

  {
    type: "quiz",
    question: "Która funkcja pobiera rekord z bazy danych?",
    answers: [
      "mysqli_connect()",
      "echo()",
      "mysqli_fetch_assoc()",
      "isset()",
    ],
    correct: 2,
    explanation:
`mysqli_fetch_assoc() pobiera rekord z bazy danych.`,
  },
]

export const lesson8Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może pobierać dane z MySQL.

Zapamiętaj:

✔ mysqli_query() wykonuje SQL  
✔ SELECT pobiera rekordy  
✔ mysqli_fetch_assoc() pobiera dane  
✔ while wyświetla rekordy  

Najważniejsze elementy:
🔹 SELECT  
🔹 $result  
🔹 $row  
🔹 while  

👉 To podstawa pracy z bazą danych w PHP.
`,
}