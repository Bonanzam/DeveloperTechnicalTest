$(function () {

    $(".square").on("click", function (event) {
        if ($(this).hasClass("marked")) return;

        var play = $('#play').val();
        //var player = $('#player').val() || ;

        if (play) {
            $('#' + play).removeClass("marked");
            $('#' + play).val('');
        }

        $(this).addClass("marked").val('X');
        $('#play').val(event.target.id);
    });

    $('#btnRefresh').click(function () {
        var board = $('#txtGame').val();
        var player = $('#txtName').val();
        var play = $('#play').val();

        if (!board || !player || !play) return false;

        $.ajax({
            type: "POST",
            url: "Index.aspx/RefreshBoard",
            data: '{ board: "'+board+'", player:"'+player+'", play:"'+play+'" }', 
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (retValue) {
                // redraw the tic tac toe table
            }
        });
    });

});
