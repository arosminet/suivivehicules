import React from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { required, number,Validate,LongTextInput, DateInput, List, ReferenceField, ReferenceInput,  SelectInput, NumberField, NumberInput, Datagrid, Edit, Create,Show, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput,LongTextField,SimpleShowLayout } from 'admin-on-rest';
const minValue = min => value =>
  value && value < min ? `Ne peut pas être inférieur à ${min}` : undefined;
const maxValue = max => value =>
  value && value > max ?  `Ne peut pas être supérieur à ${max}` : undefined;


export const VoituresList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="immatriculation" />
            <TextField source="marque" />
            <TextField source="model" />
            <NumberField source="KM" />
            <EditButton />
        </Datagrid>
    </List>
);

const VoituresTitle = ({ record }) => {
    return <span>Voitures {record ? `"${record.immatriculation}"` : ''}</span>;
};

export const VoituresEdit = (props) => (
    <Edit title={<VoituresTitle />} {...props}>
        <SimpleForm>
            <TextInput source="immatriculation" />
            <TextInput source="marque" />
            <TextInput source="model" />
            </SimpleForm>
    </Edit>
);

export const VoituresCreate = (props) => (
    <Create title="blabablabla" {...props}>
        <SimpleForm redirect="show">
            <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
    <SelectInput
    label="immatriculation"
    source="immatriculation"
    choices={[
        { id: 'BH-347-HG', name: 'BH-347-HG' },
    ]}
    defaultValue="BH-347-HG"
/>        
    <TextInput source="Nom" validate={[ required ]} />
    <TextInput source="Prenom" validate={[ required ]}  />
    <NumberInput source="KM depart" validate={[ required, number, minValue(18), maxValue(100000)]} />
        <LongTextInput source="Etat depart" validate={[ required ]} />
        <NumberInput source="KM arrive" validate={[ required, number, minValue(18), maxValue(100000)]} />
        <LongTextInput source="Etat arrive" validate={[ required ]} />
        </SimpleForm>
    </Create>
);

export const VoituresShow = (props) => (
    <Show Edit title={<VoituresTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="immatriculation" />
            <TextField source="Nom" />
            <TextField source="Prenom" />
        </SimpleShowLayout>
    </Show>
);
