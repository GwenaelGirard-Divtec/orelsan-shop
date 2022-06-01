<template>
  <div class="commande">
    <Back></Back>
    <h2>Résumé de votre commande : </h2>
      <DisquesListe :disques="this.$store.state.panier"
                    :suppression="false"
                    :header="true"
                    :footer="true"/>
  </div>
</template>

<script>

import Resume from '@/components/Resume.vue'
import DisquesListe from "@/components/DisquesListe";
import Back from '@/components/Back.vue'

export default {
    name: 'Commande',
    components: {
        DisquesListe,
        Resume,
        Back
    },

    mounted() {
        if(this.$store.state.panier.length === 0) {
            this.$router.push('/')
        }

        window.scrollTo(0,0);
    }
}
</script>

<style scoped>

.commande {
    position: relative;
    width: 100%;
    padding: 2em 20%;
    height: calc(100vh - (var(--header-height) + var(--info-height)));
    margin: 0 auto;
}

.commande h2 {
    margin:0;
}

</style>