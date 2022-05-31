<template>
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
            <td class="com-prix-unit">{{ getPrix(disque.prix, 1) }}</td>
            <td class="com-prix">{{ getPrix(disque.prix, disque.qtyAchat) }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td colspan="4">Total :</td>
            <td>{{getPrixTotalPanier}}</td>
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
    },

    computed: {
        getPrixTotalPanier() {
            return this.$store.getters.getPrixTotalPanier
        }
    }
}
</script>

<style scoped>
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