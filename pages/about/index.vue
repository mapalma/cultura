<template>
  <section class="page-container">
    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <h1 slot="title">{{page.fields.title}}</h1>
          <p>{{page.fields.description}}</p>
        </BannerBlock>
      </div>
    </div>
    <main>
      <div class="inner">
        <div class="column-centre column">
          <div v-html="$md.render(page.fields.fulldescription)"></div>
        </div>
        <div class="column-right column">
          <SideForm></SideForm>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import BannerBlock from "@/components/UI/BannerBlock";
import SideForm from "@/components/UI/SideForm";

export default {
  head() {
    return {
      title: this.page.fields.title,
      meta: [
        {
          name: this.page.fields.title,
          content: this.page.fields.description
        }
      ]
    };
  },
  components: {
    BannerBlock,
    SideForm
  },
  computed: {
    page() {
      return this.$store.getters["pages/getPage"]("about");
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
}
</style>