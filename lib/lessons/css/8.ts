import { Step } from "@/lib/types"

export const lesson8: Step[] = [

  {
    type: "text",
    title: "🧱 Display w CSS",
    content:
`Display to jedna z najważniejszych właściwości CSS.

Określa sposób wyświetlania elementu na stronie.

Najpopularniejsze wartości:
👉 block  
👉 inline  
👉 inline-block  
👉 flex  
👉 grid  

📌 Display bardzo często pojawia się na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Display block",
    content:
`Element block zajmuje całą szerokość strony.

Każdy element block:
✔ zaczyna się od nowej linii  
✔ rozciąga się na szerokość rodzica  

Przykłady elementów block:
👉 div  
👉 h1  
👉 p`,
  },

  {
    type: "code",
    title: "👀 Przykład block",
    content:
`div{

  display: block;

}`
  },

  {
    type: "text",
    title: "🧠 Display inline",
    content:
`Element inline nie przechodzi do nowej linii.

Układa się obok innych elementów.

Przykłady:
👉 span  
👉 a  
👉 strong  

📌 Inline zajmuje tylko tyle miejsca ile potrzebuje tekst.`,
  },

  {
    type: "code",
    title: "👀 Przykład inline",
    content:
`span{

  display: inline;

}`
  },

  {
    type: "text",
    title: "🧠 Inline-block",
    content:
`Inline-block łączy cechy block i inline.

✔ element ustawia się obok innych  
✔ można ustawiać width i height  

Bardzo często używany przy przyciskach.`,
  },

  {
    type: "code",
    title: "🧱 Przykład inline-block",
    content:
`button{

  display: inline-block;

  width: 200px;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ display = block  
❌ brak średnika ;  
❌ mylenie inline z inline-block  
❌ używanie width przy inline  

📌 Inline nie obsługuje poprawnie width i height.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz styl dla diva.

Dodaj:
👉 display: block  
👉 width: 300px  
👉 background: blue`
  },

  {
    type: "quiz",
    question:
      "Która wartość display ustawia element w nowej linii?",
    answers: [
      "inline",
      "block",
      "flex",
      "grid",
    ],
    correct: 1,
    explanation:
`Display block ustawia element w nowej linii.`,
  },

  {
    type: "quiz",
    question:
      "Która wartość display pozwala ustawiać elementy obok siebie?",
    answers: [
      "inline",
      "block",
      "none",
      "fixed",
    ],
    correct: 0,
    explanation:
`Display inline ustawia elementy obok siebie.`,
  },
]

export const lesson8Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Display określa sposób wyświetlania elementów.

Zapamiętaj:

✔ block = nowa linia  
✔ inline = obok innych elementów  
✔ inline-block = połączenie obu trybów  

Najważniejsze wartości:
🔹 block  
🔹 inline  
🔹 inline-block  
🔹 flex  
🔹 grid  

👉 Display to fundament budowania layoutów w CSS.
`,
}