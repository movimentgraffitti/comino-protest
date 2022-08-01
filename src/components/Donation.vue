<template>
  <!-- Start donate Area -->
  <section class="donate-area relative section-gap" id="donate">
    <div class="overlay overlay-bg"></div>
    <div class="container" v-if="!hasError && !showPaymentForm && !showThanks">
      <div class="row d-flex justify-content-end">
        <div class="col-lg-12 col-sm-12 pb-80 header-text">
          <h1>REGISTER NOW</h1>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6 contact-left">
          <div class="single-info">
            <h2>REGISTRATION – Kemmuna ta’ Kulħadd: Nieħdu Lura l-Blue Lagoon</h2>
            <p>We’re off to reclaim Comino, this time with the public’s participation. As the Blue Lagoon continues
              to be hijacked by commercial interests that have transformed this beach into their private lido, on
              Saturday 13 August we will free it up and enjoy a day at the beach.</p>
            <p>To join this protest, please book your place on the boat for the reduced price of €11 per person
              (round trip). Boats will depart to the Blue Lagoon from Ċirkewwa (Malta) or Mġarr (Gozo) at 8am.
              There will be a number of return trips starting from noon.</p>
            <p>On completing your registration you will receive the receipt of payment and a second email with
              important information about the protest. You will be asked to show the emailed receipt prior to
              boarding.</p>
            <p>Visit the Facebook event <a href="https://www.facebook.com/events/423734683127169" target="_blank">here</a>.</p>
            <p>For queries or assistance send us an email to info@movimentgraffitti.org.
              See you on Saturday 13 th August!</p>
            <p>
              <br/>
            </p>

            <h3>Il-Baħar, ix-Xatt,
              Kemmuna ta’ Kulħadd!</h3>

            <small>On completing your registration you will receive the receipt of payment and a second email with important information about the protest. You will be asked to show the emailed receipt prior to boarding. (titled 'Donation to Moviment Graffitti')</small>
          </div>
        </div>
        <div class="col-lg-6 contact-right">
          <donation-form
              v-on:hasError="handleDonationError"
              v-on:donationCreated="onDonationCreated"
          />
          <img src="img/rise-up-against-greed.jpg" class="img-fluid">
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