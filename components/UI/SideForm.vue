<template>
  <aside class="sidebar-container">
    <!--  -->
    <div class="form-container">
      <h3>Contact Us</h3>
      <form @submit.prevent="onSubmit" id="form-contact">
        <FormControl controlType="text" v-model="name" id="name" :errormsg="errormsg_name">Name</FormControl>
        <FormControl controlType="email" v-model="email" id="email" :errormsg="errormsg_email">Email</FormControl>
        <FormControl controlType="textarea" v-model="question" id="question">Question</FormControl>
        <FormSubmit valueText="Send"></FormSubmit>
      </form>
    </div>
  </aside>
</template>

<script>
import FormControl from "@/components/UI/FormControl";
import FormSubmit from "@/components/UI/FormSubmit";

export default {
  name: "SideForm",
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      question: "",
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

      if (!this.name) {
        this.errors.push("Name is required");
        this.errormsg_name = "Name is required";
      }

      if (!this.email) {
        this.errors.push("Email is required.");
        this.errormsg_email = "Email is required";
      } else if (!this.validEmail(this.email)) {
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


<style lang="scss" >
.form-container {
  width: 100%;
  padding: $base-padding;
  color: $color-white;
  background-color: $color-primary;
  margin-bottom: $base-padding;

  h3 {
    color: $color-white;
  }

  p,
  label {
    font-size: $font-size-base - 0.2;
  }

  .input-control input,
  .input-control textarea {
    color: $color-white;
    font-size: $font-size-base - 0.2;
    position: relative;
  }

  .msg {
    color: $color-text;
  }
}
</style>
