const Author = require('../modules/auth.module');
const jwt = require('jsonwebtoken'); // Import jwt module

// Middleware function to authenticate token
function authenticateToken(req, res, next) {
    const accessToken = req.cookies.token;
    console.log("acssse is")
    if (!accessToken) {
        return res.status(401).send('Unauthorized');
    }
    jwt.verify(accessToken, "secret_key", (err, decoded) => {
        if (err) {
            return res.status(401).send('Unauthorized');
        }      
        // Access token is valid, proceed with the next middleware
        next();
    });
}

module.exports = {
    auth: async (req, res) => {
        console.log(req.body);
        try {
            const author = new Author({
                firstname: "hussain",
                lastname: "hakem",
                age: "12",
            });

            const result = await author.save();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    authlist: async (req, res) => {
        console.log(req.body);
        try {
            const result = await Author.find();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const data = req.body;
        try {
            const result = await Author.findByIdAndUpdate(req.body.id,
                {
                    $set: {
                        firstname: data.firstname
                    },
                },
                {
                    new: true
                }
            );
            console.log(result);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    // Export authenticateToken function separately
    authenticateToken: authenticateToken
};
