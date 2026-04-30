import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email, confirmUrl } = await req.json()

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev", // na start OK
      to: email,
      subject: "Potwierdź swój email",
      html: `
        <h2>Potwierdź konto</h2>
        <p>Kliknij poniżej:</p>
        <a href="${confirmUrl}">
          👉 Potwierdź email
        </a>
      `,
    })

    if (error) {
      return Response.json({ error }, { status: 400 })
    }

    return Response.json({ success: true })
  } catch (err) {
    return Response.json({ error: err }, { status: 500 })
  }
}