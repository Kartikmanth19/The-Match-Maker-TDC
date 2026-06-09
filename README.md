# The Date Crew – Matchmaker Dashboard MVP

A modern matchmaking dashboard built for The Date Crew (TDC) Working Session Exercise. The application helps matchmakers manage customer profiles, track their matchmaking journey, record notes, and assign potential matches using a gender-specific compatibility algorithm enhanced with AI-style reasoning.

---

## 🚀 Live Demo

**Frontend:** (https://the-match-maker-tdc.netlify.app/)

**Backend:** (https://the-match-maker-tdc.onrender.com/)

---

## 📂 GitHub Repository

(https://github.com/Kartikmanth19/The-Match-Maker-TDC.git)

---

## 🔐 Demo Credentials

**Username:** `matchmaker`

**Password:** `tdc123`

---

# 📌 Features

## Authentication
- Basic Matchmaker Login Screen
- Protected Routes using Local Storage Authentication
- Logout Functionality

---

## Dashboard
- View all assigned customer profiles
- Search customers by name
- Filter customers by city
- Filter customers by matchmaking status
- Quick statistics overview:
  - Total Clients
  - Verified Profiles
  - Pending Matches
  - Meetings Scheduled

---

## Customer Detailed View
Displays complete customer biodata including:

- First Name
- Last Name
- Gender
- Date of Birth
- Country
- City
- Height
- Email Address
- Phone Number
- Undergraduate College
- Degree
- Income
- Current Company
- Designation
- Marital Status
- Languages Known
- Number of Siblings
- Religion
- Caste
- Mother Tongue
- Dietary Preferences
- Smoking Preference
- Drinking Preference
- Family Type
- Family Values
- Manglik Status
- Want Kids
- Open to Relocate
- Open to Pets
- Partner Expectations

Additional sections:
- Journey Timeline
- Matchmaker Notes
- Suggested Matches

---

## Matchmaking Engine

The platform includes a gender-specific compatibility algorithm.

### For Male Customers
Potential female matches are ranked based on:

- Younger age
- Lower income
- Shorter height
- Similar views on having children
- Similar relocation preferences
- Similar pet preferences
- Same city preference

---

### For Female Customers
Potential male matches are ranked based on:

- Similar professional backgrounds
- Shared family values
- Similar relocation preferences
- Similar pet preferences
- Shared religious values
- Similar lifestyle compatibility
- Same city preference

---

## AI Integration

The application enhances the matchmaking experience through an AI-inspired natural language reasoning engine.

For every suggested match, the system generates personalized compatibility explanations based on factors such as:

- Family goals
- Relocation preferences
- Pet preferences
- Cultural alignment
- Professional compatibility
- Lifestyle choices

Example:

> "High Potential Match. Priya and Rahul are compatible because both share similar views on having children, their relocation preferences align well, and they share similar cultural values."

This improves explainability and helps matchmakers understand why a recommendation was generated.

---

## Match Actions

Each suggested match includes a **Send Match** action.

Features:
- Send Match button
- Mock notification using toast messages
- Displays confirmation upon successful action

Example:

> "Priya Sharma match sent successfully."

---

## Analytics Dashboard

The application also includes an analytics section displaying insights such as:

- Total Profiles
- Gender Distribution
- Matchmaking Status Breakdown
- Active Match Statistics

---

## Notes Management

Matchmakers can:

- Add notes after meetings or calls
- Review previously added notes
- Maintain context throughout the matchmaking journey

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React Icons
- React Hot Toast
- Axios

---

## Backend
- Node.js
- Express.js
- CORS
- Static JSON Database

---

## Data Layer
- Mock JSON Data
- 200+ Generated Customer Profiles

---

## Deployment
- Frontend: Netlify
- Backend: Render
- Source Control: GitHub

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/Kartikmanth19/The-Match-Maker-TDC.git
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# 📋 Assumptions Made

- Static JSON files were used instead of a production database.
- All customer profiles are assumed to be verified.
- The application supports a single matchmaker account for demonstration purposes.
- Compatibility scores are intended to demonstrate matchmaking logic and not real-world outcomes.
- Match actions and notifications are mocked to simulate the user experience.
- Notes are maintained locally within the scope of the assignment.

---

# 💡 Design Considerations

The user interface was designed to be emotionally aligned with the matchmaking domain. The use of soft gradients, rounded components, intuitive navigation, and profile-focused layouts creates a welcoming experience for matchmakers while maintaining professional usability.

Special attention was given to responsiveness, accessibility, and visual hierarchy to ensure the dashboard remains functional across different screen sizes.

---

# ✨ Future Improvements

- Real authentication using JWT
- Database integration using MongoDB or Firebase
- Real email delivery for match notifications
- AI integration using Gemini/OpenAI APIs
- Advanced compatibility scoring models
- Admin dashboard for multiple matchmakers
- Calendar integration for meeting scheduling

---

# 👨‍💻 Developed By

**Kartik Rajesh Manthanwar**

Frontend Developer | React Developer | Java Enthusiast

GitHub: https://github.com/Kartikmanth19
