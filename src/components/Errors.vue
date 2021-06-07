<template>
  <div class="row d-flex justify-content-end">
    <div class="col-lg-12 col-sm-12 pb-80 header-text">
      <h1>Donation Error</h1>
      <p>
        There seemed to have been an error in starting the donation process.
      </p>
      <p>
        Not to worry no money was taken at this point. Please try again later.
      </p>
      <p class="p-red">
        Error Message: {{errorMessage}} <br/>
      </p>
      <p class="p-red" v-if="errorMessage.response">
        Errors
      <ul>
        <li v-for="(item, index) in errorMessage.response.data.errors" :key="index">
          {{ index }} - {{ item }}
        </li>
      </ul>
      </p>
      <p>
            <span class="btn btn-black" v-on:click="reload">
              Reload
            </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Errors",
  props: {
    errorMessage: {
      type: Object,
      default: null
    }
  },
  methods: {
    reload() {
      location.reload();
    },
  }
}
</script>