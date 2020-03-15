class SelItem {
    constructor (parentNode, text) {
        this.el=document.createElement('div');
        this.tn=document.createTextNode(text);
        this.el.appendChild(this.tn);
        parentNode.appendChild(this.el);
        this.selected=false;
        this.el.className="container_item sel";
        this.el.addEventListener('click',()=>{
            this.selected=!this.selected;
            if (this.selected) {this.el.className="container_item sel ci_selected";}
            else{this.el.className="container_item sel";}
        });
    }
}

class SelMenu {
    constructor (parentNode, items) {
        this.wrp=document.createElement('div');
        this.items=[];
        this.selected=0;
        for (let i=0; i<items.length; i++){
            let el=document.createElement('div');
            let tn=document.createTextNode(items[i]);
            el.appendChild(tn);
            parentNode.appendChild(el);
            el.my_selected=false;
            el.className="container_item sel";
            this.items.push(el);
            this.wrp.appendChild(el);
        }
        this.wrp.className="container sel-menu";
        parentNode.appendChild(this.wrp);
        
        this.wrp.addEventListener('click',(e)=>{
            for (let i=0; i<this.items.length; i++){
                this.items[i].my_selected=false;
                //console.log(e);
                e.target.my_selected=true;
                if (this.items[i].my_selected) {this.items[i].className="container_item sel ci_selected";}
                else{this.items[i].className="container_item sel";}
            }
            
        });
    }
}
var pfme=document.getElementById('pfm');
let menn=new SelMenu(pfme,["All","Web Design","Graphic Design","Artwork"]);

/*var pm=document.getElementById('portfolio_menu');
var pm_items=[];
pm_items.push(new SelItem(pm,"All"));
pm_items.push(new SelItem(pm,"Web Design"));
pm_items.push(new SelItem(pm,"Graphic Design"));
pm_items.push(new SelItem(pm,"Artwork"));
*/

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
