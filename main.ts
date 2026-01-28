function Show_XY (xx: number, yy: number) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let Ys = 0; Ys <= 4; Ys++) {
        for (let Xs = 0; Xs <= 4; Xs++) {
            led.plotBrightness(Xs, Ys, 10 * Find_Spot(Xs + xx, Ys + yy))
        }
    }
}
function Find_Spot (Xl: number, Yl: number) {
    return Uni[Xl + Yl * D]
}
function BuildUni (Diam: number) {
    Uni = []
    for (let index = 0; index < Diam * Diam; index++) {
        if (6 < randint(0, 10)) {
            Uni.push(randint(1, 9))
        } else {
            Uni.push(0)
        }
    }
}
let Uni: number[] = []
let D = 0
D = 20
BuildUni(D)
let Y = 0
let X = 0
Show_XY(X, Y)
