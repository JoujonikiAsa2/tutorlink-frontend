import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/tutors";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedBlog = () => {
  const featuredPost = blogPosts[0];
  return (
    <div>
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter mb-6">
            Platform Updated
          </h2>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <Badge variant="secondary" className="text-white">{featuredPost.topic}</Badge>
              <h3 className="text-3xl font-bold tracking-tighter">
                {featuredPost.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{featuredPost.description}</p>
              <Button asChild>
                <Link href={`/blog/${featuredPost.id}`}>
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBlog;
