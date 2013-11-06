<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="TicTacToe.Index" %>

<!DOCTYPE html>

<html>
<head runat="server">
    <title>Tic Tac Toe</title>

    <style>
        input.square {
            display: block;
            border: 2px solid gray;
            height: 80px;
            width: 80px;
            float: left;
            margin: 5px;
        }

        td.col {
            text-align: center;
        }
    </style>
</head>
<body>
    <div>
        Hello Tic-Tac-Toe
            <table>
                <tr>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <label for="name">Name: </label>
                                </td>
                                <td>
                                    <input id="txtName" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="txtGame">Game: </label>
                                </td>
                                <td>
                                    <input id="txtGame" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="btnRefresh" type="button" value="Refresh" /></td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td></td>
                                <td class="col">A</td>
                                <td class="col">B</td>
                                <td class="col">C</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <input id="0" type="button" class="square" /></td>
                                <td>
                                    <input id="1" type="button" class="square" /></td>
                                <td>
                                    <input id="2" type="button" class="square" /></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <input id="3" type="button" class="square" /></td>
                                <td>
                                    <input id="4" type="button" class="square" /></td>
                                <td>
                                    <input id="5" type="button" class="square" /></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <input id="6" type="button" class="square" /></td>
                                <td>
                                    <input id="7" type="button" class="square" /></td>
                                <td>
                                    <input id="8" type="button" class="square" /></td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

        <input id="play" type="hidden" />
        <input id="next_marker" type="hidden" value="X" />
    </div>

    <script type="text/javascript" src="Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="Scripts/default.js"></script>
</body>
</html>
