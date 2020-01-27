<template>
  <section class="page-container">
    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <h1 slot="title">Contact</h1>
        </BannerBlock>
      </div>
    </div>
    <main>
      <div class="inner">
        <div class="column-centre column">
          <p>Thanks for subscribing to our newsletter. You will recieve now our latest news and activities on you email.</p>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import BannerBlock from "@/components/UI/BannerBlock";
export default {
  head() {
    return {
      title: "Newsletter subscription",
      meta: [
        {
          name: "Newsletter subscription",
          content: "Newsletter subscription"
        }
      ]
    };
  },
  components: {
    BannerBlock
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
}
</style>