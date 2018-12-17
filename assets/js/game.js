
    var fighterHP = 100;
    var oppHP = 100;
    var fighterAttack = 0;
    var oppAttack = 0;
    var wins = 0;

    $(document).ready(function() {

    var fighterPicked = false;
    var opponentPicked = false;
    var imgSrc;
    var playerHPtxt = "<div class='row'><div class='col=lg-2'><h4 id='playerTxt' class='text-center whiteFont hp'>HP: 100</h4></div></div>";
    var oppHPtxt = "<div id='oppHPdiv' class='row'><div class='col=lg-2'><h4 id='oppTxt' class='text-center whiteFont hp'>HP: 100</h4></div></div>";

    $("#attackBtn").hide();

     // This if/else is logically backward, but whatevs, I'm too lazy to change it now
     $(".fighterImg").click(function(){
            if(fighterPicked){
                imgSrc = $(this).attr("src"); 
                $("#divOpp").append("<img id='oppImg' class='fighterImg center-block' src='" + imgSrc+ "'/>" + oppHPtxt );
                $("#helpTxt").text("3. Attack!");
                opponentPicked = true;
                $(this).remove();
                $("#attackBtn").show();
            } else {
                imgSrc = $(this).attr("src"); 
                $("#divMe").append("<img class='fighterImg center-block' src='" + imgSrc + "'/>" + playerHPtxt );
                $("#helpTxt").text("2. Choose your opponent");
                $(this).remove();
                fighterPicked = true;
            }
        });

    $("#attackBtn").click(function(){
        getAttackVals();
        $("#playerTxt").text("HP: " + fighterHP);
        $("#oppTxt").text("HP: " + oppHP);
    });

    });


    function getAttackVals(){
        fighterAttack = Math.floor(Math.random() * 10) + 1;
        oppAttack = Math.floor(Math.random() * 10) + 1;
        fighterHP = fighterHP - oppAttack;
        oppHP = oppHP - fighterAttack;

        if(fighterHP < 1 && oppHP > 0  ){
            alert("You lost");
            location.reload();
        } else if(oppHP < 1 && fighterHP > 0 && wins < 3){
            alert("You won. Select the next opponent.");
            $("#oppHPdiv").remove();
            $("#oppImg").remove();
            $("#helpTxt").text("2. Choose your opponent");
            fighterHP = 100;
            oppHP = 100;
            wins++;
            if(wins === 3){
                alert("Congrats. You'e beat everyone. You are the master");
                location.reload();
            }
        }

    }