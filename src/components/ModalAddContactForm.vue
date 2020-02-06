<template>
  <v-card>
    <v-card-title>
      <span class="headline">Añadir Contacto</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Apellido" ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Correo" hint="ejemplo: correo@dominio.com"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Telefono"></v-text-field>
          </v-col>
            <v-col cols="12">
            <v-text-field label="puesto dentro de la empresa"></v-text-field>
          </v-col>
           <v-col cols="12">
            <v-text-field label="empresa"></v-text-field>
          </v-col>
            <v-col cols="12">
            <v-text-field label="fecha de cumpleaños"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="['0-17', '18-29', '30-54', '54+']" label="propietario" ></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Etiquetas"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <small>*se guardara el contacto</small>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close(false)">Cerrar</v-btn>
        <v-btn color="blue darken-1" text >Guardar</v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    close (value) {
      this.$emit("close", value)
    }
  }
}
</script>
