<template>
    <div class="back" @click="gotoAccueil">
        <span class="material-icons">
            chevron_left
        </span>
    </div>
</template>

<script>
export default {
    name: "Back",

    methods: {
        gotoAccueil() {
            this.$router.push('/');
        },
    },
}
</script>

<style scoped>
.back {
    position: fixed;
    top: 150px;
    left: 0;
    padding: 10px;
    cursor: pointer;
}

.back span {
    font-size: 4em;
}

</style>