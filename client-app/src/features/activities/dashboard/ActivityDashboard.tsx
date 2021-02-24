import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props{
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void
    deleteActivity: ( id: string) => void
}

export default function AcitvityDashboard({activities, selectedActivity, deleteActivity,
        selectActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit}: Props){
    return(
        <Grid>
            <GridColumn width='10'>
                {/* <List>
                    {activities.map(activity => (
                    <List.Item key={activity.id}>
                        {activity.title}
                    </List.Item>
                    ))}
                </List> */}
                <ActivityList activities={activities} 
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </GridColumn>
            <GridColumn width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity} 
                    openForm={openForm}
                />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}
            </GridColumn>
        </Grid>
    )
}