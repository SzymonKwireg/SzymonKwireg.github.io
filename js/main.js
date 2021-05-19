var menuContent = document.getElementsByTagName("nav")[0].innerHTML;
document.getElementsByTagName("nav")[0].innerHTML = "";
var menuStatus = false;
var dark = false;
function renderMenu()
{
    if (!menuStatus)
    {
        document.getElementsByTagName("nav")[0].innerHTML = menuContent;
        document.getElementsByTagName("nav")[0].style.width = "33%";
        document.getElementsByTagName("nav")[0].style.borderLeft = "4px solid #1cad4d";
        document.getElementsByTagName("nav")[0].style.padding = "15px";
    }
    else 
    {
        document.getElementsByTagName("nav")[0].innerHTML = "";
        document.getElementsByTagName("nav")[0].style.width = "0%"
        document.getElementsByTagName("nav")[0].style.borderLeft = "0px solid #1cad4d";
        document.getElementsByTagName("nav")[0].style.padding = "0px";
    }
    menuStatus = !menuStatus;
}
function changeImageInGalleryForward(name, gallery, aname)
{
    var x = Number(gallery.src[gallery.src.length - 5]);
    var y = 0;
    if (x == 4)
        y = 1;
    else
        y = x + 1;
    gallery.src = "img/" + name + "/" + name + "_" + y + ".jpg"
    aname.href = "img/" + name + "/" + name + "_" + y + ".jpg"
}
function changeImageInGalleryBack(name, gallery, aname)
{
    var x = Number(gallery.src[gallery.src.length - 5]);
    var y = 0;
    if (x == 1)
        y = 4;
    else
        y = x - 1;
    gallery.src = "img/" + name + "/" + name + "_" + y + ".jpg"
    aname.href = "img/" + name + "/" + name + "_" + y + ".jpg"
}
