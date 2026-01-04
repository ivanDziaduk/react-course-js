import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import './Pages.css'

function Chapter1() {
  return (
    <div className="page chapter-page">
      <div className="container">
        <header className="chapter-header animate-fade-in">
          <span className="chapter-badge cyan">Глава 01</span>
          <h1>Подготовка окружения и создание React-проекта</h1>
          <p className="chapter-intro">
            В этой главе мы разберём полный путь от нулевой подготовки компьютера до первого 
            запуска пустого React-проекта. Информация рассчитана на тех, кто начинает с 
            абсолютного нуля и никогда ранее не работал ни с Node.js, ни с npm, ни с React.
          </p>
        </header>

        {/* Что такое React */}
        <section className="content-section animate-fade-in">
          <h2>1. Что такое React и зачем он нужен</h2>
          <p>
            <strong>React</strong> — это JavaScript-библиотека для создания пользовательских 
            интерфейсов. Она используется в крупных компаниях (Meta, Netflix, Airbnb, Uber) 
            и является одним из стандартов фронтенда.
          </p>
          <p>
            Чтобы работать с React, нужно установить ряд инструментов: Node.js, npm, 
            менеджер пакетов, сборщик, и подготовить проектную структуру.
          </p>
          
          <div className="info-box tip">
            <span className="info-icon">💡</span>
            <div className="info-content">
              <strong>Почему React?</strong>
              <p>React позволяет создавать сложные интерфейсы из простых компонентов, 
              автоматически обновляет только изменившиеся части страницы и имеет 
              огромное сообщество разработчиков.</p>
            </div>
          </div>
        </section>

        {/* Проверка системы */}
        <section className="content-section animate-fade-in">
          <h2>2. Проверка системы и подготовка Windows</h2>
          
          <h3>2.1. Проверка 64-битной системы</h3>
          <p>
            React-проекты хорошо работают на любой современной Windows, главное — 
            убедиться, что у вас 64-битная версия ОС.
          </p>
          
          <div className="steps-list">
            <div className="step-item">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Откройте «Параметры»</h4>
                <p>Нажмите Win + I или найдите в меню Пуск</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Перейдите в Система → О программе</h4>
                <p>Найдите строку «Тип системы»</p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Проверьте тип системы</h4>
                <p>Нужна строка: «64-разрядная операционная система»</p>
              </div>
            </div>
          </div>

          <h3>2.2. Обновление Windows</h3>
          <p>Перед установкой инструментов желательно убедиться, что система обновлена:</p>
          <p><strong>Параметры → Обновление и безопасность → Центр обновления Windows</strong></p>
        </section>

        {/* Установка Node.js */}
        <section className="content-section animate-fade-in">
          <h2>3. Установка Node.js и npm</h2>
          <p>React использует инструменты Node.js, поэтому первым шагом будет его установка.</p>

          <h3>3.1. Скачивание</h3>
          <div className="steps-list">
            <div className="step-item">
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Перейдите на официальный сайт</h4>
                <p><a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">https://nodejs.org</a></p>
              </div>
            </div>
            <div className="step-item">
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Скачайте LTS версию</h4>
                <p>Рекомендованная версия помечена зелёной кнопкой</p>
              </div>
            </div>
          </div>

          <h3>3.2. Установка</h3>
          <ul>
            <li>Запустите установщик</li>
            <li>Везде нажмите Next</li>
            <li>Галочку <strong>Add to PATH</strong> оставьте обязательно — это важно!</li>
            <li>После завершения откройте PowerShell или CMD</li>
          </ul>

          <h3>3.3. Проверка установки</h3>
          <p>Выполните в терминале:</p>
          
          <CodeBlock 
            title="Проверка версий"
            language="bash"
            code={`node -v
npm -v`}
          />

          <p>Ожидаемый результат — вывод версий:</p>
          
          <CodeBlock 
            title="Пример вывода"
            language="bash"
            code={`v20.11.0
10.2.0`}
          />

          <div className="info-box tip">
            <span className="info-icon">✅</span>
            <div className="info-content">
              <strong>Успех!</strong>
              <p>Если версии отображаются — Node.js и npm установлены корректно.</p>
            </div>
          </div>
        </section>

        {/* npm и npx */}
        <section className="content-section animate-fade-in">
          <h2>4. Что такое npm, npx и зачем они нужны</h2>
          
          <h3>npm (Node Package Manager)</h3>
          <p>
            npm — это менеджер пакетов, который ставит зависимости: React, ReactDOM, 
            различные библиотеки, сборщики, роутеры и т.д.
          </p>

          <h3>npx</h3>
          <p>
            npx — инструмент, который позволяет запускать пакеты без установки. 
            Например, для создания React-проекта через Vite используется команда:
          </p>
          
          <CodeBlock 
            title="Создание проекта через npx"
            language="bash"
            code={`npx create-vite@latest`}
          />
        </section>

        {/* Рабочее пространство */}
        <section className="content-section animate-fade-in">
          <h2>5. Создание рабочего пространства</h2>
          <p>Лучше всего создать отдельную папку, где будут храниться все ваши проекты.</p>
          
          <p>Пример структуры:</p>
          <div className="file-structure">
            <span className="folder">C:\ReactProjects\</span><br/>
            <span className="file">├── my-first-app\</span><br/>
            <span className="file">├── dashboard-react\</span><br/>
            <span className="file">└── portfolio\</span>
          </div>
        </section>

        {/* Выбор способа */}
        <section className="content-section animate-fade-in">
          <h2>6. Выбор способа создания React-проекта</h2>
          <p>Сейчас есть два основных способа:</p>
          
          <ul>
            <li><strong>Create React App</strong> — устаревающий, медленный</li>
            <li><strong>Vite</strong> — быстрый, современный, официальный способ для новых проектов</li>
          </ul>

          <div className="info-box note">
            <span className="info-icon">⚡</span>
            <div className="info-content">
              <strong>Мы используем Vite</strong>
              <p>Vite создаёт проект быстрее, запускает его мгновенно, сильно облегчает 
              разработку и поддерживает современный JavaScript.</p>
            </div>
          </div>
        </section>

        {/* Создание проекта */}
        <section className="content-section animate-fade-in">
          <h2>7. Установка и создание React-проекта через Vite</h2>
          
          <h3>7.1. Переход в рабочую папку</h3>
          <CodeBlock 
            title="Переход в папку"
            language="bash"
            code={`cd C:\\ReactProjects`}
          />

          <h3>7.2. Создание проекта</h3>
          <CodeBlock 
            title="Создание React-проекта"
            language="bash"
            code={`npx create-vite@latest my-react-course --template react`}
          />

          <p>Где:</p>
          <ul>
            <li><code>my-react-course</code> — имя проекта (можете заменить)</li>
            <li><code>--template react</code> — шаблон React с JavaScript</li>
          </ul>

          <h3>7.3. Переход в папку проекта</h3>
          <CodeBlock 
            title="Переход в проект"
            language="bash"
            code={`cd my-react-course`}
          />
        </section>

        {/* Установка зависимостей */}
        <section className="content-section animate-fade-in">
          <h2>8. Установка зависимостей проекта</h2>
          <p>После создания структуры нужно установить зависимости из package.json:</p>
          
          <CodeBlock 
            title="Установка зависимостей"
            language="bash"
            code={`npm install`}
          />

          <p>Эта команда:</p>
          <ul>
            <li>Скачает все пакеты для React</li>
            <li>Установит Vite как dev-сборщик</li>
            <li>Создаст папку <code>node_modules</code> (там хранятся все зависимости)</li>
          </ul>
        </section>

        {/* Структура проекта */}
        <section className="content-section animate-fade-in">
          <h2>9. Структура проекта</h2>
          <p>После установки в проекте появляются такие файлы:</p>
          
          <div className="file-structure">
            <span className="folder">my-react-course/</span><br/>
            │<br/>
            <span className="folder">├── node_modules/</span> <span className="comment">// зависимости npm</span><br/>
            <span className="folder">├── public/</span> <span className="comment">// статические файлы</span><br/>
            <span className="folder">├── src/</span> <span className="comment">// исходный код</span><br/>
            <span className="file">│   ├── App.jsx</span> <span className="comment">// корневой компонент</span><br/>
            <span className="file">│   ├── main.jsx</span> <span className="comment">// точка входа</span><br/>
            <span className="file">│   └── index.css</span> <span className="comment">// стили</span><br/>
            │<br/>
            <span className="file">├── package.json</span> <span className="comment">// зависимости и команды</span><br/>
            <span className="file">├── package-lock.json</span> <span className="comment">// версии пакетов</span><br/>
            <span className="file">└── vite.config.js</span> <span className="comment">// конфиг Vite</span>
          </div>
        </section>

        {/* Запуск проекта */}
        <section className="content-section animate-fade-in">
          <h2>10. Запуск React-проекта</h2>
          <p>После установки всех зависимостей введите:</p>
          
          <CodeBlock 
            title="Запуск dev-сервера"
            language="bash"
            code={`npm run dev`}
          />

          <p>Запустится локальный dev-сервер. В терминале появится адрес:</p>
          
          <CodeBlock 
            title="Адрес сервера"
            language="bash"
            code={`http://localhost:5173/`}
          />

          <div className="info-box tip">
            <span className="info-icon">🎉</span>
            <div className="info-content">
              <strong>Проект работает!</strong>
              <p>Откройте браузер → вставьте ссылку → увидите React-стартовую страницу.</p>
            </div>
          </div>
        </section>

        {/* Редактирование */}
        <section className="content-section animate-fade-in">
          <h2>11. Редактирование проекта</h2>
          <p>В папке <code>src/</code> находится главный компонент — <code>App.jsx</code>.</p>
          
          <p>Чтобы проверить, что проект реагирует на изменения:</p>
          <ol>
            <li>Откройте файл <code>App.jsx</code></li>
            <li>Измените любой текст, например на:</li>
          </ol>
          
          <CodeBlock 
            title="App.jsx"
            language="jsx"
            code={`<h1>Мой первый React-проект!</h1>`}
          />

          <p>Сохраните — страница обновится автоматически (функция <strong>Hot Reload</strong>).</p>
        </section>

        {/* VS Code */}
        <section className="content-section animate-fade-in">
          <h2>12. Установка VS Code и расширений</h2>
          <p>React удобно писать в VS Code.</p>
          
          <h3>12.1. Установка</h3>
          <p>Перейдите на <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer">code.visualstudio.com</a> и установите редактор.</p>

          <h3>12.2. Полезные расширения</h3>
          <ul>
            <li><strong>ES7+ React/Redux Snippets</strong> — команды-шорткаты (например rafce)</li>
            <li><strong>Prettier</strong> — автоматическое форматирование кода</li>
            <li><strong>Auto Rename Tag</strong> — изменяет парные теги автоматически</li>
            <li><strong>Path Intellisense</strong> — автокомплит путей к файлам</li>
            <li><strong>Vite</strong> — подсветка конфигов и девтулз</li>
          </ul>
        </section>

        {/* npm команды */}
        <section className="content-section animate-fade-in">
          <h2>13. Полезные npm-команды</h2>
          
          <CodeBlock 
            title="Основные команды"
            language="bash"
            code={`# Установка пакета
npm install пакет

# Удаление пакета
npm uninstall пакет

# Запуск dev-сервера
npm run dev

# Сборка проекта для продакшена
npm run build

# Превью продакшн-сборки
npm run preview`}
          />
        </section>

        {/* Ошибки */}
        <section className="content-section animate-fade-in">
          <h2>14. Что делать, если возникли ошибки</h2>
          
          <div className="info-box warning">
            <span className="info-icon">⚠️</span>
            <div className="info-content">
              <strong>npm не работает</strong>
              <p>Перезагрузите компьютер — иногда PATH обновляется только после перезагрузки.</p>
            </div>
          </div>

          <div className="info-box warning">
            <span className="info-icon">⚠️</span>
            <div className="info-content">
              <strong>Команда npx не находится</strong>
              <p>Убедитесь, что Node.js установлен, и откройте новое окно терминала.</p>
            </div>
          </div>

          <div className="info-box warning">
            <span className="info-icon">⚠️</span>
            <div className="info-content">
              <strong>Проблемы с доступом к папкам</strong>
              <p>Запускайте редактор и терминал не от администратора, но выбирайте папки, к которым у вас есть доступ.</p>
            </div>
          </div>
        </section>

        {/* Итоги */}
        <section className="content-section animate-fade-in">
          <h2>15. Итоги главы</h2>
          <p>После завершения Главы 1 вы умеете:</p>
          
          <ul>
            <li>Подготовить Windows для React-разработки</li>
            <li>Установить Node.js и npm</li>
            <li>Создать проект через Vite</li>
            <li>Запустить React-сервер</li>
            <li>Редактировать компонент App.jsx</li>
            <li>Ориентироваться в структуре проекта</li>
            <li>Работать с VS Code и npm-командами</li>
          </ul>

          <div className="info-box tip">
            <span className="info-icon">🚀</span>
            <div className="info-content">
              <strong>Готовы к следующему шагу!</strong>
              <p>Теперь можно переходить к Главе 2 — базовый функционал React: компоненты, 
              пропсы, состояние, события, списки, рендеринг и хуки.</p>
            </div>
          </div>
        </section>

        {/* Навигация */}
        <nav className="chapter-nav">
          <Link to="/" className="nav-btn prev">
            <span>←</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Назад</span>
              <span className="nav-btn-title">Главная</span>
            </div>
          </Link>
          <Link to="/chapter-2" className="nav-btn next">
            <span>→</span>
            <div className="nav-btn-text">
              <span className="nav-btn-label">Далее</span>
              <span className="nav-btn-title">Глава 2: Базовые основы</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Chapter1

