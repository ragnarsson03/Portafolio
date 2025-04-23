import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }
    
    // Guardar en la base de datos
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    
    // Opcional: Enviar email
    // Aquí iría el código para enviar email con Resend o SendGrid
    
    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al procesar el contacto:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}