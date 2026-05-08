import { Step } from "@/lib/types"

export const lesson3: Step[] = [

  {
    type: "text",
    title: "🔤 Kolory tekstu i tła",
    content:
`CSS pozwala zmieniać wygląd tekstu oraz tła strony internetowej.

Najczęściej używane właściwości:
👉 color — kolor tekstu  
👉 background — kolor tła  

📌 Dzięki kolorom strona wygląda nowocześnie i czytelnie.`,
  },

  {
    type: "text",
    title: "🎨 Właściwość color",
    content:
`Właściwość color odpowiada za kolor tekstu.

Przykład:
h1 {
  color: blue;
}

📌 Możesz używać:
✔ nazw kolorów  
✔ HEX  
✔ RGB  
✔ HSL`,
  },

  {
    type: "code",
    title: "👀 Zmiana koloru tekstu",
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
    title: "🖤 Kolor tła",
    content:
`Właściwość background zmienia kolor tła elementu.

Przykład:
body {
  background: black;
}

📌 Bardzo często używa się jej do tworzenia dark mode.`,
  },

  {
    type: "code",
    title: "🌑 Dark mode",
    content:
`body {
  background: black;
}

h1 {
  color: white;
}

p {
  color: lightgray;
}`,
  },

  {
    type: "text",
    title: "🌈 HEX i RGB",
    content:
`Kolory można zapisywać na kilka sposobów.

HEX:
#2563eb

RGB:
rgb(37, 99, 235)

📌 HEX jest bardzo popularny w nowoczesnym frontendzie.`,
  },

  {
    type: "code",
    title: "🔵 Przykład HEX",
    content:
`h1 {
  color: #2563eb;
}

button {
  background: #111827;
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy podczas pracy z kolorami:

❌ brak # przy HEX  
❌ literówki w nazwach kolorów  
❌ wpisywanie background-color zamiast color  
❌ zły kontrast tekstu i tła  

📌 Słaby kontrast utrudnia czytanie strony.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj stronę.

Dodaj:
👉 czarne tło body  
👉 biały kolor dla h1  
👉 szary kolor dla paragrafu p  
👉 niebieski kolor przycisku button przy pomocy HEX`,
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
`Właściwość color odpowiada za kolor tekstu.`,
  },

  {
    type: "quiz",
    question:
      "Jak zapisujemy kolor HEX?",
    answers: [
      "blue()",
      "@2563eb",
      "#2563eb",
      "hex(blue)",
    ],
    correct: 2,
    explanation:
`Kolory HEX rozpoczynają się znakiem #.`,
  },

]

export const lesson3Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`Poznałeś podstawy kolorów w CSS.

Zapamiętaj:

✔ color zmienia kolor tekstu  
✔ background zmienia kolor tła  
✔ kolory można zapisywać jako HEX lub RGB  
✔ odpowiedni kontrast poprawia czytelność strony  

Najważniejsze właściwości:
🔹 color  
🔹 background  
🔹 background-color  

👉 Kolory są podstawą nowoczesnego UI i designu.`,
}