//Array holding book information
const latest = {
  entry: 4, 
  title: "Conquered", 
  subtitle:"Episode 4 of Sister Planet",
  blurb: `The Martians are back …
  <br>
  … the world knows it was all a lie …
  <br>
  … and Maverick Martinique is in the center of it all.
  <br>
  After everything Mav has been through—torture, betrayal, being shot in the back—she still can’t escape the chaos between the sister planets of Earth and Mars.
  <br>
  Mav is recovering from her ordeal, thanks to an undercover group who have been looking for a peaceful way to settle the Mars conflict. However, it’s clear from the start that President Hawkins’ unhinged behavior will undercut everything they attempt to do. Unwilling to go to the lengths Greenstreet did, they are stuck on how to remove Hawkins as leader of the United States.
  <br>
  Mav isn’t one to sit on the sidelines, and soon faces one last choice: stay out of the meddling but know she’ll always be watched … or be bold, take charge, and finally be free.
  `, 
  image:"images/LJ_Conquered_EbookCover.jpg",
  amazon:"https://www.amazon.com/dp/B08NV1D5G9"
}


const book1 = {
  entry: 1, 
  title: "Numbered", 
  subtitle:"Episode 1 of Sister Planet Series",
  blurb: `Mav needs to kill her boss.
  <br>
  But that will be tricky. He’s a senator. Not only that, he's one election away from becoming the Vice President of USEM—the United States of Earth and Mars. And the kill switches he had implanted in Mav's skull keep her quiet and obedient.
  <br>
  But when Mav unexpectedly inherits a political insider’s fortune, it doesn’t take long for her fame to attract the attention of a shadowy organization that wants the same thing she does—a dead senator.`, 
  image:"images/NumberedCoverArt_V2.jpg",
  amazon:"https://www.amazon.com/dp/B083HJ6N8L"
  }

const book2 = {
  entry: 2, 
  title: "Cornered", 
  subtitle:"Episode 2 of Sister Planet",
  blurb: `Maverick Martinique’s life has become far more complicated now that she has joined the cause to assassinate Senator Michael Greenstreet. She’s immediately tasked with keeping the details of her complicated cover story straight, navigating the murky waters of a dangerous social circle, and looking for a mysterious room within the senator’s mansion that will open up communication with Mars.
  <br>
  Apparently, the killing part comes later.
  <br>
  All her hard work depends on Greenstreet buying the ruse, but he doesn’t seem interested. His hostility toward Mav isn’t veiled at all, and he makes something perfectly clear in their first encounter—one misstep and Mav is as good as dead.
  `, 
  image:"images/LJ_CorneredArt_EbookCover_FINAL.jpg",
  amazon:"https://www.amazon.com/dp/B084P3WCNX"
}

const book3 = {
  entry: 3, 
  title: "Betrayed", 
  subtitle:"Episode 3 of Sister Planet",
  blurb: `Everything has changed.
  <br>
  The truth has been revealed …
  <br>
  ... and now Maverick has only one chance to survive.
  <br>
  Maverick’s discovery of Greenstreet’s hidden room reveals some ugly truths: the relationship between Mars and Earth is on the brink of collapse, The Red Hand can’t be trusted, and her allies are looking more and more like enemies.
  <br>
  As she continues to navigate the dog-eat-dog world she finds herself in, she can’t stop herself from asking one terrifying question ... is a world run by Michael Greenstreet the best option she has?
  <br>
  Before she can decide, the house of cards she’s built starts to fall as everyone around her fights for dominance. Can she find a way to outsmart them all, no matter what side ends up running Earth? Or is her fate already sealed?
  `, 
  image:"images/LJ_Betrayed_EbookCover_Final.jpg",
  amazon:"https://www.amazon.com/dp/B0895GVCK6"
}

const book4 = {
  entry: 4, 
  title: "Conquered", 
  subtitle:"Episode 4 of Sister Planet",
  blurb: `The Martians are back …
  <br>
  … the world knows it was all a lie …
  <br>
  … and Maverick Martinique is in the center of it all.
  <br>
  After everything Mav has been through—torture, betrayal, being shot in the back—she still can’t escape the chaos between the sister planets of Earth and Mars.
  <br>
  Mav is recovering from her ordeal, thanks to an undercover group who have been looking for a peaceful way to settle the Mars conflict. However, it’s clear from the start that President Hawkins’ unhinged behavior will undercut everything they attempt to do. Unwilling to go to the lengths Greenstreet did, they are stuck on how to remove Hawkins as leader of the United States.
  <br>
  Mav isn’t one to sit on the sidelines, and soon faces one last choice: stay out of the meddling but know she’ll always be watched … or be bold, take charge, and finally be free.
  `, 
  image:"images/LJ_Conquered_EbookCover.jpg",
  amazon:"https://www.amazon.com/dp/B08NV1D5G9"
}




// LATEST BOOK (HIGHLIGHTED AT TOP OF PAGE)
document.getElementById('latestTitle').innerHTML = latest.title;
document.getElementById('latestSubtitle').innerHTML = latest.subtitle;
document.getElementById('latestBlurb').innerHTML = latest.blurb;
document.getElementById('latestImage').src = latest.image;
function visitPage(){
window.open(latest.amazon);
}

// BOOK1 THUMBNAIL INFO
document.getElementById('book1Title').innerHTML = book1.title;
document.getElementById('book1Image').src = book1.image;
function visitPage1(){
window.open(book1.amazon);
}

// BOOK2 THUMBNAIL INFO
document.getElementById('book2Title').innerHTML = book2.title;
document.getElementById('book2Image').src = book2.image;
function visitPage2(){
window.open(book2.amazon);
}

// BOOK3 THUMBNAIL INFO
document.getElementById('book3Title').innerHTML = book3.title;
document.getElementById('book3Image').src = book3.image;
function visitPage3(){
window.open(book3.amazon);
}

// BOOK4 THUMBNAIL INFO
document.getElementById('book4Title').innerHTML = book4.title;
document.getElementById('book4Image').src = book4.image;
function visitPage4(){
window.open(book4.amazon);
}

submitForm();
function submitForm() { // show the form and hide the sign up button.
  var x = document.getElementById("sentMess");
  var y = document.getElementById("message");
  var z = document.getElementById("btnUnStatic");
  var email = document.getElementById("email");
  if (x.style.display === "none" && email.innerHTML !== "") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

const form = document.getElementById('letsTalk');

document.addEventListener('submit', function handleSubmit(event) {
  // show the form and hide the sign up button.
    var x = document.getElementById("sentMess");
    var y = document.getElementById("message");
    var z = document.getElementById("btnUnStatic");
    
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
    } else {
      x.style.display = "none";
    }
  event.preventDefault()
  form.reset()
});
