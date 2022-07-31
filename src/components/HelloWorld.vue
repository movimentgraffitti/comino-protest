<template>
  <div>
    <!-- start banner Area -->
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen align-items-center justify-content-start" style="height: 915px;">
          <div class="banner-content col-lg-12 col-md-12">
            <h1>
              Registration <br>
              Reclaim Blue Lagoon 13.08.22
            </h1>
            <a href="#donate" class="head-btn btn text-uppercase">Register</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End banner Area -->
    <donation/>
  </div>
</template>

<script>
import Donation from "@/components/Donation";

export default {
  name: 'HelloWorld',
  components: {Donation},
  props: {
    msg: String
  }
}
</script>
