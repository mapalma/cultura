<template>
  <section class="page-container">
    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <h1 slot="title">Teachers</h1>
          <p>{{page.fields.description}}</p>
        </BannerBlock>
      </div>
    </div>
    <main>
      <div class="inner">
        <div class="column-centre column">
          <div class="intro" v-html="$md.render(page.fields.fulldescription)"></div>
          <ul class="teachers-list">
            <li class="teacher-item" v-for="teacher in allTeachers" :key="teacher.sys.id">
              <img :src="teacher.fields.imagen.fields.file.url" :alt="teacher.fields.name" />
              <div class="teacher-details">
                <h3>{{teacher.fields.name}}</h3>
                <div v-html="$md.render(teacher.fields.descripcion)"></div>
              </div>
            </li>
          </ul>
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
import { createClient } from "@/plugins/contentful";
const contentfulClient = createClient();
const config = require("@/.contentful.json");

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
      return this.$store.getters["pages/getPage"]("teachers");
    }
  },
  asyncData(context) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: "profesores",
        order: "-sys.createdAt"
      })
    ]).then(([teachers]) => {
      return {
        allTeachers: teachers.items
      };
    });
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
}

.intro {
  margin-bottom: $base-margin;
}

.teachers-list {
  @extend %clean-list;

  .teacher-item {
    margin-bottom: $base-padding * 1.5;
    padding-bottom: $base-padding * 1.5;
    border-bottom: 1px solid rgba($color-black, 0.1);

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }

    img {
      max-width: 40%;
      margin-bottom: $base-padding;
    }

    @include mq(tabletXL) {
      display: flex;
      align-items: flex-start;

      img {
        max-width: 40%;
        margin-right: $base-margin;
        margin-bottom: 0;
      }
    }
  }
}
</style>
