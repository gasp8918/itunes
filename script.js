const SUBMIT = document.getElementById("submit")
const INPUT = document.getElementById("input")
const API_URL = "https://itunes.apple.com/search?term="
var current_url
var response
var searchType = "artistTerm" // later we'll add a dropdown and let peoplepick from songs and artists and albums to search
SUBMIT.addEventListener("click", ()=> {getList(getURL(INPUT.value))})



function getList(url) {
    fetch(url)
    .then((res) => res.json()) // stole from the dad joke one lol
        .then((data)=> {
            console.log(res)
        })
}

function getURL(search) { // generates the url link we'll ask the itunes api about
    search = search.replace(/\s+/g, '+');; // might get rid of the spaces in a string
    current_url = API_URL.concat(search, "&media=music&attribute=", searchType);  
    return current_url 
}