import { Step } from "@/lib/types"

export const lesson11: Step[] = [

  {
    type: "text",
    title: "📍 Position w CSS",
    content:
`Position pozwala kontrolować położenie elementów na stronie.

Najważniejsze wartości:
👉 static  
👉 relative  
👉 absolute  
👉 fixed  
👉 sticky  

📌 Position jest bardzo ważny podczas budowania layoutów.`,
  },

  {
    type: "text",
    title: "🧠 Position static",
    content:
`Static to domyślna pozycja elementu.

Element zachowuje się normalnie:
✔ układa się według kolejności HTML  
✔ nie reaguje na top, left, right i bottom`,
  },

  {
    type: "code",
    title: "👀 Position static",
    content:
`div{

  position: static;

}`
  },

  {
    type: "text",
    title: "🧠 Position relative",
    content:
`Relative pozwala przesuwać element względem jego normalnej pozycji.

Możemy używać:
👉 top  
👉 left  
👉 right  
👉 bottom`,
  },

  {
    type: "code",
    title: "👀 Position relative",
    content:
`div{

  position: relative;

  top: 20px;

  left: 30px;

}`
  },

  {
    type: "text",
    title: "🧠 Position absolute",
    content:
`Absolute usuwa element z normalnego układu strony.

Element pozycjonuje się względem:
✔ najbliższego relative  
✔ lub całej strony`,
  },

  {
    type: "code",
    title: "👀 Position absolute",
    content:
`div{

  position: absolute;

  top: 50px;

  right: 20px;

}`
  },

  {
    type: "text",
    title: "📚 Z-index",
    content:
`z-index kontroluje kolejność elementów.

Większa wartość:
👉 element jest wyżej  

Przykład:
✔ z-index: 10 będzie nad z-index: 1`,
  },

  {
    type: "code",
    title: "👀 Przykład z-index",
    content:
`div{

  position: absolute;

  z-index: 10;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak position przy z-index  
❌ mylenie relative z absolute  
❌ używanie top bez position  
❌ brak jednostki px  

📌 top, left i right działają tylko z position.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz box.

Dodaj:
👉 position: relative  
👉 top: 20px  
👉 left: 40px  
👉 z-index: 10`
  },

  {
    type: "quiz",
    question:
      "Która wartość position usuwa element z normalnego układu strony?",
    answers: [
      "static",
      "relative",
      "absolute",
      "sticky",
    ],
    correct: 2,
    explanation:
`Position absolute usuwa element z normalnego układu strony.`,
  },

  {
    type: "quiz",
    question:
      "Za co odpowiada z-index?",
    answers: [
      "Za kolor",
      "Za wysokość",
      "Za kolejność warstw",
      "Za animacje",
    ],
    correct: 2,
    explanation:
`z-index kontroluje kolejność elementów na stronie.`,
  },
]

export const lesson11Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Position pozwala kontrolować położenie elementów.

Zapamiętaj:

✔ static = domyślna pozycja  
✔ relative = przesuwanie względem pozycji  
✔ absolute = pozycjonowanie niezależne  
✔ z-index kontroluje warstwy  

Najważniejsze właściwości:
🔹 position  
🔹 top  
🔹 left  
🔹 right  
🔹 z-index  

👉 Position jest podstawą zaawansowanych layoutów.
`,
}