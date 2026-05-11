import { Step } from "@/lib/types"

export const lesson2: Step[] = [
  {
    type: "text",
    title: "📦 Zmienne w PHP",
    content:
`Zmienne służą do przechowywania danych.

W PHP zmienne zaczynają się znakiem:

$

Przykłady:
👉 imię użytkownika  
👉 wiek  
👉 email  
👉 hasło  

📌 PHP automatycznie rozpoznaje typ danych.`,
  },

  {
    type: "code",
    title: "👀 Tworzenie zmiennej",
    content:
`<?php

$name = "Kacper";

echo $name;

?>`,
  },

  {
    type: "text",
    title: "🧠 Jak działa zmienna?",
    content:
`W przykładzie:

$name = "Kacper";

👉 name — nazwa zmiennej  
👉 = — przypisanie wartości  
👉 "Kacper" — tekst  

📌 echo wyświetla wartość zmiennej.`,
  },

  {
    type: "text",
    title: "🔤 Typy danych w PHP",
    content:
`Najważniejsze typy danych:

👉 string — tekst  
👉 int — liczba całkowita  
👉 float — liczba z przecinkiem  
👉 bool — true / false  
👉 array — tablica  

Przykłady:
"Hello"
123
12.5
true`,
  },

  {
    type: "code",
    title: "🖥 Różne typy danych",
    content:
`<?php

$name = "Adam";
$age = 18;
$height = 180.5;
$isAdmin = true;

echo $name;

?>`,
  },

  {
    type: "text",
    title: "➕ Łączenie tekstu",
    content:
`W PHP tekst możemy łączyć kropką .

Przykład:

echo "Witaj " . $name;

📌 To bardzo często pojawia się w PHP.`,
  },

  {
    type: "code",
    title: "🔗 Łączenie zmiennych",
    content:
`<?php

$name = "Kacper";

echo "Witaj " . $name;

?>`,
  },

  {
    type: "text",
    title: "⚠ Średnik w PHP",
    content:
`Każda instrukcja w PHP kończy się średnikiem ;

Przykład:

$name = "Adam";

📌 Brak średnika często powoduje błędy.`,
  },

  {
    type: "text",
    title: "📛 Zasady tworzenia zmiennych",
    content:
`Zmienne:
✔ zaczynają się od $
✔ mogą zawierać cyfry
✔ mogą zawierać _
✔ nie mogą zaczynać się od cyfry

Poprawnie:
$name
$user1
$user_name

Błędnie:
$1name`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz zmienną:

$name

2️⃣ Przypisz swoje imię

3️⃣ Wyświetl napis:

Witaj [twoje imię]

📌 Użyj:
echo oraz operatora .`,
  },

  {
    type: "quiz",
    question: "Jak zaczynają się zmienne w PHP?",
    answers: [
      "#",
      "&",
      "$",
      "%",
    ],
    correct: 2,
    explanation:
`Zmienne w PHP zawsze zaczynają się znakiem $.`,
  },

  {
    type: "quiz",
    question: "Czym łączymy tekst w PHP?",
    answers: [
      "+",
      ".",
      ",",
      ":",
    ],
    correct: 1,
    explanation:
`W PHP tekst łączymy za pomocą kropki .`,
  },
]

export const lesson2Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Zmienne służą do przechowywania danych w PHP.

Zapamiętaj:

✔ Zmienne zaczynają się od $  
✔ PHP posiada różne typy danych  
✔ echo wyświetla dane  
✔ Tekst łączymy kropką .  
✔ Instrukcje kończymy średnikiem ;  

Najważniejsze elementy:
🔹 string — tekst  
🔹 int — liczby  
🔹 bool — true / false  
🔹 echo — wyświetlanie danych  

👉 To podstawa dalszej pracy z formularzami i bazą danych.
`,
}