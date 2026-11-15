# LocalJobs - Local City Job Portal & Resource Network

An interactive, responsive Progressive Web App (PWA) designed specifically for local city job posting and talent matching, supporting grassroots community resources and local businesses:
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

## 📱 Mobile App & PWA Features ("Save as App Icon")

LocalJobs is configured as a full **Progressive Web App (PWA)**, meaning you can install it directly onto your phone's home screen with its own custom app icon and launch it full-screen without any app store downloads:

1. **Custom High-Resolution App Icons:**
   - Vector app icon: `icon.svg`
   - Android & Desktop PWA icons: `icon-192.png`, `icon-512.png`
   - Apple Touch Icon for iPhone/iPad: `apple-touch-icon.png`
2. **Web App Manifest (`manifest.json`):**
   - Configured with `display: "standalone"`, primary brand theme color `#1D4ED8`, and portrait lock for a native app feel.
3. **Offline & Fast Cache (`sw.js`):**
   - Background service worker caches application assets so the portal loads instantly.
4. **Mobile Bottom Sheet Modals:**
   - On phone screens, dialogs automatically slide up from the bottom as native bottom sheets with tactile drag handles.
5. **Mobile Navigation Bar:**
   - Fixed thumb-friendly bottom navigation bar with notification badges and quick actions.
6. **No-Zoom Mobile Inputs:**
   - 16px font size on inputs to eliminate iOS Safari's default screen zooming on text focus.
   - 48px touch targets adhering to mobile accessibility standards.
   - Custom SVG chevron arrow dropdowns with no native browser artifacts.

---

## 📲 How to Install as an App Icon on Your Phone

### On iPhone / iPad (Safari)
1. Open the website link in Safari.
2. Tap the **Share** button (⎋) at the bottom toolbar.
3. Scroll down and select **"Add to Home Screen"** (⊞).
4. Tap **Add** in the top right. The LocalJobs icon will appear on your phone home screen!

### On Android (Chrome / Edge / Samsung Internet)
1. Open the website link.
2. You will see a **"Save Icon"** banner at the top, or tap the **Install** button in the bottom navigation bar.
3. Alternatively, tap the browser's three dots menu (⋮) → **"Install app"** or **"Add to Home screen"**.
4. Confirm to install. The app icon will be added to your home screen and app drawer.

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
- **Safety Audit Badges:** Instant visual indicator of clean listings vs flagged fee scams.
- **One-Click Actions:** Approve (instantly makes job live in search feed), Reject, or Feature high-priority local jobs.
- **Candidate Applications Tracker:** Review candidates who applied, inspect match scores, and update hiring statuses (`Under Review`, `Shortlisted`, `Hired`).
- **Data Reset:** One-click button to restore pristine demo data anytime.

---

## 🚀 How to Run & Preview

Open `index.html` directly in any browser:
```powershell
Start-Process "C:\Users\Shylendra M P\.antigravity\local-city-jobs\index.html"
```
Or serve with any static web server:
```powershell
python -m http.server 3000 --directory "C:\Users\Shylendra M P\.antigravity\local-city-jobs"
```
Then navigate to `http://localhost:3000`.

---

## 📁 File Structure

- `index.html`: Semantic HTML5 with PWA tags, mobile bottom navigation, and native bottom sheet modals.
- `styles.css`: Modern mobile-first CSS with 48px touch targets, custom SVG dropdown chevron arrows, glowing focus rings, and safe area insets.
- `app.js`: Reactive state manager, dynamic match calculation, PWA install handlers, and offline storage.
- `manifest.json`: Web App Manifest defining standalone mobile display, app icons, and theme color.
- `sw.js`: Service worker caching assets for fast loading and offline support.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `icon.svg`: High-resolution icons for Android, iOS, and desktop home screens.
