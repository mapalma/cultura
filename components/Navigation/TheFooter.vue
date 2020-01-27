<template>
  <div class="footer">
    <div class="panel-latest-courses">
      <div class="inner">
        <h2>Courses</h2>
        <PanelCourse></PanelCourse>
      </div>
    </div>
    <div class="panel-register">
      <div class="inner">
        <h2>Be a member</h2>
        <p>
          Nam tempor, tellus non cursus faucibus, odio elit feugiat elit, et rutrum eros turpis eu urna. Pellentesque non sapien orci.
          <a
            href="#"
          >Proin consectetur massa non nulla blandit</a>, at sagittis nisl pulvinar. Aenean cursus ligula metus, non dapibus libero malesuada ac.
        </p>
        <a href="/members" class="button">More</a>
      </div>
    </div>
    <PanelEvent></PanelEvent>

    <div class="panel-subscribe">
      <div class="inner">
        <PanelSubscribe></PanelSubscribe>
      </div>
    </div>

    <footer>
      <div class="inner">
        <div class="footer-block footer-address">
          <p>
            <strong>Espacio Cultura</strong>
            <br />Cambridge Rd
            <br />BS2 0AB
            <br />Bristol
          </p>
          <p>
            Email:
            <a href="mailto:info@espaciocultura.com" target="_blank">info@espaciocultura.com</a>
          </p>
        </div>
        <div class="footer-block footer-nav">
          <ul class="footer-nav-list">
            <li class="footer-nav-item">
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/members">Become a member</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/courses">Courses</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/agenda">Agenda</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="footer-block footer-aux-nav">
          <ul class="nav-list">
            <li class="footer-nav-item">
              <nuxt-link to="/terms">Terms and Conditions</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/faq">FAQ</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/careers">Join Us</nuxt-link>
            </li>
            <li class="footer-nav-item">
              <nuxt-link to="/credits">Credits</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer-block footer-info">
          <p>&copy;Espacio Cultura. Nullam urna ex, sodales a rhoncus eu, maximus vitae sapien. Pellentesque arcu ante, tempor vitae lobortis convallis, vehicula at nisi.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import PanelCourse from "@/components/UI/PanelCourse";
import PanelEvent from "@/components/UI/PanelEvent";
import PanelSubscribe from "@/components/UI/PanelSubscribe";

export default {
  name: "TheFooter",
  components: {
    PanelCourse,
    PanelEvent,
    PanelSubscribe
  }
};
</script>


<style lang="scss" scoped>
.panel-latest-courses {
  background: $color-warmlightgrey;
  padding: $base-margin 0;

  h2 {
    color: $color-primary;
  }
}

.panel-register {
  padding: $base-margin 0;
  text-align: center;

  .button {
    color: $color-primary;
    border-color: $color-primary;

    &:hover {
      color: $color-secondary;
      border-color: $color-secondary;
    }
  }

  @include mq(tablet) {
    padding: $base-margin * 1.5 0;
    max-width: 80%;
    margin: 0 auto;
  }
}

.footer-block {
  font-size: $font-size-base - 0.2;

  p {
    margin-bottom: $base-padding/2;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @include mq(tablet) {
    width: 25%;
    float: left;
  }
}
</style>