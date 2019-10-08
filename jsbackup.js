const sdUrl = 'https://api.schooldigger.com/v1.2/schools'
const data ={appID:'c570c8aa', appKey:'54faff30e8a6aebeb6804c69379ebd23'}


// const appID = 'c570c8aa'
// const appKey = '54faff30e8a6aebeb6804c69379ebd23'


fetch('https://api.schooldigger.com/v1.2/schools?st=GA&city=Evans&zip=30809&boundaryAddress=1237%20Cypress%20Trail&appID=c570c8aa&appKey=54faff30e8a6aebeb6804c69379ebd23')
.then(response=>response.json())
.then(data => {
    console.log(data)
})
.catch(error=>console.error(error))






console.log("index.js loaded")