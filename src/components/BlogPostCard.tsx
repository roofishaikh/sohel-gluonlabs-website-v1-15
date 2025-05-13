
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-md transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs px-2.5 py-0.5 bg-secondary rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.date}
            </span>
          </div>
          <h3 className="font-bold text-xl">{post.title}</h3>
          <p className="text-muted-foreground text-sm">{post.excerpt}</p>
          <Link 
            to={`/blog/${post.slug}`} 
            className="text-primary font-medium inline-flex items-center text-sm hover:underline mt-2"
          >
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
