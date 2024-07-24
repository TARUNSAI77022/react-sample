



function myFunction {



    var x = document.getElementById("Topnav");
    if (x.className === "mytopnav") {
      x.className += " responsives";
    } else {
      x.className = "mytopnav";

    }
  }

 

    const progressContainer = document.querySelectorAll('.progress-container');

    // initial call
    setPercentage();
    
    function setPercentage() {
      
      progressContainer.forEach(item=>{
        
        const percentage = item.getAttribute('data-percentage') + '%';
      
        const progressEl = item.querySelector('.progressbar');
        const percentageEl = item.querySelector('.percentage');
        
        progressEl.style.width = percentage;
        percentageEl.innerText = percentage;
        percentageEl.style.left = percentage;
      })
      
    }


    const toggle = document.querySelector(".fa-bars");
    const toggleon = document.querySelector(".fa-times-circle");
    toggle.addEventListener("click",(item)=>{
      toggle.classList.add("fHide")
      toggleon.classList.remove("fHide")

     
    })
    
    
      toggleon.addEventListener("click",(item)=>{
        toggle.classList.remove("fHide")
      toggleon.classList.add("fHide")
      
      })
    








