const baseUrl = 'http://localhost:3000';

export const authenticationApi = {
  users: 'http://localhost:3000/users',
  getAllEmployee: 'http://localhost:3000/employees',
  forgotPassword: '/api/forgot-password',
  resetPassword: '/api/reset-password',
  verifyEmail: '/api/verify-email',
  resendVerificationEmail: '/api/resend-verification-email',
  changePassword: '/api/change-password',
  updateProfile: '/api/update-profile',
  getUserProfile: '/api/get-user-profile',
  updateSettings: '/api/update-settings',
  getSettings: '/api/get-settings',
  getUserList: '/api/get-user-list',
  getUserById: '/api/get-user-by-id',
  updateUser: '/api/update-user',
  deleteUser: '/api/delete-user',
  createUser: '/api/create-user',
  getDepartments: '/api/get-departments',
};
