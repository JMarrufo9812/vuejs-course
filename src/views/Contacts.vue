<template>
<v-row>
  <v-col cols="12">
    <h1>contactos</h1>
       <v-col align="right"><buttom/></v-col>
    <DataTable :headers="ListHeaders" :list="allContacts"/>
  </v-col>
  </v-row>
</template>

<script>
import DataTable from "../components/DataTable";
import { GET_CONTACTS } from "../graphql/queries";
import Buttom from "../components/Buttom";

export default {
  data() {
    return {
      ListHeaders: [
        { text: "", value: "actions", sortable: false, },
        {
          text: "Nombre",
          align: "left",
          sortable: true,
          value: "name"
        },
        { text: "Apellido", value: "lastName", sortable: false, },
        { text: "Correo", value: "email",  sortable: false, },
        { text: "Telefono", value: "phone",  sortable: false, },
        { text: "Puesto en la empresa", value: "jobTitle",  sortable: false, },
        { text: "Empresa", value: "company",  sortable: false, },
        { text: "Cumpleaños", value: "birthday",  sortable: false, },
        { text: "Etiqueta", value: "labels",  sortable: false, },
        { text: "Propietario", value: "name",  sortable: false,}
      ]
    }
  },
 components: {
    DataTable,
    Buttom
  },
  apollo: {
    allContacts: {
      query: GET_CONTACTS
    }
  }
};
</script>
