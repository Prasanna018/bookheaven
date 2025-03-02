import Link from "next/link"
import Image from "next/image"
import { Book, BookOpen, Coffee, Compass, Lightbulb, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Fiction",
    icon: <Sparkles className="h-6 w-6" />,
    count: 245,
    href: "/categories/fiction",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&q=80&w=400",
    ageRange: "14+",
  },
  {
    name: "Non-Fiction",
    icon: <Lightbulb className="h-6 w-6" />,
    count: 187,
    href: "/categories/non-fiction",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=400",
    ageRange: "All ages",
  },
  {
    name: "Science & Technology",
    icon: <Compass className="h-6 w-6" />,
    count: 132,
    href: "/categories/science",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400",
    ageRange: "12+",
  },
  {
    name: "Self-Help",
    icon: <Coffee className="h-6 w-6" />,
    count: 98,
    href: "/categories/self-help",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    ageRange: "16+",
  },
  {
    name: "Children's Books",
    icon: <Book className="h-6 w-6" />,
    count: 156,
    href: "/categories/children",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    ageRange: "3-12",
  },
  {
    name: "Biography",
    icon: <BookOpen className="h-6 w-6" />,
    count: 76,
    href: "/categories/biography",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    ageRange: "12+",
  },
]

export default function CategorySection() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
            <div className="relative h-40 w-full">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-200">{category.count} Books</p>
                <span className="mt-1 inline-block rounded-full bg-primary/80 px-2 py-0.5 text-xs text-white">
                  Ages: {category.ageRange}
                </span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

