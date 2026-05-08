import { Step } from "@/lib/types"

export const lesson10: Step[] = [
  {
    type: "text",
    title: "🖼 Multimedia w HTML",
    content:
`HTML pozwala osadzać multimedia na stronie internetowej.

Dzięki temu strony mogą zawierać:
✔ filmy  
✔ muzykę  
✔ mapy  
✔ filmy z YouTube  
✔ zewnętrzne strony  

Multimedia sprawiają, że strony są bardziej nowoczesne i interaktywne.`,
  },

  {
    type: "text",
    title: "🎥 Element <video>",
    content:
`Do wyświetlania filmów używa się:
<video>

Znacznik ten pozwala odtwarzać filmy bezpośrednio na stronie internetowej.`,
  },

  {
    type: "code",
    title: "▶️ Pierwszy film",
    content: `<video>

</video>`,
  },

  {
    type: "text",
    title: "🎛 Atrybut controls",
    content:
`Aby użytkownik mógł sterować filmem, dodaje się:
controls

Pojawią się wtedy:
✔ play  
✔ pause  
✔ regulacja głośności  
✔ fullscreen  
✔ pasek postępu`,
  },

  {
    type: "code",
    title: "🎬 Video z controls",
    content: `<video controls>

</video>`,
  },

  {
    type: "text",
    title: "🔇 Atrybut muted",
    content:
`muted wycisza film automatycznie.

Przydaje się szczególnie gdy:
✔ film ma startować automatycznie  
✔ strona posiada animowane tło video`,
  },

  {
    type: "code",
    title: "🔕 Muted",
    content: `<video muted>

</video>`,
  },

  {
    type: "text",
    title: "▶️ Atrybut autoplay",
    content:
`autoplay powoduje automatyczne uruchomienie filmu po załadowaniu strony.

Nowoczesne przeglądarki często wymagają również:
muted`,
  },

  {
    type: "code",
    title: "🚀 Autoplay",
    content: `<video
  autoplay
  muted
>

</video>`,
  },

  {
    type: "text",
    title: "🔁 Atrybut loop",
    content:
`loop powoduje zapętlenie filmu.

Po zakończeniu odtwarzania:
✔ film uruchomi się ponownie`,
  },

  {
    type: "code",
    title: "♻️ Loop",
    content: `<video
  loop
  controls
>

</video>`,
  },

  {
    type: "text",
    title: "📂 Źródło filmu",
    content:
`Film dodaje się za pomocą:
src

src określa lokalizację pliku wideo.`,
  },

  {
    type: "code",
    title: "📹 Video z plikiem",
    content: `<video 
  src="film.mp4"
  controls
>

</video>`,
  },

  {
    type: "text",
    title: "📏 Rozmiar filmu",
    content:
`Film można skalować za pomocą:
✔ width  
✔ height

Pozwala to kontrolować wielkość odtwarzacza.`,
  },

  {
    type: "code",
    title: "📺 Width i height",
    content: `<video
  src="film.mp4"
  width="500"
  controls
>

</video>`,
  },

  {
    type: "text",
    title: "🌍 Element <iframe>",
    content:
`<iframe> pozwala osadzać inne strony internetowe wewnątrz naszej strony.

Najczęściej używa się go do:
✔ YouTube  
✔ Google Maps  
✔ formularzy  
✔ zewnętrznych aplikacji`,
  },

  {
    type: "code",
    title: "🪟 Pierwszy iframe",
    content: `<iframe>

</iframe>`,
  },

  {
    type: "text",
    title: "🔗 Atrybut src w iframe",
    content:
`iframe również używa:
src

Adres URL określa, jaka strona zostanie osadzona.`,
  },

  {
    type: "code",
    title: "🌐 iframe ze stroną",
    content: `<iframe
  src="https://example.com"
>

</iframe>`,
  },

  {
    type: "text",
    title: "📐 Rozmiar iframe",
    content:
`iframe można skalować podobnie jak video.

Służą do tego:
✔ width  
✔ height`,
  },

  {
    type: "code",
    title: "🖥 iframe z rozmiarem",
    content: `<iframe
  src="https://example.com"
  width="600"
  height="400"
>

</iframe>`,
  },

  {
    type: "text",
    title: "▶️ YouTube w iframe",
    content:
`YouTube pozwala osadzać filmy za pomocą iframe.

Wystarczy wkleić link embed.`,
  },

  {
    type: "code",
    title: "🎞 YouTube embed",
    content: `<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
>

</iframe>`,
  },

  {
    type: "text",
    title: "⚠️ Najczęstsze błędy",
    content:
`Początkujący często:
❌ zapominają zamknąć <video>  
❌ nie dodają controls  
❌ używają złego src  
❌ ustawiają zbyt duże multimedia  
❌ wklejają zwykły link YouTube zamiast embed  
❌ używają autoplay bez muted  

Pamiętaj:
✔ multimedia powinny być czytelne  
✔ nie mogą psuć wyglądu strony`,
  },

  {
    type: "code",
    title: "🧱 Kompletny przykład",
    content: `<h1>Moje multimedia</h1>

<video
  src="film.mp4"
  width="500"
  controls
  autoplay
  muted
  loop
>

</video>

<br><br>

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
>

</iframe>`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Stwórz stronę zawierającą:

👉 nagłówek <h1>  
👉 element <video>  
👉 controls  
👉 autoplay  
👉 muted  
👉 iframe z YouTube  

Temat:
„Moje multimedia”`,
  },
  

  {
    type: "quiz",
    question: "Który element służy do wyświetlania filmów?",
    answers: [
      "<media>",
      "<movie>",
      "<video>",
      "<iframe>",
    ],
    correct: 2,
    explanation:
`<video> służy do wyświetlania filmów w HTML.`,
  },

  {
    type: "quiz",
    question: "Który atrybut pokazuje przyciski odtwarzania?",
    answers: [
      "controls",
      "play",
      "buttons",
      "media",
    ],
    correct: 0,
    explanation:
`controls pokazuje przyciski sterujące filmem.`,
  },

  {
    type: "quiz",
    question: "Który atrybut wycisza film?",
    answers: [
      "silent",
      "muted",
      "quiet",
      "volume",
    ],
    correct: 1,
    explanation:
`muted wycisza film.`,
  },

  {
    type: "quiz",
    question: "Który atrybut zapętla film?",
    answers: [
      "loop",
      "repeat",
      "again",
      "reload",
    ],
    correct: 0,
    explanation:
`loop powoduje nieskończone odtwarzanie filmu.`,
  },

  {
    type: "quiz",
    question: "Który element osadza inne strony?",
    answers: [
      "<embed>",
      "<iframe>",
      "<section>",
      "<video>",
    ],
    correct: 1,
    explanation:
`<iframe> pozwala osadzać inne strony internetowe.`,
  },

  {
    type: "quiz",
    question: "Jak osadza się film z YouTube?",
    answers: [
      "Za pomocą <video>",
      "Za pomocą <img>",
      "Za pomocą <iframe>",
      "Za pomocą <audio>",
    ],
    correct: 2,
    explanation:
`Filmy YouTube najczęściej osadza się przez <iframe>.`,
  },
]

export const lesson10Summary = {

  title: "🏁 Podsumowanie kursu HTML",

  content:
`
Gratulacje! Ukończyłeś kurs HTML 🎉

Poznałeś:

✔ strukturę strony HTML  
✔ znaczniki tekstowe  
✔ linki i obrazki  
✔ listy i tabele  
✔ formularze  
✔ semantic HTML  
✔ multimedia  
✔ head i meta tagi  
✔ osadzanie CSS i JavaScript  

Najważniejsze technologie:
🔹 HTML5  
🔹 semantic tags  
🔹 forms  
🔹 tables  
🔹 media elements  

👉 HTML jest fundamentem każdej strony internetowej.

Teraz potrafisz budować kompletne struktury stron WWW 🚀
`,
}