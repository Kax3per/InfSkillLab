"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SiMysql } from "react-icons/si"
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
  Database,
} from "lucide-react"

const lessons = [
  {
    id: 1,
    title: "Wprowadzenie do SQL i phpMyAdmin",
    icon: "🗄️",
  },
  {
    id: 2,
    title: "Tworzenie baz danych",
    icon: "🏗️",
  },
  {
    id: 3,
    title: "Tworzenie tabel",
    icon: "📋",
  },
  {
    id: 4,
    title: "Dodawanie danych — INSERT",
    icon: "➕",
  },
  {
    id: 5,
    title: "Pobieranie danych — SELECT",
    icon: "🔍",
  },
  {
    id: 6,
    title: "Filtrowanie danych — WHERE",
    icon: "🎯",
  },
  {
    id: 7,
    title: "AND, OR i operatory",
    icon: "⚙️",
  },
  {
    id: 8,
    title: "ORDER BY i sortowanie",
    icon: "↕️",
  },
  {
    id: 9,
    title: "LIKE i wyszukiwanie",
    icon: "🔎",
  },
  {
    id: 10,
    title: "UPDATE danych",
    icon: "✏️",
  },
  {
    id: 11,
    title: "DELETE danych",
    icon: "❌",
  },
  {
    id: 12,
    title: "Relacje i FOREIGN KEY",
    icon: "🔗",
  },
  {
    id: 13,
    title: "INNER JOIN",
    icon: "🤝",
  },
  {
    id: 14,
    title: "LEFT JOIN",
    icon: "⬅️",
  },
  {
    id: 15,
    title: "RIGHT JOIN",
    icon: "➡️",
  },
  {
    id: 16,
    title: "GROUP BY i COUNT",
    icon: "📊",
  },
  {
    id: 17,
    title: "Użytkownicy i uprawnienia",
    icon: "👤",
  },
  {
    id: 18,
    title: "Eksport i import bazy",
    icon: "💾",
  },
  {
    id: 19,
    title: "Indeksy i wydajność",
    icon: "⚡",
  },
  {
    id: 20,
    title: "Projekt końcowy SQL",
    icon: "🚀",
  },
]

export default function SqlPage() {

  const [lastDone, setLastDone] =
    useState(0)

  useEffect(() => {

    const load = async () => {

      const { data: userData } =
        await supabase.auth.getUser()

      const user =
        userData.user

      if (!user) return

      const { data } =
        await supabase
          .from("progress")
          .select("lesson")
          .eq("user_id", user.id)
          .eq("course", "sql")

      const lessonsDone =
        data?.map((l) => l.lesson) || []

      const last =
        Math.max(
          ...lessonsDone,
          0
        )

      setLastDone(last)
    }

    load()

  }, [])

  const progress =
    (lastDone / lessons.length) * 100

  return (

    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black lesson-scroll dark:text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        {/* LIGHT */}
        <div className="dark:hidden">

          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/30 rounded-full blur-[120px]" />

          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/30 rounded-full blur-[140px]" />

        </div>

        {/* DARK */}
        <div className="hidden dark:block">

          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-[140px]" />

          <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-600/20 rounded-full blur-[160px]" />

        </div>

      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* HEADER */}
        <div className="space-y-4">

          <div className="flex items-center gap-3">

            <SiMysql className="w-20 h-20" />

            <div>

              <p className="text-black/60 dark:text-white/60 mt-5 ml-3">
                Naucz się baz danych i phpMyAdmin
              </p>

            </div>

          </div>

          {/* PROGRESS */}
          <Card className="border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-xl rounded-3xl">

            <CardContent className="p-6 space-y-4">

              <div className="flex items-center justify-between">

                <div>

                  <p className="font-semibold text-lg">
                    Postęp kursu
                  </p>

                  <p className="text-sm text-black/60 dark:text-white/60">
                    Ukończono {lastDone} z {lessons.length} lekcji
                  </p>

                </div>

                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">

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
                  href={`/dashboard/inf03/sql/${lesson.id}`}
                >

                  <Card
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-black/10
                      dark:border-white/10
                      bg-white/70
                      dark:bg-black/50
                      backdrop-blur-xl
                      hover:scale-[1.01]
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >

                    {/* glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-orange-500/5" />

                    <CardContent className="relative z-10 p-6 flex items-center justify-between">

                      <div className="flex items-center gap-5">

                        <div
                          className="
                            w-14 h-14
                            rounded-2xl
                            flex items-center justify-center
                            text-2xl
                            bg-orange-100
                            dark:bg-orange-500/10
                            border
                            border-orange-200
                            dark:border-orange-500/20
                          "
                        >
                          {lesson.icon}
                        </div>

                        <div>

                          <div className="flex items-center gap-2">

                            <p className="text-sm text-black/50 dark:text-white/40">
                              Lekcja {lesson.id}
                            </p>

                            {completed && (
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            )}

                          </div>

                          <h2 className="text-xl font-semibold">
                            {lesson.title}
                          </h2>

                        </div>

                      </div>

                      <div
                        className="
                          w-12 h-12
                          rounded-2xl
                          flex items-center justify-center
                          bg-black/5
                          dark:bg-white/5
                          group-hover:bg-orange-600
                          transition-colors
                        "
                      >

                        <ArrowRight
                          className="
                            w-5 h-5
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
                  rounded-3xl
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
                        w-14 h-14
                        rounded-2xl
                        flex items-center justify-center
                        text-2xl
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

                      <h2 className="text-xl font-semibold">
                        {lesson.title}
                      </h2>

                    </div>

                  </div>

                  <Lock className="w-5 h-5 text-black/40 dark:text-white/40" />

                </CardContent>

              </Card>
            )
          })}

        </div>

      </div>

    </div>
  )
}