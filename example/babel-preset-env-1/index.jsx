import 'core-js'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [count, setCount] = useState(1)

  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
