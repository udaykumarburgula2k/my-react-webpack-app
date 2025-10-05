# my-react-webpack-app
my-react-webpack-app

1. Setup
Setup
✅ React 18
✅ React + TypeScript
✅ Webpack (not Vite)
✅ React Router

2. Data Fetching & Caching:
useState:	Store users and loading,
useEffect:	Fetch data on first render,
useRef:	    Cache API result without re-fetching.


- Use useEffect and useState to handle async fetch.
- Add basic caching using useRef (not advanced tools like React Query yet).

Learn the 4 Main State Management Options:
- Local UI state:                    useState, useReducer
- Component tree (shared) state:     Context API
- Global app state                   Redux / Zustand / Jotai / MobX
- Server state (API data)            React Query / SWR

3. State Management
CONSIDER 3 different types:
Local: useState, useReducer, react-hook-form
Context: React.createContext, useContext
Global: Redux Toolkit (best modern option)


3. Forms & Validation
✅ react-hook-form (lightweight)
✅ formik (more powerful, but heavier)
Bonus: Yup (for validation schemas)

4. Code Quality
ESLint (eslint --init)


5. Ops / Monitoring
Logging: ✅ Splunk
Monitoring: ✅ Pilot Monitor (do you mean Pilot
 or something else?)

 6. Testing
✅ react-testing-library
Also consider:
jest (comes with Create React App or can be added manually)

7. Git Commands:
npm install
npm run start

git init
git add .
git commit -m "Initial commit"
git remote add origin <url>
git pull --rebase origin main  
git push origin main
git status
git diff :q

npm install @tanstack/react-query 
npm install @tanstack/react-query-devtools 
npm install @reduxjs/toolkit react-redux