import { Step } from "@/lib/types"

export const lesson5: Step[] = [
  {
    type: "text",
    title: "🔁 Pętle w JavaScript",
    content:
`Pętle pozwalają wielokrotnie wykonywać ten sam kod.

Dzięki pętlom możemy:
👉 powtarzać instrukcje  
👉 wyświetlać dane  
👉 pracować z tablicami  
👉 tworzyć liczniki  

Najczęściej używane pętle:
✔ for  
✔ while  
✔ do while  

📌 Pętle są bardzo ważne w programowaniu i często pojawiają się na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🧮 Pętla for",
    content:
`Pętla for wykonuje kod określoną liczbę razy.

Składa się z:
👉 startu licznika  
👉 warunku  
👉 zmiany licznika  

Przykład:
🔹 wyświetlenie liczb od 1 do 5`,
  },

  {
    type: "code",
    title: "👀 Przykład pętli for",
    content: `for (let i = 1; i <= 5; i++) {
  console.log(i)
}`,
  },

  {
    type: "text",
    title: "🔍 Jak działa for?",
    content:
`Przykład:

for (let i = 1; i <= 5; i++)

Elementy pętli:
👉 let i = 1 → start  
👉 i <= 5 → warunek działania  
👉 i++ → zwiększanie licznika  

📌 Pętla działa dopóki warunek jest prawdziwy.`,
  },

  {
    type: "text",
    title: "♾ Pętla while",
    content:
`while wykonuje kod dopóki warunek jest prawdziwy.

Najpierw sprawdzany jest warunek,
a później wykonywany kod.

📌 Trzeba pamiętać o zmianie wartości licznika.`,
  },

  {
    type: "code",
    title: "🔄 Przykład while",
    content: `let liczba = 1

while (liczba <= 3) {
  console.log(liczba)

  liczba++
}`,
  },

  {
    type: "text",
    title: "▶ do while",
    content:
`Pętla do while wykona kod przynajmniej raz.

Różnica:
👉 warunek sprawdzany jest na końcu pętli  

📌 Nawet jeśli warunek będzie false, kod wykona się raz.`,
  },

  {
    type: "code",
    title: "🧱 Przykład do while",
    content: `let numer = 1

do {
  console.log(numer)

  numer++
} while (numer <= 3)`,
  },

  {
    type: "text",
    title: "⛔ break i continue",
    content:
`Dodatkowe instrukcje w pętlach:

👉 break — zatrzymuje pętlę  
👉 continue — pomija jedną iterację  

📌 Są bardzo przydatne podczas pracy z większą ilością danych.`,
  },

  {
    type: "code",
    title: "⚡ Przykład break",
    content: `for (let i = 1; i <= 5; i++) {

  if (i === 3) {
    break
  }

  console.log(i)
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z pętlami uczniowie często popełniają błędy:

❌ nieskończona pętla  
❌ brak zwiększania licznika  
❌ błędny warunek  
❌ używanie złej zmiennej w pętli  

📌 Nieskończona pętla może zawiesić program lub przeglądarkę.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Użyj pętli for.

Wyświetl liczby:
👉 od 1 do 10

Następnie:
✔ wyświetl tylko liczby parzyste.`,
  },

  {
    type: "quiz",
    question: "Która pętla wykonuje kod określoną liczbę razy?",
    answers: [
      "if",
      "switch",
      "for",
      "break",
    ],
    correct: 2,
    explanation:
`Pętla for najczęściej używana jest do wykonywania kodu określoną liczbę razy.`,
  },

  {
    type: "quiz",
    question: "Do czego służy break?",
    answers: [
      "Tworzy zmienną",
      "Zatrzymuje pętlę",
      "Powtarza kod",
      "Sprawdza warunek",
    ],
    correct: 1,
    explanation:
`break zatrzymuje działanie pętli.`,
  },
]

export const lesson5Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Pętle pozwalają wielokrotnie wykonywać kod.

Zapamiętaj najważniejsze informacje:

✔ for wykonuje kod określoną liczbę razy  
✔ while działa dopóki warunek jest true  
✔ do while wykona kod przynajmniej raz  
✔ break zatrzymuje pętlę  
✔ continue pomija jedną iterację  

Najważniejsze pętle:
🔹 for  
🔹 while  
🔹 do while  

👉 Pętle są podstawą pracy z danymi i automatyzacji kodu.
`,
}