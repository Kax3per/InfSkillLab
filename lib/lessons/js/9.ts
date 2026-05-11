import { Step } from "@/lib/types"

export const lesson9: Step[] = [
  {
    type: "text",
    title: "🧱 Obiekty w JavaScript",
    content:
`Obiekty pozwalają przechowywać powiązane dane w jednym miejscu.

Dzięki obiektom możemy opisywać:
👉 użytkowników  
👉 produkty  
👉 samochody  
👉 gry  
👉 konta użytkowników  

📌 Obiekt składa się z:
✔ kluczy  
✔ wartości`,
  },

  {
    type: "text",
    title: "📦 Budowa obiektu",
    content:
`Obiekt tworzymy za pomocą:
👉 {}  

Dane zapisujemy w formie:
👉 klucz: wartość  

Przykład:
🔹 imie: "Kacper"  
🔹 wiek: 18`,
  },

  {
    type: "code",
    title: "👀 Przykład obiektu",
    content: `let user = {
  imie: "Kacper",
  wiek: 18,
  kraj: "Polska"
}

console.log(user)`,
  },

  {
    type: "text",
    title: "🔍 Pobieranie danych z obiektu",
    content:
`Dane z obiektu możemy pobierać za pomocą:
👉 kropki .  
lub  
👉 []  

📌 Najczęściej używana jest notacja z kropką.`,
  },

  {
    type: "code",
    title: "📖 Odczytywanie wartości",
    content: `let user = {
  imie: "Kacper",
  wiek: 18
}

console.log(user.imie)

console.log(user.wiek)`,
  },

  {
    type: "text",
    title: "✏ Zmiana wartości",
    content:
`Wartości w obiekcie można zmieniać.

Wystarczy przypisać nową wartość do klucza.`,
  },

  {
    type: "code",
    title: "🛠 Edytowanie obiektu",
    content: `let user = {
  imie: "Kacper",
  wiek: 18
}

user.wiek = 19

console.log(user)`,
  },

  {
    type: "text",
    title: "➕ Dodawanie nowych właściwości",
    content:
`Do obiektu możemy dodawać nowe dane.

Przykład:
👉 email  
👉 miasto  
👉 numer telefonu`,
  },

  {
    type: "code",
    title: "➕ Dodawanie danych",
    content: `let user = {
  imie: "Kacper"
}

user.miasto = "Warszawa"

console.log(user)`,
  },

  {
    type: "text",
    title: "🧠 Obiekty i tablice",
    content:
`Obiekty bardzo często używane są razem z tablicami.

Przykład:
👉 lista użytkowników  
👉 lista produktów  
👉 komentarze na stronie  

📌 To podstawa nowoczesnych aplikacji webowych.`,
  },

  {
    type: "code",
    title: "📚 Tablica obiektów",
    content: `let users = [
  {
    imie: "Kacper",
    wiek: 18
  },
  {
    imie: "Ania",
    wiek: 20
  }
]

console.log(users[0].imie)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z obiektami uczniowie często popełniają błędy:

❌ używanie [] zamiast {}  
❌ brak przecinków między właściwościami  
❌ literówki w nazwach kluczy  
❌ odwoływanie się do nieistniejącej właściwości  

📌 Nieistniejąca właściwość zwróci undefined.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz obiekt "samochod".

Dodaj:
👉 marka  
👉 model  
👉 rok  

Następnie:
✔ wyświetl markę samochodu  
✔ zmień rok  
✔ wyświetl cały obiekt`,
  },

  {
    type: "quiz",
    question: "Za pomocą czego tworzymy obiekt?",
    answers: [
      "[]",
      "()",
      "{}",
      "<>",
    ],
    correct: 2,
    explanation:
`Obiekty w JavaScript tworzymy za pomocą nawiasów klamrowych {}.`,
  },

  {
    type: "quiz",
    question: "Jak pobrać wartość z obiektu?",
    answers: [
      "user-imie",
      "user:imie",
      "user/imie",
      "user.imie",
    ],
    correct: 3,
    explanation:
`Najczęściej używamy notacji z kropką:
user.imie`,
  },
]

export const lesson9Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Obiekty pozwalają przechowywać powiązane dane w jednym miejscu.

Zapamiętaj najważniejsze informacje:

✔ Obiekty tworzymy za pomocą {}  
✔ Dane zapisujemy jako klucz i wartość  
✔ Wartości pobieramy za pomocą .  
✔ Możemy zmieniać i dodawać właściwości  
✔ Obiekty często używane są z tablicami  

Najważniejsze elementy:
🔹 {}  
🔹 klucz  
🔹 wartość  
🔹 user.imie  
🔹 tablica obiektów  

👉 Obiekty są podstawą nowoczesnych aplikacji JavaScript.
`,
}