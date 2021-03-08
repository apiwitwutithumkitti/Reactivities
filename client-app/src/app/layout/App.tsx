import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import AcitvityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
      activityStore.loadActivities();
  }, [activityStore])


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <AcitvityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
