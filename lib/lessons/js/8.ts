import { Step } from "@/lib/types"

export const lesson8: Step[] = [
  {
    type: "text",
    title: "📚 Tablice w JavaScript",
    content:
`Tablice pozwalają przechowywać wiele wartości w jednej zmiennej.

Dzięki tablicom możemy:
👉 przechowywać listy danych  
👉 pracować na wielu elementach  
👉 łatwo przetwarzać dane  

Przykłady:
🔹 lista użytkowników  
🔹 produkty sklepu  
🔹 oceny ucznia  

📌 Tablice są bardzo często używane w aplikacjach webowych.`,
  },

  {
    type: "text",
    title: "🧱 Tworzenie tablicy",
    content:
`Tablicę tworzymy za pomocą:
👉 []  

Elementy oddzielamy przecinkami.

Przykład:
👉 lista owoców  
👉 lista liczb  

📌 Każdy element posiada swój indeks.`,
  },

  {
    type: "code",
    title: "👀 Przykład tablicy",
    content: `let owoce = ["jabłko", "banan", "pomarańcza"]

console.log(owoce)`,
  },

  {
    type: "text",
    title: "🔢 Indeksy w tablicy",
    content:
`Elementy tablicy mają numery indeksów.

📌 Indeks zaczyna się od:
👉 0  

Przykład:
🔹 0 → pierwszy element  
🔹 1 → drugi element  
🔹 2 → trzeci element`,
  },

  {
    type: "code",
    title: "📦 Pobieranie elementu",
    content: `let kolory = ["czerwony", "zielony", "niebieski"]

console.log(kolory[0])

console.log(kolory[2])`,
  },

  {
    type: "text",
    title: "➕ Dodawanie elementów",
    content:
`Do dodawania elementów używamy:
👉 push()

push() dodaje element na koniec tablicy.`,
  },

  {
    type: "code",
    title: "➕ Przykład push()",
    content: `let liczby = [1, 2, 3]

liczby.push(4)

console.log(liczby)`,
  },

  {
    type: "text",
    title: "❌ Usuwanie elementów",
    content:
`Do usuwania elementów często używamy:
👉 pop()

pop() usuwa ostatni element tablicy.`,
  },

  {
    type: "code",
    title: "🗑 Przykład pop()",
    content: `let miasta = ["Warszawa", "Kraków", "Gdańsk"]

miasta.pop()

console.log(miasta)`,
  },

  {
    type: "text",
    title: "🔄 Pętla i tablica",
    content:
`Tablice bardzo często używane są razem z pętlami.

Dzięki temu możemy:
👉 wyświetlać wszystkie elementy  
👉 przetwarzać dane  
👉 tworzyć dynamiczne aplikacje`,
  },

  {
    type: "code",
    title: "🔁 Iterowanie po tablicy",
    content: `let imiona = ["Ania", "Kacper", "Ola"]

for (let i = 0; i < imiona.length; i++) {
  console.log(imiona[i])
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z tablicami uczniowie często popełniają błędy:

❌ używanie złego indeksu  
❌ zapominanie że indeks zaczyna się od 0  
❌ mylenie [] z {}  
❌ odwoływanie się do nieistniejącego elementu  

📌 Nieistniejący indeks zwróci undefined.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz tablicę z 3 ulubionymi grami.

Następnie:
✔ wyświetl pierwszy element  
✔ dodaj nową grę za pomocą push()  
✔ wyświetl całą tablicę`,
  },

  {
    type: "quiz",
    question: "Od jakiego indeksu zaczyna się tablica?",
    answers: [
      "1",
      "0",
      "-1",
      "10",
    ],
    correct: 1,
    explanation:
`Tablice w JavaScript zaczynają indeksowanie od 0.`,
  },

  {
    type: "quiz",
    question: "Do czego służy push()?",
    answers: [
      "Usuwa element",
      "Tworzy funkcję",
      "Dodaje element do tablicy",
      "Sprawdza warunek",
    ],
    correct: 2,
    explanation:
`push() dodaje nowy element na koniec tablicy.`,
  },
]

export const lesson8Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Tablice pozwalają przechowywać wiele danych w jednej zmiennej.

Zapamiętaj najważniejsze informacje:

✔ Tablice tworzymy za pomocą []  
✔ Indeksy zaczynają się od 0  
✔ push() dodaje element  
✔ pop() usuwa ostatni element  
✔ Tablice często używane są z pętlami  

Najważniejsze elementy:
🔹 []  
🔹 indeks  
🔹 push()  
🔹 pop()  
🔹 length  

👉 Tablice są podstawą pracy z większą ilością danych.
`,
}