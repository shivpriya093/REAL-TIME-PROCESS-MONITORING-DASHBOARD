# System Process Monitor Dashboard

A streamlined dashboard for visualizing system processes and resource utilization metrics.

## Overview

This application provides a clean, modern interface for monitoring your system's performance metrics and running processes. The dashboard displays:

- Overall system resource utilization
- Detailed process information
- Real-time data refreshing

## Project Structure

```
process-monitor/
├── index.html       # Main application interface
├── css/
│   └── styles.css   # Visual styling
├── js/
│   └── script.js    # Dashboard functionality
├── server.js        # Simple file server
└── README.md        # Documentation
```

## How To Use

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```
4. Open your browser to `http://localhost:3000`
5. View the dashboard with simulated process data
6. Click "Refresh" for updated metrics

## Key Features

- **System Resource Visualization** - Track CPU, memory and disk usage
- **Process Information** - View details of running processes
- **Auto-Refresh** - Data updates every 15 seconds
- **Responsive Design** - Works on desktop and mobile devices

## Technical Notes

This is a simulation dashboard that uses randomly generated data to demonstrate the interface. In a production environment, you would integrate with system monitoring APIs to display actual process information.

## Potential Enhancements

- Add process search and filtering
- Implement historical data graphs
- Add process sorting by different metrics
- Include process grouping by application
- Add custom threshold alerts

## License

MIT 