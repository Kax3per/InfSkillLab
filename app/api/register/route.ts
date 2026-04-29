import { prisma } from "../../lib/prisma"
import bcrypt from "bcrypt"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("BODY:", body) // DEBUG

    const { email, password } = body

    if (!email || !password) {
      return Response.json({ error: "Brak danych" }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    console.log("USER:", user) // DEBUG

    return Response.json({ success: true })
  } catch (error) {
    console.log("ERROR:", error) // 🔥 TO JEST KLUCZ
    return Response.json({ error: "Błąd serwera" }, { status: 500 })
  }
}