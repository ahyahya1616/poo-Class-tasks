let Etudiant=[{
    nom : 'Yahya' , 
    prenom : 'Ahmane' ,
    age : 22 ,
    cne : 'B122',
   },
   {
    nom : 'mohammed' , 
    prenom : 'mohammed' ,
    age : 22 ,
    cne : 'B122',
   },
   {
    nom : 'yassine' , 
    prenom : 'moha' ,
    age : 22 ,
    cne : 'B122',
   },
]
   
   let Porfesseur={
    nom : 'nom 1' , 
    prenom : 'prenom 1' ,
    age : 22 ,
    cne : 'B12222',
   }

if(!Object.prototype.etudier){
    Object.prototype.etudier= function(){
        return this.nom+" "+ this.prenom;
    }
}



Etudiant.etudier();


if(!Object.prototype.enseigner){
    Object.prototype.enseigner=function(){ 
        return this.nom+" "+ this.prenom;
    }
}

Porfesseur.enseigner();

console.log(Porfesseur.enseigner())
console.log(Etudiant);
Etudiant.sort((a, b) => {
    if (a.nom === b.nom) {
      return a.prenom.localeCompare(b.prenom);
    }
    return a.nom.localeCompare(b.nom);
  });

console.log(Etudiant);

