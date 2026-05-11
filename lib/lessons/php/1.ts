import { Step } from "@/lib/types"

export const lesson1: Step[] = [
  {
    type: "text",
    title: "🐘 Co to jest PHP?",
    content:
`PHP to język backendowy używany do tworzenia dynamicznych stron internetowych.

Backend oznacza logikę działającą „w tle” na serwerze.

Dzięki PHP możemy:
👉 odbierać dane z formularzy  
👉 łączyć się z bazą danych  
👉 logować użytkowników  
👉 rejestrować konta  
👉 dodawać dane do MySQL  
👉 wyświetlać dane z bazy  

📌 PHP bardzo często współpracuje z SQL i MySQL.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa PHP?",
    content:
`PHP wykonuje się na serwerze.

Schemat działania:

1️⃣ Użytkownik otwiera stronę

2️⃣ Serwer wykonuje kod PHP

3️⃣ Wynik trafia do przeglądarki

📌 Przeglądarka nie widzi kodu PHP.
Widzi tylko gotowy wynik.`,
  },

  {
    type: "text",
    title: "📂 Gdzie tworzymy pliki PHP?",
    content:
`Pliki PHP tworzymy w folderze:

htdocs

Przykład:

C:\\xampp\\htdocs\\php

📌 To główny folder localhost.`,
  },

  {
    type: "text",
    title: "🌐 Jak uruchomić stronę PHP?",
    content:
`Jeśli utworzymy folder:

C:\\xampp\\htdocs\\php

to stronę otwieramy przez:

http://localhost/php

📌 Apache musi być uruchomiony.`,
  },

  {
    type: "code",
    title: "👀 Pierwszy kod PHP",
    content:
`<?php

echo "Witaj PHP!";

?>`,
  },

  {
    type: "text",
    title: "🧾 Znaczniki PHP",
    content:
`Kod PHP zapisujemy pomiędzy:

<?php

?>

Przykład:

<?php

echo "Hello";

?>

📌 Wszystko poza tymi znacznikami jest traktowane jako zwykły HTML.`,
  },

  {
    type: "text",
    title: "📢 Co robi echo?",
    content:
`echo wyświetla tekst na stronie.

Przykład:

echo "Test";

📌 To jedna z najważniejszych komend w PHP.`,
  },

  {
    type: "code",
    title: "🖥 Przykład strony PHP",
    content:
`<?php

echo "Moja pierwsza strona PHP";

?>`,
  },

  {
    type: "text",
    title: "💾 Rozszerzenie plików",
    content:
`Pliki PHP muszą mieć rozszerzenie:

.php

Przykłady:
👉 index.php  
👉 login.php  
👉 users.php  

📌 Jeśli plik ma rozszerzenie .html,
PHP nie będzie działać.`,
  },

  {
    type: "text",
    title: "⚡ PHP + SQL",
    content:
`PHP bardzo często współpracuje z bazą danych MySQL.

Najczęstsze zastosowania:
👉 logowanie użytkowników  
👉 rejestracja  
👉 pobieranie danych  
👉 dodawanie rekordów  
👉 edycja danych  
👉 usuwanie danych  

📌 W kolejnych lekcjach połączymy PHP z SQL.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz folder:
php1

2️⃣ W folderze utwórz plik:
index.php

3️⃣ Wklej kod:

<?php

echo "PHP działa poprawnie!";

?>

4️⃣ Otwórz stronę:

http://localhost/php1

📌 Jeśli widzisz napis:
„PHP działa poprawnie!”
to wszystko działa.`,
  },

  {
    type: "quiz",
    question: "Do czego służy PHP?",
    answers: [
      "Do backendu strony",
      "Do montowania filmów",
      "Do tworzenia grafiki",
      "Do projektowania 3D",
    ],
    correct: 0,
    explanation:
`PHP służy do tworzenia backendu aplikacji i stron internetowych.`,
  },

  {
    type: "quiz",
    question: "Jakie rozszerzenie mają pliki PHP?",
    answers: [
      ".sql",
      ".css",
      ".php",
      ".js",
    ],
    correct: 2,
    explanation:
`Pliki PHP muszą posiadać rozszerzenie .php`,
  },
]

export const lesson1Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP to język backendowy używany do tworzenia dynamicznych stron internetowych.

Zapamiętaj:

✔ PHP działa po stronie serwera  
✔ Kod PHP zapisujemy między <?php ?>  
✔ echo wyświetla tekst na stronie  
✔ Pliki PHP mają rozszerzenie .php  
✔ PHP często współpracuje z MySQL i SQL  

Najważniejsze elementy:
🔹 localhost — lokalny serwer  
🔹 htdocs — folder projektów  
🔹 PHP — backend aplikacji  
🔹 MySQL — baza danych  

👉 To podstawa dalszej nauki PHP i pracy z bazą danych.
`,
}