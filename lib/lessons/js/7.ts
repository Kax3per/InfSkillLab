import { Step } from "@/lib/types"

export const lesson7: Step[] = [
  {
    type: "text",
    title: "📦 Scope w JavaScript",
    content:
`Scope oznacza zakres działania zmiennych.

Określa:
👉 gdzie zmienna jest dostępna  
👉 z którego miejsca można jej użyć  

Najważniejsze rodzaje scope:
✔ global scope  
✔ block scope  
✔ function scope  

📌 Scope pomaga kontrolować działanie programu i unikać błędów.`,
  },

  {
    type: "text",
    title: "🌍 Global scope",
    content:
`Zmienne utworzone poza funkcją lub blokiem mają zasięg globalny.

Oznacza to, że:
👉 można używać ich w całym programie  

📌 Zbyt wiele zmiennych globalnych może powodować problemy w aplikacji.`,
  },

  {
    type: "code",
    title: "👀 Przykład global scope",
    content: `let imie = "Kacper"

function pokazImie() {
  console.log(imie)
}

pokazImie()`,
  },

  {
    type: "text",
    title: "📦 Block scope",
    content:
`Zmienne utworzone za pomocą:
✔ let  
✔ const  

działają tylko wewnątrz bloku:
👉 {}  

Przykład:
👉 if  
👉 for  
👉 while  

📌 Poza blokiem zmienna nie istnieje.`,
  },

  {
    type: "code",
    title: "🔒 Przykład block scope",
    content: `if (true) {
  let liczba = 10

  console.log(liczba)
}

// console.log(liczba)`,
  },

  {
    type: "text",
    title: "⚠ var vs let vs const",
    content:
`W JavaScript istnieją różne sposoby tworzenia zmiennych.

👉 var — stary sposób  
👉 let — zmienna możliwa do zmiany  
👉 const — stała wartość  

📌 W nowoczesnym JavaScript najczęściej używamy:
✔ let  
✔ const`,
  },

  {
    type: "code",
    title: "🧱 let i const",
    content: `let wiek = 18

wiek = 19

const kraj = "Polska"

// kraj = "Niemcy"`,
  },

  {
    type: "text",
    title: "🚀 Hoisting",
    content:
`Hoisting oznacza przenoszenie deklaracji na górę zakresu.

Dotyczy głównie:
👉 var  
👉 function  

📌 let i const również są hoistowane,
ale nie można używać ich przed deklaracją.`,
  },

  {
    type: "code",
    title: "📈 Przykład hoisting",
    content: `console.log(tekst)

var tekst = "JavaScript"`,
  },

  {
    type: "text",
    title: "❌ Temporal Dead Zone",
    content:
`Zmienne let i const posiadają:
👉 Temporal Dead Zone (TDZ)

Oznacza to, że:
❌ nie można używać zmiennej przed jej utworzeniem  

📌 Próba użycia spowoduje błąd.`,
  },

  {
    type: "code",
    title: "⛔ Błąd z let",
    content: `// console.log(imie)

let imie = "Kacper"`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy ze scope uczniowie często popełniają błędy:

❌ używanie zmiennej poza blokiem  
❌ mylenie let z const  
❌ używanie var w nowym kodzie  
❌ korzystanie ze zmiennej przed deklaracją  

📌 Scope pomaga utrzymać porządek w aplikacji.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz zmienną:
👉 imie = "Kacper"

Następnie:
✔ utwórz instrukcję if  
✔ wewnątrz dodaj zmienną "wiek"  
✔ wyświetl obie zmienne w konsoli  

Sprawdź:
👉 czy możesz użyć zmiennej "wiek" poza if.`,
  },

  {
    type: "quiz",
    question: "Które słowo służy do tworzenia stałej wartości?",
    answers: [
      "var",
      "if",
      "let",
      "const",
    ],
    correct: 3,
    explanation:
`const tworzy zmienną, której wartości nie można zmienić.`,
  },

  {
    type: "quiz",
    question: "Co oznacza scope?",
    answers: [
      "Typ danych",
      "Zakres działania zmiennej",
      "Rodzaj pętli",
      "Operator matematyczny",
    ],
    correct: 1,
    explanation:
`Scope określa, gdzie zmienna jest dostępna w programie.`,
  },
]

export const lesson7Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Scope określa zakres działania zmiennych w JavaScript.

Zapamiętaj najważniejsze informacje:

✔ let działa w obrębie bloku  
✔ const tworzy stałą wartość  
✔ var jest starszym sposobem tworzenia zmiennych  
✔ Hoisting przenosi deklaracje na górę zakresu  
✔ let i const mają Temporal Dead Zone  

Najważniejsze pojęcia:
🔹 scope  
🔹 let  
🔹 const  
🔹 var  
🔹 hoisting  

👉 Zrozumienie scope jest bardzo ważne w nowoczesnym JavaScript.
`,
}