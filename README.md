Recipe Finder Mobile Application 

Student ID: G00438795 
Module: Mobile Applications Development 
Academic Year: 2024–2025 

 

Project Overview 

This project is a mobile-first Recipe Finder application developed using Ionic Framework with Angular. 
The application allows users to search for recipes based on ingredients, view detailed recipe information, save favourite recipes, and configure measurement preferences. 

The project follows modern Angular standalone component architecture and focuses on usability, mobile responsiveness, and clean routing. 

 

Features 

Ingredient-based recipe search 

 Recipe results displayed as responsive cards 

Recipe Details page with ingredients and instructions 

 Back navigation between pages 

 Add / Remove Favourite recipes 

️ Favourites page with persistent storage 

️ Settings page for measurement units (Metric / Imperial / US) 

 LocalStorage used for persistence 

 Mobile-optimised UI using Ionic components 

 Student ID displayed on Home page 

 

Technologies Used 

Ionic Framework 

Angular (Standalone Components) 

TypeScript 

HTML & SCSS 

Spoonacular Recipe API 

Git & GitHub as requested 

 

Application Structure 

src/ 
├── app/ 
│   ├── home/ 
│   ├── recipe-details/ 
│   ├── favorites/ 
│   ├── settings/ 
│   ├── services/ 
│   │   └── recipe.service.ts 
│   ├── app.component.ts 
│   └── app.component.html 
├── assets/ 
├── main.ts 
└── index.html 
 

 

Routing & Navigation 

Routing is implemented using Angular’s standalone routing configuration inside main.ts. 

Routes Implemented 

/home – Home page with recipe search 

/recipe/:id – Recipe Details page 

/favorites – Saved favourite recipes 

/settings – Measurement unit preferences 

Navigation is handled using Ionic components such as ion-router-outlet, routerLink, and back buttons. 

 

API Integration 

The application integrates with the Spoonacular API to retrieve live recipe data. 

API Usage 

Search recipes by ingredients 

Fetch detailed recipe information by recipe ID 

All API calls are handled centrally within RecipeService using Angular’s HttpClient. 

 

️ Settings Functionality 

The Settings page allows users to select preferred measurement units: 

Metric 

Imperial 

US 

The selected preference is saved using LocalStorage and persists across sessions. 
This prepares the application for further integration with API unit-based responses. 

 

Favourites Functionality 

Users can: 

Add or remove recipes from favourites 

View all saved favourites on a dedicated page 

Open recipe details directly from favourites 

Favourite recipes are stored using LocalStorage, ensuring persistence after refresh. 

 

️ How to Run the Project 

1️ Install dependencies 

npm install 
 

2 Run the application 

ionic serve 
 

The app will run locally at: 

http://localhost:8100 
 

 

Testing 

Manual testing performed throughout development 

Routes tested directly via browser navigation 

Mobile responsiveness tested using browser device tools 

Console errors resolved before final submission 

 

Challenges & Solutions 

Routing issues with standalone Angular 

Solution: 
All routes were explicitly configured using provideRouter() in main.ts. 

Blank screens during development 

Solution: 
Ensured correct use of ion-router-outlet and proper component imports. 

Icon rendering issues 

Solution: 
Manually registered required Ionic icons using addIcons(). 

 

Future Enhancements 

Apply measurement unit settings directly to API calls 

Add offline support 

Improve loading indicators and error handling 

Enhance UI styling and animations 

 

Conclusion 

This project demonstrates the development of a complete mobile application using Ionic and Angular. 
It integrates external APIs, supports multi-page navigation, persists user preferences, and follows modern Angular best practices. 

The application meets the requirements of the module and provides a solid foundation for future expansion. 

 

Repository 

All source code and commits are available in the GitHub repository submitted with this project. 

 
