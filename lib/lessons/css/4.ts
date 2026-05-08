import { Step } from "@/lib/types"

export const lesson4: Step[] = [

  {
    type: "text",
    title: "🔠 Rozmiar tekstu w CSS",
    content:
`CSS pozwala zmieniać rozmiar tekstu na stronie internetowej.

Najważniejsza właściwość:
👉 font-size

📌 Dzięki niej możesz tworzyć:
✔ duże nagłówki  
✔ małe opisy  
✔ responsywny tekst`,
  },

  {
    type: "text",
    title: "📏 Właściwość font-size",
    content:
`font-size określa wielkość tekstu.

Przykład:
h1 {
  font-size: 48px;
}

📌 Najczęściej używaną jednostką są piksele (px).`,
  },

  {
    type: "code",
    title: "👀 Zmiana rozmiaru tekstu",
    content:
`h1 {
  font-size: 48px;
}

p {
  font-size: 18px;
}`,
  },

  {
    type: "text",
    title: "🧠 Font weight",
    content:
`Właściwość font-weight odpowiada za grubość tekstu.

Przykłady:
👉 normal  
👉 bold  
👉 400  
👉 700  

📌 Im większa wartość, tym grubszy tekst.`,
  },

  {
    type: "code",
    title: "✍ Pogrubienie tekstu",
    content:
`h1 {
  font-size: 48px;
  font-weight: bold;
}

p {
  font-weight: 300;
}`,
  },

  {
    type: "text",
    title: "🔤 Font family",
    content:
`font-family zmienia czcionkę tekstu.

Przykład:
body {
  font-family: Arial;
}

📌 W nowoczesnych projektach często używa się:
✔ Poppins  
✔ Inter  
✔ Roboto`,
  },

  {
    type: "code",
    title: "🖋 Zmiana czcionki",
    content:
`body {
  font-family: Poppins;
}

h1 {
  font-size: 42px;
}`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy podczas stylowania tekstu:

❌ brak jednostki px  
❌ wpisywanie złej nazwy właściwości  
❌ zbyt mały tekst  
❌ używanie wielu różnych fontów  

📌 Dobry typography design poprawia czytelność strony.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Ostyluj tekst na stronie.

Dodaj:
👉 h1 o rozmiarze 48px  
👉 pogrubiony tekst nagłówka  
👉 paragraf o rozmiarze 18px  
👉 font-family Poppins dla body`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość zmienia rozmiar tekstu?",
    answers: [
      "font-weight",
      "font-size",
      "text-color",
      "font-style",
    ],
    correct: 1,
    explanation:
`font-size odpowiada za rozmiar tekstu.`,
  },

  {
    type: "quiz",
    question:
      "Która właściwość zmienia czcionkę?",
    answers: [
      "font-family",
      "font-size",
      "font-color",
      "font-spacing",
    ],
    correct: 0,
    explanation:
`font-family zmienia rodzaj czcionki.`,
  },

]

export const lesson4Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`Poznałeś podstawy stylowania tekstu w CSS.

Zapamiętaj:

✔ font-size zmienia rozmiar tekstu  
✔ font-weight odpowiada za grubość  
✔ font-family zmienia czcionkę  
✔ odpowiednia typografia poprawia wygląd strony  

Najważniejsze właściwości:
🔹 font-size  
🔹 font-weight  
🔹 font-family  

👉 Dobrze zaprojektowany tekst jest bardzo ważny w nowoczesnym UI.`,
}