import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import StaticPage from "../components/StaticPage";
import TableOfContents from "../components/TableOfContents";
import Post from "../components/Post";
import Home from "../Home";

const RoutesList: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<StaticPage slug="about" />} />
        <Route path="/contact" element={<StaticPage slug="contact" />} />
        <Route path="/table-of-contents" element={<TableOfContents />} />
        <Route path="/posts/:slug" element={<Post />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default RoutesList;
