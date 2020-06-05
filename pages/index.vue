<template>
  <section class="page-container">

    <div class="banner">
      <div class="inner">
        <BannerBlock>
          <p slot="title">Courses &amp; Workshops</p>
          <p>Book available now</p>
          <nuxt-link to="/courses" class="button">All Courses</nuxt-link>
        </BannerBlock>
      </div>
    </div>

    <div class="home-panel">
      <div class="inner">
        <div class="home-panel-container">
          <div class="panel-right panel">
            <div class="panel-full home-intro">
              <h1 class="title">Espacio Cultura</h1>
              <p>Duis nisi sem, pellentesque id est tincidunt, facilisis dapibus risus. Suspendisse sodales orci tempus, convallis neque ut, cursus sem. Curabitur quis augue sed nunc porttitor ullamcorper ac quis nisl.</p>
              <p>Aenean est ligula, suscipit a velit eu, efficitur posuere magna. Ut non lorem nec enim volutpat fringilla id non metus. Aenean lobortis non sapien interdum aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
              <p>Maecenas sollicitudin tellus nulla, nec tincidunt ante maximus et. Nullam vel porta nisl. Aenean accumsan euismod eros, a ultricies mauris hendrerit non. Morbi lobortis eleifend diam in tempor. Ut ultrices id risus quis porttitor.</p>
              <nuxt-link to="/about" class="button">More About Us</nuxt-link>
            </div>
            <div class="panel-half  color-secondary-dark">
              <nuxt-link to="/teachers">
               <h3>Teachers</h3>
               <p>Diam faucibus, lacinia lectus sed, egestas ipsum.</p>
              </nuxt-link>
            </div>
            <div class="panel-half color-tertiary ">
              <nuxt-link to="/about" >
                <h3>Cafe</h3>
                <p>Venue Sed sit amet lacus pretium, tempor odio sit amet, rutrum ligula.</p>
              </nuxt-link>
            </div>
          </div>

          <div class="panel-left panel">
            <div class="panel-half color-secondary">
              <nuxt-link to="/agenda" >
                <span class="type">Series</span>
                <h3>Reuse, Reduce and Recycle</h3>
                <p>Venue Sed sit amet lacus pretium, tempor odio sit amet, rutrum ligula.</p>
              </nuxt-link>
            </div>
            <div class="panel-half color-lightgrey">
              <nuxt-link to="/agenda" >
                <span class="type">Series</span>
                <h3>Feminism</h3>
                <p>Venue Sed sit amet lacus pretium, tempor odio sit amet, rutrum ligula.</p>
              </nuxt-link>
            </div>
            <div class="panel-full season">
              <nuxt-link to="/agenda">
                <span class="type">Series</span>
                <h3>Aenean accumsan euismod eros, a ultricies mauris hendrerit non.</h3>
                <p>Proin tristique laoreet nulla in convallis. Etiam nisi felis, suscipit sit amet nisl nec, rutrum consequat ex. Cras congue nisi ipsum. Sed nec dui viverra enim tincidunt posuere in vitae tellus. Maecenas quis porttitor risus. </p>
                <p>Nam pellentesque urna vitae arcu dapibus finibus. Aliquam vehicula augue id imperdiet gravida. Vestibulum a diam faucibus, lacinia lectus sed, egestas ipsum.</p>
              
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import BannerBlock from '@/components/UI/BannerBlock'
export default {
  components: {
     BannerBlock
  }
}
</script>

<style scoped lang="scss">

  .banner {

    .button {
        color: $color-white;
        border-color: $color-white;

      &:hover {
        color: $color-primary;
        border-color: $color-primary;
      }
    }
  }

  .home-panel-container {

    margin: $base-margin 0;

    .panel-full {
   
      padding: $base-margin;
    }

    .panel-half {
  
      h3 {
        line-height: 1.3;
        font-weight: bold;
        font-size: $h4;
      }

      a {
        transition: 0.2s all ease-in;
        padding: $base-margin;
        display: block;
        width: 100%;
        height: 100%;

        &:hover {

          background-color: $color-black;
        }
      }
    }

     @include mq(tablet){
      display: flex;
      margin: $base-margin 0;

      .panel {
        display: flex;
        flex-wrap: wrap;
        width: 50%;
      }

      .panel-full {
        width: 100%;
        min-height: 600px;
        width: 100%;
        padding: $base-margin;
      }

      .panel-half {
        width: 50%;
        min-height: 300px;  
        
      }
    }

    .home-intro {
      background: #fafafa;

      h1 {
        color: $color-primary;
        font-size: $h3;
      }

      .button {
        border-color: $color-primary;
        color: $color-primary;
      }
    }

    .color-secondary-dark {   
      background: $color-secondary-dark;
    }

    .color-secondary {
      background: $color-secondary;
    }

    .color-tertiary{
      background: $color-tertiary;
    }

    .color-lightgrey {   
      background: $color-warmlightgrey;

      .type {
        color: $color-primary
      }
    }

    .color-secondary,
    .color-tertiary,
    .color-secondary-dark {   
      color: $color-white;

      a {
        color: $color-white;
      }

      .type,
      h3 {
        color: $color-white;
      }
    }
  

    .color-primary,
    .color-lightgrey {

      a {
        color: $color-text;

        &:hover {
          color: $color-white;

          .type,
          h3 {
            color: $color-white;
          }
        }
      }
    }

    .season {
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: 0.2s all ease-in;
      background: $color-primary;
      
      &:hover{
        &:after {
          transform: scale(1.02, 1.02);
        }

        background: $color-black;
      }
     
      a {
        position: relative;
        z-index: 10;
        display: block;
        color: $color-white;

        h3 {
          font-size: $h2;
          color: $color-white;
        }
      }

      &:after {
        transition: 0.2s all ease-in;
        background:url('~assets/images/banners/japon.jpg') no-repeat center center;
        content:'';
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.1;
        z-index: 0;
        filter: grayscale(100%);
      }
    }
  }

</style>
