<template>
  <div class="card mt-3 ml-auto mr-auto cart_border">
    <div class="container border-top border-bottom mt-3 d-flex flex-column">
      <h3 class="text-center mt-3">  
        Welcome
      </h3 > 
      <p class="text-center">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <div type="button" class="btn btn-primary align-self-center mb-3">
        <router-link to="/navigator?tab=0" class="text-light">See transations</router-link>
      </div>
    </div>
    <div class="container">
      <p class="mb-3 mt-3 text-center">
        You have {{ getTransactionsLength }} transactions
      </p>
    </div>
  </div>
  <div class="grid_container mt-3">
    <div class="d-flex flex-column border cart_border" v-for="idx in [0,1,2,3]" :key="`g4-${idx}`">
      <h3 class="mt-2 ml-3">
        {{ getFilteredLength(idx) }}
      </h3>
      <div class="mt-3 ml-3">
        {{ getFilteredType(idx) }}
      </div>
      <div type="button" class="btn btn-primary align-self-end mt-3 mr-3 mb-3"  >
        <router-link :to="getFilteredURL(idx)" class="text-light">See transations</router-link>
      </div>
    </div>

  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import { Transaction } from "../types/model";
import getFromApi from '../api/api';
import { getDict, getDictCapitalise } from '../utils/utils';

export default defineComponent({
  name: 'SummaryPage',
  data() {
    return {
      transactions: [] as Array<Transaction>,
    };
  },
  mounted() {
    this.transactions = getFromApi();
  },
  methods: {
    getFilteredLength (num: number) : number {
      return this.transactions.filter(x => x.type === getDict(num)).length
    },
    getFilteredType (num: number) : string {
      return getDictCapitalise(num)
    },
    getFilteredURL (num: number) : string {
      return `/navigator?tab=${num}`
    }
  },
  computed: {
    getTransactionsLength() : number {
      return this.transactions.length;
    },
  }
})
</script>
<style scoped>
.cart_border {
  border-radius: 10px;
}
.grid_container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1 fr;
  column-gap: 4px;
  row-gap: 4px;
}
a{
  text-decoration: none;
}
</style>