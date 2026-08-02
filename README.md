# Personal Book Manager

A simple personal book management application built with Next.js. It allows users to manage their reading collection by adding, updating, deleting, searching, and filtering books. Authentication is handled using JWT.

## Features

- User authentication (Signup, Login, Logout)
- Protected routes using Next.js middleware
- Add a new book
- Edit existing books
- Delete books
- Search books by title or author
- Filter books by reading status
- Dashboard with reading statistics
- Responsive UI

## Tech Stack

### Frontend

- Next.js 15 (App Router)
- React
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- React Hot Toast
- Lucide React

### Backend

- Next.js API Routes
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

## Folder Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   └── books/
│   ├── dashboard/
│   ├── login/
│   ├── signup/
│   ├── layout.tsx
│   └── page.tsx
│   └── global.css
│
├── components/
│   ├── auth/
│   ├── common/
│   ├── dashboard/
│   └── home/
│   └── layout/
│
├── lib/
├── models/
├── types/
├── utils/
└── middleware.ts
```

## Getting Started

Clone the repository

```bash
git clone https://github.com/imrancodes/Personal-Book-Manager
```

Go to the project directory

```bash
cd Personal-Book-Manager
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

## Authentication

Authentication is implemented using JWT.

- Users receive a token after login.
- The token is stored in an HTTP-only cookie.
- Middleware protects authenticated routes.
- Logged-in users cannot access Login or Signup pages.

## Book Model

```ts
{
  title: string;
  author: string;
  tags: string[];
  status: "want-to-read" | "reading" | "completed";
}
```

## API Routes

### Authentication

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/logout` | Logout |

### Books

| Method | Endpoint | Description |
| ------- | -------- | ----------- |
| GET | `/api/books` | Get all books and dashboard stats |
| POST | `/api/books` | Add a new book |
| PATCH | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

## Validation

Form validation is handled using **React Hook Form** and **Zod** on the client side. API routes also validate incoming data before saving it to the database.

## Future Improvements

- Pagination or infinite scrolling
- Sorting options
- Book cover images
- Reading progress
- Dark mode
- User profile page

## License

This project is created for learning and assessment purposes.