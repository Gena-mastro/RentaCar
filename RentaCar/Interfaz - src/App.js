import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AutosPage from './pages/AutosPage';
import ConcesionariosPage from './pages/ConcesionariosPage';
import ReportesPage from './pages/ReportesPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/autos" component={AutosPage} />
        <Route path="/concesionarios" component={ConcesionariosPage} />
        <Route path="/reportes" component={ReportesPage} />
      </Switch>
    </Router>
  );
}

export default App;
