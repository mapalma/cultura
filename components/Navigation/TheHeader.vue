<template>
  <header class="header">
    <div class="header-inner">
      <nav class="flex items-center justify-between flex-wrap w-full">
        <div class="brand-container">
          <nuxt-link to="/">
            <img src="../../assets/images/logo.svg" alt="cultura" />
          </nuxt-link>
        </div>
        <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
        <div
          class="nav-content w-full flex-grow md:flex md:items-center md:w-auto md:block pt-6 md:pt-0 bg-white md:bg-transparent"
          :class="{visible: isHidden}"
          id="nav-content"
        >
          <ul class="list-reset md:flex justify-end flex-1 items-center nav-list">
            <li class="nav-item">
              <nuxt-link to="/" class="link-home" @click.native="resetSubMenu()">Home</nuxt-link>
            </li>

            <li class="nav-item" v-for="item in mainMenuItems" :key="item.fields.id">
              <nuxt-link
                :to="'/'+item.fields.slug"
                @click.native="resetSubMenu()"
                :class="{'active-link' : (activeMenuLink === item.fields.slug) ? true: ''}"
              >{{item.fields.title}}</nuxt-link>
              <ul v-if="item.fields.subMenuItems" class="submenu">
                <li
                  class="nav-item"
                  v-for="subItem in item.fields.subMenuItems"
                  :key="subItem.fields.id"
                >
                  <nuxt-link
                    :to="'/'+subItem.fields.slug"
                    @click.native="updateMenuAbout('about')"
                  >{{subItem.fields.title}}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  data() {
    return {
      activeMenuLink: "",
      isHidden: true
    };
  },
  computed: {
    mainMenuItems() {
      return this.$store.getters["pages/getMainMenu"];
    }
  },
  methods: {
    updateMenuAbout(active) {
      this.activeMenuLink = active;
    },
    resetSubMenu() {
      this.activeMenuLink = "";
    }
  },
  components: {
    TheSideNavToggle
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  position: relative;
  z-index: 250;

  .header-inner {
    padding: 0;

    @include mq(tablet) {
      padding: 0 $base-padding;
      max-width: 1300px;
      margin: 0 auto;
    }
  }
}

.brand-container {
  width: 240px;
  float: left;

  img {
    margin-top: $base-padding/2;
    margin-bottom: $base-padding/2;
    display: block;
  }
}

.nav-content {
  display: none;

  @include mq(tablet) {
    padding: 0;
    display: block;
  }
}
.nav-list {
  padding: 0 $base-padding $base-padding $base-padding;

  > li {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      color: $color-text;

      &:hover {
        color: $color-primary;
      }

      &.active-link {
        color: $color-primary;
      }

      &:not(.link-home) {
        &.active-link {
          color: $color-primary;
        }
      }

      &.link-home {
        &.active-link {
          color: $color-text;
        }
        &.exact-active-link {
          color: $color-primary;
        }
      }
    }
  }

  @include mq(tablet) {
    list-style: none;
    padding: 0;
    float: right;
    height: 60px;

    > li {
      float: left;
      position: relative;

      > a {
        line-height: 60px;
        position: relative;
        z-index: 300;

        &:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background-color: $color-primary;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: $transition;
        }

        &:hover {
          &:after {
            width: 100%;
          }
        }

        &:not(.link-home) {
          &.active-menu-link,
          &.active-link {
            color: $color-primary;

            &:after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background-color: $color-primary;
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }

      a {
        padding: 0 $base-padding/1.5;
        background: $color-white;
        text-transform: uppercase;
        font-size: $font-size-base - 0.2;
        font-weight: bold;
        letter-spacing: 1px;
        display: block;
        color: $color-text;
        position: relative;

        &.active-link {
          color: $color-primary;
        }

        &:not(.link-home) {
          &.active-menu-link,
          &.active-link {
            color: $color-primary;
          }
        }

        &.link-home {
          &.active-link {
            color: $color-text;
          }
          &.exact-active-link {
            color: $color-primary;
          }

          &.exact-active-link {
            &:after {
              content: "";
              display: block;
              width: 100%;
              height: 2px;
              background-color: $color-primary;
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }

      &:last-child {
        ul {
          right: 0;
          left: auto;
        }
      }

      .submenu {
        position: absolute;
        top: -50vh;
        left: 0;
        z-index: 1;
        background-color: $color-white;
        list-style: none;
        margin: 0;
        padding: 0 $base-padding/1.5;
        width: 200px;
        transition: all 0.3s ease-in;

        li {
          padding: $base-padding/2 0;

          a {
            padding: 0;
            font-size: $font-size-base - 0.2;

            &.active-link {
              border-bottom: 0;
            }
          }
        }
      }

      &:hover {
        ul {
          top: 60px;
          opacity: 1;
        }
      }
    } // end of >li
  }
}
</style>
