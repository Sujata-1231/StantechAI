import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostsList from "./ features/posts/PostsList";
import PostDetail from "./ features/posts/PostDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
