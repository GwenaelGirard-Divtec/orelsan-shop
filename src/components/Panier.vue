<template>
    <div class="panier">

        <div class="panier-container" v-if="this.$store.state.panier.length !== 0">
            <DisquesListe :disques="this.$store.state.panier"
                          :suppression="true"
                          :header="true"
                          :footer="true"/>

            <Button01 @click="this.commande">Passer la commande</Button01>
        </div>

        <div v-else style="text-align: center">Votre panier est vide...</div>

    </div>
</template>

<script>

import Button01 from '@/components/Button01.vue'
import DisquesListe from "@/components/DisquesListe";

export default {
    name: "Panier",
    components: {
        Button01,
        DisquesListe,
    },

    methods: {
        getPrix(prix, qte) {
            return (prix*qte).toPrecision(4);
        },

        setImageArticle(img) {
            return `url("${img}")`
        },

        commande() {
            this.$store.commit('ouvrirFermerPanier')
            this.$router.push('/commande')
        }
    },
}
</script>

<style scoped>

.panier {
    background-color: var(--blackTrans);
    color: var(--white);
    padding: 1em;
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.panier::-webkit-scrollbar {
    display: none;
}

.Button01 {
    margin-top: 3em;
}
</style>