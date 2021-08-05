const arr = []
const links = document.querySelectorAll("a#video-title")
for(let i = 0; i < links.length; i++){
    arr.push(`youtube.com${links[i].getAttribute("href")}`)
}
console.log(arr)
