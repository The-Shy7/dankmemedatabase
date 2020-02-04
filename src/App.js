import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function App(props) {
  const [text, setText] = useState('')
  const [memes, setMemes] = useState([])

  async function getMemes() {
    const api_key = 'sNxa1otQT8ndji7kzM8XWzSxvzo88N3X'
    let url = 'https://api.giphy.com/v1/gifs/search?'
    url += 'api_key=' + api_key
    url +='&q=' + text
    const r = await fetch(url)
    const body = await r.json()
    setMemes(body.data)
    setText('')
  }

  console.log(memes)

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-wrap">
          <TextField 
            fullWidth
            label="Search your favorite dank memes!" variant="filled" 
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyPress = {e => {
              if (e.key === 'Enter') getMemes()
            }}
          />
          <Button variant="contained" color="primary" onClick={getMemes}>
            SEARCH
          </Button>
        </div>
        <div className="meme-wrap">

        </div>
      </header>
    </div>
  );
}

function Meme({title, images}) {
  return <div className="memes">
    <img src={images.fixed_height.url} alt="meme"/>
    <div className="meme-title"></div>
  </div>
}

export default App;
