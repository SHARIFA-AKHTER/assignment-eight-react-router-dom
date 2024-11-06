GadgetHeaven
✨ Your go-to destination for the latest and greatest gadgets ✨

GadgetHeaven is a responsive e-commerce platform designed to deliver an engaging shopping experience for gadget lovers. This application includes core e-commerce functionalities such as a shopping cart, wishlist system, product filtering, and a user-friendly dashboard. The site is designed based on a detailed Figma layout, with React as the main framework, utilizing Context API for state management and LocalStorage for data persistence.

Table of Contents
Live Demo
Requirements Document
Features
Project Structure
React Fundamentals Used
Data Management
Installation
Usage
Additional Enhancements
Contributing
License
Live Demo
Visit the live website here: GadgetHeaven (Add the actual link)

Requirements Document
Access the requirements document here: Requirements Document (Add the actual link)

Features
Responsive Navbar with Active Route Indication:

Includes items like Logo, Brand Name, Dashboard, and Stats.
The active route is highlighted for better navigation.
Home Page with Category Sidebar:

Display categories such as computers, phones, smart watches, chargers, and power banks.
Categories appear as a sidebar, with gadgets dynamically filtered on selection.
Gadget Cards with Details Page:

Each gadget card displays an image, name, price, and a "Details" button.
The details page shows a complete gadget overview and includes "Add to Cart" and "Wishlist" buttons.
Dashboard with Cart and Wishlist Tabs:

View and manage items in the cart and wishlist.
Sort items by price within the cart and display the total cart amount.
Dynamic Toast Notifications:

Users receive toast notifications when adding items to the cart or wishlist, with distinct messages.
Project Structure
graphql
Copy code
GadgetHeaven
├── public
├── src
│   ├── components
│   │   ├── Navbar.js            # Navigation bar with active route indication
│   │   ├── Home.js              # Home page with banner and category sidebar
│   │   ├── Gadget.js            # Gadget card component
│   │   ├── GadgetDetail.js      # Single gadget details view
│   │   ├── ListedGadgets.js     # Displays gadgets based on category
│   │   ├── Dashboard.js         # Dashboard with Cart and Wishlist tabs
│   ├── contexts
│   │   └── CartContext.js       # Context API for managing cart and wishlist
│   ├── utility
│   │   └── addToDb.js           # Functions for LocalStorage management
│   ├── App.js                   # Main app file
│   └── index.js                 # Entry point
└── README.md
React Fundamentals Used
Components: Modular and reusable components like Navbar, Gadget, and Dashboard.
React Router: Used for routing between pages (Home, Details, Dashboard, etc.).
Context API: For global state management of the cart and wishlist.
Hooks:
useState: Manage component-level state.
useEffect: Fetch and manage data persistence through LocalStorage.
useContext: Access global states for cart and wishlist functionality.
useNavigate and useLocation: For page redirection and route-based styling changes.
Conditional Rendering: Dynamically display content based on user actions (e.g., cart and wishlist states).
Data Management
Context API: Handles global states for the cart and wishlist, simplifying data access across components.
LocalStorage: Used to persist cart and wishlist data, enabling data retention between sessions.
Installation
Clone the Repository:


git clone https://github.com/yourusername/GadgetHeaven.git
Navigate to the Project Directory:


cd GadgetHeaven
Install Dependencies:


npm install
Run the Application:


npm start
Open your browser and go to http://localhost:3000 to explore the application.

Usage
Explore Gadgets:
View the latest gadgets on the homepage, categorized by type.
Filter by Category:
Select categories from the sidebar to view specific gadget types.
View Details and Add to Cart/Wishlist:
Click "Details" on a gadget to see full specifications, and add it to the cart or wishlist.
Manage Cart and Wishlist in Dashboard:
View, sort by price, and see the total cost of items in your cart, as well as manage your wishlist.
Toast Notifications:
Receive feedback notifications when items are added to the cart or wishlist.
Additional Enhancements
Dynamic Background Color: Background changes based on the active route using useLocation().
Purchase Confirmation Modal: A modal appears after purchase, clearing the cart and redirecting to the home page.
Price Limits for Cart: The cart restricts adding items beyond a set price limit.
Statistics Page: A composed chart displays prices and ratings for a visual gadget comparison.
Contributing
Contributions are welcome! Please fork the repository, make enhancements, and submit a pull request.

License
This project is licensed under the MIT License.

