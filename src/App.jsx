import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Button from './components/Button'

function App() {

  const [showForm, setShowForm] = useState(false)

  return (
    <div>

      <h1 className='font-bold text-5xl m-12'>To Do Application</h1>

      {showForm &&
        <>
          <Form />
        </>
      }

      <Button
        text={showForm ? 'x' : '+'}
        handleClick={() => setShowForm(prev => !prev)}
      />

      <main>
        <List />
      </main>


    </div>
  )
}

export default App
