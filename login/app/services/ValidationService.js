

app.service('LoginService',function($http){
this.getLogin=function(email,password){
    

    /*if(email===''||password==='')
      {
          return false
      }
     else 
     {
         return true
     }*/
     var admin = 'admin';
    var pass = 'password';
    var isAuthenticated = false;
    
    return {
      login : function(email, password) {
        isAuthenticated = email === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
}

});

