import {useEffect} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import {URL} from './api/const';
import {useToken} from './hooks/useToken';

function App() {
  const [token] = useToken('');
  console.log('token: ', token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => response.json()).then(data => {
      console.log('data: ', data);
    });
  }, [token]);

  return (
    <>
      <Header token={token}/>
      <Main />
    </>
  );
}

export default App;
