import { Step } from "@/lib/types"

export const lesson4: Step[] = [
  {
    type: "text",
    title: "🔁 Pętle w PHP",
    content:
`Pętle pozwalają wykonywać kod wiele razy.

Najczęściej używane pętle:
👉 for
👉 while
👉 foreach

📌 Pętle są bardzo często używane przy wyświetlaniu danych z bazy MySQL.`,
  },

  {
    type: "text",
    title: "🧠 Po co używamy pętli?",
    content:
`Bez pętli musielibyśmy wielokrotnie pisać ten sam kod.

Przykład:
👉 wyświetlanie użytkowników
👉 komentarzy
👉 produktów
👉 rekordów z bazy danych

📌 Pętla automatyzuje powtarzalne czynności.`,
  },

  {
    type: "code",
    title: "👀 Pierwsza pętla for",
    content:
`<?php

for ($i = 1; $i <= 5; $i++) {
    echo $i;
}

?>`,
  },

  {
    type: "text",
    title: "⚙ Jak działa for?",
    content:
`Pętla for składa się z 3 elementów:

👉 start
👉 warunek
👉 zwiększanie wartości

Przykład:

$i = 1
start od 1

$i <= 5
dopóki liczba jest mniejsza lub równa 5

$i++
zwiększaj o 1`,
  },

  {
    type: "code",
    title: "🖥 Wyświetlanie tekstu",
    content:
`<?php

for ($i = 1; $i <= 3; $i++) {
    echo "PHP<br>";
}

?>`,
  },

  {
    type: "text",
    title: "🔄 Pętla while",
    content:
`while wykonuje kod dopóki warunek jest prawdziwy.

📌 while bardzo często pojawia się przy pobieraniu danych z MySQL.`,
  },

  {
    type: "code",
    title: "👀 Pętla while",
    content:
`<?php

$i = 1;

while ($i <= 5) {

    echo $i;

    $i++;
}

?>`,
  },

  {
    type: "text",
    title: "⚠ Nieskończona pętla",
    content:
`Jeśli zapomnimy zwiększać zmienną:

$i++;

to pętla może działać bez końca.

📌 To bardzo częsty błąd początkujących.`,
  },

  {
    type: "text",
    title: "📦 Tablice i foreach",
    content:
`foreach służy do przechodzenia po tablicach.

Przykłady:
👉 lista użytkowników
👉 produkty
👉 rekordy z bazy danych`,
  },

  {
    type: "code",
    title: "🧾 foreach",
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
    title: "🛡 Pętle a baza danych",
    content:
`Pętle są bardzo ważne przy pracy z SQL.

Przykład:
👉 pobieramy rekordy z bazy
👉 wyświetlamy je w while

📌 W kolejnych lekcjach będziemy używać while razem z MySQL.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz pętlę for

2️⃣ Wyświetl liczby:
1
2
3
4
5

3️⃣ Użyj:
echo

📌 Spróbuj samodzielnie zmienić zakres liczb.`,
  },

  {
    type: "quiz",
    question: "Która pętla jest często używana przy danych z MySQL?",
    answers: [
      "switch",
      "while",
      "include",
      "echo",
    ],
    correct: 1,
    explanation:
`while bardzo często służy do wyświetlania rekordów z bazy danych.`,
  },

  {
    type: "quiz",
    question: "Do czego służy foreach?",
    answers: [
      "Do logowania",
      "Do przechodzenia po tablicach",
      "Do usuwania danych",
      "Do tworzenia CSS",
    ],
    correct: 1,
    explanation:
`foreach służy do przechodzenia po elementach tablicy.`,
  },
]

export const lesson4Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Pętle pozwalają wykonywać kod wielokrotnie.

Zapamiętaj:

✔ for — pętla z licznikiem  
✔ while — działa dopóki warunek jest prawdziwy  
✔ foreach — działa na tablicach  
✔ Pętle są bardzo ważne przy pracy z MySQL  

Najważniejsze zastosowania:
🔹 wyświetlanie rekordów  
🔹 listy użytkowników  
🔹 produkty sklepu  
🔹 komentarze  

👉 Pętle będą bardzo często używane w backendzie PHP.
`,
}