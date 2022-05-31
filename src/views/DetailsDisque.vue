<template>
    <h1>{{this.$route.params.id.img}}</h1>
</template>

<script>
export default {
    name: "DetailsDisque",
    props: ['id'],
}
</script>

<style scoped>

</style>