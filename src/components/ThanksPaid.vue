<template>
  <div class="row d-flex justify-content-center">
    <div class="col-lg-12 pb-80">
      <h1>Donation Processing</h1>
      <p>Thanks. We have collected all the details we need to process the donation.</p>
      <p>We will email you with the reciept once the donation is processed.</p>

      <ul>
        <li>Donation Ref: {{details.externalId}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThanksPaid",
  props: {
    details: {
      type: Object,
      default: null,
    }
  }
}
</script>

<style scoped>
h1 {
  color: #FFFFFF;
}
</style>