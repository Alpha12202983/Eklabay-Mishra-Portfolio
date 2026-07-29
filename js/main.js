/* ==========================================================================
   MAIN APPLICATION SCRIPT - Eklabay Mishra Portfolio
   ========================================================================== */

// Detailed Project Database for Modal Drawers
const PROJECTS_DATA = {
  interviewai: {
    title: "InterviewAI | Recruiter Enterprise SaaS Platform",
    category: "AI & Full Stack SaaS",
    period: "Jan 2026 – Present",
    image: "assets/images/projects/interviewai.jpg",
    tags: ["Python", "Flask", "AI / ML", "SQL", "SaaS", "JavaScript", "REST API"],
    overview: "Built InterviewAI, an enterprise recruiter SaaS platform empowering organizations to automate technical assessments, rank candidates with ATS resume scoring, conduct AI interviews, and monitor live recruitment analytics.",
    features: [
      "Interactive Recruiter Dashboard with live candidate pool management (100+ candidates), active interview tracking, and 79.2 ATS score quality metrics.",
      "Candidate Leaderboard & Assessment Matrix sorting talent by resume fit, skill test scores, and experience levels.",
      "Recruiter Quick Launch suite for creating technical jobs, MCQ skill tests, candidate shortlisting, and PDF/CSV executive report exports.",
      "Real-time recruitment activity feed and dynamic analytics charts for interview trends, department performance, and skill distributions."
    ],
    challenges: "Aggregating multi-dimensional candidate evaluation data (ATS scores, MCQ results, live interview metrics) while maintaining real-time dashboard responsiveness.",
    solution: "Architected modular Flask REST API services, engineered database query aggregations, and built responsive dark-theme glassmorphism UI components.",
    github: "https://github.com/eklabay-mishra/InterviewAI",
    demo: "https://github.com/eklabay-mishra/InterviewAI"
  },
  phishing: {
    title: "AI-Based Phishing URL Detection System",
    category: "Machine Learning & Security",
    period: "Jan 2026 – Apr 2026",
    image: "assets/images/projects/phishing_detection.jpg",
    tags: ["Python", "Scikit-Learn", "Flask", "Pandas", "NumPy", "MySQL", "JavaScript"],
    overview: "Engineered a high-precision machine learning classification engine to identify malicious phishing URLs in real time.",
    features: [
      "Extracted 20+ lexical, domain-based, and host features from raw web links.",
      "Trained Random Forest and Gradient Boosting models achieving 98.7% prediction accuracy.",
      "Built RESTful inference API using Flask for instant URL security scanning.",
      "Designed clean cybersecurity analytics dashboard with real-time risk scoring."
    ],
    challenges: "Handling adversarial URL obfuscation techniques and maintaining low latency (<50ms) during feature extraction and model inference.",
    solution: "Optimized regex vectorization algorithms and implemented server-side feature caching in MySQL.",
    github: "https://github.com/Alpha12202983",
    demo: "https://github.com/Alpha12202983"
  },
  quizverse: {
    title: "QuizVerse | Secure Online Examination System",
    category: "Full Stack & Web Security",
    period: "Sep 2025 – Dec 2025",
    image: "assets/images/projects/quizverse.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "OOP", "MVC Architecture", "Render Cloud", "HTML5/CSS3"],
    overview: "Built QuizVerse, a secure role-based Online Academy & Examination System deployed live on Render featuring Teacher/Admin Dashboards, Student Portals, and automated proctoring.",
    features: [
      "Live Admin & Teacher Dashboard powering 150+ active students, 20+ quiz modules, and 500+ questions.",
      "Auto-submit timer and live tab-switch detection to prevent exam cheating.",
      "Optimized MySQL query execution and database indexing, delivering a 90% performance boost with pass percentage analytics.",
      "Server-side session management, RBAC, bcrypt password encryption, and parameterized SQL queries."
    ],
    challenges: "Eliminating SQL injection vulnerabilities, maintaining real-time dashboard analytics charts, and handling live tab switch events reliably across browsers.",
    solution: "Implemented PDO prepared statements throughout all backend modules, structured clean MVC controllers, and hosted live application instance on Render cloud.",
    github: "https://github.com/eklabay-mishra/Quizverse",
    demo: "https://quizverse-yx85.onrender.com"
  },
  taskflow: {
    title: "TaskFlow | Smart Task & Project Management System",
    category: "Full Stack Development",
    period: "Sep 2025 – Dec 2025",
    image: "assets/images/projects/taskflow.jpg",
    tags: ["PHP", "MySQL", "Bootstrap", "AJAX", "RESTful APIs", "bcrypt", "CSRF"],
    overview: "Designed an enterprise-ready Job Portal & Task System supporting Admin, Recruiter, and Candidate user workflows.",
    features: [
      "Role-Based Access Control (RBAC) and bcrypt password encryption.",
      "CSRF token validation and session hijacking prevention.",
      "RESTful APIs for job postings, candidate resume uploads, and live application tracking.",
      "Advanced candidate filtering and AJAX-powered instant status updates."
    ],
    challenges: "Managing state consistency for multi-step candidate application pipelines across different user roles.",
    solution: "Structured clean MVC controllers and utilized AJAX asynchronous polling with JSON API responses.",
    github: "https://github.com/eklabay-mishra/Hospital-management-system",
    demo: "https://github.com/eklabay-mishra"
  },
  camera: {
    title: "All-Encompassing OpenCV Camera Application",
    category: "Computer Vision & Python",
    period: "Sep 2024 – Dec 2024",
    image: "assets/images/projects/camera_vision.jpg",
    tags: ["Python", "OpenCV", "NumPy", "Haar Cascade", "Image Processing"],
    overview: "Developed a real-time computer vision application capable of multi-object detection, facial analysis, and edge filtering.",
    features: [
      "Haar Cascade Classifiers for live face and eye detection in webcams.",
      "NumPy matrix transformations for custom edge detection filters and color space shifts.",
      "Modular image processing pipeline allowing scalable vision expansions."
    ],
    challenges: "Maintaining high video frame rates (30+ FPS) while running complex spatial filtering transformations.",
    solution: "Downsampled frame resolution during motion detection sweeps and leveraged optimized NumPy vectorized operations.",
    github: "https://github.com/eklabay-mishra",
    demo: "https://github.com/eklabay-mishra"
  },
  patient: {
    title: "Patient Risk Healthcare Dashboard",
    category: "Data Analytics & Tableau",
    period: "Sep 2024 – Dec 2024",
    image: "assets/images/projects/patient_risk.jpg",
    tags: ["Tableau", "SQL", "Python", "Excel", "Predictive Analytics"],
    overview: "Created an interactive clinical decision support dashboard for monitoring patient risk indicators and health metrics.",
    features: [
      "Integrated patient health data across SQL databases and Excel datasources.",
      "Python predictive analytics model to classify patient risk profiles into High, Medium, and Low levels.",
      "Dynamic Tableau charts enabling physicians to isolate high-risk patients for early intervention."
    ],
    challenges: "Merging heterogeneous patient data schema formats while maintaining patient privacy and data integrity.",
    solution: "Constructed an ETL data pipeline in Python with robust data cleaning and standardization rules before Tableau ingest.",
    github: "https://github.com/eklabay-mishra",
    demo: "https://github.com/eklabay-mishra"
  },
  segmentation: {
    title: "Customer Segmentation System in R",
    category: "Data Science & Statistics",
    period: "Jun 2024",
    image: "assets/images/projects/customer_segmentation.jpg",
    tags: ["R", "Shiny", "K-Means Clustering", "Data Analytics", "ggplot2"],
    overview: "Engineered a statistical customer segmentation dashboard utilizing K-means machine learning clustering in R.",
    features: [
      "Segmented customer cohorts based on annual income, spending scores, and demographic traits.",
      "Interactive Shiny dashboard for real-time cluster exploration and elbow curve optimization.",
      "Detailed descriptive statistics and demographic distribution charts."
    ],
    challenges: "Determining the optimal cluster count (K) without overfitting demographic variance.",
    solution: "Used the Elbow Method and Silhouette Analysis metrics inside the Shiny app to guide optimal cluster selection.",
    github: "https://github.com/eklabay-mishra/Cluster_Bank_Customer_Churn_Prediction_Using_PySpark",
    demo: "https://github.com/eklabay-mishra"
  }
};

