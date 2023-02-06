function setup(){ 
    canvas=createCanvas(280,280);
    canvas.position(450,350);
    background("white");
}

function clearCanvas(){
background("white")
}

array_1=['book','paper','pen','bottle']
random_no=Math.floor((Math.random()*array_1.length)+1);
console.log(random_no);
Element_of_array=array_1[random_no]
console.log(Element_of_array);

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function check_sketch(){
    timer_counter++;
    document.getElementById("time").innerHTML="Timer "+timer_counter;
    console.log(timer_counter)
    if(timer_counter>400){
        timer_counter=0;
        timer_check="Completed"
    }
    if(timer_check=="Completed" | answer_holder=="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    random_no=Math.floor((Math.random()*array_1.length)+1);
    console.log(array_1[random_no]);
    Element_of_array=array_1[random_no];
    document.getElementById("sketch_name").innerHTML='Sketch to be drawn'+Element_of_array;
    
}

function draw(){
    check_sketch();
    if(draw_sketch==Element_of_array){
        answer_holder="set";
        score++;
        document.getElementById("score").innerHTML="Score: "+score;

    }
}