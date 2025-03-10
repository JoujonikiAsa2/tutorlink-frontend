import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/tutors";

const LatestBlogs = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
        <div className="container px-4 md:px-6 mx-auto ">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blogs</h2>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-sm">Sort by:</span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px] h-8">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(0, 4).map((post) => (
              <Card key={post.id} className="overflow-hidden bg-background/20 p-0">
                <div className="w-full h-72 relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Badge variant="secondary">{post.topic}</Badge>
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center text-primary"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestBlogs;
