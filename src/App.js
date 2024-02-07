import Header from './components/Header';
import Main from './components/Main';

import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostContextProvider} from './context/postContext';
import {store} from './srore';

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <Header/>
            <Main />
          </PostContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
