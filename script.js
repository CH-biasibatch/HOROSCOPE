var signs = ["Aquarius","Pisces","Aries", "Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"]
var messages = ["Your significant other may be expected at your house tonight but not show up, and may not even communicate with you. This might cause you to be understandably worried. Don't make yourself crazy. All signs are that your partner is OK. Traffic is the likeliest culprit keeping the two of you apart. Your friend may show up a lot later than expected.",
"Someone you need to contact for information may be temporarily unavailable. You might have to try to find whatever you need somewhere else. This could be difficult. You could go in circles as you're referred to someone who refers you back to the person you can't reach. You might have to put off this problem and work on something else.",
"You're probably doing better financially than you have for a long time, but you still might not have reached some of the monetary goals you'd set. This could be on your mind today. If you aren't careful, you could work yourself into a frenzy. It might be more productive to calmly find a way to progress more quickly. You can do it.",
"Your parents or another couple close to you may be quarreling, and you might be expected to take sides. Don't do it! It's better to stand aside and let them work it out for themselves while reminding them that you care for them both. The best you can do under these circumstances is try to help mediate a compromise, but finding a win/win situation could be hard.",
"Someone you know well could be saying one thing to you while your intuition tells you another. Your friend is probably troubled by something embarrassing. Don't press for information. It will come out in good time. If you want to help, distract your friend by taking him or her out to dinner or a movie. This should take your minds off the trouble for a while.",
"A female friend may seem to be upset with you and might not admit it. If you ask what's wrong, she'll probably say, \"Nothing.\" Use your intuition to deduce what's bothering her and then try to make it up to her in some way. You might want to reevaluate your friendship. She may be too uncommunicative. The term acquaintance might suit her better than friend.",
"Emotions might run high with today's astral energies. Your friends may be snapping at each other and even getting into quarrels. Stay out of it! It's best to concentrate on getting the problem taken care of and take away the reason for the tension rather than try to control it. Hang in there.",
"Some people with whom you spend a lot of time could get into a debate over spiritual or metaphysical concepts. This could make you and everyone else very uncomfortable. This isn't the time to try to mediate. Both parties involved are too attached to their points of view. It's best just to nip it in the bud and ask them not to discuss it now. Change the subject!",
"Disagreements and hot tempers could hinder the completion of an important project. There may be a detail to the plan that some people just can't agree on. It's best to attempt to rework it rather than try to bring everyone around to the current point of view. Everyone is too tense to listen to reason. Instead, hear what they have to say and act accordingly. Remain objective!",
"You might have gotten home later last night than is good for you, and you may feel a little tired and dragged out. Take your vitamins and don't use coffee as a stimulant. Take a brisk walk to clear your head and get the endorphins going. It will lift your spirits. This will enable you to function as sharply as you normally do. Watch out that those late nights don't become a habit!",
"Your emotions may cloud your intuition today. You might not pick up on the thoughts and feelings of others the way you normally do, and you could feel at a disadvantage. This is only a temporary condition. Today you'll just have to rely on logic. This could be helpful in the end. Intuition is at its most useful when it's combined with intellect.",
"Today you might feel especially passionate and desirous of some time alone with your significant other. However, your partner may be detained by other responsibilities or might not be in the mood. This could be frustrating, but don't get angry. You aren't being rejected, although it might seem that way. Make a date for tomorrow. Better late than never!"]

function getHoroscope() {
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    console.log(month);
    console.log(day);
    var sign = determineSign(month, day);
    document.getElementById("signDiv").innerHTML = signs[sign];
    document.getElementById("messageDiv").innerHTML = messages[sign];

}


function determineSign(month,day){

    if(month==1 && day>=20 || month==2 && day<=18){
        return  0;
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

