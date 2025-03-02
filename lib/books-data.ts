import type { Book } from "./types"

// Generate 50+ books for the store
export const allBooks: Book[] = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Emma Roberts",
    description:
      "A captivating fiction book that takes readers on an unforgettable journey. The Silent Echo explores themes of adventure, discovery, and human connection in a way that will stay with you long after you've turned the final page.",
    price: 14.99,
    originalPrice: 19.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "fiction",
    publishDate: "2022-05-12",
    isbn: "978-1234567890",
    pages: 324,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "16+",
  },
  {
    id: 2,
    title: "Whispers in the Dark",
    author: "James Wilson",
    description:
      "A thrilling mystery novel that will keep you on the edge of your seat. Whispers in the Dark combines suspense, intrigue, and unexpected twists in a masterful narrative.",
    price: 12.99,
    coverImage: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "mystery",
    publishDate: "2021-08-23",
    isbn: "978-2345678901",
    pages: 287,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "18+",
  },
  {
    id: 3,
    title: "Beyond the Horizon",
    author: "Sophia Chen",
    description:
      "An epic fantasy adventure that transports readers to a world of magic and wonder. Beyond the Horizon is a tale of courage, friendship, and the power of imagination.",
    price: 16.99,
    originalPrice: 21.99,
    coverImage: "https://images.unsplash.com/photo-1531901599143-df5010ab9438?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "fantasy",
    publishDate: "2023-01-15",
    isbn: "978-3456789012",
    pages: 412,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "14+",
  },
  {
    id: 4,
    title: "The Last Journey",
    author: "Michael Johnson",
    description:
      "A poignant memoir that chronicles the author's travels across five continents. The Last Journey is a reflection on life, culture, and the human spirit.",
    price: 18.99,
    coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "non-fiction",
    publishDate: "2022-11-08",
    isbn: "978-4567890123",
    pages: 356,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "All ages",
  },
  {
    id: 5,
    title: "Eternal Shadows",
    author: "Olivia Davis",
    description:
      "A gothic romance set in Victorian England. Eternal Shadows weaves a tale of forbidden love, dark secrets, and supernatural elements.",
    price: 13.99,
    originalPrice: 17.99,
    coverImage: "https://images.unsplash.com/photo-1603162525937-92a6e72654e8?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "romance",
    publishDate: "2020-10-31",
    isbn: "978-5678901234",
    pages: 298,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "16+",
  },
  {
    id: 6,
    title: "The Hidden Truth",
    author: "Daniel Smith",
    description:
      "A thought-provoking exploration of philosophy and ethics. The Hidden Truth challenges readers to question their assumptions and see the world in a new light.",
    price: 15.99,
    coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "non-fiction",
    publishDate: "2023-03-22",
    isbn: "978-6789012345",
    pages: 275,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "18+",
  },
  {
    id: 7,
    title: "Forgotten Memories",
    author: "Isabella Martinez",
    description:
      "A heartwarming story about family, loss, and redemption. Forgotten Memories reminds us of the power of love and the importance of cherishing our past.",
    price: 11.99,
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "fiction",
    publishDate: "2021-06-14",
    isbn: "978-7890123456",
    pages: 243,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "14+",
  },
  {
    id: 8,
    title: "The Secret Garden",
    author: "William Brown",
    description:
      "A classic children's novel about the healing power of nature and friendship. The Secret Garden continues to captivate readers of all ages with its timeless message.",
    price: 9.99,
    originalPrice: 12.99,
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "children",
    publishDate: "2022-04-01",
    isbn: "978-8901234567",
    pages: 186,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "8-12",
  },
  {
    id: 9,
    title: "Echoes of Time",
    author: "Charlotte Taylor",
    description:
      "A sweeping historical fiction that spans generations. Echoes of Time is a masterful blend of fact and fiction that brings the past to vivid life.",
    price: 17.99,
    coverImage: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "history",
    publishDate: "2023-02-28",
    isbn: "978-9012345678",
    pages: 432,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "16+",
  },
  {
    id: 10,
    title: "The Lost City",
    author: "Alexander Lee",
    description:
      "An archaeological adventure that takes readers from the halls of academia to the depths of the Amazon rainforest. The Lost City is a thrilling quest for a legendary civilization.",
    price: 14.99,
    coverImage: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "adventure",
    publishDate: "2022-09-17",
    isbn: "978-0123456789",
    pages: 367,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "12+",
  },
  {
    id: 11,
    title: "Midnight Dreams",
    author: "Emma Roberts",
    description:
      "A collection of short stories that explore the surreal and the supernatural. Midnight Dreams blurs the line between reality and fantasy in captivating ways.",
    price: 10.99,
    coverImage: "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "fiction",
    publishDate: "2021-12-05",
    isbn: "978-1122334455",
    pages: 215,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "16+",
  },
  {
    id: 12,
    title: "The Quantum Paradox",
    author: "James Wilson",
    description:
      "A fascinating exploration of quantum physics for the general reader. The Quantum Paradox makes complex scientific concepts accessible and engaging.",
    price: 19.99,
    coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800&h=1200",
    category: "science",
    publishDate: "2023-04-10",
    isbn: "978-2233445566",
    pages: 328,
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation: "16+",
  },
  // Add more books to reach 50+ total
  // Books 13-56 would be defined here with similar structure
]

