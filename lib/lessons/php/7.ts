import { Step } from "@/lib/types"

export const lesson7: Step[] = [
  {
    type: "text",
    title: "🗄 Połączenie PHP z MySQL",
    content:
`PHP bardzo często łączy się z bazą danych MySQL.

Dzięki temu możemy:
👉 logować użytkowników  
👉 dodawać dane  
👉 pobierać rekordy  
👉 edytować dane  
👉 usuwać dane  

📌 To jedna z najważniejszych rzeczy w INF.03.`,
  },

  {
    type: "text",
    title: "⚙ mysqli_connect()",
    content:
`Do połączenia z MySQL używamy:

mysqli_connect()

📌 Funkcja tworzy połączenie z bazą danych.`,
  },

  {
    type: "code",
    title: "👀 Pierwsze połączenie",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

?>`,
  },

  {
    type: "text",
    title: "🧠 Elementy połączenia",
    content:
`Połączenie składa się z:

👉 localhost — adres serwera  
👉 root — użytkownik MySQL  
👉 "" — hasło  
👉 test — nazwa bazy danych  

📌 W XAMPP domyślnie hasło root jest puste.`,
  },

  {
    type: "text",
    title: "🗂 Tworzenie bazy danych",
    content:
`Przed połączeniem musimy posiadać bazę danych.

Możemy ją utworzyć w:
👉 phpMyAdmin

Przykład nazwy:
test

📌 Nazwa bazy w PHP musi być identyczna.`,
  },

  {
    type: "code",
    title: "✅ Sprawdzenie połączenia",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

if ($conn) {
    echo "Połączono z bazą";
}

?>`,
  },

  {
    type: "text",
    title: "⚠ Błędy połączenia",
    content:
`Najczęstsze błędy:

👉 zła nazwa bazy  
👉 MySQL nie jest uruchomiony  
👉 zły login  
👉 złe hasło  

📌 MySQL musi być uruchomiony w XAMPP.`,
  },

  {
    type: "code",
    title: "🛡 Obsługa błędów",
    content:
`<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "test"
);

if (!$conn) {

    echo "Błąd połączenia";
}

?>`,
  },

  {
    type: "text",
    title: "🌐 PHP + SQL",
    content:
`Po połączeniu z bazą możemy wykonywać:
👉 SELECT  
👉 INSERT  
👉 UPDATE  
👉 DELETE  

📌 W kolejnych lekcjach zaczniemy pobierać dane z MySQL.`,
  },

  {
    type: "text",
    title: "📦 Zmienna $conn",
    content:
`Najczęściej połączenie zapisujemy do:

$conn

Przykład:

$conn = mysqli_connect(...);

📌 Ta zmienna będzie potrzebna przy zapytaniach SQL.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz bazę danych:
test

2️⃣ Połącz PHP z MySQL

3️⃣ Jeśli połączenie działa:
wyświetl napis:

Połączono z bazą danych

📌 Użyj:
mysqli_connect()
oraz if.`,
  },

  {
    type: "quiz",
    question: "Do czego służy mysqli_connect()?",
    answers: [
      "Do tworzenia CSS",
      "Do połączenia z bazą danych",
      "Do usuwania plików",
      "Do tworzenia HTML",
    ],
    correct: 1,
    explanation:
`mysqli_connect() służy do łączenia PHP z MySQL.`,
  },

  {
    type: "quiz",
    question: "Jak nazywa się domyślny użytkownik MySQL w XAMPP?",
    answers: [
      "admin",
      "mysql",
      "xampp",
      "root",
    ],
    correct: 3,
    explanation:
`Domyślnym użytkownikiem MySQL w XAMPP jest root.`,
  },
]

export const lesson7Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może łączyć się z bazą danych MySQL.

Zapamiętaj:

✔ mysqli_connect() tworzy połączenie  
✔ MySQL musi być uruchomiony  
✔ localhost oznacza lokalny serwer  
✔ $conn przechowuje połączenie z bazą  

Najważniejsze elementy:
🔹 localhost  
🔹 root  
🔹 nazwa bazy danych  
🔹 mysqli_connect()  

👉 To podstawa dalszej pracy z SQL i PHP.
`,
}