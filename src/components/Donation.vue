<template>
  <!-- Start donate Area -->
  <section class="donate-area relative section-gap" id="donate">
    <div class="overlay overlay-bg"></div>
    <div class="container" v-if="!hasError && !showPaymentForm && !showThanks">
      <div class="row d-flex justify-content-end">
        <div class="col-lg-6 col-sm-12 pb-80 header-text">
          <h1>Donate Now</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br> tempor incididunt ut labore  et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 contact-left">
          <div class="single-info">
            <h4>Divided Evenly</h4>
            <p>
              inappropriate behavior is often laughed off as “boys will be boys,” <br> women face higher conduct women face higher conduct.
            </p>
          </div>
          <div class="single-info">
            <h4>Transperancy All the Way</h4>
            <p>
              inappropriate behavior is often laughed off as “boys will be boys,” <br> women face higher conduct women face higher conduct.
            </p>
          </div>
          <div class="single-info">
            <h4>Trustworthy</h4>
            <p>
              inappropriate behavior is often laughed off as “boys will be boys,” <br> women face higher conduct women face higher conduct.
            </p>
          </div>
        </div>
        <div class="col-lg-6 contact-right">
          <donation-form
              v-on:hasError="handleDonationError"
              v-on:donationCreated="onDonationCreated"
          />
        </div>
      </div>
    </div>
    <div class="container" v-if="hasError">
      <errors :error-message="errorMessage"/>
    </div>
    <div class="container" v-if="showPaymentForm">
      <payment-form :details="donationDetails" v-on:paid="onPaid"/>
    </div>
    <div class="container" v-if="showThanks">
      <thanks-paid :details="paymentDetails"/>
    </div>
  </section>
  <!-- End donate Area -->
</template>

<script>
import DonationForm from "@/components/Donation/DonationForm";
import Errors from "@/components/Errors";
import PaymentForm from "@/components/Donation/PaymentForm";
import ThanksPaid from "@/components/ThanksPaid";
export default {
  name: "Donation",
  components: {ThanksPaid, PaymentForm, Errors, DonationForm},
  data() {
    return {
      hasError: false,
      showPaymentForm: false,
      showThanks: false,
      donationDetails: null,
      errorMessage: null,
      paymentDetails: null
    }
  },
  methods: {
    handleDonationError(error) {
      this.hasError = true
      this.errorMessage = error
    },
    onDonationCreated(response) {
      this.showPaymentForm = true
      this.donationDetails = response
    },
    onPaid(response) {
      console.log('paid', response)
      this.showPaymentForm = false
      this.showThanks = true
      this.paymentDetails = response
      console.log('showPaymentForm', this.showPaymentForm)
      console.log('showThanks', this.showThanks)
      console.log('paymentDetails', this.paymentDetails)
      console.log('hasError', this.hasError)
    }
  }
}
</script>

<style scoped>

</style>