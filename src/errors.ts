export class CredentialsNotProvidedError extends Error {
  message = 'No authorization token provided';
}

export class RequestError extends Error {
  message = 'Error completing request';
}
