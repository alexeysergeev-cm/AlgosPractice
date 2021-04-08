import { Provider } from 'react-redux';

import './App.css';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
        <header>Header</header>
        <div>This is good</div>
      </div>
    </Provider>
  );
}

export default App;
