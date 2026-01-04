import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Chapter1 from './pages/Chapter1'
import Chapter2 from './pages/Chapter2'
import Chapter3 from './pages/Chapter3'
import Chapter4 from './pages/Chapter4'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="chapter-1" element={<Chapter1 />} />
        <Route path="chapter-2" element={<Chapter2 />} />
        <Route path="chapter-3" element={<Chapter3 />} />
        <Route path="chapter-4" element={<Chapter4 />} />
      </Route>
    </Routes>
  )
}

export default App

