/**
 * LocalJobs - Interactive Local City Job Portal
 * Supports local resources & businesses: Schools, Colleges, Hospitals,
 * Hotels, Shops, Showrooms, Lawyers, Auditors, Clubs, and more.
 */

// Storage Keys
const STORAGE_KEYS = {
  JOBS: 'LOCAL_JOBS_DATA_V1',
  PROFILE: 'LOCAL_JOBS_PROFILE_V1',
  APPLICATIONS: 'LOCAL_JOBS_APPLICATIONS_V1',
  SAVED: 'LOCAL_JOBS_SAVED_V1'
};

// Business Categories metadata with icons & colors
const BUSINESS_CATEGORIES = {
  all: { label: 'All Businesses', icon: '🏢' },
  school: { label: 'Schools', icon: '🏫', desc: 'Primary & High Schools, Academies' },
  college: { label: 'Colleges', icon: '🎓', desc: 'Arts, Science & Engineering Colleges' },
  hospital: { label: 'Hospitals & Clinics', icon: '🏥', desc: 'Nursing Homes, Clinics & Labs' },
  hotel: { label: 'Hotels & Dining', icon: '🏨', desc: 'Hotels, Restaurants, Cafes & Catering' },
  shop: { label: 'Retail & Shops', icon: '🛍️', desc: 'Supermarkets, Boutiques & Stores' },
  showroom: { label: 'Showrooms', icon: '🚗', desc: 'Auto, Electronics & Furniture Showrooms' },
  lawyer: { label: 'Lawyers & Legal', icon: '⚖️', desc: 'Advocate Chambers & Legal Consultancies' },
  auditor: { label: 'Auditors & CA', icon: '📊', desc: 'Chartered Accountants & Tax Firms' },
  club: { label: 'Clubs & Recreation', icon: '🎾', desc: 'Social Clubs, Gyms & Community Centers' }
};

// City Localities / Areas
const CITY_AREAS = [
  'All Areas',
  'Anna Nagar',
  'T. Nagar',
  'Velachery',
  'Nungambakkam',
  'Mylapore',
  'Alwarpet',
  'George Town / High Court',
  'Egmore',
  'Guindy',
  'Kodambakkam',
  'Adyar'
];

