const jwt = require('jsonwebtoken');

// Secret key for signing and verifying JWT tokens
const SECRET_KEY = 'ABCD'; // Replace with a strong, secure key

/**
 * Generate a JWT token
 * @param {Object} payload - The data to encode in the token
 * @param {String} [expiresIn='1h'] - Token expiration time (default: 1 hour)
 * @returns {String} - The signed JWT token
 */
const signToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

/**
 * Verify a JWT token
 * @param {String} token - The token to verify
 * @returns {Object} - The decoded token payload
 * @throws {Error} - If the token is invalid or expired
 */
const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

/**
 * Middleware for Express to verify JWT tokens in requests
 */
const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token
  if (!token) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Attach user data to the request object
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = {
  signToken,
  verifyToken,
  jwtMiddleware,
};
