import { Step } from "@/lib/types"

export const lesson14: Step[] = [

  {
    type: "text",
    title: "📝 Stylowanie formularzy",
    content:
`Formularze są podstawą większości stron internetowych.

Używamy ich do:
👉 logowania  
👉 rejestracji  
👉 kontaktu  
👉 wysyłania danych  

📌 Dobrze ostylowany formularz wygląda profesjonalnie.`,
  },

  {
    type: "text",
    title: "🧠 Stylowanie input",
    content:
`Najczęściej stylujemy:

✔ input  
✔ textarea  
✔ select  
✔ button  

Najpopularniejsze właściwości:
👉 padding  
👉 border  
👉 border-radius  
👉 width`,
  },

  {
    type: "code",
    title: "👀 Styl input",
    content:
`input{

  width: 100%;

  padding: 15px;

  border: 1px solid gray;

  border-radius: 10px;

}`
  },

  {
    type: "text",
    title: "📏 Width i formularze",
    content:
`Bardzo często używa się:

👉 width: 100%

Dzięki temu input zajmuje całą szerokość kontenera.

📌 To standard w nowoczesnych formularzach.`,
  },

  {
    type: "code",
    title: "👀 Formularz full width",
    content:
`form{

  width: 100%;

}`
  },

  {
    type: "text",
    title: "✨ Focus",
    content:
`Pseudo-klasa :focus działa po kliknięciu w pole formularza.

Możemy wtedy:
✔ zmienić border  
✔ dodać cień  
✔ zmienić kolor tła`,
  },

  {
    type: "code",
    title: "👀 Focus input",
    content:
`input:focus{

  border: 2px solid blue;

}`
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

❌ brak padding  
❌ brak border-radius  
❌ używanie małych inputów  
❌ mylenie :focus z :hover  

📌 Formularz powinien być czytelny i wygodny.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj input.

Dodaj:
👉 width: 100%  
👉 padding: 15px  
👉 border-radius: 10px  
👉 border: 1px solid gray`
  },

  {
    type: "quiz",
    question:
      "Która pseudo-klasa działa po kliknięciu w input?",
    answers: [
      ":hover",
      ":focus",
      ":active",
      ":checked",
    ],
    correct: 1,
    explanation:
`Pseudo-klasa :focus działa po kliknięciu w pole formularza.`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość zaokrągla rogi inputa?",
    answers: [
      "padding",
      "margin",
      "border-radius",
      "display",
    ],
    correct: 2,
    explanation:
`border-radius odpowiada za zaokrąglanie rogów.`,
  },
]

export const lesson14Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`
Formularze są bardzo ważnym elementem stron internetowych.

Zapamiętaj:

✔ input można stylować jak każdy element  
✔ width: 100% tworzy szerokie pola  
✔ padding poprawia wygodę użytkownika  
✔ border-radius zaokrągla rogi  
✔ :focus działa po kliknięciu  

Najważniejsze właściwości:
🔹 width  
🔹 padding  
🔹 border  
🔹 border-radius  
🔹 :focus  

👉 Dobrze zaprojektowane formularze poprawiają UX strony.
`,
}