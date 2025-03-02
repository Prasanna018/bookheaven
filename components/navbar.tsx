"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, Heart, Menu, ShoppingCart } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)

  // Load wishlist count from localStorage
  useEffect(() => {
    const updateWishlistCount = () => {
      const savedWishlist = localStorage.getItem("bookWishlist")
      if (savedWishlist) {
        const wishlistIds = JSON.parse(savedWishlist) as number[]
        setWishlistCount(wishlistIds.length)
      }
    }

    // Initial count
    updateWishlistCount()

    // Listen for storage events to update count when wishlist changes
    window.addEventListener("storage", updateWishlistCount)

    // Custom event for when wishlist changes within the same window
    const handleWishlistChange = () => {
      updateWishlistCount()
    }
    window.addEventListener("wishlistChange", handleWishlistChange)

    return () => {
      window.removeEventListener("storage", updateWishlistCount)
      window.removeEventListener("wishlistChange", handleWishlistChange)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Books", href: "/books" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <div className="flex h-full flex-col">
                <div className="flex items-center border-b py-4">
                  <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                    <BookOpen className="h-5 w-5" />
                    <span>BookHaven</span>
                  </Link>
                </div>
                <nav className="flex-1 overflow-auto py-4">
                  <ul className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <BookOpen className="h-5 w-5" />
            <span className="hidden sm:inline-block">BookHaven</span>
          </Link>
        </div>
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {wishlistCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

