import { Step } from "@/lib/types"

export const lesson1: Step[] = [
  {
    type: "text",
    title: "🚀 Wprowadzenie do HTML",
    content:
`HTML to fundament KAŻDEJ strony internetowej.

To dzięki niemu przeglądarka wie:
👉 co ma wyświetlić  
👉 w jakiej kolejności  

Bez HTML:
❌ nie ma strony  
❌ nie ma treści  

To Twój pierwszy krok do bycia devem.`,
  },

  {
    type: "text",
    title: "🧠 Jak myśleć o HTML?",
    content:
`Wyobraź sobie stronę jak budynek:

🏗 HTML → struktura  
🎨 CSS → wygląd  
⚙️ JS → logika  

HTML mówi tylko:
👉 co jest na stronie`,
  },

  {
    type: "code",
    title: "👀 Twój pierwszy kod",
    content: `<h1>Witaj świecie</h1>
<p>To jest moja pierwsza strona</p>`,
  },

  {
    type: "text",
    title: "🔍 Jak działa tag?",
    content:
`<h1>Witaj</h1>

👉 <h1> → start  
👉 Witaj → treść  
👉 </h1> → koniec  

To jest podstawowy schemat HTML.`,
  },

  {
    type: "code-task",
    title: "💻 Twoje zadanie",
    content:
`Stwórz:

👉 nagłówek (<h1>)  
👉 tekst (<p>)  

Napisz coś o sobie.`,
  },

  {
    type: "quiz",
    question: "Za co odpowiada HTML?",
    answers: [
      "Za kolory strony",
      "Za strukturę strony",
      "Za animacje",
      "Za backend",
    ],
    correct: 1,
    explanation:
`HTML = struktura strony`,
  },
]

export const lesson1Summary = {
  title: "📚 Podsumowanie",
  content: `
HTML to fundament każdej strony.

Zapamiętaj:

✔ HTML = struktura  
✔ <h1> = nagłówek  
✔ <p> = tekst  

HTML NIE odpowiada za wygląd.

👉 Jeśli to rozumiesz — masz solidną bazę.
`,
}