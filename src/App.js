import { Route, Routes } from 'react-router-dom';
import './assets/styles/_app.scss';
import Screen from './screens/screen';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Screen />} />
    </Routes>
  );
}

export default App;
