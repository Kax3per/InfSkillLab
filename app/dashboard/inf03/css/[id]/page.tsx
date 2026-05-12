"use client"

import {
  use,
  useEffect,
  useMemo,
  useState,
} from "react"

import Link from "next/link"

import { supabase } from "@/lib/supabase"

import {
  validateCss,
  validateQuiz,
} from "@/lib/lessons/css/validateCss"

import {
  cssLessons,
  cssSummaries,
} from "@/lib/lessons/css/indexCss"

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
  XCircle,
  Trophy,
} from "lucide-react"

export default function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = use(params)

  const lessonId = Number(id)

  const [step, setStep] =
    useState(0)

  const [selected, setSelected] =
    useState<number | null>(null)

  const [open, setOpen] =
    useState(false)

  const [code, setCode] =
    useState("")

  const [result, setResult] =
    useState<boolean | null>(null)

  const [
    validationErrors,
    setValidationErrors,
  ] = useState<string[]>([])

  const [quizMessage, setQuizMessage] =
    useState("")

  const [completed, setCompleted] =
    useState(false)

  const [loading, setLoading] =
    useState(true)

  const steps: Step[] =
    cssLessons[lessonId] || []

  const summary =
    cssSummaries[lessonId]

  const current = steps[step]

  const progress = useMemo(() => {

    if (!steps.length) return 0

    return (
      ((step + 1) /
        steps.length) *
      100
    )

  }, [step, steps.length])

  // RESET
  useEffect(() => {

    setStep(0)

    setSelected(null)

    setResult(null)

    setValidationErrors([])

    setQuizMessage("")

    const saved =
      localStorage.getItem(
        `css-lesson-${lessonId}-code`
      )

    if (saved) {
      setCode(saved)
    } else {
      setCode("")
    }

  }, [lessonId])

  // AUTOSAVE
  useEffect(() => {

    localStorage.setItem(
      `css-lesson-${lessonId}-code`,
      code
    )

  }, [code, lessonId])

  // CHECK PROGRESS
  useEffect(() => {

    const checkProgress =
      async () => {

        try {

          const { data } =
            await supabase.auth.getUser()

          const user =
            data.user

          if (!user) {

            setLoading(false)

            return
          }

          const {
            data: progressData,
          } = await supabase
            .from("progress")
            .select("*")
            .eq(
              "user_id",
              user.id
            )
            .eq(
              "course",
              "css"
            )
            .eq(
              "lesson",
              lessonId
            )

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

  // VALIDATE
  const handleCodeValidation =
    () => {

      let validation

      if (lessonId === 1) {

        validation =
          validateCss(code, [
            "color",
          ])
      }

      else if (
        lessonId === 2
      ) {

        validation =
          validateCss(code, [
            "<style>",
            "background",
            "color",
          ])
      }

      else if (
        lessonId === 3
      ) {

        validation =
          validateCss(code, [
            "font-size",
            "font-weight",
          ])
      }

      else if (
        lessonId === 4
      ) {

        validation =
          validateCss(code, [
            "margin",
            "padding",
          ])
      }

      else if (
        lessonId === 5
      ) {

        validation =
          validateCss(code, [
            "border",
            "border-radius",
          ])
      }

      else {

        validation = {
          success: true,
          errors: [],
        }
      }

      setValidationErrors(
        validation.errors
      )

      setResult(
        validation.success
      )

      setOpen(true)
    }

  // QUIZ
  const handleQuizValidation =
    () => {

      if (
        current.type !==
        "quiz"
      ) return

      const validation =
        validateQuiz(
          selected,
          current.correct
        )

      setResult(
        validation.success
      )

      setQuizMessage(
        validation.message
      )

      setOpen(true)
    }

  // FINISH
  const handleFinishLesson =
    async () => {

      try {

        const { data } =
          await supabase.auth.getUser()

        const user =
          data.user

        if (!user) return

        const {
          data: existing,
        } = await supabase
          .from("progress")
          .select("*")
          .eq(
            "user_id",
            user.id
          )
          .eq(
            "course",
            "css"
          )
          .eq(
            "lesson",
            lessonId
          )

        if (
          !existing ||
          existing.length === 0
        ) {

          await supabase
            .from("progress")
            .insert({
              user_id:
                user.id,
              course:
                "css",
              lesson:
                lessonId,
            })

          const {
            data: profile,
          } = await supabase
            .from("profiles")
            .select("xp")
            .eq(
              "id",
              user.id
            )
            .single()

          const currentXP =
            profile?.xp || 0

          await supabase
            .from("profiles")
            .update({
              xp:
                currentXP + 2,
            })
            .eq(
              "id",
              user.id
            )
        }

        setCompleted(true)

      } catch (error) {

        console.error(error)
      }
    }

  if (loading) {

    return (
      <div className="h-screen flex items-center justify-center">
        Ładowanie...
      </div>
    )
  }

  if (!steps.length) {

    return (
      <div className="h-screen flex items-center justify-center">
        Nie znaleziono lekcji
      </div>
    )
  }
// SUMMARY
if (completed && summary) {

  return (

    <div className="min-h-screen overflow-hidden flex items-start justify-center px-3 sm:px-4 pt-4 sm:pt-8">

      <Card className="
        w-full
        max-w-5xl
        rounded-[28px] sm:rounded-[32px]
        border
        border-black/10
        dark:border-white/10
        bg-white/70
        dark:bg-black/50
        backdrop-blur-2xl
      ">

        <CardContent className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">

            <div className="
              w-16 h-16
              sm:w-20 sm:h-20
              rounded-3xl
              bg-blue-500/10
              border
              border-blue-500/20
              flex
              items-center
              justify-center
              shrink-0
            ">

              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />

            </div>

            <div className="min-w-0">

              <p className="text-sm sm:text-base text-black/50 dark:text-white/40">
                Lekcja ukończona
              </p>

              <h1 className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-bold
                text-blue-600
                dark:text-blue-400
                break-words
              ">
                {summary.title}
              </h1>

            </div>

          </div>

          {/* CONTENT */}
          <div className="
            rounded-3xl
            border
            border-black/10
            dark:border-white/10
            p-4 sm:p-6
            whitespace-pre-line
            leading-7 sm:leading-8
            text-[15px] sm:text-base
            text-black/80
            dark:text-white/80
          ">

            {summary.content}

          </div>

          {/* BUTTONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">

            <Button
              onClick={() => {

                setCompleted(false)

                setStep(0)

              }}
              className="
                h-12 sm:h-14
                rounded-2xl
                text-sm sm:text-base
              "
            >
              🔄 Powtórz lekcję
            </Button>

            {lessonId >= 20 ? (

              <Link
                href="/dashboard"
                className="w-full"
              >

                <Button className="
                  w-full
                  h-12 sm:h-14
                  rounded-2xl
                  bg-green-600
                  hover:bg-green-700
                  text-sm sm:text-base
                ">

                  🚀 Wróć do dashboardu

                </Button>

              </Link>

            ) : (

              <Link
                href={`/dashboard/inf03/css/${lessonId + 1}`}
                className="w-full"
              >

                <Button className="
                  w-full
                  h-12 sm:h-14
                  rounded-2xl
                  bg-blue-600
                  hover:bg-blue-700
                  text-sm sm:text-base
                ">

                  Następna lekcja

                </Button>

              </Link>

            )}

          </div>

        </CardContent>

      </Card>

    </div>
  )
}
  const preview =
    lessonId === 2
      ? `
      <html>

        ${code}

        <body>

          <h1>CSS Preview</h1>

          <p>Test paragrafu</p>

          <button>Button</button>

        </body>

      </html>
    `
      : `
      <html>

        <head>

          <style>
            ${code}
          </style>

        </head>

        <body>

          <h1>CSS Preview</h1>

          <p>Test paragrafu</p>

          <button>Button</button>

        </body>

      </html>
    `

  return (

    <div className="h-[calc(100vh-64px)] overflow-hidden text-black dark:text-white -mt-10">

      <div className="h-full max-w-7xl mx-auto px-4 md:px-6 py-4 flex flex-col gap-4 overflow-hidden">

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

        {/* MAIN */}
        <Card className="flex flex-col flex-1 min-h-0 overflow-hidden rounded-[32px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-2xl shadow-2xl">

          <div className="flex-1 min-h-0 overflow-y-auto">

            <CardContent className="p-4 md:p-6 lg:p-8 pb-32">

              {/* TEXT */}
              {current.type === "text" && (

                <div className="max-w-4xl mx-auto whitespace-pre-line text-[16px] md:text-[17px] leading-8 text-black/80 dark:text-white/80">

                  {current.content}

                </div>
              )}

              {/* CODE */}
              {current.type === "code" && (

                <pre className="bg-[#0B1120] text-blue-400 p-5 md:p-8 rounded-3xl overflow-x-auto text-sm md:text-base border border-white/10 leading-7">

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

                    <div className="text-lg whitespace-pre-line leading-8">

                      {current.content}

                    </div>

                  </div>

                  <div className="grid grid-cols-1 2xl:grid-cols-12 gap-6">

                    {/* EDITOR */}
                    <div className="2xl:col-span-5 flex flex-col gap-4">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-sm text-black/50 dark:text-white/40">
                            Edytor CSS
                          </p>

                          <h3 className="text-xl font-semibold">
                            style.css
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
                            CSS
                          </div>

                        </div>

                        <textarea
                          value={code}
                          onChange={(e) =>
                            setCode(
                              e.target.value
                            )
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

                              newWindow.document.write(
                                preview
                              )

                              newWindow.document.close()
                            }
                          }}
                        >
                          🌍 Otwórz
                        </Button>

                      </div>

                      <div className="rounded-[28px] overflow-hidden border border-black/10 dark:border-white/10 bg-white shadow-2xl">

                        <iframe
                          srcDoc={preview}
                          title="preview"
                          className="w-full h-[45vh] 2xl:h-[60vh] bg-white"
                        />

                      </div>

                    </div>

                  </div>

                  <Button
                    onClick={
                      handleCodeValidation
                    }
                    className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700"
                  >
                    ✅ Sprawdź kod
                  </Button>

                </div>
              )}

    
  {/* QUIZ */}
{current.type === "quiz" && (

  <div className="max-w-4xl mx-auto -mt-8.5 space-y-8">

    <div className="p-6 md:p-8 mt-3 rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03]">

      <p className="text-sm uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold mb-1">
        Quiz
      </p>

      <h2 className="text-2xl md:text-3xl font-bold leading-relaxed">
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
              onClick={() => {

                setSelected(index)

                const validation =
                  validateQuiz(
                    index,
                    current.correct
                  )

                setResult(
                  validation.success
                )

                setQuizMessage(
                  validation.message
                )

                setOpen(true)

                // po chwili odznacz odpowiedź
                setTimeout(() => {

                  setSelected(null)

                }, 700)
              }}
              className={`
                w-full
                text-left
                rounded-[28px]
                border
                p-5 md:p-6
                transition-all

                ${
                  active
                    ? result
                      ? `
                        border-green-500
                        bg-green-500/10
                      `
                      : `
                        border-red-500
                        bg-red-500/10
                      `
                    : `
                      border-black/10 dark:border-white/10
                      bg-white/70 dark:bg-white/[0.03]
                    `
                }
              `}
            >

              {answer}

            </button>
          )
        }
      )}

    </div>

  </div>
)}
            </CardContent>

          </div>

          {/* BOTTOM NAV */}
          <div className="shrink-0 border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">

            <Button
              disabled={step === 0}
              onClick={() =>
                setStep(step - 1)
              }
              className="w-full sm:w-auto h-11 sm:h-14 px-5 sm:px-8 rounded-2xl bg-blue-600 hover:bg-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wstecz
            </Button>

            {step ===
            steps.length - 1 ? (

              <Button
                onClick={
                  handleFinishLesson
                }
                className="w-full sm:w-auto h-11 sm:h-14 px-5 sm:px-8 rounded-2xl bg-green-600 hover:bg-green-700"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Zakończ
              </Button>

            ) : (

              <Button
                onClick={() =>
                  setStep(step + 1)
                }
                className="w-full sm:w-auto h-11 sm:h-14 px-5 sm:px-8 rounded-2xl bg-blue-600 hover:bg-blue-700"
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