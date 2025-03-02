"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import type { Book } from "@/lib/types"

interface BookListProps {
  books: Book[]
}

export function BookList({ books }: BookListProps) {
  const [wishlist, setWishlist] = useState<number[]>([])

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("bookWishlist")
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    }
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bookWishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((bookId) => bookId !== id))
      toast({
        description: "Removed from your wishlist",
      })
    } else {
      setWishlist([...wishlist, id])
      toast({
        description: "Added to your wishlist",
      })
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <Card key={book.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={book.coverImage || "/placeholder.svg"}
              alt={book.title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 rounded-full bg-background/80 hover:bg-background/90"
              onClick={() => toggleWishlist(book.id)}
            >
              <Heart className={`h-5 w-5 ${wishlist.includes(book.id) ? "fill-red-500 text-red-500" : ""}`} />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <span className="inline-block rounded-full bg-primary/80 px-2 py-0.5 text-xs text-white">
                Ages: {book.ageRecommendation}
              </span>
            </div>
          </div>
          <CardContent className="p-4">
            <Link href={`/books/${book.id}`} className="hover:underline">
              <h3 className="line-clamp-1 font-semibold">{book.title}</h3>
            </Link>
            <p className="line-clamp-1 text-sm text-muted-foreground">{book.author}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-bold">${book.price.toFixed(2)}</span>
              {book.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">${book.originalPrice.toFixed(2)}</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

