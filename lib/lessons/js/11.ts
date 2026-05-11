import { Step } from "@/lib/types"

export const lesson11: Step[] = [
  {
    type: "text",
    title: "🖱 Eventy w JavaScript",
    content:
`Eventy (zdarzenia) pozwalają reagować na działania użytkownika.

JavaScript może wykrywać:
👉 kliknięcia  
👉 wpisywanie tekstu  
👉 ruch myszy  
👉 wysłanie formularza  
👉 naciśnięcie klawisza  

📌 Dzięki eventom strony internetowe stają się interaktywne.`,
  },

  {
    type: "text",
    title: "🔍 addEventListener()",
    content:
`Do obsługi zdarzeń najczęściej używamy:
👉 addEventListener()

Metoda nasłuchuje określonego zdarzenia
i uruchamia funkcję.`,
  },

  {
    type: "code",
    title: "👀 Kliknięcie przycisku",
    content: `let button = document.querySelector("button")

button.addEventListener("click", function() {
  console.log("Kliknięto przycisk")
})`,
  },

  {
    type: "text",
    title: "🖱 Najpopularniejsze eventy",
    content:
`Najczęściej używane zdarzenia:

👉 click — kliknięcie  
👉 input — wpisywanie danych  
👉 submit — wysłanie formularza  
👉 mouseover — najechanie myszką  
👉 keydown — naciśnięcie klawisza  

📌 Każde zdarzenie może wykonywać inną akcję.`,
  },

  {
    type: "code",
    title: "⌨ Event input",
    content: `let input = document.querySelector("input")

input.addEventListener("input", function() {
  console.log("Użytkownik wpisuje tekst")
})`,
  },

  {
    type: "text",
    title: "📦 Funkcja w eventach",
    content:
`Eventy najczęściej uruchamiają funkcje.

Możemy używać:
✔ zwykłych funkcji  
✔ arrow function  

📌 Funkcja wykona się po wystąpieniu zdarzenia.`,
  },

  {
    type: "code",
    title: "🏹 Arrow function w eventach",
    content: `let button = document.querySelector("button")

button.addEventListener("click", () => {
  console.log("Klik")
})`,
  },

  {
    type: "text",
    title: "🧠 Obiekt event",
    content:
`JavaScript przekazuje informacje o zdarzeniu do funkcji.

Takie dane zapisujemy najczęściej jako:
👉 event  
lub  
👉 e  

📌 Obiekt event zawiera szczegóły zdarzenia.`,
  },

  {
    type: "code",
    title: "📊 Obiekt event",
    content: `document.addEventListener("click", function(event) {
  console.log(event)
})`,
  },

  {
    type: "text",
    title: "🚫 preventDefault()",
    content:
`preventDefault() zatrzymuje domyślne działanie elementu.

Najczęściej używane przy:
👉 formularzach  
👉 linkach  

📌 Dzięki temu możemy kontrolować działanie strony.`,
  },

  {
    type: "code",
    title: "⛔ preventDefault()",
    content: `let form = document.querySelector("form")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  console.log("Formularz zatrzymany")
})`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z eventami uczniowie często popełniają błędy:

❌ błędny selektor elementu  
❌ literówki w nazwie eventu  
❌ brak funkcji w addEventListener()  
❌ używanie elementu który nie istnieje  

📌 Jeśli querySelector() nie znajdzie elementu, zwróci null.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz przycisk w HTML.

Następnie:
✔ pobierz przycisk w JavaScript  
✔ dodaj event click  
✔ po kliknięciu wyświetl:
"Przycisk został kliknięty"`,
  },

  {
    type: "quiz",
    question: "Do czego służy addEventListener()?",
    answers: [
      "Do tworzenia tablic",
      "Do nasłuchiwania zdarzeń",
      "Do zmiany koloru strony",
      "Do tworzenia funkcji",
    ],
    correct: 1,
    explanation:
`addEventListener() pozwala reagować na zdarzenia użytkownika.`,
  },

  {
    type: "quiz",
    question: "Który event oznacza kliknięcie?",
    answers: [
      "hover",
      "keydown",
      "submit",
      "click",
    ],
    correct: 3,
    explanation:
`Event click uruchamia się po kliknięciu elementu.`,
  },
]

export const lesson11Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Eventy pozwalają reagować na działania użytkownika.

Zapamiętaj najważniejsze informacje:

✔ addEventListener() obsługuje zdarzenia  
✔ click oznacza kliknięcie  
✔ input reaguje na wpisywanie danych  
✔ Event może uruchamiać funkcję  
✔ preventDefault() zatrzymuje domyślne działanie elementu  

Najważniejsze elementy:
🔹 addEventListener()  
🔹 click  
🔹 input  
🔹 event  
🔹 preventDefault()  

👉 Eventy są podstawą interaktywnych stron internetowych.
`,
}