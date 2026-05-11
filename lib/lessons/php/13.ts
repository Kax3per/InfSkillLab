import { Step } from "@/lib/types"

export const lesson13: Step[] = [
  {
    type: "text",
    title: "🪪 Sesje w PHP",
    content:
`Sesje pozwalają zapamiętać użytkownika po zalogowaniu.

Dzięki sesjom:
👉 użytkownik pozostaje zalogowany
👉 można przechowywać dane użytkownika
👉 można tworzyć system kont

📌 Sesje bardzo często pojawiają się na INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa sesja?",
    content:
`Schemat działania:

1️⃣ użytkownik loguje się

2️⃣ PHP tworzy sesję

3️⃣ dane zapisują się na serwerze

4️⃣ użytkownik pozostaje zalogowany`,
  },

  {
    type: "code",
    title: "⚙ Start sesji",
    content:
`<?php

session_start();

?>`,
  },

  {
    type: "text",
    title: "📦 session_start()",
    content:
`session_start() uruchamia obsługę sesji.

📌 Musi znajdować się:
NA SAMEJ GÓRZE pliku PHP.`,
  },

  {
    type: "code",
    title: "💾 Zapisywanie danych do sesji",
    content:
`<?php

$_SESSION["user"] = "admin";

?>`,
  },

  {
    type: "text",
    title: "🧠 $_SESSION",
    content:
`$_SESSION działa podobnie do tablicy.

Możemy przechowywać:
👉 login
👉 id użytkownika
👉 rolę użytkownika`,
  },

  {
    type: "code",
    title: "👀 Odczyt danych z sesji",
    content:
`<?php

echo $_SESSION["user"];

?>`,
  },

  {
    type: "text",
    title: "🔒 Sprawdzanie logowania",
    content:
`Najczęściej sprawdzamy:

czy sesja istnieje.

Jeśli nie:
użytkownik nie jest zalogowany.`,
  },

  {
    type: "code",
    title: "✅ Sprawdzenie sesji",
    content:
`<?php

session_start();

if (isset($_SESSION["user"])) {

    echo "Zalogowany";

} else {

    echo "Brak logowania";
}

?>`,
  },

  {
    type: "text",
    title: "🚪 Wylogowanie",
    content:
`Aby wylogować użytkownika:
usuwamy sesję.

📌 Najczęściej używa się:
session_destroy()`,
  },

  {
    type: "code",
    title: "❌ Usuwanie sesji",
    content:
`<?php

session_start();

session_destroy();

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 brak session_start()  
👉 session_start() nie jest na górze pliku  
👉 literówki w $_SESSION  
👉 brak isset()`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Uruchom session_start()

2️⃣ Utwórz sesję:
user = admin

3️⃣ Wyświetl login użytkownika

4️⃣ Dodaj przycisk:
Wyloguj

5️⃣ Użyj:
session_destroy()

📌 Sprawdź czy sesja znika po wylogowaniu.`,
  },

  {
    type: "quiz",
    question: "Do czego służy session_start()?",
    answers: [
      "Do połączenia z MySQL",
      "Do uruchomienia sesji",
      "Do tworzenia CSS",
      "Do usuwania tabel",
    ],
    correct: 1,
    explanation:
`session_start() uruchamia obsługę sesji w PHP.`,
  },

  {
    type: "quiz",
    question: "Co robi session_destroy()?",
    answers: [
      "Tworzy sesję",
      "Usuwa sesję",
      "Dodaje rekord",
      "Pobiera dane z MySQL",
    ],
    correct: 1,
    explanation:
`session_destroy() usuwa aktualną sesję użytkownika.`,
  },
]

export const lesson13Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Sesje pozwalają zapamiętać użytkownika po zalogowaniu.

Zapamiętaj:

✔ session_start() uruchamia sesję  
✔ $_SESSION przechowuje dane  
✔ isset() sprawdza sesję  
✔ session_destroy() usuwa sesję  

Najważniejsze elementy:
🔹 session_start()  
🔹 $_SESSION  
🔹 isset()  
🔹 session_destroy()  

👉 Sesje są podstawą systemów logowania w PHP.
`,
}