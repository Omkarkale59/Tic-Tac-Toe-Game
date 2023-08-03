console.log("welcome to Tic Tac Toe")

let audioturn = new Audio("ding.mp3.mpeg")
let gameover = new Audio("gameover.mp3.mpeg")
let turn = "X"
let Isgameover = false;

function changeturn() {
    return turn === "X"? "0": "X"

}
// function to check for win
const checkwin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins=[

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    
    ]
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '') ){

            document.querySelector('.info').innerText= boxtext[e[0]].innerText + " won "
            gameover = true
            document.querySelector(".imgBox").getElementsByTagName('img')[0].style.width ="200px"
        
        }

    
    })

}
// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=> {
            if (boxtext.innerText === '') {
                boxtext.innerText = turn;
              turn = changeturn();
                audioturn.play();
                checkwin();
                if (Isgameover){
                document.getElementsByClassName("Info")[0].innertext = "turn for" + turn;
                
                }
            }

        })
    
})

// add onclick listner to reset  button
reset.addEventListener('click',()=>{
let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element=> {
    element.innerText = " "
});
  turn = "x";
    Isgameover= false
    document.getElementsByClassName("Info")[0].innertext = " turn for " + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width ="0"

})