/****************************************DECLARATION OBJET CART ET SES PROPRIETE PLUS METHODE***********************************************************************************
----------------------*********************************************************************************************---------**/
var objCart= { };
objCart.cart=[];
objCart.Item=function(source,title,auteur,an,price,nbreItem){
 this.source=source;           
this.title=title;
this.auteur=auteur;
this.an=an;
this.price=price;
this.nbreItem=nbreItem;
};
objCart.addItem=function(source,title,auteur,an,price,nbreItem){
          for ( var i in this.cart){
            if(this.cart[i].source===source){
             this.cart[i].nbreItem+=nbreItem;
             this.saveCart();
              return;
                 } 
            }
var item=new this.Item(source,title,auteur,an,price,nbreItem);
this.cart.push(item);
this.saveCart();
};
 objCart.removeItem=function(source){
    for (var i in this.cart){
        if(this.cart[i].source==source){
            this.cart[i].nbreItem--;
              if(this.cart[i].nbreItem===0){
           this.cart.splice(i,1);
              
             }
      break;
        }
    }
 this.saveCart();

 };
  objCart.removeAll=function(source) {
        for (var i  in this.cart) {
           if (this.cart[i].source===source) {
           this. cart.splice(i,1);
            break;
           }
            
      }
      this.saveCart();
   };
   
   objCart.clearCart=function(){
    cart=[];
     objCart.saveCart();
    } ;
     objCart. countCart=function(){
        totalCount=0;
            for ( var i=0;i<this.cart.length;i++){
            totalCount+=parseInt(this.cart[i].nbreItem);
            }       
    return totalCount;
     };
   
     
     objCart.totalCart=function(){
            var totalCost=0;
        for(var i=0; i<this.cart.length;i++) {
           // alert("pirce "+this.cart[i].price);
           // alert(this.cart[i].nbreItem);
             totalCost+=this.cart[i].price * this.cart[i].nbreItem;
             
            }
            return totalCost.toFixed(2);
};

objCart.listCart=function(){
  var cartCopy=[];
  for(var i in this.cart) {
            var item=this.cart[i];
            var itemCopy={};
            for (var p in item){
                  itemCopy[p]=item[p];    
                    }
            cartCopy.push(itemCopy);
  }
  return  cartCopy;
};
objCart.saveCart=function(){
            localStorage.setItem("Mes Achats",JSON.stringify(cart));
};
objCart.LoadCart=function(){
          cart= JSON.parse(localStorage.getItem("Mes Achat"));
};

objCart.LoadCart();
//voirPanier();
//displayCart();
/*function displayCart(){
var cartArray=objCart.ListCart();
for (var i in cartArray){
    
}*/
objCart.setCountItem=function(source,nbreItem){
    for (var i  in objCart.cart){
        if(this.cart[i].source===source){
            this.cart[i].nbreItem=nbreItem;
            
        }
    }
    this.saveCart();
};
