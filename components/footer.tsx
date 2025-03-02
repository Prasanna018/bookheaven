import Link from "next/link"
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold">
              <BookOpen className="h-5 w-5" />
              <span>BookHaven</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your one-stop destination for all your reading needs. Discover new worlds through our extensive collection
              of books.
            </p>
            <div className="mt-4 flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-muted-foreground hover:text-primary">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-muted-foreground hover:text-primary">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-muted-foreground hover:text-primary">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/fiction" className="text-muted-foreground hover:text-primary">
                  Fiction
                </Link>
              </li>
              <li>
                <Link href="/categories/non-fiction" className="text-muted-foreground hover:text-primary">
                  Non-Fiction
                </Link>
              </li>
              <li>
                <Link href="/categories/science" className="text-muted-foreground hover:text-primary">
                  Science & Technology
                </Link>
              </li>
              <li>
                <Link href="/categories/children" className="text-muted-foreground hover:text-primary">
                  Children's Books
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm text-muted-foreground">123 Book Street</p>
              <p className="text-sm text-muted-foreground">Reading City, RC 12345</p>
              <p className="mt-2 text-sm text-muted-foreground">Email: info@bookhaven.com</p>
              <p className="text-sm text-muted-foreground">Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BookHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

