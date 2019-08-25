import React from 'react'

import './App.css'
import Character from './Character'
import fakeData from './db/data.json'

function App(props) {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    // fetch(URL)
    // .then(r => r.json())
    // .then(r => setData(r.results))
    setData(fakeData)
  }, [])

  return (
    <div className="App">
      { data.map(d => {
        return (
          <Character
            key={d.id}
            image={d.image}
            name={d.name}
            username={d.username}
            email={d.email}
          />
        );
      })}
    </div>
  )
}

export default App;
