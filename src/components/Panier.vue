<template>
    <div class="panier">
        <div class="article-wrapper" v-if="this.$store.state.panier.length !== 0">
            <table class="articles-panier">
                <thead>
                <tr>
                    <th></th>
                    <th class="article-titre">Titre</th>
                    <th class="article-qte">Qte</th>
                    <th class="article-prix">Prix</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                <tr v-for="disque in this.$store.state.panier" class="article" :key="this.titre">
                    <td class="article-image" :style="{backgroundImage: setImageArticle(disque.img)}"></td>
                    <td class="article-titre">{{ disque.titre }}</td>
                    <td class="article-qte">{{ disque.qtyAchat }}</td>
                    <td class="article-prix">{{ getPrix(disque.prix, disque.qtyAchat) }} CHF</td>
                    <td class="article-suppr" @click="this.$store.commit('retirerPanier', disque)"><span class="material-icons">close</span></td>
                </tr>
                </tbody>
            </table>



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


.articles-panier {
    border-collapse: collapse;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
}

.article-wrapper {
    width: 100%;
}

.article td {
    transition: all 200ms ease-in-out;
}

.articles-panier .article {
    border-top: white 2px solid;
    border-bottom: white 2px solid;
    height: 75px;
}
.article-image {
    width: 15%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.article-titre {
    width: 55%;
    padding-left: .5rem;
}

.article-qte {
    width: 10%;
    text-align: center;
}

.article-prix {
    width: 20%;
    text-align: center;
}

.article-suppr {
    width: 32px;
    text-align: center;
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