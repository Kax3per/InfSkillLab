import { Step } from "@/lib/types"

export const lesson4: Step[] = [
  {
    type: "text",
    title: "🧠 Instrukcje warunkowe w JavaScript",
    content:
`Instrukcje warunkowe pozwalają podejmować decyzje w programie.

Dzięki nim program może:
👉 wykonywać różne działania  
👉 reagować na dane użytkownika  
👉 sprawdzać warunki  

Najczęściej używamy:
✔ if  
✔ else  
✔ else if  
✔ switch  

📌 Warunki są podstawą logiki programowania.`,
  },

  {
    type: "text",
    title: "🔍 Instrukcja if",
    content:
`Instrukcja if sprawdza, czy warunek jest prawdziwy.

Jeśli warunek zwraca:
✔ true → kod zostanie wykonany  
✔ false → kod zostanie pominięty  

Przykład:
👉 jeśli użytkownik ma 18 lat, pokaż komunikat`,
  },

  {
    type: "code",
    title: "👀 Przykład instrukcji if",
    content: `let wiek = 18

if (wiek >= 18) {
  console.log("Jesteś pełnoletni")
}`,
  },

  {
    type: "text",
    title: "↔ else — inny przypadek",
    content:
`else wykonuje kod, gdy warunek if jest fałszywy.

Przykład:
👉 jeśli użytkownik nie ma 18 lat, pokaż inny komunikat  

📌 else działa razem z if.`,
  },

  {
    type: "code",
    title: "🔄 Przykład if else",
    content: `let wiek = 16

if (wiek >= 18) {
  console.log("Pełnoletni")
} else {
  console.log("Niepełnoletni")
}`,
  },

  {
    type: "text",
    title: "📚 else if — wiele warunków",
    content:
`else if pozwala sprawdzać wiele warunków.

Program sprawdza warunki po kolei.

Przykład:
👉 oceny w szkole  
👉 poziomy użytkownika w grze  
👉 role użytkowników`,
  },

  {
    type: "code",
    title: "📊 Przykład else if",
    content: `let punkty = 75

if (punkty >= 90) {
  console.log("Ocena 5")
} else if (punkty >= 70) {
  console.log("Ocena 4")
} else {
  console.log("Ocena niższa")
}`,
  },

  {
    type: "text",
    title: "🎛 switch",
    content:
`switch służy do sprawdzania wielu konkretnych wartości.

Często używany jest zamiast wielu if.

📌 switch porównuje wartość z kolejnymi przypadkami case.`,
  },

  {
    type: "code",
    title: "🧱 Przykład switch",
    content: `let dzien = 1

switch (dzien) {
  case 1:
    console.log("Poniedziałek")
    break

  case 2:
    console.log("Wtorek")
    break

  default:
    console.log("Inny dzień")
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z warunkami uczniowie często popełniają błędy:

❌ używanie = zamiast ===  
❌ brak nawiasów klamrowych  
❌ brak break w switch  
❌ niepoprawne warunki logiczne  

📌 = przypisuje wartość, a === porównuje wartości.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz zmienną "temperatura".

Następnie:
👉 jeśli temperatura jest większa lub równa 20 → wyświetl "Ciepło"  
👉 w przeciwnym razie → wyświetl "Zimno"

Użyj instrukcji if else.`,
  },

  {
    type: "quiz",
    question: "Która instrukcja służy do sprawdzania warunku?",
    answers: [
      "for",
      "if",
      "while",
      "break",
    ],
    correct: 1,
    explanation:
`Instrukcja if służy do sprawdzania warunków w JavaScript.`,
  },

  {
    type: "quiz",
    question: "Do czego służy break w switch?",
    answers: [
      "Kończy program",
      "Tworzy zmienną",
      "Przerywa dany case",
      "Uruchamia pętlę",
    ],
    correct: 2,
    explanation:
`break zatrzymuje wykonywanie kolejnych przypadków w switch.`,
  },
]

export const lesson4Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Instrukcje warunkowe pozwalają podejmować decyzje w programie.

Zapamiętaj najważniejsze informacje:

✔ if sprawdza warunek  
✔ else wykonuje kod w innym przypadku  
✔ else if pozwala sprawdzać wiele warunków  
✔ switch służy do porównywania wartości  
✔ Warunki zwracają true lub false  

Najważniejsze instrukcje:
🔹 if  
🔹 else  
🔹 else if  
🔹 switch  

👉 Instrukcje warunkowe są podstawą logiki aplikacji i stron internetowych.
`,
}