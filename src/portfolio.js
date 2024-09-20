const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Noureddine ECH-CHOUKY | Data Scientist Portfolio",
  description:
    "A Data Science enthusiast who builds AI-driven solutions that cut costs, boost profits, and sometimes make you say 'Wow, that's clever!'",
  og: {
    title: "Noureddine ECH-CHOUKY | Portfolio",
    type: "website",
    url: "http://nour3467.com/", // Update to your actual URL.
  },
};



// Home Page
const greeting = {
  title: "Azul!",
  sub: "Noureddine ECH.",
  logo_name: "Noureddine ECH-CHOUKY",
  resumeLink: "https://docs.google.com/document/d/1AutTKsZRZlB7HK_sJLH5diuxWablwNlh/edit?usp=sharing&ouid=113243219958794783473&rtpof=true&sd=true",
};


// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/nour3467/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/noureddineechch1",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/noureddineechchouky",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/nour3467/",
    },
    {
      siteName: "HashNode",
      iconifyClassname: "simple-icons:hashnode",
      style: {
        color: "#2962ff",
      },
      profileLink: "",
    },
  ],
};

// What I do
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable, production-ready models for deep learning, machine learning, and AI applications",
        "⚡ Expertise in Computer Vision (OpenCV) and NLP, leveraging state-of-the-art models (e.g., Transformer-based)",
        "⚡ Skilled in data cleaning, processing, and analysis using Pandas, Power BI, and advanced statistical methods",
        "⚡ Experience in implementing AI-driven decision systems for agriculture, forecasting, and optimization",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudDevOpsImg",
      skills: [
        "⚡ Architecting cloud solutions on AWS, specializing in cost optimization and high availability",
        "⚡ Deploying scalable applications using Docker, Kubernetes, and CI/CD pipelines",
        "⚡ Experience in monitoring, maintaining, and automating cloud services (AWS IAM, S3, EC2, etc.)",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos-docker",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
      ],
    },
  ],
};


/// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects utilize a variety of cutting-edge technologies. I specialize in Data Science, AI, and cloud-deployed solutions for scalable, impactful results.",
};

