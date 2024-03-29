import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";

interface Category {
  id: number;
  name: string;
  slug: string;
}

const TableOfContents: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getCategoriesOnMount = async () => {
      const response = await WordPressAPI.getCategories();
      const categories = response.categories.map((category: any) => ({
        id: category.ID,
        name: category.name,
        slug: category.slug,
      }));
      setCategories(categories);
    };
  });

  return <></>;
};

export default TableOfContents;
