import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/src/lib/db";
import { bookSchema } from "@/src/lib/validations/book";
import Book from "@/src/models/Book";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
    };

    const body = await req.json();

    const validatedData = bookSchema.parse(body);

    const tags = validatedData.tags
      ? validatedData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [];

    await Book.create({
      title: validatedData.title,
      author: validatedData.author,
      tags,
      status: validatedData.status,
      userId: decoded.id,
    });

    return NextResponse.json(
      {
        message: "Book added successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}