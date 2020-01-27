<template>
    <input type="submit" class="submit" :value="valueText" />
</template>

<script>
export default {
    name: 'FormSubmit',
    props: {
        valueText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">


.submit {

    &:hover {
        background: $color-secondary-dark
    }
}

</style>
