<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="mx-2" v-on="on" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <ModalAddContactForm :dialog="dialog" />
    </v-dialog>
  </v-row>
</template>


<script>
import ModalAddContactForm from "./ModalAddContactForm";

export default {
  data: () => ({
    dialog: false
  }),
  components: {
    ModalAddContactForm
  }
};
</script>

