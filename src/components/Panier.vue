<template>
    <div class="panier">
        <div class="article-wrapper" v-if="this.$store.state.panier.length !== 0">
            <div class="articles">
                <div class="article header">
                    <div class="article-titre">Titre</div>
                    <div class="article-qte-unit">Qte.</div>
                    <div class="article-prix">Prix unit.</div>
                    <div class="article-qte">Prix</div>
                    <div class="article-suppr"></div>
                </div>


                <div class="article" v-for="disque in this.$store.state.panier">
                    <div class="article-image" :style="{backgroundImage: setImageArticle(disque.img)}"></div>
                    <div class="article-titre">{{ disque.titre }}</div>
                    <div class="article-qte-unit">{{disque.qtyAchat}}</div>
                    <div class="article-prix">{{disque.prix.toPrecision(4)}} CHF</div>
                    <div class="article-qte">{{this.getPrix(disque.prix, disque.qtyAchat)}} CHF</div>
                    <div class="article-suppr" @click="this.$store.commit('retirerPanier', disque)"><span class="material-icons">close</span></div>
                </div>

                <div class="article footer">
                    <div class="article-titre">Total : </div>
                    <div class="article-qte">{{ this.$store.getters.getQtePanier }}</div>
                    <div class="article-prix">{{ this.$store.getters.getPrixPanier }} CHF</div>
                </div>
            </div>

            <Button01 @click="this.commande">Passer la commande</Button01>

        </div>

        <div v-else style="text-align: center">Votre panier est vide...</div>

    </div>
</template>

<script>

import Button01 from '@/components/Button01.vue'

export default {
    name: "Panier",
    components: {
        Button01,
    },

    methods: {
        getDispo(dispo) {
            return dispo === true ? "En stock" : "épuisé";
        },

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

.articles {
    margin: 1em 0;
}

.article {
    display: grid;
    grid-template-columns: 75px 3fr .5fr 1.7fr 1.7fr .5fr;
    height: 75px;
    border-top: white 1px solid;
    border-bottom: white 1px solid;
}

.article.header {
    height: 32px;
    border: none;
    font-weight: bold;
}

.article.header .article-titre{
    grid-column-start: 1;
    grid-column-end: 3;
}

.article div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.article-image {
    background-size: calc(100% - 1em);
    background-position: center;
    background-repeat: no-repeat;
}

.article div.article-titre {
    justify-content: flex-start;
}

.article div.article-suppr:hover {
    cursor: pointer;
}

.article.footer {
    height: 32px;
    border: none;
    font-weight: bold;
}

.article.footer .article-titre {
    grid-column-start: 1;
    grid-column-end: 3;
}

.article.footer .article-qte {
    grid-column-start: 3;
    grid-column-end: 3;
}

.article.footer .article-prix {
    grid-column-start: 5;
    grid-column-end: 6;
}

/* The animation code */
@keyframes example {
    0% {transform: translate(0);
        opacity: 100%;}
    70% {transform: translate(80%);
        opacity: 0;}
    80% {transform: translate(100%);
        opacity: 0;}
    100% {transform: translate(100%);
        opacity: 0;}
}

/* The element to apply the animation to */
.anim {
    animation-name: example;
    animation-duration: 300ms;
}
</style>