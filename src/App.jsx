import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Button from './components/Button'
import Filters from './components/Filters'

function App() {

  const [showForm, setShowForm] = useState(false)
  const [filters, setFilters] = useState('')

  return (
    <div>

      <h1 className='font-bold text-5xl m-12'>To Do Application</h1>

      {showForm &&
        <>
          <Form
            hide={() => setShowForm(false)}
          />
        </>
      }

      <Button
        text={showForm ? 'x' : '+'}
        handleClick={() => setShowForm(prev => !prev)}
      />

      <main className='flex flex-col items-center'>
        <Filters
          filters={filters}
          setFilters={setFilters}
        />
        <List
          filters={filters}
        />
      </main>


    </div>
  )
}

export default App
