import { Step } from "@/lib/types"

export const lesson6: Step[] = [
  {
    type: "text",
    title: "🧩 Funkcje w JavaScript",
    content:
`Funkcje pozwalają zapisywać kod, który możemy uruchamiać wiele razy.

Dzięki funkcjom:
👉 kod jest bardziej uporządkowany  
👉 unikamy powtarzania kodu  
👉 łatwiej rozwijać aplikacje  

Funkcja może:
✔ wykonywać działania  
✔ przyjmować dane  
✔ zwracać wynik  

📌 Funkcje są jedną z najważniejszych części JavaScript.`,
  },

  {
    type: "text",
    title: "🔧 Tworzenie funkcji",
    content:
`Funkcję tworzymy za pomocą słowa:
👉 function

Przykład:
👉 funkcja wyświetlająca tekst  

📌 Funkcja wykona się dopiero po jej wywołaniu.`,
  },

  {
    type: "code",
    title: "👀 Pierwsza funkcja",
    content: `function przywitaj() {
  console.log("Witaj użytkowniku")
}

przywitaj()`,
  },

  {
    type: "text",
    title: "📦 Parametry funkcji",
    content:
`Funkcje mogą przyjmować dane.

Takie dane nazywamy:
👉 parametrami  

Dzięki nim funkcja może działać na różnych wartościach.`,
  },

  {
    type: "code",
    title: "🧱 Funkcja z parametrem",
    content: `function przywitaj(imie) {
  console.log("Cześć " + imie)
}

przywitaj("Kacper")`,
  },

  {
    type: "text",
    title: "↩ Zwracanie wartości — return",
    content:
`Funkcja może zwracać wynik za pomocą:
👉 return  

return kończy działanie funkcji i oddaje wartość.`,
  },

  {
    type: "code",
    title: "🧮 Przykład return",
    content: `function dodaj(a, b) {
  return a + b
}

let wynik = dodaj(5, 3)

console.log(wynik)`,
  },

  {
    type: "text",
    title: "⚡ Funkcje strzałkowe",
    content:
`JavaScript posiada krótszy zapis funkcji.

Nazywamy go:
👉 arrow function  

Do zapisu używamy:
👉 =>  

📌 Funkcje strzałkowe są bardzo popularne w nowoczesnym JavaScript.`,
  },

  {
    type: "code",
    title: "🏹 Arrow function",
    content: `const odejmij = (a, b) => {
  return a - b
}

console.log(odejmij(10, 4))`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z funkcjami uczniowie często popełniają błędy:

❌ brak wywołania funkcji  
❌ literówki w nazwie funkcji  
❌ brak return  
❌ używanie zmiennych spoza funkcji  

📌 Funkcja nie wykona się sama — trzeba ją uruchomić.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz funkcję o nazwie "poleKwadratu".

Funkcja ma:
👉 przyjmować bok kwadratu  
👉 zwracać pole kwadratu  

Następnie:
✔ wyświetl wynik za pomocą console.log()`,
  },

  {
    type: "quiz",
    question: "Do czego służy funkcja?",
    answers: [
      "Do przechowywania obrazów",
      "Do powtarzania i organizacji kodu",
      "Do zmiany koloru strony",
      "Do tworzenia tabel",
    ],
    correct: 1,
    explanation:
`Funkcje pozwalają organizować i wielokrotnie używać kodu.`,
  },

  {
    type: "quiz",
    question: "Do czego służy return?",
    answers: [
      "Tworzy pętlę",
      "Wyświetla dane",
      "Kończy program",
      "Zwraca wartość z funkcji",
    ],
    correct: 3,
    explanation:
`return zwraca wynik działania funkcji.`,
  },
]

export const lesson6Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Funkcje pozwalają tworzyć wielokrotnie używany kod.

Zapamiętaj najważniejsze informacje:

✔ function tworzy funkcję  
✔ Funkcje mogą mieć parametry  
✔ return zwraca wynik  
✔ Funkcję trzeba wywołać  
✔ Arrow function to krótszy zapis funkcji  

Najważniejsze elementy:
🔹 function  
🔹 parametry  
🔹 return  
🔹 =>  

👉 Funkcje są fundamentem nowoczesnego JavaScript.
`,
}