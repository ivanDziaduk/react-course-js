import { Outlet, NavLink } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <nav className="nav">
            <NavLink to="/" className="logo">
              <span className="logo-icon">⚛️</span>
              <span className="logo-text">React<span className="logo-accent">Course</span></span>
            </NavLink>
            
            <div className="nav-links">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
                Главная
              </NavLink>
              <NavLink to="/chapter-1" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Глава 1
              </NavLink>
              <NavLink to="/chapter-2" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Глава 2
              </NavLink>
              <NavLink to="/chapter-3" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Глава 3
              </NavLink>
              <NavLink to="/chapter-4" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Глава 4
              </NavLink>
            </div>

            <div className="nav-badge">
              <span className="badge-text">Junior → Middle</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-logo">⚛️ ReactCourse</span>
              <p className="footer-desc">Полный курс по React — от новичка до Middle-разработчика</p>
            </div>
            <div className="footer-links">
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React Docs</a>
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
              <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js</a>
            </div>
            <div className="footer-copy">
              <p>© 2026 React Course. Создано с 💙 для начинающих разработчиков</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