// Generate additional books to reach 50+
for (let i = 13; i <= 56; i++) {
  const categories = [
    "fiction",
    "non-fiction",
    "science",
    "self-help",
    "children",
    "biography",
    "history",
    "mystery",
    "romance",
    "fantasy",
  ]
  const category = categories[Math.floor(Math.random() * categories.length)]

  const price = Number.parseFloat((4.99 + Math.random() * 25).toFixed(2))
  const hasDiscount = Math.random() > 0.7
  const originalPrice = hasDiscount ? Number.parseFloat((price * (1 + Math.random() * 0.5)).toFixed(2)) : undefined

  const year = 2010 + Math.floor(Math.random() * 14)
  const month = 1 + Math.floor(Math.random() * 12)
  const day = 1 + Math.floor(Math.random() * 28)
  const publishDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`

  const titles = [
    "The Silent Echo",
    "Whispers in the Dark",
    "Beyond the Horizon",
    "The Last Journey",
    "Eternal Shadows",
    "The Hidden Truth",
    "Forgotten Memories",
    "The Secret Garden",
    "Echoes of Time",
    "The Lost City",
    "Midnight Dreams",
    "The Quantum Paradox",
    "Starlight Wanderer",
    "The Ancient Prophecy",
    "Crimson Skies",
    "The Forgotten Path",
    "Emerald Forest",
    "The Silver Key",
    "Mystic Mountains",
    "The Golden Thread",
  ]

  const authors = [
    "Emma Roberts",
    "James Wilson",
    "Sophia Chen",
    "Michael Johnson",
    "Olivia Davis",
    "Daniel Smith",
    "Isabella Martinez",
    "William Brown",
    "Charlotte Taylor",
    "Alexander Lee",
  ]

  const ageRecommendations = ["All ages", "8-12", "12+", "14+", "16+", "18+"]

  const unsplashImages = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
    "https://images.unsplash.com/photo-1531901599143-df5010ab9438",
    "https://images.unsplash.com/photo-1589998059171-988d887df646",
    "https://images.unsplash.com/photo-1603162525937-92a6e72654e8",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    "https://images.unsplash.com/photo-1629992101753-56d196c8aabb",
    "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf",
    "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765",
  ]

  const title = titles[Math.floor(Math.random() * titles.length)] + ` ${i}`
  const author = authors[Math.floor(Math.random() * authors.length)]
  const ageRecommendation = ageRecommendations[Math.floor(Math.random() * ageRecommendations.length)]
  const coverImage =
    unsplashImages[Math.floor(Math.random() * unsplashImages.length)] + "?auto=format&fit=crop&q=80&w=800&h=1200"

  allBooks.push({
    id: i,
    title,
    author,
    description: `A captivating ${category} book that takes readers on an unforgettable journey. ${title} by ${author} explores themes of adventure, discovery, and human connection in a way that will stay with you long after you've turned the final page.`,
    price,
    originalPrice,
    coverImage,
    category,
    publishDate,
    isbn: `978-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    pages: 100 + Math.floor(Math.random() * 500),
    language: "English",
    publisher: "BookHaven Publishing",
    ageRecommendation,
  })
}

// Featured books (subset of all books)
export const featuredBooks = allBooks.slice(0, 8)

