import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";
import { PostInterface } from "./Post";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";

export interface CategoryInterface {
  id: number;
  name: string;
  slug: string;
}

interface CategoryProps {
  category: CategoryInterface;
}

const Category: React.FC<CategoryProps> = ({ category }) => {
  const [posts, setPosts] = useState<PostInterface[] | null>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const getPostsOnMount = async () => {
      const response = await WordPressAPI.getPostsByCategory(category.slug);
      const posts = response.posts.map((post: any) => ({
        id: post.ID,
        title: post.title,
        content: post.content,
        featuredImageUrl: post.featured_image,
        date: post.date,
        modified: post.modified,
        shortURL: post.short_URL,
        tags: Object.keys(post.tags),
      }));
      setPosts(posts);
    };
    getPostsOnMount();
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-3 items-center">
        {isExpanded ? (
          <ChevronDoubleUpIcon
            className="h-5 w-5 transform rotate-180"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        ) : (
          <ChevronDoubleLeftIcon
            className="h-5 w-5"
            onClick={() => setIsExpanded(!isExpanded)}
          />
        )}
        <h1 className="text-2xl">{category.name} ({posts?.length})</h1>
      </div>
      <div className="flex flex-col">
        {isExpanded ? (
          <>
            {posts?.map((post, index) => (
              <div key={index} className="flex flex-row gap-3 items-center">
                <h2>{post.title}</h2>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Category;
