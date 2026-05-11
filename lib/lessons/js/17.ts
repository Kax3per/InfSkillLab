import { Step } from "@/lib/types"

export const lesson17: Step[] = [
  {
    type: "text",
    title: "🏗 Programowanie obiektowe w JavaScript",
    content:
`Programowanie obiektowe (OOP) pozwala tworzyć obiekty i klasy.

Dzięki OOP możemy:
👉 organizować kod  
👉 tworzyć wiele podobnych obiektów  
👉 łatwiej rozwijać aplikacje  

📌 OOP jest bardzo popularne w dużych projektach.`,
  },

  {
    type: "text",
    title: "📦 Co to jest klasa?",
    content:
`Klasa to szablon do tworzenia obiektów.

Na podstawie klasy możemy tworzyć:
👉 użytkowników  
👉 produkty  
👉 samochody  
👉 postacie w grach  

📌 Klasa definiuje właściwości i funkcje obiektu.`,
  },

  {
    type: "code",
    title: "👀 Pierwsza klasa",
    content: `class User {

}

console.log(User)`,
  },

  {
    type: "text",
    title: "🧱 constructor()",
    content:
`constructor() uruchamia się podczas tworzenia obiektu.

Służy do:
👉 ustawiania danych początkowych  

📌 constructor bardzo często przyjmuje parametry.`,
  },

  {
    type: "code",
    title: "🏗 Constructor",
    content: `class User {

  constructor(imie, wiek) {
    this.imie = imie
    this.wiek = wiek
  }

}`,
  },

  {
    type: "text",
    title: "🧍 Tworzenie obiektu",
    content:
`Nowy obiekt tworzymy za pomocą:
👉 new  

📌 Każdy obiekt posiada własne dane.`,
  },

  {
    type: "code",
    title: "🚀 Tworzenie instancji",
    content: `class User {

  constructor(imie, wiek) {
    this.imie = imie
    this.wiek = wiek
  }

}

let user1 = new User("Kacper", 18)

console.log(user1)`,
  },

  {
    type: "text",
    title: "⚙ Metody klasy",
    content:
`Klasy mogą posiadać funkcje.

Takie funkcje nazywamy:
👉 metodami  

📌 Metody opisują zachowanie obiektu.`,
  },

  {
    type: "code",
    title: "🛠 Metoda klasy",
    content: `class User {

  constructor(imie) {
    this.imie = imie
  }

  przywitaj() {
    console.log("Cześć " + this.imie)
  }

}

let user = new User("Kacper")

user.przywitaj()`,
  },

  {
    type: "text",
    title: "🧠 this",
    content:
`this oznacza aktualny obiekt.

Dzięki this możemy odwoływać się do danych obiektu.

Przykład:
👉 this.imie  
👉 this.wiek`,
  },

  {
    type: "code",
    title: "📌 this w praktyce",
    content: `class Car {

  constructor(marka) {
    this.marka = marka
  }

}

let car = new Car("BMW")

console.log(car.marka)`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z klasami uczniowie często popełniają błędy:

❌ brak new przy tworzeniu obiektu  
❌ brak this  
❌ literówki w constructor  
❌ używanie danych bez this  

📌 this odnosi się do aktualnego obiektu.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz klasę:
👉 Product

Dodaj:
✔ constructor z nazwą produktu  
✔ metodę showName()

Następnie:
✔ utwórz obiekt  
✔ wyświetl nazwę produktu`,
  },

  {
    type: "quiz",
    question: "Do czego służy class?",
    answers: [
      "Do tworzenia stylów CSS",
      "Do tworzenia szablonów obiektów",
      "Do pobierania danych z API",
      "Do tworzenia HTML",
    ],
    correct: 1,
    explanation:
`class pozwala tworzyć szablony obiektów w JavaScript.`,
  },

  {
    type: "quiz",
    question: "Do czego służy this?",
    answers: [
      "Do zatrzymywania pętli",
      "Do pobierania HTML",
      "Do odwoływania się do aktualnego obiektu",
      "Do tworzenia tablic",
    ],
    correct: 2,
    explanation:
`this odnosi się do aktualnego obiektu klasy.`,
  },
]

export const lesson17Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Programowanie obiektowe pozwala organizować kod za pomocą klas i obiektów.

Zapamiętaj najważniejsze informacje:

✔ class tworzy szablon obiektu  
✔ constructor ustawia dane początkowe  
✔ new tworzy nowy obiekt  
✔ this odnosi się do aktualnego obiektu  
✔ Metody definiują zachowanie obiektu  

Najważniejsze elementy:
🔹 class  
🔹 constructor  
🔹 new  
🔹 this  
🔹 metody  

👉 OOP jest bardzo ważne w dużych aplikacjach JavaScript.
`,
}