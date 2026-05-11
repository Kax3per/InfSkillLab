import { Step } from "@/lib/types"

export const lesson13: Step[] = [
  {
    type: "text",
    title: "💾 LocalStorage i SessionStorage",
    content:
`JavaScript pozwala zapisywać dane w przeglądarce użytkownika.

Najczęściej używamy:
👉 localStorage  
👉 sessionStorage  

Dzięki temu możemy:
✔ zapisywać ustawienia  
✔ przechowywać dane użytkownika  
✔ tworzyć system logowania  
✔ zapamiętywać motyw strony  

📌 Dane przechowywane są bez użycia bazy danych.`,
  },

  {
    type: "text",
    title: "📦 localStorage",
    content:
`localStorage zapisuje dane na stałe.

Dane pozostają zapisane nawet po:
👉 zamknięciu przeglądarki  
👉 restarcie komputera  

📌 Dane zostaną usunięte dopiero po ręcznym wyczyszczeniu.`,
  },

  {
    type: "code",
    title: "👀 Zapisywanie danych",
    content: `localStorage.setItem("imie", "Kacper")`,
  },

  {
    type: "text",
    title: "📖 Odczytywanie danych",
    content:
`Dane zapisane w localStorage możemy pobierać za pomocą:
👉 getItem()  

📌 getItem() zwraca zapisane dane.`,
  },

  {
    type: "code",
    title: "📥 Pobieranie danych",
    content: `let imie = localStorage.getItem("imie")

console.log(imie)`,
  },

  {
    type: "text",
    title: "🗑 Usuwanie danych",
    content:
`Dane możemy usuwać za pomocą:
👉 removeItem()  
lub  
👉 clear()  

📌 clear() usuwa wszystkie dane.`,
  },

  {
    type: "code",
    title: "❌ Usuwanie danych",
    content: `localStorage.removeItem("imie")

localStorage.clear()`,
  },

  {
    type: "text",
    title: "⏳ sessionStorage",
    content:
`sessionStorage działa podobnie do localStorage.

Różnica:
👉 dane usuwają się po zamknięciu karty lub przeglądarki.`,
  },

  {
    type: "code",
    title: "🧱 sessionStorage",
    content: `sessionStorage.setItem("user", "Kacper")

console.log(sessionStorage.getItem("user"))`,
  },

  {
    type: "text",
    title: "🔄 JSON.stringify() i JSON.parse()",
    content:
`localStorage zapisuje dane jako tekst.

Dlatego obiekty i tablice trzeba konwertować.

Najważniejsze metody:
👉 JSON.stringify()  
👉 JSON.parse()`,
  },

  {
    type: "code",
    title: "📚 Zapisywanie obiektu",
    content: `let user = {
  imie: "Kacper",
  wiek: 18
}

localStorage.setItem("user", JSON.stringify(user))

let data = JSON.parse(localStorage.getItem("user"))

console.log(data.imie)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z localStorage uczniowie często popełniają błędy:

❌ brak JSON.stringify()  
❌ brak JSON.parse()  
❌ literówki w nazwach kluczy  
❌ próba zapisania obiektu bez konwersji  

📌 localStorage przechowuje dane jako tekst.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz zmienną:
👉 ulubionaGra = "Minecraft"

Następnie:
✔ zapisz dane do localStorage  
✔ pobierz dane  
✔ wyświetl wynik w console.log()`,
  },

  {
    type: "quiz",
    question: "Która metoda zapisuje dane w localStorage?",
    answers: [
      "getItem()",
      "push()",
      "setItem()",
      "querySelector()",
    ],
    correct: 2,
    explanation:
`setItem() zapisuje dane w localStorage.`,
  },

  {
    type: "quiz",
    question: "Czym różni się sessionStorage od localStorage?",
    answers: [
      "Nie zapisuje danych",
      "Działa tylko w CSS",
      "Usuwa dane po zamknięciu karty",
      "Nie działa w przeglądarce",
    ],
    correct: 2,
    explanation:
`sessionStorage usuwa dane po zamknięciu karty lub przeglądarki.`,
  },
]

export const lesson13Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
localStorage i sessionStorage pozwalają przechowywać dane w przeglądarce.

Zapamiętaj najważniejsze informacje:

✔ localStorage zapisuje dane na stałe  
✔ sessionStorage usuwa dane po zamknięciu karty  
✔ setItem() zapisuje dane  
✔ getItem() pobiera dane  
✔ JSON.stringify() konwertuje obiekt do tekstu  

Najważniejsze elementy:
🔹 localStorage  
🔹 sessionStorage  
🔹 setItem()  
🔹 getItem()  
🔹 JSON.stringify()  
🔹 JSON.parse()  

👉 Storage jest bardzo często używany w nowoczesnych aplikacjach webowych.
`,
}