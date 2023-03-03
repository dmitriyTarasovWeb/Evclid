




let currentStep = document.querySelector(".setion-steps__button-1")
document.querySelector(".setion-steps__button-1").classList.add("outline")

document.querySelector(".setion-steps__button-1").onclick = function() {
    if(currentStep!==document.querySelector(".setion-steps__button-1")){
        var visibleBlocks = document.querySelectorAll(".show")
        visibleBlocks.forEach(function(addShow) {
            addShow.classList.remove("show")
        });

        document.querySelector(".section-steps__bottom-text-1").classList.add("show")
        document.querySelector(".section-steps__photo-1").classList.add("show")

        currentStep.classList.remove("outline")
        document.querySelector(".setion-steps__button-1").classList.add("outline")
        
        currentStep=document.querySelector(".setion-steps__button-1")
       
    }
}

document.querySelector(".setion-steps__button-2").onclick = function() {
    if(currentStep!==document.querySelector(".setion-steps__button-2")){
        var visibleBlocks = document.querySelectorAll(".show")
        visibleBlocks.forEach(function(addShow) {
            addShow.classList.remove("show")
        });

        document.querySelector(".section-steps__bottom-text-2").classList.add("show")
        document.querySelector(".section-steps__photo-2").classList.add("show")

        currentStep.classList.remove("outline")
        document.querySelector(".setion-steps__button-2").classList.add("outline")
        
        currentStep=document.querySelector(".setion-steps__button-2")
    }
}

document.querySelector(".setion-steps__button-3").onclick = function() {
    if(currentStep!==document.querySelector(".setion-steps__button-3")){
        var visibleBlocks = document.querySelectorAll(".show")
        visibleBlocks.forEach(function(addShow) {
            addShow.classList.remove("show")
        });

        document.querySelector(".section-steps__bottom-text-3").classList.add("show")
        document.querySelector(".section-steps__photo-3").classList.add("show")

        currentStep.classList.remove("outline")
        document.querySelector(".setion-steps__button-3").classList.add("outline")
        
        currentStep=document.querySelector(".setion-steps__button-3")
    }
}

document.querySelector(".setion-steps__button-4").onclick = function() {
    if(currentStep!==document.querySelector(".setion-steps__button-4")){
        var visibleBlocks = document.querySelectorAll(".show")
        visibleBlocks.forEach(function(addShow) {
            addShow.classList.remove("show")
        });

        document.querySelector(".section-steps__bottom-text-4").classList.add("show")
        document.querySelector(".section-steps__photo-4").classList.add("show")

        currentStep.classList.remove("outline")
        document.querySelector(".setion-steps__button-4").classList.add("outline")
        
        currentStep=document.querySelector(".setion-steps__button-4")
    }
}






