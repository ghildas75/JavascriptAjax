$(function(){
       
chargerPub();

       
    $("#cart").hide();
     $('#panierCommande').hide();
     $('#facture').hide();
     
 // var xhr= new XMLHttpRequest();
var xhr=createXmlHttp();

 function createXmlHttp(){
 try{
 xhr=new XMLHttpRequest();			
     }
 catch(e){
        try{
           xhr= new ActiveObject("Microsft.XMLHTTP");
           }
         catch(e2){
	alert("erreur lors de la creation") ;
               }	
 }
 if(!xhr){
	alert("probleme lors de la creation objet") ;
 }
 else{
	return xhr; 
        }
            }

  
  function loadF(fichier,tity){
     xhr.open("GET",fichier, false);
    xhr.send();
var catInfo=" ";

    if(xhr.readyState==4){
      var reponse=xhr.responseText;
        var myData=(JSON.parse(reponse)).data;
      catInfo+="<h3 class='text-center text-warning '>Offre Exculsive Catégorie "+tity+"</h3><hr>";
    for(var i=0;i<myData.length;i++){
      var picture=myData[i].image;
       var titre=myData[i].titre;
       var   auteur=myData[i].Auteur;
         var   an=myData[i].Annee;
          var  prix=myData[i].prix;
         var  source="image/"+picture;
            catInfo+="<div class='row'>";
               catInfo+="<div class='col-md-2'>";
              var nbreItem=1; 
                catInfo+= '<img  class="img-thumbnail img-responsive" src ='+source +'\>';
                catInfo+='</div>';
                catInfo+="<div class='col-md-10'>";
                catInfo+="<p class='bg-primary'>"+" <span class='text.danger'><strong>LE bon plan  -50% </span></strong><br><br>"+"<i>"+" Meilleur prix sur le Marché "+"</i>"+"<mark>"+" "+ prix+" $"+"</mark><br>";
               catInfo+=titre+" Ecrit par "+auteur+" en "+an+" n'est pas un ouvrage de formation comme les autres ";
               catInfo+="ce n'est pas un livre d'autoformation ni un manuel de référence,";
              catInfo+=" il vous propose des énoncés d'exercices et leurs corrigés</p>";
                catInfo+='<p class="text-danger" mouseover="ajouterItem(' + "'"+source+"'" +','+"'"  +titre +"'"+','+"'" +auteur+ "'" + ',' +an+',' +prix +','+nbreItem+');">';
              // catInfo+='<p class="para" onclick="addItem(' + "'"+ titre + "'" + ',' + prix +');">';
               catInfo+="<span class='desc'> offre exculsive "+ titre+"  by "+auteur+" en  "+an+"</span> ";
               catInfo+='<a class=" btn"  onclick="ajouterItem(' + "'"+source+"'" +','+"'"  +titre +"'"+','+"'" +auteur+ "'" + ',' +an+',' +prix +','+nbreItem+');">';
               catInfo+='<img  class="img-responsive" src="panier.png">'+"</a></p></div>";
               catInfo+="</div>";
               //alert(catInfo);
            
        }
  
      }
       return catInfo;
}
 /******************************categorie livre***************************************************
  ************************************************************************************************/
 
/*************************CHARGER LA LISTE INFORMATIQUE********************
 *********
**********************************************************************/

$("#catInfo").click(function(){
$("#pub").hide();    
$("#catg").show();      
$("#book").show();
$("#idInfo").show();
$("#game").hide();
$("#movie").hide();
$("#map").hide();
$("#idLettre").hide();
 $("#idGeo").hide();
$("#cart").hide();
 $('#facture').hide();
 $('#panierCommande').hide();
 var cat=loadF("info.json","Informatique");
 //d//ocuement.write(cat);
 $("#idInfo").append(cat);
  
   });

  /*************************CHARGER LA LISTE Littérature****************************
**********************************************************************/
$("#catLettre").click(function(){
  var cat=loadF("lettre.json","Littérature");
   $("#idLettre").append(cat);
 $("#book").show();
  $("#catg").show();
  $("#idLettre").show();
  $("#idInfo").hide();
  $("#map").hide();
 $("#idGeo").hide();
 $("#game").hide();
  $("#movie").hide();
 $("#cart").hide();
  $('#facture').hide();
  $('#panierCommande').hide();
 });
 
 /*************************CHARGER LA LISTE Géographie****************************
**********************************************************************/
$("#catGeo").click(function(){
   $("#pub").hide();    
 var cat=loadF("geo.json","Géographie");
$("#catg").show();
 $("#idGeo").append(cat);      
$("#book").show();
$("#idGeo").show();
$("#idInfo").hide();
$("#idLettre").hide();
$("#map").hide();
$("#game").hide();
$("#movie").hide();
$("#cart").hide();
$('#panierCommande').hide();
 $('#facture').hide();
 });
  
/* ***************** Categorie film****************************************************** **/
/*************************************************************************************** */
/** *******************categorie fiction-----------------------------------------------
------------------------------------------------------------------------------------------------------*/

$("#catFiction").click(function(){
  var cat=loadF("fiction.json","Fiction");
$("#catg").show();
$("#pub").hide();
$("#idFiction").append(cat);
$("#movie").show();
$("#idFiction").show();
$("#idDrame").hide();
$("#idAction").hide();
$("#idComedy").hide();
$("#game").hide();
$("#book").hide();
$("#cart").hide();
$('#facture').hide();
$("#map").hide();
$('#panierCommande').hide();
 });

 /** *******************categorie drame-----------------------------------------------
------------------------------------------------------------------------------------------------------*/
 
 $("#catDrame").click(function(){
 var cat=loadF("drame.json","Drame");
$("#idDrame").append(cat);
$("#map").hide();
$("#pub").hide();
$("#catg").show();
$("#movie").show();
$("#idDrame").show();
$("#idFiction").hide();
$("#idAction").hide();
$("#idComedy").hide();
$("#game").hide();
$("#book").hide();
$("#cart").hide();
$('#panierCommande').hide();
$('#facture').hide();

 });

 /** *******************categorie coemdy-----------------------------------------------
------------------------------------------------------------------------------------------------------*/
 
 $("#catComedy").click(function(){
  var cat=loadF("comedie.json","Comédie");
$("#idComedy").append(cat);
$("#map").hide();
$("#pub").hide();
$("#catg").show();
$("#idComedy").show();
$("#idFiction").hide();
$("#idAction").hide();
$("#idDrame").hide();
$("#movie").show();  
$("#game").hide();
$("#book").hide();
$("#cart").hide();
$('#facture').hide();
$('#panierCommande').hide();

 });
 /** *******************categorie Action-----------------------------------------------
------------------------------------------------------------------------------------------------------*/
 
 $("#catAction").click(function(){
    $("#catg").show();    
 var cat=loadF("action.json","Action");
 $("#idAction").append(cat);
 $("#pub").hide();
 $("#movie").show();
$("#idAction").show();
 $("#idFiction").hide();
$("#idComedy").hide();
$("#idDrame").hide();
$("#game").hide();
$("#book").hide();
$("#cart").hide();
$('#panierCommande').hide();
$('#facture').hide();
$("#map").hide();
 });
 
 /*  *******************categorie game-----------------------------------------------
-----------------------------------------------------------------------------------------------------  -*/ 
 /* -----------------------------------------PLAYSTATION-----------------------------------------------------*/
 
 $("#catPlay").click(function(){
$("#pub").hide();
 $("#catg").show();       
$("#game").show();
$("#idBox").show();
$("#idNint").show();
$("#movie").hide();
 $("#book").hide();
$("#cart").hide();
$("#map").hide();
$('#panierCommande').hide();
$('#facture').hide();
var cat=loadF("ps.json","Playstation");
 //d//ocuement.write(cat);
 $("#idPlay").append(cat);
 });
 
 /* -----------------------------------------xbox-----------------------------------------------------*/
 
 $("#catBox").click(function(){
 $("#pub").hide();      
$('#facture').hide();     
$("#catg").show();      
$("#game").show();
$("#idBox").show();
$("#idPlay").hide();
$("#idNint").hide();
$("#movie").hide();
 $("#book").hide();
$("#cart").hide();
$("#map").hide();
 $('#panierCommande').hide();
var cat=loadF("ps.json","XBOX");
 //d//ocuement.write(cat);
 $("#idBox").append(cat);
 });
 
 
 /* -----------------------------------------Nintendo----------------------------------------------------*/
 
$("#catNint").click(function(){
$("#pub").hide();     
$("#catg").show();     
$("#game").show();
$("#idNint").show();
$("#idBox").hide();
$("#idPlay").hide();
$("#movie").hide();
$("#book").hide();
$("#cart").hide();
$('#facture').hide();
$('#panierCommande').hide();
$("#map").hide();
var cat=loadF("n.json","Nintendo");
 //d//ocuement.write(cat);
 $("#idNint").append(cat);
 });
  });
