import { Step } from "@/lib/types"

export const lesson6: Step[] = [
  {
    type: "text",
    title: "📝 Formularze HTML i PHP",
    content:
`Formularze służą do przesyłania danych od użytkownika.

Przykłady:
👉 logowanie  
👉 rejestracja  
👉 wyszukiwarki  
👉 formularz kontaktowy  

📌 Formularze są podstawą backendu PHP.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa formularz?",
    content:
`Schemat działania:

1️⃣ Użytkownik wpisuje dane

2️⃣ Kliknięcie przycisku

3️⃣ Dane trafiają do PHP

4️⃣ PHP przetwarza dane

📌 Dane możemy później zapisać do MySQL.`,
  },

  {
    type: "code",
    title: "👀 Pierwszy formularz",
    content:
`<form method="POST">

    <input type="text" name="username">

    <button type="submit">
        Wyślij
    </button>

</form>`,
  },

  {
    type: "text",
    title: "📦 method POST",
    content:
`POST służy do przesyłania danych formularza.

📌 POST jest najczęściej używany:
👉 logowanie
👉 rejestracja
👉 formularze

Dane POST nie są widoczne w adresie URL.`,
  },

  {
    type: "text",
    title: "🏷 name w formularzu",
    content:
`Każdy input musi posiadać:

name=""

Przykład:

name="username"

📌 Dzięki temu PHP wie,
jak odebrać dane.`,
  },

  {
    type: "code",
    title: "📥 Odczyt danych z formularza",
    content:
`<?php

echo $_POST["username"];

?>`,
  },

  {
    type: "text",
    title: "🧾 $_POST",
    content:
`$_POST odbiera dane z formularza.

Przykład:

$_POST["username"]

oznacza:
„pobierz wartość pola username”.

📌 To jedna z najważniejszych rzeczy w PHP.`,
  },

  {
    type: "code",
    title: "🖥 Formularz + PHP",
    content:
`<form method="POST">

    <input type="text" name="username">

    <button type="submit">
        Wyślij
    </button>

</form>

<?php

echo $_POST["username"];

?>`,
  },

  {
    type: "text",
    title: "⚠ isset()",
    content:
`isset() sprawdza,
czy zmienna istnieje.

📌 Bardzo ważne przy formularzach.

Bez isset mogą pojawiać się błędy PHP.`,
  },

  {
    type: "code",
    title: "🛡 Bezpieczny formularz",
    content:
`<?php

if (isset($_POST["username"])) {

    echo $_POST["username"];
}

?>`,
  },

  {
    type: "text",
    title: "🌐 Formularze a MySQL",
    content:
`Formularze są później używane do:
👉 logowania
👉 rejestracji
👉 dodawania danych
👉 edycji rekordów

📌 W kolejnych lekcjach połączymy formularze z bazą danych.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz formularz

2️⃣ Dodaj input:
username

3️⃣ Dodaj przycisk:
Wyślij

4️⃣ Po wysłaniu formularza:
wyświetl wpisaną nazwę użytkownika

📌 Użyj:
POST oraz $_POST.`,
  },

  {
    type: "quiz",
    question: "Do czego służy metoda POST?",
    answers: [
      "Do stylowania strony",
      "Do przesyłania danych formularza",
      "Do tworzenia tabel SQL",
      "Do usuwania plików",
    ],
    correct: 1,
    explanation:
`POST służy do przesyłania danych z formularzy.`,
  },

  {
    type: "quiz",
    question: "Co robi $_POST?",
    answers: [
      "Łączy z bazą danych",
      "Wyświetla CSS",
      "Odbiera dane formularza",
      "Tworzy serwer",
    ],
    correct: 2,
    explanation:
`$_POST odbiera dane wysłane formularzem.`,
  },
]

export const lesson6Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Formularze pozwalają przesyłać dane od użytkownika do PHP.

Zapamiętaj:

✔ Formularze używają method POST  
✔ $_POST odbiera dane formularza  
✔ input musi posiadać name  
✔ isset() zabezpiecza formularz  

Najważniejsze elementy:
🔹 <form>  
🔹 method="POST"  
🔹 $_POST  
🔹 isset()  

👉 Formularze będą później połączone z MySQL.
`,
}