"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { blogPosts } from "@/lib/blog-data";
import ReactMarkdown from "react-markdown";

// Random relatable photos for different categories
const categoryPhotos = {
  "AI": [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop"
  ],
  "Web Development": [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3387&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
  ],
  "Full Stack": [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
  ],
  "Development": [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3387&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
  ],
  "default": [
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2070&auto=format&fit=crop"
  ]
};

const getRandomPhoto = (category: string) => {
  const photos = categoryPhotos[category as keyof typeof categoryPhotos] || categoryPhotos.default;
  return photos[Math.floor(Math.random() * photos.length)];
};

const BlogContent = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default function AppleCardsCarouselDemo() {
  // Convert blog posts to carousel cards
  const cards = blogPosts.map((post, index) => {
    const category = post.tags[0] || "Development";
    const photo = getRandomPhoto(category);
    
    return (
      <Card 
        key={post.id} 
        card={{
          src: photo,
          title: post.title,
          category: category,
          content: <BlogContent content={post.content} />
        }} 
        index={index} 
      />
    );
  });

  return (
    <div className="w-full h-full py-12">
      <h2 className="section-title">Latest Articles & Insights</h2>
      <Carousel items={cards} />
    </div>
  );
} 