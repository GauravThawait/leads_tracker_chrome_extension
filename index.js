// chrome://extensions/
let myLead = []


const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))


if(leadFromLocalStorage)
{
   myLead = leadFromLocalStorage
   render(myLead)
}

function render(leads) {
   let listItems = ""
  
   for(let i=0; i<leads.length; i++)
   {    
  
        //creating a template string
        listItems += `  
              
           <li>
                 <a target='_blank' href='${leads[i]}'> 
                    
                    ${leads[i]}
                 
                 </a>
        
        
           </li>
           
        `
   }
   ulEl.innerHTML = listItems
  
  }
  

 inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value) //taking value of inout element
    inputEl.value = ""

   //set iteam to local storage
      localStorage.setItem("myLead", JSON.stringify(myLead))
     
   render(myLead)

   console.log(localStorage.getItem("myLead"))
    
 })


 const tab= [{
   url:"www.google.com"
 }]


tabbtn.addEventListener("click", function () {
   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

      console.log(tabs)
      myLead.push(tabs[0].url)
      localStorage.setItem("myLead", JSON.stringify(myLead))
      render(myLead)


   })

})


 deletebtn.addEventListener("dblclick", function()
 {
    console.log("doubled clicked")
    localStorage.clear()
    myLead=[]
    render(myLead)
 })


