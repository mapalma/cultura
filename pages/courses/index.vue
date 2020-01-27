<template>
  <section class="page-container">
    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <h1 slot="title">Courses &amp; Workshops</h1>
          <p>{{page.fields.description}}</p>
        </BannerBlock>
      </div>
    </div>
    <main>
      <div class="inner">
        <div class="column-centre column">
          <div v-html="$md.render(page.fields.fulldescription)"></div>
          <div class="infinite-scroll">
            <ul class="infinite-scroll-list course-list">
              <li
                class="infinite-scroll-list-item course-item"
                v-for="course in allCourses"
                :key="course.sys.id"
              >
                <h3>
                  <nuxt-link :to="'/courses/' + course.sys.id">{{course.fields.title}}</nuxt-link>
                </h3>
                <p>{{course.fields.description}}</p>
                <ul class="course-key-details">
                  <li>
                    <span class="tag">Type:</span>
                    {{course.fields.type}}
                  </li>
                  <li>
                    <span class="tag">Starts:</span>
                    {{course.fields.starts | formatDate}}
                  </li>
                  <li>
                    <span class="tag">Price:</span>
                    &pound;{{course.fields.price}}
                  </li>
                </ul>
              </li>
            </ul>
            <infinite-loading ref="infiniteLoading" spinner="waveDots" @infinite="infiniteHandler">
              <div slot="no-results" />
              <span slot="no-more"></span>
            </infinite-loading>
          </div>
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
  data() {
    return {
      total: 10,
      count: 4,
      skip: 0,
      allCourses: []
    };
  },
  computed: {
    page() {
      return this.$store.getters["pages/getPage"]("courses");
    }
  },
  components: {
    BannerBlock,
    SideForm
  },
  methods: {
    infiniteHandler() {
      setTimeout(() => {
        if (this.count < this.total) {
          this.skip += 4;
          this.count += 4;

          contentfulClient
            .getEntries({
              content_type: config.CTF_CONTENT_TYPE,
              order: "fields.starts",
              skip: this.skip,
              limit: 4
            })
            .then(courses => {
              courses.items.map(el => {
                this.allCourses.push(el);
              });
            });

          this.$refs.infiniteLoading.stateChanger.loaded();
        } else {
          this.$refs.infiniteLoading.stateChanger.complete();
        }
      }, 1000);
    }
  },
  asyncData(context) {
    return Promise.all([
      contentfulClient.getEntries({
        content_type: config.CTF_CONTENT_TYPE,
        order: "fields.starts",
        skip: 0,
        limit: 4
      })
    ]).then(([courses]) => {
      return {
        allCourses: courses.items
      };
    });
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;

  &:before {
    background-image: url("../../assets/images/banners/home.jpg");
  }
}

.course-list,
.course-key-details {
  list-style: none;
  padding: 0;
}

.course-item {
  @extend %list-items-separation;

  h3 {
    margin-bottom: $base-padding/2;
    font-size: $h4;

    a {
      color: $color-secondary;
      &:hover {
        color: $color-black;
      }
    }
  }
  p {
    margin-bottom: $base-padding/2;
  }

  li {
    font-size: $font-size-base - 0.2;
  }

  .tag {
    font-weight: normal;
    letter-spacing: 1px;
  }

  .course-key-details {
    span {
      font-weight: bold;
    }
  }
}
</style>