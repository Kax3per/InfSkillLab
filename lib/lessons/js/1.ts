import { Step } from "@/lib/types"

export const lesson1: Step[] = [
  {
    type: "text",
    title: "🟨 Co to jest JavaScript?",
    content:
`JavaScript (JS) to język programowania używany głównie do tworzenia interaktywnych stron internetowych.

Dzięki JavaScript możesz:
👉 reagować na kliknięcia użytkownika  
👉 zmieniać zawartość strony  
👉 tworzyć animacje  
👉 tworzyć gry i aplikacje  
👉 pobierać dane z internetu  

📌 JavaScript działa w przeglądarce internetowej.

Najczęściej używa się go razem z:
✔ HTML — struktura strony  
✔ CSS — wygląd strony  
✔ JavaScript — działanie strony`,
  },

  {
    type: "text",
    title: "📄 Plik JavaScript",
    content:
`Kod JavaScript zapisujemy w plikach z rozszerzeniem:

👉 .js

Przykłady:
✔ app.js  
✔ script.js  
✔ main.js  

📌 Rozszerzenie .js oznacza plik JavaScript.

Takie pliki tworzymy np. w:
🔹 Visual Studio Code  
🔹 WebStorm  
🔹 Notatniku`,
  },

  {
    type: "text",
    title: "🧠 Jak uruchomić JavaScript?",
    content:
`JavaScript można uruchamiać bezpośrednio w przeglądarce internetowej.

Najłatwiejszy sposób:
👉 otworzyć konsolę przeglądarki.

Jak wejść do konsoli?

🌐 Google Chrome:
✔ kliknij F12  
✔ wybierz zakładkę Console

🧭 Safari:
✔ Preferences → Advanced  
✔ zaznacz "Show Develop menu"  
✔ potem Develop → Show JavaScript Console

🦊 Firefox:
✔ F12 → Console

📌 Konsola pozwala testować kod JavaScript na żywo.`,
  },

  {
    type: "code",
    title: "👀 Pierwszy kod JavaScript",
    content: `console.log("Witaj świecie")`,
  },

  {
    type: "text",
    title: "🔍 Co robi console.log()?",
    content:
`console.log() służy do wyświetlania informacji w konsoli przeglądarki.

Przykład:

console.log("Cześć")

👉 console.log() — polecenie wyświetlenia danych  
👉 "Cześć" — tekst do wyświetlenia

Po uruchomieniu kodu napis pojawi się w konsoli przeglądarki.`,
  },

  {
    type: "text",
    title: "📦 Zmienne w JavaScript",
    content:
`Zmienne służą do przechowywania danych.

Najczęściej używamy:
✔ let  
✔ const

Przykłady danych:
🔹 tekst  
🔹 liczby  
🔹 true / false

📌 Dzięki zmiennym możemy zapisywać informacje i używać ich później.`,
  },

  {
    type: "code",
    title: "🧱 Przykład zmiennej",
    content: `let imie = "Kacper"

console.log(imie)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Początkujący często popełniają błędy:

❌ brak nawiasu  
❌ brak cudzysłowu  
❌ literówki  
❌ zła nazwa zmiennej  
❌ brak ; na końcu instrukcji

📌 Nawet mały błąd może zatrzymać działanie programu.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz zmienną o nazwie "miasto".

Wpisz do niej nazwę swojego miasta.

Następnie:
👉 wyświetl zmienną za pomocą console.log()`,
  },

  {
    type: "quiz",
    question: "Jakie rozszerzenie ma plik JavaScript?",
    answers: [
      ".html",
      ".css",
      ".js",
      ".sql",
    ],
    correct: 2,
    explanation:
`Pliki JavaScript mają rozszerzenie .js.`,
  },

  {
    type: "quiz",
    question: "Do czego służy console.log()?",
    answers: [
      "Do tworzenia tabel",
      "Do wyświetlania danych w konsoli",
      "Do zmiany koloru strony",
      "Do dodawania obrazów",
    ],
    correct: 1,
    explanation:
`console.log() służy do wyświetlania danych w konsoli przeglądarki.`,
  },
]

export const lesson1Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
JavaScript to język programowania używany do tworzenia interaktywnych stron internetowych.

Zapamiętaj:

✔ Pliki JavaScript mają rozszerzenie .js  
✔ JavaScript działa w przeglądarce  
✔ Konsolę można otworzyć przez F12  
✔ console.log() wyświetla dane  
✔ let i const służą do tworzenia zmiennych

Najważniejsze elementy:
🔹 .js — rozszerzenie pliku  
🔹 console.log() — wyświetlanie danych  
🔹 let — zmienna  
🔹 const — stała wartość

👉 To podstawa wszystkich kolejnych lekcji JavaScript.
`,
}