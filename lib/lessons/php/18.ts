import { Step } from "@/lib/types"

export const lesson18: Step[] = [
  {
    type: "text",
    title: "📄 include i require w PHP",
    content:
`Duże aplikacje PHP dzielimy na wiele plików.

Dzięki temu:
👉 kod jest czytelniejszy
👉 łatwiej go edytować
👉 można używać wspólnych komponentów

📌 Do tego służą:
include oraz require.`,
  },

  {
    type: "text",
    title: "🧠 include",
    content:
`include pozwala wczytać inny plik PHP.

Przykłady:
👉 menu
👉 stopka
👉 połączenie z bazą
👉 navbar`,
  },

  {
    type: "code",
    title: "👀 include",
    content:
`<?php

include "menu.php";

?>`,
  },

  {
    type: "text",
    title: "📦 Jak działa include?",
    content:
`PHP pobiera zawartość pliku
i wstawia ją do aktualnej strony.

📌 To działa jak „wklejenie” kodu.`,
  },

  {
    type: "code",
    title: "🖥 Przykład menu.php",
    content:
`<nav>

    <a href="index.php">
        Start
    </a>

</nav>`,
  },

  {
    type: "text",
    title: "⚠ require",
    content:
`require działa podobnie do include.

Różnica:
👉 include pokazuje warning
👉 require zatrzymuje stronę

📌 require jest bardziej rygorystyczny.`,
  },

  {
    type: "code",
    title: "🔒 require",
    content:
`<?php

require "config.php";

?>`,
  },

  {
    type: "text",
    title: "📁 config.php",
    content:
`Najczęściej w pliku config.php
trzymamy:

👉 połączenie z bazą
👉 ustawienia aplikacji
👉 dane serwera`,
  },

  {
    type: "code",
    title: "⚙ config.php",
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
    title: "🧠 include_once i require_once",
    content:
`include_once oraz require_once
ładują plik tylko jeden raz.

📌 Zapobiega to duplikacji kodu.`,
  },

  {
    type: "code",
    title: "✅ require_once",
    content:
`<?php

require_once "config.php";

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 zła ścieżka do pliku  
👉 brak pliku  
👉 literówki w nazwie  
👉 wielokrotne include`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz plik:
config.php

2️⃣ Dodaj połączenie z bazą danych

3️⃣ W innym pliku:
załaduj config.php

4️⃣ Użyj:
include lub require

📌 Spróbuj także:
require_once.`,
  },

  {
    type: "quiz",
    question: "Do czego służy include?",
    answers: [
      "Do tworzenia tabel",
      "Do ładowania innych plików",
      "Do usuwania rekordów",
      "Do uploadu zdjęć",
    ],
    correct: 1,
    explanation:
`include pozwala wczytać inny plik PHP.`,
  },

  {
    type: "quiz",
    question: "Która funkcja zatrzymuje stronę przy błędzie?",
    answers: [
      "include",
      "echo",
      "require",
      "isset",
    ],
    correct: 2,
    explanation:
`require zatrzymuje działanie strony, jeśli plik nie istnieje.`,
  },
]

export const lesson18Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP pozwala dzielić kod na wiele plików.

Zapamiętaj:

✔ include ładuje pliki  
✔ require zatrzymuje stronę przy błędzie  
✔ config.php często zawiera połączenie z bazą  
✔ require_once ładuje plik tylko raz  

Najważniejsze elementy:
🔹 include  
🔹 require  
🔹 require_once  
🔹 config.php  

👉 Dzielenie kodu to podstawa większych aplikacji PHP.
`,
}