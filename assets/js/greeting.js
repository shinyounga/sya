function showGreeting() {
    var date = new Date();
    var hour = date.getHours();

    var greeting;

    if (hour >= 5 && hour < 12) {
        greeting = "good morning ☕️";
    } else if (hour >= 12 && hour < 18) {
        greeting = "good afternoon ☀️";
    } else if(hour >= 18 && hour < 24){
        greeting = "good evening 🌃";
    } else{
        greeting = "welcome, night owl 🦉"
    }

    document.getElementById("greeting").innerHTML = greeting;
}

function automaticAge() {
    var today = new Date();
    var birthDate = new Date(2000, 10, 6); 

    var age = today.getFullYear() - birthDate.getFullYear();


    var hasHadBirthdayThisYear =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    document.querySelector("#age").innerHTML = age;
}


// Call the showGreeting function once the DOM content is loaded
showGreeting();
automaticAge();
