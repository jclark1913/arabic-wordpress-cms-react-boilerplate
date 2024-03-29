import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import StaticPage from '../components/StaticPage';

const RoutesList: React.FC = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<StaticPage slug="home" />} /> */}
                <Route path="/about" element={<StaticPage slug="about" />} />
                <Route path="/contact" element={<StaticPage slug="contact" />} />
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </>
    )
}

export default RoutesList;