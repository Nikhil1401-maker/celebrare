function navigation() {
    var x = document.getElementById("navigation-bar");
    var t = document.getElementById("one");
    var b = document.getElementById("two");
    var c = document.getElementById("for-logo");
    var z = document.getElementById("first");
    if (x.style.display === 'block'){
        x.style.display = "none";
        t.style.visibility="hidden";
        b.style.visibility="visible";
        c.style.boxShadow="2px 2px 10px 1px gray";
        z.style.zIndex="2";
    }
    else {
        x.style.display = "block";
        t.style.visibility="visible";
        b.style.visibility="hidden";
        c.style.boxShadow="none";
        z.style.zIndex="1";
    }
}