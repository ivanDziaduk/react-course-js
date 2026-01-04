import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import './Pages.css'

function Chapter3() {
  return (
    <div className="page chapter-page">
      <div className="container">
        <header className="chapter-header animate-fade-in">
          <span className="chapter-badge purple">Глава 03</span>
          <h1>React среднего уровня</h1>
          <p className="chapter-intro">
            Эта глава выводит разработчика на уровень, позволяющий работать над реальными проектами. 
            Здесь мы изучим маршрутизацию, Context API, кастомные хуки, оптимизацию, 
            архитектуру проекта, работу с API и деплой.
          </p>
        </header>

        {/* React Router */}
        <section className="content-section animate-fade-in">
          <h2>1. Маршрутизация в React (React Router)</h2>
          <p>Современные приложения состоят из страниц. В React за это отвечает <strong>React Router</strong>.</p>

          <h3>1.1. Установка React Router</h3>
          <CodeBlock 
            title="Установка"
            language="bash"
            code={`npm install react-router-dom`}
          />

          <h3>1.2. Основная структура с роутами</h3>
          <div className="file-structure">
            <span className="folder">src/</span><br/>
            <span className="folder">├── pages/</span><br/>
            <span className="file">│   ├── Home.jsx</span><br/>
            <span className="file">│   ├── About.jsx</span><br/>
            <span className="file">│   └── NotFound.jsx</span>
          </div>

          <CodeBlock 
            title="App.jsx с роутингом"
            language="jsx"
            code={`import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`}
          />

          <h3>1.3. Навигация</h3>
          <CodeBlock 
            title="Компонент Link"
            language="jsx"
            code={`import { Link } from "react-router-dom";

<Link to="/">Главная</Link>
<Link to="/about">О нас</Link>`}
          />

          <h3>1.4. Программная навигация</h3>
          <CodeBlock 
            title="useNavigate"
            language="jsx"
            code={`import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/about");`}
          />
        </section>

        {/* Context API */}
        <section className="content-section animate-fade-in">
          <h2>2. Глобальное состояние: Context API</h2>
          <p>
            Если пропсы идут слишком глубоко — появляется проблема «prop drilling». 
            Для этого используется <strong>Context API</strong>.
          </p>

          <h3>2.1. Создание контекста</h3>
          <CodeBlock 
            title="UserContext.js"
            language="jsx"
            code={`import { createContext } from "react";

export const UserContext = createContext(null);`}
          />

          <h3>2.2. Провайдер контекста</h3>
          <CodeBlock 
            title="Оборачиваем приложение"
            language="jsx"
            code={`import { UserContext } from "./UserContext";

export default function App() {
  const user = { name: "Дмитрий", role: "admin" };

  return (
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
}`}
          />

          <h3>2.3. Использование контекста</h3>
          <CodeBlock 
            title="Получение данных"
            language="jsx"
            code={`import { useContext } from "react";
import { UserContext } from "../UserContext";

const { name, role } = useContext(UserContext);`}
          />

          <div className="info-box tip">
            <span className="info-icon">💡</span>
            <div className="info-content">
              <strong>Когда использовать Context?</strong>
              <p>Для данных, которые нужны многим компонентам: тема, авторизация, язык.</p>
            </div>
          </div>
        </section>

        {/* Кастомные хуки */}
        <section className="content-section animate-fade-in">
          <h2>3. Кастомные хуки</h2>
          <p>
            <strong>Кастомный хук</strong> — это функция, начинающаяся с <code>use</code>, 
            которая инкапсулирует повторяющуюся логику.
          </p>

          <CodeBlock 
            title="useLocalStorage.js"
            language="jsx"
            code={`import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}`}
          />

          <p>Использование:</p>
          <CodeBlock 
            title="Использование хука"
            language="jsx"
            code={`const [theme, setTheme] = useLocalStorage("theme", "light");`}
          />

          <p><strong>Польза кастомных хуков:</strong></p>
          <ul>
            <li>Повторное использование кода</li>
            <li>Упрощение компонентов</li>
            <li>Улучшение архитектуры</li>
          </ul>
        </section>

        {/* API */}
        <section className="content-section animate-fade-in">
          <h2>4. Работа с API: уровень middle</h2>
          <p>Работа с HTTP-запросами — ключевой навык.</p>

          <h3>4.1. Модель API-сервиса</h3>
          <div className="file-structure">
            <span className="folder">src/</span><br/>
            <span className="folder">├── api/</span><br/>
            <span className="file">│   └── users.js</span>
          </div>

          <CodeBlock 
            title="users.js"
            language="jsx"
            code={`const BASE = "https://jsonplaceholder.typicode.com";

export function getUsers() {
  return fetch(\`\${BASE}/users\`).then(res => res.json());
}`}
          />

          <h3>4.2. Использование API в компоненте</h3>
          <CodeBlock 
            title="Компонент Users"
            language="jsx"
            code={`import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`}
          />
        </section>

        {/* Оптимизация */}
        <section className="content-section animate-fade-in">
          <h2>5. Оптимизация производительности</h2>
          <p>React умеет избегать ненужных перерисовок, но иногда их нужно контролировать вручную.</p>

          <h3>5.1. memo — предотвращение повторного рендера</h3>
          <CodeBlock 
            title="React.memo"
            language="jsx"
            code={`import { memo } from "react";

const UserCard = memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});`}
          />

          <h3>5.2. useCallback — мемоизация функций</h3>
          <CodeBlock 
            title="useCallback"
            language="jsx"
            code={`const handleClick = useCallback(() => {
  console.log("clicked");
}, []);`}
          />

          <h3>5.3. useMemo — мемоизация вычислений</h3>
          <CodeBlock 
            title="useMemo"
            language="jsx"
            code={`const result = useMemo(() => heavyCalc(value), [value]);`}
          />

          <div className="info-box note">
            <span className="info-icon">⚡</span>
            <div className="info-content">
              <strong>Не оптимизируйте преждевременно!</strong>
              <p>Используйте memo/useCallback/useMemo только когда есть реальная проблема с производительностью.</p>
            </div>
          </div>
        </section>

        {/* Архитектура */}
        <section className="content-section animate-fade-in">
          <h2>6. Архитектура проекта уровня middle</h2>
          <p>Чёткая структура проекта — обязательная часть уровня middle.</p>

          <div className="file-structure">
            <span className="folder">src/</span><br/>
            <span className="folder">├── api/</span> <span className="comment">// запросы к серверу</span><br/>
            <span className="folder">├── components/</span> <span className="comment">// переиспользуемые UI</span><br/>
            <span className="folder">├── hooks/</span> <span className="comment">// кастомные хуки</span><br/>
            <span className="folder">├── pages/</span> <span className="comment">// страницы</span><br/>
            <span className="folder">├── context/</span> <span className="comment">// глобальное состояние</span><br/>
            <span className="folder">├── utils/</span> <span className="comment">// вспомогательные функции</span><br/>
            <span className="folder">├── assets/</span> <span className="comment">// картинки, svg</span><br/>
            <span className="folder">└── layouts/</span> <span className="comment">// общие каркасы страниц</span>
          </div>
        </section>

        {/* Layout */}
        <section className="content-section animate-fade-in">
          <h2>7. Layout-компоненты</h2>
          <p>Общий макет страниц — важная часть SPA.</p>

          <CodeBlock 
            title="Layout.jsx"
            language="jsx"
            code={`function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}`}
          />

          <p>Использование в Router:</p>
          <CodeBlock 
            title="Вложенные роуты"
            language="jsx"
            code={`<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>`}
          />
        </section>

        {/* Формы */}
        <section className="content-section animate-fade-in">
          <h2>8. Управление формами на уровне middle</h2>

          <h3>8.1. Работа с несколькими полями</h3>
          <CodeBlock 
            title="Множественные поля"
            language="jsx"
            code={`const [form, setForm] = useState({ name: "", email: "" });

function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}`}
          />

          <h3>8.2. Валидация</h3>
          <CodeBlock 
            title="Простая валидация"
            language="jsx"
            code={`if (!form.email.includes("@")) {
  setError("Неверный email");
}`}
          />
        </section>

        {/* Lazy loading */}
        <section className="content-section animate-fade-in">
          <h2>9. Lazy-loading и Suspense</h2>
          <p>Используется для ускорения загрузки приложения.</p>

          <CodeBlock 
            title="Ленивая загрузка"
            language="jsx"
            code={`const Settings = React.lazy(() => import("./pages/Settings"));

<Suspense fallback={<p>Загрузка...</p>}>
  <Settings />
</Suspense>`}
          />
        </section>

        {/* Авторизация */}
        <section className="content-section animate-fade-in">
          <h2>10. Авторизация (basic flow)</h2>
          <p>Алгоритм:</p>
          <ol>
            <li>Отправить логин/пароль</li>
            <li>Получить токен</li>
            <li>Сохранить токен</li>
            <li>Подставлять токен в запросы</li>
            <li>Защищать приватные роуты</li>
          </ol>

          <CodeBlock 
            title="Защищённый роут"
            language="jsx"
            code={`<Route
  path="/profile"
  element={token ? <Profile /> : <Navigate to="/login" />}
/>`}
          />
        </section>

        {/* Деплой */}
        <section className="content-section animate-fade-in">
          <h2>11. Продакшн-сборка и деплой</h2>

          <h3>11.1. Сборка</h3>
          <CodeBlock 
            title="Сборка проекта"
            language="bash"
            code={`npm run build`}
          />
          <p>Папка <code>dist/</code> — готова к загрузке.</p>

          <h3>11.2. GitHub Pages</h3>
          <CodeBlock 
            title="Установка gh-pages"
            language="bash"
            code={`npm install gh-pages --save-dev`}
          />

          <p>Добавляем в <code>package.json</code>:</p>
          <CodeBlock 
            title="package.json"
            language="json"
            code={`"homepage": "https://username.github.io/my-app",
"scripts": {
  "deploy": "gh-pages -d dist",
  "predeploy": "npm run build"
}`}
          />

          <h3>11.3. Netlify</h3>
          <ul>
            <li>Зайти на <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">netlify.com</a></li>
            <li>Подключить GitHub репозиторий</li>
            <li>Build command: <code>npm run build</code></li>
            <li>Folder: <code>dist</code></li>
          </ul>

          <h3>11.4. Vercel</h3>
          <ul>
            <li>Зайти на <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
            <li>Импортировать репозиторий</li>
            <li>Проект развернётся автоматически</li>
          </ul>
        </section>

        {/* Итоги */}
        <section className="content-section animate-fade-in">
          <h2>12. Итоги главы</h2>
          <p>В этой главе вы изучили темы, которые отличают джуна от миддла:</p>
          
          <ul>
            <li>Маршрутизация и структура SPA</li>
            <li>Context API</li>
            <li>Архитектура проекта и структура директорий</li>
            <li>Создание кастомных хуков</li>
            <li>Оптимизация с помощью memo/useCallback/useMemo</li>
            <li>Работа с API на уровне сервиса</li>
            <li>Обработка ошибок и состояния загрузки</li>
            <li>Lazy-loading, Suspense</li>
            <li>Авторизация и защищённые маршруты</li>
            <li>Продакшн-сборка и деплой</li>
          </ul>

          <div className="info-box tip">
            <span className="info-icon">🎯</span>
            <div className="info-content">
              <strong>Почти Middle!</strong>
              <p>Эта часть формирует фундамент навыков уровня Middle React Developer. 
              Осталась финальная глава — итоговый проект!</p>
            </div>
          </div>
        </section>

        {/* Навигация */}
        <nav className="chapter-nav">
          <Link to="/chapter-2" className="nav-btn prev">
            <span>←</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Назад</span>
              <span className="nav-btn-title">Глава 2: Базовые основы</span>
            </div>
          </Link>
          <Link to="/chapter-4" className="nav-btn next">
            <span>→</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Далее</span>
              <span className="nav-btn-title">Глава 4: Итоговый проект</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Chapter3

