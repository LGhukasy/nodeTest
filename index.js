$( document ).ready(function() {
    console.log( "ready!" );
    $( ".acceptButton" ).click(function() {
        let name = document.getElementsByClassName("inputWrapper")[0].childNodes[1].value;
        let surname = document.getElementsByClassName("inputWrapper")[1].childNodes[1].value;
        let mail = document.getElementsByClassName("inputWrapper")[2].childNodes[1].value;
        let password = document.getElementsByClassName("inputWrapper")[3].childNodes[1].value;
        let data = {
            name,
            surname,
            mail,
            password
        }
        if(!!name && !!surname && !!mail && !!password){
            $.ajax({
                type: "POST",
                url: "http://localhost:5000/reg",
                data: data,
                success: function(data){
                    console.log(data)
                }
              })
        }
        else{
            console.log("please write the all lines")
        }
      });
});