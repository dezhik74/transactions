<template>
  <div class="card pb-5 pt-2 mt-3 ml-auto mr-auto cart_border">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="i in [0,1,2,3]" :key="`nav-${i}`">
        <router-link
          :to="`/navigator?tab=${i}`"
          class="nav-link text-body"
          :class="{ active: getTabNum === i }"
        >{{ dictCapitalise(i) }}</router-link>
      </li>
    </ul>
    <router-view>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col col-5 text-center border-bottom">Name</div>
          <div class="col col-5 text-center border-bottom">Acount</div>
        </div>
        <div
          v-for="(item, idx) in filteredList"
          :key="`key-${idx}`"
          class="row justify-content-around"
        >
          <div class="col-5 text-center border-bottom">{{ item.name }}</div>
          <div class="col-5 text-center border-bottom">{{ item.acount }}</div>
        </div>
      </div>
    </router-view>
  </div>
</template>
<script lang="ts">

import { defineComponent } from "vue";
import getFromApi from '../api/api'
import { Transaction, ListItem } from "../types/model";
import {getDict, getDictCapitalise} from '../utils/utils';

export default defineComponent({
  name: "ListPage",
  data() {
    return {
      transactions: [] as Array<Transaction>,
    };
  },
  computed: {
    getTabNum(): number {
      return Number(this.$route.query.tab) in [0, 1, 2, 3] ? Number(this.$route.query.tab) : 0;
    },
    filteredList() : Array<ListItem>{
      let str: string = getDict(this.getTabNum);
      return this.transactions
        .filter((x: Transaction) => x.type === str)
        .map((el: Transaction) => {
          return { name: `${el.name.first} ${el.name.last}`, acount: "555" };
        });
    },
  },
  methods: {
    dictCapitalise(num : number) : string {
      return getDictCapitalise(num)
    }
  },
  mounted() {
    this.transactions = getFromApi();
  }
});
</script>
<style scoped>
.cart_border {
  border-radius: 10px;
}
.active {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>