// Project cards
const projectcards = {
  list: [
    {
      title: "Bedrock Chatbot AI",
      img_path: "bedrock-chatbot.png",
      description:
        "BedRock Chatbot AI is an advanced conversational AI application leveraging the power of Amazon Bedrock, LangChain, and Streamlit. This project demonstrates the seamless integration of state-of-the-art language models with a user-friendly interface, showcasing the potential of AI-driven conversations in various domains.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "AWS",
          color: "#FF9900",
        },
        {
          lang: "Bedrock",
          color: "#3c0095",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "LangChain",
          color: "#3498db",
        },
      ],
      link: "https://github.com/user-attachments/assets/31bb1f07-5d2d-4ff8-9ca5-b5916ba2ddef",
      code: "https://github.com/nour3467/bedrock-chatbot-ai",
      linkcolor: "white",
    },
    {
      title: "End-to-End LLM Projects (Google Gemini Series)",
      img_path: "google-gemini.jpg", // You can add a relevant image here
      description:
        "A series of end-to-end AI projects using Google Gemini, featuring applications in document Q&A, generative AI doctors, multi-language invoice extraction, YouTube video summarization, and more. Includes shared resources for scalable and robust performance.",
      tags: [
        {
          lang: "LLM",
          color: "#004782",
        },
        {
          lang: "Google Gemini",
          color: "#fbbc05",
        },
        {
          lang: "Python",
          color: "#004782",
        },
      ],
      link: "https://github.com/nour3467/End-To-End-LLM-Projects-Google-Gemini-Series",
      code: "https://github.com/nour3467/End-To-End-LLM-Projects-Google-Gemini-Series",
      linkcolor: "white",
    },
    {
      title: "AWS Movie Poster Creator",
      img_path: "aws-movie-poster.png", // You can add a relevant image here
      description:
        "AWS Movie Poster Creator leverages AWS Lambda and Bedrock's Stability Diffusion Model to generate dynamic movie posters. It stores images in S3, manages access via API Gateway, and provides secure URLs for viewing. Includes all necessary scripts and API definitions.",
      tags: [
        {
          lang: "AWS",
          color: "#FF9900",
        },
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Automation",
          color: "#c47206",
        },
      ],
      link: "https://github.com/nour3467/aws-movie-poster-creator",
      code: "https://github.com/nour3467/aws-movie-poster-creator",
      linkcolor: "white",
    },
    {
      title: "Fashion Recommender System",
      img_path: "fashion-recommender.png", // You can add a relevant image here
      description:
        "A recommendation system designed to offer personalized fashion suggestions using collaborative filtering and machine learning techniques.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "ML",
          color: "#00a100",
        },
        {
          lang: "Recommendation System",
          color: "#ff4b4b",
        },
      ],
      link: "https://github.com/nour3467/Fashion-Recommender-System",
      code: "https://github.com/nour3467/Fashion-Recommender-System",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Scientist",
        subtitle: "Mohammed VI Polytechnic University",
        date: "Aug 2023 - Present",
        content: [
          "Engineered AI recommendation system using StableBaseline3 and WandB, reducing resource usage by 15% and increasing profits by 10%.",
          "Developed predictive models with Scikit-learn and XGBoost, improving yield forecast accuracy by 25%.",
          "Led AWS migration (IAM, CloudWatch, S3, ASG, Route53), reducing system downtime by 99.9% and cutting costs by 30%.",
          "Mentored and contributed to 'AgriAssist' AI agent using Rasa, RAG and LaMa2 LLM, increasing user engagement by 45%.",
          "Delivered 20+ presentations using PowerBI and SHAP, resulting in 40% more project approvals.",
          "Expanded solutions to 3 countries, securing 3 new partnerships and $2M increase in annual revenue.",
        ],
      },
      {
        title: "Data Scientist (Internship)",
        subtitle: "Mohammed VI Polytechnic University",
        date: "June 2022 - Aug 2022",
        content: [
          "Developed a Wheat Yield Prediction Toolkit using deep learning with Pytorch, TensorFlow, and Keras.",
          "Built a two-branch (LSTM-CNN) model, improving model accuracy and conducting uncertainty analysis with Bayesian methods.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Engineering Degree in Data Science and AI",
          subtitle: "Mohammed V University (ENSAMR Rabat)",
          date: "Jan 2020 - Aug 2023",
          content: ["Concentration: Data Science, AI & Big Data Analytics"],
        },
      ],
    },
    {
      title: ["Ranks and Achievements"],
      data: [
        {
          title: "Key Achievements",
          content: [
            "Led AI system development reducing resource usage by 15% and increasing profits by 10%",
            "Spearheaded AWS migration, reducing system downtime by 99.9% and cutting costs by 30%",
            "Expanded data-driven solutions to 3 countries, securing $2M increase in annual revenue",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "AI Consultant",
          subtitle: "Various Clients",
          content: [
            "Provided expert advice on implementing AI solutions in agricultural technology",
            "Developed custom machine learning models for specific agricultural use cases",
          ],
        },
      ],
    },
  ],
};


//certificate cards
const certifications = {
  certifications: [
    {
      title: "AWS Cloud Practitioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws-01.png",
      certificate_link:
        "https://www.credly.com/badges/cc015d73-1912-4a39-9590-9570975b47b8/public_url",
      alt_name: "AWS",
      color_code: "#000000",
    },
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I'm always open to discussing data science projects, AI innovations, or potential collaborations. Feel free to reach out to me through any of the channels below. I specialize in machine learning, deep learning, and cloud-based AI solutions.",
  },
  addressSection: {
    title: "Location",
    subtitle: "Rabat, Morocco",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+212 697-554-255",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/nour3467",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nour3467/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:noureddineechchouky@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
