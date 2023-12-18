let car = {
    marque: 'WOlsvagen',
    nom: 'GOLF 7',
    model: 2017,
    prix: 3333333333,
    accelerer: function () {
        return 'entrain de circuler';
    }
};

   
     let cars = ['BMW','Mercedes','Honda'];
     let models = [2020 , 2021 , 2022];
           for(let i=0 ; i<cars.length; i++){
             console.log("cars:"+cars[i]);
             for(let j=0 ; j<models.length ; j++){
                console.log("models:"+models[j]);
               } 
          }
           
    function som(a,b){
        let som = a+b;
        return som;
    }
       let x = som(2,3);
       console.log(x);
       
       class Voiture{
              
           constructor(nom,color,model){
              this.nom=nom;
              this.color=color;
              this.model=model
           }

           move(){
              return console.log(this.nom+"accelere");
           }
       }
       let v1 = new Voiture("golf 7","rouge",2017);
       console.log(v1);
       
       function add(a=2,b=7){
        console.log(arguments.length)
        let c=a+b
        return c
    }