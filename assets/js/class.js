import { magasin,bol, couteau, poele } from "./instances.js"

class Personne {
    constructor(nom,lieu,argent,mainDroite,mainGauche){
        this.nom = nom
        this.lieu = lieu
        this.argent = argent
        this.mainDroite = []
        this.mainGauche = []
        
        this.seDeplacer = (depart, destination) => {
            destination.personne.push(this)
            depart.personne.splice(depart.personne.indexOf(this),1)
            this.lieu = destination
            console.log(`${this.nom} est actuellement à la/au ${this.lieu.nom}`);
        }
    
        this.couper = () => {
            bol.contenu.forEach(element => {
                couteau.couper(element)
            });
        }

        this.melanger = (nomMelange) => {
            bol.melanger(nomMelange)
        }

        this.prendrePanier = (lieu) => {
            if (lieu.nom == "Magasin"){
                this.mainDroite.push(lieu.bacPaniers.shift())
                console.log(`${this.nom} a pris un ${this.mainDroite[0].nom}`);
            }
        }

        this.remettrePanier = (lieu) => {
            if (lieu.nom == "Magasin"){
                lieu.bacPaniers.push(this.mainDroite.shift())
                console.log(`${this.nom} a remis un ${lieu.bacPaniers[lieu.bacPaniers.length-1].nom}`);
            }
        }
        
        this.acheter = (lieu) => {
            if (lieu.nom == "Magasin") {
                lieu.ingredients.forEach(element => {
                    this.mainDroite[0].contenu.push(element)
                    this.argent -= element.prix
                    console.log(`Vous avez acheter ${element.nom} au prix de : ${element.prix}`);
                    
                });
                
            } else {
                console.log(`vous n'êtes pas au magasin , vous ne pouvez pas prendre d'article`);
                
            }
            this.vider = () =>{
                while (this.mainDroite[0].contenu.length > 0) {
                    console.log(`Vous avez ajouté ${this.mainDroite[0].contenu[0].nom}`);
                    bol.contenu.push(this.mainDroite[0].contenu.shift())
                    
                }
            }
            this.viderBol = () => {
                poele.contenu.push(bol.contenu.shift())
                console.log(`Vous videz le bol dans la poele`);
            }
        }
    }
}


class Lieu {
    constructor(nom,personne){
        this.nom = nom
        this.personne = personne
    }
}

class Ingredients {
    constructor(nom,etat,prix ){
        this.nom = nom
        this.etat = etat 
        this.prix = prix
    }
}

export {Personne,Lieu,Ingredients}