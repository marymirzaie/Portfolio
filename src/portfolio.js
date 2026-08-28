/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

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
    "https://docs.google.com/document/d/1aUOEPhfF83jm9dGnqi5kwGndTjXCS3bfSKYlrnDUoKM/edit?usp=sharing", // Set to empty to hide the button
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
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "fab fa-react"
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
      role: "Android Engineer",
      company: "Divar",
      companylogo: require("./assets/images/divar.jpeg"),
      date: "July 2019 – April 2022",
      desc: "Divar is an online classified ads and E-commerce mobile app with over 40 million users with different verticals focusing on ease of trading with a server-driven ui.",
    },
    {
      role: "Android Engineer",
      company: "Zalando",
      companylogo: require("./assets/images/zalando.jpeg"),
      date: "September 2022 – Present",
      desc: "Zalando is a European online fashion retailer with a focus on fast fashion and a wide range of products.",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  title: "Open source, built in public.",
  subtitle:
    "A growing collection of Android apps, experiments, and practical tools. Explore the work, inspect the code, and use whatever helps you build.",
  githubUsername: "marymirzaie",
  featuredProject: "Pomodoro",
  projects: [
    {
      name: "Pomodoro",
      description:
        "A calm, minimal focus timer built with Jetpack Compose and a production-minded Android architecture.",
      url: "https://github.com/marymirzaie/Pomodoro",
      category: "Android",
      language: "Kotlin",
      stars: 11,
      forks: 1,
      tags: ["Jetpack Compose", "Clean Architecture", "Hilt"],
      image: require("./assets/images/pomodoro.png"),
      accent: "#ff5c35"
    },
    {
      name: "Villager Hunt",
      description:
        "An Android companion for tracking Animal Crossing villager hunting sessions.",
      url: "https://github.com/marymirzaie/VillagerHunt",
      category: "Android",
      language: "Kotlin",
      tags: ["Android", "Tracker"],
      accent: "#76c7a2"
    },
    {
      name: "Compose Practice",
      description:
        "A hands-on collection of Jetpack Compose patterns, components, and UI experiments.",
      url: "https://github.com/marymirzaie/compose-practice",
      category: "Experiments",
      language: "Kotlin",
      stars: 1,
      tags: ["Compose", "UI"],
      accent: "#8b7cf6"
    },
    {
      name: "Coin Market",
      description:
        "A mobile cryptocurrency market explorer powered by CoinMarketCap data.",
      url: "https://github.com/marymirzaie/Coin-Market",
      category: "Android",
      language: "Kotlin",
      tags: ["API", "Market data"],
      accent: "#f3b63f"
    },
    {
      name: "Around Me",
      description:
        "A location-based Android project for discovering useful places nearby.",
      url: "https://github.com/marymirzaie/Around-Me",
      category: "Android",
      language: "Kotlin",
      tags: ["Location", "Maps"],
      accent: "#4c8bf5"
    },
    {
      name: "Text to Speech",
      description:
        "A focused Android experiment for turning written content into spoken audio.",
      url: "https://github.com/marymirzaie/Text-To-Speech",
      category: "Experiments",
      language: "Kotlin",
      tags: ["Accessibility", "Audio"],
      accent: "#ef6fa8"
    },
    {
      name: "Feed Me",
      description:
        "A small Kotlin application for fetching and presenting a clean feed of posts.",
      url: "https://github.com/marymirzaie/Feed-Me",
      category: "Android",
      language: "Kotlin",
      forks: 1,
      tags: ["Networking", "Feed"],
      accent: "#ed7f48"
    },
    {
      name: "Hackathon 2019",
      description:
        "A rapid Android prototype created during a collaborative hackathon.",
      url: "https://github.com/marymirzaie/Hackathon2019",
      category: "Experiments",
      language: "Kotlin",
      tags: ["Prototype", "Team project"],
      accent: "#55b3b1"
    },
    {
      name: "Love Calculator",
      description:
        "A playful Kotlin app exploring input, interaction, and lightweight UI state.",
      url: "https://github.com/marymirzaie/Love-Calculator",
      category: "Experiments",
      language: "Kotlin",
      tags: ["Android", "UI"],
      accent: "#f06476"
    },
    {
      name: "Compiler — Fall 98",
      description:
        "University compiler coursework and implementations collected in Java.",
      url: "https://github.com/marymirzaie/Compiler-Fall98",
      category: "Academic",
      language: "Java",
      tags: ["Compiler", "Coursework"],
      accent: "#d9833b"
    },
    {
      name: "Algorithm Design — Fall 98",
      description:
        "Algorithm design exercises and problem-solving work implemented in Python.",
      url: "https://github.com/marymirzaie/DesignAlgorith-Fall98",
      category: "Academic",
      language: "Python",
      tags: ["Algorithms", "Coursework"],
      accent: "#3676a8"
    },
    {
      name: "Around Me — Bootcamp",
      description:
        "The bootcamp edition of Around Me, documenting an early Android learning journey.",
      url: "https://github.com/marymirzaie/Around-Me-Android-bootcamp",
      category: "Academic",
      language: "Kotlin",
      tags: ["Android", "Bootcamp"],
      accent: "#6d9eeb"
    },
    {
      name: "Portfolio",
      description:
        "The open-source code behind this portfolio and project directory.",
      url: "https://github.com/marymirzaie/Portfolio",
      category: "Experiments",
      language: "JavaScript",
      tags: ["React", "Portfolio"],
      accent: "#09a88a"
    },
    {
      name: "Colors",
      description:
        "A compact Android color and interface exercise built while learning Kotlin.",
      url: "https://github.com/marymirzaie/colors",
      category: "Academic",
      language: "Kotlin",
      tags: ["Android", "UI basics"],
      accent: "#b36ee8"
    },
    {
      name: "Around Me — Sign Up",
      description:
        "A standalone exploration of the onboarding flow for the Around Me app.",
      url: "https://github.com/marymirzaie/AroundMe-SignUp",
      category: "Experiments",
      language: "Kotlin",
      tags: ["Onboarding", "Android"],
      accent: "#4d9be6"
    },
    {
      name: "Around Me — Bazaar",
      description:
        "An early Around Me Android build prepared for the Café Bazaar ecosystem.",
      url: "https://github.com/marymirzaie/Around-Me-For_Cafe-Bazzare",
      category: "Android",
      language: "Kotlin",
      tags: ["Location", "Distribution"],
      accent: "#5fa88a"
    }
  ],
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
  display: false // Featured inside the open-source portal above
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

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+(49) 15753415137",
  email_address: "mary.mirzayee@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "spr021", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
