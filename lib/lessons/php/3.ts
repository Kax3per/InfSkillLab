import { Step } from "@/lib/types"

export const lesson3: Step[] = [
  {
    type: "text",
    title: "⚙ Instrukcje warunkowe w PHP",
    content:
`Instrukcje warunkowe pozwalają wykonywać kod tylko wtedy, gdy warunek jest prawdziwy.

Najczęściej używamy:
👉 if
👉 else
👉 else if

📌 Warunki są bardzo ważne przy logowaniu, formularzach i pracy z bazą danych.`,
  },

  {
    type: "code",
    title: "👀 Pierwszy if",
    content:
`<?php

$age = 18;

if ($age >= 18) {
    echo "Jesteś pełnoletni";
}

?>`,
  },

  {
    type: "text",
    title: "🧠 Jak działa if?",
    content:
`if sprawdza warunek.

Przykład:

if ($age >= 18)

oznacza:

„jeśli wiek jest większy lub równy 18”.

📌 Kod w nawiasach klamrowych wykona się tylko wtedy, gdy warunek będzie prawdziwy.`,
  },

  {
    type: "text",
    title: "📊 Operatory porównania",
    content:
`Najważniejsze operatory:

👉 == — równa się  
👉 != — różne od  
👉 > — większe od  
👉 < — mniejsze od  
👉 >= — większe lub równe  
👉 <= — mniejsze lub równe  

📌 Są bardzo często używane w PHP.`,
  },

  {
    type: "code",
    title: "🔍 Sprawdzanie warunku",
    content:
`<?php

$points = 90;

if ($points > 50) {
    echo "Egzamin zdany";
}

?>`,
  },

  {
    type: "text",
    title: "❌ else",
    content:
`else wykonuje kod, gdy warunek jest fałszywy.

Przykład:
👉 jeśli użytkownik poda złe hasło
👉 jeśli formularz jest pusty
👉 jeśli użytkownik nie istnieje`,
  },

  {
    type: "code",
    title: "👀 if else",
    content:
`<?php

$age = 15;

if ($age >= 18) {
    echo "Pełnoletni";
} else {
    echo "Niepełnoletni";
}

?>`,
  },

  {
    type: "text",
    title: "🔀 else if",
    content:
`else if pozwala sprawdzać wiele warunków.

Przykład:
👉 oceny
👉 role użytkowników
👉 poziomy dostępu`,
  },

  {
    type: "code",
    title: "🖥 else if",
    content:
`<?php

$score = 80;

if ($score >= 90) {
    echo "5";
}
else if ($score >= 75) {
    echo "4";
}
else {
    echo "3";
}

?>`,
  },

  {
    type: "text",
    title: "🛡 Praktyczne zastosowanie",
    content:
`Instrukcje warunkowe są używane praktycznie wszędzie.

Przykłady:
👉 logowanie użytkownika  
👉 sprawdzanie hasła  
👉 walidacja formularzy  
👉 sprawdzanie danych z bazy  
👉 panel administratora  

📌 Bez if praktycznie nie istnieje backend.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz zmienną:

$points = 70;

2️⃣ Jeśli liczba punktów jest większa lub równa 50:
wyświetl:

Egzamin zdany

3️⃣ W przeciwnym przypadku:
wyświetl:

Egzamin niezdany

📌 Użyj:
if oraz else.`,
  },

  {
    type: "quiz",
    question: "Do czego służy instrukcja if?",
    answers: [
      "Do tworzenia tabel SQL",
      "Do wykonywania kodu warunkowo",
      "Do stylowania strony",
      "Do usuwania plików",
    ],
    correct: 1,
    explanation:
`if wykonuje kod tylko wtedy, gdy warunek jest prawdziwy.`,
  },

  {
    type: "quiz",
    question: "Który operator oznacza „większe lub równe”?",
    answers: [
      "<=",
      "==",
      ">=",
      "!=",
    ],
    correct: 2,
    explanation:
`>= oznacza „większe lub równe”.`,
  },
]

export const lesson3Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Instrukcje warunkowe pozwalają kontrolować działanie aplikacji.

Zapamiętaj:

✔ if sprawdza warunek  
✔ else działa gdy warunek jest fałszywy  
✔ else if pozwala sprawdzać wiele warunków  
✔ Operatory porównania są podstawą backendu  

Najważniejsze operatory:
🔹 ==  
🔹 !=  
🔹 >  
🔹 <  
🔹 >=  
🔹 <=  

👉 Warunki będą używane w logowaniu, formularzach i bazach danych.
`,
}