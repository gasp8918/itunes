const SUBMIT = document.getElementById("submit")
const INPUT = document.getElementById("input")
const LIST = document.getElementById("list")
const API_URL = "https://itunes.apple.com/search?term="
const NUM = document.getElementById("num")
const ITEM_TEMPLATE = '<a class="result" href="!"><img src="!"><br>!</a>' // plan is to replace ! in a loop, as replace() only replaces the first instance of a letter, and then shove it into the list

var current_url
var response
var searchType = "artistTerm" // later we'll add a dropdown and let peoplepick from songs and artists and albums to search
SUBMIT.addEventListener("click", ()=> {
    while (LIST.hasChildNodes()) {
        LIST.removeChild(LIST.firstChild);
      }
    let search = INPUT.value
    var result
    search = search.replace(/\s+/g, '+'); // might get rid of the spaces in a string
    current_url = API_URL.concat(search, "&media=music&attribute=", searchType, "&limit=",NUM.value);
    
    fetch(current_url)
    .then((res) => res.json()) // stole from the dad joke one lol
        .then((data)=> {
            // console.log(data)
            result = data
            console.log(result)
            for (i=0;i < result.resultCount ; i++) { // do this later lol
                let element = ITEM_TEMPLATE
                let art = getArt(result.results[i].artworkUrl100)
                element = element.replace("!", result.results[i].trackViewUrl)
                element = element.replace("!", art)
                element = element.replace("!", checkName(result.results[i].trackName))
                let elm = document.createElement("a")
                LIST.appendChild(elm)
                console.log(element)
                elm.innerHTML = element // fix please plea seplase plase
            }
        })
})

function checkName(name) {
    if (name.length > 27) {
        name = name.slice(0,27)
        name = name.concat("...")
    }
    return name
}

function getArt(url) {
    url = url.slice(0, (url.length - 13)) // here we will get a higher quality picture of the album art by manually changing the quality from the json's link.
    url  = url.concat("500x500bb.jpg")
    return url
}
