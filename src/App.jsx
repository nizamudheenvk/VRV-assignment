import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';

function App() {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const HomeWithRole = () => {
    const query = useQuery();
    const role = query.get("role"); 
    return <Home role={role} />;
  };

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Usermanagement" element={<HomeWithRole />} />
    </Routes>
  );
}

export default App;
