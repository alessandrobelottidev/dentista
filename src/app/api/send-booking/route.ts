import { NextRequest, NextResponse } from 'next/server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const dentalHelpForm = await request.json();
    
    const res = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "noalturismodentale@libero.it",
      subject: "Nuova richiesta di appuntamento dal tuo sito web!",
      html: `
      <div>
        <p>Nome completo: <b>${dentalHelpForm.full_name}</b></p>
        <p>Numero di telefono: <b>${dentalHelpForm.phone_number}</b></p>
        <p>Indirizzo email: <b>${dentalHelpForm.email}</b></p>
        <p>Servizio richiesto: <b>${dentalHelpForm.service}</b></p>
        <p>Location: <b>${dentalHelpForm.place}</b></p>
        <p>Data e orario appuntamento (richiesto): <b>${new Date(dentalHelpForm.datetime).toLocaleString("it-IT")}</b></p>
        
        <br /><br />

        <p>Sei gia occupato a questo orario o vuoi proporne uno nuovo? Oppure non ti va bene la location? <br />
        Contatta questo potenziale cliente sulla via <a href="mailto:${dentalHelpForm.email}">mail</a> 
        o via <a href="tel:${dentalHelpForm.phone_number}">numero di telefono</a></p>
      </div>
      `,
    });

    return NextResponse.json(res);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: { message: 'Failed to send email' } },
      { status: 500 }
    );
  }
}
