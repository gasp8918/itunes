const SUBMIT = document.getElementById("submit")
const API_URL = "https://itunes.apple.com/search?term="
var current_url



function getList(url) {
    fetch(url)
}

function getURL(search) { // generates the url link we'll ask the itunes api about
    current_url = API_URL.concat(search)   
}