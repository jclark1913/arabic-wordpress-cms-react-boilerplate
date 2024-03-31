import { useState, useEffect } from "react";
import { WordPressAPI } from "../api/api";
import { CategoryInterface } from "./Category";
import Category from "./Category";

const TableOfContents: React.FC = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    const getCategoriesOnMount = async () => {
      const response = await WordPressAPI.getCategories();
      const categories = response.categories.reduce(
        (acc: CategoryInterface[], category: any) => {
          if (category.post_count > 0) {
            acc.push({
              id: category.ID,
              name: category.name,
              slug: category.slug,
            });
          }
          return acc;
        },
        []
      );
      setCategories(categories);
    };
    getCategoriesOnMount();
  }, []);

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-4">جدول المحتويات</h2>
      <div>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default TableOfContents;
