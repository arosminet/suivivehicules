import React from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { required,ImageInput,ImageField, number,Validate,LongTextInput, DateInput, List, ReferenceField, ReferenceInput, SelectArrayInput, SelectInput, NumberField, NumberInput, Datagrid, Edit, Create,Show, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput,LongTextField,SimpleShowLayout,RadioButtonGroupInput,CheckboxGroupInput,SaveButton, Toolbar,BooleanInput  } from 'admin-on-rest';
const minValue = min => value =>
  value && value < min ? `Ne peut pas être inférieur à ${min}` : undefined;
const maxValue = max => value =>
  value && value > max ?  `Ne peut pas être supérieur à ${max}` : undefined;


export const BH347HG_IList = (props) => (
    <List {...props}>
        <Datagrid>
        <ImageField source="src" title="title" />
            <TextField source="immatriculation" />
            <ImageField source="src" title="title" />
            <TextField source="marque" />
            <TextField source="model" />
            <NumberField source="KM" />
            <EditButton />
        </Datagrid>
    </List>
);

const BH347HG_ITitle = ({ record }) => {
    return <span>t {record ? `"${record.immatriculation}"` : ''}</span>;
};

export const BH347HG_IEdit = (props) => (
    <Edit title={<BH347HG_ITitle />} {...props}>
        <SimpleForm>
    <ImageField source="src" title="title" />
            </SimpleForm>
    </Edit>
);

export const BH347HG_ICreate = (props) => (
    <Create title="blabablabla" {...props}>
        <SimpleForm redirect="show">
<ImageInput source="pictures" label="Related pictures" accept="image/*">
    <ImageField source="src" title="title" />
</ImageInput>

        </SimpleForm>
    </Create>
);

export const BH347HG_IShow = (props) => (
    <Show Edit title={<BH-347-HG_JTitle />} {...props}>
        <SimpleShowLayout>
            <TextField source="immatriculation" />
            <TextField source="Nom" />
            <TextField source="Prenom" />
            <ImageField source="src" title="title" />
        </SimpleShowLayout>
    </Show>
);
