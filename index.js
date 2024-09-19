function shout(string){
    // todo
    return string.toUpperCase("hello");
}

function whisper(string){
    return string.toLowerCase("HELLO")
}

function logShout(string){
    console.log(string.toUpperCase("hello"));
}
function logWhisper(string){
    console.log(string.toLowerCase("HELLO"));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
   
    else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}



