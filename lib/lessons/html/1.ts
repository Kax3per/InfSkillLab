import { Step } from "@/lib/types"

export const lesson1: Step[] = [
  {
    type: "text",
    title: "🌐 Co to jest HTML?",
    content:
`HTML (HyperText Markup Language) to język znaczników używany do tworzenia stron internetowych.

Każda strona WWW składa się z elementów HTML.

HTML odpowiada za:
👉 strukturę strony  
👉 rozmieszczenie treści  
👉 nagłówki, teksty, obrazy, linki i tabele  

Przeglądarka internetowa odczytuje kod HTML i wyświetla stronę użytkownikowi.

📌 Na egzaminie INF.03 bardzo często pojawiają się pytania dotyczące:
✔ podstawowych znaczników HTML  
✔ struktury dokumentu  
✔ poprawnej składni tagów`,
  },

  {
    type: "text",
    title: "🧠 Jak działa HTML?",
    content:
`HTML składa się z tagów (znaczników).

Tagi informują przeglądarkę:
👉 czym jest dany element  
👉 jaką pełni funkcję na stronie  

Przykłady:
🔹 <h1> — nagłówek  
🔹 <p> — akapit  
🔹 <img> — obraz  
🔹 <a> — link  

Większość tagów posiada:
✔ tag otwierający  
✔ zawartość  
✔ tag zamykający`,
  },

  {
    type: "code",
    title: "👀 Przykład prostego kodu HTML",
    content: `<h1>Witaj świecie</h1>
<p>To jest moja pierwsza strona internetowa.</p>`,
  },

  {
    type: "text",
    title: "🔍 Budowa znacznika HTML",
    content:
`Przykład:

<h1>Witaj</h1>

Element składa się z:
👉 <h1> — tag otwierający  
👉 Witaj — zawartość elementu  
👉 </h1> — tag zamykający  

📌 Ważne:
Brak tagu zamykającego to częsty błąd na egzaminie praktycznym.`,
  },

  {
    type: "text",
    title: "📄 Struktura dokumentu HTML",
    content:
`Każda poprawna strona HTML posiada podstawową strukturę:

✔ <!DOCTYPE html> — informuje o wersji HTML  
✔ <html> — główny element dokumentu  
✔ <head> — ustawienia strony  
✔ <body> — widoczna zawartość strony  

📌 Elementy umieszczone w <body> są widoczne dla użytkownika.`,
  },

  {
    type: "code",
    title: "🧱 Podstawowy szablon strony",
    content: `<!DOCTYPE html>
<html>
<head>
  <title>Moja strona</title>
</head>
<body>

  <h1>Witaj świecie</h1>
  <p>Moja pierwsza strona internetowa.</p>

</body>
</html>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas tworzenia stron uczniowie często popełniają błędy:

❌ brak tagu zamykającego  
❌ wpisywanie tagów wielkimi literami  
❌ umieszczanie treści poza <body>  
❌ niepoprawne zagnieżdżanie elementów  

📌 Na egzaminie INF.03 poprawna składnia jest bardzo ważna.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Utwórz prostą stronę HTML.

Dodaj:
👉 nagłówek <h1>  
👉 akapit <p>  

Temat strony:
„Moje zainteresowania”`,
  },

  {
    type: "quiz",
    question: "Za co odpowiada HTML?",
    answers: [
      "Za wygląd strony internetowej",
      "Za strukturę i zawartość strony",
      "Za animacje i efekty",
      "Za działanie serwera",
    ],
    correct: 1,
    explanation:
`HTML odpowiada za strukturę i zawartość strony internetowej.

CSS odpowiada za wygląd, a JavaScript za interakcje.`,
  },

  {
    type: "quiz",
    question: "Który element zawiera widoczną zawartość strony?",
    answers: [
      "<head>",
      "<meta>",
      "<body>",
      "<title>",
    ],
    correct: 2,
    explanation:
`Element <body> zawiera wszystkie treści widoczne dla użytkownika.`,
  },
]

export const lesson1Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
HTML to podstawowy język tworzenia stron internetowych.

Zapamiętaj najważniejsze informacje:

✔ HTML odpowiada za strukturę strony  
✔ Strona składa się z tagów HTML  
✔ Większość elementów posiada tag otwierający i zamykający  
✔ Widoczna zawartość strony znajduje się w <body>  
✔ Poprawna składnia jest bardzo ważna na egzaminie INF.03

Najważniejsze znaczniki:
🔹 <h1> — nagłówek  
🔹 <p> — akapit  
🔹 <title> — tytuł strony  
🔹 <body> — zawartość strony  

👉 To fundament wszystkich kolejnych technologii webowych.
`,
}