<template>
<div class="details-disque">

    <Back theme="dark"></Back>

    <div v-if="this.disque !== undefined">
        <div class="disque-infos">
            <h2>{{disque.titre}}</h2>
            <div class="disque-infos-sub">
                <span class="disuqe-qte">{{disque.qte}} Ex.</span>
                <span class="disque-prix">{{disque.prix.toPrecision(4)}} CHF</span>
            </div>
        </div>

        <img class="disque-cover" :src="disque.img" :alt="disque.titre + 'cover'">
    </div>

    <span v-else class="unknown-disc">Disque inconnu...</span>


</div>
</template>

<script>

import Back from '@/components/Back.vue'

export default {
    name: "DetailsDisque",
    components: {
        Back,
    },

    data() {
        return {
            id: parseInt(this.$route.params.id),
        }
    },

    computed: {
        disques() {
            return JSON.parse(JSON.stringify(this.$store.state.disques));
        },

        disque() {
            return this.disques.find(disque => disque.id === this.id);
        },
    },
}
</script>

<style scoped>

    .details-disque {
        position: relative;
        height: calc(100vh - (var(--header-height) + var(--info-height)));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--black);
    }

    .unknown-disc {
        color: var(--white);
        font-size: 3em;
        font-family: 'Garamond', cursive;
    }

    .back {
        color: var(--white);
    }

    .disque-infos {
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 2em 2em;
        min-width: 200px;
        color: var(--white);
    }

    .disque-infos h2 {
        font-family: 'Garamond', cursive;
        font-size: 2.5em;
        margin: 0;
    }

    .disque-infos-sub {
        display: flex;
        justify-content: space-between;
    }

    .disque-cover {
        width: 500px;
    }
</style>