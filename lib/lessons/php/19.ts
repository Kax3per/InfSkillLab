import { Step } from "@/lib/types"

export const lesson19: Step[] = [
  {
    type: "text",
    title: "📬 Wysyłanie formularzy metodą GET",
    content:
`Do przesyłania danych w PHP używamy:
👉 GET
👉 POST

GET przesyła dane w adresie URL.

📌 GET bardzo często pojawia się na INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa GET?",
    content:
`Dane są dodawane do adresu strony.

Przykład:

index.php?name=Kacper

📌 Wszystko widać w URL.`,
  },

  {
    type: "code",
    title: "🖥 Formularz GET",
    content:
`<form method="GET">

    <input
        type="text"
        name="username"
    >

    <button type="submit">
        Wyślij
    </button>

</form>`,
  },

  {
    type: "text",
    title: "📦 $_GET",
    content:
`Dane z GET odbieramy przez:

$_GET

📌 Działa podobnie do $_POST.`,
  },

  {
    type: "code",
    title: "👀 Odczyt danych GET",
    content:
`<?php

echo $_GET["username"];

?>`,
  },

  {
    type: "text",
    title: "⚠ GET vs POST",
    content:
`GET:
👉 dane widać w URL
👉 używany do wyszukiwania

POST:
👉 dane są ukryte
👉 używany do logowania

📌 Hasła wysyłamy przez POST.`,
  },

  {
    type: "code",
    title: "🔍 Adres URL z GET",
    content:
`http://localhost/index.php?username=admin`,
  },

  {
    type: "text",
    title: "🛡 isset() przy GET",
    content:
`Przed użyciem $_GET
warto sprawdzić:

isset()

📌 Unikniemy błędów PHP.`,
  },

  {
    type: "code",
    title: "✅ Bezpieczny GET",
    content:
`<?php

if (isset($_GET["username"])) {

    echo $_GET["username"];
}

?>`,
  },

  {
    type: "text",
    title: "📊 Gdzie używa się GET?",
    content:
`GET najczęściej używa się do:

👉 wyszukiwarki  
👉 filtrowania produktów  
👉 przekazywania id w URL  
👉 paginacji`,
  },

  {
    type: "code",
    title: "🧾 Pobieranie id z URL",
    content:
`<?php

$id = $_GET["id"];

echo $id;

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 brak isset()  
👉 literówki w $_GET  
👉 brak name w formularzu  
👉 używanie GET do haseł`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz formularz:
method="GET"

2️⃣ Dodaj input:
username

3️⃣ Po wysłaniu:
wyświetl dane ze zmiennej $_GET

4️⃣ Dodaj także:
isset()

📌 Sprawdź adres URL po wysłaniu formularza.`,
  },

  {
    type: "quiz",
    question: "Gdzie metoda GET przesyła dane?",
    answers: [
      "Do bazy danych",
      "W adresie URL",
      "Do CSS",
      "Do sesji",
    ],
    correct: 1,
    explanation:
`GET przesyła dane w adresie URL.`,
  },

  {
    type: "quiz",
    question: "Która zmienna odbiera dane GET?",
    answers: [
      "$_POST",
      "$_FILES",
      "$_SESSION",
      "$_GET",
    ],
    correct: 3,
    explanation:
`$_GET odbiera dane przesłane metodą GET.`,
  },
]

export const lesson19Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP obsługuje formularze metodą GET.

Zapamiętaj:

✔ GET przesyła dane w URL  
✔ $_GET odbiera dane  
✔ isset() zabezpiecza kod  
✔ GET nie nadaje się do haseł  

Najważniejsze elementy:
🔹 GET  
🔹 $_GET  
🔹 URL  
🔹 isset()  

👉 GET jest często używany w wyszukiwarkach i filtrowaniu danych.
`,
}