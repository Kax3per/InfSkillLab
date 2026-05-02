import { Step } from "@/lib/types"

export const lesson3: Step[] = [

  {
    type: "text",
    title: "📝 Tekst w HTML",
    content:
`HTML pozwala tworzyć strukturę tekstu — nagłówki, akapity, wyróżnienia i cytaty.

Dzięki temu:
👉 tekst jest czytelny  
👉 ma hierarchię  
👉 przeglądarka wie co jest ważne`,
  },

  // 🔥 NAGŁÓWKI
  {
    type: "code",
    title: "🔝 Nagłówki",
    content: `<h1>Tytuł strony</h1>
<h2>Podtytuł</h2>
<h3>Niższy poziom</h3>`,
  },

  {
    type: "text",
    title: "💡 Nagłówki",
    content:
`Nagłówki tworzą strukturę strony.

👉 <h1> to główny tytuł  
👉 <h2>, <h3> itd. to kolejne poziomy  

Dzięki nim łatwiej czytać i organizować treść.`,
  },

  // 🔥 PARAGRAF
  {
    type: "code",
    title: "📄 Paragraf",
    content: `<p>To jest zwykły tekst w paragrafie.</p>`,
  },

  {
    type: "text",
    title: "💡 Paragraf",
    content:
`<p> to podstawowy element tekstu.

Każdy blok tekstu powinien być w osobnym paragrafie.`,
  },

  // 🔥 BR / HR
  {
    type: "code",
    title: "↩️ Nowa linia i separator",
    content: `Linia 1<br>
Linia 2

<hr>`,
  },

  {
    type: "text",
    title: "💡 <br> i <hr>",
    content:
`<br> łamie linię (jak enter)  
<hr> tworzy linię oddzielającą treść  

Używaj ich z umiarem.`,
  },

  // 🔥 STRONG / EM
  {
    type: "code",
    title: "💪 Wyróżnianie tekstu",
    content: `<strong>Ważne</strong>
<em>Podkreślone</em>`,
  },

  {
    type: "text",
    title: "💡 Wyróżnienia",
    content:
`<strong> oznacza ważność  
<em> podkreśla znaczenie  

To nie tylko wygląd — to sens tekstu.`,
  },

  // 🔥 B / I
  {
    type: "code",
    title: "🎨 Styl (wizualny)",
    content: `<b>Pogrubienie</b>
<i>Kursywa</i>`,
  },

  {
    type: "text",
    title: "⚠️ Styl vs znaczenie",
    content:
`<b> i <i> zmieniają tylko wygląd.

<strong> i <em> dodają znaczenie.

👉 lepiej używać strong i em`,
  },

  // 🔥 MARK / SMALL
  {
    type: "code",
    title: "✨ Dodatkowe elementy",
    content: `<mark>Podświetlenie</mark>
<small>Mniejszy tekst</small>`,
  },

  // 🔥 CYTATY
  {
    type: "code",
    title: "💬 Cytaty",
    content: `<q>Krótki cytat</q>

<blockquote>
Dłuższy cytat
</blockquote>`,
  },

  {
    type: "text",
    title: "💡 Cytaty",
    content:
`<q> działa w środku zdania  
<blockquote> tworzy blok tekstu  

Używaj ich do wyróżnienia wypowiedzi.`,
  },

  // 🔥 PRE
  {
    type: "code",
    title: "📦 Formatowanie tekstu",
    content: `<pre>
Linia 1
    Linia 2
</pre>`,
  },

  {
    type: "text",
    title: "💡 <pre>",
    content:
`Zachowuje spacje i enter.

Idealne do kodu lub specjalnego formatowania.`,
  },

  // 🔥 ZADANIE
  {
    type: "code-task",
    title: "💻 Twoje zadanie",
    content:
`Stwórz stronę z tekstem:

✔ nagłówek (<h1>)  
✔ paragraf (<p>)  
✔ ważne słowo (<strong>)  
✔ kursywa (<em>)  
✔ cytat (<q>)  
✔ nowa linia (<br>)  

👉 spróbuj napisać coś o sobie`,
  },

  // 🔥 QUIZ
  {
    type: "quiz",
    question: "Który tag oznacza ważny tekst?",
    answers: [
      "<b>",
      "<strong>",
      "<i>",
      "<small>",
    ],
    correct: 1,
    explanation:
`<strong> oznacza ważność.

<b> zmienia tylko wygląd.`,
  },
]

export const lesson3Summary = {
  title: "📚 Podsumowanie",
  content: `
HTML pozwala strukturyzować tekst.

Najważniejsze elementy:

✔ <h1>–<h6> → nagłówki  
✔ <p> → paragraf  
✔ <strong> → ważny tekst  
✔ <em> → podkreślenie znaczenia  
✔ <br> → nowa linia  
✔ <q>, <blockquote> → cytaty  
✔ <pre> → zachowanie formatowania  

Dobrze użyte tagi sprawiają, że tekst jest czytelny i logiczny.
`,
}