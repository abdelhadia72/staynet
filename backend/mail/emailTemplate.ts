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
                              <a href="RESETURL" style="display: inline-block; padding: 14px 30px; background-color: #e74c3c; color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 4px;">Reset Password</a>
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

export const welcomeEmail = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Stayent! 🎉</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f0f8ff;">
    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
        <!-- Header -->
        <tr>
            <td align="center" style="padding: 40px 0; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);">
                <img src="https://via.placeholder.com/120" alt="Stayent Logo" style="width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ffffff;">
            </td>
        </tr>
        <!-- Personalized Welcome Message -->
        <tr>
            <td style="padding: 40px 30px; text-align: center;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center">
                            <h1 style="color: #333; font-size: 32px; margin-bottom: 20px;">Welcome to Stayent, <span style="color: #6a11cb; font-size: 36px; display: block; margin-top: 10px;">{Username}! 👋</span></h1>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <p style="color: #666; font-size: 18px; line-height: 28px;">
                                We're absolutely thrilled to have you join our community of adventurers and comfort-seekers! 🌟🏠
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- Animated Divider -->
        <tr>
            <td style="padding: 0 30px;">
                <div style="width: 100%; height: 2px; background: linear-gradient(to right, #6a11cb, #2575fc, #6a11cb); animation: shimmer 2s infinite linear;">
                    &nbsp;
                </div>
            </td>
        </tr>
        <!-- Your Journey Begins -->
        <tr>
            <td style="padding: 40px 30px; text-align: center;">
                <h2 style="color: #333; font-size: 24px; margin-bottom: 20px;">Your Stayent Journey Begins Here! 🚀</h2>
                <p style="color: #666; font-size: 16px; line-height: 24px;">
                    Get ready for seamless stays, unforgettable experiences, and a world of possibilities at your fingertips.
                </p>
            </td>
        </tr>
        <!-- Features Showcase -->
        <tr>
            <td style="padding: 0 30px 40px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <img src="https://via.placeholder.com/80" alt="Search Icon" style="width: 80px; height: 80px;">
                            <h3 style="color: #333; margin: 15px 0;">Find Your Perfect Stay 🔍</h3>
                            <p style="color: #666; font-size: 16px;">Discover a wide range of accommodations tailored to your needs.</p>
                        </td>
                        <td align="center" style="padding: 20px;">
                            <img src="https://via.placeholder.com/80" alt="Booking Icon" style="width: 80px; height: 80px;">
                            <h3 style="color: #333; margin: 15px 0;">Easy Booking 📅</h3>
                            <p style="color: #666; font-size: 16px;">Book your stay with just a few clicks. It's that simple!</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <img src="https://via.placeholder.com/80" alt="Support Icon" style="width: 80px; height: 80px;">
                            <h3 style="color: #333; margin: 15px 0;">24/7 Support 💬</h3>
                            <p style="color: #666; font-size: 16px;">Our team is always here to assist you, anytime, anywhere.</p>
                        </td>
                        <td align="center" style="padding: 20px;">
                            <img src="https://via.placeholder.com/80" alt="Rewards Icon" style="width: 80px; height: 80px;">
                            <h3 style="color: #333; margin: 15px 0;">Earn Rewards 🏆</h3>
                            <p style="color: #666; font-size: 16px;">Enjoy exclusive perks and discounts as you travel more.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- CTA -->
        <tr>
            <td style="padding: 0 30px 40px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" style="background-color: #f9f9f9; padding: 30px; border-radius: 10px;">
                            <h2 style="color: #333; margin-bottom: 20px;">Ready to start your journey ? </h2>
                            <a href="#" style="display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: #ffffff; text-decoration: none; font-weight: bold; border-radius: 30px; font-size: 18px; transition: all 0.3s ease;">Explore Stayent Now</a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- Social Media -->
        <tr>
            <td style="padding: 0 30px 40px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center">
                            <p style="color: #666; font-size: 16px; margin-bottom: 20px;">Connect with us and join the Stayent community:</p>
                            <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://via.placeholder.com/40" alt="Facebook" style="width: 40px; height: 40px;"></a>
                            <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://via.placeholder.com/40" alt="Twitter" style="width: 40px; height: 40px;"></a>
                            <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://via.placeholder.com/40" alt="Instagram" style="width: 40px; height: 40px;"></a>
                            <a href="#" style="display: inline-block; margin: 0 10px;"><img src="https://via.placeholder.com/40" alt="LinkedIn" style="width: 40px; height: 40px;"></a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <!-- Footer -->
        <tr>
            <td style="padding: 30px; background-color: #f0f8ff; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0;">© 2024 Stayent. All rights reserved. 🏡</p>
                <p style="color: #666; font-size: 14px; margin: 10px 0 0;">
                    Questions? <a href="#" style="color: #6a11cb; text-decoration: none;">Contact our friendly support team</a>
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`;

// preview email template: https://htmledit.squarefree.com/
