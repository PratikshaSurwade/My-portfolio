window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
        document.getElementById("navTabs").style.top = "0";
    }
    else {
        document.getElementById("navTabs").style.top
                = "-60px";
    }
}