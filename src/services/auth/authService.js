const mockAdmin = {
  email: "admin@daruliman.com",
  password: "123456",
  name: "Super Admin",
};

export const loginUser = async (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email === mockAdmin.email &&
        data.password === mockAdmin.password
      ) {
        resolve({
          success: true,

          token: "mock-jwt-token",

          user: {
            name: mockAdmin.name,
            email: mockAdmin.email,
            role: "admin",
          },
        });
      } else {
        reject({
          success: false,
          message: "Invalid credentials",
        });
      }
    }, 1000);
  });
};
