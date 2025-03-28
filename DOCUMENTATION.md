# Process Monitor Dashboard - Technical Documentation

This document provides a detailed explanation of how the Process Monitor Dashboard application works, describing each file's purpose and functionality.

## Application Architecture

The Process Monitor Dashboard is a web-based application with a simple client-server architecture:

- **Client-side**: HTML, CSS, and JavaScript for the user interface
- **Server-side**: A basic Node.js server that serves the static files

## File Structure and Functionality

### 1. `server.js`

This is the entry point of the application, providing a lightweight HTTP server.

**Key Features:**
- Creates an HTTP server using Node.js built-in `http` module
- Serves static files (HTML, CSS, JavaScript)
- Maps file extensions to appropriate MIME types
- Handles basic error cases (404 Not Found, 500 Server Error)
- Listens on port 3000 by default

**How it Works:**
- When a request comes in, the server maps the URL path to a file path
- It reads the requested file from the filesystem
- If the file exists, it sends it back with the proper content type
- If the file doesn't exist, it returns a 404 page

### 2. `index.html`

This is the main HTML file that defines the structure of the dashboard.

**Key Elements:**
- The overall container and layout
- Dashboard header with title and refresh button
- Metrics panel with CPU, memory, and disk usage displays
- Process list table with column headers
- References to external CSS and JavaScript files

**Structure:**
- Header section with the dashboard title
- System metrics section with three metric panels
- Table section for displaying process information
- The table body (`#process-list`) is empty and will be populated by JavaScript

### 3. `css/styles.css`

This file contains all the styling for the dashboard.

**Key Styling Features:**
- Responsive design that works on different screen sizes
- Clean, modern UI with subtle shadows and transitions
- Grid layout for the metrics panels
- Table styling with hover effects and zebra striping
- Interactive elements (hover effects, button states)

**Styling Sections:**
- Base styling (reset, typography, colors)
- Layout containers and components
- Dashboard header and controls
- Metrics panels with hover effects
- Process table with responsive adjustments
- Media queries for responsive design

### 4. `js/script.js`

This is the core JavaScript file that provides the dynamic functionality of the dashboard.

**Key Components:**
- DOM element references cached for performance
- Sample process data for demonstration
- Functions for generating system metrics
- Table rendering and data formatting
- Simulated data retrieval mechanism
- Auto-refresh functionality

**Main Functionality Flow:**
1. **Initialization**: 
   - DOM elements are cached when the page loads
   - Event listeners are set up
   - Initial dashboard data is loaded
   - Auto-refresh timer is started

2. **Data Simulation**:
   - `simulateProcessDataRetrieval()` mimics API calls with a delay
   - Random values are generated for CPU, memory, and disk usage
   - Process data is randomized for each refresh

3. **UI Updates**:
   - `displaySystemMetrics()` updates the values in the metrics panels
   - `renderProcessTable()` clears and rebuilds the process table
   - Processes are sorted by CPU usage (highest first)

4. **User Interaction**:
   - Clicking the refresh button triggers an immediate data update
   - Visual feedback is provided during the refresh process

### 5. `package.json`

This file defines the Node.js project configuration.

**Key Information:**
- Project metadata (name, version, description)
- Dependencies (http, path, url)
- Development dependencies (nodemon for auto-restart during development)
- npm scripts for starting the server

### 6. `README.md`

The readme file provides general information about the project.

**Contents:**
- Project overview
- Features and capabilities
- Installation and usage instructions
- Project structure
- Future enhancement possibilities

## Data Flow

1. When the page loads, the browser requests `index.html` from the server
2. The server sends `index.html`, which references `styles.css` and `script.js`
3. The browser requests these additional files
4. Once loaded, the JavaScript initializes and calls `updateDashboard()`
5. `updateDashboard()` calls `simulateProcessDataRetrieval()` to get sample data
6. The data is used to update the UI through `displaySystemMetrics()` and `renderProcessTable()`
7. This process repeats every 15 seconds or when the user clicks the refresh button

## Extending the Application

To extend this application with real process data:

1. Create a server-side API endpoint that gathers actual system metrics
2. Modify `simulateProcessDataRetrieval()` to make actual API calls
3. Handle authentication and security concerns
4. Add error handling for network failures
5. Implement additional features like process management

## Performance Considerations

The application is designed with performance in mind:

- DOM element references are cached rather than repeatedly queried
- Table rows are efficiently generated and inserted
- The UI is updated only when necessary
- Responsive design ensures usability on various devices

## Browser Compatibility

The dashboard uses standard web technologies and should work in all modern browsers:
- HTML5
- CSS3 (Flexbox, Grid, Transitions)
- ES6+ JavaScript (Promises, Async/Await, Template Literals)

Older browsers may require polyfills or transpilation for full functionality. 