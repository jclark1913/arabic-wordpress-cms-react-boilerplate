import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import About from '../components/About';

const RoutesList: React.FC = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Homepage />} /> */}
                <Route path="/about" element={<About />} />
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
            </Routes>
        </>
    )
}

export default RoutesList;