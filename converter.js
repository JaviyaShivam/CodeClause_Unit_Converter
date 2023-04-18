// 1. Length
function calc_length(){
    var input = parseFloat(document.getElementById("input_length").value);
    var unitfrom = document.getElementById("unitfrom_length").value;
    var unitto = document.getElementById("unitto_length").value;

    if(unitfrom == "kilometer"){
        input *= 1000;
    }else if(unitfrom == "centimeter"){
        input /= 100;
    }
    else if(unitfrom == "millimeter"){
        input /= 1000;
    }
    else if(unitfrom == "micrometer"){
        input /= 1000000;
    }
    else if(unitfrom == "mile"){
        input *= 1609.34;
    }
    else if(unitfrom == "foot"){
        input /= 3.281;
    }
    else if(unitfrom == "inch"){
        input /= 39.37;
    }
    else if(unitfrom == "yard"){
        input /= 1.094;
    }


    if(unitto == "kilometer"){
        input /= 1000;
    }else if(unitto == "centimeter"){
        input *= 100;
    }
    else if(unitto == "millimeter"){
        input *= 1000;
    }
    else if(unitto == "micrometer"){
        input *= 1000000;
    }
    else if(unitto == "mile"){
        input /= 1609.34;
    }
    else if(unitto == "foot"){
        input *= 3.281;
    }
    else if(unitto == "inch"){
        input *= 39.37;
    }
    else if(unitto == "yard"){
        input *= 1.094;
    }

    document.getElementById("result_length").value = input;
}


// 2.Weight
function calc_weight(){
    var input = parseFloat(document.getElementById("input_weight").value);
    var unitfrom = document.getElementById("unitfrom_weight").value;
    var unitto = document.getElementById("unitto_weight").value;

    if(unitfrom == "milligram"){
        input /= 1000;
    }else if(unitfrom == "kilogram"){
        input *= 1000;
    }
    else if(unitfrom == "pound"){
        input *= 453.592;
    }
    else if(unitfrom == "ounce"){
        input *= 28.3495;
    }
    else if(unitfrom == "carrat"){
        input /= 5;
    }
    else if(unitfrom == "metricton"){
        input *= 1000000;
    }
    else if(unitfrom == "longton"){
        input *= 1016046.9;
    }else if(unitfrom == "shortton"){
        input *= 907200;
    }


    if(unitto == "milligram"){
        input *= 1000;
    }else if(unitto == "kilogram"){
        input /= 1000;
    }
    else if(unitto == "pound"){
        input /= 453.592;
    }
    else if(unitto == "ounce"){
        input /= 28.3495;
    }
    else if(unitto == "carrat"){
        input *= 5;
    }
    else if(unitto == "metricton"){
        input /= 1000000;
    }
    else if(unitto == "longton"){
        input /= 1016046.9;
    }else if(unitto == "shortton"){
        input /= 907200;
    }

    document.getElementById("result_weight").value = input;
}

// 3.Temperature
function calc_temp(){
    var input = parseFloat(document.getElementById("input_temp").value);
    var unitfrom = document.getElementById("unitfrom_temp").value;
    var unitto = document.getElementById("unitto_temp").value;

    if(unitfrom == "kelvine"){
        input -= 273.15;
    }else if(unitfrom == "fahrenheit"){
        input = (input - 32) / 1.8;
    }


    if(unitto == "kelvine"){
        input += 273.15;
    }else if(unitto == "fahrenheit"){
        input = (input * 1.8) + 32;
    }
    document.getElementById("result_temp").value = input;
}

// 4. Time
function calc_time(){
    var input = parseFloat(document.getElementById("input_time").value);
    var unitfrom = document.getElementById("unitfrom_time").value;
    var unitto = document.getElementById("unitto_time").value;

    if(unitfrom == "millisecond"){
        input /= 1000;
    }else if(unitfrom == "microsecond"){
        input *= 1000000;
    }
    else if(unitfrom == "minute"){
        input *= 60;
    }
    else if(unitfrom == "hour"){
        input *= 3600;
    }
    else if(unitfrom == "day"){
        input *= 86400;
    }
    else if(unitfrom == "week"){
        input *= 604800;
    }
    else if(unitfrom == "month"){
        input *= 2628000;
    }else if(unitfrom == "year"){
        input *= 31556952;
    }


    if(unitto == "millisecond"){
        input *= 1000;
    }else if(unitto == "microsecond"){
        input /= 1000000;
    }else if(unitto == "minute"){
        input /= 60;
    }else if(unitto == "hour"){
        input /= 3600;
    }else if(unitto == "day"){
        input /= 86400;
    }else if(unitto == "week"){
        input /= 604800;
    }else if(unitto == "month"){
        input /= 2628000;
    }else if(unitto == "year"){
        input /= 31556952;
    }

    document.getElementById("result_time").value = input;
}