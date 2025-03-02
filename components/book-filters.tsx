"use client"

import type { Dispatch, SetStateAction } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

const categories = [
  { id: "fiction", name: "Fiction" },
  { id: "non-fiction", name: "Non-Fiction" },
  { id: "science", name: "Science & Technology" },
  { id: "self-help", name: "Self-Help" },
  { id: "children", name: "Children's Books" },
  { id: "biography", name: "Biography" },
  { id: "history", name: "History" },
  { id: "mystery", name: "Mystery & Thriller" },
  { id: "romance", name: "Romance" },
  { id: "fantasy", name: "Fantasy & Sci-Fi" },
]

interface BookFiltersProps {
  selectedCategory: string | null
  setSelectedCategory: Dispatch<SetStateAction<string | null>>
  sortBy: string
  setSortBy: Dispatch<SetStateAction<string>>
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export function BookFilters({
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  setCurrentPage,
}: BookFiltersProps) {
  const handleCategoryChange = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
    setCurrentPage(1)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    setCurrentPage(1)
  }

  const getSortLabel = (value: string) => {
    switch (value) {
      case "newest":
        return "Newest Arrivals"
      case "price-low":
        return "Price: Low to High"
      case "price-high":
        return "Price: High to Low"
      case "title-asc":
        return "Title: A to Z"
      default:
        return "Sort By"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
        <CardDescription>Refine your book search</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {getSortLabel(sortBy)}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleSortChange("newest")}>
                  Newest Arrivals
                  {sortBy === "newest" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange("price-low")}>
                  Price: Low to High
                  {sortBy === "price-low" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange("price-high")}>
                  Price: High to Low
                  {sortBy === "price-high" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleSortChange("title-asc")}>
                  Title: A to Z{sortBy === "title-asc" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-medium">Categories</h3>
          <div className="space-y-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              className="w-full justify-start"
              onClick={() => handleCategoryChange(null)}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        <Button
          variant="outline"
          onClick={() => {
            setSelectedCategory(null)
            setSortBy("newest")
            setCurrentPage(1)
          }}
        >
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  )
}

