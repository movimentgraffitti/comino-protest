<template>
  <form class="booking-form" id="myForm">
    <div class="row">
      <div class="col-lg-6 d-flex flex-column">
        <input v-model="donationDetails.name" v-validate="'required|min:2'" placeholder="Enter you name" type="text" name="name" class="form-control mt-20" >
        <span class="v-error" v-show="errors.has('name')">{{ errors.first('name') }}</span>
      </div>
      <div class="col-lg-6 d-flex flex-column">
        <input v-model="donationDetails.surname" v-validate="'required|min:2'" placeholder="Enter your surname" class="form-control mt-20" name="surname" required="" type="text">
        <span class="v-error" v-show="errors.has('surname')">{{ errors.first('surname') }}</span>
      </div>
      <div class="col-lg-12 d-flex flex-column">
        <input  v-model="donationDetails.email" name="email" v-validate="'required|email'" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" class="form-control mt-20" required="" type="email">
        <span class="v-error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="col-lg-12 d-flex flex-column">
        <input v-model="donationDetails.amount" name="amount" v-validate="'required|min_value:10'" min="10" placeholder="Donation amount (EUR)" class="form-control mt-20" required="" type="number">
        <span class="v-error" v-show="errors.has('amount')">{{ errors.first('amount') }}</span>

        <textarea class="form-control mt-20" name="message" placeholder="Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Message'" required="" v-model="donationDetails.message"></textarea>
      </div>

      <div class="col-lg-12 d-flex justify-content-end send-btn">
        <span class="submit-btn primary-btn mt-20 text-uppercase " v-on:click="submit">donate<span class="lnr lnr-arrow-right"></span></span>
      </div>
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
    submit() {
      this.$validator.validateAll().then(success => {
        if (success) {
          this.donate();
        }
      })
    },
    donate() {
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
