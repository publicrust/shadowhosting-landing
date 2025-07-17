import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleComponent from './components/ExampleComponent'
import GoodExample from './components/BadExample'

function App(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  const sampleUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
  ];

  const handleUserSelect = (user: { id: number; name: string; email: string }): void => {
    console.log('Selected user:', user);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React with Strict TypeScript</h1>
      <div className="card">
        <button onClick={(): void => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      <ExampleComponent 
        title="User List Example" 
        users={sampleUsers} 
        onUserSelect={handleUserSelect} 
      />
      
      <GoodExample />
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
