import { Step } from "@/lib/types"

export const lesson9: Step[] = [

  {
    type: "text",
    title: "📐 Flexbox",
    content:
`Flexbox to nowoczesny system układania elementów w CSS.

Pozwala łatwo:
👉 ustawiać elementy obok siebie  
👉 centrować elementy  
👉 tworzyć responsywne layouty  

📌 Flexbox jest bardzo ważny na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa Flexbox?",
    content:
`Aby włączyć Flexbox używamy:

display: flex;

Element z display: flex staje się kontenerem flex.

Wszystkie elementy wewnątrz:
✔ ustawiają się obok siebie  
✔ mogą być wyrównywane`,
  },

  {
    type: "code",
    title: "👀 Podstawowy Flexbox",
    content:
`div{

  display: flex;

}`
  },

  {
    type: "text",
    title: "🧭 justify-content",
    content:
`justify-content odpowiada za ustawienie elementów w poziomie.

Najpopularniejsze wartości:
👉 center  
👉 space-between  
👉 space-around  
👉 flex-start  
👉 flex-end`,
  },

  {
    type: "code",
    title: "👀 Wyśrodkowanie elementów",
    content:
`div{

  display: flex;

  justify-content: center;

}`
  },

  {
    type: "text",
    title: "📍 align-items",
    content:
`align-items odpowiada za ustawienie elementów w pionie.

Najczęściej używane:
👉 center  
👉 flex-start  
👉 flex-end  

📌 Bardzo często używane razem z justify-content.`,
  },

  {
    type: "code",
    title: "🧱 Centrowanie idealne",
    content:
`div{

  display: flex;

  justify-content: center;

  align-items: center;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak display: flex  
❌ mylenie justify-content z align-items  
❌ używanie center bez flex  
❌ brak średnika ;  

📌 justify-content = poziom  
📌 align-items = pion`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz kontener Flexbox.

Dodaj:
👉 display: flex  
👉 justify-content: center  
👉 align-items: center`
  },

  {
    type: "quiz",
    question:
      "Która właściwość włącza Flexbox?",
    answers: [
      "display: block",
      "display: flex",
      "position: flex",
      "flex: center",
    ],
    correct: 1,
    explanation:
`Display: flex uruchamia Flexbox.`,
  },

  {
    type: "quiz",
    question:
      "Za co odpowiada justify-content?",
    answers: [
      "Za wysokość",
      "Za ustawienie pionowe",
      "Za ustawienie poziome",
      "Za kolor",
    ],
    correct: 2,
    explanation:
`justify-content odpowiada za ustawienie elementów w poziomie.`,
  },
]

export const lesson9Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Flexbox to nowoczesny system budowania layoutów.

Zapamiętaj:

✔ display: flex uruchamia Flexbox  
✔ justify-content ustawia elementy w poziomie  
✔ align-items ustawia elementy w pionie  
✔ Flexbox bardzo ułatwia centrowanie  

Najważniejsze właściwości:
🔹 display: flex  
🔹 justify-content  
🔹 align-items  
🔹 gap  

👉 Flexbox jest podstawą nowoczesnych stron internetowych.
`,
}