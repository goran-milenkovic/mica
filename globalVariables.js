let firstPlayerChosenPoints = 0
let secondPlayerChosenPoints = 0
let firstPlayerStep = 1
let secondPlayerStep = 1
let chosen = 0
let firstPlayerTurn = true
let width = 650;
let height = 650;
let timeToEat = false
let eatFirst
let clickedField = -1
let firstPlayerCanJump = false
let secondPlayerCanJump = false
let info = ""
let hasFreeFieldSecondPlayer = false
let hasFreeFieldFirstPlayer = false
let checkFirstPlayerBlocked = false



let pointsFirstPlayer = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false
}
let pointsSecondPlayer = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false
}
let points = {
    0: [width * 0.1, height * 0.1],
    1: [width * 0.1, height * 0.5],
    2: [width * 0.1, height * 0.9],
    3: [width * 0.2, height * 0.2],
    4: [width * 0.2, height * 0.5],
    5: [width * 0.2, height * 0.8],
    6: [width * 0.3, height * 0.3],
    7: [width * 0.3, height * 0.5],
    8: [width * 0.3, height * 0.7],
    9: [width * 0.5, height * 0.1],
    10: [width * 0.5, height * 0.2],
    11: [width * 0.5, height * 0.3],
    12: [width * 0.5, height * 0.7],
    13: [width * 0.5, height * 0.8],
    14: [width * 0.5, height * 0.9],
    15: [width * 0.7, height * 0.3],
    16: [width * 0.7, height * 0.5],
    17: [width * 0.7, height * 0.7],
    18: [width * 0.8, height * 0.2],
    19: [width * 0.8, height * 0.5],
    20: [width * 0.8, height * 0.8],
    21: [width * 0.9, height * 0.1],
    22: [width * 0.9, height * 0.5],
    23: [width * 0.9, height * 0.9]
}
let takenFields = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false
}

let upperDownLeftRight = {
    0: [-1, 1, -1, 9],
    1: [0, 2, -1, 4],
    2: [1, -1, -1, 14],
    3: [-1, 4, -1, 10],
    4: [3, 5, 1, 7],
    5: [4, -1, -1, 13],
    6: [-1, 7, -1, 11],
    7: [6, 8, 4, -1],
    8: [7, -1, -1, 12],
    9: [-1, 10, 0, 21],
    10: [9, 11, 3, 18],
    11: [10, -1, 6, 15],
    12: [-1, 13, 8, 17],
    13: [12, 14, 5, 20],
    14: [13, -1, 2, 23],
    15: [-1, 16, 11, -1],
    16: [15, 17, -1, 19],
    17: [16, -1, 12, -1],
    18: [-1, 19, 10, -1],
    19: [18, 20, 16, 22],
    20: [19, -1, 13, -1],
    21: [-1, 22, 9, -1],
    22: [21, 23, 19, -1],
    23: [22, -1, 14, -1]
}

let triple = {
    0: [[1, 2], [9, 21]],
    1: [[0, 2], [4, 7]],
    2: [[0, 1], [14, 23]],
    3: [[4, 5], [10, 18]],
    4: [[1, 7], [3, 5]],
    5: [[3, 4], [13, 20]],
    6: [[7, 8], [11, 15]],
    7: [[1, 4], [6, 8]],
    8: [[6, 7], [12, 17]],
    9: [[0, 21], [10, 11]],
    10: [[3, 18], [9, 11]],
    11: [[6, 15], [9, 10]],
    12: [[8, 17], [13, 14]],
    13: [[5, 20], [12, 14]],
    14: [[2, 23], [12, 13]],
    15: [[6, 11], [16, 17]],
    16: [[15, 17], [19, 22]],
    17: [[8, 12], [15, 16]],
    18: [[3, 10], [19, 20]],
    19: [[16, 22], [18, 20]],
    20: [[5, 13], [18, 19]],
    21: [[0, 9], [22, 23]],
    22: [[16, 19], [21, 23]],
    23: [[2, 14], [21, 22]]
}