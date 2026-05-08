import { Step } from "@/lib/types"

export const lesson18: Step[] = [

  {
    type: "text",
    title: "🌙 Dark Mode",
    content:
`Dark Mode to ciemny motyw strony internetowej.

Bardzo popularny w nowoczesnych aplikacjach:
👉 YouTube  
👉 Discord  
👉 GitHub  
👉 ChatGPT  

📌 Dark Mode zmniejsza zmęczenie oczu.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa Dark Mode?",
    content:
`Dark Mode polega na zmianie:

✔ tła  
✔ kolorów tekstu  
✔ kolorów elementów UI  

Najczęściej używane:
👉 background: black  
👉 color: white`,
  },

  {
    type: "code",
    title: "👀 Podstawowy Dark Mode",
    content:
`body{

  background: black;

  color: white;

}`
  },

  {
    type: "text",
    title: "🎨 Stylowanie kart i buttonów",
    content:
`W Dark Mode stylujemy także:
👉 cardy  
👉 buttony  
👉 inputy  
👉 navbar  

📌 Wszystkie elementy powinny pasować kolorystycznie.`,
  },

  {
    type: "code",
    title: "👀 Dark card",
    content:
`div{

  background: #111;

  color: white;

  border: 1px solid #333;

}`
  },

  {
    type: "text",
    title: "🧠 Kontrast kolorów",
    content:
`W Dark Mode bardzo ważny jest kontrast.

✔ jasny tekst  
✔ ciemne tło  
✔ czytelność  

📌 Zbyt ciemny tekst będzie niewidoczny.`,
  },

  {
    type: "code",
    title: "👀 Dobry kontrast",
    content:
`body{

  background: #0f0f0f;

  color: #ffffff;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ czarny tekst na czarnym tle  
❌ zbyt jasne elementy  
❌ brak kontrastu  
❌ mieszanie wielu kolorów  

📌 Dark Mode powinien być czytelny i prosty.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz Dark Mode.

Dodaj:
👉 background: black  
👉 color: white  
👉 border: 1px solid gray`
  },

  {
    type: "quiz",
    question:
      "Jaki kolor tekstu najczęściej używa się w Dark Mode?",
    answers: [
      "black",
      "gray",
      "white",
      "blue",
    ],
    correct: 2,
    explanation:
`W Dark Mode najczęściej używa się jasnego tekstu.`,
  },

  {
    type: "quiz",
    question:
      "Dlaczego kontrast jest ważny?",
    answers: [
      "Dla animacji",
      "Dla szybkości strony",
      "Dla czytelności",
      "Dla SEO",
    ],
    correct: 2,
    explanation:
`Kontrast poprawia czytelność strony.`,
  },
]

export const lesson18Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Dark Mode to nowoczesny ciemny motyw stron i aplikacji.

Zapamiętaj:

✔ ciemne tło  
✔ jasny tekst  
✔ ważny jest kontrast  
✔ wszystkie elementy powinny być spójne kolorystycznie  

Najważniejsze właściwości:
🔹 background  
🔹 color  
🔹 border  

👉 Dark Mode poprawia wygląd i komfort korzystania ze strony.
`,
}