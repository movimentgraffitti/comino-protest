<template>
  <div>
    <!-- start banner Area -->
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen align-items-center justify-content-start" style="height: 915px;">
          <div class="banner-content col-lg-12 col-md-12">
            <h1>
              Donate <br>
              for legal actions against the DB project on ITS site
            </h1>
            <a href="#donate" class="head-btn btn text-uppercase">Donate Now</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->

    <!-- Start callto Area -->
    <section class="callto-area relative">
      <campaign-stats/>
    </section>
    <!-- End callto Area -->

    <donation/>
  </div>
</template>

<script>
import Donation from "@/components/Donation";
import CampaignStats from "@/components/CampaignStats";
export default {
  name: 'HelloWorld',
  components: {CampaignStats, Donation},
  props: {
    msg: String
  }
}
</script>
