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
    url: "http://mlwithnoureddine.com/", // Update to your actual URL.
  },
};



// Home Page
const greeting = {
  title: "Hey there!",
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
      title: "Data Science & Artificial Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing, training, and deploying end-to-end machine learning models with a focus on production-ready pipelines and real-world impact",
        "⚡ Expertise in deep learning frameworks like CNNs, RNNs, and Transformer models for advanced NLP, Computer Vision, and Reinforcement Learning applications",
        "⚡ Strong knowledge in statistical analysis, predictive modeling, and data mining, utilizing Python, R, and scalable platforms",
        "⚡ Proficient in data wrangling, feature engineering, and model optimization to create scalable and high-performing ML pipelines",
        "⚡ Experience in building real-time AI-driven solutions for various industries including finance, healthcare, and e-commerce",
      ],
      softwareSkills: [
        {
          skillName: "TensorFlow",
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
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
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
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: {
            backgroundColor: "transparent",
            color: "#276DC3",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#150458",
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
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
      ],
    },
    {
      title: "MLOps & Cloud Engineering",
      fileName: "CloudDevOpsImg",
      skills: [
        "⚡ Designing and implementing MLOps pipelines to automate model development, version control, testing, and deployment",
        "⚡ Automating workflows for continuous integration and continuous deployment (CI/CD), model monitoring, and scalability using Kubernetes and Docker",
        "⚡ Experience with cloud-native AI deployments using AWS SageMaker, Google Cloud AI Platform, and Microsoft Azure Machine Learning",
        "⚡ Expertise in integrating DevOps practices into machine learning workflows, ensuring efficient resource management and seamless scalability",
        "⚡ Skilled in model versioning and tracking using MLOps tools like DVC, MLflow, and Git, ensuring reproducibility and efficient collaboration",
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
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            backgroundColor: "transparent",
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
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
          skillName: "Jenkins (CI/CD)",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "MLflow",
          fontAwesomeClassname: "simple-icons:mlflow",
          style: {
            backgroundColor: "transparent",
            color: "#0194E2",
          },
        },
        {
          skillName: "DVC",
          fontAwesomeClassname: "simple-icons:dvc",
          style: {
            backgroundColor: "transparent",
            color: "#945DD6",
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
    "Welcome to my project showcase, where Data Science and AI team up, and MLOps makes sure everything doesn’t fall apart. From predicting the future with algorithms (no magic, just math) to automating processes that give me more time for coffee, these projects highlight how I turn complex problems into scalable solutions. You might just find yourself wondering, 'How does that even work?'—and that’s when I know I’ve done my job right.",
};


/// Project cards
const projectcards = {
  list: [
    {
      title: "Bedrock Chatbot AI",
      img_path: "bedrock-chatbot.png",
      description:
        "An advanced conversational AI application leveraging Amazon Bedrock, LangChain, and Streamlit. This project integrates large language models (LLMs) with a user-friendly interface, demonstrating AI-driven conversations in customer service, healthcare, and beyond. It also showcases scalable deployment with AWS Lambda and API Gateway.",
      tags: [
        {
          lang: "Python",
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
          lang: "LangChain",
          color: "#3498db",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "API Gateway",
          color: "#c47206",
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
        "A series of end-to-end AI projects using Google Gemini LLMs. Includes applications such as document question-answering, AI-assisted medical diagnostics, multi-language invoice extraction, and YouTube video summarization. These projects focus on scalability, performance optimization, and integration with Google Cloud services.",
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
        {
          lang: "Google Cloud",
          color: "#4285F4",
        },
        {
          lang: "NLP",
          color: "#00a100",
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
        "An automated system for creating dynamic movie posters using AWS services. This project uses AWS Lambda, Bedrock's Stability Diffusion model, and stores generated images in S3. It automates image access through API Gateway and provides secure URLs, making it a scalable solution for dynamic image generation.",
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
        {
          lang: "S3",
          color: "#FF9900",
        },
        {
          lang: "API Gateway",
          color: "#c47206",
        },
        {
          lang: "Lambda",
          color: "#FF9900",
        },
        {
          lang: "Stability Diffusion",
          color: "#ff4b4b",
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
        "A machine learning-powered recommendation system that delivers personalized fashion suggestions based on user preferences. Utilizing collaborative filtering, content-based filtering, and deep learning techniques, this project showcases the power of AI in e-commerce personalization.",
      tags: [
        {
          lang: "Python",
          color: "#004782",
        },
        {
          lang: "Machine Learning",
          color: "#00a100",
        },
        {
          lang: "Recommendation System",
          color: "#ff4b4b",
        },
        {
          lang: "Deep Learning",
          color: "#3498db",
        },
        {
          lang: "Collaborative Filtering",
          color: "#00a100",
        },
        {
          lang: "Pandas",
          color: "#150458",
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
        date: "Aug 2023 - Present | Benguerir, MA",
        content: [
          "Engineered an AI recommendation system using StableBaseline3 and Weights & Biases (WandB), reducing resource usage by 15% and increasing profits by 10%.",
          "Developed predictive models with Scikit-learn and XGBoost, improving yield forecast accuracy by 25% and reducing crop losses by 20%.",
          "Analyzed diverse data sources including weather data, soil data, stakeholder-collected information, and remote sensing imagery to enhance agricultural decision-making and improve crop management strategies.",
          "Led AWS migration (IAM, CloudWatch, S3, ASG, Route53), reducing system downtime by 99.9%, cutting costs by 30%, and completing the project two weeks ahead of schedule.",
          "Mentored and contributed to the 'AgriAssist' AI agent using Rasa, Retrieval-Augmented Generation (RAG), and LaMa2 LLM, increasing user engagement by 45% and reducing query resolution time by 60%.",
          "Delivered over 20 presentations using PowerBI and SHAP, resulting in a 40% increase in project approvals and 25% higher client retention.",
          "Expanded solutions to 3 countries, securing 3 new partnerships and driving a $2M increase in annual revenue.",
        ],
      },
      {
        title: "Data Scientist (Internship)",
        subtitle: "Mohammed VI Polytechnic University",
        date: "June 2022 - Aug 2022 | Benguerir, MA",
        content: [
          "Developed a Wheat Yield Prediction Toolkit using deep learning frameworks such as PyTorch, TensorFlow, and Keras, improving yield prediction accuracy by 30%.",
          "Designed and implemented a two-branch (LSTM-CNN) model, increasing overall model performance by 25% and conducting uncertainty analysis with Bayesian methods, reducing model error margins by 20%.",
          "Analyzed historical crop data, weather patterns, and satellite imagery to optimize agricultural forecasting, helping reduce resource misallocation by 15%.",
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
          subtitle: "Mohammed V University (ENSAM Rabat)",
          date: "Jan 2020 - Aug 2023",
          content: [
            "Specialization: Data Science, Artificial Intelligence, and Big Data Analytics",
            "Relevant coursework: Machine Learning, Deep Learning, MLOps, Cloud Computing, and Data Engineering",
            "Graduated with Distinction, Top 5% of class",
          ],
        },
      ],
    },
    {
      title: ["Ranks and Achievements"],
      data: [
        {
          title: "Key Achievements",
          content: [
            "Led development of an AI recommendation system, reducing resource usage by 15% and boosting profits by 10%",
            "Spearheaded a successful AWS migration, reducing system downtime by 99.9% and cutting costs by 30%",
            "Expanded data-driven solutions to 3 international markets, resulting in $2M increase in annual revenue",
            "Recipient of the 'Outstanding Innovator Award' for pioneering AI-driven solutions in agriculture",
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
          date: "Jan 2021 - Present",
          content: [
            "Provided strategic advice on implementing AI solutions to optimize agricultural technology processes and resource management",
            "Developed custom machine learning models tailored for agricultural use cases, improving predictive accuracy by up to 30%",
            "Collaborated with startups to design scalable AI workflows, reducing time-to-market by 20%",
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
      "Got a data science project, a wild AI idea, or just want to talk about how machines are slowly taking over the world (in a good way)? I’m all ears! Whether it’s machine learning, deep learning, or cloud-based AI wizardry, feel free to reach out through any of the channels below. Let’s make something awesome together!",
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
  certifications, competitiveSites, contactPageData, greeting, projectcards, projectsHeader, resumeleft,
  resumeright, seo, settings, skills, socialMediaLinks
};

