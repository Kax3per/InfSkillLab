import { Step } from "@/lib/types"

export const lesson16: Step[] = [
  {
    type: "text",
    title: "📦 Moduły w JavaScript",
    content:
`Moduły pozwalają dzielić kod na mniejsze pliki.

Dzięki modułom:
👉 kod jest bardziej uporządkowany  
👉 łatwiej zarządzać projektem  
👉 można ponownie używać kodu  

📌 Moduły są standardem w nowoczesnym JavaScript i React.`,
  },

  {
    type: "text",
    title: "📤 export",
    content:
`export pozwala udostępniać dane lub funkcje z pliku.

Możemy eksportować:
👉 zmienne  
👉 funkcje  
👉 klasy  
👉 obiekty  

📌 Dzięki export inne pliki mogą korzystać z naszego kodu.`,
  },

  {
    type: "code",
    title: "👀 Eksport funkcji",
    content: `export function przywitaj() {
  console.log("Witaj")
}`,
  },

  {
    type: "text",
    title: "📥 import",
    content:
`import pozwala pobierać dane z innych plików.

📌 Dzięki temu możemy używać funkcji lub zmiennych z innych modułów.`,
  },

  {
    type: "code",
    title: "📦 Import funkcji",
    content: `import { przywitaj } from "./utils.js"

przywitaj()`,
  },

  {
    type: "text",
    title: "⭐ export default",
    content:
`JavaScript posiada specjalny typ eksportu:
👉 export default  

W pliku może być tylko jeden export default.

📌 Najczęściej używany do eksportowania głównej funkcji lub komponentu.`,
  },

  {
    type: "code",
    title: "🌟 export default",
    content: `export default function hello() {
  console.log("Hello")
}`,
  },

  {
    type: "text",
    title: "📥 Import default",
    content:
`Import export default wygląda inaczej.

📌 Nie używamy nawiasów klamrowych {}.`,
  },

  {
    type: "code",
    title: "🚀 Import default",
    content: `import hello from "./hello.js"

hello()`,
  },

  {
    type: "text",
    title: "🧠 Dlaczego moduły są ważne?",
    content:
`Duże aplikacje mogą posiadać setki plików.

Moduły pomagają:
👉 organizować kod  
👉 oddzielać funkcje  
👉 budować skalowalne aplikacje  

📌 Frameworki jak React czy Next.js używają modułów cały czas.`,
  },

  {
    type: "code",
    title: "🧱 Przykład projektu",
    content: `src/
 ├── app.js
 ├── utils.js
 ├── api.js
 └── components/`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z modułami uczniowie często popełniają błędy:

❌ brak export  
❌ błędna ścieżka pliku  
❌ mylenie export z export default  
❌ brak {} przy zwykłym imporcie  

📌 Ścieżka do pliku musi być poprawna.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz funkcję:
👉 dodaj(a, b)

Następnie:
✔ wyeksportuj funkcję  
✔ zaimportuj ją do innego pliku  
✔ wyświetl wynik działania`,
  },

  {
    type: "quiz",
    question: "Do czego służy import?",
    answers: [
      "Do usuwania plików",
      "Do pobierania kodu z innego pliku",
      "Do tworzenia CSS",
      "Do tworzenia HTML",
    ],
    correct: 1,
    explanation:
`import pozwala używać kodu z innych plików.`,
  },

  {
    type: "quiz",
    question: "Który zapis jest poprawnym export default?",
    answers: [
      "default export hello",
      "export hello default",
      "export default hello",
      "hello export default",
    ],
    correct: 2,
    explanation:
`export default służy do eksportowania głównego elementu pliku.`,
  },
]

export const lesson16Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Moduły pozwalają dzielić kod na mniejsze pliki.

Zapamiętaj najważniejsze informacje:

✔ export udostępnia kod  
✔ import pobiera kod z innych plików  
✔ export default eksportuje główny element  
✔ Moduły pomagają organizować projekt  
✔ React i Next.js używają modułów cały czas  

Najważniejsze elementy:
🔹 export  
🔹 import  
🔹 export default  
🔹 ścieżki plików  
🔹 moduły ES6  

👉 Moduły są podstawą nowoczesnych aplikacji JavaScript.
`,
}