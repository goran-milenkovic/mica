function setup() {
    //createCanvas(windowWidth, windowHeight)
    var myCanvas = createCanvas(width, height);
    //myCanvas.parent("mica-game");
    stroke('green')
    text("Crveni bira", width * 0.38, height * 0.5);
    line(0, 0, width, height);
}


function draw() {

    background(220);
    strokeWeight(1)
    stroke('rgba(0,255,0,0.25)');
    strokeWeight(4);

    rect(width * 0.10, height * 0.10, width * 0.80, height * 0.80);
    rect(width * 0.20, height * 0.20, width * 0.60, height * 0.60);
    rect(width * 0.30, height * 0.30, width * 0.40, height * 0.40);

    line(width * 0.1, height * 0.5, width * 0.3, height * 0.5);
    line(width * 0.7, height * 0.5, width * 0.9, height * 0.5);
    line(width * 0.5, height * 0.1, width * 0.5, height * 0.3);
    line(width * 0.5, height * 0.7, width * 0.5, height * 0.9);

    strokeWeight(10);
    textAlign(CENTER);
    textFont('Georgia');
    textSize(16);
    stroke('rgb(0,204,204)');
    text(info, width * 0.5, height * 0.5);
    stroke('green')

    for (let i in pointsFirstPlayer) {
        if (pointsFirstPlayer[i] == true) {
            if (i == clickedField)
                stroke('yellow')
            else
                stroke('red')
            circle(points[i][0], points[i][1], 30)
        }
    }

    for (let i in pointsSecondPlayer) {
        if (pointsSecondPlayer[i] == true) {
            if (i == clickedField)
                stroke('yellow')
            else
                stroke('blue')
            circle(points[i][0], points[i][1], 30)
        }
    }
}



