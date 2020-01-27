<template>
  <div class="input-control">
    <label :for="id">
      <slot />
    </label>
    <input
      v-if="controlType !== 'textarea' "
      v-bind="$attrs"
      :value="value"
      :id="id"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      :id="id"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <span class="msg">{{errormsg}}</span>
  </div>
</template>

<script>
export default {
  name: "FormControl",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    errormsg: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.input-control {
  margin: 0 0 $base-padding/2 0;
  position: relative;
}

.input-control label {
  display: block;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  height: 30px;
  padding: 5px;
  background-color: rgba($color-white, 0.2);
  transition: 0.2s ease-in all;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: rgba($color-white, 0.4);
  outline: none;
}

.msg {
  font-size: $font-size-base - 0.3;
}
</style>


