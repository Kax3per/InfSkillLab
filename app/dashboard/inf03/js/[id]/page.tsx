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
  validateJs,
  validateQuiz,
} from "@/lib/lessons/js/validateJs"

import {
  jsLessons,
  jsSummaries,
} from "@/lib/lessons/js/indexJs"

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
    jsLessons[lessonId] || []

  const summary =
    jsSummaries[lessonId]

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
        `js-lesson-${lessonId}-code`
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
      `js-lesson-${lessonId}-code`,
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
              "js"
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
          validateJs(code, [
            "let",
            "console.log",
          ])
      }

      else if (
        lessonId === 2
      ) {

        validation =
          validateJs(code, [
            "let",
            "const",
          ])
      }

      else if (
        lessonId === 3
      ) {

        validation =
          validateJs(code, [
            "if",
            "console.log",
          ])
      }

      else if (
        lessonId === 4
      ) {

        validation =
          validateJs(code, [
            "if",
            "else",
          ])
      }

      else if (
        lessonId === 5
      ) {

        validation =
          validateJs(code, [
            "for",
            "console.log",
          ])
      }

      else if (
        lessonId === 6
      ) {

        validation =
          validateJs(code, [
            "function",
            "return",
          ])
      }

      else if (
        lessonId === 7
      ) {

        validation =
          validateJs(code, [
            "let",
            "function",
          ])
      }

      else if (
        lessonId === 8
      ) {

        validation =
          validateJs(code, [
            "array",
          ])
      }

      else if (
        lessonId === 9
      ) {

        validation =
          validateJs(code, [
            "object",
          ])
      }

      else if (
        lessonId === 10
      ) {

        validation =
          validateJs(code, [
            "querySelector",
          ])
      }

      else if (
        lessonId === 11
      ) {

        validation =
          validateJs(code, [
            "addEventListener",
          ])
      }

      else if (
        lessonId === 12
      ) {

        validation =
          validateJs(code, [
            "if",
            "querySelector",
          ])
      }

      else if (
        lessonId === 13
      ) {

        validation =
          validateJs(code, [
            "localStorage",
          ])
      }

      else if (
        lessonId === 14
      ) {

        validation =
          validateJs(code, [
            "async",
            "await",
          ])
      }

      else if (
        lessonId === 15
      ) {

        validation =
          validateJs(code, [
            "fetch",
            "await",
          ])
      }

      else if (
        lessonId === 16
      ) {

        validation =
          validateJs(code, [
            "console.log",
          ])

        const errors =
          validation.errors

        if (
          !code.includes(
            "export"
          )
        ) {

          errors.push(
            "Brakuje export."
          )
        }

        if (
          !code.includes(
            "import"
          )
        ) {

          errors.push(
            "Brakuje import."
          )
        }

        validation = {
          success:
            errors.length === 0,
          errors,
        }
      }

      else if (
        lessonId === 17
      ) {

        validation =
          validateJs(code, [
            "class",
          ])
      }

      else if (
        lessonId === 18
      ) {

        validation =
          validateJs(code, [
            "try",
            "catch",
          ])
      }

      else if (
        lessonId === 19
      ) {

        validation =
          validateJs(code, [
            "function",
          ])
      }

      else if (
        lessonId === 20
      ) {

        validation =
          validateJs(code, [
            "addEventListener",
            "console.log",
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
            "js"
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
                "js",
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">

              <div className="
                w-16 h-16
                sm:w-20 sm:h-20
                rounded-3xl
                bg-yellow-500/10
                border
                border-yellow-500/20
                flex
                items-center
                justify-center
                shrink-0
              ">

                <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />

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
                  text-yellow-500
                  break-words
                ">
                  {summary.title}
                </h1>

              </div>

            </div>

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
                  href={`/dashboard/inf03/js/${lessonId + 1}`}
                  className="w-full"
                >

                  <Button className="
                    w-full
                    h-12 sm:h-14
                    rounded-2xl
                    bg-yellow-500
                    hover:bg-yellow-600
                    text-black
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

              <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">

                {current.type === "quiz"
                  ? "🧠 Quiz"
                  : current.title}

              </h1>

            </div>

            <div>

              <p className="text-sm text-black/50 dark:text-white/40">
                Postęp
              </p>

              <p className="text-2xl font-bold text-yellow-500">
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

                <pre className="bg-[#0B1120] text-yellow-400 p-5 md:p-8 rounded-3xl overflow-x-auto text-sm md:text-base border border-white/10 leading-7">

                  {current.content}

                </pre>
              )}

              {/* CODE TASK */}
              {current.type === "code-task" && (

                <div className="space-y-8">

                  <div className="rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] p-6 md:p-8">

                    <p className="text-sm uppercase tracking-[0.2em] text-yellow-500 font-semibold mb-4">
                      Zadanie
                    </p>

                    <div className="text-lg whitespace-pre-line leading-8">

                      {current.content}

                    </div>

                  </div>

               
               
                </div>
              )}

              {/* QUIZ */}
              {current.type === "quiz" && (

                <div className="max-w-4xl mx-auto -mt-8.5 space-y-8">

                  <div className="p-6 md:p-8 mt-3 rounded-[28px] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03]">

                    <p className="text-sm uppercase tracking-[0.2em] text-yellow-500 font-semibold mb-1">
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
          <div className="
            shrink-0
            border-t
            border-black/10
            dark:border-white/10
            bg-white/80
            dark:bg-black/80
            backdrop-blur-xl
            p-3
            sm:p-4
            flex flex-col
            sm:flex-row
            gap-3
            sm:gap-4
            sm:items-center
            sm:justify-between
          ">

            <Button
              disabled={step === 0}
              onClick={() =>
                setStep(step - 1)
              }
              className="
                w-full
                sm:w-auto
                h-11
                sm:h-14
                px-5
                sm:px-8
                rounded-2xl
                bg-yellow-500
                hover:bg-yellow-600
                text-black
              "
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
                className="
                  w-full
                  sm:w-auto
                  h-11
                  sm:h-14
                  px-5
                  sm:px-8
                  rounded-2xl
                  bg-green-600
                  hover:bg-green-700
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
                  w-full
                  sm:w-auto
                  h-11
                  sm:h-14
                  px-5
                  sm:px-8
                  rounded-2xl
                  bg-yellow-500
                  hover:bg-yellow-600
                  text-black
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