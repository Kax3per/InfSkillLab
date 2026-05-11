import { Step } from "@/lib/types"

export const lesson14: Step[] = [
  {
    type: "text",
    title: "🔀 Przekierowania w PHP",
    content:
`PHP może automatycznie przenosić użytkownika na inną stronę.

Najczęściej używamy tego:
👉 po logowaniu
👉 po wylogowaniu
👉 po wysłaniu formularza

📌 To bardzo częsty element aplikacji webowych.`,
  },

  {
    type: "text",
    title: "🧠 header()",
    content:
`Do przekierowania używamy:

header()

📌 Najczęściej:
header("Location: strona.php")`,
  },

  {
    type: "code",
    title: "👀 Podstawowe przekierowanie",
    content:
`<?php

header("Location: index.php");

?>`,
  },

  {
    type: "text",
    title: "⚠ Ważna zasada",
    content:
`header() musi zostać wykonany:
PRZED wyświetleniem HTML.

📌 Nie może być wcześniej:
echo
HTML
spacje`,
  },

  {
    type: "code",
    title: "❌ Błędne użycie",
    content:
`<?php

echo "Test";

header("Location: index.php");

?>`,
  },

  {
    type: "text",
    title: "✅ Poprawne użycie",
    content:
`Najpierw wykonujemy:
header()

Dopiero później:
HTML lub echo.`,
  },

  {
    type: "code",
    title: "⚙ Przekierowanie po logowaniu",
    content:
`<?php

if ($login_ok) {

    header("Location: panel.php");
}

?>`,
  },

  {
    type: "text",
    title: "🚪 Przekierowanie po wylogowaniu",
    content:
`Najczęściej po wylogowaniu:
użytkownik wraca na stronę logowania.`,
  },

  {
    type: "code",
    title: "👋 Wylogowanie + redirect",
    content:
`<?php

session_start();

session_destroy();

header("Location: login.php");

?>`,
  },

  {
    type: "text",
    title: "🛡 exit()",
    content:
`Po header() często używa się:

exit();

📌 Zatrzymuje dalsze wykonywanie kodu.`,
  },

  {
    type: "code",
    title: "✅ Bezpieczne przekierowanie",
    content:
`<?php

header("Location: index.php");

exit();

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 echo przed header()  
👉 HTML przed header()  
👉 brak exit()  
👉 literówki w Location`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz stronę:
index.php

2️⃣ Utwórz stronę:
panel.php

3️⃣ Po kliknięciu przycisku:
przekieruj użytkownika do panel.php

4️⃣ Użyj:
header("Location: panel.php")

📌 Dodaj także:
exit();`,
  },

  {
    type: "quiz",
    question: "Do czego służy header()?",
    answers: [
      "Do tworzenia CSS",
      "Do przekierowania użytkownika",
      "Do połączenia z bazą",
      "Do usuwania tabel",
    ],
    correct: 1,
    explanation:
`header() pozwala przekierować użytkownika na inną stronę.`,
  },

  {
    type: "quiz",
    question: "Co często dodajemy po header()?",
    answers: [
      "mysqli_query()",
      "echo",
      "exit()",
      "SELECT",
    ],
    correct: 2,
    explanation:
`exit() zatrzymuje dalsze wykonywanie kodu po przekierowaniu.`,
  },
]

export const lesson14Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP może przekierowywać użytkownika między stronami.

Zapamiętaj:

✔ header() wykonuje przekierowanie  
✔ header() musi być przed HTML  
✔ exit() zatrzymuje kod  
✔ redirect często używa się po logowaniu  

Najważniejsze elementy:
🔹 header()  
🔹 Location  
🔹 exit()  
🔹 redirect  

👉 Przekierowania są podstawą działania aplikacji webowych.
`,
}