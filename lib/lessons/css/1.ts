import { Step } from "@/lib/types"

export const lesson1: Step[] = [

  {
    type: "text",
    title: "🎨 Co to jest CSS?",
    content:
`CSS (Cascading Style Sheets) to język stylów używany do projektowania wyglądu stron internetowych.

HTML odpowiada za strukturę strony, natomiast CSS odpowiada za jej wygląd.

Dzięki CSS możesz:
👉 zmieniać kolory  
👉 ustawiać rozmiary tekstu  
👉 dodawać odstępy  
👉 tworzyć animacje  
👉 budować nowoczesny layout  

📌 CSS jest jedną z najważniejszych technologii frontendowych i bardzo często pojawia się na egzaminie INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Jak działa CSS?",
    content:
`CSS działa poprzez przypisywanie stylów do elementów HTML.

Przeglądarka odczytuje kod CSS i zmienia wygląd strony.

Przykład:
👉 nagłówek może mieć kolor niebieski  
👉 tło strony może być czarne  
👉 przyciski mogą mieć zaokrąglone rogi  

📌 CSS zapisujemy przy pomocy selektorów i właściwości.`,
  },

  {
    type: "code",
    title: "👀 Pierwszy kod CSS",
    content:
`h1 {
  color: blue;
}

p {
  color: gray;
}`,
  },

  {
    type: "text",
    title: "🔍 Budowa stylu CSS",
    content:
`Przykład:

h1 {
  color: blue;
}

Kod składa się z:
👉 h1 — selektor  
👉 color — właściwość  
👉 blue — wartość  

📌 Styl CSS zapisujemy wewnątrz nawiasów klamrowych { }.`,
  },

  {
    type: "text",
    title: "📄 Najpopularniejsze właściwości CSS",
    content:
`Najczęściej używane właściwości CSS:

✔ color — kolor tekstu  
✔ background — kolor tła  
✔ font-size — rozmiar tekstu  
✔ margin — odstęp zewnętrzny  
✔ padding — odstęp wewnętrzny  
✔ border-radius — zaokrąglenie rogów  

📌 W kolejnych lekcjach poznasz je dokładniej.`,
  },

  {
    type: "code",
    title: "🧱 Stylowanie strony",
    content:
`body {
  background: black;
}

h1 {
  color: white;
}

button {
  border-radius: 20px;
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pisania CSS uczniowie często popełniają błędy:

❌ brak średnika ;  
❌ brak nawiasów klamrowych { }  
❌ literówki w nazwach właściwości  
❌ wpisywanie niepoprawnych wartości  

📌 Nawet mały błąd może sprawić, że styl nie będzie działał.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz pierwszy styl CSS.

Dodaj:
👉 kolor blue dla h1  
👉 kolor gray dla p  
👉 czarne tło body  

Przykładowe elementy HTML:

<h1>Hello CSS</h1>
<p>To jest paragraf.</p>`,
  },

  {
    type: "quiz",
    question:
      "Za co odpowiada CSS?",
    answers: [
      "Za bazę danych",
      "Za wygląd strony internetowej",
      "Za działanie serwera",
      "Za backend",
    ],
    correct: 1,
    explanation:
`CSS odpowiada za wygląd strony internetowej.

HTML odpowiada za strukturę, a JavaScript za interakcje.`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość zmienia kolor tekstu?",
    answers: [
      "background",
      "font-size",
      "color",
      "padding",
    ],
    correct: 2,
    explanation:
`Właściwość color odpowiada za zmianę koloru tekstu.`,
  },

]

export const lesson1Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`CSS odpowiada za wygląd strony internetowej.

Zapamiętaj najważniejsze informacje:

✔ CSS styluje elementy HTML  
✔ Style zapisujemy przy pomocy selektorów  
✔ Właściwości CSS posiadają wartości  
✔ Kod CSS zapisujemy w nawiasach klamrowych  
✔ Każda właściwość kończy się średnikiem ;  

Najważniejsze właściwości:
🔹 color — kolor tekstu  
🔹 background — kolor tła  
🔹 font-size — rozmiar tekstu  
🔹 margin — odstęp  
🔹 padding — odstęp wewnętrzny  

👉 CSS jest podstawą nowoczesnego frontend developmentu.`,
}