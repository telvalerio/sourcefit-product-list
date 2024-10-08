# Product Listing App

A simple product listing page using Laravel for the backend and React.js with TypeScript for
the frontend.

## Features

- Displays a list of products with their thumbnails, titles, descriptions, and prices.
- Implement a search input on the product listing page that allows users to search for products by typing keywords that does not cause the page to refresh (dynamic search).
- Fetches product data from a remote API (https://dummyjson.com/docs/products).

## Technologies Used

- Frontend: React, Material-UI
- Backend: Laravel
- API: https://dummyjson.com/docs/products

## Getting Started

1. Clone the repository:
-  git clone https://github.com/telvalerio/sourcefit-product-list.git


2. Install the dependencies:
- For the Laravel backend:
  ```
  cd product-list-api
  composer install
  ```
- For the React frontend:
  ```
  cd product-list-frontend
  npm install
  ```

3. Start the development servers:
- For the Laravel backend:
  ```
  php artisan serve
  ```
- For the React frontend:
  ```
  npm start
  ```

4. Open the application in your browser:
- The Laravel backend will be running at `http://localhost:8000`
- The React frontend will be running at `http://localhost:3000`

## Contributing

If you would like to contribute to this project, please feel free to create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
