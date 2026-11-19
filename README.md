# Little Lemon — Table Booking

A responsive React application for the Meta Front-End Developer Capstone assignment, **Booking a table on the Little Lemon website**.

The project includes a restaurant landing page and a reservation flow with date-based availability, client-side validation, accessible form controls, a confirmation screen and unit tests.

## Features

- Responsive restaurant homepage with hero, weekly specials, guest testimonials and restaurant story.
- Table reservation page with date, time, number of guests and optional occasion.
- Available reservation times update when the selected date changes.
- Shared booking-time state managed in the parent component with `useReducer`.
- Client-side validation for date, time and guest count.
- Accessible labels, field descriptions, validation feedback and keyboard-operable controls.
- Confirmation screen with a summary of the submitted booking.
- Unit tests for the booking reducer, validation helpers, form and main navigation.

## Technology

- React 18
- React Router
- React Hooks (`useState`, `useReducer`)
- CSS
- Jest and React Testing Library (included with Create React App)

## Requirements

- Node.js 18 or newer
- npm

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Guille0197/little-lemon-booking.git
   cd little-lemon-booking
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Run tests

Run the test suite in watch mode:

```bash
npm test
```

Run tests once (CI mode):

```bash
npm run test:ci
```

Create a production build:

```bash
npm run build
```

## Booking flow and API

The application follows the Meta Capstone mock API interface:

- `fetchAPI(date)` returns an array of available time strings for the selected date.
- `submitAPI(formData)` accepts the booking object and returns a boolean.

The local implementation in `src/api.js` is based on the official course mock API:
[Coursera Capstone API](https://github.com/courseraap/capstone/blob/main/api.js).

**Important:** this is a front-end learning project. The official mock `submitAPI` returns `true`; it does not persist reservations or contact a real restaurant. A production booking system would require a backend service, database and server-side validation.

## Project structure

```text
public/
  index.html
  favicon.svg
src/
  api.js
  App.js
  App.css
  index.js
  setupTests.js
  components/
    BookingForm.js
    BookingForm.test.js
    BookingPage.js
    Bookings.js
    ConfirmedBooking.js
    Footer.js
    Header.js
    HomePage.js
  utils/
    bookingReducer.js
    bookingReducer.test.js
    bookingValidation.js
    bookingValidation.test.js
  App.test.js
package.json
README.md
```

## Notes before submission

- Compare the finished interface with the exact Figma references and any additional instructions provided inside Coursera.
- Confirm that the field constraints match the course materials used in your cohort.
- Run `npm run test:ci` and `npm run build` before submitting.
- Do not commit credentials, private tokens or local environment files.
