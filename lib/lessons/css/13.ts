import { Step } from "@/lib/types"

export const lesson13: Step[] = [

  {
    type: "text",
    title: "🔘 Stylowanie przycisków",
    content:
`Przyciski są bardzo ważnym elementem każdej strony internetowej.

W CSS możemy zmieniać:
👉 kolor  
👉 rozmiar  
👉 odstępy  
👉 obramowanie  
👉 hover i animacje  

📌 Dobrze wyglądające przyciski poprawiają UX strony.`,
  },

  {
    type: "text",
    title: "🧠 Podstawowy styl button",
    content:
`Najczęściej stylujemy przyciski za pomocą:

✔ background  
✔ color  
✔ padding  
✔ border-radius  
✔ border  

📌 Dzięki temu button wygląda nowocześnie.`,
  },

  {
    type: "code",
    title: "👀 Podstawowy button",
    content:
`button{

  background: blue;

  color: white;

  padding: 15px 30px;

  border-radius: 10px;

  border: none;

}`
  },

  {
    type: "text",
    title: "✨ Hover",
    content:
`Hover uruchamia styl po najechaniu myszką.

Bardzo często używany przy:
👉 buttonach  
👉 linkach  
👉 kartach produktów  

📌 Hover poprawia interakcję użytkownika.`,
  },

  {
    type: "code",
    title: "👀 Hover button",
    content:
`button:hover{

  background: darkblue;

}`
  },

  {
    type: "text",
    title: "🎬 Transition",
    content:
`Transition tworzy płynne animacje.

Przykład:
👉 transition: 0.3s

Zmiany wyglądają płynnie i nowocześnie.`,
  },

  {
    type: "code",
    title: "👀 Transition button",
    content:
`button{

  transition: 0.3s;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak border: none  
❌ brak transition  
❌ zbyt mały padding  
❌ mylenie :hover z hover  

📌 Pseudo-klasy zapisujemy z dwukropkiem :`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj button.

Dodaj:
👉 background: blue  
👉 color: white  
👉 padding: 15px  
👉 border-radius: 10px  
👉 transition: 0.3s`
  },

  {
    type: "quiz",
    question:
      "Która pseudo-klasa działa po najechaniu myszką?",
    answers: [
      ":active",
      ":hover",
      ":focus",
      ":visited",
    ],
    correct: 1,
    explanation:
`Pseudo-klasa :hover działa po najechaniu myszką.`,
  },

  {
    type: "quiz",
    question:
      "Do czego służy transition?",
    answers: [
      "Do tworzenia animacji",
      "Do ustawiania szerokości",
      "Do zmiany HTML",
      "Do tworzenia Grid",
    ],
    correct: 0,
    explanation:
`Transition tworzy płynne przejścia i animacje.`,
  },
]

export const lesson13Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Stylowanie przycisków jest bardzo ważne w web designie.

Zapamiętaj:

✔ background ustawia tło  
✔ color ustawia kolor tekstu  
✔ padding powiększa przycisk  
✔ border-radius zaokrągla rogi  
✔ hover tworzy interakcję  
✔ transition dodaje płynność  

Najważniejsze właściwości:
🔹 background  
🔹 color  
🔹 padding  
🔹 border-radius  
🔹 transition  
🔹 :hover  

👉 Nowoczesne buttony poprawiają wygląd strony i UX.
`,
}