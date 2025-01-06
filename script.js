// script.js

const API_KEY = 'MDJfhqvuFkg5wtflpwEvAbwpabn5YnUbb86vlA3HiTc'; // Replace with your actual API key
const BASE_URL = 'https://api.newsdatahub.com/v1/news';

document.getElementById('searchButton').addEventListener('click', fetchNews);

async function fetchNews() {
    const query = document.getElementById('searchQuery').value.trim();
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    if (!query) {
        newsContainer.innerHTML = '<p class="error">Please enter a search term.</p>';
        return;
    }

    try {
        // Fetch news articles with proper headers
        const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': API_KEY, // Correct header for API key
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data); // Log response for debugging

        if (data.data && data.data.length) {
            for (const article of data.data) {
                newsContainer.innerHTML += createNewsCard(article);
            }
        } else {
            newsContainer.innerHTML = '<p>No news articles found. Try another query!</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = `<p class="error">Error fetching news: ${error.message}. Please try again later.</p>`;
    }
}

function createNewsCard(article) {
    const isBookmarked = isArticleBookmarked(article.article_link);
    return `
        <div class="news-item">
            <img src="${article.media_url || 'default-image.jpg'}" alt="News Image">
            <div>
                <h3>${article.title}</h3>
                <p>${article.description || 'No description available.'}</p>
                <a href="${article.article_link}" target="_blank">Read More</a>
                 <button onclick="toggleBookmark('${article.article_link}', '${encodeURIComponent(JSON.stringify(article))}')">${isBookmarked ? 'Remove Bookmark' : 'Bookmark'}</button>
            </div>
        </div>
    `;
}


////drk and lgt mode toggleDarkMode

const modeToggleBtn = document.getElementById('mode-toggle');

function toggleDarkMode() {
    const body = document.body;

    body.classList.toggle('dark-mode');

    // Update button text based on current mode
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Switch to Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        modeToggleBtn.textContent = 'Switch to Dark Mode';
        localStorage.setItem('mode', 'light');
    }
}

// Event listener for the mode 
modeToggleBtn.addEventListener('click', toggleDarkMode);

// Check for mode already
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');

    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        modeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        modeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});





////// login and regiteration


let userauth = document.querySelector('.userauth');
let registrationform = document.getElementById('registration-form')
registrationform.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Save user details to localStorage
    localStorage.setItem('user', JSON.stringify({ username, password, preferences: [] }));
    alert('Registration successful! You can now log in.');
    registrationform.style.display = 'none';
    loginform.style.display = 'block';

});

let loginform =document.getElementById('login-form');
loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
        alert('Login successful!');
        loginform.style.display = 'none';
        userauth.style.display = 'none'; 
        document.getElementById('preferences-section').style.display = 'block';
    } else {
        alert('Invalid credentials!');
    }
});
    let userdata = document.querySelector('.userdata');
let preferenceform = document.getElementById('preferences-form')
preferenceform.addEventListener('submit', (e) => {
    e.preventDefault();
    const preferences = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(
        (checkbox) => checkbox.value
    );

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        storedUser.preferences = preferences;
        localStorage.setItem('user', JSON.stringify(storedUser));
        alert('Preferences saved!');
        preferenceform.style.display = 'none';
        userdata.style.display = 'none';
    }
});



///bookmarks 
function renderBookmarks() {
    const bookmarksContainer = document.getElementById('bookmarks-list');
    bookmarksContainer.innerHTML = '';
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    if (bookmarks.length === 0) {
        bookmarksContainer.innerHTML = '<p>No bookmarks saved.</p>';
        return;
    }
    bookmarks.forEach(article => {
        bookmarksContainer.innerHTML += createNewsCard(article);
    });
}
function toggleBookmark(articleLink, articleString) {
    const article = JSON.parse(decodeURIComponent(articleString));
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    const index = bookmarks.findIndex(bookmark => bookmark.article_link === articleLink);
    if (index > -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push(article);
    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
    const button = document.querySelector(`.news-item button[onclick="toggleBookmark('${articleLink}', '${articleString}')"]`);
    if (button) {
        button.textContent = isArticleBookmarked(articleLink) ? 'Remove Bookmark' : 'Bookmark';
    }
}
function isArticleBookmarked(articleLink) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');
    return bookmarks.some(bookmark => bookmark.article_link === articleLink);
}

let bookmark = document.getElementById('bookmark');
bookmark.addEventListener('click', () => {
    bookmark.style.display = 'block';
    document.getElementById('bookmarks-container').style.display = 'block';
    renderBookmarks();
});

let info = document.querySelector('.info');
let feat = document.querySelector('.feat');
feat.addEventListener('click', () => {
    info.style.display = 'block';
    feat.style.display = 'none';
})