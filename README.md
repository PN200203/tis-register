
# TIS Register – Tulas International School

An animated, responsive homepage redesign concept for **Tulas International School (TIS)**, built using React.js, Vite, CSS Modules, and Framer Motion.

The project combines a creative school-themed visual design with interactive attendance registration, smooth animations, and a responsive user experience.

## 🔗 Live Demo

**Live Website:** https://tis-register.vercel.app/

**GitHub Repository:** https://github.com/PN200203/tis-register

## 📌 Project Overview

The TIS Register project is a frontend redesign concept inspired by Tulas International School. It provides a school-themed interface where users can select their role, enter their name, mark themselves present, and explore an animated homepage showcasing the school day.

The application focuses on modern frontend development practices, interactive UI elements, smooth animations, responsive styling, and user experience.

## ✨ Features

- **Interactive Attendance Registration:** Users can select Parent, Student, or Visitor and enter their name.
- **Form Validation:** Displays a validation message when the name is empty or contains fewer than two characters.
- **Attendance Animation:** Shows an animated “PRESENT” stamp after successful form submission.
- **Local Storage:** Stores the current demo user's name and role in the browser to maintain the session across page refreshes.
- **Custom Cursor:** Animated mouse-following cursor that responds to interactive elements on supported desktop devices.
- **Scroll-Triggered Animations:** Sections and content reveal smoothly as the user scrolls.
- **Scroll Progress Indicator:** A progress bar at the top of the page indicates reading progress.
- **Light and Dark Themes:** Switch between notebook-inspired light mode and chalkboard-inspired dark mode.
- **Interactive Daily Schedule:** Explore different periods of a typical school day.
- **Responsive Layout:** CSS styling adapts to different screen sizes.
- **Accessibility Considerations:** Semantic HTML, form labels, keyboard focus indicators, and reduced-motion styling.

## 🛠️ Technologies Used

### Frontend
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- CSS Modules

### Animation and UI
- Framer Motion
- React Hooks (`useState`, `useEffect`)
- Custom CSS animations and transitions

### Build Tools and Deployment
- Vite
- npm
- Git and GitHub
- Vercel

## 📂 Project Structure

```text
tis-register/
├── public/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx
│   │   ├── Gate.jsx
│   │   └── Gate.module.css
│   ├── Home.jsx
│   ├── Home.module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── tokens.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## ⚙️ Prerequisites

Before running the application locally, ensure you have installed:

- Node.js
- npm (included with Node.js)
- Git
- Visual Studio Code or another code editor

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/PN200203/tis-register.git
```

### 2. Navigate to the application directory

```bash
cd tis-register/tis-register
```

The repository contains the application inside a nested `tis-register` directory.

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal, usually:

```text
http://localhost:5173/
```

### 5. Build for production

```bash
npm run build
```

The production-ready files are generated in the `dist` directory.

### 6. Preview the production build locally

```bash
npm run preview
```

## 🎯 How to Use

1. Open the application.
2. Select your role: Parent, Student, or Visitor.
3. Enter your name.
4. Click **Mark me present**.
5. View the attendance stamp animation.
6. Explore the homepage and interactive daily schedule.
7. Switch between light and dark themes.
8. Scroll through the page to experience the animations and reading progress indicator.
9. Use the sign-out option to return to the registration screen.

## 🌐 Deployment

The application is deployed on Vercel.

**Live URL:** https://tis-register.vercel.app/

The project uses Vite to generate optimized production assets. Vercel builds the application using the configured build command and publishes the generated `dist` directory.

## 🔄 Updating the Deployment

The project is connected to GitHub. After committing and pushing changes to the connected branch, Vercel can automatically build and deploy the updated application.

```bash
git add .
git commit -m "Update TIS Register project"
git push origin main
```

## ⚠️ Limitations

- This is a frontend demonstration project, not a production attendance management system.
- Attendance records are not saved to a central database.
- User information is stored in browser `localStorage` and is limited to that browser.
- The demo does not include backend authentication, authorization, or server-side validation.
- The sample attendance entries displayed on the registration screen are illustrative UI content.

## 🚀 Future Improvements

- Integrate a backend API and database for persistent attendance records.
- Implement secure user authentication and role-based access control.
- Add an administrative dashboard for attendance reports.
- Add real school announcements, admissions information, and verified school statistics.
- Improve automated testing and accessibility coverage.
- Add analytics to understand user engagement.

## 👨‍💻 Author

**Praveen Neelamsetti**

GitHub: https://github.com/PN200203

## 📄 License

This project was developed as a frontend redesign concept for learning, demonstration, and evaluation purposes.

The project is not an official school website or an official attendance management system.
