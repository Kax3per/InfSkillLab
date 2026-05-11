import { Step } from "@/lib/types"

export const lesson14: Step[] = [
  {
    type: "text",
    title: "⏳ Asynchroniczność w JavaScript",
    content:
`JavaScript potrafi wykonywać niektóre operacje w tle.

Nazywamy to:
👉 asynchronicznością  

Dzięki temu:
✔ strona się nie zawiesza  
✔ dane mogą ładować się w tle  
✔ aplikacja działa płynniej  

📌 Asynchroniczność jest bardzo ważna w nowoczesnych aplikacjach.`,
  },

  {
    type: "text",
    title: "⏰ setTimeout()",
    content:
`setTimeout() uruchamia kod po określonym czasie.

Składnia:
👉 setTimeout(funkcja, czas)

Czas podajemy w:
👉 milisekundach  

📌 1000 ms = 1 sekunda`,
  },

  {
    type: "code",
    title: "👀 Przykład setTimeout()",
    content: `setTimeout(() => {
  console.log("Minęły 2 sekundy")
}, 2000)`,
  },

  {
    type: "text",
    title: "🔁 setInterval()",
    content:
`setInterval() powtarza kod co określony czas.

Przykład:
👉 licznik  
👉 zegar  
👉 automatyczne odświeżanie danych`,
  },

  {
    type: "code",
    title: "🔄 Przykład setInterval()",
    content: `setInterval(() => {
  console.log("Działa co sekundę")
}, 1000)`,
  },

  {
    type: "text",
    title: "🌐 fetch()",
    content:
`fetch() służy do pobierania danych z internetu lub API.

Dzięki fetch():
👉 pobieramy dane użytkowników  
👉 pobieramy pogodę  
👉 komunikujemy się z serwerem  

📌 fetch() działa asynchronicznie.`,
  },

  {
    type: "code",
    title: "📥 Przykład fetch()",
    content: `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })`,
  },

  {
    type: "text",
    title: "🚀 async i await",
    content:
`async i await upraszczają pracę z asynchronicznym kodem.

Dzięki nim kod wygląda bardziej jak zwykły JavaScript.

👉 async tworzy funkcję asynchroniczną  
👉 await czeka na wynik operacji`,
  },

  {
    type: "code",
    title: "⚡ async await",
    content: `async function pobierzDane() {
  let response = await fetch("https://api.example.com/users")

  let data = await response.json()

  console.log(data)
}

pobierzDane()`,
  },

  {
    type: "text",
    title: "❌ Obsługa błędów",
    content:
`Podczas pobierania danych mogą wystąpić błędy.

Najczęściej używamy:
👉 try  
👉 catch  

📌 Dzięki temu aplikacja nie przestanie działać po błędzie.`,
  },

  {
    type: "code",
    title: "🛠 try catch",
    content: `async function pobierzDane() {
  try {
    let response = await fetch("https://api.example.com")

    let data = await response.json()

    console.log(data)

  } catch(error) {
    console.log("Wystąpił błąd")
  }
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z asynchronicznością uczniowie często popełniają błędy:

❌ brak await  
❌ brak async  
❌ błędny adres API  
❌ brak obsługi błędów  

📌 Kod asynchroniczny wykonuje się inaczej niż zwykły kod.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Użyj setTimeout().

Następnie:
✔ po 3 sekundach wyświetl:
"Witaj w JavaScript"`,
  },

  {
    type: "quiz",
    question: "Do czego służy setTimeout()?",
    answers: [
      "Tworzy tablicę",
      "Zmienia HTML",
      "Uruchamia kod po czasie",
      "Tworzy funkcję",
    ],
    correct: 2,
    explanation:
`setTimeout() uruchamia kod po określonym czasie.`,
  },

  {
    type: "quiz",
    question: "Do czego służy fetch()?",
    answers: [
      "Do pobierania danych z internetu",
      "Do tworzenia CSS",
      "Do zmiany koloru strony",
      "Do usuwania elementów HTML",
    ],
    correct: 0,
    explanation:
`fetch() służy do komunikacji z API i pobierania danych.`,
  },
]

export const lesson14Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Asynchroniczność pozwala wykonywać operacje w tle.

Zapamiętaj najważniejsze informacje:

✔ setTimeout() uruchamia kod po czasie  
✔ setInterval() powtarza kod  
✔ fetch() pobiera dane z API  
✔ async i await upraszczają kod asynchroniczny  
✔ try catch obsługuje błędy  

Najważniejsze elementy:
🔹 setTimeout()  
🔹 setInterval()  
🔹 fetch()  
🔹 async  
🔹 await  
🔹 try catch  

👉 Asynchroniczność jest podstawą nowoczesnych aplikacji internetowych.
`,
}