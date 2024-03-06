/*
 * File: userValidation.mjs
 * Author: Joseph Koh
 * Description: Construct the user validation schema
 */

// Login validation schema
export const loginValidation = {
  username: {
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be string",
    },
  },
  password: {
    isLength: {
      options: {
        min: 8,
        max: 30,
      },
    },
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be string",
    },
  },
};

// Register validation schema
export const registerValidation = {
  username: {
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
    isString: {
      errorMessage: "Username must be string",
    },
    isLength: {
      options: {
        min: 8,
        max: 30,
      },
    },
  },
  confirmPassword: {
    notEmpty: {
      errorMessage: "Password cannot be empty",
    },
    isString: {
      errorMessage: "Password must be string",
    },
    isLength: {
      options: {
        min: 8,
        max: 30,
      },
    },
  },
  firstname: {
    notEmpty: {
      errorMessage: "First name cannot be empty",
    },
    isString: {
      errorMessage: "First name must be string",
    },
  },
  lastname: {
    notEmpty: {
      errorMessage: "First name cannot be empty",
    },
    isString: {
      errorMessage: "First name must be string",
    },
  },
  email: {
    notEmpty: {
      errorMessage: "Email cannot be empty",
    },
    isString: {
      errorMessage: "Email must be string",
    },
    isEmail: {
      errorMessage: "Email invalid format",
    },
  },
  address: {
    notEmpty: {
      errorMessage: "Address cannot be empty",
    },
    isString: {
      errorMessage: "Address must be string",
    },
  },
};

export const updateValidation = {
  firstname: {
    notEmpty: {
      errorMessage: "First name cannot be empty",
    },
    isString: {
      errorMessage: "First name must be string",
    },
  },
  lastname: {
    notEmpty: {
      errorMessage: "First name cannot be empty",
    },
    isString: {
      errorMessage: "First name must be string",
    },
  },
  address: {
    notEmpty: {
      errorMessage: "Address cannot be empty",
    },
    isString: {
      errorMessage: "Address must be string",
    },
  },
};
