🎯 Project Title: Meme Generator Web App
🔧 Overview:
The Meme Generator is a fully responsive and interactive web application that allows users to generate random wholesome memes with the click of a button. The project demonstrates proficiency in vanilla JavaScript, modern CSS styling, API consumption, and responsive web design without relying on third-party frameworks.

🌐 Key Features:
API Integration: Uses the Meme API to fetch real-time meme content, including meme image, title, and author.

Responsive Design: Built using custom media queries to ensure compatibility across all devices (mobile, tablet, desktop).

Animated UI:

Dynamic gradient background in the navigation bar.

Typing animation effect on the header title.

Button hover effects for better UX.

Separation of Concerns: Cleanly structured with HTML, CSS, and JavaScript in separate files for better maintainability and scalability.

Zero Dependencies: The app is built with pure HTML, CSS, and JS, ensuring fast performance and full control over behavior and styling.

💻 Built With
HTML5 – Semantic structure

CSS3 – Styling, layout, glow effects, and animations

JavaScript (ES6) – Dynamic content and API integration

Fetch API – For retrieving memes from a public endpoint

📱 Responsiveness:
Media queries ensure smooth adaptation on:

📲 Small-screen phones

📱 Tablets

💻 Laptops/desktops

🧠 Challenges & Solutions
🔧 Challenge 1: Asynchronous API Handling
Problem: Ensuring memes load correctly on initial load and on button clicks.
Solution: Used fetch() with .then() to process the JSON response and dynamically update the DOM.

🎨 Challenge 2: Creating a Visually Engaging Navbar
Problem: Making the navbar text stand out with a professional animation.
Solution: Combined @keyframes for slide-in + glowing text with CSS text-shadow for a pulse effect.

📐 Challenge 3: Layout Consistency Across Devices
Problem: Maintaining a clean layout and readability on all screen sizes.
Solution: Used responsive CSS (max-width, margin-inline, min-height, and background-size) to ensure content adjusts smoothly.
