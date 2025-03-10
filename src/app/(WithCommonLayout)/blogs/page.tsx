import FeaturedBlog from "@/components/modules/blogs/FeaturedBlog";
import LatestBlogs from "@/components/modules/blogs/LatestBlogs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <section className="w-full py-12 md:py-16 bg-gradient-to-l from-primary/40 to-secondary/50 backdrop-blur">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                  Blogs
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Educational tips, industry news, and platform updates
                </p>
              </div>
              <div className="w-full flex gap-4 max-w-sm mx-auto">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search by specific topic..."
                    className="pl-8"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    <SelectItem value="study-tips">Study Tips</SelectItem>
                    <SelectItem value="test-prep">Test Prep</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="career-planning">
                      Career Planning
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>
        <FeaturedBlog />
        <LatestBlogs/>
      </div>
    </div>
  );
};

export default BlogPage;
