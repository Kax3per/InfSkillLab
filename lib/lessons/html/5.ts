import { Step } from "@/lib/types"

export const lesson5: Step[] = [
  {
    type: "text",
    title: "🖼 Obrazy w HTML",
    content:
`Obrazy są bardzo ważnym elementem nowoczesnych stron internetowych.

Dzięki nim strony:
👉 wyglądają atrakcyjniej  
👉 są bardziej czytelne  
👉 szybciej przekazują informacje  
👉 przyciągają uwagę użytkownika  

Na stronach internetowych obrazy są używane m.in. jako:
✔ zdjęcia  
✔ logo  
✔ banery  
✔ ikony  
✔ grafiki produktów  

HTML pozwala łatwo dodawać obrazy do strony za pomocą specjalnego znacznika.`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <img>",
    content:
`Do wyświetlania obrazów używa się znacznika:
<img>

Znacznik ten różni się od większości elementów HTML:
❌ nie posiada tagu zamykającego  

Obraz wyświetla się dzięki atrybutowi:
src

To właśnie src wskazuje lokalizację pliku graficznego.`,
  },

  {
    type: "code",
    title: "👀 Pierwszy obraz",
    content: `<img src="kot.jpg">`,
  },

  {
    type: "text",
    title: "📂 Atrybut src",
    content:
`src oznacza:
source

Atrybut określa:
👉 gdzie znajduje się obraz  

Można podać:
✔ nazwę pliku  
✔ ścieżkę do folderu  
✔ pełny adres URL  

Przeglądarka pobiera obraz z podanej lokalizacji i wyświetla go na stronie.`,
  },

  {
    type: "code",
    title: "🌍 Obraz z internetu",
    content: `<img src="https://example.com/logo.png">`,
  },

  {
    type: "text",
    title: "📁 Obrazy lokalne",
    content:
`Najczęściej obrazy znajdują się w folderze projektu.

Przykład struktury:
projekt/
 ├── index.html
 └── images/
      └── logo.png

Aby wyświetlić obraz:
👉 należy podać poprawną ścieżkę do pliku.`,
  },

  {
    type: "code",
    title: "📌 Przykład ścieżki do obrazu",
    content: `<img src="images/logo.png">`,
  },

  {
    type: "text",
    title: "♿ Atrybut alt",
    content:
`alt to bardzo ważny atrybut.

Opisuje obraz tekstowo.

Jest używany gdy:
❌ obraz się nie załaduje  
❌ użytkownik korzysta z czytnika ekranu  

Dzięki alt strona jest:
✔ bardziej dostępna  
✔ bardziej profesjonalna  
✔ lepsza dla SEO  

📌 Każdy obraz powinien posiadać alt.`,
  },

  {
    type: "code",
    title: "💡 Obraz z alt",
    content: `<img src="pies.jpg" alt="Czarny pies na trawie">`,
  },

  {
    type: "text",
    title: "📏 Rozmiar obrazów",
    content:
`HTML pozwala ustawić szerokość i wysokość obrazu.

Służą do tego:
✔ width  
✔ height  

Rozmiary można podawać w:
👉 pikselach  
👉 procentach`,
  },

  {
    type: "code",
    title: "📐 Zmiana rozmiaru obrazu",
    content: `<img 
  src="krajobraz.jpg"
  width="300"
  height="200"
  alt="Krajobraz"
>`,
  },

  {
    type: "text",
    title: "⚠️ Zachowanie proporcji",
    content:
`Niepoprawne ustawianie width i height może deformować obraz.

❌ obraz może być rozciągnięty  
❌ obraz może wyglądać nienaturalnie  

Najczęściej wystarczy ustawić:
✔ tylko width  
lub
✔ tylko height  

Przeglądarka sama zachowa proporcje.`,
  },

  {
    type: "text",
    title: "🖱 Obraz jako link",
    content:
`Obraz może również pełnić rolę linku.

Wystarczy umieścić znacznik <img> wewnątrz <a>.`,
  },

  {
    type: "code",
    title: "🔗 Klikalny obraz",
    content: `<a href="https://example.com">
  <img 
    src="logo.png"
    alt="Logo strony"
    width="200"
  >
</a>`,
  },

  {
    type: "text",
    title: "🗂 Popularne formaty obrazów",
    content:
`Najpopularniejsze formaty plików:

✔ JPG / JPEG
- zdjęcia
- mały rozmiar

✔ PNG
- przezroczystość
- dobra jakość

✔ SVG
- grafika wektorowa
- idealna dla ikon i logo

✔ WEBP
- nowoczesny format
- bardzo dobra kompresja`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący często:
❌ zapominają o alt  
❌ podają złą ścieżkę pliku  
❌ używają zbyt dużych obrazów  
❌ deformują grafikę width i height  
❌ zapisują błędną nazwę pliku  

Pamiętaj:
✔ nazwy plików mają znaczenie  
✔ wielkość liter również ma znaczenie`,
  },

  {
    type: "code",
    title: "🧱 Kompletny przykład strony z obrazem",
    content: `<h1>Moje hobby</h1>

<p>Lubię fotografię krajobrazową.</p>

<img
  src="gory.jpg"
  alt="Zdjęcie gór"
  width="400"
>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz stronę zawierającą:

👉 nagłówek <h1>  
👉 akapit <p>  
👉 obraz <img>  
👉 atrybut alt  
👉 ustawioną szerokość obrazu  

Temat strony:
„Moje ulubione zwierzę”`,
  },

  {
    type: "quiz",
    question: "Który znacznik służy do dodawania obrazów?",
    answers: [
      "<image>",
      "<img>",
      "<picture>",
      "<photo>",
    ],
    correct: 1,
    explanation:
`Znacznik <img> służy do wyświetlania obrazów w HTML.`,
  },

  {
    type: "quiz",
    question: "Za co odpowiada atrybut src?",
    answers: [
      "Opis obrazu",
      "Rozmiar obrazu",
      "Lokalizacja pliku graficznego",
      "Kolor obrazu",
    ],
    correct: 2,
    explanation:
`src określa lokalizację pliku obrazu.`,
  },

  {
    type: "quiz",
    question: "Do czego służy alt?",
    answers: [
      "Zmienia kolor obrazu",
      "Opisuje obraz tekstowo",
      "Tworzy link",
      "Zmienia format pliku",
    ],
    correct: 1,
    explanation:
`alt dostarcza tekstowy opis obrazu.`,
  },

  {
    type: "quiz",
    question: "Który format najlepiej nadaje się do logo i ikon?",
    answers: [
      "TXT",
      "MP4",
      "SVG",
      "DOCX",
    ],
    correct: 2,
    explanation:
`SVG jest idealny dla ikon i logo dzięki grafice wektorowej.`,
  },

  {
    type: "quiz",
    question: "Który zapis jest poprawny?",
    answers: [
      '<img alt="Kot">',
      '<img src="kot.jpg" alt="Kot">',
      '<image src="kot.jpg">',
      '<photo src="kot.jpg">',
    ],
    correct: 1,
    explanation:
`Poprawny obraz powinien zawierać przynajmniej src oraz alt.`,
  },
]

export const lesson5Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
HTML umożliwia dodawanie obrazów za pomocą znacznika <img>.

Najważniejsze atrybuty:
✔ src → lokalizacja obrazu  
✔ alt → opis obrazu  
✔ width → szerokość  
✔ height → wysokość  

Zapamiętaj:
👉 każdy obraz powinien mieć alt  
👉 poprawna ścieżka pliku jest bardzo ważna  
👉 obrazy poprawiają wygląd strony  

Poznane elementy:
🔹 <img>  
🔹 src  
🔹 alt  
🔹 width  
🔹 height  

Obrazy są podstawą nowoczesnych stron internetowych i interfejsów użytkownika.
`,
}