const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      
    });
  },{
    rootMargin: "0px",
    threshold: [0.3,0.5,0.5],
  }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el)});


document.querySelectorAll(".photo-gallery img").forEach(image =>{
  image.onclick = () =>{
  document.querySelector(".popup").style .display ='block';
  document.querySelector(".popup img").src = image.getAttribute("src");
}
                                                        });
document.querySelector(".popup span").onclick =() =>{
  document.querySelector(".popup").style .display ='none';
}

