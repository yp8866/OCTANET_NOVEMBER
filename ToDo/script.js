gsap.to("#nav",{
    backgroundColor: "#000",
    duration:1.5,
    height: "75px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3

    }
})


gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:5
    }
})


var cursor=document.getElementById("cursor");
var cursorblur=document.getElementById("cursorblur");
document.addEventListener("mousemove",function(dets){
    // console.log(dets.x,dets.y);
    cursor.style.left = dets.x -7 + "px";
    cursor.style.top = dets.y- 7 + "px";
    cursorblur.style.left = dets.x - 100 + "px";
    cursorblur.style.top = dets.y -100 + "px";

})

const tasktodo=document.getElementById('tasktodo');
const placeholder=document.getElementById("placeholder");
tasktodo.addEventListener("focusin",()=>{
    placeholder.style.fontSize=15+"px";  
    placeholder.style.top=8+"px";  
});
tasktodo.addEventListener("focusout",()=>{
    if(tasktodo.value==""){
        placeholder.style.fontSize=25+"px";  
        placeholder.style.top=20+"px";  
    }
});


const submitbtn=document.getElementById("submitbtn");
// global variable to give ids to the tasks


submitbtn.addEventListener("click",()=>{
    var data=tasktodo.value;
    if(data!=""){
        var priority=document.getElementById('prty').value;
        var newnode=document.createElement("div");
        newnode.setAttribute("class","tasklist-task");
        newnode.innerHTML=`
        <div class="tasklist-task-description">${data}</div>
                    <button type="submit" class="taskdone" onclick="taskisdone(this)"><i class="fa fa-check" aria-hidden="true"></i></button>
                    <button type="submit" class="taskremove" onclick="tasktoremove(this)"><i class="fa fa-trash" aria-hidden="true"></i></button>
        `;

        if(priority==1){
            document.getElementById('tasklist-1').insertBefore(newnode,document.getElementById('tasklist-1').children[0]);
            
        }
        else if(priority==2){
            document.getElementById('tasklist-2').insertBefore(newnode,document.getElementById('tasklist-2').children[0]);
            
        }
        else{
            document.getElementById('tasklist-3').insertBefore(newnode,document.getElementById('tasklist-3').children[0]);

        }
        tasktodo.value="";
    }
    tasktodo.focus();
});



function taskisdone(ptr){
    var parent=ptr.closest(".tasklist-task");
    parent.style.backgroundColor="darkgreen";
    parent.removeChild(ptr);
}

function tasktoremove(ptr){
    var parent1=ptr.closest(".tasklist-task");
    // parent1.setAttribute("class","removing-task");
    parent1.classList.add("removing-task");
    setTimeout(()=>{
        parent1.remove();

    },2000);
    

}