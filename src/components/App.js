import '../App.css';
import SongList from './SongList';
import SongDetails from './SongDetails'

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
       <div className='column eight wide'>
          <SongList />
       </div>
       <div className='column eight wide'>
          <div style={{ marginLeft: '3rem' }}>
            <SongDetails />
          </div>
       </div>
      </div>
    </div>
  );
}

export default App;
