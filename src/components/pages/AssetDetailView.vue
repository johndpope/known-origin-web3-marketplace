<template>
  <div class="container">
    <loading-spinner v-if="!asset"></loading-spinner>

    <div class="row justify-content-sm-center" v-if="!asset">
      <div class="col text-center mt-5">
        <p>We are loading assets from the Blockchain.</p>
        <p>Please be patient as we are fully decentralised.</p>
      </div>
    </div>

    <div v-if="asset" class="row justify-content-sm-center">
      <div class="col col-sm-6">
        <asset :asset="asset" :key="asset.id" :individual="true"></asset>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex';
  import Artist from '../Artist';
  import Asset from "../Asset.vue";
  import LoadingSpinner from "../ui-controls/LoadingSpinner.vue";

  export default {
    name: 'assetDetailView',
    components: {
      LoadingSpinner,
      Asset
    },
    props: {
      tokenId: {
        required: true
      }
    },
    methods: {
      goHome() {
        this.$router.push({name: 'home'});
      }
    },
    computed: {
      ...mapGetters([]),
      ...mapState([]),
      asset: function () {
        return this.$store.getters.assetById(this.tokenId);
      }
    },
    mounted() {

    },
  };
</script>

<style scoped>

</style>