/*------------------------------------------------fonction ajoouter item-----------------------*/

var idDiv="div";
var c=0;
   var cmdString='';
function ajouterItem(source,title,auteur,an,price,nbreItem){
           $("#map").hide();
          objCart.addItem(source, title, auteur, an, price,nbreItem);
             $("#cart").hide();
             $("#cm").show();
              $('#panierCommande').hide();
              $("#pub").hide();
      /* var  totalItem=objCart.countCart();*/
             $("#catg").hide();
      /* document.getElementById("item").innerHTML=totalItem;*/
          idDiv+=c++;
         var   nbreItem=1;
          //alert(objCart.cart.length);
         var  commande=document.getElementById("cm");
          cmdString+='<div id='+idDiv+' class="row border-1 bg-warning text-white">';
          cmdString+="<div class='col-md-2'>";
          cmdString+="<img  class=' pull-left img-thumbnail img-responsive' src="+source+">";
         cmdString+="</div>";
          cmdString+="<div class='col-md-6'>";
          cmdString+="<h4 class='text.center text-warning'>"+ 'Titre '+title+' réaliser par '+auteur+' en '+ an+"  <br><br>seulement pour <mark>"+price+'$'+'</mark></h4>';
           cmdString+="</div>";
          cmdString+="<div class='col-md-4'>";
           cmdString+='<button class="btn btn-success pull-right " onclick="commander(' + "'"+source+"'" +', '+"'"  +title +"'"+' , '+"'" +auteur+ "'" + ' , ' +an+' , ' +price +','+nbreItem+','+"'"+idDiv+"'"+');">';
           cmdString+="commander</btuton>";
           cmdString+='<button  class="btn btn-danger pull-left" onclick="removeItem('+"'"+source+"'"+','+"'"+idDiv+"'"+');">';
           cmdString+="supprimer</button>";
            cmdString+="</div>";
           cmdString+="</div>";
           commande.innerHTML=cmdString;
           //commande.style.display="listItem";
          
       
           
           
 }
 
 
 /*----------------------foction commader****************************************************** */
 var k=0;
 var idCm='cm';
 var idPP='pan';
 ids='sol';
 var idQte="q";
 var sold='';
 function commander(source,title,auteur,an,price,nbreItem,idDiv){
   var  totalItem=objCart.countCart();
   $("#map").hide();
   $("#pub").hide();
    $("#cm").hide();
    $('#panierCommande').hide();
     $('#facture').hide();
   $("#cart").show();
   var nbreItem=1;
  
document.getElementById('item').innerHTML=totalItem;  
document.getElementById(idDiv).style.display='none';
 prixPlus=price; 
k++;
idCm+=k++;
idQte+=k++;
idPP+=c++;
ids+=c++;

sold+='<div id='+idCm+' class="row">';
sold+= '<br><img class=" pull-left img-thumbnail img-responsive"  src ='+source +'\>';
sold+='<h4 class=" col-md-4 btn-primary text.center">'+title+" "+' réalise par '+auteur+' en '+''+an+'  '+'<span class=" btn btn.danger" id='+idPP+'>'+'<mark>'+price+'$</mark>'+"</span>"+'</h4>';
sold+='<select class="selectpicker"  id='+ids+'  onchange="selectQte('+"'"+ids+"'"+','+"'"+idPP+"'"+','+"'"+source +"'"+','+"'"+idQte+"'"+');">';
sold+="<option>Nombre d'item</option>";
sold+='<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>';
sold+='<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select>';
sold+='<span text-danger id='+idQte+'>'+'</span><br><br><br>';
sold+='<button class="btn btn-danger" onclick="removeItem('+"'"+source+"'"+','+"'"+idCm+"'"+');">';
sold+="supprimer</button>";
sold+="</div>";
var  total=objCart.totalCart();
document.getElementById('costOrder').innerHTML='<mark class="text.danger">'+total+"$"+'</mark>';
 document.getElementById("cart").innerHTML+=sold;
  
  }
  
  
  
  
 function removeItem(source,idCm){
objCart.removeItem(source);
total=objCart.totalCart();
 $('#facture').hide();
 $("#pub").hide();
 $("#map").hide();
document.getElementById(idCm).style.display='none';
document.getElementById("costPanier").innerHTML=total;
document.getElementById("costOrder").innerHTML=total;
var  totalItem=objCart.countCart();
//alert(totalItem);
 document.getElementById("item").innerHTML=totalItem;
 if(totalItem===0){
 document.getElementById('cart').style.display='none';
 
 }
  }
  var qte=1;
  function selectQte(idSelect,idP,source,idQte){
       $("#map").hide();
        var select=document.getElementById(idSelect);
         var index=select.selectedIndex;
          qte= select.options[index].text;
         var pri= qte*prixPlus;
         document.getElementById(idQte).innerHTML=qte+' item ';
         //alert( document.getElementById(idQte).innerHTML);
         document.getElementById(idP).innerHTML=pri.toFixed(2)+'$';
           objCart.setCountItem(source,qte);
           var totalSelect=objCart.totalCart();
           var  totalItem=objCart.countCart();
           document.getElementById("item").innerHTML=totalItem;
           document.getElementById("costPanier").innerHTML=totalSelect+'$';
          document.getElementById("costOrder").innerHTML=totalSelect+'$';
         
         objCart.saveCart();
 
}


