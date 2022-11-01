import React from "react";
import { categoryItems } from "../../data/categories";
import { categoryType } from "../../utils/dataType";
import CategoryItems from "./CategoryItems";
import './Categories.scss'

const Categories = () => {
  const [allCategories, setAllCategories] = React.useState<categoryType[]>([]);
  React.useEffect(() => {
    setAllCategories(categoryItems);
  }, []);


  return (
    <div className="category-container">
      {allCategories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
