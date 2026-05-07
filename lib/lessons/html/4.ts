import { Step } from "@/lib/types"

export const lesson4: Step[] = [
  {
    type: "text",
    title: "🔗 Czym są linki?",
    content:
`Internet działa dzięki linkom.

To właśnie linki pozwalają:
👉 przechodzić między stronami  
👉 otwierać podstrony  
👉 tworzyć menu nawigacyjne  
👉 przenosić użytkownika do innych miejsc w internecie  

Bez linków strony byłyby od siebie całkowicie oddzielone.

Każde kliknięcie:
✔ menu  
✔ przycisku  
✔ tekstu  
✔ logo  

najczęściej wykorzystuje właśnie link HTML.`,
  },

  {
    type: "text",
    title: "🏷 Znacznik <a>",
    content:
`Do tworzenia linków używa się znacznika:
<a>

Nazwa pochodzi od słowa:
anchor

Znacznik <a> sam w sobie nie wystarcza.
Najważniejszy jest atrybut:
href

To właśnie href określa:
👉 dokąd prowadzi link`,
  },

  {
    type: "code",
    title: "👀 Pierwszy link",
    content: `<a href="https://google.com">
  Otwórz Google
</a>`,
  },

  {
    type: "text",
    title: "🧠 Jak działa href?",
    content:
`href oznacza:
Hypertext Reference

Jest to adres miejsca, do którego użytkownik zostanie przeniesiony po kliknięciu linku.

Adres może prowadzić do:
✔ innej strony internetowej  
✔ podstrony  
✔ pliku  
✔ sekcji strony  
✔ adresu e-mail`,
  },

  {
    type: "text",
    title: "🌍 Linki zewnętrzne",
    content:
`Link zewnętrzny prowadzi do innej strony internetowej.

Przykłady:
👉 Google  
👉 YouTube  
👉 Wikipedia  

W linkach zewnętrznych zazwyczaj podaje się pełny adres strony.`,
  },

  {
    type: "code",
    title: "🌐 Przykłady linków zewnętrznych",
    content: `<a href="https://youtube.com">
  YouTube
</a>

<a href="https://wikipedia.org">
  Wikipedia
</a>`,
  },

  {
    type: "text",
    title: "📄 Linki wewnętrzne",
    content:
`Linki wewnętrzne prowadzą do innych podstron w obrębie tej samej witryny.

Są używane np. w:
✔ menu  
✔ panelach nawigacyjnych  
✔ blogach  
✔ sklepach internetowych  

Najczęściej wskazują pliki HTML.`,
  },

  {
    type: "code",
    title: "📂 Przykład linku wewnętrznego",
    content: `<a href="kontakt.html">
  Kontakt
</a>

<a href="onas.html">
  O nas
</a>`,
  },

  {
    type: "text",
    title: "🪟 Otwieranie linku w nowej karcie",
    content:
`Czasami chcemy, aby link otworzył się w nowej karcie przeglądarki.

Służy do tego:
target="_blank"

Dzięki temu użytkownik:
✔ nie opuszcza aktualnej strony  
✔ może wrócić do witryny bez cofania`,
  },

  {
    type: "code",
    title: "🆕 Link w nowej karcie",
    content: `<a href="https://openai.com" target="_blank">
  OpenAI
</a>`,
  },

  {
    type: "text",
    title: "📧 Link do adresu e-mail",
    content:
`HTML pozwala tworzyć linki otwierające program pocztowy użytkownika.

Używa się do tego:
mailto:

Po kliknięciu:
👉 otwiera się aplikacja e-mail  
👉 adres odbiorcy jest wpisany automatycznie`,
  },

  {
    type: "code",
    title: "✉️ Przykład mailto",
    content: `<a href="mailto:kontakt@firma.pl">
  Napisz do nas
</a>`,
  },

  {
    type: "text",
    title: "🖼 Link może zawierać tekst lub obraz",
    content:
`Linkiem może być:
✔ zwykły tekst  
✔ przycisk  
✔ obraz  
✔ ikona  

Najważniejsze jest to, aby element znajdował się wewnątrz znacznika <a>.`,
  },

  {
    type: "code",
    title: "🧩 Link z obrazem",
    content: `<a href="https://example.com">
  <img src="logo.png" alt="Logo">
</a>`,
  },

  {
    type: "text",
    title: "📌 Dobre praktyki tworzenia linków",
    content:
`Dobre linki powinny:
✔ jasno opisywać dokąd prowadzą  
✔ być krótkie i czytelne  
✔ działać poprawnie  
✔ mieć logiczne nazwy  

❌ Zły przykład:
Kliknij tutaj

✅ Lepszy przykład:
Zobacz kurs HTML`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący bardzo często:
❌ zapominają o href  
❌ wpisują zły adres strony  
❌ nie zamykają znacznika <a>  
❌ umieszczają spacje w nazwach plików  
❌ używają nieczytelnych nazw linków  

Każdy link powinien być:
✔ poprawny  
✔ czytelny  
✔ łatwy do kliknięcia`,
  },

  {
    type: "code",
    title: "🧱 Kompletny przykład strony z linkami",
    content: `<h1>Moja strona</h1>

<p>Przydatne strony:</p>

<a href="https://developer.mozilla.org">
  Dokumentacja MDN
</a>

<br><br>

<a href="kontakt.html">
  Kontakt
</a>

<br><br>

<a href="mailto:admin@strona.pl">
  Wyślij wiadomość
</a>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz stronę zawierającą:

👉 nagłówek <h1>  
👉 akapit <p>  
👉 link do dowolnej strony internetowej  
👉 link otwierający się w nowej karcie  

Temat strony:
„Moje ulubione strony internetowe”`,
  },

  {
    type: "quiz",
    question: "Który znacznik służy do tworzenia linków?",
    answers: [
      "<link>",
      "<a>",
      "<href>",
      "<url>",
    ],
    correct: 1,
    explanation:
`Znacznik <a> służy do tworzenia linków w HTML.`,
  },

  {
    type: "quiz",
    question: "Który atrybut określa adres linku?",
    answers: [
      "src",
      "target",
      "href",
      "alt",
    ],
    correct: 2,
    explanation:
`Atrybut href określa miejsce, do którego prowadzi link.`,
  },

  {
    type: "quiz",
    question: "Który zapis otwiera link w nowej karcie?",
    answers: [
      'target="_blank"',
      'href="_new"',
      'window="new"',
      'new="tab"',
    ],
    correct: 0,
    explanation:
`target="_blank" otwiera link w nowej karcie przeglądarki.`,
  },

  {
    type: "quiz",
    question: "Do czego służy mailto: ?",
    answers: [
      "Do wysyłania plików",
      "Do tworzenia formularzy",
      "Do otwierania programu pocztowego",
      "Do tworzenia menu",
    ],
    correct: 2,
    explanation:
`mailto: umożliwia utworzenie linku do adresu e-mail.`,
  },

  {
    type: "quiz",
    question: "Który przykład przedstawia poprawny link?",
    answers: [
      '<a>Google</a>',
      '<a href="https://google.com">Google</a>',
      '<href="google.com">',
      '<link="google.com">',
    ],
    correct: 1,
    explanation:
`Poprawny link musi posiadać znacznik <a> oraz atrybut href.`,
  },
]

export const lesson4Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
Linki są podstawą działania internetu.

Najważniejsze informacje:
✔ linki tworzy się za pomocą <a>  
✔ href określa adres linku  
✔ target="_blank" otwiera nową kartę  
✔ mailto: tworzy link do e-maila  

Poznane znaczniki:
🔹 <a>  
🔹 href  
🔹 target  
🔹 mailto  

Dobre linki powinny być:
✔ czytelne  
✔ poprawne  
✔ logiczne  
✔ łatwe do zrozumienia  

Linki pozwalają łączyć strony i budować pełną nawigację witryny.
`,
}