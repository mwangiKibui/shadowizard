function shadowizard(options){

    //you have to add a class where you want the shadow effect to.
    let images = document.querySelectorAll('.shadowizard');

    if(options.shadow_type === "hard")
        options.shadow_type = "0px";
    else 
        options.shadow_type = "15px";

    //loop through images
    images.forEach(image => {

        //add a style to it.
        image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding) 
            image.style.padding = `1 rem`;

    })

};

module.exports.shadowizard = shadowizard;