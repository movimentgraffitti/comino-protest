<template>
  <form class="booking-form" id="myForm">
    <div class="row">
      <div class="col-lg-6 d-flex flex-column">
        <input v-model="donationDetails.name" placeholder="Enter your first name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="form-control mt-20"  type="text">
      </div>
      <div class="col-lg-6 d-flex flex-column">
        <input v-model="donationDetails.surname" placeholder="Enter your last name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your surname'" class="form-control mt-20" required="" type="text">
      </div>
      <div class="col-lg-12 d-flex flex-column">
        <input  v-model="donationDetails.email" name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="form-control mt-20" required="" type="email">
      </div>
      <div class="col-lg-12 d-flex flex-column">
        <input v-model="donationDetails.amount"  placeholder="Donation amount (EUR)" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Donation amount (EUR)'" class="form-control mt-20" required="" type="number">

        <textarea class="form-control mt-20" name="message" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required="" v-model="donationDetails.message"></textarea>
      </div>

      <div class="col-lg-12 d-flex justify-content-end send-btn">
        <span class="submit-btn primary-btn mt-20 text-uppercase " v-on:click="donationClick">donate<span class="lnr lnr-arrow-right"></span></span>
      </div>
      <div class="alert-msg"></div>
    </div>
  </form>
</template>

<script>
import {RepositoryFactory} from "@/repositories/RepositoryFactory";

export default {
  name: "DonationForm",
  data() {
    return {
      donationDetails: {
        name: null,
        surname: null,
        email: null,
        amount: null,
        message: null,
      },
    }
  },
  methods: {
    donationClick() {
      RepositoryFactory
          .get('donation')
          .postDonation(this.donationDetails)
          .then(
              response => {
                this.$emit('donationCreated', response.data.data)
              }
          )
          .catch(
              error => {
                this.$emit('hasError', error);
              }
          )
    }
  }
}
</script>

<style scoped>

</style>
