<template>
  <v-card color="grey lighten-4" flat height="200px" tile>
    <v-toolbar dense>
      <v-toolbar-title>CervusRM</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon to="/history">Historial</v-btn>
      <v-spacer></v-spacer>

      <v-tab to="/contacts">Contactos</v-tab>
      <v-spacer></v-spacer>

      <v-tab to="/directives">directivas</v-tab>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>