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
            <h2>Why we want to stop ITS Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In metus leo, laoreet quis eros id, cursus mattis libero. Pellentesque condimentum mauris erat, in commodo metus varius sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec posuere nisi sit amet urna ultrices lacinia. Nullam et neque eu massa varius fringilla vitae sit amet elit. Praesent placerat odio arcu. Nulla nisi erat, pretium ac elementum eu, vestibulum quis ex. Quisque eget ante commodo, suscipit augue a, placerat mi. Sed consectetur leo eget turpis pulvinar, id aliquet nulla aliquam. Sed aliquet nibh justo, vestibulum dictum sapien lobortis eget. Etiam tempor dictum odio consequat interdum. Nulla euismod feugiat molestie. In iaculis mattis ex, non pharetra magna eleifend vitae. Etiam nisi massa, tincidunt ac convallis eget, posuere eu erat. In ac enim non massa iaculis dictum sit amet nec nibh. Etiam sodales, arcu vel finibus vehicula, elit mauris varius ipsum, vitae iaculis lorem odio in ligula.
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
      <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
          <img src="img/payment-form-bg.jpg" class="img-fluid">
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