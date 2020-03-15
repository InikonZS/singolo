var ton=document.getElementById('tv1');
var tof=document.getElementById('tv1-off');
var ts=0;
ton.addEventListener("click",()=>{ton.style="display:none"; tof.style="";});
tof.addEventListener("click",()=>{tof.style="display:none"; ton.style="";});

var tonh=document.getElementById('tv2');
var tofh=document.getElementById('tv2-off');
var tsh=0;
tonh.addEventListener("click",()=>{tonh.style="display:none"; tofh.style="";});
tofh.addEventListener("click",()=>{tofh.style="display:none"; tonh.style="";});

var slyderLB=document.getElementById('slyderLeftButton');
var slyderRB=document.getElementById('slyderRightButton');
var slyder=[];
slyder.push(document.getElementById('slide1'));
slyder.push(document.getElementById('slide2'));
slyder.push(document.getElementById('slide3'));
sWidth=1020;
var cs=0;

function getSliderFunc(step,dur){
    var st=step;
    var slide=()=>{ 
        cs=(cs+st);
        if (cs<0) {cs=slyder.length-1;}
        if (cs>=slyder.length){cs=0;}
        for (let i=0; i<slyder.length; i++){
            slyder[i].style="transition-duration: "+dur+"ms; transform: translate3d("+(sWidth*(cs-i))+"px, 0px, 0px);"    
        }
    };
    return slide;
}

getSliderFunc(0,0)();
slyderLB.addEventListener("click",getSliderFunc(1,500));
slyderRB.addEventListener("click",getSliderFunc(-1,500));
