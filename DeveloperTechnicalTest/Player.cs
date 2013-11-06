using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TicTacToe
{
    public class Player
    {
        public string Name { get; set; }
        public Player Opponent { get; set; }
        public bool IsPlaying { get; set; }
        public bool WaitingForOpponent { get; set; }
        public string Simbolo { get; set; }
    }
}