import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedBooks from "@/components/featured-books"
import CategorySection from "@/components/category-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
          <div className="animate-gradient-x absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 z-0"></div>
          <div className="absolute inset-0 bg-[url('/hero-books.jpg')] bg-cover bg-center z-[-1]"></div>
        </div>
        <div className="container relative z-20 flex min-h-[500px] flex-col items-center justify-center py-12 text-center md:min-h-[600px] md:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Discover Your Next <span className="text-primary">Favorite Book</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            Explore our vast collection of books across all genres. From bestsellers to rare finds, we have something
            for every reader.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/books">Browse Books</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/categories">Explore Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Books</h2>
          <Link href="/books" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <FeaturedBooks />
      </section>

      {/* Categories Section */}
      <section className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Popular Categories</h2>
          <Link href="/categories" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <CategorySection />
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/50 py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl">What Our Readers Say</h2>
          <TestimonialSection />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container">
        <div className="rounded-xl bg-primary/10 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <BookOpen className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">Stay Updated with BookHaven</h2>
            <p className="mt-4 text-muted-foreground">
              Subscribe to our newsletter to receive updates on new arrivals, special offers, and reading
              recommendations.
            </p>
            <form className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-r-none"
                required
              />
              <Button type="submit" className="sm:rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

