import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import './App.css';
import Home from './component/Home';
import Oauth from './component/Oauth';

function App() {
  const openid_credential = {
    url: "http://localhost:5000",
    client_id: "rTqwl94pUftNwyacuNrskP57",
    client_secret: "VTp3QeYw5mXvOBcfgTBefpgiUPmXT7hEhNt9BbE7HdNo85Mb",
    scope: "openid+profile",
    response_type: "code",
  }

  const string_query = axios.getUri({
    url: `${openid_credential.url}/oauth/authorize`,
    params: openid_credential
  })

  return (
    <div className="App">
      <p>client a</p>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home href={string_query}/>} />
          <Route path="/auth/callback" element={<Oauth/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
