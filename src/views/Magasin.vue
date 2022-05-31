<template>
    <div class="magasin">
        <Disques />
        <div class="panier" :style="{right: this.etatPanier}">
            <Panier />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Disques from '@/components/Disques.vue'
import Panier from '@/components/Panier.vue'

export default {
    name: 'Magasin',
    components: {
        Disques,
        Panier,
    },

    data() {
        return {
            panierOuvert: false,
        }
    },

    computed: {
        etatPanier() {
            let stylePanier = ""
            if(this.$store.state.panierEtat) {
                stylePanier = "0"
            } else {
                stylePanier = "-33%"
            }

            return stylePanier;
        }
    },
}
</script>

<style>
    .home {
        display: flex;
        position: relative;
    }

    .magasin {
        position: relative;
    }

    .panier {
        position: fixed;
        width: 33%;
        top:0;
        height: calc(100% - 100px);
        margin-top: 100px;
        transition: all 200ms ease-in-out;
        overflow: hidden;
    }
</style>
