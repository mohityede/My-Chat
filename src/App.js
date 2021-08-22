import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Login from './components/Login';
import Chats from './components/Chats';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" exact component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
