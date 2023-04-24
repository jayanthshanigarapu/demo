function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var day=date.getDay();
    var dd=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    var fullTime=`${hh}:${mm}:${ss}:${am_pm}`
    document.getElementById("Time").innerHTML=fullTime;
    if(mo==0)
    {
        mo=="January"
    }
    else if(mo==1)
    {
        mo="February"
    }
    else if(mo==2)
    {
        mo="March"
    }
    else if(mo==3)
    {
        mo="April"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="June"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="August"
    }
    else if(mo==8)
    {
        mo="September"
    }
    else if(mo==9)
    {
        mo="October"
    }
    else if(mo==10)
    {
        mo="November"
    }
    else{
        mo="December"
    }
    var fulldate=dd+"/"+mo+"/"+yy
    document.getElementById("Date").innerHTML=fulldate;

    switch(1)
    {
      case 0:
        day="Sunday"
        document.body.style.backgroundImage="url(sun.jpg)"
        break;
        case 1:
            day="Monday"
            document.body.style.backgroundImage="url(mon.jpg)"
        break;
        case 2:
            day="Tuesday"
            document.body.style.backgroundImage="url(tue.jpg)"
        break;
        case 3:
            day="Wednesday"
            document.body.style.backgroundImage="url(wed.jpg)"
        break;
        case 4:
            day="Thursday"
            document.body.style.backgroundImage="url(thu.jpg)"
        break;
        case 5:
            document.body.style.backgroundImage="url(fri.jpg)"
        break;
        case 6:
            document.body.style.backgroundImage="url(sat.jpg)"
        break;
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    var updateTheTime=setTimeout(clock,1000)

    
}
function greet()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="Good Morning"
        document.getElementById("bgvid").src="morning.mp4"
    }
    else if(hh>12 && hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="Good Afternoon"
        document.getElementById("bgvid").src="afternoon.mp4"
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="100px"
    }
    else if(hh>16 && hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="Good Evening"
        document.getElementById("bgvid").src="evening.mp4"
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="-100px"
    }
    else{
        document.getElementById("GreetMessage").innerHTML="Good Night"
        document.getElementById("GreetMessage").style.color="white"
        document.getElementById("bgvid").src="night.mp4"
        document.getElementById("bgvid").style.width="100%"
        document.getElementById("bgvid").style.bottom="-100px"
    }
}
greet()
function closeWind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closeWind,5000);