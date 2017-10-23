import React from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import { required,ImageInput,ImageField, number,Validate,LongTextInput, DateInput, List, ReferenceField, ReferenceInput, SelectArrayInput, SelectInput, NumberField, NumberInput, Datagrid, Edit, Create,Show, SimpleForm, DateField, TextField, EditButton, DisabledInput, TextInput,LongTextField,SimpleShowLayout,RadioButtonGroupInput,CheckboxGroupInput,SaveButton, Toolbar,BooleanInput  } from 'admin-on-rest';


export const BH347HG_IList = (props) => (
    <List {...props}>
        <Datagrid>
            <ImageField source="src" src="src" title="title" />
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
    <ImageInput source="src"  label="title" accept="image/*" multiple={true}>
    <ImageField source="src" title="title"/>
</ImageInput> 
    <ImageField source="src" src="src" title="title" />
            </SimpleForm>
    </Edit>
);

export const BH347HG_ICreate = (props) => (
    <Create title="blabablabla" {...props}>
        <SimpleForm redirect="show">
<ImageInput source="src" label="title" accept="image/*" multiple={true}>
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
            <ImageField source="src" src="src" title="title" />
        </SimpleShowLayout>
    </Show>
);
