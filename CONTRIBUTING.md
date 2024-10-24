# Contributing to Treenighedskirkens Drengekor

Thank you for considering contributing to Treenighedskirkens Drengekor! We welcome contributions from the community and are grateful for your support.

## Guidelines for Code Style and Formatting

To maintain a consistent codebase, please follow these guidelines for code style and formatting:

- Use 2 spaces for indentation.
- Use single quotes for strings.
- Use semicolons at the end of statements.
- Use camelCase for variable and function names.
- Use PascalCase for component names.
- Write clear and concise comments for complex code sections.
- Ensure your code passes all linting and testing checks before submitting a pull request.

## Setting Up the Development Environment

To set up the development environment, follow these steps:

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

## Running Tests and Linting

To ensure the quality of the codebase, please run tests and linting before submitting a pull request. Follow these steps:

1. Run the tests:
   ```bash
   pnpm run test
   ```

2. Run the tests in watch mode:
   ```bash
   pnpm run test:watch
   ```

3. Run the tests in watch all mode:
   ```bash
   pnpm run test:watchAll
   ```

4. Run the linter:
   ```bash
   pnpm run lint
   ```

If you encounter any issues or have any questions, please open an issue on GitHub or contact the project maintainers.

Thank you for your contribution!
