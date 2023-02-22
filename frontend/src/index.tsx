import ReactDOM from 'react-dom';
import { client } from './client';
import './index.less';
import { ResHomeNav } from '../../backend/src/shared/protocols/user/PtlHomeNav';



const App = () => {
  const login = async () => {
  const res = await client.callApi('user/Login',{
    username: 'wang',
    password:'12123123'
  })
  console.log(res)
  }

  const getNavImage = async ():Promise<ResHomeNav | void> => {
    const ret = await client.callApi('user/HomeNav',{})
    if (ret.isSucc) {
      console.log(ret.res.img)
      return ret.res
    }
  }
  
    // Load list at first

  return (
    <div className='App'>
      <h1>TSRPC Guestbook</h1>
      <button onClick={login}>login</button>
      <button onClick={getNavImage}>getNav</button>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('app'));
