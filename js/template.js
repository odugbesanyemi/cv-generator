let objField = document.querySelector('#objective-info')
let persField = document.querySelector('#personal-info')
let proField = document.querySelector('#professional-info')
let skillsField = document.querySelector('#skills-info')
let refField = document.querySelector('#referee-info')
// content selectors
let objFieldContent = document.querySelector('#objective-info .content')
let persFieldContent = document.querySelector('#personal-info .content')
let educationFieldContent = document.querySelector('#education-info .content')
let experienceFieldContent = document.querySelector('#experience-info .content')
let certificationFieldContent = document.querySelector('#certification-info .content')
let skillsFieldContent = document.querySelector('#skills-info .content ul')
let refFieldContent = document.querySelector('#referee-info .content tbody')
let allElements = document.querySelectorAll('p,h1,h2,span');

// objFieldContent.textContent = localStorage.getItem('personalData')
// get data from the local storage
$personalData_obj = JSON.parse(localStorage.getItem('personalData'))
const $personalData =   Object.entries($personalData_obj)
for (const [key,value] of $personalData) {
    // alert(key)
    for (const x of allElements) {
        if (key == x.id){
            x.textContent = value
        }
    }
}

// get data from objective
for (const x of allElements) {
    if(x.id == 'jobObjective'){
        x.textContent = localStorage.getItem('objectiveData')
    }
}

// get data from Education
for (let index = 1; index <= Number(localStorage.getItem('educationEntry')); index++) {
    const element = JSON.parse(localStorage.getItem(`educationArray${index}`));
    console.log(element)
    let educationItem = document.createElement('div')
    let educationItemH5 = document.createElement('h5')
    let educationItemInst = document.createElement('p')
    let educationItemDate = document.createElement('p')
    educationItem.className = "item mb-3"
    educationItemH5.className =  "fw-bold m-0"
    educationItemInst.className = "m-0"
    educationItemDate.className = "m-0"
    educationItemH5.textContent =  `${element['edutype']}-${element['courseStudy']}`
    educationItemInst.textContent = `${element['instName']}`
    educationItemDate.textContent = `${new Date(element['startDate']).toDateString() }-${new Date(element['endDate']).toDateString()}`
    educationItem.appendChild(educationItemH5)
    educationItem.appendChild(educationItemInst)
    educationItem.appendChild(educationItemDate)
    educationFieldContent.appendChild(educationItem)
}

// Get Data from Skills 

for (let index = 1; index <= Number(localStorage.getItem('skillEntry')); index++) {
    const element = JSON.parse(localStorage.getItem(`skillArray${index}`));
    let skillItem = document.createElement('li')
    skillItem.className = ""
    skillItem.textContent =  `${element['skillName']}`
    skillsFieldContent.appendChild(skillItem)
}

//get Data from Referees
for (let index = 1; index <= Number(localStorage.getItem('refereeEntry')); index++) {
    const element = JSON.parse(localStorage.getItem(`refereeArray${index}`));
    console.log(element)
    let refereeItem = document.createElement('tr')
    let refereeItemTd1 = document.createElement('td')
    let refereeItemTd2 = document.createElement('td')
    let refereeItemTd3 = document.createElement('td')
    let refereeItemTd4 = document.createElement('td')

    refereeItemTd1.className = ""
    refereeItemTd2.className = ""
    refereeItemTd3.className = ""
    refereeItemTd4.className = ""

    refereeItemTd1.textContent = `${index}`
    refereeItemTd2.textContent = `${element['refereeName']}`
    refereeItemTd3.textContent = `${element['refereeWork']},${element['refereeAddress']}`
    refereeItemTd4.textContent = `${element['refereeTel']}`

    refereeItem.appendChild(refereeItemTd1)
    refereeItem.appendChild(refereeItemTd2)
    refereeItem.appendChild(refereeItemTd3)
    refereeItem.appendChild(refereeItemTd4)

    refFieldContent.appendChild(refereeItem)
}

//Get Data from Experiences

for (let index = 1; index <= Number(localStorage.getItem('experienceEntry')); index++) {
    const element = JSON.parse(localStorage.getItem(`experienceArray${index}`));
    console.log(element)
    let experienceItem = document.createElement('div')
    let experienceItemH5 = document.createElement('h5')
    let experienceItemOrgName = document.createElement('p')
    let experienceItemOrgDate = document.createElement('p')
    let experienceItemOrgRes = document.createElement('ul')
    let experienceItemOrgRes1 = document.createElement('li')
    let experienceItemOrgRes2 = document.createElement('li')
    let experienceItemOrgRes3 = document.createElement('li')
    let experienceItemOrgRes4 = document.createElement('li')
    experienceItem.className = "experience-item mb-3"
    experienceItemH5.className =  "fw-bold m-0"
    experienceItemOrgName.className = "m-0"
    experienceItemOrgDate.className = "m-0"
    experienceItemOrgRes.className = "py-2"
    experienceItemH5.textContent =  `${element['jobTitle']}`
    experienceItemOrgName.textContent = `${element['orgName']},${element['orgAddress']}`
    experienceItemOrgDate.textContent = `${new Date(element['orgStartDate']).toDateString() }-${new Date(element['orgEndDate']).toDateString()}`
    experienceItemOrgRes1.textContent = `${element['job-desc-item1']}`
    experienceItemOrgRes2.textContent = `${element['job-desc-item2']}`
    experienceItemOrgRes3.textContent = `${element['job-desc-item3']}`
    experienceItemOrgRes4.textContent = `${element['job-desc-item4']}`
    experienceItem.appendChild(experienceItemH5)
    experienceItem.appendChild(experienceItemOrgName)
    experienceItem.appendChild(experienceItemOrgDate)
    experienceItem.appendChild(experienceItemOrgRes)
    experienceItemOrgRes.appendChild(experienceItemOrgRes1)
    experienceItemOrgRes.appendChild(experienceItemOrgRes2)
    experienceItemOrgRes.appendChild(experienceItemOrgRes3)
    experienceItemOrgRes.appendChild(experienceItemOrgRes4)
    experienceFieldContent.appendChild(experienceItem)

}

// get Data from Certificates

for (let index = 1; index <= Number(localStorage.getItem('certEntry')); index++) {
    const element = JSON.parse(localStorage.getItem(`certArray${index}`));
    console.log(element)
    let certificationItem = document.createElement('div')
    let certificationItemH5 = document.createElement('h5')
    let certificationItemOrg = document.createElement('p')
    let certificationItemDate = document.createElement('p')
    certificationItem.className = "certification-item mb-3"
    certificationItemH5.className =  "fw-bold m-0"
    certificationItemOrg.className = "m-0"
    certificationItemDate.className = "m-0"  
    certificationItemH5.textContent =  `${element['cert-title']}`
    certificationItemOrg.textContent = `${element['cert-org']}`
    certificationItemDate.textContent = `${new Date(element['certDate']).toDateString()}`
    certificationItem.appendChild(certificationItemH5)
    certificationItem.appendChild(certificationItemOrg)
    certificationItem.appendChild(certificationItemDate)
    certificationFieldContent.appendChild(certificationItem)
}