function mousePressed() {
    let hasFieldToMoveFirstPlayer = false
    if (timeToEat) {
        if (eatFirst)
            for (let i in points) {
                if (takenFields[i] == true && pointsSecondPlayer[i] == true &&
                    Math.sqrt((points[i][0] - mouseX) * (points[i][0] - mouseX) + (points[i][1] - mouseY) * (points[i][1] - mouseY)) < 15) {
                    //provera da li tu koju hoce da pojede cini trojku za protivnickog igraca
                    if ((pointsSecondPlayer[triple[i][0][0]] && pointsSecondPlayer[triple[i][0][1]]) ||
                        pointsSecondPlayer[triple[i][1][0]] && pointsSecondPlayer[triple[i][1][1]]) {
                        //nasao trojku, sad trazi da vidi da li ima jedna njegova da nije u trojci
                        for (let i in pointsSecondPlayer) {
                            if (pointsSecondPlayer[i])
                                if ((pointsSecondPlayer[triple[i][0][0]] && pointsSecondPlayer[triple[i][0][1]] == false) ||
                                    (pointsSecondPlayer[triple[i][0][0]] == false && pointsSecondPlayer[triple[i][0][1]]) ||
                                    (pointsSecondPlayer[triple[i][1][0]] && pointsSecondPlayer[triple[i][1][1]] == false) ||
                                    (pointsSecondPlayer[triple[i][1][0]] == false && pointsSecondPlayer[triple[i][1][1]]) ||
                                    (pointsSecondPlayer[triple[i][0][0]] == false && pointsSecondPlayer[triple[i][0][1]] == false &&
                                        pointsSecondPlayer[triple[i][1][0]] == false && pointsSecondPlayer[triple[i][1][1]] == false)) {
                                    info = "Trojka"
                                    hasFreeFieldSecondPlayer = true
                                }
                        }
                        if (hasFreeFieldSecondPlayer == false) {
                            if (chosen < 17)
                                info = "Plavi bira"
                            else
                                info = "Plavi pomera"
                            pointsSecondPlayer[i] = false
                            takenFields[i] = false
                            secondPlayerChosenPoints--
                            timeToEat = false
                            //dva slucaja, ako je tri moze da skace, a ako je dva kraj partije
                            if (secondPlayerChosenPoints == 3 && chosen == 18)
                                secondPlayerCanJump = true
                            else if (secondPlayerChosenPoints < 3 && chosen == 18)
                                info = "Pobeda plavog";
                        }
                        hasFreeFieldSecondPlayer = false
                    }
                    else {
                        if (chosen < 17)
                            info = "Plavi bira"
                        else
                            info = "Plavi pomera"
                        pointsSecondPlayer[i] = false
                        takenFields[i] = false
                        secondPlayerChosenPoints--
                        timeToEat = false
                        //dva slucaja, ako je tri moze da skace, a ako je dva kraj partije
                        if (secondPlayerChosenPoints == 3 && chosen == 18)
                            secondPlayerCanJump = true
                        else if (secondPlayerChosenPoints < 3 && chosen == 18)
                            info = "Pobeda crvenog";
                    }
                }
            }
        else
            for (let i in points) {
                if (takenFields[i] == true && pointsFirstPlayer[i] == true &&
                    Math.sqrt((points[i][0] - mouseX) * (points[i][0] - mouseX) + (points[i][1] - mouseY) * (points[i][1] - mouseY)) < 15) {
                    //provera da li tu koju hoce da pojede cini trojku za protivnickog igraca
                    if ((pointsFirstPlayer[triple[i][0][0]] && pointsFirstPlayer[triple[i][0][1]]) ||
                        (pointsFirstPlayer[triple[i][1][0]] && pointsFirstPlayer[triple[i][1][1]])) {
                        //nasao trojku, sad trazi da vidi da li ima jedna njegova da nije u trojci
                        for (let i in pointsFirstPlayer) {
                            if (pointsFirstPlayer[i])
                                if ((pointsFirstPlayer[triple[i][0][0]] && pointsFirstPlayer[triple[i][0][1]] == false) ||
                                    (pointsFirstPlayer[triple[i][0][0]] == false && pointsFirstPlayer[triple[i][0][1]]) ||
                                    (pointsFirstPlayer[triple[i][1][0]] && pointsFirstPlayer[triple[i][1][1]] == false) ||
                                    (pointsFirstPlayer[triple[i][1][0]] == false && pointsFirstPlayer[triple[i][1][1]]) ||
                                    (pointsFirstPlayer[triple[i][0][0]] == false && pointsFirstPlayer[triple[i][0][1]] == false &&
                                        pointsFirstPlayer[triple[i][1][0]] == false && pointsFirstPlayer[triple[i][1][1]] == false)) {
                                    info = "Trojka"
                                    hasFreeFieldFirstPlayer = true
                                }
                        }
                        if (hasFreeFieldFirstPlayer == false) {
                            if (chosen < 17)
                                info = "Crveni bira"
                            else
                                info = "Crveni pomera"
                            pointsFirstPlayer[i] = false
                            takenFields[i] = false
                            firstPlayerChosenPoints--

                            if (checkFirstPlayerBlocked) {
                                //proveri da li je blokiran prvi igrac
                                for (let hasPoint in pointsFirstPlayer)
                                    if (pointsFirstPlayer[hasPoint])
                                        for (let point in upperDownLeftRight[hasPoint]) {
                                            // console.log(upperDownLeftRight[hasPoint][point]);
                                            if (upperDownLeftRight[hasPoint][point] != -1 && takenFields[upperDownLeftRight[hasPoint][point]] == false)
                                                hasFieldToMoveFirstPlayer = true
                                        }
                                if (!hasFieldToMoveFirstPlayer)
                                    info = "Pobeda plavog"
                                else info = "Crveni pomera"
                                checkFirstPlayerBlocked = false
                            }
                            timeToEat = false
                            //dva slucaja, ako je tri moze da skace, a ako je dva kraj partije
                            if (firstPlayerChosenPoints == 3 && chosen == 18)
                                firstPlayerCanJump = true
                            else if (firstPlayerChosenPoints < 3 && chosen == 18)
                                info = "Pobeda plavog";
                        }
                        hasFreeFieldFirstPlayer = false
                    }
                    else {
                        if (chosen < 17)
                            info = "Crveni bira"
                        else
                            info = "Crveni pomera"
                        pointsFirstPlayer[i] = false
                        takenFields[i] = false
                        firstPlayerChosenPoints--

                        if (checkFirstPlayerBlocked) {
                            //proveri da li je blokiran prvi igrac
                            for (let hasPoint in pointsFirstPlayer)
                                if (pointsFirstPlayer[hasPoint])
                                    for (let point in upperDownLeftRight[hasPoint]) {
                                        // console.log(upperDownLeftRight[hasPoint][point]);
                                        if (upperDownLeftRight[hasPoint][point] != -1 && takenFields[upperDownLeftRight[hasPoint][point]] == false)
                                            hasFieldToMoveFirstPlayer = true
                                    }
                            if (!hasFieldToMoveFirstPlayer)
                                info = "Pobeda plavog"
                            else
                                info = "Crveni pomera"
                            checkFirstPlayerBlocked = false
                        }

                        timeToEat = false
                        if (firstPlayerChosenPoints == 3 && chosen == 18) {
                            firstPlayerCanJump = true
                        }
                        else if (firstPlayerChosenPoints < 3 && chosen == 18)
                            info = "Pobeda plavog";
                    }
                }
            }

    }
    else {
        for (let i in points) {
            if (Math.sqrt((points[i][0] - mouseX) * (points[i][0] - mouseX) + (points[i][1] - mouseY) * (points[i][1] - mouseY)) < 15)
                if (chosen < 18 && takenFields[i] == false) {//slucaj kada nisu izabrana sva polja
                    if (firstPlayerTurn == true) {//slucaj kada prvi igrac bira polje
                        pointsFirstPlayer[i] = true
                        firstPlayerChosenPoints++
                        firstPlayerStep++
                        if ((pointsFirstPlayer[triple[i][0][0]] && pointsFirstPlayer[triple[i][0][1]]) ||
                            (pointsFirstPlayer[triple[i][1][0]] && pointsFirstPlayer[triple[i][1][1]])) {
                            //treba da mu pojede drugi igrac
                            timeToEat = true
                            info = "Crveni uzmi plavu"
                            //console.log(timeToEat);
                            eatFirst = true
                        }
                        else {
                            if (chosen < 17)
                                info = "Plavi bira " + secondPlayerStep
                            else
                                info = "Plavi pomera"
                        }
                    }
                    else {//drugi igrac bira polje i nije ostao na 3
                        pointsSecondPlayer[i] = true
                        secondPlayerChosenPoints++
                        secondPlayerStep++
                        //console.log(secondPlayerStep);
                        if ((pointsSecondPlayer[triple[i][0][0]] && pointsSecondPlayer[triple[i][0][1]]) ||
                            (pointsSecondPlayer[triple[i][1][0]] && pointsSecondPlayer[triple[i][1][1]])) {
                            if (secondPlayerStep == 10) {
                                checkFirstPlayerBlocked = true
                            }
                            //treba da mu pojede drugi igrac
                            info = "Plavi uzmi crvenu"
                            timeToEat = true
                            eatFirst = false
                        }
                        else if (secondPlayerStep == 10) {

                            //proveri da li je blokiran prvi igrac
                            for (let hasPoint in pointsFirstPlayer)
                                if (pointsFirstPlayer[hasPoint])
                                    for (let point in upperDownLeftRight[hasPoint]) {
                                        // console.log(upperDownLeftRight[hasPoint][point]);
                                        if (upperDownLeftRight[hasPoint][point] != -1 && takenFields[upperDownLeftRight[hasPoint][point]] == false)
                                            hasFieldToMoveFirstPlayer = true
                                    }
                            if (!hasFieldToMoveFirstPlayer)
                                info = "Pobeda plavog"
                            else
                                info = "Crveni pomera"
                        }
                        else {
                            if (chosen < 17)
                                info = "Crveni bira " + firstPlayerStep
                            else
                                info = "Crveni pomera"
                        }
                    }
                    chosen++
                    firstPlayerTurn = !firstPlayerTurn
                    takenFields[i] = true;
                }
                //slucaj kad je izabrano 18 polja


                //------------SLUCAJEVI KAD SU NA 3 POLJA
                else if (chosen == 18 && takenFields[i] == true && clickedField == -1
                    && firstPlayerTurn && firstPlayerCanJump && pointsFirstPlayer[i]) {//prvi igrac izabrao polje koje hoce da pomeri
                    clickedField = i
                    info = "Crveni izaberi gde pomeras"
                }
                else if (chosen == 18 && takenFields[i] == false && clickedField != -1
                    && firstPlayerTurn && firstPlayerCanJump) {//prvi igrac izabrao gde hoce da pomeri polje

                    pointsFirstPlayer[i] = true
                    pointsFirstPlayer[clickedField] = false
                    takenFields[i] = true
                    takenFields[clickedField] = false
                    if ((pointsFirstPlayer[triple[i][0][0]] && pointsFirstPlayer[triple[i][0][1]]) ||
                        (pointsFirstPlayer[triple[i][1][0]] && pointsFirstPlayer[triple[i][1][1]])) {
                        //treba da mu pojede drugi igrac
                        timeToEat = true
                        info = "Crveni uzmi plavu"
                        //console.log(timeToEat);
                        eatFirst = true
                    }
                    else
                        info = "Plavi pomera"
                    firstPlayerTurn = !firstPlayerTurn
                    clickedField = -1

                    //imamo i proveru da li treba da jede protivnika
                }
                else if (chosen == 18 && takenFields[i] == true && clickedField == -1
                    && firstPlayerTurn == false && secondPlayerCanJump && pointsSecondPlayer[i]) {//drugi igrac izabrao polje koje hoce da pomeri
                    clickedField = i
                    info = "Plavi izaberi gde pomeras"
                }
                else if (chosen == 18 && takenFields[i] == false && clickedField != -1
                    && firstPlayerTurn == false && secondPlayerCanJump) {//drugi igrac izabrao gde hoce da pomeri polje
                    pointsSecondPlayer[i] = true
                    pointsSecondPlayer[clickedField] = false
                    takenFields[i] = true
                    takenFields[clickedField] = false
                    if ((pointsSecondPlayer[triple[i][0][0]] && pointsSecondPlayer[triple[i][0][1]]) ||
                        (pointsSecondPlayer[triple[i][1][0]] && pointsSecondPlayer[triple[i][1][1]])) {
                        //treba da mu pojede drugi igrac
                        timeToEat = true
                        info = "Plavi uzmi crvenu"
                        //console.log(timeToEat);
                        eatFirst = false
                    }
                    else
                        info = "Crveni pomera"
                    firstPlayerTurn = !firstPlayerTurn
                    clickedField = -1
                }

                else if (chosen == 18 && takenFields[i] == true) {//difoltni slucaj
                    if ((firstPlayerTurn && pointsFirstPlayer[i]) || (firstPlayerTurn == false && pointsSecondPlayer[i])) {
                        clickedField = i
                    }
                }
        }
    }
}


