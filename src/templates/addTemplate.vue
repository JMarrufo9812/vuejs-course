<template>
  <v-list two-line>
    <template v-for="(item) in activities">
      <v-list-item :key="item.id">
        <v-list-item-content>
          <p>
            <v-avatar color="indigo">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
            <router-link :to="item.data.actor.url">{{item.data.actor.name}}</router-link>
            {{validate(item.data.type)}}
            <router-link :to="item.data.object.url">{{item.data.object.name}}</router-link>
          </p>
          <v-list-item-subtitle></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "addTemplate",
  props: {
    activities: {
      type: [Object, Array]
    }
  },
  methods: {
    validate: function(type) {
      return type == "add"
        ? "añadio"
        : type == "update"
        ? "actualizo"
        : type == "delete"
        ? "elimino"
        : type == "complete"
        ? "completo la tarea"
        : type == "asigned"
        ? "asigno"
        : "no hizo nada";
    }
  }
};
</script>
