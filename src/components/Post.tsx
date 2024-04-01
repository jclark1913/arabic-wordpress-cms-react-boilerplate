import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";
import DOMPurify from "dompurify";
import { POST_DETAILS } from "../constants/post";

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
        const sanitizedContent = DOMPurify.sanitize(response.content);
        const currPost = {
          id: response.ID,
          title: response.title,
          content: sanitizedContent,
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

  const formatPublicationData = () => {
    if (post) {
      const formattedPublicationDate = new Date(post.date).toLocaleDateString();
      const formattedModifiedDate = new Date(
        post.modified
      ).toLocaleDateString();
      return (
        <div className="flex flex-col">
          <span>
            {POST_DETAILS.date}: {formattedPublicationDate}
          </span>
          <span>
            {POST_DETAILS.lastModified}: {formattedModifiedDate}
          </span>
        </div>
      );
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto w-2/3">
      {post ? (
        <>
          {post.featuredImageUrl ? (
            <img
              src={post.featuredImageUrl}
              alt="featured_image"
              className="mb-5"
            />
          ) : null}
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4">
            {post.title}
          </h1>
          <>{formatPublicationData()}</>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="text-md sm:text-2xl"
          ></div>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Post;
