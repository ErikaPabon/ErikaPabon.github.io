const sections = document.querySelectorAll('.section');//selecting all classes for buttons
const sectBtns = document.querySelectorAll('.controlls');//parent
const sectBtn = document.querySelectorAll('.control');//button
const allselections= document.querySelector('.main-content');//selecting body/main class

var fields={};

function PageTransitions(){
    //buttons click active class
    for (let i =0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //sections Active class
    allselections.addEventListener('click', (e) =>{ //this function targets whatever dataset from HTML we toggle in
        const id = e.target.dataset.id;//this put it in a variable called it id
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide all other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);//whatever id is coming from id 
            element.classList.add('active')
        }
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();

document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.subject = document.getElementById("subject")
    fields.request = document.getElementById('request');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   class User {
    constructor(name, email, subject, request) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.request = request;
    }
   }
