<template>
  <!-- Start donate Area -->
  <section class="donate-area relative section-gap" id="donate">
    <div class="overlay overlay-bg"></div>
    <div class="container" v-if="!hasError && !showPaymentForm && !showThanks">
      <div class="row d-flex justify-content-end">
        <div class="col-lg-12 col-sm-12 pb-80 header-text">
          <h1>DONATE NOW</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 contact-left">
          <div class="single-info">
            <h2>Your contribution will allow us to continue the fight against the DB monstrosity</h2>
            <p>The Planning Authority (PA) has given its go ahead to the DB group’s project:  two 18-storey towers and a 12-storey hotel on public land in Pembroke (the ex-ITS site).  Situated in a residential area, the project will impact important historical sites and areas of great natural sensitivity.</p>
            <p>The PA initially approved the ITS-DB project in 2018. A strong public response to a call for donations allowed us to fight multiple legal battles that ultimately led to the cancellation of the permit.</p>
            <p>We are now determined to continue fighting this monstrosity by mounting further legal actions against this threat to our quality of life and our environment. We need everyone’s help for this. Legal actions against such a massive project entail significant legal and professional fees that we will only be able to sustain with the public’s contributions.</p>
            <p>Everyone is against DB’s monstrosity - three Local Councils, several organisations and thousands of residents and objectors. We cannot let big business and public authorities run roughshod over the people’s will to protect its environment and quality of life.</p>
            <p>Your contribution - big or small - makes a huge difference!</p>
          </div>
        </div>
        <div class="col-lg-6 contact-right">
          <donation-form
              v-on:hasError="handleDonationError"
              v-on:donationCreated="onDonationCreated"
          />
          <img src="img/payment-form-bg.png" class="img-fluid">
        </div>
      </div>
    </div>
    <div class="container" v-if="hasError">
      <errors :error-message="errorMessage"/>
    </div>
    <div class="container" v-if="showPaymentForm">
      <payment-form :details="donationDetails" v-on:paid="onPaid" v-on:paymentError="onPaymentError"/>
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
      this.showPaymentForm = false
      this.showThanks = true
      this.paymentDetails = response
    },
    onPaymentError(response) {
      this.hasError = true
      this.errorMessage = response
    }
  }
}
</script>

<style scoped>
h2 {
  color:#FFFFFF;
  margin-bottom: 0.8em;
}
img {
  margin-top: 1.5em;
}
p {
  font-size: 17px;
  line-height: 1.5;
}
</style>