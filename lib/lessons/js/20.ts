import { Step } from "@/lib/types"

export const lesson20: Step[] = [
  {
    type: "text",
    title: "🚀 Mini projekty w JavaScript",
    content:
`Po poznaniu podstaw JavaScript warto zacząć tworzyć własne projekty.

Mini projekty pomagają:
👉 utrwalać wiedzę  
👉 rozwijać umiejętności  
👉 uczyć się praktycznego programowania  
👉 budować portfolio programisty  

📌 Najlepszy sposób nauki programowania to tworzenie projektów.`,
  },

  {
    type: "text",
    title: "📝 Projekt Todo App",
    content:
`Todo App to aplikacja do zarządzania zadaniami.

Funkcje aplikacji:
👉 dodawanie zadań  
👉 usuwanie zadań  
👉 oznaczanie wykonanych zadań  

📌 W takim projekcie używa się:
✔ DOM  
✔ eventów  
✔ tablic  
✔ localStorage`,
  },

  {
    type: "code",
    title: "👀 Dodawanie zadania",
    content: `let tasks = []

tasks.push("Nauczyć się JavaScript")

console.log(tasks)`,
  },

  {
    type: "text",
    title: "🌦 Projekt aplikacji pogodowej",
    content:
`Aplikacja pogodowa pobiera dane z API.

Funkcje:
👉 wyszukiwanie miasta  
👉 wyświetlanie temperatury  
👉 pokazywanie pogody  

📌 Projekt wykorzystuje:
✔ fetch()  
✔ API  
✔ async await`,
  },

  {
    type: "code",
    title: "🌍 Pobieranie danych pogodowych",
    content: `fetch("https://api.example.com/weather")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })`,
  },

  {
    type: "text",
    title: "🎮 Projekt quizu",
    content:
`Quiz pozwala sprawdzać wiedzę użytkownika.

Najczęstsze funkcje:
👉 pytania i odpowiedzi  
👉 liczenie punktów  
👉 sprawdzanie poprawnych odpowiedzi  

📌 Taki projekt rozwija logikę programowania.`,
  },

  {
    type: "code",
    title: "🧠 Sprawdzanie odpowiedzi",
    content: `let poprawna = "JavaScript"

if (poprawna === "JavaScript") {
  console.log("Dobra odpowiedź")
}`,
  },

  {
    type: "text",
    title: "⏱ Projekt licznika",
    content:
`Licznik to prosty projekt do nauki eventów i DOM.

Funkcje:
👉 zwiększanie liczby  
👉 zmniejszanie liczby  
👉 resetowanie wartości  

📌 To bardzo dobry projekt dla początkujących.`,
  },

  {
    type: "code",
    title: "➕ Prosty licznik",
    content: `let liczba = 0

liczba++

console.log(liczba)`,
  },

  {
    type: "text",
    title: "💬 Projekt czatu",
    content:
`Prosty chat pozwala wysyłać wiadomości.

Projekt może wykorzystywać:
👉 formularze  
👉 DOM  
👉 API  
👉 localStorage  

📌 To dobry krok do bardziej zaawansowanych aplikacji.`,
  },

  {
    type: "code",
    title: "📨 Wiadomość na chacie",
    content: `let message = "Cześć"

console.log(message)`,
  },

  {
    type: "text",
    title: "🧠 Jak rozwijać projekty?",
    content:
`Każdy projekt można rozwijać o nowe funkcje.

Przykłady:
👉 logowanie użytkowników  
👉 zapisywanie danych  
👉 ciemny motyw  
👉 filtrowanie danych  
👉 animacje  

📌 Najwięcej nauki daje samodzielne rozwijanie aplikacji.`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas tworzenia projektów uczniowie często popełniają błędy:

❌ zbyt duży projekt na początek  
❌ brak planu aplikacji  
❌ chaotyczny kod  
❌ brak podziału na funkcje  

📌 Warto zaczynać od prostych projektów i rozwijać je stopniowo.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz prosty licznik.

Dodaj:
👉 zmienną liczba = 0  
👉 przycisk zwiększający wartość  

Następnie:
✔ po kliknięciu zwiększ licznik  
✔ wyświetl wynik w console.log()`,
  },

  {
    type: "quiz",
    question: "Dlaczego warto tworzyć mini projekty?",
    answers: [
      "Bo zastępują HTML",
      "Bo uczą praktycznego programowania",
      "Bo usuwają błędy automatycznie",
      "Bo działają bez JavaScript",
    ],
    correct: 1,
    explanation:
`Mini projekty pomagają rozwijać praktyczne umiejętności programowania.`,
  },

  {
    type: "quiz",
    question: "Który projekt często wykorzystuje API?",
    answers: [
      "Kalkulator CSS",
      "Projekt HTML",
      "Aplikacja pogodowa",
      "Tabela w Wordzie",
    ],
    correct: 2,
    explanation:
`Aplikacje pogodowe bardzo często pobierają dane z API.`,
  },
]

export const lesson20Summary = {
  title: "📚 Podsumowanie kursu JavaScript",
  content: `
Gratulacje 🎉  
Ukończyłeś podstawy JavaScript.

Poznałeś:
✔ zmienne  
✔ funkcje  
✔ warunki  
✔ pętle  
✔ tablice  
✔ obiekty  
✔ DOM  
✔ eventy  
✔ API  
✔ localStorage  
✔ async await  
✔ klasy i OOP  

Najważniejsze informacje:

✔ JavaScript odpowiada za interakcje stron  
✔ DOM pozwala zmieniać HTML  
✔ Eventy reagują na działania użytkownika  
✔ API umożliwia komunikację z serwerem  
✔ Funkcje i moduły pomagają organizować kod  

📌 Najlepszy sposób nauki:
👉 tworzenie własnych projektów  
👉 rozwiązywanie problemów  
👉 regularne pisanie kodu  

Przykładowe projekty:
🔹 Todo App  
🔹 Quiz  
🔹 Weather App  
🔹 Licznik  
🔹 Chat  

👉 To dopiero początek drogi w świecie programowania 🚀
`,
}