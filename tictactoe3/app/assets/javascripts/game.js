var play = true;
var winner = "";
var status = "won";

function check(id,p1,p2){
    
$(document).ready(function(){
    $('#select_player').click(function(){
        $('#players').hide();
      $('.table-g').show();
      move = $('input[name=player]:checked').val();
    }); 
    play = true;
    $('.table-g tr td').empty();
    $('.table-g tr td').click(function() {
        if ($(this).text() == "" && play) {
            if ((move % 2) == 1) {
                $(this).append("X");
                $(this).css('color', 'black');
            }
            else {
                $(this).append('O');
                $(this).css('color', 'black');
            }
            move++;
            if (winner() != -1 && winner() != "") {
				if (winner() == "X") {
                   
                    if ((move % 2) == 1)
                    {
                       winner = p2
                    }
                    else{
                        winner = p1;
                    }
                    $('#game-result').html('<div class="winner"><span>Winner: </span>'+winner+'</div><button class="btn btn-primary" onclick="check()" id="reload">reload</button> <a class="btn btn-info" style="font-weight: bold;" toggle="tab" href="/scores">scoreboard</a>');
					$('.winner').css('background-color', '#61892f');
                    $('#reload').css('color','white');
                }
                if (winner() == "draw") {
                    status = "draw";
                    $('#game-result').html('<div class="winner"><span>Winner: </span>Draw match</div><button class="btn btn-primary" onclick="check()" id="reload">reload</button> <a class="btn btn-info" style="font-weight: bold;" toggle="tab" href="/scores">scoreboard</a>');
					$('.winner').css('background-color', '#61892f');
                    $('#reload').css('color','white');
                    
                    
                }
                if (winner() == "O") {
                    if ((move % 2) != 1)
                    {
                        winner = p1;
                    }
                    else{
                        winner = p2;
                    }
                    $('#game-result').html('<div class="winner"><span>Winner: </span>'+winner+'</div><button class="btn btn-primary" onclick="check()" id="reload">reload</button> <a class="btn btn-info" style="font-weight: bold;" toggle="tab" href="/scores">scoreboard</a>');
					$('.winner').css('background-color', '#e85a4f');
                    $('#reload').css('color','white');
                }
                
				play = false;
            }
            
		}
    });
    
    function winner(){
        sp1 = $('.table-g tr:nth-child(1) td:nth-child(1)').text();
        sp2 = $('.table-g tr:nth-child(1) td:nth-child(2)').text();
        sp3 = $('.table-g tr:nth-child(1) td:nth-child(3)').text();
        sp4 = $('.table-g tr:nth-child(2) td:nth-child(1)').text();
        sp5 = $('.table-g tr:nth-child(2) td:nth-child(2)').text();
        sp6 = $('.table-g tr:nth-child(2) td:nth-child(3)').text();
        sp7 = $('.table-g tr:nth-child(3) td:nth-child(1)').text();
        sp8 = $('.table-g tr:nth-child(3) td:nth-child(2)').text();
        sp9 = $('.table-g tr:nth-child(3) td:nth-child(3)').text();

        if ((sp1 == sp2) && (sp2 == sp3)) {
			return sp3;
		} else if ((sp4 == sp5) && (sp5 == sp6)) {
			return sp6;
		} else if ((sp7 == sp8) && (sp8 == sp9)) {
			return sp9;
		}
		// check columns
		else if ((sp1 == sp4) && (sp4 == sp7)) {
			return sp7;
		} else if ((sp2 == sp5) && (sp5 == sp8)) {
			return sp8;
		} else if ((sp3 == sp6) && (sp6 == sp9)) {
			return sp9;
		}
		// check diagonals
		else if ((sp1 == sp5) && (sp5 == sp9)) {
			return sp9;
		} else if ((sp3 == sp5) && (sp5 == sp7)) {
			return sp7;
		}
        // no winner
        if((sp1 != "")&&(sp2 != "")&&(sp3 != "")&&(sp4 != "")&&(sp5 != "")&&(sp6 != "")&&(sp7 != "")&&(sp8 != "")&&(sp9 != ""))
        {
            return "draw";
        }
		return -1;
    }
});
}
function scorecardfun(){
    $('#game-result').hide();
    $('.table-g').hide();
    $('#scorecard').show();

}