import React, {useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {risksReducer, initialRisksState} from "./reducers";
import {clearRisks, getOverallRisk} from "./api";
import {loadOverallRisk} from './actions';
import {Risks, Machines} from "./components";
import './App.css';

interface Props {
  history: {
    push(key: string): void,
    location: {
      pathname: string,
    }
  }
}

function App({history}: Props) {
  const [store, dispatch] = useReducer(risksReducer, initialRisksState);

  useEffect(() => {
    const interval = setInterval(clearRisks, 30000);

    getOverallRisk().then(res => dispatch(loadOverallRisk(+res)));

    return () => {
      clearInterval(interval);
    }
  }, []);

  const getVariant = (risk: number) => {
    if (risk <= 3) {
      return 'success';
    }
    if (risk > 3 && risk <= 6) {
      return 'warning';
    }
    if (risk > 6) {
      return 'danger';
    }
  };

  return (
    <div className="App">
      <ProgressBar now={store.overallRisk * 10} variant={getVariant(store.overallRisk)}
        label='Overall risk'/>
      <Tabs defaultActiveKey={history.location.pathname.substr(1) || 'risks'} id="tabs"
            onSelect={(key: string) => { history.push(`/${key}`)}}>
        <Tab eventKey="risks" title="Risks">
          <Risks/>
        </Tab>
        <Tab eventKey="machines" title="Machines">
          <Machines/>
        </Tab>
      </Tabs>
    </div>
  );
}

App.defaultProps = {
  history: {
    push: () => null,
    location: {
      pathname: '',
    },
  },
};

export default App;
