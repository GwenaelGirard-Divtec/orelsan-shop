<template>
    <div class="disques-liste-container">
        <div v-if="header" class="disque-liste header" :style="{gridTemplateColumns: this.gridTemplate}">
            <div class="disque-titre">Titre</div>
            <div class="disque-qte">Qte.</div>
            <div class="disque-prix-unit">Prix unit.</div>
            <div class="disque-prix">Prix</div>
        </div>

        <hr>

        <div class="disque-liste articles" :style="{gridTemplateColumns: this.gridTemplate}"
            v-for="disque in this.disques">
            <div class="disque-image" :style="{backgroundImage: setImageArticle(disque.img)}"></div>
            <div class="disque-titre">{{ disque.titre }}</div>
            <div class="disque-qte">{{disque.qtyAchat}}</div>
            <div class="disque-prix-unit">{{disque.prix.toPrecision(4)}} CHF</div>
            <div class="disque-prix">{{this.getPrix(disque.prix, disque.qtyAchat)}} CHF</div>
            <div v-if="suppression" class="disque-suppr" @click="retirerPanier(disque)" ><span class="material-icons">close</span></div>
        </div>

        <hr>

        <div v-if="footer" class="disque-liste footer" :style="{gridTemplateColumns: this.gridTemplate}">
            <div class="disque-titre">Total : </div>
            <div class="disque-qte">{{ this.$store.getters.getQtePanier }}</div>
            <div class="disque-prix">{{ this.$store.getters.getPrixPanier }} CHF</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DisquesListe",

    props: {
        disques: {
            type: Array,
            required: true
        },
        header: {
            type: Boolean,
            required: false,
            default: true
        },
        suppression: {
            type: Boolean,
            required: false,
            default: true
        },
        footer: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    computed: {
        gridTemplate() {
            if(this.suppression) {
                return "75px 3fr .7fr 1.7fr 1.7fr .8fr";
            } else {
                return "75px 3fr .5fr 1.7fr 1.7fr";
            }
        }
    },

    methods: {
        getPrix(prix, qte) {
            return (prix*qte).toPrecision(4);
        },

        setImageArticle(img) {
            return `url("${img}")`
        },

        retirerPanier(disque) {
            let element = event.target.parentNode.parentNode;
            this.$store.commit("retirerPanier", {
                element: element,
                disque: disque
            });
        }
    }
}
</script>

<style scoped>

:root {
    --templateFull: 75px 3fr .7fr 1.7fr 1.7fr .8fr;
    --templateNoSuppr: 75px 3fr .5fr 1.7fr 1.7fr;
}

.disque-liste.header {
    height: 32px;
    border: none;
    font-weight: bold;
}

.disque-liste.header .disque-titre {
    grid-column-start: 1;
    grid-column-end: 3;
}

.disque-liste {
    display: grid;
    height: 75px;
}

.disque-liste div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.disque-liste div.disque-image {
    background-size: calc(100% - 1em);
    background-position: center;
    background-repeat: no-repeat;
}

.disque-liste div.disque-titre {
    justify-content: flex-start;
}

.disque-liste div.disque-prix {
    justify-content: center;
}

.disque-liste div.disque-suppr span:hover {
    cursor: pointer;
}

.disque-liste.footer {
    margin-top: .75em;
    height: 32px;
    border: none;
    font-weight: bold;

}

.disque-liste.footer div.disque-titre {
    grid-column-start: 1;
    grid-column-end: 3;
}

.disque-liste.footer div.disque-prix {
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
.disque-suppr-anim {
    animation-name: example;
    animation-duration: 300ms;
}


@media screen and (max-width: 550px) {
    .disque-liste div.disque-image {
        display: none;
    }
}
</style>