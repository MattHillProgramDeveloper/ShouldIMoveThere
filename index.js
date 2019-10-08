const elPOC = document.querySelector('#POC')

const sdUrl = 'https://api.schooldigger.com/v1.2/schools'
const appID = 'c570c8aa'
const appKey = '54faff30e8a6aebeb6804c69379ebd23'
let st='GA'
let zip = '30809'
let city = 'Evans'
fetch(sdUrl+'?st='+st+'&city='+city+'&zip='+zip+'&boundaryAddress=1237%20Cypress%20Trail&appID='+appID+'&appKey='+appKey)
.then(response=>response.json())
.then(data => {
    console.log(data)
    displayResults(data.schoolList)
})
.catch(error=>console.error(error))

function displayResults(schoolList) {

    //loop through the list of pets making a figure for each one
    let schoolGrid = "";
    for (let i = 0; i < schoolList.length; i++) {
        console.log(i);
        console.log(schoolList[i].schoolName)
        let schoolName = schoolList[i].schoolName
        let county = schoolList[i].county.countyName
  
        schoolGrid += '<article class="indivdualSchool"><div class="schoolinfo">'     
        schoolGrid += '<h3><p class="schoolName">School Name:' + schoolName + '</p></h3>';
        schoolGrid += '<p class="county">County:' + county + '</p>';
        schoolGrid += "</div></article>";
    }
    elPOC.innerHTML = schoolGrid;

}


console.log("index.js loaded")