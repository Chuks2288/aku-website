
import fetch from "node-fetch";

interface BitlyResponse {
    link: any;
}
// Function to generate a random token
function generateRandomToken() {
    const token = Math.random().toString(36).substring(2, 10);
    return token;
}

// Function to generate a referral link for a user
export async function generateReferralLink(userId: any) {
    const randomToken = generateRandomToken();
    const longUrl = `https://localhost:3000/register?ref=${userId}-${randomToken}`;
    const accessToken = process.env.BITLY_ACCESS_TOKEN;

    const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                long_url: longUrl,
            }),
        });

        if (response.ok) {
            // @ts-ignore
            const data: BitlyResponse = await response.json(); // Specify type as BitlyResponse
            const shortUrl = data?.link;
            return shortUrl;
        } else {
            throw new Error('Failed to shorten URL');
        }
    } catch (error: any) {
        console.error('Error shortening URL:', error.message);
        // If an error occurs, return the long URL as a fallback
        return longUrl;
    }
}
