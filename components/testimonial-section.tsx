import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "BookHaven has completely transformed my reading experience. Their selection is unmatched and the delivery is always prompt. I've discovered so many new authors thanks to their recommendations!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As an avid reader, I've tried many online bookstores, but BookHaven stands out for their customer service and quality. The books always arrive in perfect condition.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4,
    text: "I love the personalized recommendations I get from BookHaven. It's like having my own personal librarian who knows exactly what I'll enjoy reading next.",
  },
]

export default function TestimonialSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "fill-current" : "fill-muted stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground">{testimonial.text}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

