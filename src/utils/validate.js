export const validateFormData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(
    password
  );

  if (!isEmailValid) return "Invalid email type";
  if (!isPasswordValid) return "Invalid password type";

  return "ok";
};
