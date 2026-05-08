import { Step } from "@/lib/types"

export const lesson2: Step[] = [

  {
    type: "text",
    title: "🎨 Sposoby dodawania CSS",
    content:
`CSS można dodawać do strony internetowej na kilka sposobów.

Najpopularniejsze metody:
👉 inline CSS  
👉 internal CSS  
👉 external CSS  

📌 W profesjonalnych projektach najczęściej używa się external CSS.`,
  },

  {
    type: "text",
    title: "🧠 Inline CSS",
    content:
`Inline CSS zapisujemy bezpośrednio w elemencie HTML przy pomocy atrybutu style.

Przykład:
<h1 style="color: blue;">Hello</h1>

📌 Ten sposób jest szybki, ale nie nadaje się do większych projektów.`,
  },

  {
    type: "code",
    title: "👀 Przykład inline CSS",
    content:
`<h1 style="color: blue;">
  Hello CSS
</h1>

<p style="color: gray;">
  To jest paragraf.
</p>`,
  },

  {
    type: "text",
    title: "📄 Internal CSS",
    content:
`Internal CSS zapisujemy wewnątrz znacznika <style> w sekcji <head>.

Przeglądarka odczytuje style i stosuje je do całej strony.

📌 To dobre rozwiązanie dla małych projektów.`,
  },

  {
    type: "code",
    title: "🧱 Przykład internal CSS",
    content:
`<!DOCTYPE html>
<html>
<head>

<style>

h1 {
  color: blue;
}

p {
  color: gray;
}

</style>

</head>

<body>

<h1>Hello</h1>
<p>Paragraf</p>

</body>
</html>`,
  },

  {
    type: "text",
    title: "🌍 External CSS",
    content:
`External CSS polega na zapisaniu stylów w osobnym pliku .css.

Następnie plik podłączamy do strony HTML.

📌 To najlepsza metoda używana w nowoczesnych aplikacjach.`,
  },

  {
    type: "code",
    title: "🔗 Podłączenie pliku CSS",
    content:
`<head>

<link rel="stylesheet" href="style.css">

</head>`,
  },

  {
    type: "text",
    title: "⚠ Najczęstsze błędy",
    content:
`Podczas pracy z CSS uczniowie często popełniają błędy:

❌ brak zamknięcia cudzysłowu  
❌ zła ścieżka do pliku CSS  
❌ wpisanie CSS poza <style>  
❌ brak średników ;  

📌 Nawet jeden błąd może sprawić, że style nie będą działały.`,
  },

  {
    type: "code-task",
    title: "💻 Zadanie praktyczne",
    content:
`Dodaj internal CSS do strony.

Wymagania:
👉 h1 ma mieć kolor blue  
👉 p ma mieć kolor gray  
👉 body ma mieć background black  

Użyj znacznika <style>.`,
  },

  {
    type: "quiz",
    question:
      "Która metoda CSS jest najczęściej używana w dużych projektach?",
    answers: [
      "Inline CSS",
      "External CSS",
      "Komentarze HTML",
      "Tabela",
    ],
    correct: 1,
    explanation:
`External CSS jest najlepszym rozwiązaniem dla większych projektów.`,
  },

  {
    type: "quiz",
    question:
      "W jakim znaczniku zapisujemy internal CSS?",
    answers: [
      "<css>",
      "<script>",
      "<style>",
      "<design>",
    ],
    correct: 2,
    explanation:
`Internal CSS zapisujemy wewnątrz znacznika <style>.`,
  },

]

export const lesson2Summary = {

  title: "📚 Podsumowanie lekcji",

  content:
`CSS można dodawać do strony na kilka sposobów.

Zapamiętaj:

✔ inline CSS działa bezpośrednio w elemencie HTML  
✔ internal CSS zapisujemy w <style>  
✔ external CSS znajduje się w osobnym pliku  
✔ external CSS jest najlepszym rozwiązaniem dla dużych projektów  

Najważniejsze znaczniki:
🔹 style  
🔹 link  
🔹 href  

👉 W nowoczesnym frontendzie najczęściej używa się external CSS.`,
}