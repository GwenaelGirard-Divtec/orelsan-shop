import { createStore } from 'vuex'

export default createStore({
  state: {
    disques: require('./disques').disques,

    maxQtyAchat: 1,

    panier: [],

    panierEtat: false,
  },
  getters: {
    getQtePanier(state) {
      let qtePanier = 0;
      for (let i = 0; i < state.panier.length; i++) {
        qtePanier += state.panier[i].qtyAchat;
      }

      return qtePanier

    },

    getPrixPanier(state) {
      let prixPanier = 0;
      for (let i = 0; i < state.panier.length; i++) {
        prixPanier += state.panier[i].prix * state.panier[i].qtyAchat;
      }

      return prixPanier.toPrecision(4)
    }
  },
  mutations: {
    ajouterPanier(state, disque){
      if((disque.qtyAchat < state.maxQtyAchat || disque.qtyAchat === undefined) && disque.dispo) {
        let contains = false;

        state.panier.forEach(item => {
          if(disque === item) {
            contains = true;
          }
        })

        if(!contains) {
          disque.qtyAchat = 1;
          state.panier.push(disque)
        } else {
          disque.qtyAchat ++;
        }
      }
    },

    retirerPanier(state, {disque, element}) {
      if (disque.qtyAchat > 1) {
        disque.qtyAchat --;
      } else {
        let index = state.panier.indexOf(disque)
        element.classList.add('disque-suppr-anim')
        setTimeout(wait, 200)

        function wait() {
          state.panier.splice(index, 1)
          disque.qtyAchat = 0;
          element.classList.remove('disque-suppr-anim')
        }
      }
    },

    ouvrirFermerPanier(state) {
      state.panierEtat = !state.panierEtat;
    }
  },
  actions: {
  },
  modules: {
  }
})
