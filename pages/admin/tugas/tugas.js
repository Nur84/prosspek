function formupload(id) {
    $.ajax({
        url: "",
        data: { id: id },
        type: "post",
        success: function (msg) {
            $('#detail').html(msg)
        }
    })
}