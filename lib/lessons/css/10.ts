import { Step } from "@/lib/types"

export const lesson10: Step[] = [

  {
    type: "text",
    title: "🗂️ CSS Grid",
    content:
`CSS Grid to nowoczesny system tworzenia układów stron.

Pozwala budować:
👉 galerie  
👉 dashboardy  
👉 siatki produktów  
👉 layouty stron internetowych  

📌 Grid działa w wierszach i kolumnach.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa Grid?",
    content:
`Aby uruchomić Grid używamy:

display: grid;

Element staje się kontenerem grid.

Następnie możemy tworzyć:
✔ kolumny  
✔ wiersze  
✔ odstępy`,
  },

  {
    type: "code",
    title: "👀 Podstawowy Grid",
    content:
`div{

  display: grid;

}`
  },

  {
    type: "text",
    title: "📐 grid-template-columns",
    content:
`grid-template-columns tworzy kolumny.

Przykład:
👉 1fr 1fr 1fr

Tworzy 3 równe kolumny.

📌 fr oznacza część dostępnego miejsca.`,
  },

  {
    type: "code",
    title: "👀 3 kolumny Grid",
    content:
`div{

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

}`
  },

  {
    type: "text",
    title: "🧱 Gap",
    content:
`Gap tworzy odstępy między elementami grid.

Przykład:
👉 gap: 20px

📌 Bardzo często używany razem z Grid.`,
  },

  {
    type: "code",
    title: "👀 Grid z gap",
    content:
`div{

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak display: grid  
❌ mylenie Grid z Flexbox  
❌ brak jednostki px  
❌ brak średnika ;  

📌 Grid najlepiej sprawdza się przy dużych layoutach.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz kontener Grid.

Dodaj:
👉 display: grid  
👉 grid-template-columns: 1fr 1fr  
👉 gap: 20px`
  },

  {
    type: "quiz",
    question:
      "Która właściwość uruchamia CSS Grid?",
    answers: [
      "display: flex",
      "display: block",
      "display: grid",
      "position: grid",
    ],
    correct: 2,
    explanation:
`Display: grid uruchamia CSS Grid.`,
  },

  {
    type: "quiz",
    question:
      "Do czego służy gap?",
    answers: [
      "Do ustawiania koloru",
      "Do tworzenia odstępów",
      "Do ustawiania wysokości",
      "Do animacji",
    ],
    correct: 1,
    explanation:
`Gap tworzy odstępy między elementami.`,
  },
]

export const lesson10Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
CSS Grid służy do tworzenia nowoczesnych układów stron.

Zapamiętaj:

✔ display: grid uruchamia Grid  
✔ grid-template-columns tworzy kolumny  
✔ gap tworzy odstępy  
✔ Grid świetnie nadaje się do dużych layoutów  

Najważniejsze właściwości:
🔹 display: grid  
🔹 grid-template-columns  
🔹 grid-template-rows  
🔹 gap  

👉 CSS Grid jest podstawą nowoczesnego web designu.
`,
}