import {Personne,Lieu,Ingredients} from './class.js'

// Instances 


// Lieu
let maison = new Lieu('Maison',[])
let magasin = new Lieu('Magasin',[])
magasin.bacPaniers = [
    {nom:'panier 1', contenu : []},
    {nom:'panier 2', contenu : []},
    {nom:'panier 3', contenu : []}
]

let nullePart = new Lieu ('nullePart', [])


// Personnes
let amine = new Personne('Yassin',nullePart,200,[],[])

// Ingredients

let oeuf = new Ingredients('Oeuf','entier',2)
let huile = new Ingredients('huile','liquide',2)
let poivre = new Ingredients('poivre','moulu',2)
let lait = new Ingredients('lait','liquide',2)
let fromage = new Ingredients('fromage','entier',3,50)

magasin.ingredients = [oeuf,huile,poivre,lait,fromage]

// objet simples 


//bol

let bol = {
    nom : 'bol',
    contenu : [],
    melanger(nomMelange){
        let newMelange = {
            nom : nomMelange,
            etat : 'pas cuit'
        }
        while(this.contenu.length > 0){
            this.contenu.shift()
        }
        this.contenu.push(newMelange)
    }
}

// couteau

let couteau = {
    nom : 'Couteau',
    couper (ingredients){
        if (ingredients.etat == 'entier') {
            ingredients.etat = 'coupé'
            console.log(`Je découpe ${ingredients.nom}`);

        }
    }
}

// poele

let poele = {
    nom : 'Poele',
    contenu : [],
    cuir(){
        setTimeout(()=> {this.contenu[0].etat = 'cuite';
        console.log(`Votre omelette est prête !`);
    }, 4000)
    } 
}


export {maison,magasin,yassin,oeuf,huile,poivre,lait,fromage,bol,couteau,poele,nullePart}