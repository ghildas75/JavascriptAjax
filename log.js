 $(function(){
        var username=[];
        var pass=[];
        window.addEventListener('load',loadF);
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

        
        
     
        function loadF(){
              xhr.open("GET",'login.json', false);
             xhr.send();
       if(xhr.readyState==4){
            var reponse=xhr.responseText;
        var myData=(JSON.parse(reponse)).data;
       for(var i=0;i<mydata.length;i++){
    
       username.push(myData[i].user);
       pass.push(myData[i].password);
                   }
       
       }
      
    

           
        }
        
	             $('#submit').click(function(){
					
                       // $('.error').hide();
                        var user= document.getElementById('user').value;
                        var pswd=document.getElementById('pswd').value;
                        
                        if(user==''){
                            $('#user').next('.error').show().text("entrer votre username svp");
                            return false;
                                  }
                          for(var i=0;i<username.length;i++){
                            //alert(username[i]);
                            //alert(user);
                                  if(user!=username[i]){
                                    //alert('no differnet');
                                     $('#user').next('.error').show().text("username invalid");
                                      return false;
                                    }
                                 else{
                                    //alert('ok username');
                                   return true;
                                 }
                                  }
                                  
                                  
                                 $('#user').next('.error').hide();
                                     
                            if(pswd==''){
                            
                            $('#pswd').next('.error').show().text("entrer votre mdp svp");
                            return false;
                                  }
                        for(var i=0;i<pass.length;i++){
                                  if(pswd!=pass[i]){
                                    //alert(password[i])
                                     $('#pswd').next('.error').show().text("password invalid");
                                      return false;
                                    }
                                    else{
                                        //alert('pssaword ok');
                                        return true;
                                    }
                                  }
                         /* $('#pswd').next('.error').hide();*/
                          
					   
                    
                    
                    });
						
						});
				
    