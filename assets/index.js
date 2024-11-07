const fakeUsers = [
    {
        username : 'Timothy',
        password : 'password'
    },
    {
        username : 'Laura',
        password : 'password2'
    }
]


const btn = document.querySelector("button");

const userInputUsername = document.getElementById("username").value;
const userInputPassword = document.getElementById("password").value;



function getInfo(){
    btn.onclick = () => {
        if(userInputUsername == fakeUsers[0].username && userInputPassword == fakeUsers[0].password){
            window.location.href = "https://www.google.com";
            return;
        } else {
            alert("WRONG PASSWORD!!!! Scammer Alert");
            console.log(`Username: ${userInputUsername}, Password: ${userInputPassword}`);
        }
        
    }
};
