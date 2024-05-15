const Author  = require('../modules/auth.module');
module.exports = {
    aouthlist: async (req, res) => {
        console.log(req.body)
        try {
            const result = await Author.find();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
