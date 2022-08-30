import './App.css';
import Index from "./routes/index"
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
