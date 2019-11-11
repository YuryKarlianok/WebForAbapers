window.onload = function() {
    do
    {
        var username = prompt("Please enter your name");
    }
    while (!username)
    document.getElementById("name").innerHTML = username;
    if (hasNumber(username) == true) {
        document.getElementById("revname").innerHTML = reversename(username);
    }
    else {
        document.getElementById("revname").innerHTML = upperlowername(username);
    }
};

function google() {
    window.open("https://www.google.com/");
}

function clearall() {
    document.getElementById("name").innerHTML = "";
    document.getElementById("revname").innerHTML = "";
}

function hasNumber(str) {
    return /\d/.test(str);
};

function reversename(str) {
    return str.split("").reverse().join("");
}

function upperlowername(str) {
    str = str.split("");
    for (var i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            str[i] = str[i].toUpperCase();
        }
        else {
            str[i] = str[i].toLowerCase();
        }
    }
    str = str.join("");
    return str;
}