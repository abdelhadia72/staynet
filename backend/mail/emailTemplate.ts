export const sendVerificationEmail = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Stayent Account</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7fa;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <tr>
              <td align="center" style="padding: 40px 0; background-color: #3498db;">
                  <img src="https://via.placeholder.com/80" alt="Stayent Logo" style="width: 80px; height: 80px; border-radius: 50%;">
              </td>
          </tr>
          <tr>
              <td style="padding: 40px 30px;">
                  <h1 style="color: #2c3e50; font-size: 28px; margin-bottom: 20px; text-align: center;">Verify Your Email</h1>
                  <p style="color: #34495e; font-size: 16px; line-height: 24px; text-align: center;">
                      Welcome to Stayent! To get started, please verify your email address by entering the code below:
                  </p>
                  <p style="font-size: 36px; font-weight: bold; color: #3498db; letter-spacing: 5px; text-align: center; margin: 30px 0; padding: 15px; background-color: #ecf0f1; border-radius: 4px;">{verificationCode}</p>
                  <p style="color: #7f8c8d; font-size: 14px; line-height: 22px; text-align: center;">
                      This code will expire in 15 minutes. If you didn't request this verification, please ignore this email.
                  </p>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                      <tr>
                          <td align="center">
                              <a href="#" style="display: inline-block; padding: 14px 30px; background-color: #3498db; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px;">Verify Email</a>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="padding: 30px; background-color: #ecf0f1; text-align: center;">
                  <p style="color: #7f8c8d; font-size: 14px; margin: 0;">© 2024 Stayent. All rights reserved.</p>
                  <p style="color: #7f8c8d; font-size: 14px; margin: 10px 0 0;">
                      Need help? <a href="#" style="color: #3498db; text-decoration: none;">Contact our support team</a>
                  </p>
              </td>
          </tr>
      </table>
  </body>
  </html>
`;

export const resetPasswordEmail = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your Stayent Password</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7fa;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <tr>
              <td align="center" style="padding: 40px 0; background-color: #e74c3c;">
                  <img src="https://via.placeholder.com/80" alt="Stayent Logo" style="width: 80px; height: 80px; border-radius: 50%;">
              </td>
          </tr>
          <tr>
              <td style="padding: 40px 30px;">
                  <h1 style="color: #2c3e50; font-size: 28px; margin-bottom: 20px; text-align: center;">Reset Your Password</h1>
                  <p style="color: #34495e; font-size: 16px; line-height: 24px; text-align: center;">
                      We received a request to reset your Stayent account password. If you didn't make this request, please ignore this email.
                  </p>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                      <tr>
                          <td align="center">
                              <a href="#" style="display: inline-block; padding: 14px 30px; background-color: #e74c3c; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px;">Reset Password</a>
                          </td>
                      </tr>
                  </table>
                  <p style="color: #7f8c8d; font-size: 14px; line-height: 22px; text-align: center; margin-top: 30px;">
                      This password reset link will expire in 1 hour for security reasons. If you need to reset your password after that, please request a new reset link.
                  </p>
              </td>
          </tr>
          <tr>
              <td style="padding: 30px; background-color: #ecf0f1; text-align: center;">
                  <p style="color: #7f8c8d; font-size: 14px; margin: 0;">© 2024 Stayent. All rights reserved.</p>
                  <p style="color: #7f8c8d; font-size: 14px; margin: 10px 0 0;">
                      Need help? <a href="#" style="color: #e74c3c; text-decoration: none;">Contact our support team</a>
                  </p>
              </td>
          </tr>
      </table>
  </body>
  </html>
`;

export const passwordResetSuccessEmail = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset Successful - Stayent</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7fa;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <tr>
              <td align="center" style="padding: 40px 0; background-color: #2ecc71;">
                  <img src="https://via.placeholder.com/80" alt="Stayent Logo" style="width: 80px; height: 80px; border-radius: 50%;">
              </td>
          </tr>
          <tr>
              <td style="padding: 40px 30px;">
                  <h1 style="color: #2c3e50; font-size: 28px; margin-bottom: 20px; text-align: center;">Password Reset Successful</h1>
                  <p style="color: #34495e; font-size: 16px; line-height: 24px; text-align: center;">
                      Great news! Your Stayent account password has been successfully reset.
                  </p>
                  <div style="text-align: center; margin: 30px 0;">
                      <img src="https://via.placeholder.com/100" alt="Success Icon" style="width: 100px; height: 100px;">
                  </div>
                  <p style="color: #34495e; font-size: 16px; line-height: 24px; text-align: center;">
                      You can now log in to your account using your new password. If you didn't make this change or if you believe an unauthorized person has accessed your account, please contact our support team immediately.
                  </p>
                  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-top: 30px;">
                      <tr>
                          <td align="center">
                              <a href="#" style="display: inline-block; padding: 14px 30px; background-color: #2ecc71; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px;">Log In to Your Account</a>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr>
              <td style="padding: 30px; background-color: #ecf0f1; text-align: center;">
                  <p style="color: #7f8c8d; font-size: 14px; margin: 0;">© 2024 Stayent. All rights reserved.</p>
                  <p style="color: #7f8c8d; font-size: 14px; margin: 10px 0 0;">
                      Need help? <a href="#" style="color: #2ecc71; text-decoration: none;">Contact our support team</a>
                  </p>
              </td>
          </tr>
      </table>
  </body>
  </html>
`;

// preview email template: https://htmledit.squarefree.com/
