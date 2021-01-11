function setPage() {
    updateLogo();
    updateCollapseElements();
}

function updateWindow() {
    updateLogo();

    document.getElementById("open-menu").checked = false;
}

function updateLogo() {

    var element = document.getElementById("logo").firstChild.innerHTML;

    if (window.innerWidth < 797) {
        document.getElementById("logo").firstChild.innerHTML = "BB";
    } else {
        document.getElementById("logo").firstChild.innerHTML = "Brígida Baltar";
    }
}

function updateCollapseElements() {
    var coll = document.getElementsByClassName("collapse");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

function closeContent(element) {
    element.parentNode.style.display = "none";
}

function showGallery(element) {
    
    var carousel = element.parentNode.parentNode;
    carousel.classList.add("hidden");
    
    var gallery = carousel.nextElementSibling;
    gallery.classList.remove("hidden");
    
    var back = gallery.nextElementSibling;
    back.classList.remove("hidden");

}

function hideGallery(element) {
    
    element.classList.add("hidden");
    
    var gallery = element.previousElementSibling;
    gallery.classList.add("hidden");
    
    var carousel = gallery.previousElementSibling;
    carousel.classList.remove("hidden");
}
