import { Step } from "@/lib/types"

export const lesson15: Step[] = [
  {
    type: "text",
    title: "🌐 API i JSON w JavaScript",
    content:
`API pozwala aplikacjom komunikować się między sobą.

Dzięki API możemy:
👉 pobierać dane użytkowników  
👉 sprawdzać pogodę  
👉 pobierać produkty sklepu  
👉 logować użytkowników  

📌 Większość nowoczesnych aplikacji korzysta z API.`,
  },

  {
    type: "text",
    title: "📦 Co to jest JSON?",
    content:
`JSON (JavaScript Object Notation) to format przechowywania danych.

JSON przypomina obiekty JavaScript.

Najczęściej używany jest do:
👉 przesyłania danych między aplikacjami  
👉 komunikacji z API  

📌 JSON jest bardzo popularny w aplikacjach webowych.`,
  },

  {
    type: "code",
    title: "👀 Przykład JSON",
    content: `{
  "imie": "Kacper",
  "wiek": 18,
  "miasto": "Warszawa"
}`,
  },

  {
    type: "text",
    title: "📥 Pobieranie danych z API",
    content:
`Do pobierania danych najczęściej używamy:
👉 fetch()

fetch() wysyła zapytanie do serwera
i odbiera dane.`,
  },

  {
    type: "code",
    title: "🌍 Pobieranie API",
    content: `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })`,
  },

  {
    type: "text",
    title: "🔄 response.json()",
    content:
`response.json() konwertuje odpowiedź serwera do obiektu JavaScript.

📌 Dane z API najczęściej przychodzą jako JSON.`,
  },

  {
    type: "code",
    title: "📖 response.json()",
    content: `fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })`,
  },

  {
    type: "text",
    title: "🚀 async await i API",
    content:
`API bardzo często używane jest razem z:
👉 async  
👉 await  

📌 Dzięki temu kod jest czytelniejszy.`,
  },

  {
    type: "code",
    title: "⚡ API z async await",
    content: `async function pobierzUsers() {
  let response = await fetch("https://api.example.com/users")

  let data = await response.json()

  console.log(data)
}

pobierzUsers()`,
  },

  {
    type: "text",
    title: "🧠 Praca z danymi API",
    content:
`Dane z API często mają formę:
👉 tablic  
👉 obiektów  

Możemy:
✔ wyświetlać dane  
✔ filtrować dane  
✔ tworzyć elementy HTML`,
  },

  {
    type: "code",
    title: "📚 Odczytywanie danych",
    content: `let user = {
  imie: "Kacper",
  wiek: 18
}

console.log(user.imie)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z API uczniowie często popełniają błędy:

❌ brak await  
❌ błędny adres API  
❌ brak response.json()  
❌ próba użycia danych przed pobraniem  

📌 API działa asynchronicznie.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz obiekt user.

Dodaj:
👉 imie  
👉 wiek  
👉 miasto  

Następnie:
✔ wyświetl dane w console.log()`,
  },

  {
    type: "quiz",
    question: "Do czego służy API?",
    answers: [
      "Do zmiany koloru strony",
      "Do komunikacji między aplikacjami",
      "Do tworzenia CSS",
      "Do rysowania grafiki",
    ],
    correct: 1,
    explanation:
`API pozwala aplikacjom wymieniać dane i komunikować się ze sobą.`,
  },

  {
    type: "quiz",
    question: "Co robi response.json()?",
    answers: [
      "Usuwa dane",
      "Tworzy HTML",
      "Konwertuje odpowiedź do obiektu JavaScript",
      "Tworzy funkcję",
    ],
    correct: 2,
    explanation:
`response.json() zamienia dane JSON na obiekt JavaScript.`,
  },
]

export const lesson15Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
API pozwala aplikacjom komunikować się ze sobą.

Zapamiętaj najważniejsze informacje:

✔ API służy do wymiany danych  
✔ JSON to popularny format danych  
✔ fetch() pobiera dane z internetu  
✔ response.json() konwertuje dane  
✔ async i await upraszczają pracę z API  

Najważniejsze elementy:
🔹 API  
🔹 JSON  
🔹 fetch()  
🔹 response.json()  
🔹 async  
🔹 await  

👉 API i JSON są podstawą nowoczesnych aplikacji internetowych.
`,
}