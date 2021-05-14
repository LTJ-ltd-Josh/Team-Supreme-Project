
var staffLogin = [
{
    username:"TBlock123",
    password:"djkfik4e9rtj"
},
{
    username:"T.Crayne90210",
    password:"BrainyCraynie"
},
{
    username:"Natasha_Bowler12",
    password:"BashyTashy"
},
{
    username:"Danie.Dixon",
    password:"DD12345678"
},
{
    username:"Mr_J_Wise",
    password:"Dragon29"
},
{
    username:"D.Wilson60",
    password:"Adjkfghjr94343"
},
{
    username:"Handsome123",
    password:"Qdjkfi84e3"
},
{
    username:"GoodLooks123",
    password:"123djfirjgf"

},
{
    username:"CutteyDD",
    password:"938SFGHH"
},
{
    username:"ChristianD15",
    password:"D69Gkld8dn"
},
{
    username:"XOMAN290",
    password:"J345hfjd@$"
},
{
    username:"NappilyEverAfter",
    password:"XXXLOVEXXX"
},
{
    username:"Laydiebri",
    password:"ZABGKFO345"
},
{
    username:"SteveGold123",
    password:"ODJFV$%&*32"
},
{
    username:"JoshyMarks25",
    password:"LOPEXZ34958"
},
{
    username:"Car_Summer",
    password:"%^&"
},
{
    username:"HollyMicksNIG",
    password:"HLHJF$^^%$3r4"
},
{
    username:"Hollaway1234",
    password:"KVJSR394578DE"
}

]

function getInfo(){
  
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value   

for (i = 0; i < staffLogin.length; i++){

    if (username == staffLogin[i].username && password== staffLogin[i].password)
    {
        
     
      document.location.href = "vieworders.html";
         return    
  }
        
}
document.write("The password you've is enter is incorrect");    

document.location.href = "stafflogin.html";
    }

