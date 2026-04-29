"use client"
import { supabase } from "@/lib/supabase"
import { useState, useEffect } from "react"
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
  | { type: "task"; title: string; content: string }
  | { type: "code-task"; title: string; content: string }
  | {
      type: "quiz"
      question: string
      answers: string[]
      correct: number
    }

export default function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState("")
  const [result, setResult] = useState<null | boolean>(null)
  const [completed, setCompleted] = useState(false)

  // 🔥 wczytanie progresu
  useEffect(() => {
    const progress = localStorage.getItem("html-lesson-1")
    if (progress === "done") {
      setCompleted(true)
    }
  }, [])

  if (id !== "1") return <div>Nie znaleziono lekcji</div>

const steps: Step[] = [
  {
    type: "text",
    title: "Czym jest HTML?",
    content:
      "HTML (HyperText Markup Language) to podstawowy język każdej strony internetowej. Bez HTML nie istnieje żadna strona."
  },
  {
    type: "text",
    title: "Jak działa HTML?",
    content:
      "Przeglądarka czyta HTML i zamienia go na widok strony. To co piszesz w kodzie, użytkownik widzi jako stronę."
  },
  {
    type: "code",
    title: "Twój pierwszy kod",
    content: `<h1>Witaj świecie</h1>\n<p>To jest moja strona</p>`
  },
  {
    type: "text",
    title: "Rozbicie kodu",
    content:
      "<h1> to nagłówek\n<p> to tekst\nKażdy tag ma otwarcie i zamknięcie"
  },
  {
    type: "text",
    title: "Tagi HTML",
    content:
      "HTML używa tagów jak <h1>, <p>, <a>, <img>. Każdy ma swoje zastosowanie."
  },
  {
    type: "text",
    title: "HTML5 vs stare HTML",
    content:
      "HTML5 wprowadził nowe znaczniki jak <header>, <section>, <footer>. Wcześniej wszystko robiło się na <div>."
  },
  {
    type: "text",
    title: "Dlaczego to ważne?",
    content:
      "Na egzaminie INF03 HTML to podstawa. Musisz umieć budować strukturę strony i formularze."
  },
  {
    type: "code-task",
    title: "Twoje zadanie",
    content:
      "Napisz kod HTML z nagłówkiem <h1> i paragrafem <p>"
  },
  {
    type: "quiz",
    question: "Co oznacza HTML?",
    answers: [
      "Hyper Tool Markup Language",
      "Hyper Text Markup Language",
      "Home Text Machine Language",
      "High Text Markup Language"
    ],
    correct: 1
  }
]

  const current = steps[step]

  // 🔥 po ukończeniu pokazuje podsumowanie
  if (completed) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold">📚 Podsumowanie lekcji</h1>

        <p>
          HTML to język do tworzenia stron internetowych. Używa tagów takich jak
          &lt;h1&gt; i &lt;p&gt;.
        </p>

        <pre className="bg-muted p-4 rounded">
{`<h1>Witaj świecie</h1>
<p>To jest moja strona</p>`}
        </pre>

        <p>
          HTML5 wprowadził nowe znaczniki jak &lt;header&gt;, &lt;section&gt;, &lt;footer&gt;.
        </p>

        <Button
          onClick={() => {
            setCompleted(false)
            setStep(0)
            localStorage.removeItem("html-lesson-1")
          }}
        >
          🔄 Powtórz lekcję
        </Button>

      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">

      {/* 🔥 progress */}
      <div className="w-full bg-muted h-2 rounded">
        <div
          className="bg-primary h-2 rounded transition-all"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {current.type === "quiz" ? "Test" : current.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">

          {/* TEXT */}
          {current.type === "text" && (
            <p className="text-lg">{current.content}</p>
          )}

          {/* CODE */}
          {current.type === "code" && (
            <pre className="bg-black text-green-400 p-4 rounded">
{current.content}
            </pre>
          )}

          {/* CODE TASK */}
          {current.type === "code-task" && (
            <div className="space-y-4">

              <p>{current.content}</p>

              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-40 p-3 border rounded bg-black text-green-400 font-mono"
              />

              {/* PREVIEW */}
              <iframe
                srcDoc={code}
                className="w-full h-40 border rounded bg-white"
              />

              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button
                    onClick={() => {
                      const isCorrect =
                        /<h1>.*<\/h1>/.test(code) &&
                        /<p>.*<\/p>/.test(code)

                      setResult(isCorrect)
                      setOpen(true)
                    }}
                  >
                    Sprawdź kod
                  </Button>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      {result ? "✅ Dobrze!" : "❌ Spróbuj jeszcze raz"}
                    </DrawerTitle>

                    <p>
                      {result
                        ? "Kod jest poprawny 🔥"
                        : "Dodaj poprawne <h1> i <p>"}
                    </p>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>

            </div>
          )}

          {/* QUIZ */}
          {current.type === "quiz" && (
            <div className="space-y-3">

              <p>{current.question}</p>

              {current.answers.map((a, i) => (
                <Button
                  key={i}
                  variant={selected === i ? "default" : "outline"}
                  onClick={() => setSelected(i)}
                  className="w-full justify-start"
                >
                  {a}
                </Button>
              ))}

              <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                  <Button
                    disabled={selected === null}
                    onClick={() => setOpen(true)}
                  >
                    Sprawdź odpowiedź
                  </Button>
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>
                      {selected === current.correct
                        ? "✅ Dobrze!"
                        : "❌ Błąd"}
                    </DrawerTitle>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>

            </div>
          )}

          {/* NAV */}
          <div className="flex justify-between pt-4">

            <Button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              ← Wstecz
            </Button>

            {step === steps.length - 1 ? (
       <Button
  onClick={async () => {
    setCompleted(true)

    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user

    if (!user) return

    await supabase.from("progress").upsert({
      user_id: user.id,
      course: "html",
      lesson: Number(id),
      done: true,
    })
  }}
>
  ✅ Ukończ
</Button>
            ) : (
              <Button
                onClick={() => {
                  setStep(step + 1)
                  setSelected(null)
                  setCode("")
                }}
              >
                Następna →
              </Button>
            )}

          </div>

        </CardContent>
      </Card>

    </div>
  )
}