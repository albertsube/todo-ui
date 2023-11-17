import Form from './components/Form'
import List from './components/List'

function App() {

  return (
    <>
      <h1 className='font-bold text-5xl m-12'>To Do Application</h1>

      <aside>
        <Form />
      </aside>

      <main>
        <List />
      </main>

    </>
  )
}

export default App
