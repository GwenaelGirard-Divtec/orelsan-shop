<template>
    <div class="disques" :style="{pointerEvents: this.pointerEvents}">
        <div class="magasin">
            <div v-for="disque in this.$store.state.disques" class="disque">
                <router-link :to="{ name: '/disque', params: { id: `${disque.id}` } }" class="disque-detail-link">
                    <div v-if="!disque.dispo" class="sold-out">Sold Out</div>
                    <img :src="disque.img" :alt="disque.titre">
                    <div class="disque-infos">
                        <h3 class="disque-titre">{{disque.titre}}</h3>
                        <div class="disque-sub">
                            <span class="disque-qte">{{disque.qte}} Ex.</span>
                            <span class="disque-prix">{{disque.prix.toPrecision(4)}} CHF</span>
                        </div>
                    </div>
                </router-link>
                <button01 class="disque-bouton" @click="ajouterAuPanier(disque)" taille="90">Ajouter au panier</button01>
            </div>
        </div>
    </div>
</template>

<script>

import Button01 from '@/components/Button01.vue'

export default {
    name: "Disque",
    components: {
        Button01,
    },

    computed: {
        pointerEvents() {
            return this.$store.state.panierEtat === true ? 'none' : 'unset';
        }
    },

    methods: {
        getDispo(dispo) {
            return dispo === true ? "En stock" : "épuisé";
        },

        ajouterAuPanier(disque) {
            this.$store.commit('ajouterPanier', disque);
        }
    }
}
</script>

<style scoped>

    .magasin {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: stretch;
        width: 80%;
        margin: 0 auto;
    }

    .disque {
        background-color: var(--blackTrans);
        border-radius: 10px;
        position: relative;
        color: var(--white);
        padding: 1rem;
        margin: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: calc(100% / 3 - 4em);
        transition: all 200ms ease-in-out;
    }

    .disque:hover {
        cursor: pointer;
    }

    .disque .sold-out {
        position: absolute;
        background: var(--whiteTrans);
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4em;
        font-family: 'Garamond', cursive;
        font-weight: bold;
        color: var(--red);
        user-select: none;
        z-index: 50;
        cursor: default;
    }

    .disque-detail-link {
        text-decoration: none;
        color: var(--white)
    }

    .disque img {
        display: block;
        width: 90%;
        margin: 0 auto;
    }

    .disque .disque-infos {
        min-height: 100px;
    }

    .disque .disque-titre {
        font-family: 'Garamond', cursive;
        font-size: 1.9rem;
        margin: .75rem 0 0 0;
    }

    .disque .disque-sub {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
    }

    .disque .disque-sub .disque-qte {
        font-style: italic;
        color: var(--whiteTrans)
    }

    @media screen and (max-width: 1000px) {
        .disque {
            width: calc(100% / 2 - 4em);
        }
    }

    @media screen and (max-width: 750px) {
        .disque {
            width: calc(100% / 1 - 4em);
        }
    }
</style>