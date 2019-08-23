var play = true;
var win = "";
var status = "won"
var sid ,win_id,score,pstatus;
var player1;
var player2;
var p1id;
var p2id;
var score1,score2,status1,status2;
function check(id,p1,p2,id1,id2,sc1,sc2,st1,st2){
    sid = id;
p1id = id1;
p2id = id2;
score1 = sc1;
score2 = sc2;
status1 = st1;
status2 = st2;
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
                       win = p2
                       win_id = p2id;
                       pstatus = status2;
                       score = parseInt(score2) + 1;
                    }
                    else{
                        win = p1
                       win_id = p1id;
                       pstatus = status1;
                       score = parseInt(score1) + 1;
                    }
                    $('#game-result').html('<div class="winner"><span>Winner: </span>'+win+'</div><button class="btn btn-primary" onclick="update(sid,p1id,p2id,win_id,status);score_update(win,win_id,pstatus,score)" id="reload">save</button> ');
                    $('.winner').css('background-color', '#61892f');
                    $('#reload').css('color','white');
                }
                if (winner() == "draw") {
                    status = "draw";
                    win = "-";
                    $('#game-result').html('<div class="winner"><span>Winner: </span>'+win+'</div><button class="btn btn-primary" onclick="update(sid,p1id,p2id,win,status);score_update(win,win_id,pstatus,score)" id="reload">save</button> ');
                    $('.winner').css('background-color', '#61892f');
                    $('#reload').css('color','white');
                    
                    
                }
                if (winner() == "O") {
                    if ((move % 2) != 1)
                    {
                        win = p1
                       win_id = p1id;
                       pstatus = status1;
                       score = parseInt(score1) + 1;
                    }
                    else{
                        win = p2
                       win_id = p2id;
                       pstatus = status2;
                       score = parseInt(score2) + 1;
                    }
                    $('#game-result').html('<div class="winner"><span>Winner: </span>'+win+'</div><button class="btn btn-primary" onclick="update(sid,p1id,p2id,win_id,status);score_update(win,win_id,pstatus,score)" id="reload">save</button> ');
                    $('.winner').css('background-color', '#61892f');
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
function update(id,p1,p2,win,status){
        $.ajax({
            url: '/scores/'+id,
            type: 'put',
            data: {authenticity_token: $('[name="csrf-token"]')[0].content,score:{player1:p1,player2:p2, winner:win,status:status} },
            dataType: 'script'
        })
       
       
}
function score_update(win,win_id,status,score){
    $.ajax({
        url: '/players/'+win_id,
        type: 'put',
        data: {authenticity_token: $('[name="csrf-token"]')[0].content,player:{name:win,status:status,score:score} },
        dataType: 'script'
    })
 
}