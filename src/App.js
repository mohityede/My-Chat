import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* <Route path="/chats" component={Chats} /> */}
          <Route path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
