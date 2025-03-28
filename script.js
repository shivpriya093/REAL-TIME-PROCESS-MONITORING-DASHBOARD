// Application variables
const appElements = {
    processList: document.getElementById('process-list'),
    refreshBtn: document.getElementById('refresh-btn'),
    cpuDisplay: document.querySelector('#cpu-usage .metric-value'),
    memDisplay: document.querySelector('#memory-usage .metric-value'),
    diskDisplay: document.querySelector('#disk-usage .metric-value')
};

// Customized process data set
const mockProcessData = [
    { processID: 1234, processName: "chrome.exe", cpuPercent: 12.5, memorySize: 8.2, processState: "Running" },
    { processID: 2345, processName: "firefox.exe", cpuPercent: 8.3, memorySize: 6.7, processState: "Running" },
    { processID: 3456, processName: "explorer.exe", cpuPercent: 2.1, memorySize: 3.4, processState: "Running" },
    { processID: 4567, processName: "code.exe", cpuPercent: 15.7, memorySize: 12.3, processState: "Running" },
    { processID: 5678, processName: "node.exe", cpuPercent: 5.2, memorySize: 4.1, processState: "Running" },
    { processID: 6789, processName: "slack.exe", cpuPercent: 3.7, memorySize: 5.8, processState: "Running" },
    { processID: 7890, processName: "spotify.exe", cpuPercent: 4.3, memorySize: 3.5, processState: "Running" },
    { processID: 8901, processName: "discord.exe", cpuPercent: 2.8, memorySize: 4.2, processState: "Running" },
    { processID: 9012, processName: "svchost.exe", cpuPercent: 1.5, memorySize: 2.3, processState: "Running" },
    { processID: 9871, processName: "winlogon.exe", cpuPercent: 0.8, memorySize: 1.9, processState: "Running" },
    { processID: 4321, processName: "antimalware.exe", cpuPercent: 2.3, memorySize: 3.8, processState: "Running" },
    { processID: 7654, processName: "devenv.exe", cpuPercent: 11.2, memorySize: 14.7, processState: "Running" }
];

// System resource information
const systemResources = {
    cpuLoad: () => Math.floor(Math.random() * 65) + 20, // 20-85% load
    memoryUsage: () => Math.floor(Math.random() * 40) + 45, // 45-85% usage
    diskSpace: () => Math.floor(Math.random() * 30) + 60 // 60-90% usage
};

// Format process table row data
function generateProcessRow(processData) {
    const rowElement = document.createElement('tr');
    
    rowElement.innerHTML = `
        <td>${processData.processID}</td>
        <td>${processData.processName}</td>
        <td>${processData.cpuPercent.toFixed(1)}%</td>
        <td>${processData.memorySize.toFixed(1)} MB</td>
        <td>${processData.processState}</td>
    `;
    
    return rowElement;
}

// Display all processes in the table
function renderProcessTable(processDataArray) {
    // Clear the existing table
    appElements.processList.innerHTML = '';
    
    // Sort processes by CPU usage (highest to lowest)
    const sortedProcesses = [...processDataArray].sort((a, b) => b.cpuPercent - a.cpuPercent);
    
    // Add each process to the table
    sortedProcesses.forEach(proc => {
        const row = generateProcessRow(proc);
        appElements.processList.appendChild(row);
    });
}

// Update the system resource displays
function displaySystemMetrics(metricsData) {
    appElements.cpuDisplay.textContent = `${metricsData.cpu}%`;
    appElements.memDisplay.textContent = `${metricsData.memory}%`;
    appElements.diskDisplay.textContent = `${metricsData.disk}%`;
}

// Simulate data retrieval from the system
function simulateProcessDataRetrieval() {
    return new Promise(resolve => {
        setTimeout(() => {
            // Generate randomized process data
            const updatedProcesses = mockProcessData.map(proc => ({
                ...proc,
                cpuPercent: parseFloat((Math.random() * 25).toFixed(1)),
                memorySize: parseFloat((Math.random() * 20).toFixed(1))
            }));
            
            // Generate randomized system metrics
            const metrics = {
                cpu: systemResources.cpuLoad(),
                memory: systemResources.memoryUsage(),
                disk: systemResources.diskSpace()
            };
            
            resolve({
                systemMetrics: metrics,
                processes: updatedProcesses
            });
        }, 800); // Simulate network delay
    });
}

// Update the entire dashboard
async function updateDashboard() {
    try {
        // Visual feedback during refresh
        appElements.refreshBtn.disabled = true;
        appElements.refreshBtn.textContent = 'Processing...';
        
        // Fetch new data
        const monitorData = await simulateProcessDataRetrieval();
        
        // Update UI with new data
        displaySystemMetrics(monitorData.systemMetrics);
        renderProcessTable(monitorData.processes);
    } catch (error) {
        console.error('Dashboard update failed:', error);
    } finally {
        // Reset button state
        appElements.refreshBtn.disabled = false;
        appElements.refreshBtn.textContent = 'Refresh';
    }
}

// Set up event handlers
appElements.refreshBtn.addEventListener('click', updateDashboard);

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Initial load
    updateDashboard();
    
    // Auto-refresh every 15 seconds
    setInterval(updateDashboard, 15000);
}); 