// Initial Realistic Seed Dataset
const SEED_JOBS = [
  {
    id: 'job-1',
    title: 'Billing Executive',
    company: 'Sri Lakshmi Showroom',
    category: 'showroom',
    categoryLabel: 'Automobile & Electronics Showroom',
    location: '12, 2nd Avenue, Anna Nagar',
    area: 'Anna Nagar',
    salary: '₹18,000 - ₹22,000 / month',
    salaryMin: 18000,
    salaryMax: 22000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Mon-Sat 10:30 AM to 5:00 PM at 1st Floor Admin Office',
    skills: ['billing', 'tally', 'customer service', 'ms excel'],
    description: 'Responsible for daily showroom counter billing, GST invoice generation using Tally Prime, processing card/UPI payments, and resolving customer billing queries with a courteous attitude.',
    requirements: [
      'Minimum 1 year counter billing or retail experience',
      'Hands-on proficiency in Tally and basic Excel',
      'Good communication in local language and basic English'
    ],
    contactPerson: 'Mr. Rajesh Kumar (Store Manager)',
    contactPhone: '+91 98400 11223',
    contactEmail: 'careers@srilakshmishowroom.com',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Verified local showroom · No red flags found',
    isFeatured: true,
    postedAt: '2 hours ago'
  },
  {
    id: 'job-2',
    title: 'Front Desk Associate',
    company: 'Green Leaf Boutique Hotel',
    category: 'hotel',
    categoryLabel: 'Hotels & Dining',
    location: '45, Venkatnarayana Road, T. Nagar',
    area: 'T. Nagar',
    salary: '₹16,000 - ₹20,000 / month',
    salaryMin: 16000,
    salaryMax: 20000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Daily 11:00 AM to 4:00 PM at Front Desk',
    skills: ['customer service', 'front desk', 'english', 'communication'],
    description: 'Welcome and check-in guests, handle reservations on hotel software, manage guest inquiries, coordinate room service requests, and ensure pleasant guest hospitality.',
    requirements: [
      'Pleasant interpersonal manner and clear verbal communication',
      'Comfortable with rotating shifts (morning/evening)',
      'Basic computer and email handling skills'
    ],
    contactPerson: 'Ms. Sunitha R. (HR Manager)',
    contactPhone: '+91 98410 33445',
    contactEmail: 'hr@greenleafhotel.com',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Verified boutique hotel · Licensed hospitality business',
    isFeatured: true,
    postedAt: 'Today'
  },
  {
    id: 'job-3',
    title: 'Computer Lab Assistant',
    company: 'City College of Arts & Science',
    category: 'college',
    categoryLabel: 'Colleges',
    location: 'Bypass Road, Velachery',
    area: 'Velachery',
    salary: '₹15,000 - ₹18,000 / month',
    salaryMin: 15000,
    salaryMax: 18000,
    type: 'Full Time',
    isWalkIn: false,
    walkInDetails: 'Interviews scheduled upon resume screening',
    skills: ['hardware', 'networking', 'windows', 'lab maintenance'],
    description: 'Maintain college computer lab systems, assist students and professors during practical sessions, install educational software, and troubleshoot basic LAN and printer issues.',
    requirements: [
      'Diploma or BSc in Computer Science / IT / BCA',
      'Knowledge of Windows OS, software installation, and LAN setup',
      'Punctual and student-friendly attitude'
    ],
    contactPerson: 'Prof. S. Natarajan (Head of CS Dept)',
    contactPhone: '+91 94440 55667',
    contactEmail: 'admissions@citycollege.edu',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Verified educational institution · UGC affiliated',
    isFeatured: false,
    postedAt: 'Yesterday'
  },
  {
    id: 'job-4',
    title: 'Primary English & Social Studies Teacher',
    company: 'Apex Cambridge Matriculation School',
    category: 'school',
    categoryLabel: 'Schools',
    location: 'Plot 78, 6th Main Road, Anna Nagar',
    area: 'Anna Nagar',
    salary: '₹20,000 - ₹26,000 / month',
    salaryMin: 20000,
    salaryMax: 26000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Mon to Fri 9:00 AM to 1:00 PM at School Campus',
    skills: ['teaching', 'english', 'communication', 'classroom management'],
    description: 'Teach English grammar, reading comprehension, and Social Science to Classes 3 to 5. Prepare interactive lesson plans, evaluate homework, and engage with parents during PTMs.',
    requirements: [
      'B.Ed / D.T.Ed or Bachelor degree in English / Arts',
      'Fluent spoken and written English',
      'Warm, patient personality with young children'
    ],
    contactPerson: 'Mrs. Malathi S. (Principal)',
    contactPhone: '+91 98402 77889',
    contactEmail: 'careers@apexschool.org',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Government recognized matriculation school',
    isFeatured: false,
    postedAt: '2 days ago'
  },
  {
    id: 'job-5',
    title: 'Clinic Staff Nurse (Day Shift)',
    company: 'City Care Multi-Specialty Clinic',
    category: 'hospital',
    categoryLabel: 'Hospitals & Clinics',
    location: '18, North Usman Road, T. Nagar',
    area: 'T. Nagar',
    salary: '₹22,000 - ₹28,000 / month',
    salaryMin: 22000,
    salaryMax: 28000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Walk-in Mon-Sat 10 AM - 1 PM with Nursing Council Registration',
    skills: ['patient care', 'vital signs', 'injections', 'clinical billing'],
    description: 'Assist consulting doctors during OPD hours, measure vital signs (BP, temperature, pulse), administer prescribed injections/dressings, maintain patient health cards, and explain dosage instructions.',
    requirements: [
      'GNM or B.Sc Nursing qualification',
      'Active State Nursing Council registration',
      'Compassionate demeanor and basic computer skills'
    ],
    contactPerson: 'Dr. K. Anand (Medical Superintendent)',
    contactPhone: '+91 98405 99001',
    contactEmail: 'careers@citycareclinic.in',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'NABH accredited local clinical center',
    isFeatured: true,
    postedAt: '3 days ago'
  },
  {
    id: 'job-6',
    title: 'Junior Auditor & GST Filing Assistant',
    company: 'Kothari & Mehta Chartered Accountants',
    category: 'auditor',
    categoryLabel: 'Auditors & CA',
    location: 'Tower 4, Sterling Road, Nungambakkam',
    area: 'Nungambakkam',
    salary: '₹18,000 - ₹25,000 / month',
    salaryMin: 18000,
    salaryMax: 25000,
    type: 'Full Time',
    isWalkIn: false,
    walkInDetails: 'Resume review followed by technical interview',
    skills: ['tally', 'gst', 'taxation', 'ms excel', 'accounting'],
    description: 'Assist Senior CA partners with client ledger scrutiny, preparation of monthly GSTR-1 and GSTR-3B filings, bank reconciliation statements, TDS computations, and vouching for annual statutory audits.',
    requirements: [
      'B.Com / M.Com or semi-qualified CA Inter / CMA',
      'Thorough understanding of Tally Prime and advanced Excel (VLOOKUP, Pivot)',
      '1+ year accounting firm experience preferred'
    ],
    contactPerson: 'Mr. Arvind Mehta, FCA (Partner)',
    contactPhone: '+91 98403 44556',
    contactEmail: 'careers@kotharimehta.com',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'ICAI registered firm of Chartered Accountants',
    isFeatured: true,
    postedAt: '3 days ago'
  },
  {
    id: 'job-7',
    title: 'Legal Assistant & Steno-Typist',
    company: 'V. Ramanathan & Associates - High Court Advocates',
    category: 'lawyer',
    categoryLabel: 'Lawyers & Legal',
    location: 'Chamber 210, Armenian Street, High Court Area',
    area: 'George Town / High Court',
    salary: '₹17,000 - ₹23,000 / month',
    salaryMin: 17000,
    salaryMax: 23000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Walk-in Mon to Fri 4:00 PM to 7:00 PM at Law Chamber',
    skills: ['legal drafting', 'english typing', 'case filing', 'ms office'],
    description: 'Prepare and format legal briefs, writ petitions, and affidavits under advocate supervision. Maintain court cause lists, track hearing dates, coordinate case bundles for High Court & City Civil Court filings.',
    requirements: [
      'High typing speed (40+ WPM) in English',
      'Prior experience in advocate chambers or legal firms',
      'Knowledge of court filing protocols and case docketing'
    ],
    contactPerson: 'Adv. V. Ramanathan (Senior Advocate)',
    contactPhone: '+91 98401 88990',
    contactEmail: 'chambers@ramanathanlaw.in',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Bar Council registered advocate chamber',
    isFeatured: false,
    postedAt: '4 days ago'
  },
  {
    id: 'job-8',
    title: 'Cashier & Counter Sales Staff',
    company: 'Metro Supermarket & Department Store',
    category: 'shop',
    categoryLabel: 'Retail & Shops',
    location: '3rd Avenue, Roundana, Anna Nagar',
    area: 'Anna Nagar',
    salary: '₹14,000 - ₹17,000 / month',
    salaryMin: 14000,
    salaryMax: 17000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Walk-in daily between 10 AM to 6 PM directly at Cash Counter 1',
    skills: ['billing', 'pos system', 'cash handling', 'customer service'],
    description: 'Scan barcodes at supermarket POS checkout counters, issue bills, accept cash/UPI payments, handle customer bag checks, and help customers find items on retail shelves.',
    requirements: [
      'High school pass (10th / 12th standard)',
      'Basic numerical ability and speed in counter billing',
      'Courteous and reliable'
    ],
    contactPerson: 'Mr. Selvam (Store Supervisor)',
    contactPhone: '+91 98404 12121',
    contactEmail: 'jobs@metrosupermarket.local',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Local retail supermarket chain · Verified business',
    isFeatured: false,
    postedAt: '4 days ago'
  },
  {
    id: 'job-9',
    title: 'Front Office & Member Relations Executive',
    company: 'The Cosmopolitan City Club',
    category: 'club',
    categoryLabel: 'Clubs & Recreation',
    location: 'Halls Road, Egmore',
    area: 'Egmore',
    salary: '₹18,000 - ₹24,000 / month',
    salaryMin: 18000,
    salaryMax: 24000,
    type: 'Full Time',
    isWalkIn: false,
    walkInDetails: 'Interviews held every Saturday at Club Office',
    skills: ['customer service', 'front office', 'communication', 'event coordination'],
    description: 'Attend to club member queries, manage sports facility bookings (badminton, tennis, swimming), coordinate social event reservations, process subscription billings, and uphold club etiquette.',
    requirements: [
      'Pleasing personality with excellent conversational English',
      'Experience in club, hospitality, or recreation front desk',
      'Comfortable using club management software'
    ],
    contactPerson: 'Mr. David Paul (Club Secretary)',
    contactPhone: '+91 98407 65654',
    contactEmail: 'admin@cityclub.org',
    status: 'approved',
    safetyStatus: 'clean',
    safetyNotes: 'Historic registered social and sports association',
    isFeatured: false,
    postedAt: '5 days ago'
  },
  // Pending review items (shown in Admin review view)
  {
    id: 'job-pending-1',
    title: 'Hardware & Paint Store Supervisor',
    company: 'Bhavani Hardware & Paints',
    category: 'shop',
    categoryLabel: 'Retail & Shops',
    location: '102, Triplicane High Road',
    area: 'Mylapore',
    salary: '₹16,000 - ₹19,000 / month',
    salaryMin: 16000,
    salaryMax: 19000,
    type: 'Full Time',
    isWalkIn: true,
    walkInDetails: 'Mon-Sat 11 AM - 3 PM at Store Counter',
    skills: ['inventory', 'sales', 'billing', 'customer service'],
    description: 'Manage store inventory of building materials and Asian Paints, oversee counter sales assistants, place stock replenishment orders, and manage bill books.',
    requirements: [
      '2+ years in hardware or paint trade',
      'Good local language fluency'
    ],
    contactPerson: 'Mr. Ramesh Patel',
    contactPhone: '+91 98408 88776',
    contactEmail: 'bhavanipaints@gmail.com',
    status: 'pending',
    safetyStatus: 'clean',
    safetyNotes: '✓ No red flags found · Verified local phone & shop address',
    isFeatured: false,
    postedAt: '30 mins ago'
  },
  {
    id: 'job-pending-2',
    title: 'Data Entry Work From Home - Earn Daily',
    company: 'QuickEarn Services',
    category: 'shop',
    categoryLabel: 'Other / Online',
    location: 'Online / Remote',
    area: 'All Areas',
    salary: '₹30,000 - ₹45,000 / month',
    salaryMin: 30000,
    salaryMax: 45000,
    type: 'Part Time',
    isWalkIn: false,
    walkInDetails: 'WhatsApp only',
    skills: ['typing', 'data entry', 'ms excel'],
    description: 'Simple copy paste and typing jobs from home. Earn up to 2000 daily. Requires one-time registration fee of ₹499 for software setup and test papers.',
    requirements: [
      'Laptop or smartphone',
      'Pay refundable security deposit'
    ],
    contactPerson: 'Agent Rahul',
    contactPhone: '+91 90000 00000',
    contactEmail: 'earnfast99@yahoo.com',
    status: 'pending',
    safetyStatus: 'flagged',
    safetyNotes: '⚠ Flagged: "registration fee" and "security deposit" detected. Invalid contact pattern. High risk of fee scam.',
    isFeatured: false,
    postedAt: '1 hour ago'
  }
];

