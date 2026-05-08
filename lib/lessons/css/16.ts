import { Step } from "@/lib/types"

export const lesson16: Step[] = [

  {
    type: "text",
    title: "🎬 Transitions i animacje",
    content:
`CSS pozwala tworzyć płynne animacje i efekty.

Najczęściej używane:
👉 transition  
👉 transform  
👉 animation  

📌 Dzięki nim strony wyglądają nowocześnie i dynamicznie.`,
  },

  {
    type: "text",
    title: "🧠 Czym jest transition?",
    content:
`Transition tworzy płynne przejście między stylami.

Przykład:
✔ zmiana koloru  
✔ zmiana rozmiaru  
✔ obrót elementu  

Bez transition zmiana następuje natychmiast.`,
  },

  {
    type: "code",
    title: "👀 Podstawowy transition",
    content:
`button{

  transition: 0.3s;

}`
  },

  {
    type: "text",
    title: "✨ Transition z hover",
    content:
`Transition bardzo często używa się razem z :hover.

Po najechaniu myszką:
👉 kolor zmienia się płynnie  
👉 element może się powiększyć`,
  },

  {
    type: "code",
    title: "👀 Hover animation",
    content:
`button{

  background: blue;

  transition: 0.3s;

}

button:hover{

  background: darkblue;

}`
  },

  {
    type: "text",
    title: "🎞️ Animation",
    content:
`Animation pozwala tworzyć bardziej zaawansowane animacje.

Używa:
👉 @keyframes  
👉 animation-name  
👉 animation-duration  

📌 Możemy animować ruch, obrót i skalowanie.`,
  },

  {
    type: "code",
    title: "👀 Prosta animacja",
    content:
`@keyframes move{

  from{

    transform: translateX(0px);

  }

  to{

    transform: translateX(100px);

  }

}

div{

  animation: move 2s;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak transition  
❌ brak @keyframes  
❌ literówki w animation  
❌ brak jednostki s  

📌 Transition używa sekund np. 0.3s.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj button.

Dodaj:
👉 background: blue  
👉 transition: 0.3s  

Po hover:
👉 background: darkblue`
  },

  {
    type: "quiz",
    question:
      "Która właściwość tworzy płynne przejścia?",
    answers: [
      "transform",
      "transition",
      "display",
      "position",
    ],
    correct: 1,
    explanation:
`Transition odpowiada za płynne przejścia.`,
  },

  {
    type: "quiz",
    question:
      "Do czego służy @keyframes?",
    answers: [
      "Do tworzenia Grid",
      "Do stylowania tekstu",
      "Do tworzenia animacji",
      "Do ustawiania pozycji",
    ],
    correct: 2,
    explanation:
`@keyframes służy do tworzenia animacji w CSS.`,
  },
]

export const lesson16Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Transitions i animacje sprawiają, że strony wyglądają nowocześnie.

Zapamiętaj:

✔ transition tworzy płynne przejścia  
✔ :hover często działa z transition  
✔ animation tworzy bardziej zaawansowane efekty  
✔ @keyframes definiuje animację  

Najważniejsze właściwości:
🔹 transition  
🔹 animation  
🔹 @keyframes  
🔹 transform  

👉 Animacje poprawiają UX i wygląd strony.
`,
}