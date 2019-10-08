const sdUrl = 'https://api.schooldigger.com/v1.2/schools'


const appID = 'c570c8aa'
const appKey = '54faff30e8a6aebeb6804c69379ebd23'
let st='xz'
let zip = '30809'
let city = 'Evans'
fetch(sdUrl+'?st='+st+'&city='+city+'&zip='+zip+'&boundaryAddress=1237%20Cypress%20Trail&appID='+appID+'&appKey='+appKey)
.then(response=>response.json())
.then(data => {
    console.log(data)
})
.catch(error=>console.error(error))






console.log("index.js loaded")