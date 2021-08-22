# [Hotel Website]()
___
<br>

## Demo
___
video here

## Overview
___
A web application developed to present the information of a hotel, including the room rates, hotel's concept, the facilities provided and so on. The objective of this project is to demonstrate the development of  single page application mainly with ***ReactJS, React-Router*** and ***Javascript***. Furthermore, the project is using Contentful as a Content Management System to host and deliver the contents: room prices, capacities, photos, etc. The application is deployed on Netlify platfom.<br><br>

## Key Topics
___
In this section, I aim to clarify my approach in building some interesting features during the development of this application, hopefully this helps you understand the code better.<br><br>

### [React JS](https://reactjs.org/tutorial/tutorial.html)
React JS is used to build all the UI components in this project. All the UI components had been written as functional components and several Hooks API such as *useState, useParams, useEffect* had been used in this project.<br><br>

### [React-Router](https://reactrouter.com/)
The application consists of four main pages: Home, Rooms, Single Room and Error to present different informations to users. In order to navigate among the pages, each of them contains a specific URL and react-router is used to provide routing between them. To do that, there are three primary components of React-Router has been used:
- **BrowserRouter** acts as a "Routing Provider" to register the root component of our application - App.js as a router component to keep the whole application and URLs in sync
```jsx
    ReactDOM.render (
	    <Router>
		<App />
	    <Router>,
    document.getElementById("root"));
```
- **Switch & Route** used as URL Matcher. The key concept of Single Page Application is we don't need to re-render the whole HTML document when there's an update in UI. Instead, we split the UI components into 4 *pages* and let the users to visit them when they need to. All these pages defined by specific URLs. A *Route* Component is responsible to match the correct URL and render the relevant UI components. *Switch* is always render the first matched *Route* Child and redirect to other pages based on URL's changes.
```jsx
<Switch>
	<Route exact path="/" component={Home} />
	<Route exact path="/rooms/" component={Rooms} />
	<Route exact path="/:slug" component={SingleRoom} />
	<Route component={Error} />
</Switch>
```
- Using **Link** component to allow users to return to Home by clicking a button / icon.
```html
<Link to="/">Home</Link>
```
Another important feature of React-Router applied in this project is ***Route Props***. 

As mentioned above, this project has Single Room page to present the details of each type of rooms to users. However, it would be messy if we write multiple *Route* for all the rooms we have. The alternative method is to use the ***URL Params*** to match the dynamic segments of URL.
```jsx
<Route path="/:slug" component={SingleRoom} />
```
**Route Props** has been passing down automatically to all the <Route> Child Components. When users click a room photo on the page, {useParams} Hooks is used to extract the 'slug" stored in the match object of Route Props and passing it into getRoom function to get the data of that room. Finally, the targeted room will be rendered on Single Room page.
```javascript
//Extract slug from props.match.params.slug
const slug = useParams().slug;

//Filter out and get the data of the targeted room
const room = getRoom(slug);
```
<br>

### [Context](https://reactjs.org/docs/context.html)
All the room data are passing down globally to the necessary child components by using React Context to prevent "prop-drilling". In context.js file, RoomContext had been created as a context object and being exported together with **RoomProvider** to allow the child components to access the context data directly using {useContext} Hooks.
```jsx
/** In context.js **/
const RoomContext = createContext();

//RoomProvider is just a wrapper
function RoomProvider () {
	return (
		<RoomContext.Provider value={/* room data and functions to be exported */}>
			{children}
		</RoomContext.Provider>
	);
}
export {RoomProvider, RoomContext}
```

```jsx
/** In index.js **/
import {RoomProvider} from "./context.js"

//JSX
<RoomProvider>
    <App />
</RoomProvider>
```

```javascript
/** In Child Component **/
import {RoomContext} from "../context.js"

const data = useContext(RoomContext);
/* or */
const {loading, sortedRooms} = useContext(RoomContext); // javascript object destructuring
```

There are two requirements in data management:
1. All the room data has to be loaded after the first rendering of UI: ComponentDidMount.
2. Users are able to filter the room and the relevant configurations has to be reflected to the UI's updates: ComponentDidUpdate.

Based on the requiremens above, context.js contains two states:
- **data**: A javascript object that consists of important properties such as loading, featuredRooms, price, capacity, etc.
- **sortedRooms**: used to update the rooms based on the changes of properties in data object.

There are two useEffect and various functions in context.js to achieve two requirements above.
```javascript
/* ComponentDisMount */
useEffect(()=>{
	// Contentful API to fetch room data (async function)
	(async ()=>{
		const reponse = await getEntries();
		//Configure the data object
		setData({...});
	})
}, []);

/* ComponentDidUpdate */
useEffect(()=>{
	//Reconfigure the sortedRooms based on changes in data's properties
	setSortedRooms();
}, [data]);
```
<br>

### [Contentful](https://contentful.github.io/contentful.js/contentful/8.5.0/)


### Useful Modules
There are some useful modules applied in this project, feel free to try them out:
* [Styled-Components](https://styled-components.com/)
* [React Icons](https://react-icons.github.io/react-icons/)