function keyPressed() {
    let satisfactoryArrow = false
    let hasFieldToMoveFirstPlayer = false
    let hasFieldToMoveSecondPlayer = false

    //slucaj da ne moze tu jer ne postoji polje
    //slucaj da je to polje zauzeto
    //slucaj da ako tu postavi pravi trojku
    //samo ga prebaci na to polje
    if (clickedField != -1 && ((firstPlayerCanJump == false && firstPlayerTurn) || (secondPlayerCanJump == false && firstPlayerTurn == false))) {
        if (keyCode === UP_ARROW && upperDownLeftRight[clickedField][0] != -1 &&
            takenFields[upperDownLeftRight[clickedField][0]] == false) {
            onKey(0)
            satisfactoryArrow = true
        }
        else if (keyCode === DOWN_ARROW && upperDownLeftRight[clickedField][1] != -1 &&
            takenFields[upperDownLeftRight[clickedField][1]] == false) {
            onKey(1)
            satisfactoryArrow = true
        }
        else if (keyCode === LEFT_ARROW && upperDownLeftRight[clickedField][2] != -1 &&
            takenFields[upperDownLeftRight[clickedField][2]] == false) {
            onKey(2)
            satisfactoryArrow = true
        }
        else if (keyCode === RIGHT_ARROW && upperDownLeftRight[clickedField][3] != -1 &&
            takenFields[upperDownLeftRight[clickedField][3]] == false) {
            onKey(3)
            satisfactoryArrow = true
        }
    }
    if (satisfactoryArrow) {
        //pogledaj da li protivnik ima mogucnost da odigra nesto
        //ako nema onda kraj partije
        //prolazimo kroz sve njegove aktivne i trazimo jednu koja ima suseda da nije -1 i da nije zauzeta
        if (firstPlayerTurn) {
            for (let hasPoint in pointsFirstPlayer)
                if (pointsFirstPlayer[hasPoint])
                    for (let point in upperDownLeftRight[hasPoint]) {
                        console.log(upperDownLeftRight[hasPoint][point]);
                        if (upperDownLeftRight[hasPoint][point] != -1 && takenFields[upperDownLeftRight[hasPoint][point]] == false)
                            hasFieldToMoveFirstPlayer = true
                    }
            if (!hasFieldToMoveFirstPlayer)
                info = "Pobeda plavog"
        }
        else {
            for (let hasPoint in pointsSecondPlayer)
                if (pointsSecondPlayer[hasPoint])
                    for (let point in upperDownLeftRight[hasPoint]) {
                        console.log(upperDownLeftRight[hasPoint][point]);
                        if (upperDownLeftRight[hasPoint][point] != -1 && takenFields[upperDownLeftRight[hasPoint][point]] == false)
                            hasFieldToMoveSecondPlayer = true
                    }
            if (!hasFieldToMoveSecondPlayer)
                info = "Pobeda crvenog"
        }
    }
}