var idPanier='panier';
var idItemPanier='item';
function voirPanier(){
    $('#map').hide();
   $('#cart').hide();
   $('#facture').hide();
   $('#cm').hide();
   var cartArray=objCart.listCart();
   var sold='';
  
   for (var i in cartArray){
     
var c=0;
idPP+=c++;
 ids+=c++;
 idPanier+=c++;
idItemPanier+=c++;
sold+='<div id='+idPanier+' class="row">';
sold+= '<img class=" pull-left img-thumbnail img-responsive"  src ='+cartArray[i].source +'\>';
sold+='<h5  class=" btn-primary text.center">'+cartArray[i].title+" "+' realise par '+cartArray[i].auteur+' en'+cartArray[i].an+'</h5>';
sold+='<select  class="selectpicker  show-menu-arrow" data-style="btn-warning" id='+ids+'   onchange="selectQte('+"'"+ids+"'"+','+"'"+idPP+"'"+','+"'"+cartArray[i].source+"'"+','+"'"+idItemPanier+"'"+');">';
sold+="<option>Nombre d'item</option>";
sold+='<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>';
sold+='<option>6</option><option>7</option><option>8</option><option>9</option><option>10</option></select>';
sold+='<span id='+idItemPanier+'>'+'</span>';
sold+='<h3 class="text.danger">';
sold+='<span class="text.danger" id='+idPP+'>';
sold+=cartArray[i].price+'$';
prixPlus=cartArray[i].price;
sold+="</span></h3><br><br>";          
sold+='<button class="btn btn-danger" onclick="removeAllItem('+"'"+cartArray[i].source+"'"+','+"'"+idPanier+"'"+');">';
 sold+="supprimer</button>";
 sold+="</div>";
var  divPanier=document.getElementById("panierCommande");
var  totalItem=objCart.countCart();
document.getElementById("item").innerHTML=totalItem;
var total=objCart.totalCart();
document.getElementById('costPanier').innerHTML='<mark>'+total+"$"+'</mark>'; 
divPanier.innerHTML+=sold;
 $('#panierCommande').show();
  
   }
   

  //total=countCart();
 objCart.saveCart();
       
   
}
function removeAllItem(source,idCm){
objCart.removeAll(source);
total=objCart.totalCart();
 $('#facture').hide();
 $("#pub").hide();
 $("#map").hide();
document.getElementById(idCm).style.display='none';
document.getElementById("costPanier").innerHTML=total;
document.getElementById("costOrder").innerHTML=total;
var  totalItem=objCart.countCart();
//alert(totalItem);
 document.getElementById("item").innerHTML=totalItem;
 
 document.getElementById('cart').style.display='none';
 
 objCart.saveCart();
  }

