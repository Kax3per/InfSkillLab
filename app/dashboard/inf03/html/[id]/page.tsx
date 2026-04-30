"use client"

import { supabase } from "@/lib/supabase"
import { useState, useEffect, ReactNode } from "react"
import { use } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

// 🔥 typy
type Step =
  | { type: "text"; title: string; content: string }
  | { type: "code"; title: string; content: string }
  | { type: "code-task"; title: string; content: string }
  | {
      type: "quiz"
      question: string
      answers: string[]
      correct: number
      explanation: ReactNode
    }

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState("")
  const [result, setResult] = useState<null | boolean>(null)
  const [completed, setCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  // 🔥 sprawdz progres
  useEffect(() => {
    const check = async () => {
      const { data } = await supabase.auth.getUser()
      const user = data.user
      if (!user) return

      const { data: progress } = await supabase
        .from("progress")
        .select("*")
        .eq("user_id", user.id)
        .eq("course", "html")
        .eq("lesson", Number(id))

      if (progress && progress.length > 0) setCompleted(true)

      setLoading(false)
    }

    check()
  }, [id])

  if (loading) return <div>Ładowanie...</div>

  let steps: Step[] = []

  // 🔥 LEKCJA 1
  if (id === "1") {
  steps = [
  {
    type: "text",
    title: "Czym jest HTML?",
    content:
`HTML (HyperText Markup Language) to podstawowy język, który tworzy strukturę każdej strony internetowej.

Każda strona którą widzisz — YouTube, Instagram, sklepy — jest zbudowana na HTML.

👉 HTML NIE odpowiada za wygląd (kolory, animacje) — to robi CSS  
👉 HTML NIE robi logiki — to robi JavaScript  

HTML odpowiada za: "co znajduje się na stronie"

Czyli:
- nagłówki
- teksty
- obrazy
- linki
- formularze

Bez HTML strona po prostu by nie istniała.`,
  },
  {
    type: "text",
    title: "Jak działa HTML?",
    content:
`Twoja przeglądarka (Chrome, Edge, Firefox) czyta kod HTML i zamienia go na stronę.

To trochę jak tłumacz:

Kod:
<h1>Witaj</h1>

Widok:
DUŻY TEKST "Witaj"

👉 Ty piszesz kod  
👉 Przeglądarka robi z tego stronę  

Im lepiej rozumiesz HTML, tym szybciej jesteś w stanie tworzyć strony.`,
  },
  {
    type: "code",
    title: "Pierwszy przykład",
    content: `<h1>Witaj świecie</h1>
<p>To jest moja pierwsza strona</p>`,
  },
  {
    type: "text",
    title: "Rozbijmy ten kod",
    content:
`<h1>Witaj świecie</h1>

👉 <h1> → otwarcie tagu  
👉 Witaj świecie → treść  
👉 </h1> → zamknięcie tagu  

To samo dla <p>.

To się nazywa:
👉 TAG HTML

Większość tagów ma:
OTWARCIE + TREŚĆ + ZAMKNIĘCIE`,
  },
  {
    type: "text",
    title: "Najważniejsze w HTML",
    content:
`Musisz zapamiętać 3 rzeczy:

1. HTML to struktura (co jest na stronie)
2. Tagi mówią przeglądarce co zrobić
3. Kod ≠ wygląd (wygląd robi CSS)

Jeśli to rozumiesz — masz fundament.`,
  },
  {
    type: "text",
    title: "Jak wygląda prawdziwa strona?",
    content:
`Każda strona to tak naprawdę zestaw takich elementów:

- nagłówki
- tekst
- linki
- obrazy

Wszystko to to HTML.

👉 Nawet ten tekst który teraz czytasz = HTML`,
  },
  {
    type: "code-task",
    title: "Twoje zadanie",
    content:
`Napisz własny kod HTML:

- użyj <h1> (nagłówek)
- użyj <p> (tekst)

Spróbuj napisać coś o sobie.

👉 imię
👉 co lubisz
👉 cokolwiek`,
  },
  {
    type: "quiz",
    question: "Za co odpowiada HTML?",
    answers: [
      "Za kolory strony",
      "Za strukturę strony",
      "Za animacje",
      "Za backend",
    ],
    correct: 1,
    explanation:
`HTML odpowiada za strukturę strony — czyli co znajduje się na stronie.

Kolory → CSS  
Logika → JavaScript`,
  },
]
  }

  // 🔥 LEKCJA 2
  else if (id === "2") {
   steps = [
  {
    type: "text",
    title: "Struktura strony HTML",
    content:
`Każda strona HTML ma swój szkielet.

Bez tego szkieletu:
- strona może działać źle
- przeglądarka może się pogubić

To jak budynek:
👉 najpierw konstrukcja
👉 potem wykończenie`,
  },
  {
    type: "code",
    title: "Podstawowy szablon",
    content: `<!DOCTYPE html>
<html>
<head>
  <title>Moja strona</title>
</head>
<body>

</body>
</html>`,
  },
  {
    type: "text",
    title: "DOCTYPE — co to jest?",
    content:
`<!DOCTYPE html>

To informacja dla przeglądarki:
👉 "to jest HTML5"

Jeśli tego nie ma:
- mogą być błędy
- strona może wyglądać dziwnie

👉 Zawsze dawaj na górze`,
  },
  {
    type: "text",
    title: "<html> — korzeń",
    content:
`<html> to główny element strony.

Wszystko co robisz musi być w środku.

To taki "kontener" całej strony.`,
  },
  {
    type: "text",
    title: "<head> — ustawienia",
    content:
`<head> NIE jest widoczny dla użytkownika.

Zawiera:
- tytuł strony
- meta dane
- CSS
- ustawienia

👉 użytkownik tego nie widzi`,
  },
  {
    type: "text",
    title: "<body> — NAJWAŻNIEJSZE",
    content:
`<body> to wszystko co widzi użytkownik.

Tu trafiają:
- nagłówki
- tekst
- obrazki
- linki

👉 jeśli czegoś nie ma w body — użytkownik tego nie zobaczy`,
  },
  {
    type: "code",
    title: "Pełny przykład",
    content: `<!DOCTYPE html>
<html>
<head>
  <title>Moja strona</title>
</head>
<body>
  <h1>Cześć!</h1>
  <p>To jest moja strona</p>
</body>
</html>`,
  },
  {
    type: "text",
    title: "Dlaczego to ważne?",
    content:
`Na egzaminie INF03 bardzo często:

👉 dostajesz pusty plik  
👉 masz zrobić stronę  

Jeśli znasz strukturę:
✔ robisz szybko  
✔ bez błędów  

Jeśli nie:
❌ tracisz czas  
❌ robisz błędy`,
  },
  {
    type: "text",
    title: "Najczęstsze błędy",
    content:
`❌ brak DOCTYPE  
❌ brak <html>  
❌ elementy poza <body>  
❌ brak zamknięcia tagów  

👉 egzaminator to widzi od razu`,
  },
  {
    type: "code-task",
    title: "Twoje zadanie",
    content:
`Zrób pełną stronę HTML:

- <!DOCTYPE html>
- <html>
- <head>
- <title>
- <body>
- <h1>
- <p>

👉 to jest realne zadanie egzaminacyjne`,
  },
  {
    type: "quiz",
    question: "Który element zawiera to co widzi użytkownik?",
    answers: [
      "<head>",
      "<html>",
      "<body>",
      "<title>",
    ],
    correct: 2,
    explanation:
`<body> zawiera wszystko co widzi użytkownik.

To najważniejszy element strony.`,
  },
]
  }

  else return <div>Nie znaleziono lekcji</div>

  const current = steps[step]

  // 🔥 PODSUMOWANIE
 if (completed) {
  return (
    <div className="max-w-5xl mx-auto space-y-8 px-6">

      <h1 className="text-4xl font-bold">
        📚 Podsumowanie lekcji {id}
      </h1>

      {/* ===================== */}
      {/* 🔥 LEKCJA 1 */}
      {/* ===================== */}
      {id === "1" && (
        <>
          <p className="text-lg leading-relaxed">
            W tej lekcji poznałeś absolutne podstawy HTML — języka,
            bez którego nie istnieje żadna strona internetowa.
          </p>

          <p className="text-lg leading-relaxed">
            HTML odpowiada za strukturę strony, czyli to co znajduje się
            na stronie: teksty, nagłówki, obrazy, linki.
          </p>

          <pre className="bg-muted p-4 rounded">
{`<h1>Witaj świecie</h1>
<p>To jest moja strona</p>`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            🔑 Najważniejsze rzeczy do zapamiętania
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>HTML tworzy strukturę strony</li>
            <li>Tagi mówią przeglądarce co wyświetlić</li>
            <li>Większość tagów ma otwarcie i zamknięcie</li>
            <li>&lt;h1&gt; to nagłówek, &lt;p&gt; to tekst</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            🧠 Jak o tym myśleć
          </h2>

          <p className="text-lg leading-relaxed">
            Myśl o HTML jak o szkielecie strony.
            To nie jest wygląd — to fundament.
          </p>

          <p className="text-lg leading-relaxed">
            CSS = wygląd  
            JavaScript = działanie  
            HTML = struktura
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            ⚠️ Najczęstsze błędy
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Brak zamknięcia tagu</li>
            <li>Mylenie HTML z CSS</li>
            <li>Brak struktury strony</li>
          </ul>

          <p className="text-lg leading-relaxed mt-6">
            💡 Jeśli rozumiesz tę lekcję — masz fundament pod wszystko dalej.
          </p>
        </>
      )}

      {/* ===================== */}
      {/* 🔥 LEKCJA 2 */}
      {/* ===================== */}
      {id === "2" && (
        <>
          <p className="text-lg leading-relaxed">
            W tej lekcji nauczyłeś się jak wygląda pełna struktura strony HTML.
          </p>

          <p className="text-lg leading-relaxed">
            To jedna z NAJWAŻNIEJSZYCH rzeczy w całym HTML — szczególnie na egzaminie INF03.
          </p>

          <pre className="bg-muted p-4 rounded">
{`<!DOCTYPE html>
<html>
<head>
  <title>Strona</title>
</head>
<body>
  <h1>Witaj</h1>
</body>
</html>`}
          </pre>

          <h2 className="text-2xl font-semibold mt-6">
            🔑 Najważniejsze elementy
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>&lt;!DOCTYPE html&gt; — informuje o HTML5</li>
            <li>&lt;html&gt; — cały dokument</li>
            <li>&lt;head&gt; — ustawienia (niewidoczne)</li>
            <li>&lt;body&gt; — wszystko co widzi użytkownik</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            🧠 Jak to zapamiętać
          </h2>

          <p className="text-lg leading-relaxed">
            Wyobraź sobie stronę jako budynek:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>DOCTYPE → typ budynku</li>
            <li>html → cała konstrukcja</li>
            <li>head → instalacje (niewidoczne)</li>
            <li>body → wnętrze (to co widzisz)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            ⚠️ Najczęstsze błędy
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Brak DOCTYPE</li>
            <li>Elementy poza &lt;body&gt;</li>
            <li>Brak &lt;html&gt;</li>
            <li>Niepoprawna kolejność elementów</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            🎯 Egzamin INF03
          </h2>

          <p className="text-lg leading-relaxed">
            Bardzo często dostajesz zadanie:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>stwórz stronę od zera</li>
            <li>dodaj nagłówek i tekst</li>
            <li>zrób formularz</li>
          </ul>

          <p className="text-lg leading-relaxed">
            Jeśli znasz strukturę HTML → robisz to bez stresu.
          </p>

          <p className="text-lg leading-relaxed mt-6">
            💡 To jedna z najważniejszych lekcji — wracaj do niej jeśli trzeba.
          </p>
        </>
      )}

      <Button
        className="mt-6"
        onClick={() => {
          setCompleted(false)
          setStep(0)
        }}
      >
        🔄 Powtórz lekcję
      </Button>

    </div>
  )
}

  return (
  <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 py-10">
  <div className="w-full max-w-5xl mx-auto px-6 space-y-6">

      {/* 🔥 sticky progress */}
      <div className="sticky top-0 z-50 bg-background pb-4">
        <div className="w-full bg-muted h-2 rounded">
          <div
            className="bg-primary h-2 rounded transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
<Card
  key={step}
  className="
    h-[620px] md:h-[720px]
    flex flex-col
    w-full
    rounded-2xl
    border border-border/50
    bg-background/80
    backdrop-blur
    shadow-xl
    transition-all duration-300
    animate-in fade-in slide-in-from-right-5
  "
>
       <CardHeader className="pb-2">
  <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight">
            {current.type === "quiz" ? "Test" : current.title}
          </CardTitle>
        </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-8 overflow-hidden px-6 pb-6">

          <div className="flex-1 overflow-y-auto space-y-4 pr-2">

            {current.type === "text" && (
              <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
                {current.content}
              </p>
            )}

            {current.type === "code" && (
          <pre className="
  bg-black/90 text-green-400
  p-5 rounded-xl
  text-base md:text-lg
  overflow-x-auto
  whitespace-pre-wrap
  shadow-inner
">
{current.content}
</pre>
            )}

            {current.type === "code-task" && (
              <>
                <p>{current.content}</p>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-40 p-3 border rounded bg-black text-green-400 resize-none"
                />

                <iframe
                  srcDoc={code}
                  className="w-full h-40 border rounded bg-white"
                />

                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button className="w-full py-6 text-lg rounded-xl shadow-sm hover:scale-[1.02] transition"
                      onClick={() => {
                        const ok =
                          /<h1>/.test(code) && /<p>/.test(code)
                        setResult(ok)
                        setOpen(true)
                      }}
                    >
                      Sprawdź kod
                    </Button>
                  </DrawerTrigger>

                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>
                        {result ? "✅ Dobrze!" : "❌ Błąd"}
                      </DrawerTitle>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>
              </>
            )}

            {current.type === "quiz" && (
              <>
                <p className="text-lg font-semibold">
                  {current.question}
                </p>

                {current.answers.map((a, i) => (
                  <Button className="w-full justify-start text-lg py-5 rounded-xl"
                    key={i}
                    variant={selected === i ? "default" : "outline"}
                    onClick={() => setSelected(i)}
                    
                  >
                    {a}
                  </Button>
                ))}

                <Button
                  disabled={selected === null}
                  onClick={() => setOpen(true)}
                >
                  Sprawdź
                </Button>

                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>
                        {selected === current.correct
                          ? "✅ Dobrze!"
                          : "❌ Błąd"}
                      </DrawerTitle>

                      <p>{current.explanation}</p>
                    </DrawerHeader>
                  </DrawerContent>
                </Drawer>
              </>
            )}

          </div>

          {/* NAV */}
          <div className="flex justify-between mt-auto pt-4 border-t">
            <Button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              ←
            </Button>

            {step === steps.length - 1 ? (
              <Button
                onClick={async () => {
                  setCompleted(true)

                  const { data } =
                    await supabase.auth.getUser()

                  const user = data.user
                  if (!user) return
const XP_PER_LESSON = 2

// 🔥 sprawdz czy już było
const { data: existing } = await supabase
  .from("progress")
  .select("*")
  .eq("user_id", user.id)
  .eq("course", "html")
  .eq("lesson", Number(id))

// 🔥 jeśli NIE było → dodaj XP
if (!existing || existing.length === 0) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("xp")
    .eq("id", user.id)
    .single()

  const newXp = (profile?.xp || 0) + XP_PER_LESSON
  const newLevel = Math.floor(newXp / 100) + 1

  await supabase
    .from("profiles")
    .update({
      xp: newXp,
      level: newLevel,
    })
    .eq("id", user.id)
}

// 🔥 ZAWSZE zapisz progress
await supabase.from("progress").upsert(
  {
    user_id: user.id,
    course: "html",
    lesson: Number(id),
    done: true,
  },
  {
    onConflict: "user_id,course,lesson",
  }
)
                }}
              >
                ✅
              </Button>
            ) : (
              <Button onClick={() => setStep(step + 1)}>
                →
              </Button>
            )}
          </div>

        </CardContent>
      </Card>
    </div>
    </div>
  )
}