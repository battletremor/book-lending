function validateEmail(email) {
    // Regular expression for validating an email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailPattern.test(email); // Returns true if valid, false if not
  }

  export default validateEmail;