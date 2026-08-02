import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/src/lib/db";
import Book from "@/src/models/Book";
import { bookSchema } from "@/src/lib/validations/book";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await connectDB();
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    jwt.verify(token, JWT_SECRET);
    const { id } = await params;

    const body = await req.json();
    const validatedData = bookSchema.parse(body);

    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    const updatedBook = await Book.findOneAndUpdate(
      {
        _id: id,
        userId: decoded.id,
      },
      validatedData,
      { new: true },
    );

    if (!updatedBook) {
      return NextResponse.json({ message: "Book not found." }, { status: 404 });
    }

    return NextResponse.json({
      message: "Book updated successfully.",
      book: updatedBook,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    const token = req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    jwt.verify(token, JWT_SECRET);
    const { id } = await params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return NextResponse.json(
        { message: "Book not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Book deleted successfully.",
    });
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