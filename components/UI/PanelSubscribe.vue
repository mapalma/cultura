<template>
  <div class="panel-subscribe-container">
    <h2>Subscribe</h2>
    <!-- <p>Nulla et erat non nulla consequat porttitor.</p> -->

    <form @submit.prevent="onSubmit" id="form-subscribe">
      <FormControl
        controlType="text"
        v-model="subscribe_name"
        id="subscribe_name"
        :errormsg="errormsg_name"
      >Name</FormControl>
      <FormControl
        controlType="email"
        v-model="subscribe_email"
        id="subscribe_email"
        :errormsg="errormsg_email"
      >Email</FormControl>
      <FormSubmit valueText="Send"></FormSubmit>
    </form>
  </div>
</template>

<script>
import FormControl from "@/components/UI/FormControl";
import FormSubmit from "@/components/UI/FormSubmit";

export default {
  name: "PanelSubscribe",
  data() {
    return {
      errors: [],
      subscribe_name: "",
      subscribe_email: "",
      errormsg_name: "",
      errormsg_email: ""
    };
  },
  components: {
    FormControl,
    FormSubmit
  },
  methods: {
    onSubmit() {
      this.errors = [];
      this.errormsg_name = "";
      this.errormsg_email = "";

      if (!this.subscribe_name) {
        this.errors.push("Name is required");
        this.errormsg_name = "Name is required";
      }

      if (!this.subscribe_email) {
        this.errors.push("Email is required.");
        this.errormsg_email = "Email is required";
      } else if (!this.validEmail(this.subscribe_email)) {
        this.errors.push("Email is not valid.");
        this.errormsg_email = "Email is not valid";
      }

      if (!this.errors.length) {
        this.$router.push("/subscribe");
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style lang="scss">
.panel-subscribe {
  background: $color-black;
  color: $color-white;
  margin-bottom: $base-margin;
  padding: $base-padding 0;

  .errors {
    font-size: $font-size-base - 0.2;
    min-width: 200px;
    margin-bottom: $base-margin;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  #form-subscribe {
    .input-control {
      input {
        background-color: transparent;
        border-bottom: 1px solid $color-white;
        min-width: 150px;
        color: $color-white;

        &:focus {
          border-color: $color-primary;
        }
      }
    }
  }

  h2 {
    font-size: $h3;
    color: $color-primary;
    margin-bottom: 0;
  }

  h2,
  p,
  label {
    margin-bottom: $base-padding/2;
  }

  p,
  label {
    font-size: $font-size-base - 0.15;
  }

  input {
    font-size: $font-size-base - 0.15;
    margin-bottom: $base-padding;
  }

  .submit {
    margin-top: 0;
    background: $color-primary;

    &:hover {
      background: $color-tertiary;
    }
  }

  @include mq(tablet) {
    .panel-subscribe-container,
    #form-subscribe {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    h2 {
      padding-right: $base-margin;
      margin-bottom: 0;
    }

    .errors {
      padding-right: $base-padding;
      margin-bottom: 0;
      color: $color-primary;
    }

    p,
    label {
      padding-right: $base-padding;
      margin-bottom: 0;
    }

    p {
      display: none;
    }

    input {
      background: transparent;
      margin-bottom: 0;
    }

    .msg {
      font-size: $font-size-base - 0.3;
      color: $color-primary;
      position: absolute;
      bottom: -20px;
    }

    #form-subscribe {
      .input-control {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: $base-padding;
        margin-bottom: 0;
      }
    }
  }

  @include mq(laptop) {
    p {
      display: block;
    }
  }
}
</style>