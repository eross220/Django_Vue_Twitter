<template>
  <div class="container mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="flex flex-col justify-between h-screen">
      <header class="flex flex-row items-center justify-between py-10">
        <div class="nav-logo text-2xl font-bold">
          <RouterLink to="/" v-if="mySite">{{ mySite.name }}</RouterLink>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import gql from "graphql-tag";
  import { SITE_INFO } from "@/queries";

  export default{
    data() {
      return {
        mySite: null,
      };
    },

    async created() {
      const siteInfo = await this.$apollo.query({
        query: SITE_INFO
      });
      this.mySite = siteInfo.data.site;
    },
  };
</script>


