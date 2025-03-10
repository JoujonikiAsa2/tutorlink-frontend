import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, CreditCard, Search, Filter } from "lucide-react";
import { subjects, tutors } from "@/lib/tutors";

const TutorsPage = () => {
  return (
    <div>
      {/* banner section*/}
      <section className="w-full py-12 md:py-16 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
        <div className="container px-4 md:px-0 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl text-primary">
                Browse Tutors
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Find the perfect tutor to help you achieve your academic goals
              </p>
            </div>
            <div className="w-full max-w-sm mx-auto">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by subject, name, or keyword..."
                  className="pl-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                  Clear all
                </Button>
              </div>
              {/* subject filtering */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="subject">
                  <AccordionTrigger>Subject</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={subject}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <label htmlFor={subject} className="text-sm">
                            {subject}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* price filtering */}
                <AccordionItem value="price">
                  <AccordionTrigger>Price Range</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="price-1"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="price-1" className="text-sm">
                          Under $25/hr
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="price-2"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="price-2" className="text-sm">
                          $25-$50/hr
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="price-3"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="price-3" className="text-sm">
                          $50-$75/hr
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="price-4"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="price-4" className="text-sm">
                          $75+/hr
                        </label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* rating filtering */}
                <AccordionItem value="rating">
                  <AccordionTrigger>Rating</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <div
                          key={rating}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            id={`rating-${rating}`}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="text-sm"
                          >
                            {rating}+ Stars
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                {/* availability filtering */}
                <AccordionItem value="availability">
                  <AccordionTrigger>Availability</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {["Available", "Unavailable"].map((time) => (
                        <div key={time} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={time}
                            className="h-4 w-4 rounded border-gray-300"
                          />
                          <label htmlFor={time} className="text-sm">
                            {time}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Tutors Grid */}
            <div className="md:col-span-3 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">{tutors.length} tutors found</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <Select defaultValue="relevance">
                    <SelectTrigger className="w-[180px] h-8">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="rating-high">
                        Rating: High to Low
                      </SelectItem>
                      <SelectItem value="price-low">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-high">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {tutors.map((tutor) => (
                  <Card key={tutor.id} className="overflow-hidden p-0 bg-secondary/20">
                    <div className="w-full h-40 relative">
                      <Image
                        src={tutor.image || "/placeholder.svg"}
                        alt={tutor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">{tutor.name}</h3>
                          <div className="flex items-center">
                            <Award className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm font-medium">
                              {tutor.rating}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {tutor.subjects.map((subject) => (
                            <Badge key={subject} variant="outline">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {tutor.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center">
                            <CreditCard className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-sm font-medium">
                              ${tutor.hourlyRate}/hr
                            </span>
                          </div>
                          <Button size="sm" asChild>
                            <Link href={`/tutors/${tutor.id}`}>
                              View Profile
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center pt-6">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <span className="sr-only">Previous page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <span className="sr-only">Next page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TutorsPage;
