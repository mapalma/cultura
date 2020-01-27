<template>
  <section class="page-container">
    <style>
    :root {
      --bg-image: url('{{ course.fields.imagen.fields.file.url }}');
    }
    </style>

    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <h1 slot="title">{{course.fields.title}}</h1>
          <p>{{course.fields.description}}</p>
        </BannerBlock>
      </div>
    </div>
    <main>
      <div class="inner">
        <div class="column-centre column">
          <h2>Description</h2>
          <div v-html="$md.render(course.fields.fulldescription)"></div>
          <h3>Key Details</h3>
          <ul class="course-key-details">
            <li>
              <span>Starts:</span>
              {{course.fields.starts | formatDate}}
            </li>
            <li>
              <span>Duration:</span>
              {{course.fields.duration}}
            </li>
            <li>
              <span>Price:</span>
              &pound;{{course.fields.price}}
            </li>
          </ul>
        </div>
        <div class="column-right column">
          <SideBarCourse></SideBarCourse>
          <TeacherBlock :teacher="course.fields.teacher"></TeacherBlock>
        </div>
      </div>
    </main>
  </section>
</template>

<script>
import BannerBlock from "@/components/UI/BannerBlock";
import SideBarCourse from "@/components/UI/SideBarCourse";
import TeacherBlock from "@/components/UI/TeacherBlock";
import { createClient } from "@/plugins/contentful";
const contentfulClient = createClient();

export default {
  head() {
    return {
      title: this.course.fields.title,
      meta: [
        {
          name: this.course.fields.title,
          content: this.course.fields.description
        }
      ]
    };
  },
  data() {
    return {
      course: ""
    };
  },
  asyncData(context) {
    return Promise.all([contentfulClient.getEntry(context.route.params.id)])
      .then(course => {
        return {
          course: course[0]
        };
      })
      .catch(error => {
        //context.redirect('/'); if you want to redirect to HOME if it doesnt find the course
        context.error({ statusCode: 404, message: "Item Not Found" });
      });
  },
  components: {
    BannerBlock,
    TeacherBlock,
    SideBarCourse
  }
};
</script>

<style scoped lang="scss">
.banner {
  &:before {
    background-image: var(--bg-image);
  }
}

.course-key-details {
  @extend %clean-list;

  li {
    padding-bottom: $base-padding/3;
    text-transform: capitalize;
  }

  span {
    font-weight: $bold;
  }
}
</style>
