// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "news-our-paper-vision-based-uncertainty-aware-motion-planning-based-on-probabilistic-semantic-segmentation-has-been-published-in-ra-l-pdf",
          title: 'Our paper “Vision-Based Uncertainty-Aware Motion Planning Based on Probabilistic Semantic Segmentation” has been...',
          description: "",
          section: "News",},{id: "news-i-have-joined-the-learning-systems-and-robotics-lab-at-tum-as-a-phd-student-advised-by-prof-angela-schoellig",
          title: 'I have joined the Learning Systems and Robotics Lab at TUM as a...',
          description: "",
          section: "News",},{id: "news-our-paper-is-data-all-that-matters-the-role-of-control-frequency-for-learning-based-sampled-data-control-of-uncertain-systems-has-been-accepted-at-acc-2024-pdf",
          title: 'Our paper “Is Data All That Matters? The Role of Control Frequency for...',
          description: "",
          section: "News",},{id: "news-presented-our-ra-l-paper-and-the-workshop-paper-safe-offline-reinforcement-learning-using-trajectory-level-diffusion-models-at-icra-in-yokohama-japan-workshop-paper",
          title: 'Presented our RA-L paper and the workshop paper “Safe Offline Reinforcement Learning using...',
          description: "",
          section: "News",},{id: "news-presented-our-paper-at-acc-in-toronto-canada-video",
          title: 'Presented our paper at ACC in Toronto, Canada. Video.',
          description: "",
          section: "News",},{id: "news-we-are-organizing-a-workshop-mastering-robot-manipulation-in-a-world-of-abundant-data-at-corl-2024-in-munich-website",
          title: 'We are organizing a workshop “Mastering Robot Manipulation in a World of Abundant...',
          description: "",
          section: "News",},{id: "news-our-paper-flying-through-moving-gates-without-full-state-estimation-has-been-accepted-at-icra-2025-pdf",
          title: 'Our paper “Flying through Moving Gates without Full State Estimation” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-diffusion-predictive-control-with-constraints-dpcc-has-been-accepted-at-l4dc-2025-pdf",
          title: 'Our paper “Diffusion Predictive Control with Constraints (DPCC)” has been accepted at L4DC...',
          description: "",
          section: "News",},{id: "news-our-paper-semantically-safe-robot-manipulation-from-semantic-scene-understanding-to-motion-safeguards-has-been-accepted-for-ra-l-pdf",
          title: 'Our paper “Semantically Safe Robot Manipulation: From Semantic Scene Understanding to Motion Safeguards”...',
          description: "",
          section: "News",},{id: "news-presented-dpcc-at-l4dc-at-the-university-of-michigan-ann-arbor-impressions",
          title: 'Presented DPCC at L4DC at the University of Michigan, Ann Arbor. Impressions.',
          description: "",
          section: "News",},{id: "news-failure-prediction-at-runtime-for-generative-robot-policies-has-been-accepted-at-neurips-2025",
          title: '“Failure Prediction at Runtime for Generative Robot Policies” has been accepted at NeurIPS...',
          description: "",
          section: "News",},{id: "news-participated-as-a-tutor-at-the-1st-rig-bootcamp-on-foundational-behavior-models-to-advance-collaborative-vla-research-in-germany-impressions",
          title: 'Participated as a tutor at the 1st RIG Bootcamp on Foundational Behavior Models...',
          description: "",
          section: "News",},{id: "news-presented-fiper-at-neurips-in-san-diego-california-check-out-my-8-takeaways-on-embodied-ai-amp-amp-robotics-research",
          title: 'Presented FIPER at NeurIPS in San Diego, California! Check out my 8 takeaways...',
          description: "",
          section: "News",},{id: "news-our-paper-crisp-compliant-ros2-controllers-for-learning-based-manipulation-policies-and-teleoperation-has-been-accepted-to-ra-p-website",
          title: 'Our paper “CRISP - Compliant ROS2 Controllers for Learning-Based Manipulation Policies and Teleoperation”...',
          description: "",
          section: "News",},{id: "news-started-as-a-visiting-researcher-at-the-learning-and-adaptive-systems-group-at-eth-zurich-hosted-by-prof-andreas-krause",
          title: 'Started as a visiting researcher at the Learning and Adaptive Systems Group at...',
          description: "",
          section: "News",},{id: "news-our-paper-clare-continual-learning-for-vision-language-action-models-via-autonomous-adapter-routing-and-expansion-has-been-accepted-to-ra-l-website",
          title: 'Our paper “CLARE: Continual Learning for Vision-Language-Action Models via Autonomous Adapter Routing and...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-the-robot-learning-lab-at-the-university-of-freiburg-impressions",
          title: 'Gave an invited talk at the Robot Learning Lab at the University of...',
          description: "",
          section: "News",},{id: "news-gave-an-invited-talk-at-the-rss-workshop-on-trustworthy-embodied-foundation-models-at-the-diffusion-for-robot-learning-workshop-we-received-the-best-paper-award-impressions",
          title: 'Gave an invited talk at the RSS Workshop on Trustworthy Embodied Foundation Models....',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%61%6C%66.%72%6F%65%6D%65%72@%74%75%6D.%64%65", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ralf-römer-41638218a", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ralfroemer99", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=PqgQ71wAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-2283-3161", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ralfroemer99", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
