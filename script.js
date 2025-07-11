// This file is for general scripts that might be used across multiple pages.

function checkUserStatus() {
    console.log("Checking user login status...");
    const userLoggedIn = localStorage.getItem('userLoggedIn');
    if (userLoggedIn === 'true') {
        console.log("User is logged in.");
    } else {
        console.log("User is a guest.");
    }
}

// You can add other global helper functions here.
// For example, a function to format currency:
function formatCurrency(amount) {
    return `₹${amount.toLocaleString()}`;
}

console.log("Global script.js loaded.");