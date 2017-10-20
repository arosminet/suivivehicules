import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { RestClient, AuthClient } from 'aor-firebase-client';
import { VoituresList, VoituresCreate, VoituresEdit } from './voitures';
import { UserList } from './users';
import { SuiviList, SuiviCreate, SuiviEdit } from './suivi';

const firebaseConfig = {
    apiKey: 'AIzaSyA5CjhuOtbe9PcMKiDa3u6CgjH5UksuWwY',
    authDomain: 'suivi-vehicules.firebaseapp.com',
    databaseURL: 'https://suivi-vehicules.firebaseio.com',
    storageBucket: 'suivi-vehicules.apppot.com',
    messagingSenderId: '618276837563'
};
const trackedResources = ['voitures', 'users1', 'suivi']

const App = () => (
    <Admin restClient={RestClient(trackedResources, firebaseConfig)} authClient={AuthClient}>
        <Resource name="voitures" list={VoituresList} create={VoituresCreate} edit={VoituresEdit}  remove={Delete} />
        <Resource name="users1" list={UserList}/>
        <Resource name="suivi" list={SuiviList} create={SuiviCreate} edit={SuiviEdit} remove={Delete} />
    </Admin>
);

export default App;