import { Step } from "@/lib/types"

export const lesson6: Step[] = [
  {
    type: "text",
    title: "📋 Listy w HTML",
    content:
`Listy pomagają porządkować informacje na stronie internetowej.

Dzięki nim treść jest:
👉 bardziej czytelna  
👉 lepiej zorganizowana  
👉 łatwiejsza do przeglądania  

Listy są używane bardzo często:
✔ w menu  
✔ w instrukcjach  
✔ w sklepach internetowych  
✔ w panelach administracyjnych  
✔ w artykułach i dokumentacji  

HTML posiada kilka rodzajów list.`,
  },

  {
    type: "text",
    title: "🧠 Rodzaje list",
    content:
`W HTML najczęściej używa się:

✔ list nieuporządkowanych
<ul>

✔ list uporządkowanych
<ol>

✔ elementów listy
<li>

Każdy element listy znajduje się wewnątrz:
<li>`,
  },

  {
    type: "text",
    title: "🔹 Lista nieuporządkowana",
    content:
`Lista nieuporządkowana:
<ul>

tworzy listę punktowaną.

Przeglądarka domyślnie wyświetla:
👉 kropki  
👉 znaczniki punktów  

Tego typu lista jest używana gdy:
✔ kolejność elementów nie ma znaczenia`,
  },

  {
    type: "code",
    title: "👀 Przykład listy punktowanej",
    content: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`,
  },

  {
    type: "text",
    title: "🔢 Lista uporządkowana",
    content:
`Lista uporządkowana:
<ol>

tworzy listę numerowaną.

Przeglądarka automatycznie dodaje:
1.
2.
3.

Używa się jej gdy:
✔ kolejność elementów jest ważna  
✔ opisujemy kroki lub instrukcje`,
  },

  {
    type: "code",
    title: "📌 Przykład listy numerowanej",
    content: `<ol>
  <li>Włącz komputer</li>
  <li>Otwórz przeglądarkę</li>
  <li>Wejdź na stronę</li>
</ol>`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <li>",
    content:
`<li> oznacza:
list item

Każdy element listy musi znajdować się wewnątrz:
<ul>
lub
<ol>

📌 Bez <li> lista nie będzie poprawna.`,
  },

  {
    type: "code",
    title: "🧩 Struktura listy",
    content: `<ul>
  <li>Pierwszy element</li>
  <li>Drugi element</li>
  <li>Trzeci element</li>
</ul>`,
  },

  {
    type: "text",
    title: "📚 Listy zagnieżdżone",
    content:
`HTML pozwala tworzyć listy wewnątrz innych list.

To nazywa się:
zagnieżdżanie

Dzięki temu można budować:
✔ rozbudowane menu  
✔ kategorie  
✔ wielopoziomowe struktury danych`,
  },

  {
    type: "code",
    title: "🪜 Lista zagnieżdżona",
    content: `<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>

  <li>Backend</li>
</ul>`,
  },

  {
    type: "text",
    title: "🎯 Kiedy używać list?",
    content:
`Listy świetnie sprawdzają się do prezentowania:
✔ funkcji produktu  
✔ kroków instrukcji  
✔ menu strony  
✔ kategorii  
✔ danych kontaktowych  
✔ planów działania  

Dobrze użyte listy:
✅ poprawiają czytelność  
✅ organizują informacje  
✅ pomagają użytkownikowi szybciej znaleźć treść`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący często:
❌ zapominają o <li>  
❌ umieszczają tekst bezpośrednio w <ul>  
❌ mieszają <ul> i <ol> chaotycznie  
❌ nie zamykają elementów listy  

Każda lista powinna mieć:
✔ poprawną strukturę  
✔ logiczny układ  
✔ czytelne elementy`,
  },

  {
    type: "code",
    title: "🧱 Kompletny przykład",
    content: `<h1>Plan nauki</h1>

<h2>Technologie frontendowe</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h2>Kroki nauki</h2>

<ol>
  <li>Poznaj podstawy HTML</li>
  <li>Naucz się CSS</li>
  <li>Ćwicz projekty</li>
</ol>`,
  },

  {
    type: "text",
    title: "🖥 Listy w prawdziwych stronach",
    content:
`Listy są obecne niemal wszędzie w internecie.

Przykłady:
✔ menu nawigacyjne  
✔ lista produktów  
✔ komentarze  
✔ sekcje FAQ  
✔ funkcje aplikacji  
✔ ranking użytkowników  

Nawet wiele nowoczesnych menu stron internetowych opiera się właśnie na listach HTML.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz stronę zawierającą:

👉 nagłówek <h1>  
👉 listę punktowaną <ul>  
👉 minimum 3 elementy <li>  
👉 listę numerowaną <ol>  
👉 minimum 3 kroki  

Temat:
„Moja nauka programowania”`,
  },

  {
    type: "quiz",
    question: "Który znacznik tworzy listę punktowaną?",
    answers: [
      "<ol>",
      "<li>",
      "<ul>",
      "<list>",
    ],
    correct: 2,
    explanation:
`<ul> tworzy listę nieuporządkowaną (punktowaną).`,
  },

  {
    type: "quiz",
    question: "Który znacznik tworzy listę numerowaną?",
    answers: [
      "<ol>",
      "<ul>",
      "<li>",
      "<dl>",
    ],
    correct: 0,
    explanation:
`<ol> tworzy listę uporządkowaną (numerowaną).`,
  },

  {
    type: "quiz",
    question: "Do czego służy <li>?",
    answers: [
      "Do tworzenia linków",
      "Do tworzenia obrazów",
      "Do tworzenia elementów listy",
      "Do tworzenia tabel",
    ],
    correct: 2,
    explanation:
`<li> oznacza pojedynczy element listy.`,
  },

  {
    type: "quiz",
    question: "Która lista najlepiej nadaje się do instrukcji krok po kroku?",
    answers: [
      "<ul>",
      "<ol>",
      "<table>",
      "<div>",
    ],
    correct: 1,
    explanation:
`<ol> jest używane gdy kolejność kroków ma znaczenie.`,
  },

  {
    type: "quiz",
    question: "Który zapis jest poprawny?",
    answers: [
      "<ul>HTML</ul>",
      "<ol><li>HTML</li></ol>",
      "<li>HTML</li>",
      "<list><li>HTML</li></list>",
    ],
    correct: 1,
    explanation:
`Elementy listy powinny znajdować się wewnątrz <ul> lub <ol>.`,
  },
]

export const lesson6Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
HTML umożliwia tworzenie uporządkowanych list informacji.

Najważniejsze znaczniki:
✔ <ul> → lista punktowana  
✔ <ol> → lista numerowana  
✔ <li> → element listy  

Zapamiętaj:
👉 <ul> używa się gdy kolejność nie ma znaczenia  
👉 <ol> używa się dla kroków i instrukcji  
👉 każdy element listy musi być w <li>  

Listy pomagają:
✔ organizować treść  
✔ poprawiać czytelność  
✔ budować menu i sekcje strony  

Są jednym z najczęściej używanych elementów HTML.
`,
}