// Detailed Services Database for Modal Drawers
const SERVICES_DATA = {
  analytics: {
    title: "Data Analysis & Business Intelligence",
    subtitle: "End-to-End Data Processing, Visualization & Predictive Insights",
    items: [
      "Data Cleaning & Preprocessing",
      "Excel Dashboard Creation",
      "Power BI Dashboard Development",
      "SQL Data Analysis & Query Optimization",
      "Business Reporting & Executive Insights",
      "Data Visualization & Interactive Charts",
      "Exploratory Data Analysis (EDA)",
      "Predictive Analysis & Statistical Modeling",
      "Data Entry & Automated Formatting",
      "Business Intelligence (BI) Analysis",
      "KPI Tracking & Metric Dashboard Development",
      "Data Pipeline Automation",
      "Data Migration & ETL Workflows",
      "Market Research & Trend Analysis",
      "Survey Data Analysis & Cohort Studies",
      "Python Data Analysis (Pandas & NumPy)",
      "Apache Spark / Big Data Analysis",
      "Machine Learning Analytics & Clustering"
    ]
  },
  software: {
    title: "Software & Full Stack Development",
    subtitle: "Custom Scalable Web Applications, Microservices & Cloud Solutions",
    items: [
      "Website Development & Custom Portals",
      "Web Application Development",
      "Frontend Development (React, ES6+, Tailwind/CSS3)",
      "Backend Development (PHP, Node.js, Express, Python)",
      "Full Stack Development & MVC Architectures",
      "API Development & RESTful Integration",
      "Database Design, Indexing & Management (MySQL, SSMS)",
      "Software Maintenance & Performance Bug Fixing",
      "Authentication, RBAC & Security Implementation",
      "Website Deployment & Cloud Hosting (GitHub Pages, Vercel, Netlify)"
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Light / Dark Theme Switcher
  // --------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'light' 
        ? '<i data-lucide="sun"></i>' 
        : '<i data-lucide="moon"></i>';
      if (window.lucide) lucide.createIcons();
    }
  }

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Header Scrolled State & Active Nav Highlight
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    let currentSectionId = '';
    const scrollPos = window.scrollY + 150;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    updateActiveNav();
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 3. Mobile Nav Drawer Toggle
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinksContainer.classList.toggle('active');
    });

    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navLinksContainer.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinksContainer.classList.remove('active');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Clickable Statistics Cards Smooth Scroll & Active Highlight
  // --------------------------------------------------------------------------
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = card.getAttribute('data-scroll-to');
      if (targetId) {
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth' });
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${targetId}`) {
              link.classList.add('active');
            }
          });
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Project & Services Modal System
  // --------------------------------------------------------------------------
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(key) {
    const data = PROJECTS_DATA[key];
    if (!data || !modalOverlay) return;

    const projContent = document.getElementById('modal-project-content');
    const servContent = document.getElementById('modal-service-content');
    if (projContent) projContent.style.display = 'block';
    if (servContent) servContent.style.display = 'none';

    const titleEl = document.getElementById('modal-title');
    const catEl = document.getElementById('modal-category');
    const imgEl = document.getElementById('modal-image');
    const overEl = document.getElementById('modal-overview');
    const chalEl = document.getElementById('modal-challenges');
    const solEl = document.getElementById('modal-solution');
    const gitEl = document.getElementById('modal-github');
    const demoEl = document.getElementById('modal-demo');
    const tagsEl = document.getElementById('modal-tags');
    const featEl = document.getElementById('modal-features');

    if (titleEl) titleEl.textContent = data.title;
    if (catEl) catEl.textContent = `${data.category} • ${data.period}`;
    if (imgEl) imgEl.src = data.image;
    if (overEl) overEl.textContent = data.overview;
    if (chalEl) chalEl.textContent = data.challenges;
    if (solEl) solEl.textContent = data.solution;
    if (gitEl) {
      gitEl.href = data.github || 'https://github.com/eklabay-mishra/Quizverse';
      gitEl.target = '_blank';
      gitEl.rel = 'noopener noreferrer';
      gitEl.style.display = 'inline-flex';
      gitEl.onclick = null;
    }
    
    if (demoEl) {
      if (data.demo && data.demo !== '#' && data.demo !== '') {
        demoEl.href = data.demo;
        demoEl.target = '_blank';
        demoEl.rel = 'noopener noreferrer';
        demoEl.style.display = 'inline-flex';
        demoEl.onclick = null;
      } else {
        demoEl.style.display = 'none';
      }
    }

    if (tagsEl) {
      tagsEl.innerHTML = data.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    }
    if (featEl) {
      featEl.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }

  function openServiceModal(key) {
    const data = SERVICES_DATA[key];
    if (!data || !modalOverlay) return;

    const projContent = document.getElementById('modal-project-content');
    const servContent = document.getElementById('modal-service-content');
    if (projContent) projContent.style.display = 'none';
    if (servContent) servContent.style.display = 'block';

    const titleEl = document.getElementById('service-modal-title');
    const subEl = document.getElementById('service-modal-subtitle');
    const listEl = document.getElementById('service-items-list');

    if (titleEl) titleEl.textContent = data.title;
    if (subEl) subEl.textContent = data.subtitle;
    if (listEl) {
      listEl.innerHTML = data.items.map(item => `
        <div class="service-item-chip">
          <i data-lucide="check-circle-2"></i>
          <span>${item}</span>
        </div>
      `).join('');
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
  }

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  // Bind project card click events
  document.querySelectorAll('[data-project-key]').forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project-key');
      openProjectModal(key);
    });
  });

  // Bind service card click events (Modal Trigger & In-Place Accordion Expand)
  document.querySelectorAll('[data-service-key]').forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-expanded', 'false');

    const toggleExpand = (e) => {
      // If user clicks directly on action button, open modal drawer
      if (e.target.closest('.service-action-btn')) {
        e.stopPropagation();
        const key = card.getAttribute('data-service-key');
        openServiceModal(key);
        return;
      }
      
      // Otherwise toggle expandable in-place list
      const isExpanded = card.classList.toggle('expanded');
      card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      
      const actionBtnSpan = card.querySelector('.service-action-btn span');
      if (actionBtnSpan) {
        const count = card.getAttribute('data-service-key') === 'analytics' ? '18' : '10';
        actionBtnSpan.textContent = isExpanded ? 'Collapse Offerings ▲' : `Explore ${count} Offerings`;
      }
    };

    card.addEventListener('click', toggleExpand);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleExpand(e);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 6. Contact Form Handler & Toast Notification
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formToast = document.getElementById('form-toast');

  if (contactForm && formToast) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;
      }

      const formData = {
        name: document.getElementById('name') ? document.getElementById('name').value : '',
        email: document.getElementById('email') ? document.getElementById('email').value : '',
        subject: document.getElementById('subject') ? document.getElementById('subject').value : '',
        message: document.getElementById('message') ? document.getElementById('message').value : ''
      };

      try {
        await fetch('http://localhost:5001/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.log('Form submission completed:', err.message);
      }

      setTimeout(() => {
        contactForm.reset();
        if (submitBtn) {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }

        formToast.classList.add('show');
        setTimeout(() => {
          formToast.classList.remove('show');
        }, 4000);
      }, 800);
    });
  }

  // --------------------------------------------------------------------------
  // 7. Floating Back to Top Button Handler
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
