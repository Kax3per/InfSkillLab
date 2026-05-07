"use client"

import { use, useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { supabase } from "@/lib/supabase"

import {
  validateHtml,
  validateQuiz,
} from "@/lib/lessons/html/validate"

import {
  htmlLessons,
  htmlSummaries,
} from "@/lib/lessons/html"

import { Step } from "@/lib/types"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

import { Progress } from "@/components/ui/progress"

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Trophy,
  XCircle,
} from "lucide-react"

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const lessonId = Number(id)

  const [step, setStep] = useState(0)

  const [selected, setSelected] =
    useState<number | null>(null)

  const [open, setOpen] = useState(false)

  const [code, setCode] = useState("")

  const [result, setResult] =
    useState<boolean | null>(null)

  const [validationErrors, setValidationErrors] =
    useState<string[]>([])

  const [quizMessage, setQuizMessage] =
    useState("")

  const [completed, setCompleted] =
    useState(false)

  const [loading, setLoading] =
    useState(true)

  const steps: Step[] =
    htmlLessons[lessonId] || []

  const summary =
    htmlSummaries[lessonId]

  const current = steps[step]

  const progress = useMemo(() => {
    if (!steps.length) return 0

    return ((step + 1) / steps.length) * 100
  }, [step, steps.length])

  // RESET
  useEffect(() => {
    setStep(0)
    setSelected(null)
    setResult(null)
    setValidationErrors([])
    setQuizMessage("")

    const saved = localStorage.getItem(
      `lesson-${lessonId}-code`
    )

    if (saved) {
      setCode(saved)
    } else {
      setCode("")
    }
  }, [lessonId])

  // CHECK PROGRESS
  useEffect(() => {
    const checkProgress = async () => {
      try {
        const { data } =
          await supabase.auth.getUser()

        const user = data.user

        if (!user) {
          setLoading(false)
          return
        }

        const { data: progressData } =
          await supabase
            .from("progress")
            .select("*")
            .eq("user_id", user.id)
            .eq("course", "html")
            .eq("lesson", lessonId)

        if (
          progressData &&
          progressData.length > 0
        ) {
          setCompleted(true)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    checkProgress()
  }, [lessonId])

  // AUTOSAVE
  useEffect(() => {
    localStorage.setItem(
      `lesson-${lessonId}-code`,
      code
    )
  }, [code, lessonId])

  // VALIDATE CODE
const handleCodeValidation = () => {

  let validation

  // LEKCJA 1
  if (lessonId === 1) {

    validation = validateHtml(code, [
      "h1",
      "p",
    ])
  }

  // LEKCJA 2
  else if (lessonId === 2) {

    validation = validateHtml(code, [
      "!DOCTYPE",
      "html",
      "head",
      "title",
      "body",
      "h1",
      "p",
    ])
  }

  // LEKCJA 3
  else if (lessonId === 3) {

    validation = validateHtml(code, [
      "h1",
      "h2",
      "p",
      "strong",
    ])
  }

  // LEKCJA 4
  else if (lessonId === 4) {

    validation = validateHtml(code, [
      "h1",
      "p",
      "a",
    ])

    const errors = validation.errors

    if (!code.includes('target="_blank"')) {
      errors.push(
        "Brakuje linku otwierającego się w nowej karcie."
      )
    }

    validation = {
      success: errors.length === 0,
      errors,
    }
  }

  // LEKCJA 5
  else if (lessonId === 5) {

    validation = validateHtml(code, [
      "h1",
      "p",
      "img",
    ])

    const errors = validation.errors

    if (!code.includes("alt=")) {
      errors.push(
        "Brakuje atrybutu alt."
      )
    }

    if (
      !code.includes("width=") &&
      !code.includes("style=")
    ) {
      errors.push(
        "Brakuje ustawionej szerokości obrazka."
      )
    }

    validation = {
      success: errors.length === 0,
      errors,
    }
  }

  // LEKCJA 6
  else if (lessonId === 6) {

    validation = validateHtml(code, [
      "h1",
      "ul",
      "ol",
      "li",
    ])

    const errors = validation.errors

    const liCount =
      (code.match(/<li>/g) || []).length

    if (liCount < 6) {
      errors.push(
        "Musisz dodać minimum 6 elementów <li>."
      )
    }

    validation = {
      success: errors.length === 0,
      errors,
    }
  }

  // LEKCJA 7
  else if (lessonId === 7) {

    validation = validateHtml(code, [
      "header",
      "nav",
      "main",
      "section",
      "footer",
      "h1",
      "p",
    ])
  }

  // LEKCJA 8
  else if (lessonId === 8) {

    validation = validateHtml(code, [
      "table",
      "tr",
      "th",
      "td",
    ])

    const errors = validation.errors

    const trCount =
      (code.match(/<tr>/g) || []).length

    const thCount =
      (code.match(/<th>/g) || []).length

    const tdCount =
      (code.match(/<td>/g) || []).length

    if (trCount < 3) {
      errors.push(
        "Tabela musi mieć minimum 3 wiersze."
      )
    }

    if (thCount < 2) {
      errors.push(
        "Tabela musi mieć minimum 2 nagłówki <th>."
      )
    }

    if (tdCount < 4) {
      errors.push(
        "Tabela musi mieć minimum 4 komórki <td>."
      )
    }

    validation = {
      success: errors.length === 0,
      errors,
    }
  }

  // LEKCJA 9
  else if (lessonId === 9) {

    validation = validateHtml(code, [
      "form",
      "input",
      "button",
    ])

    const errors = validation.errors

    if (
      !code.includes('type="text"')
    ) {
      errors.push(
        "Brakuje pola tekstowego."
      )
    }

    if (
      !code.includes('type="email"')
    ) {
      errors.push(
        "Brakuje pola email."
      )
    }

    if (
      !code.includes('type="password"')
    ) {
      errors.push(
        "Brakuje pola hasła."
      )
    }

    if (
      !code.includes('type="checkbox"')
    ) {
      errors.push(
        "Brakuje checkboxa."
      )
    }

    validation = {
      success: errors.length === 0,
      errors,
    }
  }

  // LEKCJA 10
  else if (lessonId === 10) {

    validation = validateHtml(code, [
      "h1",
      "video",
      "iframe",
    ])

    const errors = validation.errors

    if (!code.includes("controls")) {
      errors.push(
        "Brakuje controls w video."
      )
    }

    if (!code.includes("autoplay")) {
      errors.push(
        "Brakuje autoplay."
      )
    }

    if (!code.includes("muted")) {
      errors.push(
        "Brakuje muted."
      )
    }

    if (
      !code.includes("youtube.com") &&
      !code.includes("youtu.be")
    ) {
      errors.push(
        "Brakuje filmu YouTube w iframe."
      )
    }

    validation = {
      success: errors.length === 0,
      errors,
    }
  }

  // DOMYŚLNIE
  else {

    validation = {
      success: true,
      errors: [],
    }
  }

  setValidationErrors(
    validation.errors
  )

  setResult(validation.success)

  setOpen(true)
}


  // VALIDATE QUIZ
  const handleQuizValidation = () => {
    if (current.type !== "quiz") return

    const validation = validateQuiz(
      selected,
      current.correct
    )

    setResult(validation.success)

    setQuizMessage(validation.message)

    setOpen(true)
  }

  // FINISH LESSON
  const handleFinishLesson = async () => {
    try {
      const { data } =
        await supabase.auth.getUser()

      const user = data.user

      if (!user) return

      const { data: existing } =
        await supabase
          .from("progress")
          .select("*")
          .eq("user_id", user.id)
          .eq("course", "html")
          .eq("lesson", lessonId)

      if (!existing || existing.length === 0) {
        await supabase.from("progress").insert({
          user_id: user.id,
          course: "html",
          lesson: lessonId,
        })

        const { data: profile } =
          await supabase
            .from("profiles")
            .select("xp")
            .eq("id", user.id)
            .single()

        const currentXP =
          profile?.xp || 0

        await supabase
          .from("profiles")
          .update({
            xp: currentXP + 2,
          })
          .eq("id", user.id)
      }

      setCompleted(true)
    } catch (error) {
      console.error(error)
    }
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-black dark:text-white">
        Ładowanie...
      </div>
    )
  }

  if (!steps.length) {
    return (
      <div className="h-screen flex items-center justify-center text-black dark:text-white">
        Nie znaleziono lekcji
      </div>
    )
  }

  // SUMMARY
  if (completed && summary) {
    return (
      <div className="min-h-full flex items-center justify-center p-6">

        <Card className="w-full max-w-5xl rounded-[32px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-2xl overflow-hidden">

          <div className="h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />

          <CardContent className="p-8 md:p-10 space-y-8">

            <div className="flex flex-col lg:flex-row gap-8 lg:items-center">

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-blue-500" />
                </div>

                <div>
                  <p className="text-sm text-black/50 dark:text-white/40">
                    Lekcja ukończona
                  </p>

                  <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                    Podsumowanie
                  </h1>
                </div>

              </div>

              <div className="flex gap-4 lg:ml-auto">

                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 min-w-[140px]">
                  <p className="text-sm text-black/50 dark:text-white/40">
                    Lekcja
                  </p>

                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    #{lessonId}
                  </h3>
                </div>

                <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-4 min-w-[140px]">
                  <p className="text-sm text-black/50 dark:text-white/40">
                    XP
                  </p>

                  <h3 className="text-3xl font-bold text-green-500">
                    +2
                  </h3>
                </div>

              </div>

            </div>

            <Card className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.03]">

              <CardContent className="p-6 md:p-8">

                <p className="text-lg leading-8 whitespace-pre-line text-black/70 dark:text-white/70">
                  {summary.content}
                </p>

              </CardContent>

            </Card>

            <div className="flex flex-col md:flex-row gap-4">

              <Button
                onClick={() => {
                  setCompleted(false)
                  setStep(0)
                }}
                className="flex-1 h-14 rounded-2xl"
              >
                🔄 Powtórz lekcję
              </Button>

              <Link
                href={`/dashboard/inf03/html/${lessonId + 1}`}
                className="flex-1"
              >
                <Button className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700">
                  Następna lekcja
                </Button>
              </Link>

            </div>

          </CardContent>

        </Card>

      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden text-black dark:text-white">

      <div
        className="
          h-full
          max-w-7xl
          mx-auto
          px-4
          md:px-6
          py-4
          flex
          flex-col
          gap-4
          overflow-hidden
        "
      >

        {/* TOPBAR */}
        <div className="shrink-0 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/60 backdrop-blur-2xl p-5">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-4">

            <div>
              <p className="text-sm text-black/50 dark:text-white/40">
                Lekcja {lessonId}
              </p>

              <h1 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                {current.type === "quiz"
                  ? "🧠 Quiz"
                  : current.title}
              </h1>
            </div>

            <div>
              <p className="text-sm text-black/50 dark:text-white/40">
                Postęp
              </p>

              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {Math.round(progress)}%
              </p>
            </div>

          </div>

          <Progress value={progress} />

        </div>

        {/* MAIN CARD */}
        <Card
          className="
            flex
            flex-col
            flex-1
            min-h-0
            overflow-hidden
            rounded-[32px]
            border
            border-black/10
            dark:border-white/10
            bg-white/70
            dark:bg-black/50
            backdrop-blur-2xl
            shadow-2xl
          "
        >

          {/* SCROLL */}
          <div className="flex-1 min-h-0 overflow-y-auto">

            <CardContent className="p-4 md:p-6 lg:p-8 pb-32">

              {/* TEXT */}
              {current.type === "text" && (
                <div className="max-w-4xl mx-auto text-[16px] md:text-[17px] leading-8 whitespace-pre-line text-black/80 dark:text-white/80">
                  {current.content}
                </div>
              )}

              {/* CODE */}
              {current.type === "code" && (
                <pre className="bg-[#0B1120] text-green-400 p-5 md:p-8 rounded-3xl overflow-x-auto text-sm md:text-base border border-white/10 leading-7">
                  {current.content}
                </pre>
              )}

              {/* CODE TASK */}
              {current.type === "code-task" && (
                <div className="space-y-8">

                  <div className="rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-6 md:p-8">

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      Zadanie
                    </p>

                    <div className="text-lg whitespace-pre-line leading-8 text-black/80 dark:text-white/80">
                      {current.content}
                    </div>

                  </div>

                  <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

                    {/* EDITOR */}
                    <div className="2xl:col-span-5 flex flex-col gap-4">

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-sm text-black/50 dark:text-white/40">
                            Edytor HTML
                          </p>

                          <h3 className="text-xl font-semibold">
                            index.html
                          </h3>
                        </div>

                        <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-medium">
                          ● Live
                        </div>

                      </div>

                      <div className="rounded-[28px] overflow-hidden border border-white/10 bg-[#0B1120] shadow-2xl">

                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/20">

                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>

                          <div className="text-xs text-white/40">
                            HTML
                          </div>

                        </div>

                        <textarea
                          value={code}
                          onChange={(e) =>
                            setCode(e.target.value)
                          }
                          spellCheck={false}
                          className="
                            w-full
                            h-[45vh]
                            2xl:h-[60vh]
                            bg-[#0B1120]
                            text-blue-400
                            font-mono
                            text-[15px]
                            leading-7
                            p-5
                            resize-none
                            outline-none
                          "
                        />

                      </div>

                    </div>

                    {/* PREVIEW */}
                    <div className="2xl:col-span-7 flex flex-col gap-4">

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-sm text-black/50 dark:text-white/40">
                            Podgląd strony
                          </p>

                          <h3 className="text-xl font-semibold">
                            localhost
                          </h3>
                        </div>

                        <Button
                          onClick={() => {
                            const newWindow =
                              window.open()

                            if (newWindow) {
                              newWindow.document.write(code)
                              newWindow.document.close()
                            }
                          }}
                        >
                          🌍 Otwórz
                        </Button>

                      </div>

                      <div className="rounded-[28px] overflow-hidden border border-black/10 dark:border-white/10 bg-white shadow-2xl">

                        <div className="flex items-center gap-3 px-4 py-3 border-b bg-neutral-100">

                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />

                          <div className="flex-1 h-9 rounded-xl bg-white border flex items-center px-4 text-sm text-neutral-500">
                            localhost:3000
                          </div>

                        </div>

                        <iframe
                          srcDoc={code}
                          title="preview"
                          className="w-full h-[45vh] 2xl:h-[60vh] bg-white"
                        />

                      </div>

                    </div>

                  </div>

                  <Button
                    onClick={handleCodeValidation}
                    className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold"
                  >
                    ✅ Sprawdź kod
                  </Button>

                </div>
              )}

              {/* QUIZ */}
              {current.type === "quiz" && (
                <div className="max-w-4xl mx-auto space-y-8">

                  <div className="p-6 md:p-8 rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03]">

                    <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      Quiz
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold leading-relaxed text-black dark:text-white">
                      {current.question}
                    </h2>

                  </div>

                  <div className="space-y-4">

                    {current.answers.map(
                      (answer, index) => {
                        const active =
                          selected === index

                        return (
                          <button
                            key={index}
                            onClick={() =>
                              setSelected(index)
                            }
                            className={`
                              w-full
                              text-left
                              rounded-[28px]
                              border
                              p-5 md:p-6
                              transition-all

                              ${
                                active
                                  ? `
                                    border-blue-500
                                    bg-blue-500/10
                                  `
                                  : `
                                    border-black/10 dark:border-white/10
                                    bg-white/70 dark:bg-white/[0.03]
                                  `
                              }
                            `}
                          >

                            <div className="flex items-start gap-4">

                              <div
                                className={`
                                  w-11 h-11
                                  rounded-2xl
                                  flex items-center justify-center
                                  font-bold
                                  shrink-0

                                  ${
                                    active
                                      ? `
                                        bg-blue-600
                                        text-white
                                      `
                                      : `
                                        bg-black/5 dark:bg-white/10
                                        text-black dark:text-white
                                      `
                                  }
                                `}
                              >
                                {String.fromCharCode(
                                  65 + index
                                )}
                              </div>

                              <div
                                className={`
                                  flex-1
                                  text-base md:text-lg
                                  leading-7

                                  ${
                                    active
                                      ? `
                                        text-blue-700 dark:text-blue-300
                                        font-medium
                                      `
                                      : `
                                        text-black dark:text-white
                                      `
                                  }
                                `}
                              >
                                {answer}
                              </div>

                            </div>

                          </button>
                        )
                      }
                    )}

                  </div>

                  <Button
                    disabled={selected === null}
                    onClick={
                      handleQuizValidation
                    }
                    className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Sprawdź odpowiedź
                  </Button>

                </div>
              )}

            </CardContent>

          </div>

          {/* BOTTOM NAV */}
          <div
            className="
              shrink-0
              border-t
              border-black/10
              dark:border-white/10
              bg-white/80
              dark:bg-black/80
              backdrop-blur-xl
              p-4
              flex
              items-center
              justify-between
            "
          >

            <Button
              disabled={step === 0}
              onClick={() =>
                setStep(step - 1)
              }
              className="
                h-14
                px-8
                rounded-2xl
                bg-blue-600
                hover:bg-blue-700
                text-white
              "
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wstecz
            </Button>

            {step === steps.length - 1 ? (
              <Button
                onClick={handleFinishLesson}
                className="
                  h-14
                  px-8
                  rounded-2xl
                  bg-green-600
                  hover:bg-green-700
                  text-white
                "
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Zakończ
              </Button>
            ) : (
              <Button
                onClick={() =>
                  setStep(step + 1)
                }
                className="
                  h-14
                  px-8
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                "
              >
                Dalej
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}

          </div>

        </Card>

      </div>

      {/* DRAWER */}
      <Drawer
        open={open}
        onOpenChange={setOpen}
      >

        <DrawerContent className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">

          <DrawerHeader className="max-w-2xl mx-auto w-full py-8">

            {/* CODE */}
            {current.type === "code-task" && (
              <>

                <DrawerTitle className="text-3xl flex items-center gap-3">

                  {result ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                      Poprawnie
                    </>
                  ) : (
                    <>
                      <XCircle className="w-8 h-8 text-red-500" />
                      Błędy w kodzie
                    </>
                  )}

                </DrawerTitle>

                {!result && (
                  <div className="mt-6 space-y-3">

                    {validationErrors.map(
                      (error, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500"
                        >
                          ❌ {error}
                        </div>
                      )
                    )}

                  </div>
                )}

                {result && (
                  <div className="mt-6 p-5 rounded-3xl bg-green-500/10 border border-green-500/20 text-green-500">
                    🎉 Świetnie! Kod wygląda poprawnie.
                  </div>
                )}

              </>
            )}

            {/* QUIZ */}
            {current.type === "quiz" && (
              <>

                <DrawerTitle className="text-3xl flex items-center gap-3">

                  {result ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                      Dobra odpowiedź
                    </>
                  ) : (
                    <>
                      <XCircle className="w-8 h-8 text-red-500" />
                      Niepoprawna odpowiedź
                    </>
                  )}

                </DrawerTitle>

                <div
                  className={`
                    mt-6
                    p-5
                    rounded-3xl
                    border
                    text-lg

                    ${
                      result
                        ? `
                          bg-green-500/10
                          border-green-500/20
                          text-green-500
                        `
                        : `
                          bg-red-500/10
                          border-red-500/20
                          text-red-500
                        `
                    }
                  `}
                >
                  {quizMessage}
                </div>

                <div className="mt-4 text-black/60 dark:text-white/60 leading-7">
                  {current.explanation}
                </div>

              </>
            )}

          </DrawerHeader>

        </DrawerContent>

      </Drawer>

    </div>
  )
}