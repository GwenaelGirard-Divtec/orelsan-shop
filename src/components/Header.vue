<template>
    <header>
        <span class="avertissement">{{this.$store.state.maxQtyAchat}} exemplaire{{this.$store.state.maxQtyAchat > 1 ? "s" : ""}} de chaque édition par commande.</span>
        <div class="header">
            <h1 style="display: none;">Orelsan Shop Civilisation New Album</h1>
            <div class="icone-civ" :style="{backgroundImage: 'url(\'' + require('@/assets/img/logos/icone_civ.png') + '\')'}"></div>
            <div class="logo-civ" :style="{backgroundImage: 'url(\'' + require('@/assets/img/logos/logo_civ.png') + '\')'}"></div>
            <div class="panier-apercu">
                <div v-show="this.$route.matched.some(({ name }) => name === 'magasin')">
                    <span class="material-icons" @click="this.$store.commit('ouvrirFermerPanier')">{{ changeIcone }}</span>
                    <div class="panier-qte" v-show="!this.$store.state.panierEtat && this.$store.getters.getQtePanier > 0">{{ this.$store.getters.getQtePanier }}</div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "Header",

    computed: {
        changeIcone() {
            let icone = ""
            if (this.$store.state.panierEtat) {
                icone = "close"
            } else {
                icone = "shopping_cart"
            }

            return icone;
        }
    }
}
</script>

<style scoped>

    header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 100;
    }

    .avertissement {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background-color: var(--white);
        height: var(--info-height);
    }

    .header {
        background-color: var(--black);
        height: var(--header-height);
        padding: .5rem;
        display: flex;
        align-items: center;
    }

    .header .icone-civ {
        background-repeat: no-repeat;
        background-position: left;
        background-size: contain;
        width: 10%;
        height: 100%;
    }

    .header .logo-civ {
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 60%;
    }

    .header .panier-apercu {
        width: 10%;
        height: 100%;
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 200ms ease-in-out;
    }

    .header .panier-apercu span:hover {
        cursor: pointer;
    }

    .header .panier-apercu span {
        margin: .25rem;
        font-size: 2rem;
    }

    .header .panier-apercu div.panier-qte {
        font-size: .9rem;
        transform: translate(1.25rem, -2.8rem);
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1em;
        background-color: var(--red);
        position: absolute;
    }
</style>