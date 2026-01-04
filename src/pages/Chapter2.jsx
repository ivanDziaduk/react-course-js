import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import './Pages.css'

function Chapter2() {
  return (
    <div className="page chapter-page">
      <div className="container">
        <header className="chapter-header animate-fade-in">
          <span className="chapter-badge green">Глава 02</span>
          <h1>Базовые основы React</h1>
          <p className="chapter-intro">
            Во второй части курса мы разберём фундаментальные концепции React: компоненты, 
            передача данных, состояние, условный рендеринг, списки, обработка событий, 
            базовые хуки и работа с формами. Это база, без которой невозможно двигаться дальше.
          </p>
        </header>

        {/* Компоненты */}
        <section className="content-section animate-fade-in">
          <h2>1. Что такое компонент в React</h2>
          <p>
            React-приложение полностью состоит из <strong>компонентов</strong>. 
            Компонент — это функция, которая возвращает разметку JSX.
          </p>
          
          <CodeBlock 
            title="Простейший компонент"
            language="jsx"
            code={`function Hello() {
  return <h1>Привет, React!</h1>;
}

export default Hello;`}
          />

          <h3>1.1. Виды компонентов</h3>
          <p>В современных проектах используются только <strong>функциональные компоненты</strong>. 
          Классовые компоненты считаются устаревшими.</p>

          <h3>1.2. Правила компонентов</h3>
          <ul>
            <li>Имя компонента пишется с <strong>большой буквы</strong></li>
            <li>Компонент должен возвращать <strong>один корневой элемент</strong></li>
            <li>Компонент должен быть <strong>чистой функцией</strong> (не менять внешние данные)</li>
          </ul>
        </section>

        {/* JSX */}
        <section className="content-section animate-fade-in">
          <h2>2. JSX — расширенный синтаксис для React</h2>
          <p>
            JSX — это смесь HTML и JavaScript в одном файле. 
            Он позволяет писать UI на JavaScript.
          </p>
          
          <CodeBlock 
            title="Пример JSX"
            language="jsx"
            code={`const message = "Мой первый JSX!";
return <p>{message}</p>;`}
          />

          <h3>2.1. Вставка переменных</h3>
          <p>Внутри JSX переменные пишутся в фигурных скобках: <code>{"{ }"}</code></p>
          
          <CodeBlock 
            title="Вставка переменных"
            language="jsx"
            code={`const name = "Дмитрий";
return <h2>Привет, {name}</h2>;`}
          />

          <h3>2.2. Вставка выражений</h3>
          <p>Можно использовать любые JS-выражения:</p>
          
          <CodeBlock 
            title="Вставка выражений"
            language="jsx"
            code={`return <p>2 + 2 = {2 + 2}</p>;`}
          />
        </section>

        {/* Props */}
        <section className="content-section animate-fade-in">
          <h2>3. Пропсы (props): передача данных в компонент</h2>
          <p>
            <strong>Пропсы</strong> — это способ передавать параметры в компонент. 
            Они работают как аргументы функции.
          </p>
          
          <CodeBlock 
            title="Передача и использование пропсов"
            language="jsx"
            code={`function User(props) {
  return <p>Имя: {props.name}</p>;
}

export default function App() {
  return <User name="Алексей" />;
}`}
          />

          <h3>3.1. Деструктуризация пропсов</h3>
          <p>Более удобный способ получения пропсов:</p>
          
          <CodeBlock 
            title="Деструктуризация"
            language="jsx"
            code={`function User({ name, age }) {
  return <p>{name} — {age} лет</p>;
}`}
          />

          <div className="info-box tip">
            <span className="info-icon">💡</span>
            <div className="info-content">
              <strong>Пропсы — только для чтения!</strong>
              <p>Никогда не изменяйте пропсы внутри компонента. Они должны быть неизменяемыми.</p>
            </div>
          </div>
        </section>

        {/* State */}
        <section className="content-section animate-fade-in">
          <h2>4. Состояние (State) — динамика приложения</h2>
          <p>
            <strong>Состояние</strong> — это данные, которые могут меняться с течением времени. 
            Для состояния используется хук <code>useState</code>.
          </p>
          
          <CodeBlock 
            title="Пример: счётчик"
            language="jsx"
            code={`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счёт: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}
          />

          <p><strong>Разбор:</strong></p>
          <ul>
            <li><code>count</code> — текущее значение</li>
            <li><code>setCount</code> — функция изменения состояния</li>
            <li><code>useState(0)</code> — начальное значение</li>
          </ul>

          <div className="info-box note">
            <span className="info-icon">📌</span>
            <div className="info-content">
              <strong>Важно!</strong>
              <p>Никогда не изменяйте состояние напрямую (<code>count = 5</code>). 
              Всегда используйте функцию-сеттер (<code>setCount(5)</code>).</p>
            </div>
          </div>
        </section>

        {/* События */}
        <section className="content-section animate-fade-in">
          <h2>5. Обработка событий</h2>
          <p>
            События в React пишутся в <strong>camelCase</strong> и передаются как функции.
          </p>
          
          <CodeBlock 
            title="Клик по кнопке"
            language="jsx"
            code={`<button onClick={() => alert("Клик!")}>
  Нажми меня
</button>`}
          />

          <h3>5.1. Обработчик как отдельная функция</h3>
          
          <CodeBlock 
            title="Выделенный обработчик"
            language="jsx"
            code={`function handleClick() {
  console.log("Нажато!");
}

<button onClick={handleClick}>Click</button>`}
          />

          <div className="info-box warning">
            <span className="info-icon">⚠️</span>
            <div className="info-content">
              <strong>Частая ошибка!</strong>
              <p>Пишите <code>onClick={"{handleClick}"}</code>, а не <code>onClick={"{handleClick()}"}</code>. 
              Скобки вызовут функцию сразу при рендере!</p>
            </div>
          </div>
        </section>

        {/* Условный рендеринг */}
        <section className="content-section animate-fade-in">
          <h2>6. Условный рендеринг</h2>
          <p>Это отображение элементов в зависимости от условий.</p>

          <h3>6.1. Тернарный оператор</h3>
          
          <CodeBlock 
            title="Тернарный оператор"
            language="jsx"
            code={`{isLogged 
  ? <p>Добро пожаловать!</p> 
  : <p>Войдите в систему</p>
}`}
          />

          <h3>6.2. && для короткой проверки</h3>
          
          <CodeBlock 
            title="Логическое И"
            language="jsx"
            code={`{isAdmin && <button>Удалить</button>}`}
          />

          <p>Кнопка покажется только если <code>isAdmin === true</code>.</p>
        </section>

        {/* Списки */}
        <section className="content-section animate-fade-in">
          <h2>7. Рендеринг списков</h2>
          <p>JSX позволяет рендерить массивы с помощью <code>.map()</code>.</p>
          
          <CodeBlock 
            title="Рендеринг списка"
            language="jsx"
            code={`const users = ["Оля", "Кирилл", "Женя"];

return (
  <ul>
    {users.map((user, index) => (
      <li key={index}>{user}</li>
    ))}
  </ul>
);`}
          />

          <div className="info-box note">
            <span className="info-icon">🔑</span>
            <div className="info-content">
              <strong>Ключи (key) обязательны!</strong>
              <p>Каждый элемент списка должен иметь уникальный ключ. 
              Лучше использовать id из данных, а не index.</p>
            </div>
          </div>
        </section>

        {/* Формы */}
        <section className="content-section animate-fade-in">
          <h2>8. Контролируемые компоненты и формы</h2>
          <p>
            В React форма работает по принципу «контролируемого компонента»: 
            значение поля ввода хранится в состоянии.
          </p>
          
          <CodeBlock 
            title="Контролируемая форма"
            language="jsx"
            code={`import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Вы ввели: {value}</p>
    </div>
  );
}`}
          />

          <p>
            <code>value</code> связан с состоянием, а <code>onChange</code> обновляет его 
            при каждом изменении поля.
          </p>
        </section>

        {/* Хуки */}
        <section className="content-section animate-fade-in">
          <h2>9. Основные хуки React</h2>
          
          <h3>9.1. useState</h3>
          <p>Хранение состояния компонента.</p>
          
          <h3>9.2. useEffect</h3>
          <p>Хук для побочных эффектов: запросы, таймеры, работа с API.</p>
          
          <CodeBlock 
            title="useEffect"
            language="jsx"
            code={`import { useEffect } from "react";

useEffect(() => {
  console.log("Компонент появился");
}, []); // Пустой массив = выполнится один раз`}
          />

          <h3>9.3. useRef</h3>
          <p>Хранение mutable-ссылок, доступ к DOM-элементам.</p>
          
          <CodeBlock 
            title="useRef"
            language="jsx"
            code={`const inputRef = useRef(null);

function focus() {
  inputRef.current.focus();
}

<input ref={inputRef} />
<button onClick={focus}>Фокус</button>`}
          />
        </section>

        {/* Работа с API */}
        <section className="content-section animate-fade-in">
          <h2>10. Работа с внешними API</h2>
          <p>Простой запрос данных через <code>fetch()</code> + рендер результата.</p>
          
          <CodeBlock 
            title="Загрузка данных с API"
            language="jsx"
            code={`import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}`}
          />

          <div className="info-box tip">
            <span className="info-icon">🌐</span>
            <div className="info-content">
              <strong>JSONPlaceholder</strong>
              <p>Это бесплатный фейковый API для тестирования. 
              Отличный ресурс для практики!</p>
            </div>
          </div>
        </section>

        {/* Структура */}
        <section className="content-section animate-fade-in">
          <h2>11. Разбиение интерфейса на компоненты</h2>
          <p>React-приложение должно быть разбито на мелкие компоненты.</p>
          
          <div className="file-structure">
            <span className="folder">src/</span><br/>
            <span className="folder">├── components/</span><br/>
            <span className="file">│   ├── Header.jsx</span><br/>
            <span className="file">│   ├── UserCard.jsx</span><br/>
            <span className="file">│   └── Footer.jsx</span><br/>
            <span className="folder">├── pages/</span><br/>
            <span className="file">│   ├── Home.jsx</span><br/>
            <span className="file">│   └── About.jsx</span>
          </div>

          <p>Каждый компонент делает <strong>только одну задачу</strong>.</p>
        </section>

        {/* Правила */}
        <section className="content-section animate-fade-in">
          <h2>12. Правила React-разработчика</h2>
          
          <ul>
            <li>Компоненты должны быть <strong>маленькими и независимыми</strong></li>
            <li>Всё, что меняется → кладём в <strong>состояние</strong></li>
            <li>Статические данные передаются через <strong>пропсы</strong></li>
            <li>Не изменяем состояние напрямую — используем <strong>setState/useState</strong></li>
            <li><strong>key</strong> в списках обязателен</li>
            <li>JSX должен иметь <strong>один корневой элемент</strong></li>
            <li>Не пишем логику прямо в JSX — выносим в функции</li>
            <li>Компоненты не должны знать друг о друге напрямую (только через пропсы)</li>
          </ul>
        </section>

        {/* Итоги */}
        <section className="content-section animate-fade-in">
          <h2>13. Итоги главы</h2>
          <p>После изучения Главы 2 вы умеете:</p>
          
          <ul>
            <li>Создавать и использовать компоненты</li>
            <li>Передавать данные через пропсы</li>
            <li>Работать с состоянием (useState)</li>
            <li>Реагировать на события</li>
            <li>Рендерить списки с помощью map()</li>
            <li>Управлять формами через состояние</li>
            <li>Понимать работу хуков (useState, useEffect, useRef)</li>
            <li>Работать с данными из API</li>
            <li>Проектировать компоненты и разбивать интерфейс</li>
          </ul>

          <div className="info-box tip">
            <span className="info-icon">🚀</span>
            <div className="info-content">
              <strong>Отлично!</strong>
              <p>Теперь можно переходить к Главе 3 — React среднего уровня: 
              роутинг, контекст, кастомные хуки, оптимизация и деплой.</p>
            </div>
          </div>
        </section>

        {/* Навигация */}
        <nav className="chapter-nav">
          <Link to="/chapter-1" className="nav-btn prev">
            <span>←</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Назад</span>
              <span className="nav-btn-title">Глава 1: Подготовка</span>
            </div>
          </Link>
          <Link to="/chapter-3" className="nav-btn next">
            <span>→</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Далее</span>
              <span className="nav-btn-title">Глава 3: Средний уровень</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Chapter2

