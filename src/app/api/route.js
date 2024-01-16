import { NextResponse } from "next/server";
import { sentMailer } from "../libs/SentMailer";

export const POST = async (req) => {
  const { userEmail, userMessage } = await req.json()

  try {
    await sentMailer({
      subject: `Message from: ${userEmail}`,
      html: `<h6>${userMessage}</h6>`
    });

    return NextResponse.json({ message: 'Successful' }, { status: 200 });
  } catch (error) {
    console.error("Error in sending email:", error);
    return NextResponse.json({ message: 'Failed' }, { status: 500 });
  }
};
