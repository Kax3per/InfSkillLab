"use client"

import { useEffect, useRef, useState } from "react"
import { supabase } from "@/lib/supabase"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Flame,
  Trophy,
  Sparkles,
  ArrowRight,
  Clock3,
  BookOpen,
} from "lucide-react"

// 🔥 RANK SYSTEM
function getRank(xp: number) {
  if (xp < 50)
    return {
      name: "Bambik",
      color: "#6b7280",
    }

  if (xp < 100)
    return {
      name: "Słabiak",
      color: "#3b82f6",
    }

  if (xp < 150)
    return {
      name: "Pros",
      color: "#10b981",
    }

  if (xp < 200)
    return {
      name: "Sigma",
      color: "#f59e0b",
    }

  return {
    name: "Pro",
    color: "#ef4444",
  }
}

export default function DashboardPage() {
  const totalLessons = 8
  const pathname = usePathname()

  // 🔥 STATES
  const [lastDone, setLastDone] = useState(0)

  const [completedLessons, setCompletedLessons] =
    useState(0)

  const [allCompletedLessons, setAllCompletedLessons] =
    useState(0)

  const [nextLesson, setNextLesson] = useState(1)

  const [progress, setProgress] = useState(0)

  const [xp, setXp] = useState(0)

  // 🔥 TIMER
  const [studySeconds, setStudySeconds] =
    useState(0)

  const [loaded, setLoaded] = useState(false)

  // 🔥 REFS
  const userIdRef = useRef<string | null>(null)

  // 🔥 LOAD DATA
  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) return

      userIdRef.current = user.id

      // 🔥 HTML PROGRESS
      const { data: progressData } =
        await supabase
          .from("progress")
          .select("lesson")
          .eq("user_id", user.id)
          .eq("course", "html")
          .eq("done", true)

      const uniqueLessons = [
        ...new Set(
          progressData?.map((item) =>
            Number(item.lesson)
          ) || []
        ),
      ]

      const completed = uniqueLessons.length

      const last =
        uniqueLessons.length > 0
          ? Math.max(...uniqueLessons)
          : 0

      const next =
        last >= totalLessons
          ? totalLessons
          : last + 1

      const progressPercent = Math.round(
        (completed / totalLessons) * 100
      )

      // 🔥 ALL LESSONS
      const { data: allLessons } =
        await supabase
          .from("progress")
          .select("id")
          .eq("user_id", user.id)
          .eq("done", true)

      // 🔥 PROFILE
      const { data: profile } = await supabase
        .from("profiles")
        .select("xp")
        .eq("id", user.id)
        .single()

      // 🔥 USER STATS
      let { data: stats } = await supabase
        .from("user_stats")
        .select("study_minutes")
        .eq("user_id", user.id)
        .single()

      // 🔥 CREATE IF NOT EXISTS
      if (!stats) {
        await supabase
          .from("user_stats")
          .insert({
            user_id: user.id,
            study_minutes: 0,
          })

        stats = {
          study_minutes: 0,
        }
      }

      if (!mounted) return

      setCompletedLessons(completed)

      setAllCompletedLessons(
        allLessons?.length || 0
      )

      setLastDone(last)

      setNextLesson(next)

      setProgress(progressPercent)

      setXp(profile?.xp || 0)

      // 🔥 LOAD TIMER FROM DB
      const seconds = Math.floor(
        (stats?.study_minutes || 0) * 60
      )

      setStudySeconds(seconds)

      setLoaded(true)
    }

    loadData()

    return () => {
      mounted = false
    }
  }, [pathname])

  // 🔥 LIVE TIMER
  useEffect(() => {
    if (!loaded) return

    const interval = setInterval(() => {
      setStudySeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [loaded])

  // 🔥 AUTO SAVE TO DATABASE
  useEffect(() => {
    if (!loaded) return

    const interval = setInterval(async () => {
      const userId = userIdRef.current

      if (!userId) return

      const minutes =
        studySeconds / 60

      const { error } = await supabase
        .from("user_stats")
        .upsert({
          user_id: userId,
          study_minutes: minutes,
        })

      if (error) {
        console.error(
          "SAVE TIMER ERROR:",
          error
        )
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [studySeconds, loaded])

  // 🔥 FORMAT TIME
  const minutes = Math.floor(
    studySeconds / 60
  )

  const seconds =
    studySeconds % 60

  // 🔥 RANK
  const rank = getRank(xp)

  return (
    <div className="space-y-5">
      {/* TOP */}
      <div className="grid gap-5 xl:grid-cols-3">
        {/* 🚀 NEXT LESSON */}
        <div
          className="
            xl:col-span-2
            relative overflow-hidden
            rounded-[32px]

            border border-black/5
            dark:border-white/10

            bg-white/80
            dark:bg-[#0B1120]/70

            backdrop-blur-2xl

            p-7

            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            dark:shadow-[0_0_40px_rgba(59,130,246,0.08)]
          "
        >
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

          <div className="relative z-10">
            {/* HEADER */}
            <div className="flex items-start justify-between">
              <div>
                <div
                  className="
                    inline-flex items-center gap-2
                    rounded-full
                    px-4 py-1.5
                    text-sm font-medium

                    border border-emerald-500/20
                    bg-emerald-500/10
                    text-emerald-600
                    dark:text-emerald-300
                  "
                >
                  ✅
                  {lastDone > 0
                    ? `Ukończyłeś lekcję ${lastDone}`
                    : "Rozpocznij naukę"}
                </div>

                <h2 className="mt-5 text-4xl font-bold text-black dark:text-white">
                  HTML
                </h2>

                <p className="mt-2 text-lg text-black/60 dark:text-muted-foreground">
                  Kontynuuj naukę frontend 🚀
                </p>
              </div>

              <div
                className="
                  flex h-16 w-16 items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-violet-500
                  to-blue-500
                "
              >
                <Sparkles className="h-7 w-7 text-white" />
              </div>
            </div>

            {/* BUTTON */}
            <Link
              href={`/dashboard/inf03/html/${nextLesson}`}
            >
              <button
                className="
                  mt-8
                  flex items-center gap-3
                  rounded-2xl
                  px-6 py-4
                  text-lg font-semibold

                  bg-black
                  text-white

                  hover:scale-[1.02]
                  transition-all

                  dark:bg-white
                  dark:text-black
                "
              >
                {lastDone >= totalLessons
                  ? "Kurs ukończony 🎉"
                  : lastDone > 0
                  ? `Kontynuuj → lekcja ${nextLesson}`
                  : "Rozpocznij lekcję 1"}

                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>

            {/* PROGRESS */}
            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-black/50 dark:text-muted-foreground">
                  Postęp kursu HTML
                </span>

                <span className="font-semibold text-black dark:text-white">
                  {progress}%
                </span>
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
                <div
                  className="
                    h-full rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-blue-500
                    transition-all duration-700
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>

            {/* MINI STATS */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                {
                  icon: Trophy,
                  title: "XP",
                  value: xp,
                },
                {
                  icon: Flame,
                  title: "Streak",
                  value: "0 dni",
                },
                {
                  icon: Sparkles,
                  title: "Lekcje",
                  value: `${completedLessons}/${totalLessons}`,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    p-4

                    border border-black/5
                    dark:border-white/5

                    bg-black/[0.02]
                    dark:bg-white/[0.03]
                  "
                >
                  <div className="flex items-center gap-2 text-black/50 dark:text-muted-foreground">
                    <item.icon className="h-4 w-4" />

                    <span className="text-sm">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold text-black dark:text-white">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🎯 LEVEL */}
        <div
          className="
            relative overflow-hidden
            rounded-[32px]

            border border-black/5
            dark:border-white/10

            bg-white/80
            dark:bg-[#0B1120]/70

            backdrop-blur-2xl

            p-7
          "
        >
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Twój poziom
              </h3>

              <div
                className="
                  rounded-full
                  px-3 py-1
                  text-xs font-medium

                  border border-violet-500/20
                  bg-violet-500/10
                "
                style={{
                  color: rank.color,
                }}
              >
                {rank.name}
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <div
                className="
                  flex h-52 w-52 items-center justify-center
                  rounded-full

                  border-[12px]

                  border-black/5
                  dark:border-white/10

                  bg-white/60
                  dark:bg-black/20
                "
              >
                <div className="text-center">
                  <h2 className="text-6xl font-bold text-black dark:text-white">
                    {xp}
                  </h2>

                  <p
                    className="mt-3 text-lg font-semibold"
                    style={{
                      color: rank.color,
                    }}
                  >
                    {rank.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 📊 STATS */}
      <div
        className="
          relative overflow-hidden
          rounded-[32px]

          border border-black/5
          dark:border-white/10

          bg-white/80
          dark:bg-[#0B1120]/70

          backdrop-blur-2xl

          p-7
        "
      >
        <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                Statystyki
              </h3>

              <p className="mt-1 text-sm text-black/50 dark:text-muted-foreground">
                Twoja aktywność
              </p>
            </div>

            <div
              className="
                rounded-2xl
                bg-gradient-to-br
                from-cyan-500
                to-blue-500

                p-3
              "
            >
              <Trophy className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* GRID */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {/* lessons */}
            <div
              className="
                rounded-2xl
                border border-black/5
                dark:border-white/5

                bg-black/[0.02]
                dark:bg-white/[0.03]

                p-5
              "
            >
              <BookOpen className="h-5 w-5 text-blue-500" />

              <p className="mt-4 text-sm text-black/50 dark:text-muted-foreground">
                Wszystkie lekcje
              </p>

              <h2 className="mt-2 text-4xl font-bold text-black dark:text-white">
                {allCompletedLessons}
              </h2>
            </div>

            {/* time */}
            <div
              className="
                rounded-2xl
                border border-black/5
                dark:border-white/5

                bg-black/[0.02]
                dark:bg-white/[0.03]

                p-5
              "
            >
              <Clock3 className="h-5 w-5 text-emerald-500" />

              <p className="mt-4 text-sm text-black/50 dark:text-muted-foreground">
                Łączny czas nauki
              </p>

              <h2 className="mt-2 text-4xl font-bold text-black dark:text-white">
                {minutes}:
                {String(seconds).padStart(
                  2,
                  "0"
                )}
              </h2>

              <p className="mt-1 text-sm text-black/40 dark:text-white/40">
                min
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}