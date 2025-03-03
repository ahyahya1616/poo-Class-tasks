class Vecteur2D{

    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    
afficher(){
    console.log("Les cordonnees sont : ( "+ this.x + " , "+ this.y+ " ) ");
}

addition(v1){
 return new Vecteur2D( this.x + v1.x , this.y + v1.y )
}

}

let v1 = new Vecteur2D();
let v2 = new Vecteur2D(1,4);
let v3 = new Vecteur2D(2,-4);

v3.afficher();

v2.afficher();

let v4=v3.addition(v2);
v4.afficher();



class Rectangle{

    constructor(largeur,longeur,nom = "Rectangle"){
        this.longeur = longeur;
        this.largeur= largeur;
        this.nom = nom;
    }

    surface(){
        console.log("La surface de ce "+this.nom +" :")
        return this.longeur * this.largeur;
    }

    affichage(){
        console.log(" "+this.nom+"  :\n ( largeur = " +this.largeur+ " , langeur = " +this.longeur+ " )");
    }


}

let r = new Rectangle(2,5);
r.affichage();

console.log(r.surface());


class Carre extends Rectangle{
    constructor(cote,nom="Carre"){
    super(cote,cote,nom);

}
}

let c = new Carre(2);

c.affichage();
console.log(c.surface);
console.log(c.surface());
class Point{
    constructor(x=0.0,y=0.0){
        this.x = x;
        this.y = y;
    }
}

class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);  
        this.extrem = new Point(x2, y2); 
    }

    afficher() {
        console.log(`Segment de (${this.orig.x}, ${this.orig.y}) à (${this.extrem.x}, ${this.extrem.y})`);
    }
}

let s = new Segment(0, 0, 3, 4);
s.afficher();