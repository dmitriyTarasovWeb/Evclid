    document.querySelector("#btn2").onclick=function(){
        document.querySelector(".burger-menu").classList.toggle("burger-opacity-on")
        document.querySelector(".burger-menu__nav-list").classList.toggle("burger-menu-open")
        document.querySelector("body").classList.toggle("body-stop-scrolling")
        
    }

    document.querySelector("#btn1").onclick=function(){
        document.querySelector(".burger-menu").classList.toggle("burger-opacity-on")
        document.querySelector(".burger-menu__nav-list").classList.toggle("burger-menu-open")
        document.querySelector("body").classList.toggle("body-stop-scrolling")
    }



    let headerFormMysteryButton=document.querySelector(".mystery-button")
    let headerFormButton=document.querySelector(".search-button")
    let headerFormInput=document.querySelector(".header__input")
    let headerForm=document.querySelector(".header__form")
    let headerSearchItems=document.querySelector(".header__search-items")
    let  headerSearch=document.querySelector(".header__search")
    let  svg=document.querySelector(".svg")


    headerFormInput.addEventListener('click', function() {
        if(document.activeElement==headerFormInput ){
            svg.classList.add("active")
        }
        else{
            svg.classList.remove("active")
        }
        
    });

    headerFormMysteryButton.addEventListener('click', function() {
        headerFormInput.focus()
        svg.classList.toggle("active")
        headerFormMysteryButton.classList.toggle("active")
        headerFormInput.classList.toggle("active")
        headerFormButton.classList.toggle("active")
        headerSearchItems.classList.toggle("active")
        headerSearch.classList.toggle("active")
    });

    document.addEventListener('click', function(targ) {
        if(targ.target !== headerFormInput & targ.target!= svg & targ.target!= headerFormMysteryButton & targ.target!=headerSearchItems & targ.target!= headerSearch & targ.target!=headerFormButton & targ.target!=headerForm){
            headerFormMysteryButton.classList.remove("active")
            svg.classList.remove("active")
            headerFormInput.classList.remove("active")
            headerFormButton.classList.remove("active")
            headerSearchItems.classList.remove("active")
            headerSearch.classList.remove("active")
            console.log("2")
        }
        else{
            headerFormInput.focus()
            svg.classList.add("active")
        }
    });


