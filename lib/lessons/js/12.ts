import { Step } from "@/lib/types"

export const lesson12: Step[] = [
  {
    type: "text",
    title: "📋 Formularze w JavaScript",
    content:
`Formularze pozwalają użytkownikowi przesyłać dane.

Najczęściej używane są do:
👉 logowania  
👉 rejestracji  
👉 wyszukiwania  
👉 kontaktu z użytkownikiem  

📌 JavaScript może sprawdzać poprawność danych wpisanych do formularza.`,
  },

  {
    type: "text",
    title: "🔍 Pobieranie danych z input",
    content:
`Wartość wpisaną przez użytkownika pobieramy za pomocą:
👉 value  

Najpierw pobieramy element input,
a następnie odczytujemy jego wartość.`,
  },

  {
    type: "code",
    title: "👀 Pobieranie wartości",
    content: `let input = document.querySelector("input")

console.log(input.value)`,
  },

  {
    type: "text",
    title: "📨 Event submit",
    content:
`Formularze najczęściej używają eventu:
👉 submit  

Event uruchamia się po wysłaniu formularza.`,
  },

  {
    type: "code",
    title: "📤 Obsługa formularza",
    content: `let form = document.querySelector("form")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  console.log("Formularz wysłany")
})`,
  },

  {
    type: "text",
    title: "✅ Walidacja danych",
    content:
`Walidacja polega na sprawdzaniu poprawności danych.

Możemy sprawdzać:
👉 długość hasła  
👉 pusty input  
👉 poprawność emaila  
👉 wiek użytkownika  

📌 Walidacja poprawia bezpieczeństwo i wygodę aplikacji.`,
  },

  {
    type: "code",
    title: "🧪 Prosta walidacja",
    content: `let input = document.querySelector("input")

if (input.value === "") {
  console.log("Pole jest puste")
}`,
  },

  {
    type: "text",
    title: "📏 length",
    content:
`length zwraca długość tekstu.

Najczęściej używany jest do:
👉 sprawdzania hasła  
👉 liczenia znaków  
👉 walidacji formularzy`,
  },

  {
    type: "code",
    title: "🔢 Sprawdzanie długości",
    content: `let haslo = "12345"

console.log(haslo.length)`,
  },

  {
    type: "text",
    title: "📧 includes()",
    content:
`includes() sprawdza,
czy tekst zawiera określony fragment.

Przykład:
👉 sprawdzanie czy email posiada znak @`,
  },

  {
    type: "code",
    title: "📨 Sprawdzanie emaila",
    content: `let email = "test@gmail.com"

console.log(email.includes("@"))`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z formularzami uczniowie często popełniają błędy:

❌ brak preventDefault()  
❌ pobieranie złego inputa  
❌ brak sprawdzania pustych pól  
❌ literówki w nazwach klas i id  

📌 Formularz bez walidacji może przyjmować błędne dane.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz formularz z inputem.

Następnie:
✔ pobierz wartość inputa  
✔ sprawdź czy pole jest puste  
✔ jeśli puste → wyświetl komunikat:
"Wpisz dane"`,
  },

  {
    type: "quiz",
    question: "Do czego służy value?",
    answers: [
      "Zmienia kolor strony",
      "Pobiera wartość inputa",
      "Tworzy funkcję",
      "Usuwa element HTML",
    ],
    correct: 1,
    explanation:
`value pobiera dane wpisane do inputa.`,
  },

  {
    type: "quiz",
    question: "Do czego służy preventDefault() w formularzu?",
    answers: [
      "Usuwa formularz",
      "Tworzy input",
      "Zatrzymuje domyślne wysłanie formularza",
      "Dodaje styl CSS",
    ],
    correct: 2,
    explanation:
`preventDefault() zatrzymuje odświeżenie strony po wysłaniu formularza.`,
  },
]

export const lesson12Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Formularze pozwalają użytkownikom przesyłać dane do aplikacji.

Zapamiętaj najważniejsze informacje:

✔ value pobiera wartość inputa  
✔ submit obsługuje wysłanie formularza  
✔ preventDefault() zatrzymuje domyślne działanie formularza  
✔ Walidacja sprawdza poprawność danych  
✔ length zwraca długość tekstu  

Najważniejsze elementy:
🔹 value  
🔹 submit  
🔹 preventDefault()  
🔹 length  
🔹 includes()  

👉 Formularze i walidacja są podstawą nowoczesnych aplikacji webowych.
`,
}