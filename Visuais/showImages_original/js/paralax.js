(function () {
    
    const dataParalaxContainer = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(element){
        
        let bounding = element.getBoundingClientRect(); 

        // return (
        //     bounding.top >= 0 &&
        //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
        // );

        return (
            //bounding.top < (window.pageYOffset + window.innerHeight) &&
            // bounding.left < (window.pageXOffset + window.innerWidth) &&
            //(bounding.top + bounding.height) > window.pageYOffset //&&
            // (bounding.left + bounding.width) > window.pageXOffset
            bounding.top * -1 < bounding.height && bounding.top <= 0
          );
    }

    function getNewPosY(element){
        const velocity = parseFloat(element.getAttribute("data-p-velocity")) || .5
        return element.getBoundingClientRect().top * velocity * -1
    }

    function positionImage(e){
        // console.log("window")
        // console.log(e)

        dataParalaxContainer.forEach(c => {
            // console.log(c)
            let originalYPositionY = getComputedStyle(c).backgroundPositionY
            let originalYPositionX = getComputedStyle(c).backgroundPositionX

            let newPosY = parseInt(originalYPositionY)

            if(isGettingOut(c)){
                // console.log("is into screen")

                c.style.backgroundPosition = `${originalYPositionX} ${getNewPosY(c)}px`
            } 
            // else {
            //     let bounding = c.getBoundingClientRect();
            //     console.log(bounding.top)
            //     console.log(bounding.height)
            //     console.log(window.pageYOffset)
            //     console.log(window.innerHeight)
            //     console.log(window.pageYOffset + window.innerHeight)
            // }
        })
    }

    window.addEventListener("scroll", positionImage)

    positionImage()

})()