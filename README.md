# Treenighedskirkens drengekor

## Project Overview and Features

Treenighedskirkens drengekor is a web application designed to manage and display information about the choir. The application includes features such as event management, user authentication, and content management.

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/treenighedskirkens-drengekor.git
   cd treenighedskirkens-drengekor
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file and add the necessary environment variables:
   ```bash
   NEXT_PUBLIC_RAILWAY_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   pnpm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage Examples

Here are some examples of how to use the application:

- To view the list of events, navigate to the "Events" section.
- To add a new event, click on the "Add Event" button and fill out the form.
- To edit an existing event, click on the event and then click the "Edit" button.
- To delete an event, click on the event and then click the "Delete" button.

## Contribution Guidelines

We welcome contributions to the project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b my-feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your changes to your fork:
   ```bash
   git push origin my-feature-branch
   ```
5. Open a pull request on GitHub.

## Troubleshooting Common Issues

Here are some common issues you might encounter and how to resolve them:

- **Issue:** The development server is not starting.
  - **Solution:** Make sure you have installed all dependencies and have the correct environment variables set in your `.env` file.

- **Issue:** The application is not connecting to the database.
  - **Solution:** Check your database connection settings and ensure the database server is running.

- **Issue:** Styles are not loading correctly.
  - **Solution:** Make sure you have run the build process and that your CSS files are being correctly imported.

If you encounter any other issues, please open an issue on GitHub or contact the project maintainers.
