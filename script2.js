    function zenbakia(n){
    return(Math.floor(Math.random() * n + 1 ));
}

var irudia = new Array();
irudia[0] = "irudiak/blog.png";
irudia[1] = "irudiak/css_logo.png";
irudia[2] = "irudiak/html_logo.png";
irudia[3] = "irudiak/js_logo.png";


function aukeratu_irudia(){
    document.getElementById("aukeratuta").src = irudia[zenbakia(4)-1];
}

function loop() {
    document.getElementById("argazkia").src = irudia[zenbakia(4)-1];
    setTimeout(loop, 100);
}