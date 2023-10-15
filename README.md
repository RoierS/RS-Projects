
# Async Race app (RS School)

This project is a web application for managing a virtual garage where users can create, update, and race cars. The system allows users to perform various actions such as creating new cars, updating car details, generating random cars, racing cars, viewing a list of cars in the garage, and a list of winners. It also provides a real-time racing animation for the cars.

## Key Features
1. **Car Creation and Update:**
- Users can create new cars by providing a name and selecting a color for the car.
- Existing cars can be updated with new names and colors.

2. **Real-time Car Racing:**
- The application provides a racing feature with real-time animations.
- Users can start and stop car engines to race their cars.
- Racing animations are displayed on a track, and users can watch their cars compete.

3. **Garage Management:**
- The system manages a list of cars in the virtual garage.
- It offers pagination to handle a large number of cars efficiently.
- Users can easily navigate through the list of cars in their garage.

4. **Random Car Generation:**
- Users can generate a predefined number of random cars with unique names and colors.

5. **Winner Tracking:**
- The application keeps track of the winners of car races.
- Users can view a table displaying the top-performing cars.
- Information such as car names, wins, and best race times is available in the winners' table.
  
6. **Clear and User-friendly UI:**
- The application features a clear and intuitive user interface.
- It includes a navigation header with buttons to switch between the garage and winners pages.

7. **Pagination:**
- The garage page offers pagination for displaying a manageable number of cars at a time.
- Users can navigate through the pages to explore their entire car collection.
  
8. **Dynamic Car Images:**
- The cars are represented by dynamic SVG images.
- The car's color is customized, allowing for visually appealing car representations.

9. **Server Integration:**
- The system integrates with external APIs for car and winner management.
- It communicates with these APIs to fetch and update data, enabling a robust backend-server interaction.

## Technology Stack:
- TypeScript
- HTML/CSS
- Webpack
- ESLint
- Prettier

## Setup and Running

- Use `node 14.x` or higher.
- Go to folder "server": `$ cd server`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start`.
- Now you can send requests to the address: `http://127.0.0.1:3000`.
- Open "dev" folder in new Integrated Terminal.
- Install dependencies: `$ npm install`.
- Start app: `$ npm start` or go [async-race-game-app](async-race-game-app.netlify.app).