const jwt = require('jsonwebtoken');
const secretKey = 'secret_key'; // Your secret key for JWT
module.exports = {
  refreshToken: async (req, res) => {
    console.log(req.body.refreshToken);
    const refreshToken = req.body.refreshToken;   
    if (!refreshToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }
    jwt.verify(refreshToken, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Refresh token is not valid' });
      }
      // Assuming user information is available from the refreshToken payload
      const userData = { userId: user.userId, username: user.username };
      // Generate access token with user information
      const accessToken = jwt.sign(userData, secretKey, { expiresIn: '1h' });
      res.json({ accessToken });
    });
  }
};
