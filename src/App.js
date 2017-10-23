import React from 'react';
import addUploadFeature from './addUploadFeature';
import { Admin, Resource, Delete } from 'admin-on-rest';
import { RestClient, AuthClient } from 'aor-firebase-client';
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

const trackedResources = ['QBH347HG','JBH347HG','users1']


const App = () => (
    <Admin restClient={addUploadFeature(RestClient(trackedResources, firebaseConfig))} authClient={AuthClient}>
        {permissions => [
<Resource name="QBH347HG" 
        	list={permissions === 'admin' ? BH347HG_QList : null} 
            create={BH347HG_QCreate}
            show={BH347HG_QShow}
        	edit={permissions === 'admin' ? BH347HG_QEdit : null}  
        	remove={permissions === 'admin' ? Delete : null} /> ,
        // Only include the categories resource for admin users
<Resource name="JBH347HG" 
        	list={permissions === 'admin' ? BH347HG_JList : null} 
create={BH347HG_JCreate}
            show={BH347HG_JShow}
        	edit={permissions === 'admin' ? BH347HG_JEdit : null}  
        	remove={permissions === 'admin' ? Delete : null} /> ,
    	
    	]}
    </Admin>
);

export default App;