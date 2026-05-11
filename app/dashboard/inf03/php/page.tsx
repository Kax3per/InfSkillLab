"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { supabase } from "@/lib/supabase"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"

import {
  CheckCircle2,
  Lock,
  ArrowRight,
  Code2,
} from "lucide-react"

const lessons = [
  {
    id: 1,
    title: "Czym jest PHP",
    icon: "🐘",
  },
  {
    id: 2,
    title: "Zmienne w PHP",
    icon: "📦",
  },
  {
    id: 3,
    title: "echo i wyświetlanie danych",
    icon: "🖥️",
  },
  {
    id: 4,
    title: "Instrukcja if",
    icon: "🔀",
  },
  {
    id: 5,
    title: "Pętle w PHP",
    icon: "🔁",
  },
  {
    id: 6,
    title: "Tablice",
    icon: "🗂️",
  },
  {
    id: 7,
    title: "Formularze HTML + PHP",
    icon: "📝",
  },
  {
    id: 8,
    title: "GET i POST",
    icon: "📨",
  },
  {
    id: 9,
    title: "Połączenie z bazą danych",
    icon: "🛢️",
  },
  {
    id: 10,
    title: "SELECT — odczyt danych",
    icon: "🔍",
  },
  {
    id: 11,
    title: "INSERT — dodawanie danych",
    icon: "➕",
  },
  {
    id: 12,
    title: "UPDATE — edycja danych",
    icon: "✏️",
  },
  {
    id: 13,
    title: "DELETE — usuwanie danych",
    icon: "🗑️",
  },
  {
    id: 14,
    title: "Logowanie użytkownika",
    icon: "🔐",
  },
  {
    id: 15,
    title: "Sesje w PHP",
    icon: "🧠",
  },
  {
    id: 16,
    title: "include i require",
    icon: "🧩",
  },
  {
    id: 17,
    title: "Upload plików",
    icon: "📤",
  },
  {
    id: 18,
    title: "Bezpieczeństwo formularzy",
    icon: "🛡️",
  },
  {
    id: 19,
    title: "Mini panel admina",
    icon: "⚙️",
  },
  {
    id: 20,
    title: "Projekt końcowy PHP",
    icon: "🚀",
  },
]

export default function PHPPage() {

  const [lastDone, setLastDone] =
    useState(0)

  useEffect(() => {

    const load = async () => {

      const {
        data: userData,
      } = await supabase.auth.getUser()

      const user =
        userData.user

      if (!user) return

      const { data } =
        await supabase
          .from("progress")
          .select("lesson")
          .eq("user_id", user.id)
          .eq("course", "php")

      const lessonsDone =
        data?.map((l) => l.lesson) || []

      const last =
        Math.max(...lessonsDone, 0)

      setLastDone(last)
    }

    load()

  }, [])

  const progress =
    (lastDone / lessons.length) * 100

  return (

    <div className="relative min-h-screen overflow-hidden -ml-4 bg-white dark:bg-black text-black dark:text-white lesson-scroll">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* LIGHT */}
        <div className="dark:hidden">

          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/30 rounded-full blur-[120px]" />

          <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-300/30 rounded-full blur-[140px]" />

        </div>

        {/* DARK */}
        <div className="hidden dark:block">

          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-[140px]" />

          <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-[160px]" />

        </div>

      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* HEADER */}
        <div className="space-y-4">

          <div className="flex items-center gap-4">

            <div
              className="
                w-14
                h-14
                rounded-3xl
                bg-violet-600
                flex
                items-center
                justify-center
                text-white
                shadow-lg
                shadow-violet-500/30
              "
            >

              <Code2 className="w-6 h-6" />

            </div>

            <div>

              <h1 className="text-4xl font-black">
                PHP
              </h1>

              <p className="text-black/60 dark:text-white/60">
                Naucz się backendu, formularzy i pracy z bazą danych
              </p>

            </div>

          </div>

          {/* PROGRESS */}
          <Card
            className="
              rounded-[32px]
              border
              border-black/10
              dark:border-white/10
              bg-white/70
              dark:bg-black/50
              backdrop-blur-2xl
            "
          >

            <CardContent className="p-6 space-y-5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-3xl font-bold">
                    Postęp kursu
                  </p>

                  <p className="text-black/60 dark:text-white/60">
                    Ukończono {lastDone} z {lessons.length} lekcji
                  </p>

                </div>

                <div className="text-3xl font-black text-violet-600 dark:text-violet-400">
                  {Math.round(progress)}%
                </div>

              </div>

              <Progress
                value={progress}
                className="h-3"
              />

            </CardContent>

          </Card>

        </div>

        {/* LESSONS */}
        <div className="grid gap-5">

          {lessons.map((lesson) => {

            const completed =
              lesson.id <= lastDone

            const unlocked =
              lesson.id <= lastDone + 1

            if (unlocked) {

              return (

                <Link
                  key={lesson.id}
                  href={`/dashboard/inf03/php/${lesson.id}`}
                >

                  <Card
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-black/10
                      dark:border-white/10
                      bg-white/70
                      dark:bg-black/50
                      backdrop-blur-2xl
                      hover:scale-[1.01]
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-violet-500/5" />

                    <CardContent className="relative z-10 p-6 flex items-center justify-between">

                      <div className="flex items-center gap-5">

                        <div
                          className="
                            w-16
                            h-16
                            rounded-3xl
                            flex
                            items-center
                            justify-center
                            text-3xl
                            bg-violet-100
                            dark:bg-violet-500/10
                            border
                            border-violet-200
                            dark:border-violet-500/20
                          "
                        >
                          {lesson.icon}
                        </div>

                        <div>

                          <div className="flex items-center gap-2 mb-1">

                            <p className="text-sm text-black/50 dark:text-white/40">
                              Lekcja {lesson.id}
                            </p>

                            {completed && (
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            )}

                          </div>

                          <h2 className="text-2xl font-bold">
                            {lesson.title}
                          </h2>

                        </div>

                      </div>

                      <div
                        className="
                          w-14
                          h-14
                          rounded-2xl
                          flex
                          items-center
                          justify-center
                          bg-black/5
                          dark:bg-white/5
                          group-hover:bg-violet-600
                          transition-colors
                        "
                      >

                        <ArrowRight
                          className="
                            w-6
                            h-6
                            group-hover:text-white
                            transition-colors
                          "
                        />

                      </div>

                    </CardContent>

                  </Card>

                </Link>
              )
            }

            return (

              <Card
                key={lesson.id}
                className="
                  rounded-[32px]
                  border
                  border-black/10
                  dark:border-white/10
                  bg-black/5
                  dark:bg-white/[0.03]
                  opacity-60
                "
              >

                <CardContent className="p-6 flex items-center justify-between">

                  <div className="flex items-center gap-5">

                    <div
                      className="
                        w-16
                        h-16
                        rounded-3xl
                        flex
                        items-center
                        justify-center
                        text-3xl
                        bg-black/5
                        dark:bg-white/5
                      "
                    >
                      🔒
                    </div>

                    <div>

                      <p className="text-sm text-black/50 dark:text-white/40">
                        Lekcja {lesson.id}
                      </p>

                      <h2 className="text-2xl font-bold">
                        {lesson.title}
                      </h2>

                    </div>

                  </div>

                  <Lock className="w-6 h-6 text-black/40 dark:text-white/40" />

                </CardContent>

              </Card>
            )
          })}

        </div>

      </div>

    </div>
  )
}