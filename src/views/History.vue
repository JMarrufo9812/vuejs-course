<template>
<addTemplate :activities="allActivityStreams"/>
</template>

<script>
import addTemplate from "../templates/addTemplate";
import { ACTIVITIES_QUERY } from "../graphql/queries"

export default {
  name: "",
  components: {
    addTemplate
  },
  apollo: {
   allActivityStreams: {
      query: ACTIVITIES_QUERY
    }
  }
};
</script>

