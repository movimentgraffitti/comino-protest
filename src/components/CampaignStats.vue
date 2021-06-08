<template>
  <div class="container">
    <div class="row d-flex callto-wrap justify-content-between pt-40 pb-40">
      <h3 class="text-white text-center">Total Amount Collected: €{{totalDonation}}</h3>
    </div>
  </div>
</template>

<script>
import {RepositoryFactory} from "@/repositories/RepositoryFactory";

export default {
  name: "CampaignStats",
  data() {
    return {
      totalDonation: "0.00"
    }
  },
  created() {
    RepositoryFactory
        .get('campaign')
        .getCampaignStats()
        .then(
            response => {
              let data = response.data.data;
              this.totalDonation = data.donation.totalPaid;
            }
        )
  }
}
</script>

<style scoped>

</style>