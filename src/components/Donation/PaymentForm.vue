<template>
  <div class="row d-flex justify-content-center">
    <div class="col-lg-12">
      <h1 v-if="!processing">Payment Form</h1>
      <v-braintree
          v-if="!processing"
          :authorization="token"
          @success="onSuccess"
          @error="onError"
      ></v-braintree>
      <h1 v-if="processing">Updating Donation</h1>
    </div>
  </div>
</template>

<script>
import {RepositoryFactory} from "@/repositories/RepositoryFactory";

const brainTreeToken = process.env.VUE_APP_BRAIN_TREE_TOKEN;

export default {
  name: "PaymentForm",
  props: {
    details: {
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      token: brainTreeToken,
      processing: false,
    }
  },
  methods: {
    onSuccess (payload) {
      this.processing = true;
      let nonce = payload.nonce;
      RepositoryFactory
          .get('donation')
          .payDonation(
              this.details.id,
              nonce
          )
          .then(
              response => {
                this.$emit('paid', response.data.data)
              }
          )
          .catch(
              reason => {
                console.log('Error', reason)
              }
          )
    },
    onError (error) {
      let message = error.message;
      console.log(message);
      // Whoops, an error has occured while trying to get the nonce
    }
  }
}
</script>

<style scoped>
h1, h2 {
  color: #fffdfb;
}
</style>