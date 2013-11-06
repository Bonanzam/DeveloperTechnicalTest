using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace TicTacToe
{
    public partial class Index : System.Web.UI.Page
    {
        private static readonly List<Board> boards = new List<Board>();

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string RefreshBoard(string board, string player, string play)
        {
            var playingOn = GetCurrentBoard(board, player);

            if (string.IsNullOrEmpty(play))
                return string.Empty;

            var success = MakePlay(playingOn, player, play);

            var json = new JavaScriptSerializer().Serialize(playingOn);
            return json;
        }

        private static Board GetCurrentBoard(string boardName, string playerName)
        {
            var playingOn = boards.SingleOrDefault(_ => _.Name.Equals(boardName));

            if (playingOn == null)
                playingOn = CreateNewBoard(boardName, playerName);

            return playingOn;
        }

        private static Board CreateNewBoard(string boardName, string playerNamer)
        {
            var player = new Player();
            player.Name = playerNamer;
            player.WaitingForOpponent = false;
            player.Simbolo = "X";

            var board = new Board();
            board.Name = boardName;
            board.Player1 = player;
            board.GameStarted = DateTime.Now;

            boards.Add(board);

            return board;
        }

        private static bool MakePlay(Board board, string playerName, string play)
        {
            var player = new Player();

            if (board.Player1.Name.Equals(playerName))
            {
                player = board.Player1;
            }
            else if (board.Player2 == null)
            {
                player.Name = playerName;
                player.WaitingForOpponent = false;
                player.Simbolo = "O";

                board.Player2 = player;
            }
            else if (board.Player2.Name.Equals(playerName))
            {
                player = board.Player2;
            }
            else
            {
                return false; // player not in game
            }

            int position = -1;
            int.TryParse(play, out position);

            return board.Play(player, position);
        }
    }
}