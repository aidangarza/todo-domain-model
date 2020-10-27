export default async (response, options = {}) => {
  const { errorMessage } = options;
  // Try to extract the error message from the body
  try {
    // Get the error as json
    const error = await response.json()
    // Reject with the error
    return Promise.reject(error)
  } catch (e) {
    // Reject with the default message
    return Promise.reject(errorMessage || 'Something went wrong')
  }
}
