const fakeUsers = [
    {
        username : 'Becks',
        password : 'password'
    },
    {
        username : 'Junez',
        password : 'password2'
    }
]


const btn = document.querySelector("button");

const userInputUsername = document.getElementById("username").value;
const userInputPassword = document.getElementById("password").value;


function getInfo(){
    const userInputUsername = document.getElementById("username").value;
    const userInputPassword = document.getElementById("password").value;

    console.log(`Pass: ${userInputPassword}, User: ${userInputUsername}`);

    //create a forloop that iterates through the users
    for(let i = 0; i < fakeUsers.length; i++)
        {
            if(userInputUsername == fakeUsers[i].username && userInputPassword == fakeUsers[i].password){
            window.location.href = "https://www.google.com";
            return;
            }
        }

        alert("🚨🚨🚨");
        console.log(`Username: ${userInputUsername}, Password: ${userInputPassword}`);

        
    };
