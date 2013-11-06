$(function () {

    $(".square").on("click", function (event) {
        if ($(this).hasClass("marked")) return;

        var play = $('#play').val();
        var marker = $('#next_marker').val();

        if (play) {
            $('#' + play).removeClass("marked");
            $('#' + play).val('');
        }

        $(this).addClass("marked").val(marker);
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
                // once success, remove player mark
                $('#play').val('');

                var game = eval('(' + retValue.d + ')');

                console.log(game);

                if (game.IsGameOver == true) {
                    if (game.IsDraw == false) {
                        alert('you won');
                    } else {
                        alert('the game is a draw');
                    }
                } else {

                    for (var i = 0; i < 9; i++) {
                        var box = $('#'+i);
                        var mark = game.field[i];

                        if (mark == "-1") {
                            box.removeClass('marked').val('');
                        } else {
                            box.addClass('marked').val(mark);
                        }
                    }

                }

                if (game.LastPlaySuccess) {
                    var marker = $('#next_marker').val();
                    $('#next_marker').val(marker == "X" ? "O" : "X");
                }
            }
        });
    });

});
