<script lang="ts">

import ListPage from './components/ListPage.vue';
import SummaryPage from './components/SummaryPage.vue'

import {defineComponent} from "vue"

export default defineComponent({
  components: {
    ListPage, SummaryPage
  }
})

</script>

<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link" to="/">Summary Page</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/navigator?tab=0">List Page</router-link>
    </li>
  </ul>
  <div class="container">
    <router-view></router-view>
  </div>


</template>

<style scoped>
</style>
