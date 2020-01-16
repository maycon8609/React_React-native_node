import React, { useState, useEffect } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_usename, setGitubUseName] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 3000
      }
    )
  }, [])

  async function handleAddDev(e){
    e.preventDefalt()
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">GitHub Username</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_usename}
              onChange={e => setGitubUseName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Techs</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/43672017?v=4" alt="maycon silva" />
              <div className="user-info">
                <strong>maycon silva</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Formando em ciências da computação</p>
            <a href="https://github.com/maycon8609">Acessar perfil github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;
