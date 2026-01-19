# Authentication Flow Documentation

This document describes the complete authentication flow across all supported login methods. The flow is designed to enforce MFA, device trust via MPIN, and short-lived session tokens.

---

## 1. Standard Login (Email + Password)

### Step 1: Credentials Verification
- User logs in using **email + password**
- System validates credentials

### Step 2: MFA Check
- If **MFA is enabled** for the user:
  - Issue a **temporary token (valid for 24 hours)**
  - This token **cannot access any protected APIs**
  - User must complete MFA verification

#### Supported MFA Types
- **Email OTP**
- **Authenticator App** (e.g. Google Authenticator)

User must verify using the enabled MFA method.

---

### Step 3: MPIN Flow
After successful MFA verification:

#### First-time Login (Any Platform)
- User is prompted to **create a 6-digit MPIN**

#### Returning User
- User is prompted to **verify existing MPIN**

---

### Step 4: Session Token Issuance
- After MPIN is successfully verified:
  - Issue a **full access token valid for 48 hours**

#### Daily App Open Behavior
- Each time the user opens the app:
  - User must **verify MPIN**
  - A new token is issued with **47 hours validity**

---

## 2. Forgot MPIN Flow

### Step 1: Reset Request
- User selects **Forgot MPIN**

### Step 2: Email OTP Verification
- OTP is sent to the user’s registered email
- User verifies OTP

### Step 3: Re-authentication
- User is redirected to **Login**
- After login, user is required to:
  - **Create a new 6-digit MPIN**

---

## 3. Forgot Password Flow

### Step 1: Password Reset Request
- User selects **Forgot Password**
- OTP is sent to registered email

### Step 2: OTP Verification
- User verifies OTP

### Step 3: Set New Password
- User sets a new password

### Step 4: Login Again
- User is redirected to login
- Post-login flow continues as:
  - MFA (if enabled)
  - MPIN create / verify
  - Token issuance

---

## 4. Forgot 2FA (MFA Reset)

- User requests **2FA recovery**
- OTP is sent to registered email
- After OTP verification:
  - MFA is considered verified / reset
  - User can continue login flow

---

## 5. Login with SMS OTP (Mobile Only)

### Step 1: Mobile OTP Login
- User enters mobile number
- OTP is sent via SMS
- User verifies OTP

### Step 2: MFA Check (If Enabled)
- If MFA is enabled:
  - User must complete MFA verification (Email / Authenticator)

### Step 3: MPIN Flow
- Same MPIN logic applies:
  - First login → Create MPIN
  - Existing user → Verify MPIN

### Step 4: Token Issuance
- After MPIN verification:
  - Issue **48-hour full access token**
  - Daily MPIN verification reissues **47-hour token**

---

## 6. Token Types Summary

| Token Type | Validity | Permissions |
|-----------|---------|-------------|
| Pre-MFA Token | 24 hours | No protected APIs |
| Full Access Token | 48 hours | All protected APIs |
| Daily Reissued Token | 47 hours | All protected APIs |

---

## 7. Security Notes

- MFA is mandatory when enabled and blocks API access until verified
- MPIN acts as a second local security layer
- Tokens are short-lived and frequently rotated
- All recovery flows are email-OTP verified

---