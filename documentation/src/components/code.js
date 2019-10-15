import React from 'react'

const Code = ({ code, language }) => {
  return (
    <pre class={`language-${language}`}>
      <code class={`language-${language}`}>{code}</code>
    </pre>
  )
}

export default Code
