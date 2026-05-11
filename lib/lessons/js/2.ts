import { Step } from "@/lib/types"

export const lesson2: Step[] = [
  {
    type: "text",
    title: "📦 Typy danych w JavaScript",
    content:
`W JavaScript możemy przechowywać różne rodzaje danych.

Najważniejsze typy danych:
👉 string — tekst  
👉 number — liczby  
👉 boolean — true lub false  

Przykłady:
🔹 "Cześć" → tekst  
🔹 25 → liczba  
🔹 true → wartość logiczna  

📌 Typ danych określa, jakie informacje przechowuje zmienna.`,
  },

  {
    type: "text",
    title: "🔤 String — tekst",
    content:
`String to tekst zapisany w cudzysłowach.

Przykłady:
🔹 "Kacper"  
🔹 'JavaScript'  
🔹 "Mam 18 lat"  

📌 Tekst zawsze zapisujemy w:
✔ ""  
lub  
✔ ''`,
  },

  {
    type: "code",
    title: "👀 Przykład string",
    content: `let imie = "Kacper"

console.log(imie)`,
  },

  {
    type: "text",
    title: "🔢 Number — liczby",
    content:
`Typ number służy do przechowywania liczb.

Możemy zapisywać:
👉 liczby całkowite  
👉 liczby dziesiętne  

Przykłady:
🔹 10  
🔹 3.14  
🔹 -5  

📌 Liczb nie zapisujemy w cudzysłowach.`,
  },

  {
    type: "code",
    title: "🧮 Przykład number",
    content: `let wiek = 18

console.log(wiek)`,
  },

  {
    type: "text",
    title: "✅ Boolean — true / false",
    content:
`Boolean przechowuje tylko dwie wartości:
✔ true  
✔ false  

Najczęściej używany jest w:
👉 instrukcjach warunkowych  
👉 sprawdzaniu poprawności danych  

Przykład:
🔹 true → prawda  
🔹 false → fałsz`,
  },

  {
    type: "code",
    title: "🔍 Przykład boolean",
    content: `let pelnoletni = true

console.log(pelnoletni)`,
  },

  {
    type: "text",
    title: "➕ Łączenie tekstu i zmiennych",
    content:
`W JavaScript możemy łączyć tekst ze zmiennymi.

Służy do tego operator:
👉 +

Przykład:
🔹 "Cześć " + imie

📌 Dzięki temu możemy tworzyć dynamiczne komunikaty.`,
  },

  {
    type: "code",
    title: "🧱 Łączenie danych",
    content: `let imie = "Kacper"

console.log("Cześć " + imie)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z typami danych uczniowie często popełniają błędy:

❌ zapisywanie liczb w cudzysłowach  
❌ brak cudzysłowów przy stringach  
❌ mylenie true z "true"  
❌ używanie polskich znaków w nazwach zmiennych  

📌 "18" to tekst, a 18 to liczba.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz 3 zmienne:

👉 imie — tekst  
👉 wiek — liczba  
👉 uczen — true lub false  

Następnie:
✔ wyświetl wszystkie dane za pomocą console.log()`,
  },

  {
    type: "quiz",
    question: "Który typ danych przechowuje tekst?",
    answers: [
      "number",
      "boolean",
      "string",
      "array",
    ],
    correct: 2,
    explanation:
`Typ string służy do przechowywania tekstu.`,
  },

  {
    type: "quiz",
    question: "Która wartość jest typu boolean?",
    answers: [
      `"18"`,
      `"true"`,
      `18`,
      `true`,
    ],
    correct: 3,
    explanation:
`true jest wartością logiczną typu boolean.

"true" to zwykły tekst.`,
  },
]

export const lesson2Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
W JavaScript istnieją różne typy danych.

Zapamiętaj najważniejsze informacje:

✔ string przechowuje tekst  
✔ number przechowuje liczby  
✔ boolean przechowuje true lub false  
✔ Tekst zapisujemy w cudzysłowach  
✔ Dane możemy wyświetlać za pomocą console.log()  

Najważniejsze typy:
🔹 string — tekst  
🔹 number — liczby  
🔹 boolean — wartości logiczne  

👉 Typy danych są podstawą programowania w JavaScript.
`,
}