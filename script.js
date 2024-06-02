function getQueryParams() {
    let params = {};
    let queryString = window.location.search.slice(1);
    let pairs = queryString.split("&");

    pairs.forEach(function(pair) {
        pair = pair.split("=");
        params[pair[0]] = decodeURIComponent(pair[1] || "");
    });

    return params;
}

function populateSongDetails() {
    const params = getQueryParams();
    document.getElementById("song-name").innerText = params.name || "Song Name";
    document.getElementById("song-description").innerText = params.description || "Song Description";
    document.getElementById("song-lyrics").innerText = params.lyrics || "Song Lyrics";
}


function redirectToDetail(name, description, lyrics) {
    const url = `songDetail.html?name=${encodeURIComponent(name)}&description=${encodeURIComponent(description)}&lyrics=${encodeURIComponent(lyrics)}`;
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("song-name")) {
        populateSongDetails();
    }
});
