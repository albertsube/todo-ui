import { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import Button from './components/Button'
import Filters from './components/Filters'

function App() {

  const [showForm, setShowForm] = useState(false)
  const [filters, setFilters] = useState('')
	const [formData, setFormData] = useState({})

  return (
    <div>

      <h1 className='font-bold text-5xl m-12'>To Do Application</h1>

      {showForm &&
        <>
          <Form
            hide={() => setShowForm(false)}
            formData={formData}
            setFormData={setFormData}
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
          show={() => setShowForm(true)}
          setFormData={setFormData}
        />
      </main>


    </div>
  )
}

export default App
