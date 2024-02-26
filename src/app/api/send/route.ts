import { EmailTemplate } from "../../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ownerEmail = process.env.NEXT_PUBLIC_EMAIL;

export async function POST(req: Request) {
  const { email, phone, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ownerEmail!,
      subject: "Nuevo contacto.",
      react: EmailTemplate({
        mail: email,
        phone: phone,
        message: message,
      }),
      text: "",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
