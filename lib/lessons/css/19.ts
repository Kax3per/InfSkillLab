import { Step } from "@/lib/types"

export const lesson19: Step[] = [

  {
    type: "text",
    title: "💎 Glassmorphism UI",
    content:
`Glassmorphism to nowoczesny styl projektowania interfejsów.

Elementy wyglądają jak:
👉 szkło  
👉 półprzezroczyste karty  
👉 rozmyte panele  

📌 Styl ten jest bardzo popularny w nowoczesnych dashboardach.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa Glassmorphism?",
    content:
`Glassmorphism wykorzystuje:

✔ przezroczystość  
✔ blur  
✔ delikatne obramowania  
✔ cienie  

Najważniejsza właściwość:
👉 backdrop-filter: blur()`,
  },

  {
    type: "code",
    title: "👀 Podstawowy Glassmorphism",
    content:
`div{

  background: rgba(255,255,255,0.1);

  backdrop-filter: blur(20px);

  border: 1px solid rgba(255,255,255,0.2);

}`
  },

  {
    type: "text",
    title: "✨ Blur",
    content:
`Blur rozmywa tło za elementem.

Dzięki temu:
✔ karta wygląda jak szkło  
✔ UI staje się nowoczesny  

📌 Blur działa najlepiej z przezroczystością.`,
  },

  {
    type: "code",
    title: "👀 Blur card",
    content:
`div{

  backdrop-filter: blur(30px);

}`
  },

  {
    type: "text",
    title: "🎨 Przezroczystość",
    content:
`Do przezroczystości często używa się:
👉 rgba()  

Przykład:
✔ rgba(255,255,255,0.1)

Ostatnia wartość oznacza przezroczystość.`,
  },

  {
    type: "code",
    title: "👀 rgba",
    content:
`div{

  background: rgba(0,0,0,0.2);

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak blur  
❌ brak przezroczystości  
❌ zbyt mocny blur  
❌ brak kontrastu tekstu  

📌 Glassmorphism powinien być subtelny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz kartę Glassmorphism.

Dodaj:
👉 background: rgba(255,255,255,0.1)  
👉 backdrop-filter: blur(20px)  
👉 border: 1px solid rgba(255,255,255,0.2)`
  },

  {
    type: "quiz",
    question:
      "Która właściwość tworzy efekt rozmycia?",
    answers: [
      "transform",
      "filter",
      "backdrop-filter",
      "opacity",
    ],
    correct: 2,
    explanation:
`backdrop-filter odpowiada za rozmycie tła.`,
  },

  {
    type: "quiz",
    question:
      "Do czego służy rgba()?",
    answers: [
      "Do animacji",
      "Do tworzenia Grid",
      "Do ustawiania przezroczystości",
      "Do pozycjonowania",
    ],
    correct: 2,
    explanation:
`rgba() pozwala ustawiać kolor z przezroczystością.`,
  },
]

export const lesson19Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Glassmorphism to nowoczesny styl UI przypominający szkło.

Zapamiętaj:

✔ używa blur i przezroczystości  
✔ backdrop-filter tworzy rozmycie  
✔ rgba() ustawia przezroczystość  
✔ ważny jest dobry kontrast tekstu  

Najważniejsze właściwości:
🔹 backdrop-filter  
🔹 rgba()  
🔹 border  
🔹 blur()  

👉 Glassmorphism jest bardzo popularny w nowoczesnych aplikacjach i dashboardach.
`,
}