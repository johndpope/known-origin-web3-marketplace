<template>
  <div class="container">
    <h1>Contract</h1>

    <div class="row justify-content-center">
      <div class="col-sm-8">
        <div class="card shadow-sm">
          <div class="card-body">
            <table class="table table-striped">
              <tbody>
              <tr v-if="contractSymbol">
                <td>Contract</td>
                <td>
                  <clickable-address :eth-address="contractAddress"></clickable-address>
                </td>
              </tr>
              <tr v-if="contractSymbol">
                <td>Symbol</td>
                <td>{{ contractSymbol }}</td>
              </tr>
              <tr v-if="curatorAddress">
                <td>Curator</td>
                <td>
                  <clickable-address :eth-address="curatorAddress"></clickable-address>
                </td>
              </tr>
              <tr v-if="contractDeveloperAddress">
                <td>Developer</td>
                <td>
                  <clickable-address :eth-address="contractDeveloperAddress"></clickable-address>
                </td>
              </tr>
              <tr v-if="totalSupply">
                <td>Supply</td>
                <td><router-link :to="{ name: 'assets' }">{{ totalSupply }}</router-link></td>
              </tr>
              <tr v-if="totalNumberOfPurchases">
                <td>Sales</td>
                <td>{{ totalNumberOfPurchases }}</td>
              </tr>
              <tr v-if="totalPurchaseValueInEther">
                <td>Total</td>
                <td>{{ totalPurchaseValueInEther }} ETH</td>
              </tr>
              <tr v-if="totalEditions()">
                <td>Number of editions</td>
                <td>{{totalEditions()}}</td>
              </tr>
              <tr v-if="totalListedArtists()">
                <td>Number of artists</td>
                <td>{{totalListedArtists()}}</td>
              </tr>
              <tr v-if="mostExpensivePiece()">
                <td>Most expensive asset</td>
                <td>{{mostExpensivePiece().priceInEther}} ETH</td>
              </tr>
              <tr v-if="cheapestPiece()">
                <td>Best value asset</td>
                <td>{{cheapestPiece().priceInEther}} ETH</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!--<h1>Activity Stream</h1>-->

    <!--<table class="table table-striped">-->
    <!--<tbody>-->

    <!--</tbody>-->
    <!--</table>-->
  </div>
</template>

<script>

  import { mapGetters, mapState } from 'vuex';
  import AddressIcon from '../ui-controls/AddressIcon';
  import ClickableAddress from '../ui-controls/ClickableAddress';

  export default {
    name: 'contractDetails',
    components: {AddressIcon, ClickableAddress},
    computed: {
      ...mapGetters([
        'totalEditions',
        'totalListedArtists',
        'cheapestPiece',
        'mostExpensivePiece',
      ]),
      ...mapState([
        'curatorAddress',
        'contractDeveloperAddress',
        'commissionAddress',
        'totalSupply',
        'totalPurchaseValueInWei',
        'totalNumberOfPurchases',
        'totalPurchaseValueInEther',
        'contractName',
        'contractSymbol',
        'contractAddress'
      ])
    }
  };
</script>

<style scoped>
</style>
