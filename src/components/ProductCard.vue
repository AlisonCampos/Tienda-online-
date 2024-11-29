<template>
    <div
      class="card h-100 text-center border-0 shadow-sm"
      @click="redirectToCategory"
      style="cursor: pointer"
    >
      <img :src="image" class="card-img-top" alt="Product Image">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      title: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    },
    methods: {
      redirectToCategory() {
        this.$router.push(`/category/${this.type}`);
      }
    }
  };
  </script>
  