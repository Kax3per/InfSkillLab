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
} from "@/components/ui/drawer"

import { htmlLessons, htmlSummaries } from "@/lib/lessons/html"
import { Step } from "@/lib/types"

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

  useEffect(() => {
    setStep(0)
    setSelected(null)
    setCode("")
    setResult(null)
  }, [id])

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

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
        <p className="text-black/60 dark:text-white/60">Ładowanie...</p>
      </div>
    )
  }

  const steps: Step[] = htmlLessons[Number(id)]
  const summary = htmlSummaries[Number(id)]

  if (!steps) return <div>Nie znaleziono lekcji</div>

  const current = steps[step]

  if (completed && summary) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-6 text-black dark:text-white overflow-hidden bg-white dark:bg-black">

        {/* LIGHT blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <div className="absolute -top-25 -left-25 w-75 h-75 bg-blue-400/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-25 -right-25 w-75 h-75 bg-blue-500/30 rounded-full blur-3xl"></div>
        </div>

        {/* DARK glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-500/20 blur-3xl rounded-full"></div>
        </div>

        <div className="max-w-2xl w-full text-center space-y-6">

          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
            {summary.title}
          </h1>

          <p className="text-lg text-black/70 dark:text-white/70 whitespace-pre-line leading-relaxed">
            {summary.content}
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <Button
              onClick={() => {
                setCompleted(false)
                setStep(0)
              }}
              className="bg-white dark:bg-black border border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
            >
              🔄 Powtórz
            </Button>

            <Button
              onClick={() =>
                window.location.href = `/dashboard/inf03/html/${Number(id) + 1}`
              }
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              ➡ Następna lekcja
            </Button>
          </div>

        </div>
      </div>
    )
  }

  return (
<div className="relative min-h-screen py-10 text-black dark:text-white bg-white dark:bg-black overflow-hidden">

  {/* 🔵 BACKGROUND BLOBS (ZAWSZE WIDOCZNE) */}
  <div className="absolute inset-0 z-0 pointer-events-none">

    {/* LIGHT */}
    <div className="dark:hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500 opacity-30 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-blue-300 opacity-30 rounded-full blur-[120px]" />
    </div>

    {/* DARK */}
    <div className="hidden dark:block">
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-[140px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600 opacity-20 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-blue-400 opacity-20 rounded-full blur-[140px]" />
    </div>

  </div>

  {/* 🔥 TWOJA CAŁA ZAWARTOŚĆ */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-6">

        {/* progress */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur pb-4">
          <div className="w-full bg-black/10 dark:bg-white/10 h-2 rounded">
            <div
              className="bg-blue-600 h-2 rounded transition-all duration-500"
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
<Card className="rounded-2xl shadow-xl border border-black/10 dark:border-white/10 
bg-white/80 dark:bg-black/60 backdrop-blur 
w-full max-w-6xl mx-auto min-h-[65vh] flex flex-col justify-between">
        <CardHeader className="shrink-0">
            <CardTitle className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400">
              {current.type === "quiz" ? "🧠 Test" : current.title}
            </CardTitle>
          </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between space-y-6 overflow-hidden">
            {current.type === "text" && (
            <p className="text-lg leading-relaxed whitespace-pre-line 
max-h-[200px] overflow-hidden">
                {current.content}
              </p>
            )}

            {current.type === "code" && (
              <pre className="bg-black text-green-400 p-5 rounded-xl text-sm md:text-base overflow-x-auto">
                {current.content}
              </pre>
            )}

            {current.type === "code-task" && (
              <div className="space-y-4">
                <p className="text-lg whitespace-pre-line">
                  {current.content}
                </p>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-40 p-4 rounded-xl bg-black text-blue-400 font-mono border-2"
                />

                <iframe
                  srcDoc={code}
                  className="w-full h-40 border rounded-xl bg-white"
                />

                <Button
                  className="w-full py-5 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    const ok =
                      /<h1>/.test(code) && /<p>/.test(code)
                    setResult(ok)
                    setOpen(true)
                  }}
                >
                  Sprawdź kod
                </Button>
              </div>
            )}

            {current.type === "quiz" && (
              <div className="space-y-4">
                <p className="text-lg font-semibold">
                  {current.question}
                </p>

                {current.answers.map((a, i) => (
 <Button
  key={i}
  onClick={() => setSelected(i)}
  className={`w-full justify-start py-5 text-lg rounded-xl border transition-all ${
    selected === i
      ? "bg-blue-100 dark:bg-blue-500/20 border-blue-400 text-blue-900 dark:text-white font-medium"
      : "bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-500/10"
  }`}
>
  {a}
</Button>
                ))}

                <Button
                  disabled={selected === null}
                  onClick={() => setOpen(true)}
                  className="w-full py-5 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sprawdź
                </Button>
              </div>
            )}

            <div className="flex justify-between pt-4 border-t border-black/10 dark:border-white/10">
          <Button
  disabled={step === 0}
  onClick={() => setStep(step - 1)}
  className="px-5 py-2 rounded-lg border 
  border-black/20 dark:border-white/20 
  bg-white dark:bg-black 
  text-black dark:text-white 
  hover:bg-black/5 dark:hover:bg-white/10 
  disabled:opacity-40 disabled:cursor-not-allowed"
>
  ← Wstecz
</Button>

              {step === steps.length - 1 ? (
                <Button
                  onClick={async () => {
                    setCompleted(true)
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  ✅ Zakończ
                </Button>
              ) : (
                <Button
                  onClick={() => setStep(step + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Dalej →
                </Button>
              )}

            </div>

          </CardContent>
        </Card>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
            <DrawerHeader>
              <DrawerTitle className="text-blue-600 dark:text-blue-400">
                {current.type === "quiz"
                  ? selected === current.correct
                    ? "✅ Dobrze!"
                    : "❌ Błąd"
                  : result
                  ? "✅ Dobrze!"
                  : "❌ Spróbuj jeszcze raz"}
              </DrawerTitle>

              {current.type === "quiz" && (
                <p className="text-sm text-black/60 dark:text-white/60 mt-2">
                  {current.explanation}
                </p>
              )}
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

      </div>
    </div>
  )
}