// Initial Profile
const DEFAULT_PROFILE = {
  name: 'Priya R.',
  headline: 'Accounts & Customer Support Specialist',
  phone: '+91 98401 23456',
  email: 'priya.candidate@gmail.com',
  skills: ['billing', 'tally', 'customer service', 'ms excel'],
  experience: '2 Years',
  locality: 'Anna Nagar'
};

// Initial Seed Applications
const SEED_APPLICATIONS = [
  {
    id: 'app-1',
    jobId: 'job-1',
    jobTitle: 'Billing Executive',
    company: 'Sri Lakshmi Showroom',
    applicantName: 'Priya R.',
    applicantPhone: '+91 98401 23456',
    applicantEmail: 'priya.candidate@gmail.com',
    matchScore: 92,
    skills: ['billing', 'tally', 'customer service', 'ms excel'],
    note: 'I have 2 years of counter billing experience in retail using Tally Prime. I live in Anna Nagar and can join immediately.',
    status: 'Under Review',
    appliedAt: 'Today at 10:30 AM'
  },
  {
    id: 'app-2',
    jobId: 'job-2',
    jobTitle: 'Front Desk Associate',
    company: 'Green Leaf Boutique Hotel',
    applicantName: 'Karthik S.',
    applicantPhone: '+91 98402 34567',
    applicantEmail: 'karthik.s@gmail.com',
    matchScore: 78,
    skills: ['customer service', 'front desk', 'english'],
    note: 'Experienced with hotel front office reception and guest greeting. Open to rotating shift duties.',
    status: 'Shortlisted',
    appliedAt: 'Yesterday'
  }
];

// State Manager
class LocalJobsApp {
  constructor() {
    this.jobs = [];
    this.profile = {};
    this.applications = [];
    this.savedJobIds = new Set();
    
    // UI Filters
    this.currentView = 'find-jobs';
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.selectedArea = 'All Areas';
    this.selectedType = 'all';
    this.sortBy = 'match';
    this.adminFilter = 'pending';

    this.init();
  }

  init() {
    this.loadFromStorage();
    this.bindEvents();
    this.render();
  }

  loadFromStorage() {
    try {
      const storedJobs = localStorage.getItem(STORAGE_KEYS.JOBS);
      this.jobs = storedJobs ? JSON.parse(storedJobs) : [...SEED_JOBS];
      if (!storedJobs) {
        this.saveJobs();
      }

      const storedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      this.profile = storedProfile ? JSON.parse(storedProfile) : { ...DEFAULT_PROFILE };
      if (!storedProfile) {
        this.saveProfile();
      }

      const storedApps = localStorage.getItem(STORAGE_KEYS.APPLICATIONS);
      this.applications = storedApps ? JSON.parse(storedApps) : [...SEED_APPLICATIONS];
      if (!storedApps) {
        this.saveApplications();
      }

      const storedSaved = localStorage.getItem(STORAGE_KEYS.SAVED);
      this.savedJobIds = new Set(storedSaved ? JSON.parse(storedSaved) : ['job-1']);
      if (!storedSaved) {
        this.saveSaved();
      }
    } catch (e) {
      console.error('Storage error, falling back to defaults:', e);
      this.jobs = [...SEED_JOBS];
      this.profile = { ...DEFAULT_PROFILE };
      this.applications = [...SEED_APPLICATIONS];
      this.savedJobIds = new Set(['job-1']);
    }
  }

  saveJobs() {
    localStorage.setItem(STORAGE_KEYS.JOBS, JSON.stringify(this.jobs));
  }

