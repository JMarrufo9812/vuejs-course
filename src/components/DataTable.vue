<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="list" :search="search">
      <template v-slot:item.actions>
        <v-btn class="mx-2" fab small dark color="indigo">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>

export default {
  props: {
    list: {
      type: [Object, Array]
    },
    headers: {
      type: [Object, Array]
    }
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>