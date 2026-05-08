import { Step } from "@/lib/types"

export const lesson7: Step[] = [

  {
    type: "text",
    title: "📏 Width i Height",
    content:
`W CSS możemy kontrolować rozmiar elementów.

Najważniejsze właściwości:

👉 width — szerokość  
👉 height — wysokość  

Dzięki nim możemy ustalać rozmiary:
✔ boxów  
✔ obrazków  
✔ przycisków  
✔ sekcji`,
  },

  {
    type: "text",
    title: "🧠 Jak działa width?",
    content:
`Width ustawia szerokość elementu.

Przykład:
👉 width: 300px

Element będzie miał szerokość 300 pikseli.

📌 To jedna z najczęściej używanych właściwości CSS.`,
  },

  {
    type: "code",
    title: "👀 Przykład width",
    content:
`div{

  width: 300px;

}`
  },

  {
    type: "text",
    title: "🧠 Jak działa height?",
    content:
`Height ustawia wysokość elementu.

Przykład:
👉 height: 200px

Element będzie miał wysokość 200 pikseli.`,
  },

  {
    type: "code",
    title: "👀 Przykład height",
    content:
`div{

  height: 200px;

}`
  },

  {
    type: "text",
    title: "📐 Jednostki w CSS",
    content:
`W CSS używamy różnych jednostek.

Najpopularniejsze:
✔ px — piksele  
✔ % — procenty  
✔ vh — wysokość ekranu  
✔ vw — szerokość ekranu  
✔ rem — jednostka responsywna  

📌 Na początku najczęściej używa się px.`,
  },

  {
    type: "code",
    title: "🧱 Przykład różnych jednostek",
    content:
`div{

  width: 80%;

  height: 100vh;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy uczniów:

❌ brak jednostki px  
❌ wpisywanie width = 200px  
❌ używanie przecinków zamiast średników  
❌ mylenie vh z %  

📌 W CSS używamy dwukropka :`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj box.

Dodaj:
👉 width: 300px  
👉 height: 200px  
👉 background: blue`
  },

  {
    type: "quiz",
    question:
      "Która właściwość ustawia szerokość elementu?",
    answers: [
      "height",
      "padding",
      "width",
      "margin",
    ],
    correct: 2,
    explanation:
`Width odpowiada za szerokość elementu.`,
  },

  {
    type: "quiz",
    question:
      "Co oznacza jednostka px?",
    answers: [
      "procent",
      "piksele",
      "viewport",
      "rem",
    ],
    correct: 1,
    explanation:
`px oznacza piksele.`,
  },
]

export const lesson7Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Width i height pozwalają kontrolować rozmiary elementów.

Zapamiętaj:

✔ width = szerokość  
✔ height = wysokość  
✔ px oznacza piksele  
✔ możemy używać także %, vh i vw  

Najważniejsze właściwości:
🔹 width  
🔹 height  
🔹 max-width  
🔹 min-height  

👉 Dzięki nim budujemy układ strony i kontrolujemy wygląd elementów.
`,
}