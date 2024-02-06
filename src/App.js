import Header from './components/Header';
import Main from './components/Main';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {TokenContextProvider} from './context/tokenContext';
import {PostContextProvider} from './context/postContext';
import {CommentContextProvider} from './context/commentContext';

const initialState = {
  comment: 'Привет Redux'
};

const rootReducer = (state = initialState, action) => state;

const store = createStore(rootReducer);
console.log('store: ', store);

function App() {
  return (
    <Provider store={store}>
      <TokenContextProvider>
        <AuthContextProvider>
          <PostContextProvider>
            <CommentContextProvider>
              <Header/>
              <Main />
            </CommentContextProvider>
          </PostContextProvider>
        </AuthContextProvider>
      </TokenContextProvider>
    </Provider>
  );
}

export default App;
