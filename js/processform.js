let applyBtn = document.querySelector('#applyBtn')
let allInput = document.querySelectorAll('#processForm input,#processForm select')
let personalInfo = document.querySelectorAll('#personalTab input, #personalTab select')
let objectiveInfo = document.querySelector('#jobObjective')
let educationRecord = document.querySelectorAll('.education-record-field')
// let educationRecordChild = document.querySelectorAll('.education-record-field input, .education-record-field select')
let experienceRecord = document.querySelectorAll('.experience-record-field')
let certificateRecord = document.querySelectorAll('.certificate-record')
let skillsRecord = document.querySelectorAll('.skills-record')
let refereeRecord = document.querySelectorAll('.referee-record')
let personalPreview = document.querySelector('#personal-data')
let professionalPreview = document.querySelector('.professional-info')
let skillsPreview = document.querySelector('.skills-info')
let refereePreview = document.querySelector('.referee-info')
let clearBtn = document.querySelector("#clearBtn")
let previewBtn = document.querySelector('#previewBtn')
let printBtn = document.querySelector('#printBtn')
let previewSection = document.querySelector('.preview-section')
let personalInfoObj = {};
// fill the data when the localstorage is set
for (const x of personalInfo) {
    if(localStorage.getItem(x.id)){
        // means data has been set hence fill the fields with this information when the screen loads
        x.value = localStorage.getItem(x.id)
        // create a copy of local storage items for personal information
        personalInfoObj[x.id] = localStorage.getItem(x.id);  
    }
}
// for objective data
objectiveInfo.value = localStorage.getItem('objectiveData')

localStorage.setItem('personalData',JSON.stringify(personalInfoObj))
// console.log(localStorage.getItem('personalData'))
//

applyBtn.onclick =(e)=> {
e.preventDefault()
// step 1 receive information from personal info
   for (const x of personalInfo) {
    if (x.value == ""){
        // the user needs to go and fill the information
        alert(x.id +" is empty, kindly fill the information")
        x.focus()
        break
    }else{
        // save the already information to the localstorage
        if (localStorage.getItem(x.id)){
            // means the key is already set then do nothing
            // alert( x.id + ' keys already set')
        }else{
            // means that the item should be set since there is not instance already created
            localStorage.setItem(x.id, x.value)
            alert(x.id + ' data saved successfully')
            // update individual section arrays
            // save the results as an array first
        }
    }
} 
// step 2 work on the objective data and save the data to the local storage
if(objectiveInfo.value == ""){
    alert("Objective field is empty, kindly fill the information")
    objectiveInfo.focus()
    // means the objective is not filled
}else{
     localStorage.setItem('objectiveData',objectiveInfo.value)
     alert('data Saved Successfully')
}
// end of save of objective data

// education record field
// first step we would know how many record-field we have and their children    
let educationObj={}
let educationArray = []
let newObject ={}
// there is a need to send the number of Entry sent
localStorage.setItem("educationEntry",eduField.querySelectorAll(":scope>div").length)
for (let index = 0; index < eduField.querySelectorAll(":scope>div").length; index++) {
    const element = eduField.querySelectorAll(":scope>div")[index];
    let elementInput = element.querySelectorAll(":scope input,:scope select")
    for (const x of elementInput) {
        newObject[x.id] = x.value  
    }
    localStorage.setItem(`${'educationArray'}${index+1}`,JSON.stringify(newObject))
    // console.log(newObject)
}



// save skills data to an array
let skillArray =[]
let skillObj = {}
localStorage.setItem("skillEntry",skillParent.querySelectorAll(":scope>div").length)
for(let index = 0; index<skillParent.querySelectorAll(":scope>div").length; index++){
    const element =skillParent.querySelectorAll(":scope>div")[index];
    let elementInput = element.querySelectorAll(":scope input,:scope select")
    for(const x of elementInput){
        skillObj[x.id] =x.value
    }
    localStorage.setItem(`${'skillArray'}${index+1}`,JSON.stringify(skillObj))
    console.log(skillObj)
}




// save referees data to an array
let refereeObj = {}
localStorage.setItem("refereeEntry", refereeParent.querySelectorAll(":scope>div").length)
for(let index = 0; index < refereeParent.querySelectorAll(":scope>div").length; index++){
    const element = refereeParent.querySelectorAll(":scope>div")[index];
    let elementInput = element.querySelectorAll(":scope input,:scope select")
    for(const x of elementInput){
        refereeObj[x.id] =x.value
    }
    localStorage.setItem(`${'refereeArray'}${index+1}`,JSON.stringify(refereeObj))
    console.log(refereeObj)
}


// save experience data to an array
let experienceObj = {}
localStorage.setItem("experienceEntry", experienceField.querySelectorAll(":scope>div").length)
for(let index = 0; index < experienceField.querySelectorAll(":scope>div").length; index++){
    const element = experienceField.querySelectorAll(":scope>div")[index];
    let elementInput = element.querySelectorAll(":scope input,:scope select")
    for(const x of elementInput){
        experienceObj[x.id] =x.value
    }
    localStorage.setItem(`${'experienceArray'}${index+1}`,JSON.stringify(experienceObj))
    console.log(experienceObj)
}


//  save certificate data to an array
let certObj = {}
localStorage.setItem("certEntry", certParent.querySelectorAll(":scope>div").length)
for(let index = 0; index < certParent.querySelectorAll(":scope>div").length; index++){
    const element = certParent.querySelectorAll(":scope>div")[index];
    let elementInput = element.querySelectorAll(":scope input,:scope select")
    for(const x of elementInput){
        certObj[x.id] =x.value
    }
    localStorage.setItem(`${'certArray'}${index+1}`,JSON.stringify(certObj))
    console.log(certObj)
}

}

clearBtn.onclick=(e)=>{
    e.preventDefault()
    let clearResponse =  prompt('Are you sure? type Y for yes N for No.')
    if(clearResponse == 'Y'){
        localStorage.clear()
        window.location.assign('../index.html')
    }else{
        
    }
}

previewBtn.onclick = (e) =>{
    // check if the preview is already displayed and close if true
    // meaning the preview section is hidden and should be shown to the user
    window.open('preview.html','_blank')
}



printBtn.onclick = (e)=>{
    // e.preventDefault()
    window.open('preview.html','_blank').print()
}