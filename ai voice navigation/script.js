// let btn=document.querySelector("#btn")
// let content=document.querySelector("#content")
// let voice=document.querySelector("#voice")

// function speak(text){
//     let text_speak=new SpeechSynthesisUtterance(text)
//     text_speak.rate=1
//     text_speak.pitch=1
//     text_speak.volume=1
//     text_speak.lang="hi-GB"
//     window.speechSynthesis.speak(text_speak)
// }

// function wishMe(){
//     let day=new Date()
//     let hours=day.getHours()
//     if(hours>=0 && hours<12){
//         speak("Good Morning Abhishek Sir")
//     }
//     else if(hours>=12 && hours <16){
//         speak("Good afternoon Abhishek Sir")
//     }else if(hours>=16 && hours <20) {
//         speak("Good Evening Abhishek Sir")
//     }else {
//         speak("Good night Abhishek sir")
//     }
// }
// window.addEventListener('load',()=>{
//     wishMe()
// })
// let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition 
// let recognition =new speechRecognition()
// recognition.onresult=(event)=>{
//     let currentIndex=event.resultIndex
//     let transcript=event.results[currentIndex][0].transcript 
//     content.innerText=transcript
//    takeCommand(transcript.toLowerCase())
// }

// btn.addEventListener("click",()=>{
//     recognition.start()
//     voice.style.display="block"
//     btn.style.display="none"
// })
// function takeCommand(message){
//    voice.style.display="none"
//     btn.style.display="flex"
//     if(message.includes("good night")){
//         speak("good night abhishek sir")
//     }
//     if(message.includes("hello")||message.includes("hey")){
//         speak("hello sir,what can i help you?")
//     }
//     else if(message.includes("who are you")){
//         speak("i am virtual assistant ,created by Abhishek. Sir")
//     }else if(message.includes("open youtube")){
//         speak("opening youtube...")
//         window.open("https://youtube.com/","_blank")
//     }
//     else if(message.includes("open google")){
//         speak("opening google...")
//         window.open("https://google.com/","_blank")
//     }
//     else if(message.includes("open facebook")){
//         speak("opening facebook...")
//         window.open("https://facebook.com/","_blank")
//     }
//     else if(message.includes("open instagram")){
//         speak("opening instagram...")
//         window.open("https://instagram.com/","_blank")
//     }
//     else if(message.includes("open calculator")){
//         speak("opening calculator..")
//         window.open("calculator://")
//     }
//     else if(message.includes("open word")){
//         speak("opening word..")
//         window.open("word://")
//     }
//     else if(message.includes("open whatsapp")){
//         speak("opening whatsapp..")
//         window.open("whatsapp://")
//     }
    
//     else if(message.includes("time")){
//       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
//       speak(time)
//     }
//     else if(message.includes("date")){
//         let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
//         speak(date)
//       }
//     else{
//         let finalText="this is what i found on internet regarding" + message.replace("shipra","") || message.replace("ab","")
//         speak(finalText)
//         window.open(`https://www.google.com/search?q=${message.replace("ab","")}`,"_blank")
//     }
// }




// let btn = document.querySelector("#btn");
// let content = document.querySelector("#content");
// let voice = document.querySelector("#voice");

// function speak(text) {
//     let text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.pitch = 1;
//     text_speak.volume = 1;
//     text_speak.lang = "hi-GB";
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     let day = new Date();
//     let hours = day.getHours();
//     if (hours >= 0 && hours < 12) {
//         speak("Good Morning Abhishek Sir");
//     } else if (hours >= 12 && hours < 16) {
//         speak("Good afternoon Abhishek Sir");
//     } else if (hours >= 16 && hours < 20) {
//         speak("Good Evening Abhishek Sir");
//     } else {
//         speak("Good night Abhishek sir");
//     }
// }

// window.addEventListener('load', () => {
//     wishMe();
// });

// let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// let recognition = new speechRecognition();

