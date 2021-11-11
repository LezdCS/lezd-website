const geoguessrBtn = document.getElementById("geoguessr");
const geoguessrContent = document.getElementById("geoguessr-content")

geoguessrBtn.onclick = function () {
    geoguessrContent.style.visibility = "visible"
}

const irllinkBtn = document.getElementById("irllink");
const irllinkContent = document.getElementById("irllink-content")

irllinkBtn.onclick = function () {
    geoguessrContent.style.visibility = "hidden"
}

const systemdefenderBtn = document.getElementById("systemdefender");
const systemdefenderContent = document.getElementById("systemdefender-content")

systemdefenderBtn.onclick = function () {
    geoguessrContent.style.visibility = "hidden"
}
