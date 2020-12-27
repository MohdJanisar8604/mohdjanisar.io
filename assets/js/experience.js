//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Competitive Programmer",
    cardImage: "assets/images/experience-page/download.jpg",
    place: "HackerRank/Codechef",
    time: "(Decemeber, 2020 - present)",
    desp: "<li>I love coding and specially solving the problems if talk about solving problem then best two place HackerRank and Codechef</li>",
  },
  {
    title: "President & Team Lead",
    cardImage: "assets/images/experience-page/janisar.jpg",
    place: "LearnX CGC",
    time: "(September, 2020 - Present)",
    desp: "<li>This is the student programming club where i learned and teach more and more about technologies </li>",
  },
  {
    title: "Editor",
    cardImage: "assets/images/experience-page/taj studio.jpg",
    place: "Taj Studio",
    time: "(January 2016 - present)",
    desp:"<li> This is the local studio in my city in that time I was interested in movie production then I started working here and gets so much experienceand opportunities. </li>",
  },
  {
    title: "Coding Teacher",
    cardImage: "assets/images/experience-page/utdc.jpg",
    place: "UTDC",
    time: "(September/15/2020 - December/30/2020)",
    desp:"<li> After the 6month lockdown when coaching institutes are open I was freeat home and my college was online then I decides to teach coding and I went there and give interview and become a coding teacher which was myextremely amazing experience </li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofJAVA",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in JAVA to building fully functional cross-platform applications.",
  },
  {
    title: "HackerRank",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "Spreading aware of Hackerrank virtually on 14 - 16th November 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Competitive Programming",
    image: "assets/images/experience-page/janisar1.jpg",
    time: "15/12/2020 - 17/12/2020",
    desp: "<li>Between these days i discussed about competitive programming and many more things related coding.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
