var gen1amount = 0, gen1price = 15, gen1baseprice = 15, credit = 0, cps = 0;

// This function adds a point to the game credit everytime the element with id "click" is clicked.
function update(){
    click.onclick = function() {
        credit = credit + 1
    };
// This function enables the generator to be clicked if the credit accumulated is greater than or equal to to the gen1price. In which case the credit will be reduced by the gen1price and the gen1amount will be increased by one. Clicks per second will increase by 1, as well. The new credit is whatever credit is accumulated by the amount of clicks plus the clicks per second earned through the generator. The gen1price also increases by 1.15 times the new gen1amount.
    generator1.onclick = function() {
    if (credit >= gen1price) {
        credit = credit - gen1price;
        gen1amount = gen1amount + 1;
        cps = cps + 1;
        gen1price = gen1baseprice * (Math.pow(1.15, gen1amount));
        };
    };
    credit = credit + (cps/60);
};
// This converts the values that were incremented throuhgout the game into strings with zero decimal points.
function draw(){
    creditPerSecond.value = cps.toFixed(0);
    creds.value = credit.toFixed(0);
    generator1.value = gen1price.toFixed(0);
    generator1amount.value = gen1amount.toFixed(0);
};
// This calls the main game loop to call the update and draw functions everytime it loops.

var mainloop = function() {update(), draw()}; 
setInterval(mainloop, 16);
 