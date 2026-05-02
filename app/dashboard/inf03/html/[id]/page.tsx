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

  // 🔥 reset przy zmianie lekcji
  useEffect(() => {
    setStep(0)
    setSelected(null)
    setCode("")
    setResult(null)
  }, [id])

  // 🔥 sprawdz progress
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
      <div className="h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Ładowanie...</p>
      </div>
    )
  }

  const steps: Step[] = htmlLessons[Number(id)]
  const summary = htmlSummaries[Number(id)]

  if (!steps) return <div>Nie znaleziono lekcji</div>

  const current = steps[step]

  // 🔥 PODSUMOWANIE
  if (completed && summary) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-6 space-y-6 text-center">

        <h1 className="text-4xl font-bold">
          {summary.title}
        </h1>

        <p className="text-lg whitespace-pre-line text-muted-foreground leading-relaxed">
          {summary.content}
        </p>

        <div className="flex gap-4 justify-center">
          <Button onClick={() => {
            setCompleted(false)
            setStep(0)
          }}>
            🔄 Powtórz
          </Button>

          <Button
            onClick={() =>
              window.location.href = `/dashboard/inf03/html/${Number(id) + 1}`
            }
          >
            ➡ Następna lekcja
          </Button>
        </div>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40 py-10">
      <div className="max-w-4xl mx-auto px-6 space-y-6">

        {/* 🔥 progress */}
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur pb-4">
          <div className="w-full bg-muted h-2 rounded">
            <div
              className="bg-primary h-2 rounded transition-all duration-500"
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <Card className="rounded-2xl shadow-xl border border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">
              {current.type === "quiz" ? "🧠 Test" : current.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">

            {/* TEXT */}
            {current.type === "text" && (
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-foreground/90">
                {current.content}
              </p>
            )}

            {/* CODE */}
            {current.type === "code" && (
              <pre className="bg-black/90 text-green-400 p-5 rounded-xl text-sm md:text-base overflow-x-auto shadow-inner">
                {current.content}
              </pre>
            )}

            {/* CODE TASK */}
            {current.type === "code-task" && (
              <div className="space-y-4">
                <p className="text-lg whitespace-pre-line">
                  {current.content}
                </p>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-40 p-4 rounded-xl bg-black text-green-400 font-mono shadow-inner"
                />

                <iframe
                  srcDoc={code}
                  className="w-full h-40 border rounded-xl bg-white"
                />

                <Button
                  className="w-full py-5 text-lg"
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

            {/* QUIZ */}
            {current.type === "quiz" && (
              <div className="space-y-4">
                <p className="text-lg font-semibold">
                  {current.question}
                </p>

                {current.answers.map((a, i) => (
                  <Button
                    key={i}
                    variant={selected === i ? "default" : "outline"}
                    className="w-full justify-start py-5 text-lg rounded-xl"
                    onClick={() => setSelected(i)}
                  >
                    {a}
                  </Button>
                ))}

                <Button
                  disabled={selected === null}
                  onClick={() => setOpen(true)}
                  className="w-full py-5 text-lg"
                >
                  Sprawdź
                </Button>
              </div>
            )}

            {/* NAV */}
            <div className="flex justify-between pt-4 border-t">
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

                    const { data } =
                      await supabase.auth.getUser()
                    const user = data.user
                    if (!user) return

                    const XP_PER_LESSON = 2

                    // 🔥 czy już było?
                    const { data: existing } = await supabase
                      .from("progress")
                      .select("*")
                      .eq("user_id", user.id)
                      .eq("course", "html")
                      .eq("lesson", Number(id))

                    if (!existing || existing.length === 0) {
                      const { data: profile } = await supabase
                        .from("profiles")
                        .select("xp")
                        .eq("id", user.id)
                        .single()

                      const newXp = (profile?.xp || 0) + XP_PER_LESSON
                      const newLevel = Math.floor(newXp / 50) + 1

                      await supabase
                        .from("profiles")
                        .update({
                          xp: newXp,
                          level: newLevel,
                        })
                        .eq("id", user.id)
                    }

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
                  ✅ Zakończ
                </Button>
              ) : (
                <Button onClick={() => setStep(step + 1)}>
                  Dalej →
                </Button>
              )}
            </div>

          </CardContent>
        </Card>

        {/* DRAWER */}
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                {current.type === "quiz"
                  ? selected === current.correct
                    ? "✅ Dobrze!"
                    : "❌ Błąd"
                  : result
                  ? "✅ Dobrze!"
                  : "❌ Spróbuj jeszcze raz"}
              </DrawerTitle>

              {current.type === "quiz" && (
                <p className="text-sm text-muted-foreground mt-2">
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