  saveProfile() {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(this.profile));
  }

  saveApplications() {
    localStorage.setItem(STORAGE_KEYS.APPLICATIONS, JSON.stringify(this.applications));
  }

  saveSaved() {
    localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(Array.from(this.savedJobIds)));
  }

  // Calculate Match Score between user profile and job requirements
  calculateMatchScore(job) {
    if (!this.profile.skills || !job.skills || job.skills.length === 0) {
      return { score: 30, matched: [], missing: job.skills || [] };
    }

    const userSkills = this.profile.skills.map(s => s.toLowerCase().trim());
    const jobSkills = job.skills.map(s => s.toLowerCase().trim());

    const matched = [];
    const missing = [];

    jobSkills.forEach(js => {
      const isMatch = userSkills.some(us => us.includes(js) || js.includes(us));
      if (isMatch) {
        matched.push(js);
      } else {
        missing.push(js);
      }
    });

    // Score calculation
    let percentage = 0;
    if (matched.length === jobSkills.length) {
      percentage = 92 + Math.floor(Math.random() * 5); // 92-96%
    } else if (matched.length > 0) {
      percentage = Math.round((matched.length / jobSkills.length) * 80) + 10;
    } else {
      percentage = 25 + Math.floor(Math.random() * 15);
    }

    // Boost if preferred area matches
    if (this.profile.locality && job.area && job.area.toLowerCase().includes(this.profile.locality.toLowerCase())) {
      percentage = Math.min(99, percentage + 4);
    }

    return { score: Math.min(99, percentage), matched, missing };
  }

  // Bind Event Listeners
  bindEvents() {
    // Navigation Tabs (Desktop & Mobile)
    document.querySelectorAll('[data-view-target]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetView = btn.getAttribute('data-view-target');
        this.switchView(targetView);
      });
    });

    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderJobsList();
      });
    }

    // Category Pills
    document.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.selectedCategory = pill.getAttribute('data-category');
        this.renderJobsList();
      });
    });

    // Area Filter Select
    const areaSelect = document.getElementById('filter-area-select');
    if (areaSelect) {
      areaSelect.addEventListener('change', (e) => {
        this.selectedArea = e.target.value;
        this.renderJobsList();
      });
    }

    // Sort By Select
    const sortSelect = document.getElementById('filter-sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderJobsList();
      });
    }

    // Job Type chips
    document.querySelectorAll('.type-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.type-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.selectedType = chip.getAttribute('data-type');
        this.renderJobsList();
      });
    });

    // Edit Profile Modal
    const editProfileBtn = document.getElementById('btn-edit-profile');
    if (editProfileBtn) {
      editProfileBtn.addEventListener('click', () => this.openProfileModal());
    }

    // Upload Resume Simulator
    const uploadResumeBtn = document.getElementById('btn-upload-resume');
    if (uploadResumeBtn) {
      uploadResumeBtn.addEventListener('click', () => this.openResumeUploadModal());
    }

    // Post a Job Form submission & input listeners for Live Preview
    const postForm = document.getElementById('post-job-form');
    if (postForm) {
      postForm.addEventListener('submit', (e) => this.handleJobSubmit(e));
      // Live updates to preview
      ['post-title', 'post-company', 'post-category', 'post-area', 'post-salary', 'post-skills', 'post-desc'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('input', () => this.updateLivePreview());
        }
      });
    }

    // Admin filter sub-tabs
    document.querySelectorAll('.admin-sub-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-sub-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.adminFilter = tab.getAttribute('data-admin-filter');
        this.renderAdminView();
      });
    });

    // Reset Demo Data button
    const resetDataBtn = document.getElementById('btn-reset-data');
    if (resetDataBtn) {
      resetDataBtn.addEventListener('click', () => {
        if (confirm('Reset all jobs, applications, and profile to initial demo data?')) {
          localStorage.clear();
          this.jobs = [...SEED_JOBS];
          this.profile = { ...DEFAULT_PROFILE };
          this.applications = [...SEED_APPLICATIONS];
          this.savedJobIds = new Set(['job-1']);
          this.saveJobs();
          this.saveProfile();
          this.saveApplications();
          this.saveSaved();
          this.render();
          this.showToast('All demo data restored to initial state!', 'success');
        }
      });
    }

    // Modal Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });

    // Close modal on clicking overlay background
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });

    // PWA Installation & Add to Home Screen
    this.deferredPrompt = null;
    const pwaBanner = document.getElementById('pwa-install-banner');
    const isBannerDismissed = localStorage.getItem('PWA_BANNER_DISMISSED') === 'true';

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      if (!isBannerDismissed && pwaBanner) {
        pwaBanner.style.display = 'flex';
      }
    });

    // On mobile web browser (not already installed as standalone PWA), show install banner
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isStandalone && isMobile && !isBannerDismissed && pwaBanner) {
      pwaBanner.style.display = 'flex';
    }

    const triggerInstall = async () => {
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt();
        const { outcome } = await this.deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          this.showToast('Installing LocalJobs to your home screen...', 'success');
          if (pwaBanner) pwaBanner.style.display = 'none';
        }
        this.deferredPrompt = null;
      } else {
        // Show iOS / manual browser installation guide
        const guideModal = document.getElementById('install-guide-modal');
        if (guideModal) guideModal.classList.add('active');
      }
    };

    document.getElementById('btn-pwa-install-banner')?.addEventListener('click', triggerInstall);
    document.getElementById('btn-header-install')?.addEventListener('click', triggerInstall);
    document.getElementById('btn-mobile-install')?.addEventListener('click', triggerInstall);

    document.getElementById('btn-pwa-dismiss')?.addEventListener('click', () => {
      if (pwaBanner) pwaBanner.style.display = 'none';
      localStorage.setItem('PWA_BANNER_DISMISSED', 'true');
    });
  }

  // Switch between Find Jobs, Post a Job, Admin Review, and Saved Jobs
  switchView(viewName) {
    this.currentView = viewName;
    document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('[data-view-target]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-view-target') === viewName);
    });

    const activeViewEl = document.getElementById(`view-${viewName}`);
    if (activeViewEl) {
      activeViewEl.classList.add('active');
    }

    if (viewName === 'find-jobs') {
      this.renderJobsList();
    } else if (viewName === 'post-job') {
      this.updateLivePreview();
    } else if (viewName === 'admin-review') {
      this.renderAdminView();
    } else if (viewName === 'saved-jobs') {
      this.renderSavedJobs();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Render Full Application
  render() {
    this.renderProfileCard();
    this.renderCategoryPills();
    this.renderAreaOptions();
    this.renderJobsList();
    this.renderAdminView();
    this.updateBadges();
  }

  // Update notification badges
  updateBadges() {
    const pendingCount = this.jobs.filter(j => j.status === 'pending').length;
    const adminBadges = document.querySelectorAll('.admin-pending-badge');
    adminBadges.forEach(b => {
      b.textContent = pendingCount;
      b.style.display = pendingCount > 0 ? 'inline-block' : 'none';
    });

    const savedCount = this.savedJobIds.size;
    const savedBadges = document.querySelectorAll('.saved-count-badge');
    savedBadges.forEach(b => {
      b.textContent = savedCount;
      b.style.display = savedCount > 0 ? 'inline-block' : 'none';
    });
  }

  // Render Profile Card in Job Seeker View
  renderProfileCard() {
    const profileEl = document.getElementById('profile-widget');
    if (!profileEl) return;

    const skillsHtml = this.profile.skills.map(s => `
      <span class="skill-tag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
        ${s}
      </span>
    `).join('');

    profileEl.innerHTML = `
      <div class="profile-card-top">
        <div class="profile-info">
          <h3>
            <span>${this.profile.name}</span>
            <span style="font-size:12px; font-weight:normal; color:var(--text-muted);">· ${this.profile.locality} · ${this.profile.experience}</span>
          </h3>
          <div class="profile-skills-list">
            ${skillsHtml}
          </div>
        </div>
        <div class="profile-actions">
          <button id="btn-upload-resume" class="btn-outline-primary" title="Parse skills from resume">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            Upload resume
          </button>
          <button id="btn-edit-profile" class="btn-outline-secondary" title="Change skills and area">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Edit profile
          </button>
        </div>
      </div>
    `;

    // Rebind internal buttons
    document.getElementById('btn-upload-resume')?.addEventListener('click', () => this.openResumeUploadModal());
    document.getElementById('btn-edit-profile')?.addEventListener('click', () => this.openProfileModal());
  }

  // Populate Area Select Filter
  renderAreaOptions() {
    const areaSelect = document.getElementById('filter-area-select');
    if (!areaSelect) return;
    areaSelect.innerHTML = CITY_AREAS.map(area => `
      <option value="${area}">${area}</option>
    `).join('');
  }

  // Render Horizontal Category Pills
  renderCategoryPills() {
    const container = document.getElementById('category-pills-container');
    if (!container) return;

    container.innerHTML = Object.entries(BUSINESS_CATEGORIES).map(([key, cat]) => `
      <button class="category-pill ${this.selectedCategory === key ? 'active' : ''}" data-category="${key}">
        <span class="cat-icon">${cat.icon}</span>
        <span>${cat.label}</span>
      </button>
    `).join('');

    // Rebind
    container.querySelectorAll('.category-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        container.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.selectedCategory = pill.getAttribute('data-category');
        this.renderJobsList();
      });
    });
  }

  // Render Job Seeker Search Feed
  renderJobsList() {
    const container = document.getElementById('jobs-feed-container');
    const countEl = document.getElementById('results-count');
    if (!container) return;

    // Filter approved jobs
    let filtered = this.jobs.filter(j => j.status === 'approved');

    // Category filter
    if (this.selectedCategory && this.selectedCategory !== 'all') {
      filtered = filtered.filter(j => j.category === this.selectedCategory);
    }

    // Area filter
    if (this.selectedArea && this.selectedArea !== 'All Areas') {
      filtered = filtered.filter(j => j.area === this.selectedArea);
    }

    // Job Type filter
    if (this.selectedType && this.selectedType !== 'all') {
      if (this.selectedType === 'walkin') {
        filtered = filtered.filter(j => j.isWalkIn);
      } else {
        filtered = filtered.filter(j => j.type.toLowerCase().includes(this.selectedType.toLowerCase()));
      }
    }

    // Keyword search
    if (this.searchQuery) {
      const q = this.searchQuery;
      filtered = filtered.filter(j => 
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.area.toLowerCase().includes(q) ||
        j.categoryLabel.toLowerCase().includes(q) ||
        (j.skills && j.skills.some(s => s.toLowerCase().includes(q))) ||
        (j.description && j.description.toLowerCase().includes(q))
      );
    }

    // Pre-calculate match scores
    const jobsWithScores = filtered.map(job => {
      const matchData = this.calculateMatchScore(job);
      return { ...job, matchData };
    });

    // Sorting
    if (this.sortBy === 'match') {
      jobsWithScores.sort((a, b) => b.matchData.score - a.matchData.score);
    } else if (this.sortBy === 'salary-high') {
      jobsWithScores.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
    } else if (this.sortBy === 'newest') {
      // seed items in natural order
    }

    if (countEl) {
      countEl.textContent = `Showing ${jobsWithScores.length} local opportunities`;
    }

    if (jobsWithScores.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-state-icon">🔍</div>
          <h4>No matching jobs found</h4>
          <p>Try clearing your search query or selecting "All Businesses" or "All Areas".</p>
          <button class="btn-outline-primary" style="margin-top:12px; margin-left:auto; margin-right:auto;" onclick="app.resetFilters()">
            Reset All Filters
          </button>
        </div>
      `;
      return;
    }

    container.innerHTML = jobsWithScores.map(job => this.renderJobCard(job)).join('');
    this.bindJobCardActions(container);
  }

  // Generate single Job Card HTML
  renderJobCard(job) {
    const isSaved = this.savedJobIds.has(job.id);
    const hasApplied = this.applications.some(a => a.jobId === job.id);
    const score = job.matchData.score;
    const scoreClass = score >= 80 ? 'high' : (score >= 50 ? 'medium' : 'low');
    const catMeta = BUSINESS_CATEGORIES[job.category] || { icon: '🏢', label: job.category };

    // Format matched skills
    const matchedText = job.matchData.matched.length > 0 
      ? `Matches: ${job.matchData.matched.join(', ')}`
      : `Skills needed: ${job.skills.slice(0, 3).join(', ')}`;

    return `
      <div class="job-card" data-job-id="${job.id}">
        <div>
          <div class="job-card-header">
            <div class="job-card-title-group">
              <h3>${job.title}</h3>
              <div class="job-card-company">
                <strong>${job.company}</strong>
                <span>·</span>
                <span class="category-tag-badge">${catMeta.icon} ${catMeta.label}</span>
                <span>·</span>
                <span>${job.area}</span>
              </div>
            </div>
            <div class="match-badge ${scoreClass}" title="Calculated based on your profile skills">
              ${score}% match
            </div>
          </div>

          <div class="job-meta-row" style="margin-top:10px;">
            <span class="job-salary-badge">💰 ${job.salary}</span>
            <span class="job-meta-item">⏱️ ${job.type}</span>
            ${job.isWalkIn ? '<span class="job-walkin-badge">⚡ Walk-in Available</span>' : ''}
          </div>

          <div class="job-skills-match-info" style="margin-top:10px;">
            <strong>🎯 ${matchedText}</strong>
          </div>
        </div>

        <div>
          <div class="job-card-actions">
            <button class="btn-apply btn-apply-trigger" data-id="${job.id}">
              ${hasApplied ? 'Applied ✓' : 'Apply'}
            </button>
            <button class="btn-details btn-details-trigger" data-id="${job.id}">
              Details
            </button>
            <button class="btn-bookmark btn-bookmark-trigger ${isSaved ? 'saved' : ''}" data-id="${job.id}" title="${isSaved ? 'Remove bookmark' : 'Bookmark job'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Bind actions on rendered job cards
  bindJobCardActions(container) {
    container.querySelectorAll('.btn-apply-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-id');
        this.openApplyModal(jobId);
      });
    });

    container.querySelectorAll('.btn-details-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-id');
        this.openJobDetailsModal(jobId);
      });
    });

    container.querySelectorAll('.btn-bookmark-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        const jobId = btn.getAttribute('data-id');
        this.toggleBookmark(jobId);
      });
    });
  }

  // Toggle Bookmark
  toggleBookmark(jobId) {
    if (this.savedJobIds.has(jobId)) {
      this.savedJobIds.delete(jobId);
      this.showToast('Job removed from saved bookmarks', 'warning');
    } else {
      this.savedJobIds.add(jobId);
      this.showToast('Job saved to bookmarks!', 'success');
    }
    this.saveSaved();
    this.updateBadges();
    if (this.currentView === 'find-jobs') {
      this.renderJobsList();
    } else if (this.currentView === 'saved-jobs') {
      this.renderSavedJobs();
    }
  }

  // Reset Filters
  resetFilters() {
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.selectedArea = 'All Areas';
    this.selectedType = 'all';
    
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    const areaSelect = document.getElementById('filter-area-select');
    if (areaSelect) areaSelect.value = 'All Areas';

    document.querySelectorAll('.category-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-category') === 'all');
    });

    document.querySelectorAll('.type-chip').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-type') === 'all');
    });

    this.renderJobsList();
  }

  // Render Saved Jobs View
  renderSavedJobs() {
    const container = document.getElementById('saved-jobs-container');
    if (!container) return;

    const savedJobs = this.jobs.filter(j => this.savedJobIds.has(j.id));
    if (savedJobs.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔖</div>
          <h4>No saved jobs yet</h4>
          <p>Click the bookmark icon on any job card to save it for quick access later.</p>
          <button class="btn-outline-primary" style="margin-top:12px; margin-left:auto; margin-right:auto;" onclick="app.switchView('find-jobs')">
            Explore City Jobs
          </button>
        </div>
      `;
      return;
    }

    const jobsWithScores = savedJobs.map(job => {
      const matchData = this.calculateMatchScore(job);
      return { ...job, matchData };
    });

    container.innerHTML = `
      <div class="jobs-grid">
        ${jobsWithScores.map(job => this.renderJobCard(job)).join('')}
      </div>
    `;
    this.bindJobCardActions(container);
  }

  // Modal: View Job Details
  openJobDetailsModal(jobId) {
    const job = this.jobs.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('job-details-modal');
    const content = document.getElementById('job-details-modal-content');
    if (!modal || !content) return;

    const matchData = this.calculateMatchScore(job);
    const catMeta = BUSINESS_CATEGORIES[job.category] || { icon: '🏢', label: job.category };

    content.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
          <div>
            <span class="category-tag-badge">${catMeta.icon} ${catMeta.label}</span>
            <h2 style="font-size:22px; font-weight:700; margin-top:6px; color:var(--text-main);">${job.title}</h2>
            <div style="font-size:15px; color:var(--text-muted); font-weight:600; margin-top:2px;">${job.company}</div>
          </div>
          <div class="match-badge ${matchData.score >= 80 ? 'high' : 'medium'}" style="font-size:15px; padding:6px 12px;">
            ${matchData.score}% match
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:10px; margin-top:16px; background:#F8FAFC; padding:12px; border-radius:10px; border:1px solid var(--border-light);">
          <div>
            <div style="font-size:12px; color:var(--text-light);">Salary</div>
            <div style="font-size:14px; font-weight:700; color:var(--text-main);">${job.salary}</div>
          </div>
          <div>
            <div style="font-size:12px; color:var(--text-light);">Job Type</div>
            <div style="font-size:14px; font-weight:700; color:var(--text-main);">${job.type}</div>
          </div>
          <div>
            <div style="font-size:12px; color:var(--text-light);">Location</div>
            <div style="font-size:14px; font-weight:600; color:var(--text-main);">${job.location}</div>
          </div>
          <div>
            <div style="font-size:12px; color:var(--text-light);">City Area</div>
            <div style="font-size:14px; font-weight:600; color:var(--text-main);">${job.area}</div>
          </div>
        </div>

        ${job.isWalkIn ? `
          <div style="margin-top:14px; background:#FEF3C7; border:1px solid #FCD34D; padding:10px 14px; border-radius:10px;">
            <div style="font-weight:700; font-size:13px; color:#92400E;">⚡ Walk-in Interview Details:</div>
            <div style="font-size:13px; color:#78350F; margin-top:2px;">${job.walkInDetails}</div>
          </div>
        ` : ''}

        <div style="margin-top:16px;">
          <h4 style="font-size:14px; font-weight:700; color:var(--text-main); margin-bottom:6px;">Job Description</h4>
          <p style="font-size:14px; color:var(--text-muted); line-height:1.6;">${job.description}</p>
        </div>

        <div style="margin-top:16px;">
          <h4 style="font-size:14px; font-weight:700; color:var(--text-main); margin-bottom:6px;">Key Requirements</h4>
          <ul style="padding-left:20px; font-size:13px; color:var(--text-muted); line-height:1.6;">
            ${(job.requirements || []).map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div style="margin-top:16px;">
          <h4 style="font-size:14px; font-weight:700; color:var(--text-main); margin-bottom:6px;">Skills Needed</h4>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${job.skills.map(s => {
              const isMatch = matchData.matched.includes(s.toLowerCase());
              return `<span class="skill-tag ${isMatch ? 'matched' : ''}">${isMatch ? '✓ ' : ''}${s}</span>`;
            }).join('')}
          </div>
        </div>

        <div style="margin-top:20px; border-top:1px dashed var(--border-card); padding-top:14px;">
          <div style="font-size:13px; color:var(--text-light);">Direct Business Contact:</div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:6px; flex-wrap:wrap; gap:10px;">
            <div>
              <div style="font-size:14px; font-weight:600; color:var(--text-main);">${job.contactPerson}</div>
              <div style="font-size:13px; color:var(--text-muted);">${job.contactPhone} · ${job.contactEmail}</div>
            </div>
            <div style="display:flex; gap:8px;">
              <a href="tel:${job.contactPhone}" class="btn-outline-secondary" style="height:38px; padding:0 12px; font-size:13px;">
                📞 Call
              </a>
              <a href="https://wa.me/${job.contactPhone.replace(/[^0-9]/g, '')}?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(job.title)}%20role%20at%20${encodeURIComponent(job.company)}." target="_blank" class="btn-outline-secondary" style="height:38px; padding:0 12px; font-size:13px; color:#15803D;">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Footer actions
    const footerApplyBtn = document.getElementById('details-modal-apply-btn');
    if (footerApplyBtn) {
      footerApplyBtn.onclick = () => {
        modal.classList.remove('active');
        this.openApplyModal(job.id);
      };
    }

    modal.classList.add('active');
  }

  // Modal: Apply to Job
  openApplyModal(jobId) {
    const job = this.jobs.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('apply-modal');
    if (!modal) return;

    document.getElementById('apply-job-title').textContent = job.title;
    document.getElementById('apply-company-name').textContent = job.company;
    document.getElementById('apply-candidate-name').value = this.profile.name || '';
    document.getElementById('apply-candidate-phone').value = this.profile.phone || '';
    document.getElementById('apply-candidate-email').value = this.profile.email || '';
    document.getElementById('apply-candidate-note').value = `I am interested in the ${job.title} vacancy at ${job.company}. I have practical skills in ${this.profile.skills.slice(0, 3).join(', ')} and live nearby in ${this.profile.locality}.`;

    const form = document.getElementById('job-application-form');
    form.onsubmit = (e) => {
      e.preventDefault();
      const newApp = {
        id: `app-${Date.now()}`,
        jobId: job.id,
        jobTitle: job.title,
        company: job.company,
        applicantName: document.getElementById('apply-candidate-name').value,
        applicantPhone: document.getElementById('apply-candidate-phone').value,
        applicantEmail: document.getElementById('apply-candidate-email').value,
        matchScore: this.calculateMatchScore(job).score,
        skills: [...this.profile.skills],
        note: document.getElementById('apply-candidate-note').value,
        status: 'Under Review',
        appliedAt: 'Just now'
      };

      this.applications.unshift(newApp);
      this.saveApplications();
      modal.classList.remove('active');
      this.showToast(`Application successfully sent to ${job.company}!`, 'success');
      this.render();
    };

    modal.classList.add('active');
  }

  // Modal: Edit User Profile
  openProfileModal() {
    const modal = document.getElementById('profile-edit-modal');
    if (!modal) return;

    document.getElementById('profile-name-input').value = this.profile.name;
    document.getElementById('profile-phone-input').value = this.profile.phone;
    document.getElementById('profile-locality-input').value = this.profile.locality;
    document.getElementById('profile-experience-input').value = this.profile.experience;
    document.getElementById('profile-skills-input').value = this.profile.skills.join(', ');

    const form = document.getElementById('profile-edit-form');
    form.onsubmit = (e) => {
      e.preventDefault();
      this.profile.name = document.getElementById('profile-name-input').value.trim();
      this.profile.phone = document.getElementById('profile-phone-input').value.trim();
      this.profile.locality = document.getElementById('profile-locality-input').value.trim();
      this.profile.experience = document.getElementById('profile-experience-input').value.trim();
      
      const skillsStr = document.getElementById('profile-skills-input').value;
      this.profile.skills = skillsStr.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);

      this.saveProfile();
      modal.classList.remove('active');
      this.showToast('Profile and skills updated! Match scores recalculated.', 'success');
      this.render();
    };

    modal.classList.add('active');
  }

  // Modal: Resume Upload Simulator
  openResumeUploadModal() {
    const modal = document.getElementById('resume-upload-modal');
    if (!modal) return;

    const fileInput = document.getElementById('resume-file-picker');
    const textInput = document.getElementById('resume-paste-text');
    const parseBtn = document.getElementById('btn-parse-resume');

    if (fileInput) {
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
          if (file.type.includes('text') || file.name.endsWith('.txt')) {
            const reader = new FileReader();
            reader.onload = (evt) => {
              textInput.value = evt.target.result;
            };
            reader.readAsText(file);
          } else {
            textInput.value = `Extracted from "${file.name}": Experienced professional with skills in billing, tally, client relations, MS Excel, accounting, and communication.`;
          }
        }
      };
    }

    parseBtn.onclick = () => {
      const text = textInput.value.toLowerCase();
      // Identify skills from text
      const knownSkills = [
        'billing', 'tally', 'customer service', 'ms excel', 'ms office',
        'teaching', 'english', 'communication', 'gst', 'accounting',
        'front desk', 'cashier', 'inventory', 'sales', 'nursing',
        'patient care', 'typing', 'hardware', 'networking'
      ];

      const detected = knownSkills.filter(s => text.includes(s));
      if (detected.length === 0) {
        // default fallback detected
        detected.push('billing', 'customer service', 'communication');
      }

      this.profile.skills = Array.from(new Set([...this.profile.skills, ...detected]));
      this.saveProfile();
      modal.classList.remove('active');
      this.showToast(`Resume scanned! Added skills: ${detected.join(', ')}`, 'success');
      this.render();
    };

    modal.classList.add('active');
  }

  // Live Preview & Safety check in "Post a Job" form
  updateLivePreview() {
    const title = document.getElementById('post-title')?.value || 'Billing Executive';
    const company = document.getElementById('post-company')?.value || 'Sri Lakshmi Showroom';
    const category = document.getElementById('post-category')?.value || 'showroom';
    const area = document.getElementById('post-area')?.value || 'Anna Nagar';
    const salary = document.getElementById('post-salary')?.value || '18,000 to 22,000 / month';
    const skills = document.getElementById('post-skills')?.value || 'billing, tally, customer service';
    const desc = document.getElementById('post-desc')?.value || 'Handle counter billing and customer queries.';

    // Check for red flags
    const fullText = `${title} ${desc} ${skills}`.toLowerCase();
    const redFlagWords = ['registration fee', 'deposit', 'pay to join', 'processing fee', 'earn daily 5000', 'guaranteed income'];
    const detectedFlag = redFlagWords.find(word => fullText.includes(word));

    const warningBanner = document.getElementById('post-safety-banner');
    if (warningBanner) {
      if (detectedFlag) {
        warningBanner.classList.add('visible');
        warningBanner.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink:0;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <div>
            <strong>Notice: Red flag detected ("${detectedFlag}")</strong>
            <div>City guidelines prohibit charging job seekers fees or deposits. Listings with upfront fees are rejected during Admin Review.</div>
          </div>
        `;
      } else {
        warningBanner.classList.remove('visible');
      }
    }

    // Update Preview Card elements
    const catMeta = BUSINESS_CATEGORIES[category] || { icon: '🏢', label: category };
    const pTitle = document.getElementById('preview-title');
    const pCompany = document.getElementById('preview-company');
    const pBadge = document.getElementById('preview-cat-badge');
    const pArea = document.getElementById('preview-area');
    const pSalary = document.getElementById('preview-salary');
    const pSkills = document.getElementById('preview-skills');

    if (pTitle) pTitle.textContent = title;
    if (pCompany) pCompany.textContent = company;
    if (pBadge) pBadge.textContent = `${catMeta.icon} ${catMeta.label}`;
    if (pArea) pArea.textContent = area;
    if (pSalary) pSalary.textContent = `💰 ₹${salary}`;
    if (pSkills) pSkills.textContent = `Skills: ${skills}`;
  }

  // Handle Employer Job Submission
  handleJobSubmit(e) {
    e.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const company = document.getElementById('post-company').value.trim();
    const category = document.getElementById('post-category').value;
    const area = document.getElementById('post-area').value;
    const salary = document.getElementById('post-salary').value.trim();
    const skillsStr = document.getElementById('post-skills').value.trim();
    const desc = document.getElementById('post-desc').value.trim();
    const contactPhone = document.getElementById('post-contact').value.trim();
    const isWalkIn = document.getElementById('post-is-walkin').checked;
    const walkInInfo = document.getElementById('post-walkin-info').value.trim();

    // Check for red flags
    const fullText = `${title} ${desc} ${skillsStr}`.toLowerCase();
    const redFlagWords = ['registration fee', 'deposit', 'pay to join', 'processing fee', 'earn daily'];
    const detectedFlag = redFlagWords.find(word => fullText.includes(word));

    const newJob = {
      id: `job-user-${Date.now()}`,
      title,
      company,
      category,
      categoryLabel: BUSINESS_CATEGORIES[category]?.label || category,
      location: `${area}, City Center`,
      area,
      salary: salary.startsWith('₹') ? salary : `₹${salary}`,
      salaryMin: 15000,
      salaryMax: 25000,
      type: document.getElementById('post-type').value,
      isWalkIn,
      walkInDetails: isWalkIn ? walkInInfo : 'Interview upon application review',
      skills: skillsStr.split(',').map(s => s.trim().toLowerCase()).filter(Boolean),
      description: desc,
      requirements: [
        'Good communication and dependability',
        'Prior local experience preferred',
        'Ready to join within 10-15 days'
      ],
      contactPerson: 'Hiring In-charge',
      contactPhone: contactPhone || '+91 98400 00000',
      contactEmail: 'contact@cityjobs.local',
      status: 'pending', // Directly enters admin review queue!
      safetyStatus: detectedFlag ? 'flagged' : 'clean',
      safetyNotes: detectedFlag 
        ? `⚠ Flagged: Mention of "${detectedFlag}" detected. Verified business check required.`
        : '✓ Clean listing · Local business contact provided',
      isFeatured: false,
      postedAt: 'Just now'
    };

    this.jobs.unshift(newJob);
    this.saveJobs();
    this.updateBadges();

    // Reset Form
    e.target.reset();
    this.updateLivePreview();

    // Show Confirmation Dialog
    const confirmModal = document.getElementById('submission-success-modal');
    if (confirmModal) {
      document.getElementById('submitted-job-name').textContent = `${newJob.title} at ${newJob.company}`;
      confirmModal.classList.add('active');
    } else {
      this.showToast('Job listing submitted! It is now pending Admin Review.', 'success');
      this.switchView('admin-review');
    }
  }

  // Render Admin Review View
  renderAdminView() {
    const listContainer = document.getElementById('admin-review-list');
    const appsContainer = document.getElementById('admin-applications-list');
    if (!listContainer) return;

    // Stats
    const pendingJobs = this.jobs.filter(j => j.status === 'pending');
    const approvedJobs = this.jobs.filter(j => j.status === 'approved');
    const rejectedJobs = this.jobs.filter(j => j.status === 'rejected');

    document.getElementById('stat-pending-count').textContent = pendingJobs.length;
    document.getElementById('stat-approved-count').textContent = approvedJobs.length;
    document.getElementById('stat-rejected-count').textContent = rejectedJobs.length;
    document.getElementById('stat-apps-count').textContent = this.applications.length;

    // Determine what to display based on adminFilter
    if (this.adminFilter === 'applications') {
      listContainer.style.display = 'none';
      if (appsContainer) {
        appsContainer.style.display = 'flex';
        this.renderAdminApplications(appsContainer);
      }
      return;
    }

    if (appsContainer) appsContainer.style.display = 'none';
    listContainer.style.display = 'flex';

    let displayJobs = [];
    if (this.adminFilter === 'pending') displayJobs = pendingJobs;
    else if (this.adminFilter === 'approved') displayJobs = approvedJobs;
    else if (this.adminFilter === 'rejected') displayJobs = rejectedJobs;

    if (displayJobs.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📋</div>
          <h4>No ${this.adminFilter} listings</h4>
          <p>There are currently no job listings with status "${this.adminFilter}".</p>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = displayJobs.map(job => `
      <div class="review-card ${job.safetyStatus === 'flagged' ? 'flagged' : ''}" data-job-id="${job.id}">
        <div class="review-card-title-row">
          <div>
            <h4>${job.title}</h4>
            <div style="font-size:13px; color:var(--text-muted); margin-top:2px;">
              <strong>${job.company}</strong> · ${job.categoryLabel} · ${job.area} · ${job.salary}
            </div>
          </div>
          <span class="safety-status-indicator ${job.safetyStatus}">
            ${job.safetyStatus === 'clean' ? '✓ Verified Safe' : '⚠ Action Needed'}
          </span>
        </div>

        <div style="font-size:13px; ${job.safetyStatus === 'flagged' ? 'color:#92400E; font-weight:600;' : 'color:#166534;'}">
          ${job.safetyNotes}
        </div>

        <div style="font-size:13px; color:var(--text-muted); background:#F8FAFC; padding:8px 10px; border-radius:8px;">
          "${job.description}"
        </div>

        <div style="font-size:12px; color:var(--text-light);">
          Contact: ${job.contactPerson} (${job.contactPhone}) · Posted: ${job.postedAt}
        </div>

        <div class="review-actions-row">
          ${job.status === 'pending' ? `
            <button class="btn-approve btn-admin-approve" data-id="${job.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              Approve Listing
            </button>
            <button class="${job.safetyStatus === 'flagged' ? 'btn-reject-solid' : 'btn-reject'} btn-admin-reject" data-id="${job.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              Reject
            </button>
          ` : (job.status === 'approved' ? `
            <button class="btn-admin-action btn-admin-toggle-featured" data-id="${job.id}">
              ${job.isFeatured ? '⭐ Featured' : '☆ Feature Job'}
            </button>
            <button class="btn-reject btn-admin-reject" data-id="${job.id}">
              Unpublish / Reject
            </button>
          ` : `
            <button class="btn-approve btn-admin-approve" data-id="${job.id}">
              Re-approve
            </button>
            <button class="btn-admin-action btn-admin-delete" data-id="${job.id}" style="color:var(--danger);">
              Delete Permanently
            </button>
          `)}
        </div>
      </div>
    `).join('');

    // Bind Admin Actions
    listContainer.querySelectorAll('.btn-admin-approve').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.updateJobStatus(id, 'approved');
      });
    });

    listContainer.querySelectorAll('.btn-admin-reject').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.updateJobStatus(id, 'rejected');
      });
    });

    listContainer.querySelectorAll('.btn-admin-toggle-featured').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const job = this.jobs.find(j => j.id === id);
        if (job) {
          job.isFeatured = !job.isFeatured;
          this.saveJobs();
          this.renderAdminView();
          this.showToast(job.isFeatured ? 'Job marked as Featured!' : 'Featured status removed.');
        }
      });
    });

    listContainer.querySelectorAll('.btn-admin-delete').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Permanently delete this listing?')) {
          this.jobs = this.jobs.filter(j => j.id !== id);
          this.saveJobs();
          this.render();
          this.showToast('Listing removed permanently', 'warning');
        }
      });
    });
  }

  // Update Job Status (Approve / Reject)
  updateJobStatus(jobId, newStatus) {
    const job = this.jobs.find(j => j.id === jobId);
    if (!job) return;

    job.status = newStatus;
    this.saveJobs();
    this.updateBadges();
    this.renderAdminView();

    if (newStatus === 'approved') {
      this.showToast(`"${job.title}" approved! It is now live in the search feed.`, 'success');
      this.renderJobsList();
    } else {
      this.showToast(`"${job.title}" rejected.`, 'warning');
    }
  }

  // Render Admin Applications Tab
  renderAdminApplications(container) {
    if (this.applications.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">👥</div>
          <h4>No applications received yet</h4>
          <p>Candidate applications submitted through the job cards will appear here.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.applications.map(app => `
      <div class="application-card">
        <div class="applicant-header">
          <div>
            <div class="applicant-name">${app.applicantName}</div>
            <div class="applicant-job">Applied for <strong>${app.jobTitle}</strong> at ${app.company}</div>
          </div>
          <div class="match-badge ${app.matchScore >= 80 ? 'high' : 'medium'}">
            ${app.matchScore}% Match
          </div>
        </div>

        <div style="font-size:13px; color:var(--text-muted); margin-top:4px;">
          📞 ${app.applicantPhone} · ✉️ ${app.applicantEmail} · 🕒 ${app.appliedAt}
        </div>

        <div style="font-size:13px; background:#F8FAFC; padding:8px 12px; border-radius:8px; border:1px solid var(--border-light); margin-top:4px;">
          <strong>Applicant Note:</strong> "${app.note}"
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; flex-wrap:wrap; gap:8px;">
          <div style="font-size:12px; color:var(--text-light);">
            Candidate Skills: ${(app.skills || []).join(', ')}
          </div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span style="font-size:12px; color:var(--text-muted);">Status:</span>
            <select class="applicant-status-select" data-app-id="${app.id}">
              <option value="Under Review" ${app.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
              <option value="Shortlisted" ${app.status === 'Shortlisted' ? 'selected' : ''}>Shortlisted</option>
              <option value="Interview Scheduled" ${app.status === 'Interview Scheduled' ? 'selected' : ''}>Interview Scheduled</option>
              <option value="Hired" ${app.status === 'Hired' ? 'selected' : ''}>Hired</option>
              <option value="Archived" ${app.status === 'Archived' ? 'selected' : ''}>Archived</option>
            </select>
            <a href="tel:${app.applicantPhone}" class="btn-outline-secondary" style="height:32px; padding:0 10px; font-size:12px;">Call</a>
          </div>
        </div>
      </div>
    `).join('');

    // Bind Status Change
    container.querySelectorAll('.applicant-status-select').forEach(sel => {
      sel.addEventListener('change', (e) => {
        const appId = sel.getAttribute('data-app-id');
        const target = this.applications.find(a => a.id === appId);
        if (target) {
          target.status = e.target.value;
          this.saveApplications();
          this.showToast(`Updated applicant status to "${target.status}"`, 'success');
        }
      });
    });
  }

  // Toast Notification System
  showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'warning') icon = '⚠';
    if (type === 'danger') icon = '✕';

    toast.innerHTML = `
      <span style="font-weight:700;">${icon}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new LocalJobsApp();
});

// Register Service Worker for PWA (Offline & Add to Home Screen)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => console.log('LocalJobs Service Worker Active', reg.scope))
      .catch((err) => console.log('Service Worker registration skipped', err));
  });
}
