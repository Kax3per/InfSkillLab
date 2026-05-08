import { Step } from "@/lib/types"

export const lesson12: Step[] = [

  {
    type: "text",
    title: "📱 Responsywność",
    content:
`Responsywność oznacza dostosowanie strony do różnych urządzeń.

Strona responsywna działa poprawnie:
👉 na komputerze  
👉 na tablecie  
👉 na telefonie  

📌 Obecnie responsywność jest obowiązkowa.`,
  },

  {
    type: "text",
    title: "🧠 Czym są Media Queries?",
    content:
`Media Queries pozwalają zmieniać styl strony w zależności od rozdzielczości ekranu.

Najczęściej używane są do:
✔ zmiany układu  
✔ zmiany rozmiaru tekstu  
✔ dostosowania menu`,
  },

  {
    type: "code",
    title: "👀 Podstawowe Media Query",
    content:
`@media (max-width: 768px){

  body{

    background: black;

  }

}`
  },

  {
    type: "text",
    title: "📏 max-width",
    content:
`max-width oznacza:
👉 styl działa do określonej szerokości ekranu

Przykład:
✔ max-width: 768px  
działa na tabletach i telefonach.`,
  },

  {
    type: "code",
    title: "👀 Responsywny tekst",
    content:
`@media (max-width: 600px){

  h1{

    font-size: 24px;

  }

}`
  },

  {
    type: "text",
    title: "📐 Responsywne jednostki",
    content:
`W responsywnym CSS często używa się:

✔ %  
✔ vw  
✔ vh  
✔ rem  

📌 Dzięki nim elementy lepiej skalują się na różnych ekranach.`,
  },

  {
    type: "code",
    title: "👀 Responsywny box",
    content:
`div{

  width: 80%;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak @media  
❌ brak nawiasów {}  
❌ używanie tylko px  
❌ brak testowania na telefonie  

📌 Responsywność jest bardzo ważna w nowoczesnym web designie.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz Media Query.

Dodaj:
👉 @media (max-width: 768px)  
👉 background: black  
👉 color: white`
  },

  {
    type: "quiz",
    question:
      "Do czego służą Media Queries?",
    answers: [
      "Do animacji",
      "Do tworzenia serwera",
      "Do responsywności strony",
      "Do tworzenia bazy danych",
    ],
    correct: 2,
    explanation:
`Media Queries służą do tworzenia responsywnych stron.`,
  },

  {
    type: "quiz",
    question:
      "Co oznacza max-width?",
    answers: [
      "Minimalna szerokość",
      "Maksymalna szerokość",
      "Wysokość strony",
      "Kolor tła",
    ],
    correct: 1,
    explanation:
`max-width oznacza maksymalną szerokość ekranu.`,
  },
]

export const lesson12Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Responsywność pozwala dostosować stronę do różnych urządzeń.

Zapamiętaj:

✔ Media Queries zmieniają style zależnie od ekranu  
✔ max-width działa do określonej szerokości  
✔ responsywność jest obowiązkowa w nowoczesnych stronach  

Najważniejsze elementy:
🔹 @media  
🔹 max-width  
🔹 vw  
🔹 vh  
🔹 rem  

👉 Dzięki responsywności strony dobrze wyglądają na telefonach i komputerach.
`,
}