const crypto = require('crypto');

export default function handler(req, res) {
    if (req.method === 'GET') {
        const challengeCode = req.query.challenge_code;
        const verificationToken = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
        const endpoint = 'https://test-nine-mauve-74.vercel.app/api/ebay-deletion';

        const hash = crypto.createHash('sha256')
            .update(challengeCode + verificationToken + endpoint)
            .digest('hex');

        res.status(200).json({ challengeResponse: hash });
    } else if (req.method === 'POST') {
        res.status(200).json({ message: 'OK' });
    }
}
