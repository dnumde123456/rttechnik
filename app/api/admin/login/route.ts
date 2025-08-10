import { type NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const ADMIN_CREDENTIALS = {
  login: "rtadmin",
  password: "ju230hd01hd8012",
}

export async function POST(request: NextRequest) {
  try {
    const { login, password } = await request.json()

    if (login === ADMIN_CREDENTIALS.login && password === ADMIN_CREDENTIALS.password) {
      const token = jwt.sign({ admin: true }, process.env.JWT_SECRET || "fallback-secret", { expiresIn: "24h" })

      return NextResponse.json({ token })
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
