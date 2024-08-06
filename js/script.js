
    const educationField = document.querySelectorAll('.education-record-field')
    const experienceItem = document.querySelectorAll('.experience-record-field')
    let experienceItemInput = document.querySelectorAll('.experience-record-field input, .experience-record-field select')
    const eduField = document.querySelector('#edu-field')
    const eduFieldInputs = document.querySelectorAll('.education-record-field input, .education-record-field select')
    const experienceField = document.querySelector('#experience-field')
    const eduAddBtn = document.querySelector('#eduAddBtn')
    const hLine = document.createElement('hr')
    const jobDescAddBtn = document.querySelector('#job-desc-add-btn')
    const jobDescItem = document.querySelectorAll('.job-desc-item')
    const jobDescParent = document.querySelector('.job-desc-field')
    const orgAddBtn = document.querySelector('#orgAddBtn')
    const certAddBtn = document.querySelector('#certAddBtn')
    let certItem = document.querySelectorAll('.certificate-record')
    let certItemInput = document.querySelectorAll('.certificate-record input, .certificate-record select')
    let certParent = document.querySelector('#certificate-field')
    const skillAddBtn = document.querySelector('#skillAddBtn')
    let skillItem = document.querySelectorAll('.skills-record')
    let skillItemInput = document.querySelectorAll('.skills-record input')
    let skillParent = document.querySelector('#skills-field')
    const refereeAddBtn = document.querySelector('#refereeAddBtn')
    let refereeItem = document.querySelectorAll('.referee-record')
    let refereeItemInput = document.querySelectorAll('.referee-record input, .referee-record select')
    let refereeParent = document.querySelector('#referee-field')
   const tabChild = document.querySelectorAll(".tab-content>div")
    const tabBtn = document.querySelectorAll(".tab-item")
    // for (const x of tabChild) {
    //     x.style.display = "none"
    // }
    
    for (const x of tabBtn) {
            if(x.getAttribute('class')=="tab-item active"){
                for (const y of tabChild) {
                    y.style.display="none"
                    let dataId = y.getAttribute('id');
                    if(x.getAttribute('aria-labelledby')== dataId){
                        y.style.display="block"
                    }
                }
        }
        x.onclick = () =>{
            for (const y of tabBtn) {
                if(y.getAttribute('class') == "tab-item active"){
                    y.setAttribute('class','tab-item')
                }
            }
            // this line of code makes the clicked on tab to become active in state.
            x.setAttribute('class','tab-item active')
    
            if(x.getAttribute('class')=="tab-item active"){
                for (const y of tabChild) {
                    y.style.display="none"
                    let dataId = y.getAttribute('id');
                    if(x.getAttribute('aria-labelledby')== dataId){
                        y.style.display="block"
                    }
            }
        }
    }
    let count = 1
    // create a function that automatically adds a clone to the page
    const cloneFunction = (e,originalElement,parentElement) =>{
        e.preventDefault();
        // create a deep clone of the education field 
        // when done change the id of the clone to the value of the length of the 
        const CloneElement = originalElement[0].cloneNode(true)
        for (const x of originalElement) {
            x.id = "record" + count++
        }
        let CloneInputs = CloneElement.querySelectorAll(':scope input, :scope select')
        for (const y of CloneInputs) {
            y.value = ""
        }
        parentElement.appendChild(CloneElement)
        CloneElement.style.borderTop = "1px solid black"
        // CloneElement.style.marginLeft = `${30}px`
    }

let error = []
    eduAddBtn.onclick =(e)=>{
        e.preventDefault()
        // before the clone is done this should first check if the user has filled the inputs 
        for (const x of eduFieldInputs) {
            if (x.value == ""){
                // meaning the user hasn't filled any of the inputs
                // we are going to break out of the loop 
                x.focus();
                x.style.border ="1px solid red"
                error.push(x.id + "is blank")
                break
            }else{
                // means the user has satisfied conditions and the clone function should work now
                x.style.border = "1px solid green"
            }
        }
        if(error.length > 0){   
            console.log(error)
            error.length= 0
        }else{
            cloneFunction(e,educationField,eduField)
            // submit all saved data to an array
        }
    }

    // skill add Function

    skillAddBtn.onclick =(e)=>{
        e.preventDefault()
        // before the clone is done this should first check if the user has filled the inputs 
        for (const x of skillItemInput) {
            if (x.value == ""){
                // meaning the user hasn't filled any of the inputs
                // we are going to break out of the loop 
                x.focus();
                x.style.border ="1px solid red"
                error.push(x.id + "is blank")
                break
            }else{
                // means the user has satisfied conditions and the clone function should work now
                x.style.border = "1px solid green"
            }
        }
        if(error.length > 0){   
            console.log(error)
            error.length= 0
        }else{
            cloneFunction(e,skillItem,skillParent)
            // submit all saved data to an array
        }
    }


    // referees add Function

    refereeAddBtn.onclick =(e)=>{
        e.preventDefault()
        // before the clone is done this should first check if the user has filled the inputs 
        for (const x of refereeItemInput) {
            if (x.value == ""){
                // meaning the user hasn't filled any of the inputs
                // we are going to break out of the loop 
                x.focus();
                x.style.border ="1px solid red"
                error.push(x.id + "is blank")
                break
            }else{
                // means the user has satisfied conditions and the clone function should work now
                x.style.border = "1px solid green"
            }
        }
        if(error.length > 0){   
            console.log(error)
            error.length= 0
        }else{
            cloneFunction(e,refereeItem,refereeParent)
        }
    }

// experience add function
    
    orgAddBtn.onclick =(e) =>{
        e.preventDefault()
        // before the clone is done this should first check if the user has filled the inputs 
        for (const x of experienceItemInput) {
            if (x.value === "" && x.id !== ""){
                // meaning the user hasn't filled any of the inputs
                // we are going to break out of the loop 
                x.focus();
                x.style.border ="1px solid red"
                error.push(x.id + "is blank")
                break
            }else{
                // means the user has satisfied conditions and the clone function should work now
                x.style.border = "1px solid green"
            }
        }
        if(error.length > 0){   
            console.log(error)
            error.length= 0
        }else{
            cloneFunction(e,experienceItem,experienceField)
        }
    }
    

// certification add function

    certAddBtn.onclick = (e) =>{
        e.preventDefault()
        // before the clone is done this should first check if the user has filled the inputs 
        for (const x of certItemInput) {
            if (x.value === "" && x.id !== ""){
                // meaning the user hasn't filled any of the inputs
                // we are going to break out of the loop 
                x.focus();
                x.style.border ="1px solid red"
                error.push(x.id + "is blank")
                break
            }else{
                // means the user has satisfied conditions and the clone function should work now
                x.style.border = "1px solid green"
            }
        }
        if(error.length > 0){   
            console.log(error)
            error.length= 0
        }else{
            cloneFunction(e,certItem,certParent)
        }
    }
}
