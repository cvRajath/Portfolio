function sentMail(){

    var params ={
        name : document.getElementById("name").value ,
        
        email :document.getElementById("email").value ,
        message :document.getElementById("message").value ,
        
    }
    emailjs.send("service_feh5wjs","template_2tvfssg",params ).then(function(res){
    alert("sent successfully")
})
document.getElementById("name").value=''
document.getElementById("email").value=''
document.getElementById("message").value=''
}


// typing animation

var typed = new Typed(".typing",{
    strings: ["Web Desinger","Web Developer", "App Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


