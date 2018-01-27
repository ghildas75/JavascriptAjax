/* ***********************************************************GEOLOCALIroSATION*******************
 *-****************************************************************************************** */
var alt=45.483294;
var longi=-73.868898;
function contactUs(){
 // alert("ok") ;      
 $('#pub') .hide();       
$('#map').show();       
initialiserLaCarte();
}


function geo(position){
         alt=position.coords.latitude;
         longi=position.coords.longitude;
         
       // alert(lalt+"\n"+long);
       
        google.maps.event.addDomListener("window","load",loadMap(alt,longi));
    }
function initialiserLaCarte(){
    if(!navigator.geolocation){
        return false;
          }
    var centreGoogleMap=new google.maps.LatLng(45.483294,-73.868898);
    var optionsGoogleMap={
        //facture de zomm 15
        zoom:7,
        center:centreGoogleMap,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
   // var maCarte= new google.maps.Map(document.getElementById("map"),optionsGoogleMap);
  maCarte = new google.maps.Map(document.getElementById("map"),optionsGoogleMap);
  var markerClient=new google.maps.Marker({
      map: maCarte,
      title:"vous etes ici",
      position:new google.maps.LatLng(alt,longi)
      });
 

     var location = [
           
           {
            position: new google.maps.LatLng(45.606649,-73.712409),
            title:' Brooke GameOver Laval'
          }, 
           
           {
            position: new google.maps.LatLng(45.476545,-75.701272),
            title:' Brooke GameOver Gatineau'
          },
          {
            position: new google.maps.LatLng(44.558803,-72.577841),
            title:' Brooke GameOver Vermont'
          },
          {
            position: new google.maps.LatLng(46.561856,-72.743525),
            title:'Brooke GameOver Shawingan'
          }, {
            position: new google.maps.LatLng(45.400993, -71.882429),
            title:'Brooke GameOver Sherbrooke'
          }
];
    
            
 for (var i=0; i<location.length;i++){
    var  marker = new google.maps.Marker({
            position: location[i].position,
            title:location[i].title,
            map: maCarte
          });
    loadInfo(marker);

	   
 }
   
   
}
 
 function loadInfo(info){
for (var i=1; i<6;i++){
 var commentaireGG = "<div class='row bg-warning'>";
    var source="image/"+"a"+i+".png";
      commentaireGG +='<img src ='+source +'/>';
	commentaireGG += "<b class='text.danger'>Brooke</b> ";
	commentaireGG += "<span>Dénicher la bonne affaire</span>";
	commentaireGG += "</div>";
         var infowindow = new google.maps.InfoWindow({
             content:commentaireGG
            });
           
}
    info.addListener('click', function(){
                    infowindow.open(maCarte, info);   
            }); 

 }   
 function loadMap(alt,longi){
     var options={
      zoom:8,
      center:new google.maps.LatLng(alt,longi),
      mapTypeId:google.maps.MapTypeId.ROADMAP
      
     };
     
     
    }
    function erreurGeo(error){
     var msg;
     
     switch(error.code){
      case error.TIMEOUT:
       msg="le temps de la requete à expire";
       break;
      case error.UNKNOWN_ERROR:
       msg="une erreur technique c'est produite";
       break;
      case error. POSITION_UNVAILABLE:
       msg="une erreur technique c'est produite";
       break;
      case error. PERMISSION_DENIED:
       msg="vous avez refuse la gelolcalisation";
       break;
     }
     alert(msg);
     
    }
     if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo,erreurGeo,{maximumAge:120000});
        }
        