# UI Design & Testing Guideline

## 1. Project Overview
This project is a React implementation of the **Ohouse (오늘의집)** "Moving Consultation Request History" page. It is designed as a **Seed Design** to facilitate the testing of various UI flows, layouts, and states.

## 2. Design System & Tokens
Strict adherence to the following tokens is required to maintain brand identity.

### 2.1 Colors
- **Primary Brand**: `#35C5F0` (Ohouse Blue), `#09609C` (Dark Blue Badge)
- **Text**:
  - Primary: `#2F3438` (Titles, Main Text)
  - Secondary: `#828C94` (Labels)
  - Tertiary: `#C2C8CC` (Timestamps, Placeholders)
- **Status**:
  - Error/Notification: `#FF7777` (Badges)
  - Background: `#F7F9FA` (Blocks, Dividers)
  - Border: `#EAEDEF`

### 2.2 Typography
- **Font Family**: `Pretendard`, `SF Pro` (for English/Numbers if specified)
- **Scale**:
  - Header: 18px Bold
  - Title: 20px Bold
  - Body: 16px Regular/Bold
  - Caption: 14px, 12px

## 3. Component Architecture
The application is composed of the following atomic units located in `/src/app/shared/mobile/`:

| Component | Role | Key Props (Proposed) |
|-----------|------|----------------------|
| `MobileHeader` | Navigation & Page Title | `title`, `showBackBtn` |
| `MobileStatusBar` | Interaction State Indicator | `status` ('matching', 'complete', 'error') |
| `MatchedCompanyCard` | Vendor Information Card | `companyData`, `hasUnreadChat` |
| `ApplicationDetails` | Read-only Data Display | `applicationData` |

## 4. Testing Playground Strategy
To efficiently test different user flows without code changes, we will implement a **Control Panel**.

### 4.1 Functionality
The Control Panel will be a floating overlay or a side panel (on desktop view) that allows real-time manipulation of the mobile screen's state.

### 4.2 Control States
1.  **Matching State**:
    *   `Matching`: Show spinning loader in status bar.
    *   `Matched`: Show "Matching Complete" badge and vendor list.
2.  **Vendor List**:
    *   `Empty`: No vendors found.
    *   `Single`: 1 vendor card.
    *   `Multiple`: 2+ vendor cards (Scrollable).
3.  **Chat Status**:
    *   Toggle `unread` badges on/off.
    *   Toggle `message` content (short vs long).

## 5. Layout & Flow Specifications
- **Container**: Fixed width `375px` centered on screen (Desktop view) or 100% width (Mobile view).
- **Scrolling**: Header remains sticky (optional), Body scrolls.

## 6. Future Extensions
- **A/B Testing**: Ability to swap `MatchedCompanyCard` layout (e.g., List vs Grid).
- **Theme Testing**: Toggle between Default and Dark Mode (if applicable in future).
