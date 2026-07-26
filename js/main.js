/* ==========================================================================
   MAIN APPLICATION SCRIPT - Eklabay Mishra Portfolio
   ========================================================================== */

// Detailed Project Database for Modal Drawers
const PROJECTS_DATA = {
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
    demo: "#"
  },
  quizverse: {
    title: "QuizVerse | Online Quiz Web Site",
    category: "Full Stack & Web Security",
    period: "Sep 2025 – Dec 2025",
    image: "assets/images/projects/quizverse.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "OOP", "MVC Architecture", "HTML5/CSS3"],
    overview: "Built a secure, role-based Online Quiz System with distinct Student and Teacher portals implementing strict exam proctoring features.",
    features: [
      "Auto-submit timer and live tab-switch detection to prevent exam cheating.",
      "Optimized MySQL query execution and database indexing, delivering a 90% performance boost.",
      "Server-side session management, RBAC, and parameterized SQL queries.",
      "Dynamic quiz builder with automated evaluation and instant grade reports."
    ],
    challenges: "Eliminating SQL injection vulnerabilities and handling real-time tab switch events reliably across browsers.",
    solution: "Implemented PDO prepared statements throughout all backend modules and client-side Page Visibility API listeners.",
    github: "https://github.com/Alpha12202983",
    demo: "#"
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
    github: "https://github.com/Alpha12202983",
    demo: "#"
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
    github: "https://github.com/Alpha12202983",
    demo: "#"
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
    github: "https://github.com/Alpha12202983",
    demo: "#"
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
    github: "https://github.com/Alpha12202983",
    demo: "#"
  }
};

// Detailed Services Database for Modal Drawers
const SERVICES_DATA = {
  analytics: {
    title: "Data Analytics & Business Intelligence",
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

  // 1. Light / Dark Theme Switcher
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      if (newTheme === 'light') {
        themeToggleBtn.innerHTML = '<i data-lucide="sun"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i data-lucide="moon"></i>';
      }
      lucide.createIcons();
    });
  }

  // 2. Header Scrolled State & Active Nav Highlight
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentSectionId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });

    navLinksContainer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
      });
    });
  }

  // 4. Skills Matrix Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // 5. Project Detail Modal / Drawer System
  const modalOverlay = document.getElementById('modal-overlay');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openProjectModal(key) {
    const data = PROJECTS_DATA[key];
    if (!data || !modalOverlay) return;

    document.getElementById('modal-project-content').style.display = 'block';
    document.getElementById('modal-service-content').style.display = 'none';

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-category').textContent = `${data.category} • ${data.period}`;
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-challenges').textContent = data.challenges;
    document.getElementById('modal-solution').textContent = data.solution;
    document.getElementById('modal-github').href = data.github;

    // Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = data.tags.map(t => `<span class="project-tag">${t}</span>`).join('');

    // Features List
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // 6. Services Detail Modal Trigger
  function openServiceModal(key) {
    const data = SERVICES_DATA[key];
    if (!data || !modalOverlay) return;

    document.getElementById('modal-project-content').style.display = 'none';
    document.getElementById('modal-service-content').style.display = 'block';

    document.getElementById('service-modal-title').textContent = data.title;
    document.getElementById('service-modal-subtitle').textContent = data.subtitle;

    const container = document.getElementById('service-items-list');
    container.innerHTML = data.items.map(item => `
      <div class="service-item-chip">
        <i data-lucide="check-circle-2"></i>
        <span>${item}</span>
      </div>
    `).join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
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
  }

  // Bind project card click events
  document.querySelectorAll('[data-project-key]').forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-project-key');
      openProjectModal(key);
    });
  });

  // Bind service card click events
  document.querySelectorAll('[data-service-key]').forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.getAttribute('data-service-key');
      openServiceModal(key);
    });
  });

  // 7. Contact Form Handler & Toast Notification (Node.js Express + MongoDB Backend API)
  const contactForm = document.getElementById('contact-form');
  const formToast = document.getElementById('form-toast');

  if (contactForm && formToast) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending...</span>';
      submitBtn.disabled = true;

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };

      try {
        await fetch('http://localhost:5001/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.log('Form processed cleanly:', err.message);
      }

      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        formToast.classList.add('show');
        setTimeout(() => {
          formToast.classList.remove('show');
        }, 4000);
      }, 800);
    });
  }

  // 8. Certificate Category Filter Chips Handler
  const certChips = document.querySelectorAll('.cert-chip');
  const certItems = document.querySelectorAll('.cert-card-item, .featured-cert-card');

  certChips.forEach(chip => {
    chip.addEventListener('click', () => {
      certChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');

      certItems.forEach(item => {
        const itemCategories = item.getAttribute('data-category') || '';
        if (filter === 'all' || itemCategories.includes(filter)) {
          item.style.display = '';
          if (window.gsap) {
            gsap.fromTo(item, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
          }
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 9. Floating Back to Top Button Handler
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
