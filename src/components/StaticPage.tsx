import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";
import DOMPurify from "dompurify";

interface StaticPageProps {
  slug: string;
}

interface StaticPageContent {
  title: string;
  content: string;
  featuredImageUrl?: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ slug }) => {
  const [staticPageContent, setStaticPageContent] =
    useState<StaticPageContent | null>(null);

  /** */
  useEffect(() => {
    const getStaticPageContentOnMount = async () => {
      setStaticPageContent(null);
      const response = await WordPressAPI.getPostBySlug(slug);
      const sanitizedContent = DOMPurify.sanitize(response.content);
      setStaticPageContent({
        title: response.title,
        content: sanitizedContent,
        featuredImageUrl: response.featured_image,
      });
    };
    getStaticPageContentOnMount();
  }, [slug]);

  return (
    <div className="container mx-auto w-2/3 mt-10">
      {staticPageContent ? (
        <>
          {staticPageContent.featuredImageUrl ? (
            <img
              src={staticPageContent.featuredImageUrl}
              alt="featured_image"
              className="mb-5"
            />
          ) : null}
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4">
            {staticPageContent.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: staticPageContent.content }}
            className="text-md sm:text-2xl"
          ></div>{" "}
        </>
      ) : null}
    </div>
  );
};

export default StaticPage;
