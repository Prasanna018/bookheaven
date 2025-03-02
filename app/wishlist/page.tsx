"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { allBooks } from "@/lib/books-data"
import type { Book } from "@/lib/types"

export default function WishlistPage() {
  // In a real app, this would be stored in a database or localStorage
  const [wishlistItems, setWishlistItems] = useState<Book[]>([])

  // For demo purposes, initialize with some random books
  useEffect(() => {
    const randomBooks = [...allBooks].sort(() => 0.5 - Math.random()).slice(0, 3)

    setWishlistItems(randomBooks)
  }, [])

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
    toast({
      description: "Item removed from wishlist",
    })
  }

  const clearWishlist = () => {
    setWishlistItems([])
    toast({
      description: "Wishlist cleared",
    })
  }

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold">My Wishlist</h1>

      {wishlistItems.length > 0 ? (
        <>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-muted-foreground">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
            </p>
            <Button variant="outline" size="sm" onClick={clearWishlist}>
              Clear Wishlist
            </Button>
          </div>

          <div className="grid gap-6">
            {wishlistItems.map((book) => (
              <Card key={book.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative aspect-[2/3] h-40 overflow-hidden rounded-md sm:h-48">
                      <Image
                        src={book.coverImage || "/placeholder.svg"}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link href={`/books/${book.id}`} className="hover:underline">
                          <h3 className="text-lg font-semibold">{book.title}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground">by {book.author}</p>
                        <p className="mt-2 text-sm">{book.description.substring(0, 150)}...</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="font-bold">${book.price.toFixed(2)}</div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => removeFromWishlist(book.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Remove
                          </Button>
                          <Button size="sm">Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
          <div className="rounded-full bg-muted p-4">
            <Trash2 className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-xl font-semibold">Your wishlist is empty</h2>
          <p className="mt-2 text-muted-foreground">Browse our collection and add items to your wishlist</p>
          <Button asChild className="mt-6">
            <Link href="/books">Browse Books</Link>
          </Button>
        </div>
      )}
    </div>
  )
}

