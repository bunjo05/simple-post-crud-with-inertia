Laravel 11 with Inertia.js and React.js Application

This project is a demonstration of integrating Laravel 11 with Inertia.js and React.js to build a modern single-page application (SPA). The application showcases the seamless combination of Laravel's backend capabilities with React's frontend prowess, facilitated by Inertia.js.

Features

Laravel 11: Utilized as the backend framework to handle server-side logic and routing.

Inertia.js: Bridges the gap between Laravel and React, allowing for SPA-like behavior without the need for a separate API.

React.js: Employed for building dynamic and responsive user interfaces.

CRUD Operations: Implemented Create, Read, Update, and Delete functionalities to manage resources.

Requirements

PHP: Version 8.0 or higher

Composer: Dependency management for PHP

Node.js and npm: For managing JavaScript dependencies

Database: MySQL or any other database supported by Laravel

Installation

Clone the Repository:

git clone [(https://github.com/bunjo05/simple-post-crud-with-inertia)]
cd your-repo-name

Install PHP Dependencies:

[composer install]

Install JavaScript Dependencies:

[npm install]

Environment Configuration:

Copy the example environment file and modify the necessary settings:

[cp .env.example .env]

Generate a new application key:

[php artisan key:generate]

Configure your database settings in the .env file.

Database Migration:

Run the migrations to set up the database schema:

[php artisan migrate]

Build Frontend Assets:

Compile the frontend assets using Laravel Mix:

##npm run dev##

Start the Development Server:

[php artisan serve]

Access the application at http://localhost:8000.

Usage

After completing the installation steps, you can interact with the application to:

Perform CRUD operations on the available resources.

Experience the seamless navigation provided by Inertia.js and React.js.

Contributing

Contributions are welcome! Please fork the repository and create a pull request with your proposed changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

License

This project is open-source and available under the MIT License.

Acknowledgements

Special thanks to the creator of the Laravel 11 with Inertia.Js and React.Js crash course for the inspiration and guidance in building this application.
