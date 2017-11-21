var signs = ["aquarius","pisces","aries", "taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius","capricorn"]


function getHoroscope() {
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    console.log(month);
    console.log(day);
    var sign = determineSign(month,day);
    document.getElementById("signDiv").innerHTML = signs[sign];
}


function determineSign(month,day){

    if(month==1 && day>=20 || month==2 && day<=18){
        return 0;
    }
    if(month==2 && day>=19 || month==3 && day<=20){
        return 1;
    }
    if(month==3 && day>=21 || month==4 && day<=20){
        return 2;
    }
    if(month==4 && day>=20 || month==5 && day<=20){
        return 3;
    }
    if(month==5 && day>=21 || month==6 && day<=20){
        return 4;
    }
    if(month==6 && day>=21 || month==7 && day<=22){
        return 5;
    }
    if(month==7 && day>=23 || month==8 && day<=22){
        return 6;
    }
    if(month==8 && day>=23 || month==9 && day<=22){
        return 7;
    }
    if(month==9 && day>=23 || month==10 && day<=22){
        return 8;
    }
    if(month==10 && day>=23 || month==11 && day<=21){
        return 9;
    }
    if(month==11 && day>=22 || month==12 && day<=21){
        return 10;
    }
    if(month==12 && day>=22 || month==1 && day<=19){
        return 11;
    }
}