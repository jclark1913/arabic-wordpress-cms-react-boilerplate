import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";

export interface PostInterface {
  id: number;
  title: string;
  content: string;
  featuredImageUrl: string;
  date: string;
  modified: string;
  shortURL: string;
  tags: string[];
  slug: string;
}

const Post: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [post, setPost] = useState<PostInterface | null>(null);

  useEffect(() => {
    const getPostOnMount = async () => {
      if (slug) {
        const response = await WordPressAPI.getPostBySlug(slug);
        const currPost = {
          id: response.ID,
          title: response.title,
          content: response.content,
          featuredImageUrl: response.featured_image,
          date: response.date,
          modified: response.modified,
          shortURL: response.short_URL,
          tags: Object.keys(response.tags),
          slug: response.slug,
        };
        setPost(currPost);
      }
    };
    getPostOnMount();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return <div>{post.content}</div>;
};

export default Post;
