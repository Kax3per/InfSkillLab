import { Step } from "@/lib/types"

export const lesson15: Step[] = [
  {
    type: "text",
    title: "📂 Upload plików w PHP",
    content:
`PHP pozwala wysyłać pliki na serwer.

Najczęściej uploadujemy:
👉 zdjęcia
👉 PDF
👉 dokumenty
👉 avatary użytkowników

📌 Upload plików często pojawia się na INF.03.`,
  },

  {
    type: "text",
    title: "🧠 enctype",
    content:
`Aby formularz obsługiwał pliki,
musimy użyć:

enctype="multipart/form-data"

📌 Bez tego upload nie zadziała.`,
  },

  {
    type: "code",
    title: "🖥 Formularz uploadu",
    content:
`<form
    method="POST"
    enctype="multipart/form-data"
>

    <input
        type="file"
        name="photo"
    >

    <button type="submit">
        Wyślij
    </button>

</form>`,
  },

  {
    type: "text",
    title: "📦 $_FILES",
    content:
`Pliki odbieramy przez:

$_FILES

📌 To specjalna tablica PHP do uploadu plików.`,
  },

  {
    type: "code",
    title: "👀 Nazwa pliku",
    content:
`<?php

echo $_FILES["photo"]["name"];

?>`,
  },

  {
    type: "text",
    title: "📥 move_uploaded_file()",
    content:
`move_uploaded_file() przenosi plik
na serwer.

📌 Bez tego plik nie zostanie zapisany.`,
  },

  {
    type: "code",
    title: "⚙ Upload pliku",
    content:
`<?php

$tmp = $_FILES["photo"]["tmp_name"];

$name = $_FILES["photo"]["name"];

move_uploaded_file(
    $tmp,
    "uploads/" . $name
);

?>`,
  },

  {
    type: "text",
    title: "📁 Folder uploads",
    content:
`Najczęściej tworzymy folder:

uploads

To tam zapisujemy pliki użytkowników.`,
  },

  {
    type: "text",
    title: "🛡 Sprawdzanie pliku",
    content:
`Przed uploadem warto sprawdzić:

👉 rozszerzenie  
👉 rozmiar  
👉 typ pliku  

📌 To zwiększa bezpieczeństwo.`,
  },

  {
    type: "code",
    title: "✅ isset() przy uploadzie",
    content:
`<?php

if (isset($_FILES["photo"])) {

    echo "Plik odebrany";
}

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 brak enctype  
👉 brak folderu uploads  
👉 zła nazwa input  
👉 brak move_uploaded_file()`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz folder:
uploads

2️⃣ Utwórz formularz:
type="file"

3️⃣ Wyślij zdjęcie na serwer

4️⃣ Użyj:
$_FILES
move_uploaded_file()

📌 Po uploadzie sprawdź folder uploads.`,
  },

  {
    type: "quiz",
    question: "Do czego służy $_FILES?",
    answers: [
      "Do sesji",
      "Do uploadu plików",
      "Do połączenia z bazą",
      "Do SQL",
    ],
    correct: 1,
    explanation:
`$_FILES służy do odbierania plików w PHP.`,
  },

  {
    type: "quiz",
    question: "Co robi move_uploaded_file()?",
    answers: [
      "Usuwa plik",
      "Pobiera dane z MySQL",
      "Przenosi plik na serwer",
      "Tworzy sesję",
    ],
    correct: 2,
    explanation:
`move_uploaded_file() zapisuje wysłany plik na serwerze.`,
  },
]

export const lesson15Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
PHP pozwala wysyłać pliki na serwer.

Zapamiętaj:

✔ enctype jest wymagane  
✔ $_FILES odbiera pliki  
✔ move_uploaded_file() zapisuje plik  
✔ uploads to folder na pliki  

Najważniejsze elementy:
🔹 $_FILES  
🔹 enctype  
🔹 move_uploaded_file()  
🔹 uploads  

👉 Upload plików to bardzo częsty element aplikacji webowych.
`,
}