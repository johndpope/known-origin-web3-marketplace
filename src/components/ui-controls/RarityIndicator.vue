<template>
  <span class="badge badge-light">
    <span v-if="assetsInEdition.length == 1">Ultra rare</span>
    <span v-else-if="assetsInEdition.length > 1 && assetsInEdition.length <= 5">Rare</span>
    <span v-else-if="assetsInEdition.length > 5">Common</span>
  </span>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';

  export default {
    name: 'rarityIndicator',
    props: ['assetsInEdition'],
    computed: {
      ...mapGetters([
      ]),
    }
  };
</script>

<style scoped>
</style>
