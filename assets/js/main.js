import {maison,magasin,Yassin,oeuf,huile,poivre,lait,fromage,bol,couteau,poele,nullePart} from './instances.js'

nullePart.personne.push(Yassin);
Yassin.lieu = nullePart
Yassin.seDeplacer (nullePart, maison)
Yassin.seDeplacer(maison, magasin)

Yassin.prendrePanier(magasin)

Yassin.acheter(magasin)

Yassin.seDeplacer(magasin, maison)

Yassin.vider()

console.log(bol)

Yassin.seDeplacer(maison,magasin)
Yassin.remettrePanier(magasin)

Yassin.seDeplacer(magasin, maison)

Yassin.couper();

console.log(Yassin);

console.log(bol);

Yassin.melanger('omelette');

console.log(bol);

Yassin.viderBol();

console.log(bol);
console.log(poele);

poele.cuir();

console.log(poele.contenu[0]);

setTimeout(()=> {
    console.log(poele.contenu[0]);
}, 4000); 