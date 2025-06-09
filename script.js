var no=0;
var gameplaying="player";
console.log(gameplaying)
function put(ele){
    if(gameplaying!=="win"){
        if(ele.innerText==""){
            if(no%2==0){
                ele.innerText="X";
            }
            else if(no%2==1){
                ele.innerText="O";
            }
            analysis();
            no++;
            
    }
        console.log("hi",no);

    }
}
function analysis(){
    datas=[document.getElementById("a1"),document.getElementById("a2"),document.getElementById("a3"),document.getElementById("b1"),document.getElementById("b2"),document.getElementById("b3"),document.getElementById("c1"),document.getElementById("c2"),document.getElementById("c3")];
    values=datas.map((ele)=>ele.innerText);
    var winfun=document.createElement("div");
    winfun.id="winfunction";
    var [aa,ab,ac,ba,bb,bc,ca,cb,cc]=values;
    console.log(values);
    
   if((aa!=="")&&(aa==ab)&&(ab==ac)){
    gameplaying="win";
   }
   else if((ba!=="")&&(ba==bb)&&(bb==bc)){
   gameplaying="win";
   }
   else if((ca!=="")&&(ca==cb)&&(cb==cc)){
    gameplaying="win";
   }
   else if((aa!=="")&&(aa==ba)&&(ba==ca)){
    gameplaying="win";
   }else if((ab!=="")&&(ab==bb)&&(bb==cb)){
    gameplaying="win";
   }
   else if((ac!=="")&&(ac==bc)&&(bc==cc)){
    gameplaying="win";
   }
   else if((aa!=="")&&(aa==bb)&&(bb==cc)){
    gameplaying="win";
   }
   else {
    gameplaying="draw"
   }

  winplayer=document.getElementById("winplayer");
 console.log(gameplaying);
 if(gameplaying=="win"){
    if(no%2==0){
        winfun.innerText="X win";
        winplayer.appendChild(winfun);
    }
    else if(no%2==1){
        winfun.innerText="O win";
        winplayer.appendChild(winfun);
    }
    else{
        winplayer.innerText="draw";
    }
 }
}
function resetGame(){
    let boxes = document.querySelectorAll(".row div");
    boxes.forEach(box => box.innerText = "");
    document.getElementById("winplayer").innerText = "";
    no = 0;
    gameplaying = "player";
}