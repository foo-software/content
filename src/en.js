export const EMAIL_TEMPLATE_ACCOUNT_CANCEL_CTA = 'Come back anytime!';
export const EMAIL_TEMPLATE_ACCOUNT_CANCEL_HEADLINE = 'Account Canceled';
export const EMAIL_TEMPLATE_ACCOUNT_CANCEL_MAIN = {
  get: ({ accountName }) => `Sorry to see you go! "${accountName}" has been canceled. If you canceled during the trial period - you will not be charged. If it was after the free trial - a prorated refund will be issued shortly (if applicable). Feel free to contact us with any questions.`,
};
export const EMAIL_TEMPLATE_ACCOUNT_CANCEL_SUBJECT = 'Account Canceled';
export const EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_CTA = 'Manage your accounts here.';
export const EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_HEADLINE = `You're Added!`;
export const EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_MAIN = {
  get: ({ accountName }) => `You've been added to "${accountName}" Foo account.`,
};
export const EMAIL_TEMPLATE_ACCOUNT_USER_ADDED_SUBJECT = `You Have Been Added`;
export const EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_CTA = 'Accept the invitation by registering here.';
export const EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_HEADLINE = `You're Invited!`;
export const EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_MAIN = {
  get: ({ accountName }) => `You've been invited to "${accountName}" Foo account.`,
};
export const EMAIL_TEMPLATE_ACCOUNT_USER_INVITED_SUBJECT = `You Have Been Invited`;
export const EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_CTA = 'Visit us anytime!';
export const EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_HEADLINE = 'Removed Confirmation';
export const EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_MAIN = {
  get: ({ accountName }) => `This is just a confirmation that you've been removed from "${accountName}".`,
};
export const EMAIL_TEMPLATE_ACCOUNT_USER_REMOVED_CONFIRMATION_SUBJECT = 'Removed from Account Confirmation';
export const EMAIL_TEMPLATE_EMAIL_CONFIRM = 'Please confirm your email address.';
export const EMAIL_TEMPLATE_EMAIL_CONFIRM_CTA = 'Navigate here to confirm.';
export const EMAIL_TEMPLATE_EMAIL_CONFIRM_HEADLINE = 'Email Confirm';
export const EMAIL_TEMPLATE_EMAIL_CONFIRM_SUBJECT = 'Confirm Your Email with Foo';
export const EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_CTA = 'Navigate here to confirm.';
export const EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_HEADLINE = 'Confirm';
export const EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_MAIN = 'Please confirm this email as an alert for Foo. This email will be notified with status updates as they occur.';
export const EMAIL_TEMPLATE_EMAIL_ALERT_CONFIRM_SUBJECT = 'Email Alert Confirm';
export const EMAIL_TEMPLATE_ID_ACCOUNT_CANCEL = 'd-5d850cea0d6e4262aea1677d5a4e45dc';
export const EMAIL_TEMPLATE_ID_ACCOUNT_USER_ADDED = 'd-ff5d8e55aace43cca73583ac4e54ca81';
export const EMAIL_TEMPLATE_ID_ACCOUNT_USER_INVITED = 'd-5e995c467ff941dcbd5aae3a9f146b4f';
export const EMAIL_TEMPLATE_ID_ACCOUNT_USER_REMOVED_CONFIRMATION = 'd-cf4dbc9c87464cdab1a4f07da21ceccb';
export const EMAIL_TEMPLATE_ID_EMAIL_ALERT_CONFIRM = 'd-f0e2fe2890ed47b5811c20812587a1cb';
export const EMAIL_TEMPLATE_ID_EMAIL_CONFIRM = 'd-044e308ea69741c7b9349d9970ec48f6';
export const EMAIL_TEMPLATE_ID_INVITE_ACCEPTED = 'd-9620b0e881a0407facb3ee4904eda072';
export const EMAIL_TEMPLATE_ID_PAGE_ALERT_HEALTHY = 'd-0aef9ceb257e48dbbe5f83c7629cda9b';
export const EMAIL_TEMPLATE_ID_PAGE_ALERT_UNHEALTHY = 'd-eca574ba0dfa4fe59be8f29a2b32424d';
export const EMAIL_TEMPLATE_ID_PASSWORD_RESET = 'd-e4f89c8943d9436c95fe2aae3e07a312';
export const EMAIL_TEMPLATE_ID_SUBSCRIPTION_CREATED = 'd-2c0dbb1acd7045ae8ff7879015cbbd91';
export const EMAIL_TEMPLATE_ID_SUBSCRIPTION_UPGRADED = 'd-e32c0427ea4241678eda50b86f99903c';
export const EMAIL_TEMPLATE_ID_SUBSCRIPTION_PAYMENT_PAST_DUE = 'd-ae7346390e2c42b69414c51f725aace9';
export const EMAIL_TEMPLATE_ID_WELCOME = 'd-ccb4f0689c484dda8f2ffc3c41c9b649';
export const EMAIL_TEMPLATE_INVITE_ACCEPTED_CTA = 'See all users.';
export const EMAIL_TEMPLATE_INVITE_ACCEPTED_HEADLINE = 'Invite Accepted';
export const EMAIL_TEMPLATE_INVITE_ACCEPTED_MAIN = {
  get: ({ email }) => `${email} has accepted your invite!`,
};
export const EMAIL_TEMPLATE_INVITE_ACCEPTED_SUBJECT = 'Invite Accepted';
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_MAIN = {
  get: ({ pageName }) => `${pageName} page has recovered.`,
};
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEALTHY_SUBJECT = {
  get: ({ pageName }) => `${pageName} Has Recovered`,
};
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_MAIN = {
  get: ({ pageName }) => `${pageName} page has become unhealthy.`,
};
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_UNHEALTHY_SUBJECT = {
  get: ({ pageName }) => `${pageName} is Unhealthy`,
};
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_HEADLINE = 'Page Health Status';
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_CTA = 'Dashboard';
export const EMAIL_TEMPLATE_PAGE_HEALTH_ALERT_LINK_CTA = 'Visit the dashboard.';
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_HEADLINE = 'Page Performance Status';
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_HEALTHY_MAIN = {
  get: ({ pageName }) => `${pageName} page performance is back to normal.`,
};
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_IMPROVEMENT_MAIN = {
  get: ({ pageName }) => `${pageName} page performance score has improved.`,
};
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_IMPROVEMENT_SUBJECT = {
  get: ({ pageName }) => `${pageName} Performance Score has Improved!`,
};
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_HEALTHY_SUBJECT = {
  get: ({ pageName }) => `${pageName} Performance Score has Recovered`,
};
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_UNHEALTHY_MAIN = {
  get: ({ pageName }) => `${pageName} page performed lower than usual.`,
};
export const EMAIL_TEMPLATE_PAGE_PERFORMANCE_ALERT_UNHEALTHY_SUBJECT = {
  get: ({ pageName }) => `${pageName} Performance Score Drop`,
};
export const EMAIL_TEMPLATE_PASSWORD_RESET_HEADLINE = 'Password Reset';
export const EMAIL_TEMPLATE_PASSWORD_RESET_CTA = 'Navigate here to reset your password.';
export const EMAIL_TEMPLATE_PASSWORD_RESET_MAIN = {
  get: ({ passwordResetDays }) => `You have ${passwordResetDays} days to reset your password.`,
};
export const EMAIL_TEMPLATE_PASSWORD_RESET_SUBJECT = 'Password Reset';
export const EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_CTA = 'Visit the dashboard.';
export const EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_HEADLINE = 'Congrats!';
export const EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_MAIN = {
  get: ({ currency, price, trialDuration }) => `You've successfully created an account subscription. The free trial is ${trialDuration}. If you don't cancel before the end of the trial - you'll be charged ${price} (${currency}) on that day and every month until you cancel. You can cancel anytime in the account section. Cancellations are refunded a prorated amount. If you cancel before the free trial end you won't be charged at all!`,
};
export const EMAIL_TEMPLATE_SUBSCRIPTION_CREATED_SUBJECT = 'Subscription Created';
export const EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_CTA = 'You can update or add a new payment method in billing.';
export const EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_HEADLINE = 'Payment Status';
export const EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_MAIN = 'Your subscription payment is past due and therefore your account has been switched to "read only" mode until resolved.';
export const EMAIL_TEMPLATE_SUBSCRIPTION_PAYMENT_PAST_DUE_SUBJECT = 'Subscription Payment Past Due';
export const EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_CTA = 'Visit billing.';
export const EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_HEADLINE = 'Upgraded!';
export const EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_MAIN = {
  get: ({ currency, price, planName }) => `Your account subscription was successfully upgraded to "${planName}". You are receiving this email as the owner of the account payment method. Your payment method will be charged ${price} (${currency}) monthly. You can update the payment method and manage billing on our website.`,
};
export const EMAIL_TEMPLATE_SUBSCRIPTION_UPGRADED_SUBJECT = 'Subscription Upgraded';
export const EMAIL_TEMPLATE_WELCOME_HEADLINE = 'Welcome!';
export const EMAIL_TEMPLATE_WELCOME_MAIN = 'Thanks for registering.';
export const EMAIL_TEMPLATE_WELCOME_SUBJECT = 'Thanks for Registering with Foo - Please Confirm Email';
export const ERROR_ACCOUNT_CREATE = 'Error creating account.';
export const ERROR_ACCOUNT_CREATE_NO_CREDIT = 'No account credits.';
export const ERROR_ACCOUNT_FREE_ALREADY_USED = 'Only one free account allowed.';
export const ERROR_ACCOUNT_GET_SUBSCRIPTION = 'Error getting account subscription.';
export const ERROR_ACCOUNT_IS_READ_ONLY = 'This account is read only.';
export const ERROR_ACCOUNT_IS_READ_ONLY_USER_EMAIL_UNCONFIRMED = 'This account is read only until the email is confirmed. Go to settings page for help.';
export const ERROR_ACCOUNT_REMOVE_USER = 'Error removing account user.';
export const ERROR_ACCOUNT_UPGRADE = 'Error upgrading.';
export const ERROR_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE = 'Error updating the payment method.';
export const ERROR_ACCOUNT_UPDATE_USER = 'Error updating account user.';
export const ERROR_ACCOUNT_UPDATE_FROM_SUBSCRIPTION = 'Error updating account from subscription.';
export const ERROR_ALERT_CREATE = 'Error creating alert.';
export const ERROR_ALERT_EMAIL_CONFIRMATION = 'Error confirming email.';
export const ERROR_ALERT_EMAIL_CONFIRMATION_RESEND = 'Error resending confirmation email.';
export const ERROR_ALERT_EMAIL_CONFIRMATION_RESEND_NOT_FOUND = 'Error resending confirmation email - alert not found.';
export const ERROR_ALERT_INVALID_SLACK_URL = 'Invalid Slack webhook url.';
export const ERROR_ALERT_REMOVE = 'Error removing alert.';
export const ERROR_ALERT_UPDATE = 'Error updating alert.';
export const ERROR_ALERTS_MAX_REACHED = 'Maximum alerts reached.';
export const ERROR_AUTHENTICATION_EMAIL_TAKEN = 'That email is taken.';
export const ERROR_AUTHENTICATION_FORBIDDEN = 'The user is forbidden.';
export const ERROR_AUTHENTICATION_INVITE_EXPIRED = 'That invite is expired.';
export const ERROR_AUTHENTICATION_INVALID_PASSWORD = 'Password should be at least 8 characters.';
export const ERROR_AUTHENTICATION_NO_USER = 'That user does not exist.';
export const ERROR_AUTHENTICATION_WRONG_PASSWORD = 'Wrong password.';
export const ERROR_BRAINTREE_CREATE_SALE_TRANSACTION = 'Error creating sale transaction.';
export const ERROR_BRAINTREE_CREATE_SUBSCRIPTION = 'Error creating subscription.';
export const ERROR_BRAINTREE_GET_CLIENT_TOKEN = 'Error getting client token.';
export const ERROR_BRAINTREE_GET_SUBSCRIPTION = 'Error getting subscription.';
export const ERROR_BRAINTREE_TRANSACTION_DECLINE = 'There was a problem processing your credit card, please double check your payment information and try again';
export const ERROR_DISABLED = 'Disabled.';
export const ERROR_EMAIL_ALREADY_TAKEN = 'That email is already taken.';
export const ERROR_FLAGGED_FOR_REMOVAL = 'This account has been deleted.';
export const ERROR_GENERIC = 'Sorry, something went wrong.';
export const ERROR_INVITATION_CREATE = 'Error creating invitation.';
export const ERROR_INVITATION_MAX_USERS = 'Max user limit has been reached for this account. If you have outdated pending notifications - try deleting those.';
export const ERROR_MISSING_REQUIRED_FIELDS = 'Missing required fields.';
export const ERROR_NAVIGATION_TIMEOUT = {
  get: ({ puppeteerDefaultTimeout }) => `The request took longer than the allowed ${puppeteerDefaultTimeout}ms.`,
};
export const ERROR_PAGE_CREATE = 'Error creating page.';
export const ERROR_PAGE_MAX_PAGES = 'Max page limit has been reached for this account.';
export const ERROR_PAGE_MISSING = 'This page does not exist.';
export const ERROR_PAGE_UPDATE = 'Error updating page.';
export const ERROR_PAGE_REMOVE = 'Error removing page.';
export const ERROR_REMOVE = 'Error removing.';
export const ERROR_SLACK_CREATE_ACCOUNT_ALERT = 'Error creating account alert';
export const ERROR_SLACK_INVALID_OAUTH_ACCESS_RESPONSE = 'Authentication failed.';
export const ERROR_SLACK_NATIVE = 'Slack responded with an error.';
export const ERROR_UNAUTHENTICATED = 'You are unauthenticated, please login.';
export const ERROR_UNHANDLED_EXCEPTION = 'Unhandled error.';
export const ERROR_UPDATE = 'Error updating.';
export const ERROR_USER_ACCOUNT_SUSPENDED = 'Your account is pending attention by us. Please contact us if you need more info.';
export const ERROR_USER_CREATE_PASSWORD_RESET_TOKEN = 'Error creating reset token.';
export const ERROR_USER_CREATE_PASSWORD_RESET_TOKEN_NO_USER = 'No users found with that email.';
export const ERROR_USER_EMAIL_CONFIRMATION_SENT = 'Error sending confirmation email.';
export const ERROR_USER_LOGIN = 'Error logging in.';
export const ERROR_USER_REGISTER = 'Error registering.';
export const ERROR_USER_REGISTER_ACCOUNT_CREATION = 'Error creating account after registering.';
export const ERROR_USER_RESET_PASSWORD = 'Error resetting password.';
export const ERROR_USER_RESET_PASSWORD_INVALID_PASSWORD = 'Password should be at least 8 characters.';
export const ERROR_USER_RESET_PASSWORD_NO_USER_TOKEN = 'No user exists with that email and token.';
export const ERROR_USER_RESET_PASSWORD_TOKEN_EXPIRED = 'Password reset token has expired.';
export const INVALID_EMAIL = 'Invalid email.';
export const INVALID_URL = 'Invalid URL.';
export const HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_DETAIL = 'When a page responds with an HTTP error status code';
export const HEALTH_UNHEALTHY_CONDITION_ERROR_STATUS_LABEL = 'HTTP error status code';
export const HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_DETAIL = 'When a page responds with an HTTP success status code';
export const HEALTH_UNHEALTHY_CONDITION_SUCCESS_STATUS_LABEL = 'HTTP healthy status code';
export const PRODUCT_0_DESCRIPTION = 'A free account for a single user.';
export const PRODUCT_0_NAME = 'Basic';
export const PRODUCT_1_DESCRIPTION = 'Standard account for a small group.';
export const PRODUCT_1_NAME = 'Standard Monitoring';
export const PRODUCT_1_BULLET_1 = 'Runs every hour.';
export const PRODUCT_1_BULLET_2 = '5 page limit.';
export const PRODUCT_1_BULLET_3 = '3 user limit.';
export const PRODUCT_1_BULLET_4 = 'Online reporting.';
export const PRODUCT_1_BULLET_5 = 'Email notifications.';
export const PRODUCT_2_DESCRIPTION = 'Advanced account for a larger group and number of pages.';
export const PRODUCT_2_NAME = 'Advanced Monitoring';
export const PRODUCT_2_BULLET_1 = 'Runs every half hour.';
export const PRODUCT_2_BULLET_2 = '30 page limit.';
export const PRODUCT_2_BULLET_3 = '10 user limit.';
export const PRODUCT_2_BULLET_4 = 'Online reporting.';
export const PRODUCT_2_BULLET_5 = 'Email notifications.';
export const PRODUCT_2_BULLET_6 = 'Slack and PagerDuty alerting.';
export const PRODUCT_3_DESCRIPTION = 'Enterprise account for a large group, number of pages and higher frequency of checks.';
export const PRODUCT_3_NAME = 'Enterprise Monitoring';
export const PRODUCT_3_BULLET_1 = 'Runs every fifteen minutes.';
export const PRODUCT_3_BULLET_2 = '100 page limit.';
export const PRODUCT_3_BULLET_3 = '25 user limit.';
export const PRODUCT_3_BULLET_4 = 'Online reporting.';
export const PRODUCT_3_BULLET_5 = 'Email notifications.';
export const PRODUCT_3_BULLET_6 = 'Slack and PagerDuty alerting.';
export const PRODUCT_ALERT_EMAIL_LABEL = 'Email';
export const PRODUCT_ALERT_PAGER_DUTY_LABEL = 'PagerDuty';
export const PRODUCT_ALERT_SLACK_LABEL = 'Slack';
export const PRODUCT_REGION_US_EAST_LABEL = 'US East (N. Virginia)';
export const PRODUCT_REGION_US_WEST_LABEL = 'US West (Oregon)';
export const ROLE_SUPER_DESCRIPTION = 'Full access for all roles.';
export const ROLE_SUPER_NAME = 'Super';
export const ROLE_STANDARD_DESCRIPTION = 'Standard user access.';
export const ROLE_STANDARD_NAME = 'Standard';
export const ROLE_ACCOUNTING_DESCRIPTION = 'Manages payments.';
export const ROLE_ACCOUNTING_NAME = 'Accounting';
export const ROLE_ADMIN_DESCRIPTION = 'Manages users and roles and pages.';
export const ROLE_ADMIN_NAME = 'Admin';
export const SUCCESS_ACCOUNT_CREATE = 'Account created!';
export const SUCCESS_ACCOUNT_REMOVE_USER = 'Account user removed!';
export const SUCCESS_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE = 'Payment method updated!';
export const SUCCESS_ACCOUNT_SUBSCRIPTION_PAYMENT_UPDATE_WHILE_PAST_DUE = 'Payment method updated! Your account has been re-enabled.';
export const SUCCESS_ACCOUNT_UPGRADE = 'Upgrade success!';
export const SUCCESS_ACCOUNT_UPDATE_USER = 'Account user updated!';
export const SUCCESS_ALERT_CREATE = 'Alert created!';
export const SUCCESS_ALERT_EMAIL_CONFIRMATION = 'Confirmed successfully!';
export const SUCCESS_ALERT_EMAIL_CONFIRMATION_RESEND = 'Confirmation email resent successfully!';
export const SUCCESS_ALERT_UPDATE = 'Alert updated!';
export const SUCCESS_ALERT_REMOVE = 'Alert removed!';
export const SUCCESS_GENERIC = 'Success!';
export const SUCCESS_INVITATION_CREATE = 'Invitation created!';
export const SUCCESS_PAGE_CREATE = 'Page created!';
export const SUCCESS_PAGE_UPDATE = 'Page updated!';
export const SUCCESS_PAGE_REMOVE = 'Page removed!';
export const SUCCESS_REMOVE = 'Removed!';
export const SUCCESS_UPDATE = 'Updated!';
export const SUCCESS_USER_CREATE_PASSWORD_RESET_TOKEN = 'You will receive an email with reset instructions shortly!';
export const SUCCESS_USER_EMAIL_CONFIRMATION_SENT = 'Confirmation code sent!';
export const SUCCESS_USER_LOGIN = 'Sucess!';
export const SUCCESS_USER_LOGOUT = 'Logged out!';
export const VALIDATON_ERROR_REQUIRED_ACCOUNT_ID = 'Account id is required.';
export const VALIDATON_ERROR_REQUIRED_AUDITS = 'Audits is required.';
export const VALIDATON_ERROR_REQUIRED_EMAIL = 'Email is required.';
export const VALIDATON_ERROR_REQUIRED_FETCH_TIME = 'Fetch time is required.';
export const VALIDATON_ERROR_REQUIRED_MESSAGE = 'Message is required.';
export const VALIDATON_ERROR_REQUIRED_NAME = 'Name is required.';
export const VALIDATON_ERROR_REQUIRED_LIGHTHOUSE_VERSION = 'Lighthouse version is required.';
export const VALIDATON_ERROR_REQUIRED_OWNER_ID = 'Owner id is required.';
export const VALIDATON_ERROR_REQUIRED_PASSWORD = 'Password is required.';
export const VALIDATON_ERROR_REQUIRED_PAGE_ID = 'Page id is required.';
export const VALIDATON_ERROR_REQUIRED_PRODUCT_ID = 'Product id is required.';
export const VALIDATON_ERROR_REQUIRED_ROLE_ID = 'Role id is required.';
export const VALIDATON_ERROR_REQUIRED_URL = 'URL is required.';
export const VALIDATON_ERROR_REQUIRED_USER_AGENT = 'User agent is required.';
export const VALIDATON_ERROR_REQUIRED_SUBSCRIPTION_ID = 'Subscription id is required.';
