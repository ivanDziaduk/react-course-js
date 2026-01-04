import './CodeBlock.css'

function CodeBlock({ code, language = 'javascript', title }) {
  return (
    <div className="code-block">
      {title && (
        <div className="code-header">
          <div className="code-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="code-title">{title}</span>
          <span className="code-lang">{language}</span>
        </div>
      )}
      <pre className="code-content">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock

