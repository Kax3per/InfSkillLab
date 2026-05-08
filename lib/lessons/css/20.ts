import { Step } from "@/lib/types"

export const lesson20: Step[] = [

  {
    type: "text",
    title: "🚀 Projekt końcowy CSS",
    content:
`To ostatnia lekcja kursu CSS.

W projekcie końcowym wykorzystasz:
👉 kolory  
👉 Flexbox  
👉 Grid  
👉 hover  
👉 transition  
👉 responsywność  

📌 Celem jest stworzenie nowoczesnego UI.`,
  },

  {
    type: "text",
    title: "🧠 Co stworzymy?",
    content:
`Stworzymy nowoczesną kartę użytkownika.

Projekt będzie zawierał:
✔ nagłówek  
✔ opis  
✔ button  
✔ hover effect  
✔ nowoczesne kolory`,
  },

  {
    type: "code",
    title: "👀 Przykład nowoczesnej karty",
    content:
`.card{

  width: 350px;

  padding: 30px;

  border-radius: 24px;

  background: #111;

  color: white;

}`
  },

  {
    type: "text",
    title: "✨ Hover i transition",
    content:
`Nowoczesne UI wykorzystuje animacje.

Dodamy:
👉 hover  
👉 transition  
👉 scale  

📌 Dzięki temu karta będzie reagowała na ruch myszy.`,
  },

  {
    type: "code",
    title: "👀 Efekt hover",
    content:
`.card{

  transition: 0.3s;

}

.card:hover{

  transform: scale(1.03);

}`
  },

  {
    type: "text",
    title: "📱 Responsywność projektu",
    content:
`Projekt powinien działać także na telefonie.

Możemy użyć:
👉 width: 100%  
👉 max-width  
👉 Media Queries`,
  },

  {
    type: "code",
    title: "👀 Responsywna karta",
    content:
`.card{

  width: 100%;

  max-width: 400px;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak transition  
❌ brak responsywności  
❌ zbyt dużo kolorów  
❌ brak padding  

📌 Nowoczesne UI powinno być proste i czytelne.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz nowoczesną kartę.

Dodaj:
👉 background: #111  
👉 color: white  
👉 padding: 30px  
👉 border-radius: 24px  
👉 transition: 0.3s  

Po hover:
👉 transform: scale(1.03)`
  },

  {
    type: "quiz",
    question:
      "Która właściwość tworzy płynne animacje?",
    answers: [
      "display",
      "transition",
      "position",
      "width",
    ],
    correct: 1,
    explanation:
`Transition odpowiada za płynne przejścia i animacje.`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość zaokrągla rogi karty?",
    answers: [
      "padding",
      "margin",
      "border-radius",
      "scale",
    ],
    correct: 2,
    explanation:
`border-radius odpowiada za zaokrąglanie rogów.`,
  },
]

export const lesson20Summary = {

  title: "🏁 Podsumowanie kursu CSS",

  content:
`
Gratulacje! Ukończyłeś kurs CSS 🎉

Poznałeś:

✔ selektory CSS  
✔ kolory i tła  
✔ Flexbox i Grid  
✔ responsywność  
✔ hover i animacje  
✔ transform i transition  
✔ Dark Mode  
✔ Glassmorphism  

Najważniejsze technologie:
🔹 Flexbox  
🔹 Grid  
🔹 Media Queries  
🔹 transition  
🔹 transform  

👉 CSS pozwala tworzyć nowoczesne i profesjonalne strony internetowe.

Teraz możesz budować własne projekty webowe 🚀
`,
}