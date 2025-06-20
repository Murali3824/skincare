Skincare E-Commerce React Application
A modern, responsive skincare e-commerce website built with React, Tailwind CSS, and GSAP for smooth animations. The application showcases skincare products, categories, FAQs, and a promotional banner, designed to provide an engaging user experience.
Table of Contents

Features
Technologies Used
Installation
Usage
Project Structure
Dependencies
Available Scripts
Contributing
License

Features

Product Showcase: Displays featured skincare products with hover effects and GSAP animations.
Promotional Banner: Highlights the brand with a visually appealing banner and smooth animations.
Product Categories: Allows filtering by categories with animated product cards.
FAQ Section: Interactive accordion-style FAQs with animated transitions.
Responsive Design: Optimized for both desktop and mobile devices using Tailwind CSS.
Smooth Animations: GSAP-powered animations for headers, buttons, images, and FAQ toggles.

Technologies Used

React: Frontend JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
GSAP: Animation library for smooth, performant animations.
Lucide-React: Icon library for UI elements like shopping cart and headphones.
Vite: Build tool for fast development and production builds.

Installation
To set up the project locally, follow these steps:

Clone the repository:
git clone https://github.com/Murali3824/skincare.git
cd skincare


Install dependencies:
npm install


Set up assets:Ensure the src/assets folder contains the required images (product1, product2, product3, banner3, leftarrow, rightarrow). You can replace these with your own assets or use placeholders.

Run the development server:
npm run dev

Open http://localhost:5173 in your browser to view the application.


Usage

ProductShowcase: Displays a grid of products with navigation buttons and GSAP animations for header and card entrances.
FeelBeautifulSection: A promotional banner with a background image, animated heading, and CTA button.
ProductCategories: Shows product categories with filter buttons and animated product cards.
FAQSection: An accordion-style FAQ section with animated toggles and a product image with a support badge.

To customize, update the product data in the respective components or modify the Tailwind CSS classes for styling. Adjust GSAP animations in the useEffect hooks to change timing, easing, or effects.
Project Structure
skincare-ecommerce/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── 
│   ├── components/
│   │   ├── 
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md

Dependencies
Key dependencies used in the project:
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.0",
    "gsap": "^3.12.5",
    "tailwindcss": "^3.4.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^5.0.0"
  }
}

Ensure the GSAP CDN is included in index.html:
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eo2Q6ggDdEALf6LZ3+ge7BPI5Oer3OYe1S2mWv2tB5DC8rJ2sU3TWk2z5LfY2g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

Available Scripts
In the project directory, you can run:

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build locally.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
