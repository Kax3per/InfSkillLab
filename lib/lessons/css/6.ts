import { Step } from "@/lib/types"

export const lesson6: Step[] = [

  {
    type: "text",
    title: "📦 Margin i Padding",
    content:
`Margin i padding to jedne z najważniejszych właściwości CSS.

Służą do tworzenia odstępów między elementami.

👉 margin — odstęp NA ZEWNĄTRZ elementu  
👉 padding — odstęp WEWNĄTRZ elementu  

📌 Bardzo często pojawiają się na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa padding?",
    content:
`Padding dodaje przestrzeń wewnątrz elementu.

Przykład:
✔ tekst odsuwa się od krawędzi  
✔ przycisk staje się większy  
✔ element wygląda estetyczniej  

Padding powiększa element od środka.`,
  },

  {
    type: "code",
    title: "👀 Przykład padding",
    content:
`button{
  padding: 20px;
}`
  },

  {
    type: "text",
    title: "🧠 Jak działa margin?",
    content:
`Margin tworzy odstęp pomiędzy elementami.

Najczęściej używany jest do:
👉 odsuwania sekcji  
👉 tworzenia przestrzeni między boxami  
👉 centrowania elementów  

📌 margin działa na zewnątrz elementu.`,
  },

  {
    type: "code",
    title: "👀 Przykład margin",
    content:
`div{
  margin-top: 40px;
}`
  },

  {
    type: "text",
    title: "📏 Kierunki margin i padding",
    content:
`Możemy ustawiać odstępy dla konkretnych stron:

✔ top — góra  
✔ right — prawa  
✔ bottom — dół  
✔ left — lewa  

Przykłady:
👉 margin-top  
👉 padding-left  
👉 margin-right`,
  },

  {
    type: "code",
    title: "🧱 Przykład wielu odstępów",
    content:
`div{

  padding-top: 20px;

  padding-left: 40px;

  margin-top: 50px;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Uczniowie często popełniają błędy:

❌ brak jednostki px  
❌ mylenie margin z padding  
❌ używanie przecinków zamiast spacji  
❌ wpisywanie margin = 20px  

📌 W CSS używamy dwukropka :`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Dodaj styl przycisku.

Dodaj:
👉 padding: 20px  
👉 margin-top: 30px  
👉 background: blue  
👉 color: white`
  },

  {
    type: "quiz",
    question:
      "Która właściwość odpowiada za odstęp wewnątrz elementu?",
    answers: [
      "margin",
      "padding",
      "border",
      "display",
    ],
    correct: 1,
    explanation:
`Padding odpowiada za odstęp WEWNĄTRZ elementu.`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość tworzy odstęp między elementami?",
    answers: [
      "padding",
      "border",
      "margin",
      "width",
    ],
    correct: 2,
    explanation:
`Margin tworzy odstęp na zewnątrz elementu.`,
  },
]

export const lesson6Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Margin i padding są podstawą budowania layoutów w CSS.

Zapamiętaj:

✔ padding = odstęp wewnątrz elementu  
✔ margin = odstęp na zewnątrz elementu  
✔ używamy jednostek px  
✔ możemy ustawiać odstępy dla każdej strony osobno  

Najważniejsze właściwości:
🔹 padding  
🔹 padding-top  
🔹 margin  
🔹 margin-top  

👉 Dzięki nim strony wyglądają estetycznie i profesjonalnie.
`,
}