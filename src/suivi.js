import React from 'react';
import { Field,AutocompleteInput,uuid, DateInput,LongTextInput,LongTextField, ImageInput, ImageField, Responsive, SimpleList, List, Edit,BooleanField, Create, Datagrid, ReferenceField, NumberField, TextField, InputField, EditButton, DisabledInput, ReferenceInput, NumberInput, TextInput, SelectInput, SimpleForm, DateField } from 'admin-on-rest';



export const SuiviList = (props) => (
    <List {...props}>
        <Datagrid>
        <DateField source="published_at" />
        
                <NumberField source="KMdepart" />
        <NumberField source="KMarrive" />
                    <EditButton />
        </Datagrid>
    </List>
);

const SuiviTitle = ({ record }) => {
    return <span>suivi {record ? `"${record.id}"` : ''}</span>;
};

export const SuiviEdit = (props) => (
    <Edit title={<suiviTitle />} {...props}>
        <SimpleForm>
        <ReferenceInput label="Immatriculation" source="immaId" reference="voitures" allowEmpty>
     <SelectInput optionText="immatriculation" />
            </ReferenceInput>
            <NumberInput source="KMdepart" />
        <LongTextInput source="depart" />
        <NumberInput source="KMarrive" />
        <LongTextInput source="arrive" />
        </SimpleForm>
    </Edit>
);

export const SuiviCreate = (props) => (
    <Create title="Suivi" {...props}>
        <SimpleForm>
            <DateField source="published_at" />

            <NumberInput source="KMdepart" />
        <LongTextInput source="depart" />
        <NumberInput source="KMarrive" />
        <LongTextInput source="arrive" />
        </SimpleForm>
    </Create>
);
