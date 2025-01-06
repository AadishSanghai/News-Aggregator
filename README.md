# News Aggregator

Welcome to the **News Aggregator** project! This application allows users to search for news articles, bookmark favorites, manage preferences, and toggle between dark and light modes for an enhanced user experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [API Integration](#api-integration)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

1. **User Authentication**: Register and log in to personalize your experience.
2. **Dark/Light Mode**: Toggle between dark and light themes for better readability.
3. **News Search**: Search for news articles using keywords.
4. **User Preferences**: Select preferred news categories to tailor content.
5. **Bookmarks**: Save and manage favorite articles for easy access later.

## Demo

![News Aggregator Demo](demo-screenshot.png)

*(Include screenshots or GIFs demonstrating the functionality of the application.)*

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/news-aggregator.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd news-aggregator
   ```

3. **Obtain an API Key**

   - Visit [NewsDataHub](https://newsdatahub.com/) or the news API provider of your choice.
   - Sign up and obtain an API key.

4. **Configure the API Key**

   - Open `script.js`.
   - Replace the placeholder `YOUR_API_KEY_HERE` with your actual API key:

     ```javascript
     const API_KEY = 'YOUR_API_KEY_HERE';
     ```

   **Security Note**: For security reasons, avoid hardcoding API keys in your scripts when deploying or sharing your code publicly. Consider using environment variables or a separate configuration file that is excluded from version control.

## Usage

1. **Open `index.html` in Your Browser**

   - You can simply double-click the `index.html` file, or
   - Serve the file using a local web server (recommended for best practices):

     ```bash
     # Using Python 3.x
     python -m http.server 8000
     ```

     Then navigate to `http://localhost:8000` in your browser.

2. **Register a New Account**

   - Fill in the registration form with a username and password.
   - Click **Register**.
   - A prompt will confirm successful registration.

3. **Log In**

   - After registering, use your credentials to log in.
   - Upon successful login, you will be prompted to set your news category preferences.

4. **Set Preferences**

   - Select your preferred news categories (e.g., Technology, Sports).
   - Click **Save Preferences**.
   - Preferences are saved for future sessions.

5. **Search for News**

   - Enter a keyword or phrase in the search bar.
   - Click **Search**.
   - News articles related to your query will be displayed.

6. **Bookmark Articles**

   - Click the **Bookmark** button on any news article to save it.
   - Access your bookmarks by clicking the **Bookmarks** section.

7. **Toggle Dark/Light Mode**

   - Use the **Switch to Dark Mode** or **Switch to Light Mode** button to toggle themes.
   - The preference is saved and applied on future visits.

8. **View Site Features**

   - Click the **Features of This Site** button to view a summary of functionalities.

## Project Structure

```
news-aggregator/
├── index.html
├── styles.css
├── script.js
└── README.md
```

- `index.html`: The main HTML file containing the structure of the web application.
- `styles.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the application logic.
- `README.md`: Documentation for the project.

## Dependencies

- **JavaScript Fetch API**: For making HTTP requests to the news API.
- **LocalStorage**: To store user data, preferences, and bookmarks on the client side.

*(No external libraries or frameworks are used in this project.)*

## API Integration

This application integrates with a news API to fetch news articles based on user queries.

- **API Provider**: [NewsDataHub](https://newsdatahub.com/) (or your chosen news API provider).
- **Endpoint Used**: `/v1/news`
- **Authentication**: API key required in request headers.

**Example Fetch Request:**

```javascript
const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`, {
  method: 'GET',
  headers: {
    'X-Api-Key': API_KEY,
  },
});
```

### Handling API Keys

To ensure the security of your API key:

- **Do Not Commit API Keys to Version Control**: Ensure `script.js` does not contain your API key when pushing to public repositories.
- **Use Environment Variables**: Consider setting up a backend to securely manage API keys if deploying the application.

## Customization

Feel free to customize the project to suit your needs:

- **UI Enhancements**: Modify `styles.css` to change the look and feel.
- **Additional Features**:
  - Implement pagination for search results.
  - Add more categories and preferences.
  - Integrate with social media for sharing articles.
- **Backend Integration**:
  - Set up a server to handle user authentication and data storage securely.
  - Implement OAuth for secure authentication.

## Contributing

Contributions are welcome! If you'd like to contribute:

1. **Fork the Repository**
2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add Your Feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request**

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Author**: Aadish Sanghai
- **Email**: [sanghaiaadish@gmail.com](mailto:sanghaiaadish@gmail.com)

Feel free to reach out with any questions or feedback!

---

*Note: Replace `YOUR_API_KEY_HERE` with your actual API key in `script.js`.*
