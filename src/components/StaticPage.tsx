import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

interface StaticPageProps {
  slug: string | null;
  hideMetaData?: boolean;
}

interface StaticPageContent {
  title: string;
  content: string;
  featuredImageUrl?: string;
}

const StaticPage: React.FC<StaticPageProps> = ({ slug }) => {
  const [staticPageContent, setStaticPageContent] =
    useState<StaticPageContent | null>(null);

  const [hideMetaData, setHideMetaData] = useState<boolean>(false);

  const { slug: urlSlug } = useParams<{ slug?: string }>();

  /** */
  useEffect(() => {
    const getStaticPageContentOnMount = async () => {
      setStaticPageContent(null);
      slug === null ? setHideMetaData(false) : setHideMetaData(true);
      const currSlug = slug || urlSlug || "";
      console.log("currSlug: ", currSlug);
      const response = await WordPressAPI.getPostBySlug(currSlug);
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
    <div className="container mx-auto sm:w-2/3">
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