function onKey(arrow) {
    if (firstPlayerTurn && pointsFirstPlayer[clickedField]) {
        pointsFirstPlayer[clickedField] = false
        pointsFirstPlayer[upperDownLeftRight[clickedField][arrow]] = true
        takenFields[clickedField] = false
        takenFields[upperDownLeftRight[clickedField][arrow]] = true

        if ((pointsFirstPlayer[triple[upperDownLeftRight[clickedField][arrow]][0][0]] &&
            pointsFirstPlayer[triple[upperDownLeftRight[clickedField][arrow]][0][1]]) ||
            (pointsFirstPlayer[triple[upperDownLeftRight[clickedField][arrow]][1][0]] &&
                pointsFirstPlayer[triple[upperDownLeftRight[clickedField][arrow]][1][1]])) {
            //treba da mu pojede drugi igrac
            timeToEat = true
            eatFirst = true
            info = "Crveni uzmi plavu"
        }
        else {
            info = "Plavi pomera"
        }
        clickedField = -1
        firstPlayerTurn = !firstPlayerTurn
    }
    else if (firstPlayerTurn == false && pointsSecondPlayer[clickedField]) {
        pointsSecondPlayer[clickedField] = false
        pointsSecondPlayer[upperDownLeftRight[clickedField][arrow]] = true
        takenFields[clickedField] = false
        takenFields[upperDownLeftRight[clickedField][arrow]] = true
        if ((pointsSecondPlayer[triple[upperDownLeftRight[clickedField][arrow]][0][0]] &&
            pointsSecondPlayer[triple[upperDownLeftRight[clickedField][arrow]][0][1]]) ||
            (pointsSecondPlayer[triple[upperDownLeftRight[clickedField][arrow]][1][0]] &&
                pointsSecondPlayer[triple[upperDownLeftRight[clickedField][arrow]][1][1]])) {
            //treba da mu pojede drugi igrac
            timeToEat = true
            eatFirst = false
            info = "Plavi uzmi crvenu"
        }
        else {
            info = "Crveni pomera"
        }
        clickedField = -1
        firstPlayerTurn = !firstPlayerTurn
    }
}


function newGame() {
    firstPlayerChosenPoints = 0
    secondPlayerChosenPoints = 0
    firstPlayerStep = 1
    secondPlayerStep = 1
    chosen = 0
    firstPlayerTurn = true
    timeToEat = false
    eatFirst
    clickedField = -1
    firstPlayerCanJump = false
    secondPlayerCanJump = false
    info = ""
    hasFreeFieldSecondPlayer = false
    hasFreeFieldFirstPlayer = false
    checkFirstPlayerBlocked = false
    for (let point in takenFields) {
        takenFields[point] = false
        pointsFirstPlayer[point] = false
        pointsSecondPlayer[point] = false
    }
}