import { Step } from "@/lib/types"

export const lesson5: Step[] = [

  {
    type: "text",
    title: "📦 Margin i Padding",
    content:
`Margin i padding odpowiadają za odstępy w CSS.

To jedne z najważniejszych właściwości podczas budowania layoutu strony.

👉 margin — odstęp na zewnątrz elementu  
👉 padding — odstęp wewnątrz elementu  

📌 Dzięki nim interfejs wygląda estetycznie i nowocześnie.`,
  },

  {
    type: "text",
    title: "📏 Margin",
    content:
`Margin tworzy przestrzeń wokół elementu.

Przykład:
div {
  margin: 20px;
}

📌 Margin odsuwa element od innych elementów.`,
  },

  {
    type: "code",
    title: "👀 Przykład margin",
    content:
`div {
  margin: 20px;
}

button {
  margin-top: 40px;
}`,
  },

  {
    type: "text",
    title: "🧠 Padding",
    content:
`Padding tworzy odstęp wewnątrz elementu.

Przykład:
button {
  padding: 20px;
}

📌 Dzięki paddingowi tekst nie dotyka krawędzi elementu.`,
  },

  {
    type: "code",
    title: "📦 Przykład padding",
    content:
`button {
  padding: 16px;
  background: blue;
  color: white;
}`,
  },

  {
    type: "text",
    title: "🔍 Kierunki odstępów",
    content:
`Możesz ustawiać odstępy dla konkretnych stron elementu.

Przykłady:
👉 margin-top  
👉 margin-bottom  
👉 padding-left  
👉 padding-right  

📌 To bardzo często używane właściwości w frontendzie.`,
  },

  {
    type: "code",
    title: "🧱 Odstępy kierunkowe",
    content:
`div {
  margin-top: 40px;
  padding-left: 20px;
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ mylenie margin z padding  
❌ brak jednostek px  
❌ zbyt duże odstępy  
❌ brak spójności w layoutach  

📌 Odpowiednie spacingi są podstawą dobrego UI.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj przycisk.

Dodaj:
👉 padding 20px  
👉 margin-top 40px  
👉 niebieskie tło  
👉 biały tekst  

Element:
<button>Click me</button>`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość tworzy odstęp wewnątrz elementu?",
    answers: [
      "margin",
      "padding",
      "gap",
      "spacing",
    ],
    correct: 1,
    explanation:
`Padding odpowiada za odstęp wewnątrz elementu.`,
  },

  {
    type: "quiz",
    question:
      "Co robi margin?",
    answers: [
      "Zmienia kolor",
      "Dodaje animację",
      "Tworzy odstęp wokół elementu",
      "Zmienia rozmiar tekstu",
    ],
    correct: 2,
    explanation:
`Margin tworzy odstęp wokół elementu.`,
  },

]

export const lesson5Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`Poznałeś margin i padding.

Zapamiętaj:

✔ margin tworzy odstęp wokół elementu  
✔ padding tworzy odstęp wewnątrz elementu  
✔ spacing jest bardzo ważny w UI  
✔ można ustawiać odstępy dla konkretnych kierunków  

Najważniejsze właściwości:
🔹 margin  
🔹 padding  
🔹 margin-top  
🔹 padding-left  

👉 Dobre odstępy poprawiają wygląd całej strony.`,
}