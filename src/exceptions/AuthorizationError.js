/* eslint-disable linebreak-style */
const ClientError = require('./ClientError');

class AuthorizationError extends ClientError {
  const(message) {
    super(message, 403);
    this.name = 'AuthorizationError';
  }
}