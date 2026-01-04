import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import './Pages.css'

function Chapter4() {
  return (
    <div className="page chapter-page">
      <div className="container">
        <header className="chapter-header animate-fade-in">
          <span className="chapter-badge orange">Глава 04</span>
          <h1>Итоговый проект и практики Middle-разработчика</h1>
          <p className="chapter-intro">
            В этой главе мы соберём воедино всё, что было пройдено ранее. Наша цель — создать 
            полноценное приложение Task Manager, используя подходы, которые применяются в реальной разработке. 
            После завершения у тебя будет работоспособный проект уровня production-ready.
          </p>
        </header>

        {/* Архитектура */}
        <section className="content-section animate-fade-in">
          <h2>1. Архитектура приложения: что должен понимать Middle</h2>
          <p>На этом уровне важно не просто уметь писать компоненты, но и понимать архитектуру.</p>

          <h3>1.1. Архитектурные подходы</h3>
          <ul>
            <li><strong>Feature-Sliced Design (FSD)</strong> — современный и популярный подход</li>
            <li><strong>Atomic Design</strong> — разделение на атомы/молекулы/организмы</li>
            <li><strong>Domain-driven structure</strong> — логическое разбиение по доменам</li>
          </ul>

          <h3>1.2. Принципы написания кода</h3>
          <ul>
            <li><strong>DRY</strong> — Don't Repeat Yourself</li>
            <li><strong>KISS</strong> — Keep It Simple, Stupid</li>
            <li><strong>SOLID</strong> — адаптированный под фронтенд</li>
            <li><strong>YAGNI</strong> — You Aren't Gonna Need It</li>
          </ul>

          <h3>1.3. Бизнес-логика vs UI-логика</h3>
          <p>На уровне middle ты умеешь:</p>
          <ul>
            <li>Выносить бизнес-логику за пределы компонентов</li>
            <li>Изолировать состояние</li>
            <li>Разделять презентационные и контейнерные компоненты</li>
            <li>Работать со стором (Redux или Zustand)</li>
            <li>Использовать хуки как инструменты композиции логики</li>
          </ul>
        </section>

        {/* Task Manager */}
        <section className="content-section animate-fade-in">
          <h2>2. Итоговый проект: Task Manager</h2>
          <p>Мы создадим приложение уровня «панель управления» с возможностью:</p>
          
          <ul>
            <li>Создавать задачи</li>
            <li>Редактировать задачи</li>
            <li>Удалять задачи</li>
            <li>Фильтровать по статусам</li>
            <li>Переводить задачи между колонками</li>
            <li>Синхронизировать данные с API</li>
            <li>Кешировать данные</li>
            <li>Оптимизировать ререндеры</li>
          </ul>

          <h3>Технологии проекта:</h3>
          <ul>
            <li>React 18+</li>
            <li>React Router 6+</li>
            <li>Zustand или Redux Toolkit</li>
            <li>React Query</li>
            <li>TypeScript (опционально)</li>
            <li>Axios</li>
            <li>Custom Hooks</li>
          </ul>
        </section>

        {/* Структура */}
        <section className="content-section animate-fade-in">
          <h2>3. Структура проекта (уровень middle)</h2>
          
          <div className="file-structure">
            <span className="folder">src/</span><br/>
            <span className="folder">├── app/</span><br/>
            <span className="folder">│   ├── providers/</span><br/>
            <span className="folder">│   ├── router/</span><br/>
            <span className="folder">│   └── store/</span><br/>
            <span className="folder">├── shared/</span><br/>
            <span className="folder">│   ├── ui/</span><br/>
            <span className="folder">│   ├── hooks/</span><br/>
            <span className="folder">│   └── utils/</span><br/>
            <span className="folder">├── features/</span><br/>
            <span className="folder">│   └── task/</span><br/>
            <span className="folder">│       ├── ui/</span><br/>
            <span className="folder">│       ├── model/</span><br/>
            <span className="folder">│       └── lib/</span><br/>
            <span className="folder">├── pages/</span><br/>
            <span className="folder">│   ├── Home/</span><br/>
            <span className="folder">│   ├── Tasks/</span><br/>
            <span className="folder">│   └── Settings/</span><br/>
            <span className="folder">└── widgets/</span><br/>
            <span className="folder">    ├── TaskBoard/</span><br/>
            <span className="folder">    └── Header/</span>
          </div>

          <p><strong>Объяснение структуры (FSD):</strong></p>
          <ul>
            <li><code>app/</code> — корень приложения, конфигурация, инициализация</li>
            <li><code>shared/</code> — общие элементы без бизнес-логики</li>
            <li><code>features/</code> — отдельные функциональные модули</li>
            <li><code>widgets/</code> — составные крупные элементы интерфейса</li>
            <li><code>pages/</code> — страницы</li>
          </ul>
        </section>

        {/* Глобальный стор */}
        <section className="content-section animate-fade-in">
          <h2>4. Подключение глобального состояния</h2>
          <p>На уровне middle важно осознанно выбрать инструмент состояния:</p>

          <ul>
            <li><strong>Zustand</strong> — лёгкий стор, идеален для небольших и средних приложений</li>
            <li><strong>Redux Toolkit</strong> — если нужна предсказуемость</li>
            <li><strong>React Query</strong> — для работы с API, кеширование, рефетч</li>
          </ul>

          <div className="info-box tip">
            <span className="info-icon">💡</span>
            <div className="info-content">
              <strong>Наш выбор</strong>
              <p>Используем Zustand + React Query — это современный стек.</p>
            </div>
          </div>

          <h3>Пример стора задач:</h3>
          <CodeBlock 
            title="taskStore.js (Zustand)"
            language="jsx"
            code={`import { create } from 'zustand';

export const useTaskStore = create((set) => ({
  tasks: [],
  activeTask: null,
  
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, task]
  })),
  
  removeTask: (id) => set((state) => ({
    tasks: state.tasks.filter(t => t.id !== id)
  })),
  
  updateTask: (id, updates) => set((state) => ({
    tasks: state.tasks.map(t => 
      t.id === id ? { ...t, ...updates } : t
    )
  })),
  
  setActiveTask: (task) => set({ activeTask: task })
}));`}
          />
        </section>

        {/* API слой */}
        <section className="content-section animate-fade-in">
          <h2>5. API слой</h2>
          <p>Что должен уметь middle-разработчик:</p>
          <ul>
            <li>Контролировать запросы и ошибки</li>
            <li>Писать retry-логику</li>
            <li>Подключать React Query</li>
            <li>Отделять API от UI</li>
          </ul>

          <CodeBlock 
            title="api/tasks.js"
            language="jsx"
            code={`import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const tasksApi = {
  getTasks: () => api.get('/tasks').then(res => res.data),
  createTask: (task) => api.post('/tasks', task).then(res => res.data),
  updateTask: (id, task) => api.put(\`/tasks/\${id}\`, task).then(res => res.data),
  deleteTask: (id) => api.delete(\`/tasks/\${id}\`),
};`}
          />
        </section>

        {/* TaskBoard */}
        <section className="content-section animate-fade-in">
          <h2>6. TaskBoard — бизнес-виджет</h2>
          <p>Основная доска задач, как в Trello:</p>

          <ul>
            <li>Три колонки: todo, in-progress, done</li>
            <li>Drag & drop (опционально)</li>
            <li>Отображение карточек задач</li>
            <li>Быстрые действия (редактирование, удаление)</li>
            <li>Фильтрация по статусу</li>
          </ul>

          <h3>Middle-подходы:</h3>
          <ul>
            <li>Разделение UI и логики</li>
            <li>Компонент колонки + компонент карточки</li>
            <li>Хук для логики</li>
            <li>Слой стора</li>
            <li>Мемоизация</li>
          </ul>
        </section>

        {/* Кастомные хуки */}
        <section className="content-section animate-fade-in">
          <h2>7. Кастомные хуки — главный инструмент Middle</h2>
          <p>Тебе нужно уметь:</p>
          <ul>
            <li>Выделять логические блоки из компонентов</li>
            <li>Избегать дублирования</li>
            <li>Разделять side-effects и UI</li>
          </ul>

          <h3>Примеры полезных хуков:</h3>
          <CodeBlock 
            title="useTasks.js"
            language="jsx"
            code={`export function useTasks() {
  const tasks = useTaskStore(state => state.tasks);
  const addTask = useTaskStore(state => state.addTask);
  const removeTask = useTaskStore(state => state.removeTask);
  
  return { tasks, addTask, removeTask };
}`}
          />

          <CodeBlock 
            title="useDebounce.js"
            language="jsx"
            code={`export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}`}
          />

          <CodeBlock 
            title="useOutsideClick.js"
            language="jsx"
            code={`export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}`}
          />
        </section>

        {/* Модалки */}
        <section className="content-section animate-fade-in">
          <h2>8. Модальные окна по-миддловски</h2>
          <p>На уровне middle модалка — не просто div:</p>

          <ul>
            <li><strong>Portal</strong> — рендер вне DOM-дерева</li>
            <li>Управление фокусом</li>
            <li>Закрытие по Esc и клику вне зоны</li>
            <li>Анимации</li>
            <li>Отдельная логика (useModal)</li>
            <li>Доступность (role, aria)</li>
          </ul>

          <CodeBlock 
            title="useModal.js"
            language="jsx"
            code={`export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, open, close, toggle };
}`}
          />
        </section>

        {/* Оптимизация */}
        <section className="content-section animate-fade-in">
          <h2>9. Оптимизация</h2>
          <p>Middle-разработчик обязан знать:</p>

          <ul>
            <li><code>React.memo</code> — предотвращение ререндеров</li>
            <li><code>useCallback</code> — мемоизация функций</li>
            <li><code>useMemo</code> — мемоизация вычислений</li>
            <li><code>Suspense</code>, <code>lazy</code> — ленивая загрузка</li>
            <li>Избегать лишних зависимостей в эффекте</li>
            <li>Не хранить лишнее в useState</li>
            <li>Оптимизация списков (key, виртуализация)</li>
          </ul>
        </section>

        {/* Темизация */}
        <section className="content-section animate-fade-in">
          <h2>10. Поддержка темизации (Light/Dark)</h2>
          
          <CodeBlock 
            title="ThemeContext.jsx"
            language="jsx"
            code={`const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`}
          />

          <p><strong>Middle-подход:</strong></p>
          <ul>
            <li>Хранить тему глобально</li>
            <li>Сохранять в localStorage</li>
            <li>Переключать без перерендера всех компонентов</li>
            <li>Использовать CSS variables</li>
          </ul>
        </section>

        {/* Тестирование */}
        <section className="content-section animate-fade-in">
          <h2>11. Тестирование</h2>
          <p>Middle должен хотя бы уметь:</p>
          <ul>
            <li>Писать unit-тесты на логику (хуки)</li>
            <li>Писать тесты на компоненты</li>
            <li>Покрывать сторы</li>
          </ul>

          <p><strong>Инструменты:</strong></p>
          <ul>
            <li><strong>Jest</strong> — тест-раннер</li>
            <li><strong>React Testing Library</strong> — тестирование компонентов</li>
          </ul>

          <CodeBlock 
            title="Button.test.jsx"
            language="jsx"
            code={`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  
  fireEvent.click(screen.getByText('Click me'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}
          />
        </section>

        {/* Финальное задание */}
        <section className="content-section animate-fade-in">
          <h2>12. Финальное задание</h2>
          <p>Создать полностью рабочий Task Manager, в котором:</p>
          
          <div className="info-box note">
            <span className="info-icon">📋</span>
            <div className="info-content">
              <strong>Чеклист итогового проекта:</strong>
              <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.2rem' }}>
                <li>Продуманная архитектура (FSD)</li>
                <li>Маршрутизация</li>
                <li>Глобальный стор</li>
                <li>API слой</li>
                <li>React Query</li>
                <li>memo/useCallback/useMemo</li>
                <li>Модальные окна</li>
                <li>Несколько страниц</li>
                <li>Фильтрация, сортировка, редактирование</li>
                <li>Persist-состояния</li>
                <li>Dark/Light тема</li>
                <li>Тесты на логику</li>
              </ul>
            </div>
          </div>

          <p>Это итог челлендж уровня <strong>Junior → Middle</strong>.</p>
        </section>

        {/* Итоги курса */}
        <section className="content-section animate-fade-in">
          <h2>🎉 Поздравляем!</h2>
          <p>
            Ты прошёл весь курс от установки Node.js до создания production-ready приложения. 
            Теперь у тебя есть все знания, чтобы работать React-разработчиком уровня Middle.
          </p>

          <h3>Что дальше?</h3>
          <ul>
            <li>Создавай свои проекты</li>
            <li>Изучай TypeScript</li>
            <li>Погружайся в Next.js</li>
            <li>Участвуй в open-source</li>
            <li>Читай документацию React</li>
            <li>Практикуйся каждый день</li>
          </ul>

          <div className="info-box tip">
            <span className="info-icon">🚀</span>
            <div className="info-content">
              <strong>Удачи в карьере!</strong>
              <p>Помни: лучший способ научиться программировать — это программировать. 
              Не бойся ошибаться и экспериментировать!</p>
            </div>
          </div>
        </section>

        {/* Навигация */}
        <nav className="chapter-nav">
          <Link to="/chapter-3" className="nav-btn prev">
            <span>←</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Назад</span>
              <span className="nav-btn-title">Глава 3: Средний уровень</span>
            </div>
          </Link>
          <Link to="/" className="nav-btn next">
            <span>→</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">В начало</span>
              <span className="nav-btn-title">Главная страница</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Chapter4

