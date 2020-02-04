import React, {useState} from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LinearProgress } from '@material-ui/core';
import { Search } from '@material-ui/icons';

function App() {
  const [text, setText] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <div className="input-wrap">
          <TextField fullWidth variant="outlined"
            label="Search for memes!"
            value={text}
            onChange={e=> setText(e.target.value)}
            onKeyPress={e=> {
              if(e.key==='Enter') getMemes()
            }}
          />
          <Button variant="contained" color="primary"
            onClick={getMemes}>
            <Search />
            Search
          </Button>
        </div>
      </header>
      {loading && <LinearProgress />}

      <div className="memes">
        {memes.map((meme,i)=> <Meme key={i} {...meme} />)}
      </div>
    </div>
  );
}

export default App;
