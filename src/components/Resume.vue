<template>
    <div class="articles">
        <div class="article" v-for="disque in this.$store.state.panier">
            <div class="article-image" :style="{backgroundImage: setImageArticle(disque.img)}"></div>
            <div class="article-titre">{{ disque.titre }}</div>
            <div class="article-qte">{{disque.qtyAchat}}</div>
            <div class="article-prix-unit">{{disque.prix.toPrecision(4)}} CHF</div>
            <div class="article-prix">{{this.getPrix(disque.prix, disque.qtyAchat)}} CHF</div>
        </div>
    </div>

    <!--
    <div class="article" v-for="disque in this.$store.state.panier">
        <div class="article-image" :style="{backgroundImage: setImageArticle(disque.img)}"></div>
        <div class="article-titre">{{ disque.titre }}</div>
        <div class="article-qte-unit">{{disque.qtyAchat}}</div>
        <div class="article-prix">{{disque.prix.toPrecision(4)}} CHF</div>
        <div class="article-qte">{{this.getPrix(disque.prix, disque.qtyAchat)}} CHF</div>
        <div class="article-suppr" @click="this.$store.commit('retirerPanier', disque)"><span class="material-icons">close</span></div>
    </div>
    -->

    <table>
        <thead>
        <tr>
            <th class="com-image"></th>
            <th class="com-titre">Titre</th>
            <th class="com-qte">Qte</th>
            <th class="com-prix-unit">Prix unitaire</th>
            <th class="com-prix">Prix</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="disque in this.$store.state.panier">
            <td class="com-image"><img :src="disque.img" :alt="disque.titre"></td>
            <td class="com-titre">{{ disque.titre }}</td>
            <td class="com-qte">{{ disque.qtyAchat }}</td>
            <td class="com-prix-unit">{{ getPrix(disque.prix, 1) }} CHF</td>
            <td class="com-prix">{{ getPrix(disque.prix, disque.qtyAchat) }} CHF</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td colspan="2">Total :</td>
            <td style="text-align: center">{{ this.$store.getters.getQtePanier }}</td>
            <td></td>
            <td style="text-align: center">{{this.$store.getters.getPrixPanier}} CHF</td>
        </tr>
        </tfoot>
    </table>
</template>

<script>
export default {
    name: "Resume",

    methods: {
        getPrix(prix, qte) {
            return (prix*qte).toPrecision(4);
        },

        setImageArticle(img) {
            return `url("${img}")`
        },
    },
}
</script>

<style scoped>

.article {
    display: grid;
    grid-template-columns: 100px 5fr .5fr 1fr 1fr;
    height: 100px;
}

.article div {
    border: var(--black) solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.article div.article-image {
    background-size: calc(100% - 1em);
    background-position: center;
    background-repeat: no-repeat;
}

.article div.article-titre {
    justify-content: flex-start;
}



    table {
        width: 100%;
    }

    table, th, td {
        border-collapse: collapse;
    }

    tr {
        border-bottom: 1px var(--black) solid;
    }

    td, th{
        padding: 1em 0;
    }

    tfoot {
        font-weight: bold;
    }

    .com-image {
        width: 6%;
    }

    img {
        width: 100%;
    }

    .com-titre {
        width: 60%;
        text-align: left;
        padding-left: 1em;
    }

    .com-qte {
        width: 10%;
        text-align: center;
    }

    .com-prix-unit {
        width: 10%;
        text-align: center;
    }

    .com-prix {
        width: 10%;
        text-align: center;
    }

</style>