// recognition.onresult = (event) => {
//     let currentIndex = event.resultIndex;
//     let transcript = event.results[currentIndex][0].transcript;
//     content.innerText = transcript;
//     takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener("click", () => {
//     recognition.start();
//     voice.style.display = "block";
//     btn.style.display = "none";
// });

// let isNavigating = false;
// let currentLocation = "";
// let destinationLocation = "";

// // Actor information
// const actorsInfo = {
//     "shahrukh khan": "Shah Rukh Khan, also known as the 'King of Bollywood', is an Indian actor, film producer, and television personality.",
//     "salman khan": "Salman Khan is an Indian actor, producer, and television personality known for his work in Hindi films.",
//     "aamir khan": "Aamir Khan is an Indian actor, director, and producer known for his contributions to Indian cinema.",
//     "deepika padukone": "Deepika Padukone is an Indian actress and producer, one of the highest-paid actresses in India.",
//     "kareena kapoor": "Kareena Kapoor Khan is an Indian actress known for her work in Hindi films and is one of the most popular actresses in Bollywood.",
//     "dr rajkumar":"He was a former child actor who became one of southern India's best-loved movie stars. He appeared in more than 200 Kannada-language movies over five decades, and had millions of devoted fans.",
//     "kiccha sudeep":"Sudeep is an Indian film actor, director, producer, screenwriter, playback singer, anchor, and cricketer who works primarily in Kannada cinema.",
//     "darshan thoogudeep":"Darshan Thoogudeepa is an Indian actor, producer, and distributor who primarily works in the Kannada film industry",
//     "yash":"Yash is an Indian actor who primarily works in the Kannada film industry. He is one of the highest paid and most bankable stars of the Kannada film industry.",
//     "puneeth rajkumar":"Puneeth Rajkumar was an former Indian actor, playback singer, film producer, television presenter and philanthropist who worked in Kannada cinema."
//     // Add more actors and their descriptions as needed
// };

// function takeCommand(message) {
//     voice.style.display = "none";
//     btn.style.display = "flex";

//     if (message.includes("start navigation")) {
//         isNavigating = true;
//         speak("Sure sir, please tell me your current location.");
//     } else if (isNavigating && currentLocation === "") {
//         currentLocation = message;
//         speak(`Current location set to ${currentLocation}. Please tell me your destination.`);
//     } else if (isNavigating && destinationLocation === "") {
//         destinationLocation = message;
//         speak(`Destination set to ${destinationLocation}. Calculating route...`);
//         content.innerText = `Current Location: ${currentLocation}\nDestination: ${destinationLocation}`;
//         window.open(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(currentLocation)}&destination=${encodeURIComponent(destinationLocation)}`, "_blank");
//         isNavigating = false; // Reset navigation state
//         currentLocation = ""; // Reset current location
//         destinationLocation = ""; // Reset destination location
//     } else if (message.includes("exit navigation")) {
//         isNavigating = false;
//         currentLocation = "";
//         destinationLocation = "";
//         speak("Exiting navigation.");
//     } else {
//         // Check for actor names
//         for (let actor in actorsInfo) {
//             if (message.includes(actor)) {
//                 speak(actorsInfo[actor]);
//                 window.open(`https://www.google.com/search?q=${actor}`, "_blank");
//                 return; // Exit the function after finding the actor
//             }
//         }

