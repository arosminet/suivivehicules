import React from 'react';
import { ImageInput, ImageField, Responsive, SimpleList, List, Edit, Create, Datagrid, ReferenceField, NumberField, TextField, InputField, EditButton, DisabledInput, ReferenceInput, NumberInput, TextInput, SelectInput, SimpleForm, DateField } from 'admin-on-rest';

export const SuiviList1 = (props) => (
    <List {...props}>
        <Datagrid>
        <ReferenceField label="Immatriculation" source="test" reference="voitures" allowEmpty>
     <TextField source="model" />
            </ReferenceField>
            <TextField source="id" />
            <NumberField source="KM" />
        </Datagrid>
    </List>
);

const SuiviTitle1 = ({ record }) => {
    return <span>suivi1 {record ? `"${record.id}"` : ''}</span>;
};

export const SuiviEdit1 = (props) => (
    <Edit title={<suiviTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="model" />
        </SimpleForm>
    </Edit>
);


export const SuiviCreate1 = (props) => (
    <Create title="Suivi" {...props}>
        <SimpleForm>
            <NumberInput source="KM" />
        </SimpleForm>
    </Create>
);
