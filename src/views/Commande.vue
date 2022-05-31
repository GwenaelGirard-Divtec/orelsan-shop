<template>
  <div class="commande">
    <h2>Résumé de votre commande : </h2>
    <Resume />
  </div>
</template>

<script>

import Resume from '@/components/Resume.vue'

export default {
    name: 'Commande',
    components: {
        Resume
    }
}
</script>

<style scoped>

.commande {
    width: 75%;
    margin: 0 auto;
}

</style>