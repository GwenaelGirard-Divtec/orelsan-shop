<template>
  <div class="page">
      <h2>404 - page introuvable...</h2>
      <span @click="gohome">retourner à l'accueil</span>
  </div>
</template>

<script>
export default {
    name: "404",
    methods: {
        gohome() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.page {
    height: calc(100vh - var(--header-height) - var(--info-height) - var(--footer-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.page h2{
    font-size: 2em;
}

.page span:hover {
    cursor: pointer;
    text-decoration: underline;
}
</style>