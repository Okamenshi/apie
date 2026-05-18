export default function handler(req, res) {
    if (req.method === 'POST') {
        // eBay sends deletion notifications here
        // We don't store any user data so nothing to delete
        console.log('eBay deletion notification received');
        res.status(200).json({ message: 'OK' });
    } else if (req.method === 'GET') {
        // eBay uses this to verify the endpoint
        const challenge = req.query.challenge_code;
        if (challenge) {
            res.status(200).json({ challengeResponse: challenge });
        } else {
            res.status(200).json({ message: 'Endpoint active' });
        }
    }
}
