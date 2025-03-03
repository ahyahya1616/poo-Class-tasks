function Voiture(model,marque,annee,type,carburant){
    this.annee=annee;
    this.carburant=carburant;
    this.marque=marque;
    this.model=model;
    this.type=type;
}

let voitureList = [
    new Voiture('Model S', 'Tesla', 2021, 'SUV', 'Électrique'),
    new Voiture('Mustang', 'Ford', 2020, 'Coupé', 'Essence')
]

function Hyndai(model,marque,année,type,carburant,serie, hybride ){
    Voiture.call(this,model,marque,année,type,carburant);
    this.serie = serie;
    this.hybride=hybride;    
}

Hyndai.prototype = Object.create(Voiture.prototype,{
    constructor:{
        value:Hyndai,
        enumerable:false,
        writable: true,
        configurable: true
    }
});


function Ford(model,marque,annee,type,carburant,options){
    Voiture.call(this,model,marque,annee,type,carburant);
    this.options=options;
}


Ford.prototype= Object.create(Voiture.prototype,{
   constructor:{
    value:Ford,
    enumerable:false,
    writable:true,
    configurable:true
   } 
});


let hyundai1 = new Hyndai('Ioniq 5', 'Hyundai', 2022, 'SUV', 'Électrique', 'Premium', true);
let ford1 = new Ford('Mustang Mach-E', 'Ford', 2021, 'Crossover', 'Électrique', ['Climatisation', 'Caméra 360']);
voitureList.push(hyundai1);
voitureList.push(ford1);
console.log(voitureList);

voitureList.sort((a,b)=> a.annee - b.annee);

console.log(voitureList);