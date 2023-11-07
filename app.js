
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');


link1.addEventListener('click', scrollToSection);
link2.addEventListener('click', scrollToSection);
link3.addEventListener('click', scrollToSection);


function scrollToSection(event) {
  event.preventDefault(); 

 
  let targetSectionId = event.currentTarget.id.replace('link', ''); 


  let targetSection = document.getElementById(`section${targetSectionId}`);

  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
  
}

const h2 = document.querySelector(".content h2");
h2.classList.add("in-view");

