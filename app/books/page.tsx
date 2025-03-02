"use client"

import { useState } from "react"
import { BookList } from "@/components/book-list"
import { Pagination } from "@/components/pagination"
import { BookFilters } from "@/components/book-filters"
import { allBooks } from "@/lib/books-data"

export default function BooksPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("newest")

  const booksPerPage = 12

  // Filter books by category if selected
  const filteredBooks = selectedCategory ? allBooks.filter((book) => book.category === selectedCategory) : allBooks

  // Sort books based on selection
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    if (sortBy === "price-low") return a.price - b.price
    if (sortBy === "price-high") return b.price - a.price
    if (sortBy === "title-asc") return a.title.localeCompare(b.title)
    return 0
  })

  // Calculate pagination
  const totalBooks = sortedBooks.length
  const totalPages = Math.ceil(totalBooks / booksPerPage)
  const currentBooks = sortedBooks.slice((currentPage - 1) * booksPerPage, currentPage * booksPerPage)

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">Browse Books</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <BookFilters
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortBy={sortBy}
            setSortBy={setSortBy}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <div className="md:col-span-3">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-medium">
                {Math.min(totalBooks, (currentPage - 1) * booksPerPage + 1)}-
                {Math.min(totalBooks, currentPage * booksPerPage)}
              </span>{" "}
              of <span className="font-medium">{totalBooks}</span> books
            </p>
            <p className="text-sm text-muted-foreground">
              Page <span className="font-medium">{currentPage}</span> of{" "}
              <span className="font-medium">{totalPages}</span>
            </p>
          </div>

          <BookList books={currentBooks} />

          {totalPages > 1 && (
            <div className="mt-8">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

