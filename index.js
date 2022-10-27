var x=0;
var pos=0;
let order=[];
let inorder=[];
let score=0;
let p=3;

function start_game()
{
    x=p;
    display_seq(p);
    document.querySelector(".Display_Status").innerHTML="Your Score is "+score;
}

function display_seq(x)
{
    let s=setInterval(()=>{
        if(x==0)
        {
            clearInterval(s);
            document.querySelector(".Display_Seq").innerHTML="Enter the "+p+" digit sequence";
        }
        else
        {
            x--;
            let p=Math.floor(Math.random()*100)%10;
            order.push(p);
            console.log(order);
            
            setTimeout(()=>{
                document.querySelector(".Display_Seq").innerHTML="";
            },600);
            document.querySelector(".Display_Seq").innerHTML=p;
        }
    },1200)
}

function random_number()
{
    let number=Math.floor(Math.random()*100)%10;
    return number;
}


function check()
{
    if(order[pos]==inorder[pos])
    {
        console.log("correct");
        score=score+10;
        document.querySelector(".Display_Status").innerHTML="Correct Digit \n Your Score is "+ score;
    }
    else
    {
        document.querySelector(".Display_Seq").innerHTML="Your Score is "+score;
        console.log("incorrect");
        console.log(score);
        document.querySelector(".Display_Status").innerHTML="Incorrect Digit \n Your Score is "+score;

        order=[];
        inorder=[];
        score=0;
        x=0;
        pos=-1;
        p=3;
       return;
    }


    if(pos==p-1)
    {
        document.querySelector(".Display_Seq").innerHTML="Woah ! Next Round Begins Here ";
        p++;
        order=[];
        inorder=[];
        pos=-1;
        x=p;
        start_game();
    }
}



const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});





// functions to check whether number entered is valid or not
function number1()
{
    inorder.push(1);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number2()
{
    inorder.push(2);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number3()
{
    inorder.push(3);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number4()
{
    inorder.push(4);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number5()
{
    inorder.push(5);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number6()
{
    inorder.push(6);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number7()
{
    inorder.push(7);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number8()
{
    inorder.push(8);
    if(valid_move())
    {
       check();
       pos++;
    }
}
function number9()
{
    inorder.push(9);
    if(valid_move())
    {
       check();
       pos++;
    }
}

function number0()
{
    inorder.push(0);
    if(valid_move())
    {
       check();
       pos++;
    }
}






// when number of entered digits becomes greater than sequence
function valid_move()
{
    if(pos>=x)
    {
        console.log("invalid move");
        document.querySelector(".Display_Seq").innerHTML="Please Start your game";
        console.log("invalid");
        order=[];
        inorder=[];
        score=0;
        return false;
    }
    return true;
}