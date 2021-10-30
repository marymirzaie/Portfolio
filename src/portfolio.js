/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mary Mirzaie",
  title: "Hi all, I'm Mary",
  subTitle: emoji(
    "Fast learning software engineer. Well Experienced with software engineering best practices and design patterns. Can efficiently collaborate with other members of a team for designing and implementing a feature."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1X8o8tRMFtvyoLCi2ijZfSZJBBaFCuLp4coNFMHnFUQI/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/marymirzaie",
  linkedin: "https://www.linkedin.com/in/fakemariastyles/",
  gmail: "mary.mirzayee@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/11884123/maryam-mirzaie",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ANDROID DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Android / User Interfaces for your mobile applications"
    ),
    emoji("⚡ Used many of the Architecture Components, including: Room, Lifecycle, Navigation."),
    emoji(
      "⚡ Integration of third party services such as Jetpack / dependency injection" /* / AWS / Digital Ocean */
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-kotlin"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Tehran",
      logo: require("./assets/images/University_of_Tehranpng.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "October 2016 - November 2021",
    },
    {
      schoolName: "Farzanegan 8",
      logo: require("./assets/images/sampad.png"),
      subHeader: "Diploma of Science in Math and Physics",
      duration: "June 2012 - June 2016",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Android Developer",
      company: "Divar",
      companylogo: require("./assets/images/divar.jpeg"),
      date: "July 2019 – Present",
      desc: "Divar is an online classified ads and E-commerce mobile app with over 40 million users with different verticals focusing on ease of trading with a server-driven ui.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/pomodoro.png"),
      projectName: "Pomodoro",
      projectDesc: "Open-source, simple minimalistic pomodoro app helping users to increase productivity and track time.",
      footerLink: [
        {
          name: "Git Hub",
          url: "https://github.com/marymirzaie/Pomodoro"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React js",
      subtitle:
        "First Place in React Programming Course, UTech Academy, Tehran.",
      image: require("./assets/images/Utech-Academy.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11luyZjMzAwumFGOC2fXefaq93vlTjH0V/view?usp=sharing"
        },
        {
          name: "UTech Academy",
          url: "https://home.utech-academy.ir/"
        }
      ]
    },
    {
      title: "Startup Workshop",
      subtitle:
        "Participate in the workshop of Amir Kabir Innovation Center.",
      image: require("./assets/images/amirkabir.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/12r4pKcxSCNsbfMP0Ry6pUvZtD1Fug7wj/view?usp=sharing"
        }
      ]
    },

    {
      title: "Web Developer",
      subtitle: "First Place in Web Programming Course, University of Science and Technology, Tehran.",
      image: require("./assets/images/elmosanat.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1kY3YJAiDlZqAT0f_Wv2jTc3sHEr8qMRr/view?usp=sharing"
        },
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+(98) 910062-7926",
  email_address: "mary.mirzayee@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "spr021", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
