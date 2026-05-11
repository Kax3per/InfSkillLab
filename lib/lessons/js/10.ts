import { Step } from "@/lib/types"

export const lesson10: Step[] = [
  {
    type: "text",
    title: "🌐 DOM w JavaScript",
    content:
`DOM (Document Object Model) to model dokumentu HTML.

Dzięki DOM JavaScript może:
👉 zmieniać zawartość strony  
👉 dodawać elementy  
👉 usuwać elementy  
👉 reagować na działania użytkownika  

📌 DOM łączy JavaScript z HTML.`,
  },

  {
    type: "text",
    title: "🔍 Pobieranie elementów",
    content:
`JavaScript może pobierać elementy HTML ze strony.

Najczęściej używamy:
👉 getElementById()  
👉 querySelector()  

📌 Dzięki temu możemy modyfikować elementy strony.`,
  },

  {
    type: "code",
    title: "👀 Pobieranie elementu",
    content: `let naglowek = document.getElementById("title")

console.log(naglowek)`,
  },

  {
    type: "text",
    title: "🧱 querySelector()",
    content:
`querySelector() pozwala pobierać elementy za pomocą selektorów CSS.

Przykłady:
👉 #id  
👉 .class  
👉 p  

📌 To bardzo popularna metoda w nowoczesnym JavaScript.`,
  },

  {
    type: "code",
    title: "🎯 querySelector()",
    content: `let tekst = document.querySelector(".tekst")

console.log(tekst)`,
  },

  {
    type: "text",
    title: "✏ Zmiana tekstu na stronie",
    content:
`JavaScript może zmieniać zawartość elementów HTML.

Najczęściej używamy:
👉 innerText  
👉 innerHTML  

📌 Dzięki temu strony mogą być dynamiczne.`,
  },

  {
    type: "code",
    title: "📝 Zmiana tekstu",
    content: `let title = document.getElementById("title")

title.innerText = "Nowy nagłówek"`,
  },

  {
    type: "text",
    title: "🎨 Zmiana stylów",
    content:
`JavaScript może zmieniać style CSS elementów.

Przykłady:
👉 kolor tekstu  
👉 rozmiar czcionki  
👉 tło strony`,
  },

  {
    type: "code",
    title: "🎨 Zmiana CSS",
    content: `let box = document.querySelector(".box")

box.style.backgroundColor = "red"

box.style.color = "white"`,
  },

  {
    type: "text",
    title: "➕ Dodawanie klas CSS",
    content:
`Do zarządzania klasami używamy:
👉 classList

Najważniejsze metody:
✔ add()  
✔ remove()  
✔ toggle()`,
  },

  {
    type: "code",
    title: "📦 classList",
    content: `let button = document.querySelector("button")

button.classList.add("active")`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z DOM uczniowie często popełniają błędy:

❌ błędny selektor  
❌ brak elementu w HTML  
❌ literówki w id lub class  
❌ uruchamianie skryptu przed załadowaniem strony  

📌 Jeśli element nie istnieje, JavaScript zwróci null.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz w HTML:
👉 nagłówek h1 z id="title"

Następnie w JavaScript:
✔ pobierz element  
✔ zmień tekst nagłówka  
✔ zmień kolor tekstu na niebieski`,
  },

  {
    type: "quiz",
    question: "Do czego służy DOM?",
    answers: [
      "Do tworzenia baz danych",
      "Do zarządzania HTML za pomocą JavaScript",
      "Do hostowania stron",
      "Do kompresji obrazów",
    ],
    correct: 1,
    explanation:
`DOM pozwala JavaScriptowi modyfikować elementy HTML na stronie.`,
  },

  {
    type: "quiz",
    question: "Która metoda pobiera element po id?",
    answers: [
      "queryAll()",
      "innerHTML()",
      "getElementById()",
      "style()",
    ],
    correct: 2,
    explanation:
`getElementById() pobiera element HTML na podstawie id.`,
  },
]

export const lesson10Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
DOM pozwala JavaScriptowi pracować z elementami HTML.

Zapamiętaj najważniejsze informacje:

✔ DOM łączy JavaScript z HTML  
✔ getElementById() pobiera element po id  
✔ querySelector() używa selektorów CSS  
✔ innerText zmienia tekst  
✔ style pozwala zmieniać CSS  

Najważniejsze elementy:
🔹 DOM  
🔹 getElementById()  
🔹 querySelector()  
🔹 innerText  
🔹 classList  

👉 DOM jest podstawą dynamicznych stron internetowych.
`,
}