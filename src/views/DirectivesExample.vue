<template>
  <div>
    <div v-text="text"></div>
    <img :src="imagen" alt="not found" />
    <div v-html="html1"></div>
    <div v-html="html2"></div>
    <br />
    <br />
    <br />
    <p v-if="mostrar">mostrar activado</p>
    <p v-else>mostrar desactivado</p>
    <v-btn color="success">Activar</v-btn>
    <br />
    <br />
    <br />
    <p v-if="count == 1">soy el numero 1</p>
    <p v-else-if="count == 2">soy el numero 2</p>
    <p v-else-if="count == 3">soy el numero 3</p>
     <p v-else>se acabo el conteo</p>
    <v-btn color="success">+1</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagen:
        "https://cdn.iconscout.com/icon/premium/png-256-thumb/hand-955-796471.png",
      text: "directiva v-text",
      html1: "<strong>grito fuerte</strong>",
      html2: "<em>hablar normal</em>",
      mostrar: false,
      count: 1
    };
  }
};
</script>