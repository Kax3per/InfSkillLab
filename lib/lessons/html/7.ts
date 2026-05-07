import { Step } from "@/lib/types"

export const lesson7: Step[] = [
  {
    type: "text",
    title: "🧱 Kontenery i organizacja strony",
    content:
`Nowoczesne strony internetowe składają się z wielu sekcji.

Przykładowa strona może posiadać:
✔ menu nawigacyjne  
✔ nagłówek  
✔ główną treść  
✔ panel boczny  
✔ stopkę  
✔ sekcję kontaktową  

Aby uporządkować te elementy, HTML wykorzystuje:
👉 kontenery  
👉 sekcje strukturalne  

Dzięki nim kod:
✅ jest czytelniejszy  
✅ łatwiejszy do rozwijania  
✅ bardziej uporządkowany`,
  },

  {
    type: "text",
    title: "📦 Czym jest kontener?",
    content:
`Kontener to element przechowujący inne elementy HTML.

Może zawierać:
✔ tekst  
✔ obrazy  
✔ linki  
✔ listy  
✔ inne kontenery  

Kontenery pomagają:
👉 grupować elementy  
👉 organizować układ strony  
👉 tworzyć sekcje`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <div>",
    content:
`Najpopularniejszym kontenerem w HTML jest:
<div>

Nazwa pochodzi od:
division

<div> sam w sobie:
❌ nie dodaje wyglądu  
❌ nie tworzy stylów  

Jego zadaniem jest:
✔ organizowanie kodu  
✔ grupowanie elementów`,
  },

  {
    type: "code",
    title: "👀 Pierwszy kontener",
    content: `<div>
  <h1>Moja strona</h1>
  <p>To jest przykładowa sekcja.</p>
</div>`,
  },

  {
    type: "text",
    title: "🧠 Dlaczego używa się <div>?",
    content:
`<div> jest podstawą budowania układu strony.

Programiści używają go do:
✔ sekcji strony  
✔ kart produktów  
✔ paneli  
✔ menu  
✔ formularzy  
✔ galerii  

Bez kontenerów większe strony byłyby bardzo trudne do uporządkowania.`,
  },

  {
    type: "text",
    title: "🖥 Struktura nowoczesnej strony",
    content:
`Większość stron internetowych posiada podobny układ:

✔ header → górna część strony  
✔ nav → menu  
✔ main → główna zawartość  
✔ section → sekcja strony  
✔ footer → stopka  

HTML posiada specjalne znaczniki semantyczne do budowania takich sekcji.`,
  },

  {
    type: "code",
    title: "📄 Przykład struktury strony",
    content: `<header>
  <h1>Moja witryna</h1>
</header>

<nav>
  <a href="#">Start</a>
</nav>

<main>
  <section>
    <h2>Aktualności</h2>
    <p>Treść strony</p>
  </section>
</main>

<footer>
  <p>2026</p>
</footer>`,
  },

  {
    type: "text",
    title: "🏠 Znacznik <header>",
    content:
`<header> reprezentuje górną część strony lub sekcji.

Najczęściej zawiera:
✔ logo  
✔ tytuł strony  
✔ menu  
✔ wyszukiwarkę  

Header pomaga użytkownikowi szybko rozpoznać witrynę.`,
  },

  {
    type: "code",
    title: "📌 Przykład header",
    content: `<header>
  <h1>Kurs Programowania</h1>
</header>`,
  },

  {
    type: "text",
    title: "🧭 Znacznik <nav>",
    content:
`<nav> służy do tworzenia nawigacji strony.

Najczęściej zawiera:
✔ linki menu  
✔ odnośniki do podstron  
✔ przyciski nawigacyjne  

Dzięki <nav> użytkownik może poruszać się po stronie.`,
  },

  {
    type: "code",
    title: "🔗 Przykład menu",
    content: `<nav>
  <a href="#">Start</a>
  <a href="#">Kontakt</a>
  <a href="#">Blog</a>
</nav>`,
  },

  {
    type: "text",
    title: "📄 Znacznik <main>",
    content:
`<main> zawiera główną treść strony.

Powinien znajdować się tam:
✔ najważniejszy content  
✔ artykuły  
✔ sekcje strony  
✔ informacje dla użytkownika  

Na stronie zazwyczaj występuje tylko jeden <main>.`,
  },

  {
    type: "code",
    title: "🧩 Przykład main",
    content: `<main>
  <h2>Witaj!</h2>

  <p>To jest główna zawartość strony.</p>
</main>`,
  },

  {
    type: "text",
    title: "📚 Znacznik <section>",
    content:
`<section> reprezentuje oddzielną sekcję strony.

Przykłady:
✔ aktualności  
✔ oferta  
✔ kontakt  
✔ opinie klientów  

Każda sekcja powinna mieć własny temat lub cel.`,
  },

  {
    type: "code",
    title: "📂 Przykład section",
    content: `<section>
  <h2>O mnie</h2>

  <p>Jestem początkującym programistą.</p>
</section>`,
  },

  {
    type: "text",
    title: "🦶 Znacznik <footer>",
    content:
`<footer> tworzy stopkę strony.

Najczęściej umieszcza się tam:
✔ prawa autorskie  
✔ dane kontaktowe  
✔ linki  
✔ informacje o stronie  

Footer znajduje się zwykle na dole strony.`,
  },

  {
    type: "code",
    title: "📍 Przykład footer",
    content: `<footer>
  <p>© 2026 Moja Strona</p>
</footer>`,
  },

  {
    type: "text",
    title: "⚠️ Semantyka HTML",
    content:
`Nowoczesny HTML powinien być:
✔ logiczny  
✔ czytelny  
✔ semantyczny  

Semantyczne znaczniki:
👉 opisują rolę elementu  
👉 poprawiają organizację kodu  
👉 pomagają wyszukiwarkom i technologiom dostępności  

Dlatego zamiast wielu <div> często lepiej używać:
✔ <header>  
✔ <nav>  
✔ <main>  
✔ <section>  
✔ <footer>`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący często:
❌ używają wyłącznie <div>  
❌ tworzą chaotyczną strukturę  
❌ nie dzielą strony na sekcje  
❌ umieszczają wszystko w jednym kontenerze  

Dobra organizacja kodu:
✅ ułatwia rozwój projektu  
✅ poprawia czytelność  
✅ pomaga w stylowaniu CSS`,
  },

  {
    type: "code",
    title: "🧱 Kompletny przykład strony",
    content: `<header>
  <h1>Moja Strona</h1>
</header>

<nav>
  <a href="#">Start</a>
  <a href="#">Kontakt</a>
</nav>

<main>

  <section>
    <h2>Aktualności</h2>
    <p>Nowy artykuł został opublikowany.</p>
  </section>

  <section>
    <h2>O nas</h2>
    <p>Tworzymy kursy programowania.</p>
  </section>

</main>

<footer>
  <p>© 2026</p>
</footer>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz stronę zawierającą:

👉 <header>  
👉 <nav>  
👉 <main>  
👉 <section>  
👉 <footer>  
👉 nagłówek <h1>  
👉 minimum jeden paragraf <p>  

Temat:
„Moja pierwsza nowoczesna strona internetowa”`,
  },

  {
    type: "quiz",
    question: "Który znacznik jest najczęściej używany jako kontener?",
    answers: [
      "<img>",
      "<div>",
      "<table>",
      "<ul>",
    ],
    correct: 1,
    explanation:
`<div> jest podstawowym kontenerem HTML.`,
  },

  {
    type: "quiz",
    question: "Który element reprezentuje menu nawigacyjne?",
    answers: [
      "<main>",
      "<section>",
      "<nav>",
      "<footer>",
    ],
    correct: 2,
    explanation:
`<nav> służy do tworzenia nawigacji strony.`,
  },

  {
    type: "quiz",
    question: "Który element zawiera główną treść strony?",
    answers: [
      "<main>",
      "<header>",
      "<aside>",
      "<footer>",
    ],
    correct: 0,
    explanation:
`<main> zawiera główną zawartość strony.`,
  },

  {
    type: "quiz",
    question: "Do czego służy <footer>?",
    answers: [
      "Do tworzenia obrazów",
      "Do tworzenia list",
      "Do tworzenia stopki strony",
      "Do tworzenia formularzy",
    ],
    correct: 2,
    explanation:
`<footer> reprezentuje dolną część strony.`,
  },

  {
    type: "quiz",
    question: "Który zapis jest najbardziej semantyczny?",
    answers: [
      "<div><div><div>",
      "<header><main><footer>",
      "<table><table>",
      "<img><img>",
    ],
    correct: 1,
    explanation:
`Znaczniki semantyczne lepiej opisują strukturę strony.`,
  },
]

export const lesson7Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Kontenery i sekcje pomagają organizować strukturę strony internetowej.

Najważniejsze elementy:
✔ <div> → uniwersalny kontener  
✔ <header> → górna część strony  
✔ <nav> → nawigacja  
✔ <main> → główna zawartość  
✔ <section> → sekcja strony  
✔ <footer> → stopka  

Zapamiętaj:
👉 dobra organizacja kodu ułatwia rozwój projektu  
👉 semantyczne znaczniki poprawiają czytelność HTML  
👉 nowoczesne strony składają się z wielu sekcji  

Struktura strony jest fundamentem profesjonalnego web developmentu.
`,
}