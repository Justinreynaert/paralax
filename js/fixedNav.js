window.onload = function() {

    const eNav = document.getElementById('nav');
    var eNavHeight = eNav.offsetHeight;
    console.log(window.innerHeight);

    window.onscroll = function() {
        if (window.pageYOffset > eNavHeight) {
            if (eNav.className !== 'Navfixed') {

                eNav.className += "Navfixed";
            }
        } else {
            eNav.removeAttribute("class")
        }
    };

};
