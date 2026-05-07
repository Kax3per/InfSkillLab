import { Step } from "@/lib/types"

export const lesson3: Step[] = [
  {
    type: "text",
    title: "📝 Nagłówki i tekst w HTML",
    content:
`Tekst jest jednym z najważniejszych elementów każdej strony internetowej.

To właśnie dzięki tekstowi użytkownik:
👉 czyta informacje  
👉 poznaje zawartość strony  
👉 porusza się po sekcjach witryny  

HTML posiada specjalne znaczniki służące do tworzenia:
✔ nagłówków  
✔ akapitów  
✔ wyróżnionego tekstu  
✔ cytatów  
✔ opisów i sekcji tekstowych  

Dobrze zorganizowany tekst sprawia, że strona:
✅ wygląda profesjonalnie  
✅ jest czytelna  
✅ łatwiej się ją przegląda`,
  },

  {
    type: "text",
    title: "🔠 Czym są nagłówki?",
    content:
`Nagłówki służą do tworzenia tytułów i sekcji na stronie internetowej.

HTML posiada 6 poziomów nagłówków:
<h1> do <h6>

📌 Najważniejszy jest:
<h1>

Im wyższy numer:
👉 tym mniej ważny nagłówek  
👉 tym mniejszy rozmiar domyślny  

Nagłówki pomagają:
✔ organizować treść  
✔ tworzyć sekcje  
✔ poprawiać czytelność strony`,
  },

  {
    type: "code",
    title: "👀 Wszystkie poziomy nagłówków",
    content: `<h1>Nagłówek poziomu 1</h1>
<h2>Nagłówek poziomu 2</h2>
<h3>Nagłówek poziomu 3</h3>
<h4>Nagłówek poziomu 4</h4>
<h5>Nagłówek poziomu 5</h5>
<h6>Nagłówek poziomu 6</h6>`,
  },

  {
    type: "text",
    title: "⭐ Znacznik <h1>",
    content:
`<h1> jest najważniejszym nagłówkiem na stronie.

Najczęściej używa się go jako:
👉 tytułu strony  
👉 głównego tematu artykułu  
👉 nazwy witryny  

Dobra praktyka:
✅ używaj jednego <h1> na stronę  

Przykład:
<h1>Kurs HTML</h1>`,
  },

  {
    type: "text",
    title: "📄 Akapity tekstu",
    content:
`Do tworzenia zwykłego tekstu używa się znacznika:
<p>

Każdy akapit powinien zawierać jedną logiczną część tekstu.

Przeglądarka automatycznie:
✔ oddziela akapity  
✔ dodaje odstępy między nimi  

📌 Tekstu nie powinno się pisać „luzem” bez znacznika <p>.`,
  },

  {
    type: "code",
    title: "💡 Przykład akapitów",
    content: `<p>HTML jest językiem znaczników.</p>

<p>Dzięki HTML możemy tworzyć strony internetowe.</p>`,
  },

  {
    type: "text",
    title: "⚠️ Dlaczego struktura tekstu jest ważna?",
    content:
`Źle zorganizowany tekst jest trudny do czytania.

Dobra struktura:
✅ poprawia czytelność  
✅ pomaga użytkownikowi znaleźć informacje  
✅ sprawia, że strona wygląda profesjonalnie  

Przykład dobrej organizacji:
✔ główny nagłówek  
✔ sekcje  
✔ krótkie akapity  
✔ logiczny układ treści`,
  },

  {
    type: "text",
    title: "🖍 Wyróżnianie tekstu",
    content:
`HTML pozwala wyróżniać fragmenty tekstu.

Najpopularniejsze znaczniki:

<strong>
👉 ważny tekst (pogrubienie)

<em>
👉 tekst wyróżniony (kursywa)

<mark>
👉 podświetlenie tekstu

<small>
👉 mniejszy tekst`,
  },

  {
    type: "code",
    title: "✨ Przykłady formatowania tekstu",
    content: `<p><strong>To jest ważna informacja.</strong></p>

<p><em>To jest tekst zapisany kursywą.</em></p>

<p><mark>Ten tekst jest podświetlony.</mark></p>

<p><small>To jest mniejszy tekst.</small></p>`,
  },

  {
    type: "text",
    title: "📌 Znacznik <br>",
    content:
`<br> służy do przechodzenia do nowej linii.

Nie tworzy nowego akapitu.
Tworzy jedynie „enter” w tekście.

Przykład zastosowania:
✔ adresy  
✔ wiersze tekstu  
✔ poezja`,
  },

  {
    type: "code",
    title: "↩ Przykład użycia <br>",
    content: `<p>
Jan Kowalski<br>
Warszawa<br>
Polska
</p>`,
  },

  {
    type: "text",
    title: "📚 Cytaty i opisy",
    content:
`HTML posiada również znaczniki do cytowania tekstu.

<blockquote>
👉 dłuższy cytat

<q>
👉 krótki cytat w linii tekstu

Cytaty pomagają:
✔ oddzielić cudzą wypowiedź  
✔ zwiększyć czytelność tekstu`,
  },

  {
    type: "code",
    title: "💬 Przykład cytatów",
    content: `<blockquote>
HTML jest podstawą każdej strony internetowej.
</blockquote>

<p>Autor powiedział:
<q>Programowanie wymaga praktyki.</q>
</p>`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Podczas pracy z tekstem początkujący często:
❌ używają wielu <br> zamiast akapitów  
❌ pomijają znaczniki <p>  
❌ używają kilku <h1> bez potrzeby  
❌ tworzą bardzo długie bloki tekstu  
❌ mieszają poziomy nagłówków chaotycznie  

Dobra struktura tekstu powinna być:
✔ logiczna  
✔ czytelna  
✔ uporządkowana`,
  },

  {
    type: "code",
    title: "🧱 Kompletny przykład tekstu",
    content: `<h1>Kurs HTML</h1>

<h2>Wprowadzenie</h2>

<p>
HTML jest językiem używanym do tworzenia stron internetowych.
</p>

<h2>Dlaczego warto uczyć się HTML?</h2>

<p>
HTML jest podstawą nowoczesnego web developmentu.
</p>

<p>
<strong>Bez HTML nie istnieją strony internetowe.</strong>
</p>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz prostą stronę zawierającą:

👉 nagłówek <h1>  
👉 podnagłówek <h2>  
👉 dwa akapity <p>  
👉 wyróżniony tekst za pomocą <strong>  

Temat:
„Dlaczego chcę uczyć się programowania?”`,
  },

  {
    type: "quiz",
    question: "Który znacznik tworzy najważniejszy nagłówek?",
    answers: [
      "<head>",
      "<h6>",
      "<h1>",
      "<title>",
    ],
    correct: 2,
    explanation:
`<h1> jest najważniejszym nagłówkiem w dokumencie HTML.`,
  },

  {
    type: "quiz",
    question: "Który znacznik służy do tworzenia akapitu?",
    answers: [
      "<text>",
      "<paragraph>",
      "<p>",
      "<article>",
    ],
    correct: 2,
    explanation:
`Znacznik <p> służy do tworzenia akapitów tekstu.`,
  },

  {
    type: "quiz",
    question: "Który znacznik powoduje przejście do nowej linii?",
    answers: [
      "<br>",
      "<hr>",
      "<line>",
      "<new>",
    ],
    correct: 0,
    explanation:
`<br> tworzy przejście do nowej linii.`,
  },

  {
    type: "quiz",
    question: "Który znacznik wyróżnia ważny tekst?",
    answers: [
      "<div>",
      "<strong>",
      "<section>",
      "<main>",
    ],
    correct: 1,
    explanation:
`<strong> oznacza ważny fragment tekstu.`,
  },

  {
    type: "quiz",
    question: "Do czego służy znacznik <blockquote>?",
    answers: [
      "Do obrazów",
      "Do tworzenia linków",
      "Do dłuższych cytatów",
      "Do tabel",
    ],
    correct: 2,
    explanation:
`<blockquote> służy do wyświetlania większych cytatów.`,
  },
]

export const lesson3Summary = {
  title: "📚 Podsumowanie lekcji",
  content: `
HTML pozwala tworzyć uporządkowaną i czytelną strukturę tekstu.

Najważniejsze znaczniki:
✔ <h1> - <h6> → nagłówki  
✔ <p> → akapit  
✔ <strong> → ważny tekst  
✔ <em> → kursywa  
✔ <mark> → podświetlenie  
✔ <br> → nowa linia  
✔ <blockquote> → cytat  

Zapamiętaj:
👉 nagłówki organizują treść  
👉 akapity poprawiają czytelność  
👉 dobrze uporządkowany tekst wygląda profesjonalnie  

Dobra struktura tekstu jest podstawą nowoczesnych stron internetowych.
`,
}