//         // Existing commands...
//         if (message.includes("good night")) {
//             speak("Good night Abhishek sir");
//         }
//         if (message.includes("hello") || message.includes("hey")) {
//             speak("Hello sir, what can I help you?");
//         } else if (message.includes("who are you")) {
//             speak("I am a virtual assistant, created by Abhishek. Sir");
//         } else if (message.includes("open youtube")) {
//             speak("Opening YouTube...");
//             window.open("https://youtube.com/", "_blank");
//         } else if (message.includes("open google")) {
//             speak("Opening Google...");
//             window.open("https://google.com/", "_blank");
//         } else if (message.includes("open facebook")) {
//             speak("Opening Facebook...");
//             window.open("https://facebook.com/", "_blank");
//         } else if (message.includes("open instagram")) {
//             speak("Opening Instagram...");
//             window.open("https://instagram.com/", "_blank");
//         } else if (message.includes("open calculator")) {
//             speak("Opening calculator...");
//             window.open("calculator://");
//         } else if (message.includes("open word")) {
//             speak("Opening Word...");
//             window.open("word://");
//         } else if (message.includes("open whatsapp")) {
//             speak("Opening WhatsApp...");
//             window.open("whatsapp://");
//         } else if (message.includes("time")) {
//             let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//             speak(time);
//         } else if (message.includes("date")) {
//             let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" });
//             speak(date);
//         } else {
//             let finalText = "This is what I found on the internet regarding " + message.replace("shipra", "").replace("ab", "");
//             speak(finalText);
//             window.open(`https://www.google.com/search?q=${message.replace("ab","")}`,"_blank")
//             }
            
//         }
//     }


let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

let musicPlaying = false;
let musicQuery = "";
let youtubePlayer = null; // Store YouTube player instance

// Function to speak text
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "hi-GB"; // Language set to Hindi
    window.speechSynthesis.speak(text_speak);
}

// Wish the user based on the time of the day
function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Abhishek Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Abhishek Sir");
    } else if (hours >= 16 && hours < 20) {
        speak("Good Evening Abhishek Sir");
    } else {
        speak("Good night Abhishek sir");
    }
}

// Initialize greeting on page load
window.addEventListener('load', () => {
    wishMe();
});

// Speech recognition setup
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
    recognition.start();
    voice.style.display = "block";
    btn.style.display = "none";
});

// Command processing
function takeCommand(message) {
    voice.style.display = "none";
    btn.style.display = "flex";

    if (message.includes("play music")) {
        speak("Sure, please tell me the name of the song or movie.");
        musicPlaying = true;
        musicQuery = "";
        return;
    }

    if (musicPlaying && musicQuery === "") {
        musicQuery = message;
        speak(`Searching for music related to ${musicQuery}.`);
        searchYouTube(musicQuery);
        return;
    }

    if (message.includes("stop music")) {
        stopMusic();
        return;
    }

    if (message.includes("next music")) {
        nextMusic();
        return;
    }

    // Other commands
    if (message.includes("hello") || message.includes("hey")) {
        speak("Hello sir, how can I help you?");
    } else if (message.includes("who are you")) {
        speak("I am a virtual assistant created by Abhishek Sir.");
    } else {
        speak("I didn't understand that. Searching for it on Google...");
        window.open(`https://www.google.com/search?q=${encodeURIComponent(message)}`, "_blank");
    }
}

// Search YouTube for music or movie
function searchYouTube(query) {
    let searchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    speak("Searching for the song on YouTube, sir.");

    // Simulate retrieving video ID from YouTube API (replace with actual API call)
    let videoId = getYouTubeVideoId(query); // Placeholder function for video ID
    playSong(videoId);
}

// Get YouTube video ID (placeholder for actual search)
function getYouTubeVideoId(query) {
    // Example of a YouTube video ID (change this to actual API result)
    return "dQw4w9WgXcQ"; // Example video ID (Rickroll)
}

// Function to play the song
function playSong(videoId) {
    if (youtubePlayer) {
        youtubePlayer.loadVideoById(videoId); // Load new video if player exists
    } else {
        youtubePlayer = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
            }
        });
    }
}

// YouTube Player Ready Event
function onPlayerReady(event) {
    event.target.playVideo(); // Start the video when ready
}

// Stop music function
function stopMusic() {
    if (youtubePlayer) {
        youtubePlayer.stopVideo(); // Stop the video
        speak("Music stopped.");
    }
}

// Play next music function
function nextMusic() {
    if (youtubePlayer) {
        youtubePlayer.nextVideo(); // Skip to the next video in the playlist
        speak("Playing next music.");
    }
}

// YouTube API ready function
function onYouTubeIframeAPIReady() {
    console.log("YouTube Iframe API is ready.");
}

// Load the YouTube iframe API script
let script = document.createElement("script");
script.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(script);
