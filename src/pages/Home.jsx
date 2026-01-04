import { Link } from 'react-router-dom'
import './Pages.css'

function Home() {
  const features = [
    { icon: '🚀', title: 'С нуля до Middle', desc: 'Полный путь от установки Node.js до продакшн-проекта' },
    { icon: '💻', title: 'Практика', desc: 'Реальные примеры кода и проекты на каждом этапе' },
    { icon: '🧠', title: 'Глубокое понимание', desc: 'Не просто "как", а "почему" — понимание архитектуры' },
    { icon: '⚡', title: 'Современный стек', desc: 'Vite, React 18+, React Router, Zustand, React Query' },
  ]

  const chapters = [
    { num: 1, title: 'Подготовка окружения', desc: 'Node.js, npm, Vite, структура проекта', color: 'cyan', link: '/chapter-1' },
    { num: 2, title: 'Базовые основы React', desc: 'Компоненты, пропсы, состояние, хуки', color: 'green', link: '/chapter-2' },
    { num: 3, title: 'React среднего уровня', desc: 'Роутинг, Context, оптимизация, деплой', color: 'purple', link: '/chapter-3' },
    { num: 4, title: 'Итоговый проект', desc: 'Task Manager уровня Middle', color: 'orange', link: '/chapter-4' },
  ]

  const skills = [
    'Функциональные компоненты',
    'React Hooks (useState, useEffect, useRef)',
    'Props и State',
    'Условный рендеринг',
    'Работа со списками',
    'React Router',
    'Context API',
    'Кастомные хуки',
    'Оптимизация (memo, useCallback, useMemo)',
    'Работа с API',
    'Архитектура проекта',
    'Деплой на Vercel/Netlify',
  ]

  return (
    <div className="page home-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero animate-fade-in">
          <div className="hero-badge">
            <span className="badge-icon">📚</span>
            <span>Бесплатный курс 2025</span>
          </div>
          
          <h1 className="hero-title">
            React Course
            <span className="hero-subtitle">От нуля до Middle-разработчика</span>
          </h1>
          
          <p className="hero-desc">
            Полный практический курс по React для начинающих. Изучи современную 
            веб-разработку с нуля и стань востребованным фронтенд-разработчиком.
          </p>
          
          <div className="hero-actions">
            <Link to="/chapter-1" className="btn btn-primary">
              <span>Начать обучение</span>
              <span className="btn-icon">→</span>
            </Link>
            <a href="#chapters" className="btn btn-secondary">
              Программа курса
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">4</span>
              <span className="stat-label">главы</span>
            </div>
            <div className="stat">
              <span className="stat-value">50+</span>
              <span className="stat-label">тем</span>
            </div>
            <div className="stat">
              <span className="stat-value">100+</span>
              <span className="stat-label">примеров кода</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card animate-fade-in animate-delay-${index + 1}`}>
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is React */}
        <section className="about-section animate-fade-in">
          <div className="about-content">
            <div className="about-text">
              <h2>Что такое React?</h2>
              <p>
                <strong>React</strong> — это JavaScript-библиотека для создания 
                пользовательских интерфейсов. Она разработана компанией Meta (Facebook) 
                и используется такими гигантами как Netflix, Airbnb, Uber, Instagram и многими другими.
              </p>
              <p>
                React позволяет создавать сложные интерактивные веб-приложения, 
                разбивая интерфейс на переиспользуемые компоненты. Это делает код 
                более организованным, понятным и легко поддерживаемым.
              </p>
              <div className="about-highlight">
                <span className="highlight-icon">💡</span>
                <span>React — один из самых востребованных навыков на рынке фронтенд-разработки</span>
              </div>
            </div>
            <div className="about-code">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-title">App.jsx</span>
                </div>
                <pre className="code-content">
{`function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Привет, React! 👋</h1>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми меня
      </button>
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters */}
        <section id="chapters" className="chapters-section">
          <h2 className="section-title">Программа курса</h2>
          <p className="section-desc">
            4 главы, которые проведут тебя от полного нуля до уверенного Middle-разработчика
          </p>
          
          <div className="chapters-grid">
            {chapters.map((chapter, index) => (
              <Link 
                to={chapter.link} 
                key={chapter.num} 
                className={`chapter-card chapter-${chapter.color} animate-fade-in animate-delay-${index + 1}`}
              >
                <div className="chapter-num">0{chapter.num}</div>
                <h3 className="chapter-title">{chapter.title}</h3>
                <p className="chapter-desc">{chapter.desc}</p>
                <span className="chapter-link">
                  Изучить главу <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section animate-fade-in">
          <h2 className="section-title">Что ты изучишь</h2>
          <p className="section-desc">
            Навыки, которые ты получишь после прохождения курса
          </p>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-check">✓</span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section animate-fade-in">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Готов начать?</h2>
              <p>
                Первая глава уже ждёт тебя. Установи окружение и создай свой первый React-проект!
              </p>
              <Link to="/chapter-1" className="btn btn-primary btn-large">
                <span>Перейти к Главе 1</span>
                <span className="btn-icon">🚀</span>
              </Link>
            </div>
            <div className="cta-decoration">
              <span className="cta-emoji">⚛️</span>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="tips-section animate-fade-in">
          <h2 className="section-title">Советы для начинающих</h2>
          
          <div className="tips-grid">
            <div className="tip-card">
              <span className="tip-num">01</span>
              <h4>Практикуйся каждый день</h4>
              <p>Даже 30 минут в день дадут результат. Регулярность важнее интенсивности.</p>
            </div>
            <div className="tip-card">
              <span className="tip-num">02</span>
              <h4>Пиши код руками</h4>
              <p>Не копируй код — набирай его вручную. Так ты лучше запомнишь синтаксис.</p>
            </div>
            <div className="tip-card">
              <span className="tip-num">03</span>
              <h4>Экспериментируй</h4>
              <p>Меняй код из примеров, ломай и чини. Это лучший способ понять, как всё работает.</p>
            </div>
            <div className="tip-card">
              <span className="tip-num">04</span>
              <h4>Читай документацию</h4>
              <p>Официальная документация React — твой лучший друг. Используй react.dev</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

