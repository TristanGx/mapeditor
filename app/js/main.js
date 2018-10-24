var cnv, ctx;

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    cnv = document.querySelector("#editor");
    ctx = cnv.getContext("2d");
    con = document.querySelector("#con");
    cnv.width = window.innerWidth - (70 * 2 + 15 * 2 + 2);
    cnv.height = window.innerHeight - (35 * 2 + 15 * 2 + 2);
})