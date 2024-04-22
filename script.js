function show_hide(item){
    var element = document.getElementById(item);
    // let opacity = 0;
    // let fadeIn = setInterval(() => {
    // element.style.opacity = opacity;
    // opacity += 0.01;
    // }, 10);
    if (element.style.display == "block"){
        element.style.display = "none";
    }else{
        element.style.display = "block";
        // if (opacity >= 1) {
        //     clearInterval(fadeIn);
        //  }
    }
}