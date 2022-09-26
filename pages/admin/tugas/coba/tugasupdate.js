function formupload(id) {
    $.ajax({
        url: "./addmytugas",
        data: { id: id },
        type: "post",
        success: function (msg) {
            $('#detail').html(msg)
        }
    })
}
function detailtugas(id) {
    $.ajax({
        url: "./detailmytugas",
        data: { id: id },
        type: "post",
        success: function (msg) {
            $('#detail').html(msg)
        }
    })
}
function hapustugas(id) {
    $.ajax({
        url: "./hapusmytugas",
        data: { id: id },
        type: "post"
    })
}
function closeform() {
    $('#detail').html('')
}