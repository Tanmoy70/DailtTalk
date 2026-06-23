import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Calling from '../pages/Calling';
import NotFound from '../pages/NotFound';
// import ProtectedRoute from '../components/common/ProtectedRoute';

// Pages Route for all the components in Home Page
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/connect"
        element={
          // <ProtectedRoute>
            <Calling />
          // </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;