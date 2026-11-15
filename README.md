# LocalJobs - Local City Job Portal & Resource Network

An interactive, responsive web application designed specifically for local city job posting and talent matching, supporting grassroots community resources and local businesses:
- **Schools** (Teachers, Admin Staff, Lab In-charge, Transport)
- **Colleges & Institutes** (Lab Assistants, Admission Counselors, Librarians)
- **Hospitals & Clinics** (Staff Nurses, Pharmacy Dispensers, Front Desk)
- **Hotels & Restaurants** (Front Desk Associates, Stewards, Kitchen Staff)
- **Retail & Shops** (Cashiers, Counter Sales, Storekeepers)
- **Showrooms** (Automobile & Electronics Billing Executives, Sales Advisors)
- **Lawyers & Legal Practices** (Stenographers, Legal Clerks, Junior Advocates)
- **Auditors & CA Firms** (Junior Auditors, GST & Tax Filing Assistants, Accountants)
- **Clubs & Associations** (Member Relations, Gym Instructors, Facility Managers)

---

## 🌟 Key Interactive Features

### 1. Job Seeker Experience (`Find jobs`)
- **Instant Skill-Match Engine:** Dynamically calculates match percentage (e.g. `92% match`, `78% match`) based on user profile skills vs job requirements.
- **Dynamic Category Filtering:** One-click horizontal pills to switch between all local business categories with custom icons.
- **Area / Locality & Type Filters:** Filter by neighborhood wards (Anna Nagar, T. Nagar, Velachery, etc.) and job type (Full Time, Part Time, Walk-in Interviews).
- **Interactive Job Application:** Pre-filled application modal with candidate contact details and customizable message; records applications directly into local state.
- **Direct Local Contact Actions:** One-click direct phone dial (`tel:`) and WhatsApp chat (`wa.me`) with local employer contacts.
- **Bookmarks & Saved Jobs:** Save positions with immediate persistent storage.
- **Profile & Resume Simulator:** Edit profile skills or paste resume text to automatically detect keywords and recalculate city-wide match scores in real time.

### 2. Employer Job Posting Flow (`Post a job`)
- **Tailored for Local Establishments:** Easy form capturing business name, local business sector, locality, salary, and walk-in interview timings.
- **Live Card Preview:** Real-time visual card preview as the employer types.
- **Automated Red-Flag & Fraud Scanner:** Scans listing text in real-time for fee requests, security deposits, or suspicious phrases to protect job seekers.
- **Admin Review Routing:** Submissions are assigned `pending` status and routed immediately to the Admin Review queue.

### 3. City Admin Review & Moderation (`Admin review`)
- **Moderation Dashboard:** Real-time stat counters for Pending, Live/Approved, Rejected, and Candidate Applications.
- **Safety Audit Badges:** Instant visual indicator of clean listings vs flagged suspicious listings.
- **One-Click Actions:** Approve (instantly makes job live in search feed), Reject, or Feature high-priority local jobs.
- **Candidate Applications Tracker:** Review candidates who applied, inspect match scores, and update hiring statuses (`Under Review`, `Shortlisted`, `Hired`).
- **Data Reset:** One-click button to restore pristine demo data anytime.

---

## 🚀 How to Run & Preview

Open `index.html` directly in any modern browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari):

```powershell
Start-Process "C:\Users\Shylendra M P\.antigravity\local-city-jobs\index.html"
```
Or serve with any static web server (such as Python `http.server`, Live Server, or Node.js `serve`):
```powershell
python -m http.server 3000 --directory "C:\Users\Shylendra M P\.antigravity\local-city-jobs"
```
Then navigate to `http://localhost:3000`.

---

## 📁 File Structure

- `index.html`: Clean, semantic HTML5 structure with responsive layouts, accessible navigation, and modal dialogues.
- `styles.css`: Complete modern CSS with custom properties, typography (Inter), card layouts, and responsive breakpoints.
- `app.js`: State management, matching algorithms, local storage persistence, filtering, and event handlers.
