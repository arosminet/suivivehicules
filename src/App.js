import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { RestClient, AuthClient } from 'aor-firebase-client';
import jsonRestClient from 'aor-json-rest-client';
import addUploadFeature from './addUploadFeature';
import { VoituresList, VoituresCreate, VoituresEdit, VoituresShow } from './journaliers/voitures';
import { UserList } from './users';
import { SuiviList, SuiviCreate, SuiviEdit } from './suivi';
import { SuiviList1, SuiviCreate1, SuiviEdit1 } from './suivi1';
import { BH347HG_JList,BH347HG_JShow,BH347HG_JCreate,BH347HG_JEdit} from './JBH347HG';
import { BH347HG_QList,BH347HG_QShow,BH347HG_QCreate,BH347HG_QEdit} from './QBH347HG';
const firebaseConfig = {
    apiKey: "AIzaSyClcAEcI_bh-MHIANRna6x48GmQVDOODA0",
    authDomain: "vehiculesuivi.firebaseapp.com",
    databaseURL: "https://vehiculesuivi.firebaseio.com",
    projectId: "vehiculesuivi",
    storageBucket: "vehiculesuivi.appspot.com",
    messagingSenderId: "758673047770"
};

const trackedResources = ['QBH347HG','JBH347HG','journaliers'/'voitures', 'users1', 'suivi', 'suivi1']

const uploadCapableClient = addUploadFeature(RestClient);

const App = () => (
    <Admin restClient={{uploadCapableClient} title="Example Admin" RestClient(trackedResources, firebaseConfig)} authClient={AuthClient}>
        {permissions => [
      permissions === 'admin' ?   <Resource name="suivi" list={SuiviList} create={SuiviCreate} edit={SuiviEdit} remove={Delete} /> : null,
        permissions === 'admin' ?<Resource name="suivi1" list={SuiviList1} create={SuiviCreate1} edit={SuiviEdit1} remove={Delete}/> : null,
        // Restrict access to the edit and remove views to admin only
        <Resource name="voitures" 
        	list={permissions === 'admin' ? VoituresList : null} 
        	create={VoituresCreate}
            show={VoituresShow}
        	edit={permissions === 'admin' ? VoituresEdit : null}  
        	remove={permissions === 'admin' ? Delete : null} /> ,
<Resource name="JBH347HG" 
        	list={permissions === 'admin' ? BH347HG_JList : null} 
create={BH347HG_JCreate}
            show={BH347HG_JShow}
        	edit={permissions === 'admin' ? BH347HG_JEdit : null}  
        	remove={permissions === 'admin' ? Delete : null} /> ,
<Resource name="QBH347HG" 
        	list={permissions === 'admin' ? BH347HG_QList : null} 
create={BH347HG_QCreate}
            show={BH347HG_QShow}
        	edit={permissions === 'admin' ? BH347HG_QEdit : null}  
        	remove={permissions === 'admin' ? Delete : null} /> ,
        // Only include the categories resource for admin users
        permissions === 'admin' ? <Resource name="users1" list={UserList}/> : null,
    	
    	]}
    </Admin>
);

export default App;