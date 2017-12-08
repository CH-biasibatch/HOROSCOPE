var signs = ["Aquarius","Pisces","Aries", "Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"]
var zodiacs = ["(rat)","(ox)","(tiger)","(rabbit)","(dragon)","(snake)","(horse)","(ram)","(monkey)","(rooster)","(dog)","(pig)"]
var messages = ["Someone close poses an offbeat but fascinating question, and you want to follow that detour for as long as you can. It's not really a problem -- as long as you make sure that all your tasks and duties for the day are cleared away first. If so, feel free to wander as far as your feet can take you. You should learn far more than you would have otherwise -- after all, it's the journey, not the destination, that matters most!",

"Change may not come easily to you (or to anyone, really), but on days like today, you're so inspired that shifts in attitude and circumstances all seem to flow with childlike ease. You're all about discovery and transformation as you explore your mind and your life. Which old feelings need better expression, or which habits need a radical overhaul? Whatever it is that requires a makeover, you can fix them up and make it look easy.",

"It can be hard to see too deeply into muddy waters -- if you try to do anything to clear them up, you're more likely to just make things worse than to get a better view. Since confusing circumstances are the order of the day, you need to try to see what's really going on before you decide on a course of action. Patience is much more valuable to you than even the best thought-out plan.",

"Sharing resources -- including ideas and emotional strength -- can help you make further progress (more than you thought possible) at a time like this. Call on your friends and pool your thoughts, or just ask for their opinions on your latest plans and projects. It's an especially great plan if you've been confused about some personal issue for a while now. Hearing your needs coming from someone else's mouth could be just what you need now.",

"With so much going on right now, the best, easiest thing for you to do is to stay put. No matter how much you want to snap into action and let loose with a flurry of phone calls and emails, try to restrain yourself. Slow down and spend the day in meditation, or maybe going for long walks and thinking deep thoughts. You know that the time for action is due soon, and that you're sure to be ready.",

"You can see beyond seeming coincidences and synchronicities straight to the true meaning of today's events. Pay close attention to what your instincts are telling you, especially when they come from your dreams. New information is coming your way from all directions, but not from traditionally reliable sources. Open your mind even farther and learn to follow your gut -- there's no way that you can regret it.",

"Your flair for drama should come in handy today when it comes to telling your story and getting people to see their common interests. You've got something special that makes your words just a bit more compelling than what people are used to hearing. In fact, you're having so much fun that you want to find a way to keep it up all night long. Karaoke or a lively party might be perfect!",

"You and someone close are working at cross-purposes today. You know exactly how you want them to be, and it's mighty frustrating that they seem to be falling short. On the other hand, they just think you're more critical than caring whenever the two of you manage to see each other. Give a little -- you can't make anyone be someone they're not. Learn to deal with them exactly as they are.",

"A surprising new opportunity pops up and lets you rethink your current surroundings. It may turn your schedule upside-down, but if you embrace the change as a means to toss out old habits, you should make serious progress. It's easy to just say you don't have time to think things through, but why not take this chance to prove yourself? Accept freely and see where it takes you -- it might evolve into something life-affirming.",

"Creativity is foremost in your heart and soul right now, so make sure you carve out some time to spend on your own. Give in to the impulse to doodle, take a nice long walk, indulge in some yoga or just space out -- whatever it takes to refresh your perspective and stimulate the right side of your brain! You're quite good at making all the pieces come together in some new, cool way, so exercise that talent as much as you can.",

"Have some faith that larger forces are at work in your life. It may be hard for you to place your trust in the universe when it feels like you need to go for something (or someone) more tangible, but be assured that it's all coming together behind the scenes. The right answer should appear at just the right time -- all you have to do is make sure you recognize it and act at the right time.",

"You may question how you can best help the people around you today, but don't give in to despair. You always look for ways to benefit those less fortunate, whether you want to contribute to your community in a new way or just take your current involvement up a notch. Look into all of your options so that you can make a real difference."]


function getHoroscope() {

    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    console.log(month);
    console.log(day);

    var sign = determineSign(month, day);
    document.getElementById("signDiv").innerHTML = signs[sign];

    var name = document.getElementById("name").value;
    console.log(name);
    document.getElementById("messageDiv").innerHTML = "Hello " + name + "! " + messages[sign];

    var year = parseInt(document.getElementById("year").value);
    console.log(year);
    var zodiac = chineseZodiac(year);
    document.getElementById("zodiacDiv").innerHTML = zodiacs[zodiac];

    document.getElementById("imageHoroscope").innerHTML = "<img src='img/" + getImage(sign) + "'>";
}

function getImage(sign){
    var imageIndex=["aquarius.jpg","pisces.png","aries.jpg","taurus.jpg", "gemini.jpg","cancer.jpg","leo.jpg","virgo.png","libra.jpg","scorpio.jpg","sagittarius.png","capricorn.jpg"];
    console.log(imageIndex[sign]);
    return imageIndex[sign];
}

function fixMonth(month){
    var result = "";
    var daysInMonths = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    for(var i = 1; i <= daysInMonths[month]; i ++){
        result += "<option value =" + i + ">" + i + "</option>";
    }
    document.getElementById("day").innerHTML = result;
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

function chineseZodiac(year){
    if(year==1||year==13||year==25||year==37||year==49){
        return 0;
    }
    if(year==2||year==14||year==26||year==38||year==50){
        return 1;
    }
    if(year==3||year==15||year==27||year==39||year==51){
        return 2;
    }
    if(year==4||year==16||year==28||year==40||year==52){
        return 3;
    }
    if(year==5||year==17||year==29||year==41||year==53){
        return 4;
    }
    if(year==6||year==18||year==30||year==42||year==54){
        return 5;
    }
    if(year==7||year==19||year==31||year==43||year==55){
        return 6;
    }
    if(year==8||year==20||year==32||year==44||year==56){
        return 7;
    }
    if(year==9||year==21||year==33||year==45||year==57){
        return 8;
    }
    if(year==10||year==22||year==34||year==46||year==58){
        return 9;
    }
    if(year==11||year==23||year==35||year==47||year==59){
        return 10;
    }
    if(year==12||year==24||year==36||year==48||year==60){
        return 11;
    }
}
