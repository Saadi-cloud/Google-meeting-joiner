const puppeteer = require("puppeteer");

async function joinGoogleMeet(meetingLink, userName) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    
    await page.goto(meetingLink);

    // Handle potential pop-ups or restrictions
    try {
        // Wait for the name input field to appear and type the name
        await page.waitForSelector('input[aria-label="Your name"]', { visible: true, timeout: 30000 });
        await page.type('input[aria-label="Your name"]', userName);
        console.log("Typed the name", userName);

        // Wait for the "Ask to join" button to appear and click it
        await page.waitForSelector('button[jsname="LgbsSe"]', { visible: true });
        await page.click('button[jsname="LgbsSe"]');
        console.log("Clicked the 'Ask to join' button");
    } catch (error) {
        console.log("Error:", error);
    }

    // Optionally, you can close the browser after some time
    // setTimeout(() => browser.close(), 60000); // Close after 1 minute
}

const meetingLink = 'https://meet.google.com/xux-htiy-bjz';
const userName = 'saad'; // Replace with the desired name
joinGoogleMeet(meetingLink, userName);
