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

## 📍 Mobile GPS Location & City Detection

The application dynamically detects the user's mobile device location and displays the local city name accordingly:

1. **Automatic Device Geolocation (`navigator.geolocation`):**
   - Automatically detects current GPS coordinates upon permission.
   - Reverse-geocodes coordinates into city and neighborhood (e.g. `Anna Nagar, Chennai`, `Bengaluru`, `Mumbai`, etc.) using high-speed client-side reverse geocoding with OpenStreetMap & proximity calculation fallback.
2. **Interactive Location Pill in Header:**
   - Displays real-time city badge with an animated status dot (`🟢 Active GPS` / `🟡 Detecting`).
   - Tapping the city pill allows instant re-detection or manual switching to popular city hubs (Chennai, Bengaluru, Hyderabad, Mumbai, Delhi NCR, Coimbatore, Mysuru, Kochi, Pune, Kolkata) or entering any custom city.
3. **Dynamic Portal Personalization:**
   - Automatically personalizes search header: *"Jobs near you in [City Name]"*.
   - Updates candidate profile locality and pre-fills employer job posting fields.
   - Remembers the user's city in `localStorage` across browsing sessions.

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
2. You will see a **"Save Icon"** banner at the top, or tap the **Install** tab in the bottom bar.
3. Alternatively, tap the browser's three dots menu (⋮) → **"Install app"** or **"Add to Home screen"**.
4. Confirm to install. The app icon will be added to your home screen and app drawer.

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

- `index.html`: Semantic HTML5 with location pill, city selector modal, PWA tags, mobile navigation, and bottom sheets.
- `styles.css`: Modern mobile-first CSS with pulse GPS indicators, 48px touch targets, custom dropdown chevrons, and safe area insets.
- `app.js`: Reactive state manager, mobile GPS geolocation & reverse geocoder, match calculation, and offline persistence.
- `manifest.json`: Web App Manifest defining standalone mobile display, app icons, and theme color.
- `sw.js`: Service worker caching assets for fast loading and offline support.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `icon.svg`: High-resolution icons for Android, iOS, and desktop home screens.
