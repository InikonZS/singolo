class Menu{
    constructor (menuSelector, itemSelector, itemCSSClass, itemSelectedCSSClass, onSelect){
        this.menu=document.querySelector(menuSelector);
        this.items=[...document.querySelectorAll(itemSelector)];
        this.selectedCSSClass=itemSelectedCSSClass;
        this.itemCSSClass=itemCSSClass;
        this.currentItem=this.items[0];
        this.onSelect=onSelect;

        this.menu.addEventListener('click', (e)=>{
            if ((e.target.classList.contains(this.itemCSSClass))||(this.itemCSSClass=='')){  
                this.select(e.target);
            }    
        });

        this.select();
    }

    select(item){
        var reselect=false;
        if (item) {
            if (this.currentItem==item) {
                reselect=true
            } else {
                this.currentItem=item;
            }
        }
        if (this.currentItem){
            this.items.forEach((it)=>{
                if (it==this.currentItem){
                    it.classList.add(this.selectedCSSClass);
                    if (this.onSelect) {
                        this.onSelect(reselect);
                    }
                } else {
                    it.classList.remove(this.selectedCSSClass);
                }
            });
        }
    } 
}

var portfolioGallery = new Menu(
    ".portfolio_grid", 
    ".portfolio_grid_item img", 
    "", 
    "portfolio_grid_img_selected"
);

var portfolioMenu = new Menu(
    ".portfolio_menu", 
    ".portfolio_menu_item", 
    "portfolio_menu_item", 
    "portfolio_menu_item_selected", 
    (reselect)=>{
        if (!reselect){
            galleryShuffle();
            setTimeout(() => {
                portfolioGallery = new Menu(
                    ".portfolio_grid", 
                    ".portfolio_grid_item img", 
                    "", 
                    "portfolio_grid_img_selected"
                );
            },2000);
        }
    }
);


function makeGalleryItem(src){
    var el=document.createElement('div');
    el.className="portfolio_grid_item";
    var img=document.createElement('img');
    img.src=src;
    img.alt="";
    el.appendChild(img);
    return el; 
}

function galleryClear(){
    var grid=document.querySelector(".portfolio_grid");
    let items=[...grid.querySelectorAll('.portfolio_grid_item')];
    items.forEach((it)=>{
        let w=document.documentElement.clientWidth;
        let h=document.documentElement.clientHeight;
        it.style='transition-property: transform; '+
        'transition-duration:'+1000+'ms;'+
        'transform: rotateZ('+300*(Math.random()-0.5)+'deg)'+
        'scale3d(0.01, 0.01, 0.01)'+
        'rotateY('+300*(Math.random()-0.5)+'deg)'+
        'rotateX('+300*(Math.random()-0.5)+'deg)'+
        'translate3d('+w*(Math.random()-0.5)+'px, '
                        +h*(Math.random()-0.5)+'px, '
                        +100*(Math.random()-0.5)+'px '+
        ')';    
    })
}

function galleryShuffle(){
    galleryClear();
    setTimeout(() => {
        var grid=document.querySelector(".portfolio_grid");
        grid.innerHTML="";
        let rnd=[1,2,3,4,5,6,7,8,9,10,11,12].sort(()=>2*(Math.random()-0.5));
        for (let i=0; i<12; i++){
            //let rand=Math.trunc(Math.random()*12)+1;
            let el=makeGalleryItem("assets/portfolio/i"+(rnd[i])+".png");
            grid.appendChild(el);
            let w=document.documentElement.clientWidth;
            let h=document.documentElement.clientHeight;
            el.style='transition-property: transform; '+
            'transition-duration:'+0+'ms;'+
            'transform: rotateZ('+300*(Math.random()-0.5)+'deg)'+
            'scale3d(0.01, 0.01, 0.01)'+
            'rotateY('+300*(Math.random()-0.5)+'deg)'+
            'rotateX('+300*(Math.random()-0.5)+'deg)'+
            'translate3d('+w*(Math.random()-0.5)+'px, '
                            +h*(Math.random()-0.5)+'px, '
                            +100*(Math.random()-0.5)+'px '+
            ')'; 
            setTimeout(() => {
                el.style='transition-property: transform;'+
                'transition-duration:'+1400+'ms;'+
                'transform: scale3d(1) rotateZ(0deg) rotateY(0deg) rotateX(0deg) translate3d(0px, 0px, 0px);'; 
            }, 200);
        }
    }, 1000);
}

