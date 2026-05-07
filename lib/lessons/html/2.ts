import { Step } from "@/lib/types"

export const lesson2: Step[] = [
  {
    type: "text",
    title: "🌐 Dlaczego strony mają strukturę?",
    content:
`Każda strona internetowa musi posiadać uporządkowaną strukturę.

Przeglądarka internetowa nie „rozumie” strony tak jak człowiek. Ona analizuje kod linia po linii i na tej podstawie buduje widok strony.

Jeżeli dokument HTML jest źle zbudowany:
❌ elementy mogą wyświetlać się niepoprawnie  
❌ style CSS mogą działać błędnie  
❌ część strony może w ogóle nie działać  

Dlatego każda strona posiada określony szkielet.

📌 Na egzaminie INF.03 bardzo często pojawiają się zadania wymagające stworzenia kompletnej struktury dokumentu HTML.`,
  },

  {
    type: "text",
    title: "🧠 Jak przeglądarka widzi stronę?",
    content:
`Przeglądarka analizuje kod HTML od góry do dołu.

Każdy element ma określoną rolę:
👉 informuje co znajduje się na stronie  
👉 określa gdzie element powinien się znajdować  
👉 pomaga poprawnie wyświetlić zawartość  

Dokument HTML można porównać do książki:

📖 okładka → informacje o stronie  
📖 spis treści → organizacja  
📖 treść → zawartość dla użytkownika  

W HTML rolę „treści książki” pełni element <body>.`,
  },

  {
    type: "code",
    title: "📄 Kompletny szablon HTML",
    content: `<!DOCTYPE html>
<html>
<head>
  <title>Moja pierwsza strona</title>
</head>

<body>
  <h1>Witaj świecie</h1>
  <p>To jest moja strona internetowa.</p>
</body>
</html>`,
  },

  {
    type: "text",
    title: "🏷 Element <!DOCTYPE html>",
    content:
`Deklaracja <!DOCTYPE html> znajduje się ZAWSZE na początku dokumentu.

Jej zadaniem jest poinformowanie przeglądarki:
👉 że dokument korzysta z HTML5  

Brak tej deklaracji może powodować:
❌ błędne wyświetlanie strony  
❌ problemy ze stylami CSS  
❌ niezgodność między przeglądarkami  

📌 Na egzaminie praktycznym bardzo często sprawdzane jest czy dokument posiada poprawny DOCTYPE.`,
  },

  {
    type: "text",
    title: "📦 Element <html>",
    content:
`<html> jest głównym kontenerem całego dokumentu.

Wszystkie elementy strony muszą znajdować się wewnątrz tego znacznika.

Przykład:
<html>
  ...
</html>

📌 Jeżeli element znajduje się poza <html>, dokument jest niepoprawny.`,
  },

  {
    type: "code",
    title: "👀 Przykład użycia <html>",
    content: `<!DOCTYPE html>
<html>

<head>
  <title>Przykład</title>
</head>

<body>
  <h1>Nagłówek</h1>
</body>

</html>`,
  },

  {
    type: "text",
    title: "⚙️ Sekcja <head>",
    content:
`<head> zawiera informacje konfiguracyjne strony.

Elementy znajdujące się w <head> nie są widoczne bezpośrednio na stronie.

Najczęściej znajdują się tam:
✔ tytuł strony  
✔ meta dane  
✔ połączenia z CSS  
✔ skrypty JavaScript  

📌 Bardzo ważnym elementem jest <title>.`,
  },

  {
    type: "code",
    title: "📌 Przykład sekcji <head>",
    content: `<head>
  <title>Kurs HTML</title>
</head>`,
  },

  {
    type: "text",
    title: "🖥 Element <body>",
    content:
`<body> zawiera CAŁĄ widoczną zawartość strony.

To właśnie tutaj umieszczamy:
✔ nagłówki  
✔ tekst  
✔ obrazy  
✔ listy  
✔ linki  
✔ tabele  

📌 Jeżeli element nie znajduje się w <body>, użytkownik zazwyczaj go nie zobaczy.`,
  },

  {
    type: "code",
    title: "💡 Przykład zawartości body",
    content: `<body>
  <h1>Moja strona</h1>

  <p>Witam na mojej stronie internetowej.</p>
</body>`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy na egzaminie",
    content:
`Podczas egzaminu INF.03 uczniowie bardzo często tracą punkty przez podstawowe błędy.

Najczęstsze problemy:
❌ brak <!DOCTYPE html>  
❌ brak zamknięcia tagów  
❌ elementy poza <body>  
❌ brak <title>  
❌ niepoprawna kolejność elementów  

📌 Egzaminator zwraca uwagę nie tylko na wygląd strony, ale również na poprawność kodu.`,
  },

  {
    type: "text",
    title: "🧩 Kolejność elementów",
    content:
`Prawidłowa kolejność elementów w dokumencie HTML:

1️⃣ <!DOCTYPE html>  
2️⃣ <html>  
3️⃣ <head>  
4️⃣ <body>  

📌 Niepoprawna kolejność może powodować błędy w interpretacji strony przez przeglądarkę.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Napisz podstawową strukturę strony HTML.

Dodaj:
👉 <!DOCTYPE html>  
👉 <html>  
👉 <head>  
👉 <title>  
👉 <body>  
👉 nagłówek <h1>  
👉 paragraf <p>  

Temat strony:
„Moja pierwsza witryna internetowa”`,
  },

  {
    type: "quiz",
    question: "Który element zawiera widoczną zawartość strony?",
    answers: [
      "<head>",
      "<body>",
      "<title>",
      "<meta>",
    ],
    correct: 1,
    explanation:
`Element <body> zawiera wszystkie elementy widoczne dla użytkownika.`,
  },

  {
    type: "quiz",
    question: "Gdzie powinien znajdować się znacznik <title>?",
    answers: [
      "W <body>",
      "Poza dokumentem HTML",
      "W <head>",
      "W <footer>",
    ],
    correct: 2,
    explanation:
`Znacznik <title> zawsze znajduje się wewnątrz sekcji <head>.`,
  },

  {
    type: "quiz",
    question: "Jaką funkcję pełni <!DOCTYPE html>?",
    answers: [
      "Dodaje nagłówek",
      "Informuje o użyciu HTML5",
      "Tworzy sekcję body",
      "Łączy CSS",
    ],
    correct: 1,
    explanation:
`<!DOCTYPE html> informuje przeglądarkę, że dokument korzysta z HTML5.`,
  },

  {
    type: "quiz",
    question: "Który zapis przedstawia poprawną strukturę HTML?",
    answers: [
      "<body><head></head></body>",
      "<html><body></body></html>",
      "<head><body></body></head>",
      "<title><html></html></title>",
    ],
    correct: 1,
    explanation:
`Element <body> powinien znajdować się wewnątrz <html>.`,
  },
]

export const lesson2Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Każda strona internetowa posiada określoną strukturę HTML.

Najważniejsze elementy dokumentu:
✔ <!DOCTYPE html> — informuje o HTML5  
✔ <html> — główny kontener dokumentu  
✔ <head> — ustawienia strony  
✔ <body> — widoczna zawartość strony  

Zapamiętaj:
👉 wszystko co widzi użytkownik znajduje się w <body>  
👉 poprawna struktura jest bardzo ważna na egzaminie INF.03  
👉 brak zamknięcia tagów to częsty błąd uczniów  

📌 Poprawna struktura HTML to fundament każdej strony internetowej.
`,
}