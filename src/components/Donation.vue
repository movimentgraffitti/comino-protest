<template>
  <!-- Start donate Area -->
  <section class="donate-area relative section-gap" id="donate">

    <div class="overlay overlay-bg"></div>
    <div class="container">
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
          <donation-form/>
        </div>
      </div>
    </div>
  </section>
  <!-- End donate Area -->
</template>

<script>
import DonationForm from "@/components/Donation/DonationForm";
export default {
  name: "Donation",
  components: {DonationForm}
}
</script>

<style scoped>

</style>