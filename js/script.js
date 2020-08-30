window.addEventListener('load', function(){
  document.querySelector('.preloader').classList.add('opacity-0');
  setTimeout(function(){
    document.querySelector('.preloader').style.display='none';
  },1000)
})

// portfolio item Filter

const filterContainer=document.querySelector('.portfolio-filter'),
filterBtns=filterContainer.children,
totalFilterBtn=filterBtns.length,
portfolioItems=document.querySelectorAll('.portfolio-item'),
totalPortfolioItem=portfolioItems.length;


for(let i=0; i<totalFilterBtn; i++){
	filterBtns[i].addEventListener('click', function (){
		filterContainer.querySelector('.active').classList.remove('active');
		this.classList.add('active');

		const filterValue=this.getAttribute('data-filter');
		for(let k=0; k<totalPortfolioItem; k++){
      if(filterValue === portfolioItems[k].getAttribute('data-category')){
        portfolioItems[k].classList.remove('hide');
        portfolioItems[k].classList.add('show');
      }
      else{
        portfolioItems[k].classList.remove('show');
        portfolioItems[k].classList.add('hide');
      }
      if(filterValue === 'all'){
      portfolioItems[k].classList.remove('hide');
      portfolioItems[k].classList.add('show');
      }
    }
	})
}


//Portfolio lightbox

const lightbox=document.querySelector('.lightbox'),
      lightboxImg=lightbox.querySelector('.lightbox-img'),
      lightboxClose=lightbox.querySelector('.lightbox-close'),
      lightboxText=lightbox.querySelector('.lightbox-text'),
      lightboxCounter=lightbox.querySelector('.lightbox-counter');
   let itemIndex=0;
   for(let i=0; i<totalPortfolioItem; i++){
   	portfolioItems[i].addEventListener('click', function(){
   		itemIndex=i;
   		changeItem();
   		toggleLightbox();
   	})
   }
   function nextItem(){
   	if(itemIndex === totalPortfolioItem-1){
   		itemIndex=0;
   	}
   	else{
   		itemIndex++
   	}
   	changeItem();
   }
      function prevItem(){
   	if(itemIndex === 0){
   		itemIndex=totalPortfolioItem-1;
   	}
   	else{
   		itemIndex--;
   	}
   	changeItem();
   }
function toggleLightbox(){
	lightbox.classList.toggle('open');
}

function changeItem(){
imgSrc=portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
  lightboxImg.src=imgSrc;
  lightboxText.innerHTML=portfolioItems[itemIndex].querySelector('h4').innerHTML;
  lightboxCounter.innerHTML= (itemIndex+1) + ' of ' + totalPortfolioItem;
   }


   //Close lightbox


   lightbox.addEventListener('click', function(event){
   	if(event.target === lightboxClose || event.target === lightbox){
   		toggleLightbox();
   	}
   })




   //Aside Navbar

   const nav=document.querySelector('.nav'),
   navList=nav.querySelectorAll('li'),
   totalNavList=navList.length,
   allSection=document.querySelectorAll('.section'),
   totalSection=allSection.length;

   for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector('a');
    a.addEventListener('click', function(){
       for(let i=0; i<totalSection; i++){
      allSection[i].classList.remove('back-section');
    } 

      for(let j=0; j<totalNavList; j++){
        if(navList[j].querySelector('a').classList.contains('active')){
          allSection[j].classList.add('back-section');
        }
        navList[j].querySelector('a').classList.remove('active');
      }
      this.classList.add('active');
      showSection(this);
      if(window.innerWidth < 1200){
         asideSectionTogglerBtn();
      }
    })
   }

   function showSection(element){
    for(let i=0; i<totalSection; i++){
      allSection[i].classList.remove('active');
    }
    const target=element.getAttribute('href').split('#')[1];

    document.querySelector('#'+target).classList.add('active')
   }



   //burger menu

  
   document.querySelector('.hire-me').addEventListener('click', function(){
    const sectionIndex=this.getAttribute('data-section-index');
    showSection(this);

   })

   const navTogglerBtn=document.querySelector('.nav-toggler'),
   aside=document.querySelector('.aside');

   navTogglerBtn.addEventListener('click', asideSectionTogglerBtn)

   function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
       function showSection(element){
    for(let i=0; i<totalSection; i++){
      allSection[i].classList.toggle('open');
    }
   }
     }

//FORM

     $(document).ready(function() {

  //E-mail Ajax Send
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});