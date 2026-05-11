import { Step } from "@/lib/types"

export const lesson16: Step[] = [
  {
    type: "text",
    title: "🛡 Walidacja formularzy w PHP",
    content:
`Walidacja sprawdza,
czy dane wpisane przez użytkownika są poprawne.

Dzięki walidacji możemy:
👉 blokować puste pola
👉 sprawdzać email
👉 kontrolować długość hasła

📌 To bardzo ważne na INF.03.`,
  },

  {
    type: "text",
    title: "🧠 Dlaczego walidacja jest ważna?",
    content:
`Bez walidacji użytkownik może:
👉 wysłać puste dane
👉 wpisać błędny email
👉 uszkodzić dane w bazie

📌 Walidacja zwiększa bezpieczeństwo aplikacji.`,
  },

  {
    type: "code",
    title: "👀 Sprawdzanie pustego pola",
    content:
`<?php

if (empty($_POST["login"])) {

    echo "Pole login jest puste";
}

?>`,
  },

  {
    type: "text",
    title: "📦 empty()",
    content:
`empty() sprawdza,
czy zmienna jest pusta.

📌 Bardzo często używa się:
empty($_POST["nazwa"])`,
  },

  {
    type: "code",
    title: "📧 Walidacja email",
    content:
`<?php

$email = $_POST["email"];

if (
    filter_var(
        $email,
        FILTER_VALIDATE_EMAIL
    )
) {

    echo "Poprawny email";

}

?>`,
  },

  {
    type: "text",
    title: "🧠 filter_var()",
    content:
`filter_var() pozwala sprawdzać dane.

Najczęściej:
👉 email
👉 liczby
👉 URL

📌 To wbudowana funkcja PHP.`,
  },

  {
    type: "code",
    title: "🔒 Sprawdzanie długości hasła",
    content:
`<?php

$password = $_POST["password"];

if (strlen($password) < 6) {

    echo "Hasło za krótkie";
}

?>`,
  },

  {
    type: "text",
    title: "📏 strlen()",
    content:
`strlen() zwraca długość tekstu.

Przykład:
👉 długość hasła
👉 długość loginu
👉 długość komentarza`,
  },

  {
    type: "code",
    title: "✅ Pełna walidacja",
    content:
`<?php

if (
    !empty($_POST["login"]) &&
    !empty($_POST["password"])
) {

    echo "Dane poprawne";
}

?>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Najczęstsze błędy:

👉 brak isset()  
👉 brak empty()  
👉 literówki w $_POST  
👉 brak sprawdzania danych`,
  },

  {
    type: "text",
    title: "📊 Walidacja a bezpieczeństwo",
    content:
`Walidacja:
👉 poprawia bezpieczeństwo
👉 zmniejsza błędy
👉 chroni bazę danych

📌 To podstawa backendu.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`1️⃣ Utwórz formularz:
login
email
password

2️⃣ Sprawdź:
czy pola nie są puste

3️⃣ Sprawdź:
czy email jest poprawny

4️⃣ Sprawdź:
czy hasło ma minimum 6 znaków

📌 Użyj:
empty()
strlen()
filter_var()`,
  },

  {
    type: "quiz",
    question: "Do czego służy empty()?",
    answers: [
      "Do usuwania tabel",
      "Do sprawdzania pustych danych",
      "Do połączenia z MySQL",
      "Do uploadu plików",
    ],
    correct: 1,
    explanation:
`empty() sprawdza, czy zmienna jest pusta.`,
  },

  {
    type: "quiz",
    question: "Co robi strlen()?",
    answers: [
      "Sprawdza email",
      "Tworzy sesję",
      "Liczy długość tekstu",
      "Usuwa rekord",
    ],
    correct: 2,
    explanation:
`strlen() zwraca długość tekstu.`,
  },
]

export const lesson16Summary = {
  title: "📚 Podsumowanie lekcji",
  content:
`
Walidacja sprawdza poprawność danych użytkownika.

Zapamiętaj:

✔ empty() sprawdza puste pola  
✔ filter_var() sprawdza email  
✔ strlen() liczy długość tekstu  
✔ Walidacja zwiększa bezpieczeństwo  

Najważniejsze elementy:
🔹 empty()  
🔹 filter_var()  
🔹 strlen()  
🔹 walidacja formularzy  

👉 Walidacja to podstawa bezpiecznych aplikacji PHP.
`,
}