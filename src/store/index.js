import { createStore } from 'vuex'

export default createStore({
  state: {
    disques: [
      {id: 1, titre: 'Shonen', qte: 5000, img: '/rondelles/01_800px.png',prix: 15.50, dispo: true},
      {id: 2, titre: 'La Quête', qte: 500, img: '/rondelles/02_800px.png',prix: 15.50, dispo: false},
      {id: 3, titre: 'Du Propre', qte: 30000, img: '/rondelles/03_800px.png',prix: 15.50, dispo: true},
      {id: 4, titre: 'Bébéboa', qte: 30000, img: '/rondelles/04_800px.png',prix: 15.50, dispo: false},
      {id: 5, titre: 'Rêve Mieux', qte: 30000, img: '/rondelles/05_800px.png',prix: 15.50, dispo: true},
      {id: 6, titre: 'Seul Avec du Monde Autour', qte: 30000, img: '/rondelles/06_800px.png',prix: 15.50, dispo: true},
      {id: 7, titre: 'Manifeste', qte: 30000, img: '/rondelles/07_800px.png',prix: 15.50, dispo: true},
      {id: 8, titre: "L'Odeur de l'Essence", qte: 30000, img: '/rondelles/08_800px.png',prix: 15.50, dispo: true},
      {id: 9, titre: 'Jour Meilleur', qte: 30000, img: '/rondelles/09_800px.png',prix: 15.50, dispo: true},
      {id: 10, titre: 'Baise le Monde', qte: 30000, img: '/rondelles/10_800px.png',prix: 15.50, dispo: false},
      {id: 11, titre: 'Casseur Flowters Infinty', qte: 30000, img: '/rondelles/11_800px.png',prix: 15.50, dispo: true},
      {id: 12, titre: 'Dernier Verre', qte: 30000, img: '/rondelles/12_800px.png',prix: 15.50, dispo: true},
      {id: 13, titre: 'Ensemble', qte: 30000, img: '/rondelles/13_800px.png',prix: 15.50, dispo: true},
      {id: 14, titre: 'Athéna', qte: 30000, img: '/rondelles/14_800px.png',prix: 15.50, dispo: true},
      {id: 15, titre: 'Civilisation', qte: 30000, img: '/rondelles/15_800px.png',prix: 15.50, dispo: true},
    ],

    maxQtyAchat: 5,

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

    retirerPanier(state, disque) {
      if (disque.qtyAchat > 1) {
        disque.qtyAchat --;
      } else {
        let index = state.panier.indexOf(disque)
        let articleListe = document.querySelector(".article:nth-child("+ (index+1) +")")
        articleListe.classList.add('anim')
        setTimeout(wait, 200)

        function wait() {
          state.panier.splice(index, 1)
          disque.qtyAchat = 0;
          articleListe.classList.remove('anim')
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
