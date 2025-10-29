let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let color = ["pinkk" , "greenn" ,"orangee" , "bluee"]; 

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game started..");
        started = true;

        levelup();

    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash"); 
    } , 200 );
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randno = Math.floor(Math.random() *  4);
    let randcolor = color[randno];
    let randbtn = document.querySelector(`.${randcolor}`); 
    gameseq.push(randcolor);
    console.log(gameseq);
    // console.log(randno);
    // console.log(randcolor);
    // console.log(randbtn);
    btnflash(randbtn);

}
function btnflashuser(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash"); 
    } , 200 );
}

function truefalse(idx){

        if(userseq[idx] == gameseq[idx]){
            // flashes  the green thinng after each click 


            // let bdy = document.querySelector("body");
            // bdy.classList.add("correct")
            // setTimeout(function(){
            //     bdy.classList.remove("correct")
            // } , 100);

            if(userseq.length == gameseq.length){
                setTimeout(levelup() , 1000) ; 
            }
        
        }else{
            h2.innerHTML = (`GAME OVER your Score was <b style="color: red;" >${level} </b> <br> press any key to start!! `);
            
            let bdy = document.querySelector("body");
            bdy.classList.add("incorrect")
            setTimeout(function(){
                bdy.classList.remove("incorrect")
            } , 100);

            let max = Math.max(0,level);
            let h3 = document.querySelector("h3");
            h3.innerHTML = (`Highest Score is <span style="color: orangered;">${max} </span>`);
            
            // restart on any key press
            reset();
        }
    
}

function btnpress(){
    let btn = this;
    btnflashuser(btn);
    let user = btn.getAttribute("id");
    userseq.push(user);
    truefalse(userseq.length -1 );

}

let allbnts  = document.querySelectorAll(".btn");

for(btns of allbnts){
     btns.addEventListener("click" , btnpress)
}


function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}