function voirFacture(){
 $('#facture').show();       
$("#pub").hide();
  $('#map').hide();
document.getElementById("cart").style.display='none';      
   //document.getElementById('pub').style.display='none';     
  document.getElementById('panierCommande').style.display='none';
  var cartArray=objCart.cart;
  var total=objCart.totalCart();
  //alert(cartArray.length);
  var fact='';
for (var i=0;i<cartArray.length;i++)  {
       var total=objCart.totalCart();
         var  totalItem=objCart.countCart();
         fact+='<div class="row">';
        fact+='<span class="pull-left">'+ ' titre :'+cartArray[i].title+' prix unitaire: '+cartArray[i].price+'$'+' nombre item :'+cartArray[i].nbreItem+ '</span><div><br><br>';
         document.getElementById("facture").innerHTML+=fact;
           document.getElementById("item").innerHTML=totalItem;
          document.getElementById("bill").innerHTML= '<mark>'+total+'$'+'</mark>';
            }
           
     
      
         
         
}

function chargerPub(){
            var pub=document.getElementById("pub");
            
            var listeImage=["p1.png","p2.png","p3.png","n1.png","n2.png",
                              "x1.png","x2.png","x3.png","c10.png","a1.png","a3.png","a5.png","a6.png",
                              "a7.png","a8.png"
                              
                              ];
            
            var i=1;
            var step=0;
              var si=setInterval(function(){
	var sou="image/"+listeImage[i++];
	    pub.innerHTML+="<img class='img-thumbnail img-responsive'  src="+sou +"\>" ;
             step++;
           if(step>13){
    clearInterval(si);        
              }
        						
          },3000);

   }
   
   /*---------------------------------------------------------------------------------------------
 * ---------------------------------------ANNULER LA FACTURE------------------------------*/
function stopOrder(){
  $('#map').hide();
objCart.clearCart();
               //var  totalItem=objCart.countCart();
               objCart.saveCart();
 document.getElementById("item").innerHTML=0;
       document.getElementById("panierCommande").style.display="none";    
}
