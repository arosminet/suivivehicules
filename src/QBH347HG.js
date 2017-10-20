import React from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { required,ImageInput,ImageField, number,Validate,LongTextInput, DateInput, List, ReferenceField, ReferenceInput, SelectArrayInput, SelectInput, NumberField, NumberInput, Datagrid, Edit, Create,Show, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput,LongTextField,SimpleShowLayout,RadioButtonGroupInput,CheckboxGroupInput,SaveButton, Toolbar,BooleanInput  } from 'admin-on-rest';
const minValue = min => value =>
  value && value < min ? `Ne peut pas être inférieur à ${min}` : undefined;
const maxValue = max => value =>
  value && value > max ?  `Ne peut pas être supérieur à ${max}` : undefined;


export const BH347HG_QList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="immatriculation" />
            <ImageField source="src" title="title" />
            <TextField source="marque" />
            <TextField source="model" />
            <NumberField source="KM" />
            <EditButton />
        </Datagrid>
    </List>
);

const BH347HG_QTitle = ({ record }) => {
    return <span>t {record ? `"${record.immatriculation}"` : ''}</span>;
};

export const BH347HG_QEdit = (props) => (
    <Edit title={<BH347HG_QTitle />} {...props}>
        <SimpleForm>
            <TextInput source="immatriculation" />
            <TextInput source="marque" />
            <TextInput source="model" />
            </SimpleForm>
    </Edit>
);

export const BH347HG_QCreate = (props) => (
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

    <NumberInput source="KM Compteur" validate={[ required, number, minValue(18), maxValue(100000)]} />
<ImageInput source="pictures" label="Related pictures" accept="image/*">
    <ImageField source="src" title="title" />
</ImageInput>
<RadioButtonGroupInput source="Etat carrosserie avant"  choices={[
    { id: 'OK', name: 'OK' },
    { id: 'Abimee', name: 'Abimee' },

]} validate={[ required ]} />
<RadioButtonGroupInput source="Etat carrosserie arriere" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'Abimee', name: 'Abimee' },
]} />
<RadioButtonGroupInput source="Etat carrosserie cote gauche" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'Abimee', name: 'Abimee' },
]} />
<RadioButtonGroupInput source="Etat carrosserie cote droit" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'Abimee', name: 'Abimee' },
]} />
<RadioButtonGroupInput source="Etat carrosserie pare brise" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'Abimee', name: 'Abimee' },
]} />
    <RadioButtonGroupInput source="Etat Exterieur" choices={[
    { id: 'PROPRE', name: 'PROPRE' },
    { id: 'SALE', name: 'SALE' },
]} />
<RadioButtonGroupInput source="Etat Interieur" choices={[
    { id: 'PROPRE', name: 'PROPRE' },
    { id: 'SALE', name: 'SALE' },
]} />
<RadioButtonGroupInput source="Pneu AVG" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MOYEN', name: 'MOYEN' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} />
<RadioButtonGroupInput source="Pneu AVD" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MOYEN', name: 'MOYEN' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} />
<RadioButtonGroupInput source="Pneu ARG" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MOYEN', name: 'MOYEN' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} />
<RadioButtonGroupInput source="Pneu ARD" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MOYEN', name: 'MOYEN' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} /> 
<RadioButtonGroupInput source="Roue de secours" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MOYEN', name: 'MOYEN' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} />
<RadioButtonGroupInput source="Cric et Manivelle present" choices={[
    { id: 'OUI', name: 'OUI' },
    { id: 'NON', name: 'NON' },
]} />     
<RadioButtonGroupInput source="Feu de position AVG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} />   
<RadioButtonGroupInput source="Feu de position AVD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de croisement AVG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de route AVD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de route AVG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="cligonants AVG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="cligonants AVD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feux de détresse AVG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feux de détresse AVD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 

<RadioButtonGroupInput source="Feu de position ARG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de position ARD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} />    
<RadioButtonGroupInput source="Feu STOP ARG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} />
<RadioButtonGroupInput source="Feu STOP ARD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu stop central" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de brouillard ARG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de brouillard ARD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} />
<RadioButtonGroupInput source="Feu de recul ARG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feu de recul ARD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="cligonants ARG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="cligonants ARD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feux de détresse ARG" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Feux de détresse ARD" choices={[
    { id: 'OK', name: 'OK' },
    { id: 'NOK', name: 'NOK' },
]} /> 
<RadioButtonGroupInput source="Niveau huile moteur" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'INSUFFISANT', name: 'INSUFFISANT' },
]} /> 
<RadioButtonGroupInput source="Niveau liquide de refroidissement" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'INSUFFISANT', name: 'INSUFFISANT' },
]} /> 
<RadioButtonGroupInput source="Niveau liquide de freins" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'INSUFFISANT', name: 'INSUFFISANT' },
]} />
<RadioButtonGroupInput source="Niveau direction assistee" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'INSUFFISANT', name: 'INSUFFISANT' },
]} /> 
<RadioButtonGroupInput source="Niveau liquide lave glace" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'INSUFFISANT', name: 'INSUFFISANT' },
]} /> 
<RadioButtonGroupInput source="ETAT Balais essuie glace" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} /> 
<RadioButtonGroupInput source="CORDON ALIMENTATION" choices={[
    { id: 'BON', name: 'BON' },
    { id: 'MAUVAIS', name: 'MAUVAIS' },
]} /> 
<BooleanInput label="PRESENCE Triangle" source="Triangle" />                                                       

<BooleanInput label="PRESENCE Gilet" source="Gilet" />                                                       
<BooleanInput label="PRESENCE Ethy" source="Ethylotest" />                                                        
<SelectInput
    label="merci"
    source="merci"
    choices={[
        { id: 'Bon courage', name: 'Bon courage' },
    ]}
    defaultValue="Bon courage"
/>        
        </SimpleForm>
    </Create>
);

export const BH347HG_QShow = (props) => (
    <Show Edit title={<BH-347-HG_JTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="immatriculation" />
            <TextField source="Nom" />
            <TextField source="Prenom" />
            <ImageField source="src" title="title" />
        </SimpleShowLayout>
    </Show>
);
