const cards=document.querySelectorAll('.memory-card');
let hasFlippedCard=false;
let firstCard, secondCard;
let lockBoard = false;

(function shuffle()
{
	cards.forEach(card =>{
		let randomPos = Math.floor(Math.random()*12);
         card.style.order = randomPos;

		});	
})();

function flipCard(){
	 if(lockBoard) return;
	 if(this === firstCard) return;
	this.classList.toggle('flip');
	if(!hasFlippedCard)
	{
	 hasFlippedCard=true;
	 firstCard= this;
     return;
	}

	secondCard=this;
	console.log(hasFlippedCard,secondCard.dataset.framework);
	checkForMatch();

	
}

function checkForMatch()
{   let isMatch =  firstCard.dataset.framework === secondCard.dataset.framework;
      isMatch ? disableCards() : unFlipCards();
 }

 
 function disableCards(){
	firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
	 resetBoard();
}


function unFlipCards()
{ 
lockBoard = true;
	setTimeout(() =>{
			firstCard.classList.remove('flip');
			secondCard.classList.remove('flip');
		     resetBoard(); 
		    },500);
			 
}  

function resetBoard(){
	[hasFlippedCard , lockBoard] =[false, false];
	[firstCard ,secondCard] =[null, null];
	
} 

cards.forEach(card => card.addEventListener('click',flipCard));