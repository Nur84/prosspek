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
function closeform() {
    $('#detail').html('')
}