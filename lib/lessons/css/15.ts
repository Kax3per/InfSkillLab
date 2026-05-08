import { Step } from "@/lib/types"

export const lesson15: Step[] = [

  {
    type: "text",
    title: "✨ Pseudo-klasy w CSS",
    content:
`Pseudo-klasy pozwalają zmieniać wygląd elementów w określonych sytuacjach.

Najpopularniejsze:
👉 :hover  
👉 :focus  
👉 :active  
👉 :first-child  

📌 Są bardzo często używane w nowoczesnych stronach.`,
  },

  {
    type: "text",
    title: "🧠 :hover",
    content:
`:hover działa po najechaniu myszką na element.

Najczęściej używany przy:
✔ buttonach  
✔ linkach  
✔ kartach produktów  

📌 Hover poprawia interakcję użytkownika.`,
  },

  {
    type: "code",
    title: "👀 Przykład :hover",
    content:
`button:hover{

  background: blue;

  color: white;

}`
  },

  {
    type: "text",
    title: "🧠 :focus",
    content:
`:focus działa po kliknięciu w element.

Najczęściej używany przy:
👉 inputach  
👉 textarea  
👉 formularzach`,
  },

  {
    type: "code",
    title: "👀 Przykład :focus",
    content:
`input:focus{

  border: 2px solid blue;

}`
  },

  {
    type: "text",
    title: "🧠 :active",
    content:
`:active działa podczas kliknięcia elementu.

Bardzo często używany przy:
👉 buttonach  
👉 linkach`,
  },

  {
    type: "code",
    title: "👀 Przykład :active",
    content:
`button:active{

  transform: scale(0.95);

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak dwukropka :  
❌ mylenie hover z focus  
❌ używanie spacji przed pseudo-klasą  
❌ literówki w nazwach  

📌 Pseudo-klasy zapisujemy np. button:hover`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj button.

Dodaj:
👉 background: blue  

Po hover:
👉 background: darkblue  
👉 color: white`
  },

  {
    type: "quiz",
    question:
      "Która pseudo-klasa działa po najechaniu myszką?",
    answers: [
      ":focus",
      ":hover",
      ":active",
      ":visited",
    ],
    correct: 1,
    explanation:
`:hover działa po najechaniu myszką.`,
  },

  {
    type: "quiz",
    question:
      "Która pseudo-klasa działa po kliknięciu w input?",
    answers: [
      ":focus",
      ":hover",
      ":checked",
      ":active",
    ],
    correct: 0,
    explanation:
`:focus działa po kliknięciu w pole formularza.`,
  },
]

export const lesson15Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Pseudo-klasy pozwalają tworzyć interaktywne elementy.

Zapamiętaj:

✔ :hover działa po najechaniu myszką  
✔ :focus działa po kliknięciu  
✔ :active działa podczas kliknięcia  
✔ pseudo-klasy zapisujemy z :  

Najważniejsze pseudo-klasy:
🔹 :hover  
🔹 :focus  
🔹 :active  
🔹 :first-child  

👉 Dzięki pseudo-klasom strony stają się bardziej dynamiczne.
`,
}