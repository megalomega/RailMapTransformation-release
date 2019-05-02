
const snap = new Snap('#Layer_1');

document.querySelectorAll("#railSrcMap g path").forEach(function(e) {
    snap.select("#" + e.id).animate({
        d: document.getElementById(e.id.replace("pn_", "pm_")).getAttribute("d")
    }, 3000, mina.linear);
});