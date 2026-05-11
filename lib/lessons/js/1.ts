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
👉 pobierać dane z internetu  
👉 budować aplikacje webowe  

JavaScript działa w przeglądarce internetowej.

📌 Na egzaminie INF.03 często pojawiają się pytania dotyczące:
✔ zmiennych  
✔ instrukcji warunkowych  
✔ pętli  
✔ funkcji  
✔ działania skryptów JS`,
  },

  {
    type: "text",
    title: "🧠 Jak działa JavaScript?",
    content:
`JavaScript wykonuje instrukcje zapisane w kodzie.

Kod wykonywany jest od góry do dołu.

Przykłady zastosowań:
🔹 kliknięcie przycisku  
🔹 walidacja formularza  
🔹 wyskakujące okna  
🔹 zmiana tekstu na stronie  

📌 JavaScript często współpracuje z:
✔ HTML — struktura strony  
✔ CSS — wygląd strony`,
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

📌 Konsola jest bardzo ważna podczas nauki i debugowania kodu.`,
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
🔹 wartości true/false  

📌 Dzięki zmiennym możemy przechowywać informacje i używać ich później w programie.`,
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
`Podczas nauki JavaScript początkujący często popełniają błędy:

❌ brak średnika lub nawiasu  
❌ literówki w nazwach zmiennych  
❌ używanie zmiennej przed utworzeniem  
❌ brak cudzysłowów przy tekście  

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
    question: "Za co odpowiada JavaScript?",
    answers: [
      "Za strukturę strony",
      "Za wygląd strony",
      "Za interakcje i działanie strony",
      "Za bazę danych",
    ],
    correct: 2,
    explanation:
`JavaScript odpowiada za interakcje i logikę działania strony internetowej.

HTML odpowiada za strukturę, a CSS za wygląd.`,
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
`console.log() służy do wyświetlania informacji w konsoli przeglądarki.`,
  },
]

export const lesson1Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
JavaScript to język programowania używany do tworzenia interaktywnych stron internetowych.

Zapamiętaj najważniejsze informacje:

✔ JavaScript odpowiada za działanie strony  
✔ Kod wykonywany jest od góry do dołu  
✔ console.log() wyświetla dane w konsoli  
✔ Zmienne przechowują dane  
✔ Najczęściej używamy let i const  

Najważniejsze elementy:
🔹 console.log() — wyświetlanie danych  
🔹 let — tworzenie zmiennej  
🔹 const — stała wartość  

👉 To podstawa wszystkich kolejnych lekcji JavaScript.
`,
}