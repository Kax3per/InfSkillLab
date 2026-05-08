import { Step } from "@/lib/types"

export const lesson17: Step[] = [

  {
    type: "text",
    title: "🌀 Transform w CSS",
    content:
`Transform pozwala zmieniać wygląd i położenie elementów.

Możemy:
👉 obracać elementy  
👉 przesuwać  
👉 powiększać  
👉 zmniejszać  

📌 Transform bardzo często używany jest z hover i transition.`,
  },

  {
    type: "text",
    title: "🧠 Scale",
    content:
`scale() służy do powiększania lub zmniejszania elementu.

Przykład:
👉 scale(1.1)

Element stanie się większy o 10%.`,
  },

  {
    type: "code",
    title: "👀 Przykład scale",
    content:
`button:hover{

  transform: scale(1.1);

}`
  },

  {
    type: "text",
    title: "🧠 Rotate",
    content:
`rotate() obraca element.

Przykład:
👉 rotate(45deg)

Element zostanie obrócony o 45 stopni.`,
  },

  {
    type: "code",
    title: "👀 Przykład rotate",
    content:
`div{

  transform: rotate(45deg);

}`
  },

  {
    type: "text",
    title: "🧠 Translate",
    content:
`translate() przesuwa element.

Możemy przesuwać:
👉 w poziomie  
👉 w pionie  

📌 Bardzo często używany w animacjach.`,
  },

  {
    type: "code",
    title: "👀 Przykład translate",
    content:
`div{

  transform: translateX(50px);

}`
  },

  {
    type: "text",
    title: "✨ Transform + transition",
    content:
`Transform najlepiej wygląda razem z transition.

Dzięki temu:
✔ animacje są płynne  
✔ efekty wyglądają nowocześnie`,
  },

  {
    type: "code",
    title: "👀 Efekt hover",
    content:
`button{

  transition: 0.3s;

}

button:hover{

  transform: scale(1.1);

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak transition  
❌ brak deg przy rotate  
❌ literówki w transform  
❌ używanie transform bez hover  

📌 rotate używa stopni deg.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj button.

Dodaj:
👉 transition: 0.3s  

Po hover:
👉 transform: scale(1.1)`
  },

  {
    type: "quiz",
    question:
      "Która funkcja transform powiększa element?",
    answers: [
      "rotate()",
      "translate()",
      "scale()",
      "skew()",
    ],
    correct: 2,
    explanation:
`scale() służy do powiększania elementów.`,
  },

  {
    type: "quiz",
    question:
      "Do czego służy rotate()?",
    answers: [
      "Do zmiany koloru",
      "Do obracania elementu",
      "Do zmiany szerokości",
      "Do tworzenia Grid",
    ],
    correct: 1,
    explanation:
`rotate() obraca element.`,
  },
]

export const lesson17Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Transform pozwala tworzyć nowoczesne efekty i animacje.

Zapamiętaj:

✔ scale() powiększa element  
✔ rotate() obraca element  
✔ translate() przesuwa element  
✔ transform najlepiej działa z transition  

Najważniejsze funkcje:
🔹 scale()  
🔹 rotate()  
🔹 translate()  
🔹 transform  

👉 Transform jest bardzo ważny w nowoczesnym UI.
`,
}