import { Step } from "@/lib/types"

export const lesson5: Step[] = [
  {
    type: "text",
    title: "📦 Tablice w PHP",
    content:
`Tablice pozwalają przechowywać wiele wartości w jednej zmiennej.

Przykłady:
👉 lista użytkowników  
👉 produkty sklepu  
👉 wiadomości  
👉 rekordy z bazy danych  

📌 Tablice są bardzo ważne w PHP i MySQL.`,
  },

  {
    type: "code",
    title: "👀 Pierwsza tablica",
    content:
`<?php

$users = ["Adam", "Kacper", "Ola"];

?>`,
  },

  {
    type: "text",
    title: "🧠 Jak działa tablica?",
    content:
`W tablicy możemy przechowywać wiele elementów.

Przykład:

["Adam", "Kacper", "Ola"]

Każdy element posiada swój numer.

📌 Numeracja zaczyna się od 0.`,
  },

  {
    type: "code",
    title: "🔍 Pobieranie elementu",
    content:
`<?php

$users = ["Adam", "Kacper", "Ola"];

echo $users[0];

?>`,
  },

  {
    type: "text",
    title: "📛 Indeksy tablicy",
    content:
`Elementy tablicy mają indeksy:

$users[0]
👉 Adam

$users[1]
👉 Kacper

$users[2]
👉 Ola

📌 Indeks oznacza pozycję elementu.`,
  },

  {
    type: "code",
    title: "➕ Dodawanie elementu",
    content:
`<?php

$users = ["Adam", "Kacper"];

$users[] = "Ola";

print_r($users);

?>`,
  },

  {
    type: "text",
    title: "🖨 print_r()",
    content:
`print_r() wyświetla całą tablicę.

Przykład:

print_r($users);

📌 Funkcja bardzo przydaje się podczas debugowania.`,
  },

  {
    type: "text",
    title: "🔁 foreach i tablice",
    content:
`Najczęściej tablice wyświetlamy za pomocą foreach.

📌 foreach przechodzi po wszystkich elementach tablicy.`,
  },

  {
    type: "code",
    title: "🖥 foreach z tablicą",
    content:
`<?php

$users = ["Adam", "Kacper", "Ola"];

foreach ($users as $user) {

    echo $user . "<br>";
}

?>`,
  },

  {
    type: "text",
    title: "🛡 Tablice a MySQL",
    content:
`Dane pobierane z MySQL często trafiają do tablic.

Przykłady:
👉 lista użytkowników  
👉 produkty  
👉 zamówienia  
👉 komentarze  

📌 Tablice są podstawą pracy z bazą danych.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz tablicę:

$colors

2️⃣ Dodaj 3 kolory

3️⃣ Wyświetl wszystkie elementy za pomocą:

foreach

📌 Użyj:
echo oraz <br>.`,
  },

  {
    type: "quiz",
    question: "Od jakiego indeksu zaczyna się tablica w PHP?",
    answers: [
      "0",
      "1",
      "-1",
      "10",
    ],
    correct: 0,
    explanation:
`Numeracja elementów tablicy zaczyna się od 0.`,
  },

  {
    type: "quiz",
    question: "Która funkcja wyświetla całą tablicę?",
    answers: [
      "echo",
      "foreach",
      "print_r()",
      "isset()",
    ],
    correct: 2,
    explanation:
`print_r() służy do wyświetlania całej zawartości tablicy.`,
  },
]

export const lesson5Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Tablice pozwalają przechowywać wiele danych w jednej zmiennej.

Zapamiętaj:

✔ Tablice przechowują wiele elementów  
✔ Numeracja zaczyna się od 0  
✔ foreach służy do wyświetlania tablic  
✔ print_r() pokazuje całą tablicę  

Najważniejsze elementy:
🔹 [] — tworzenie tablicy  
🔹 foreach — przechodzenie po tablicy  
🔹 indeks — numer elementu  

👉 Tablice będą bardzo często używane przy pracy z MySQL.
`,
}