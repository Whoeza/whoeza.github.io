function tip_gen() {
    
    amount = document.getElementById('input_bill_amt').value;
    tip_pct = document.getElementById('input_tip_pct').value;
    tip_value = amount * tip_pct / 100;

    debug = true;
    if (debug) {
        console.log(" ~~~ Debug info begin ~~~ ");
        console.log(amount);
        console.log(tip_pct);
        console.log(tip_value);
        console.log(" ~~~ Debug info end ~~~ ")
    }

    document.getElementById("output_tip").setAttribute("value", tip_value);
}