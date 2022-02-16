
function matched(){
    const radioValue = document.querySelector('input[name="Hero"]:checked').value;
    // const radioValueOne = document.querySelector('input[name="HeroOne"]:checked').value;
    // const radioValueTwo = document.querySelector('input[name="HeroTwo"]:checked').value;
    // const radioValueThree = document.querySelector('input[name="HeroThree"]:checked').value;
    // const radioValueFour = document.querySelector('input[name="HeroFour"]:checked').value;
    const image=document.querySelector("img");
    const div=document.querySelector("div .optionOne");
    const divOne=document.querySelector("div .optionTwo");
    const divTwo=document.querySelector("div .optionThree");
    
    if(radioValue==="HRK")
    {
         image.src="theFull.jpg";
         div.style.backgroundColor="lightGreen";
    }

    else if(radioValue==="AD")
    divOne.style.backgroundColor="red";

    else
        divTwo.style.backgroundColor="red";
        
    
        // alert("you are wrong")
}
function matchedOne(){
    // const radioValue = document.querySelector('input[name="HeroOne"]:checked').value;
    const radioValueOne = document.querySelector('input[name="HeroOne"]:checked').value;
    // const radioValueTwo = document.querySelector('input[name="HeroTwo"]:checked').value;
    // const radioValueThree = document.querySelector('input[name="HeroThree"]:checked').value;
    // const radioValueFour = document.querySelector('input[name="HeroFour"]:checked').value;
    const imageOne=document.getElementById("imageOne");
    const divOne=document.querySelector("div .optionFour");
    const divTwo=document.querySelector("div .optionFive");
    const divThree=document.querySelector("div .optionSix");
    
    if(radioValueOne==="VK")
    {
         imageOne.src="virFull.jpg";
         divOne.style.backgroundColor="lightGreen";
    }

    else if(radioValueOne==="MSD")
    divTwo.style.backgroundColor="red";

    else
        divThree.style.backgroundColor="red";
        
    
        // alert("you are wrong")
}
function matchedTwo(){
    const radioValueTwo = document.querySelector('input[name="HeroTwo"]:checked').value;
    // const radioValueOne = document.querySelector('input[name="HeroOne"]:checked').value;
    // const radioValueTwo = document.querySelector('input[name="HeroTwo"]:checked').value;
    // const radioValueThree = document.querySelector('input[name="HeroThree"]:checked').value;
    // const radioValueFour = document.querySelector('input[name="HeroFour"]:checked').value;
    const imageTwo=document.getElementById("imageTwo");
    const div=document.querySelector("div .optionSeven");
    const divOne=document.querySelector("div .optionEight");
    const divTwo=document.querySelector("div .optionNine");
    
    if(radioValueTwo==="MSD")
    {
         imageTwo.src="dhoFull.jpg";
         divTwo.style.backgroundColor="lightGreen";
    }

    else if(radioValueTwo==="RP")
    divOne.style.backgroundColor="red";

    else
        div.style.backgroundColor="red";
        
    
        // alert("you are wrong")
}
function matchedThree(){
    const radioValueThree = document.querySelector('input[name="HeroThree"]:checked').value;
    // const radioValueOne = document.querySelector('input[name="HeroOne"]:checked').value;
    // const radioValueTwo = document.querySelector('input[name="HeroTwo"]:checked').value;
    // const radioValueThree = document.querySelector('input[name="HeroThree"]:checked').value;
    // const radioValueFour = document.querySelector('input[name="HeroFour"]:checked').value;
    const imageThree=document.getElementById("imageThree");
    const div=document.querySelector("div .optionTen");
    const divOne=document.querySelector("div .optionEleven");
    const divTwo=document.querySelector("div .optionTwelve");
    
    if(radioValueThree==="AS")
    {
         imageThree.src="am.jpg";
         divOne.style.backgroundColor="lightGreen";
    }

    else if(radioValueThree==="NM")
    div.style.backgroundColor="red";

    else
        divTwo.style.backgroundColor="red";
        
    
        // alert("you are wrong")
}
function matchedFour(){
    const radioValueFour = document.querySelector('input[name="HeroFour"]:checked').value;
    // const radioValueOne = document.querySelector('input[name="HeroOne"]:checked').value;
    // const radioValueTwo = document.querySelector('input[name="HeroTwo"]:checked').value;
    // const radioValueThree = document.querySelector('input[name="HeroThree"]:checked').value;
    // const radioValueFour = document.querySelector('input[name="HeroFour"]:checked').value;
    const imageFour=document.getElementById("imageFour");
    const div=document.querySelector("div .optionThirteen");
    const divOne=document.querySelector("div .optionFourteen");
    const divTwo=document.querySelector("div .optionFifteen");
    
    if(radioValueFour==="DP")
    {
         imageFour.src="de.jpg";
         divTwo.style.backgroundColor="lightGreen";
    }

    else if(radioValueFour==="AB")
    divOne.style.backgroundColor="red";

    else
        div.style.backgroundColor="red";
        
    
        // alert("you are wrong")
}
