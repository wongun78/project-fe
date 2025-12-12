# 🎯 Quiz Management System - Frontend Foundation

A modern, clean HTML/CSS/JavaScript implementation of a quiz management platform. This project serves as the foundational frontend for a comprehensive quiz system, featuring responsive design, intuitive user interfaces, and a complete admin dashboard.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎓 User-Facing Pages

- **Home Page** (`home.html`) - Engaging landing page with hero section and featured quizzes
- **Quiz Listing** (`quizzes.html`) - Browse available quizzes with beautiful card layouts
- **About Page** (`about.html`) - Team information and platform introduction
- **Contact Page** (`contact.html`) - Contact form for user inquiries
- **Authentication**
  - `login.html` - User login interface
  - `register.html` - New user registration
- **Error Pages**
  - `404.html` - Page not found
  - `403.html` - Access forbidden

### 👨‍💼 Admin Dashboard Pages

- **User Management** (`user-management.html`) - Manage user accounts with full CRUD operations
- **Role Management** (`role-management.html`) - Define and manage user roles and permissions
- **Quiz Management** (`quiz-management.html`) - Create, edit, and manage quizzes
- **Question Management** (`question-management.html`) - Manage questions and answer options

## 🛠️ Tech Stack

### Core Technologies

- **HTML5** - Semantic markup with modern standards
- **CSS3** - Custom styling with CSS variables and modern layouts
- **Vanilla JavaScript** - Clean, dependency-free JavaScript

### CSS Architecture

- **reset.css** - CSS reset for cross-browser consistency
- **variables.css** - CSS custom properties for theming
- **main.css** - Core styles and utility classes
- **Page-specific styles**:
  - `home.css` - Home page styling
  - `about.css` - About page styling
  - `contact.css` - Contact page styling
  - `quizzes.css` - Quiz listing page styling
  - `auth.css` - Authentication pages styling
  - `admin.css` - Admin dashboard styling
  - `error.css` - Error pages styling

### Assets

- **Icons** - Logo and UI icons
- **Images**
  - Hero images
  - Quiz cover images
  - Team member photos

## 📁 Project Structure

```
assignment-fee/
├── fee/
│   ├── home.html              # Landing page
│   ├── about.html             # About page
│   ├── contact.html           # Contact page
│   ├── quizzes.html           # Quiz listing
│   ├── login.html             # Login page
│   ├── register.html          # Registration page
│   ├── 404.html               # Page not found
│   ├── 403.html               # Access forbidden
│   ├── user-management.html   # User management
│   ├── role-management.html   # Role management
│   ├── quiz-management.html   # Quiz management
│   ├── question-management.html # Question management
│   └── assets/
│       ├── css/
│       │   ├── reset.css      # CSS reset
│       │   ├── variables.css  # CSS variables
│       │   ├── main.css       # Core styles
│       │   ├── home.css       # Home page styles
│       │   ├── about.css      # About page styles
│       │   ├── contact.css    # Contact page styles
│       │   ├── quizzes.css    # Quizzes page styles
│       │   ├── auth.css       # Auth pages styles
│       │   ├── admin.css      # Admin pages styles
│       │   └── error.css      # Error pages styles
│       ├── js/
│       │   └── main.js        # Main JavaScript
│       ├── icons/
│       │   └── logo.png       # Site logo
│       └── images/
│           ├── hero.png       # Hero section image
│           ├── quizzes/       # Quiz cover images
│           │   ├── quiz-1.png
│           │   ├── quiz-2.png
│           │   └── quiz-3.png
│           └── teams/         # Team member photos
│               ├── team-1.png
│               ├── team-2.png
│               └── team-3.png
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd assignment-fee
```

2. **Open in browser**

Simply open any HTML file in your browser:

```bash
# On macOS
open fee/home.html

# On Linux
xdg-open fee/home.html

# On Windows
start fee/home.html
```

### Development Server (Optional)

For a better development experience, use a local server:

**Using Python:**

```bash
cd fee
python -m http.server 8000
# Visit http://localhost:8000
```

**Using Node.js (http-server):**

```bash
npx http-server fee -p 8000
# Visit http://localhost:8000
```

**Using VS Code Live Server:**

1. Install "Live Server" extension
2. Right-click on any HTML file
3. Select "Open with Live Server"

## 🎨 Design System

### Color Palette

Defined in `assets/css/variables.css`:

```css
:root {
  /* Primary Colors */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #60a5fa;

  /* Neutral Colors */
  --color-background: #ffffff;
  --color-surface: #f9fafb;
  --color-border: #e5e7eb;

  /* Text Colors */
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --text-muted: #9ca3af;

  /* Status Colors */
  --color-success: #10b981;
  --color-danger: #ef4444;
  --color-warning: #f59e0b;
  --color-info: #3b82f6;
}
```

### Typography

- **Font Family**: System font stack for optimal performance
- **Font Sizes**: Responsive scale from 0.875rem to 2.5rem
- **Font Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing

- Base unit: 4px (0.25rem)
- Scale: 0, 0.25rem, 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

### Layout

- **Container**: Max-width: 1200px with auto margins
- **Grid System**: CSS Grid for responsive layouts
- **Flexbox**: Used extensively for component layouts

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px; /* Small devices */
--breakpoint-md: 768px; /* Medium devices */
--breakpoint-lg: 1024px; /* Large devices */
--breakpoint-xl: 1280px; /* Extra large devices */
```

### Mobile Optimization

- Responsive navigation with mobile menu
- Touch-friendly button sizes (min 44px × 44px)
- Optimized images for different screen sizes
- Flexible grid layouts that adapt to screen width

## 🎯 Page Breakdown

### Home Page (`home.html`)

**Features:**

- Hero section with call-to-action
- Featured quizzes showcase
- Clean, modern design

**Key CSS:** `main.css`, `home.css`

### About Page (`about.html`)

**Features:**

- Team member cards with photos
- Mission statement section
- Responsive grid layout

**Key CSS:** `main.css`, `about.css`

### Contact Page (`contact.html`)

**Features:**

- Contact form with validation
- Contact information display
- Map integration placeholder

**Key CSS:** `main.css`, `contact.css`

### Quizzes Page (`quizzes.html`)

**Features:**

- Quiz cards grid layout
- Filter and search functionality
- Pagination controls

**Key CSS:** `main.css`, `quizzes.css`

### Authentication Pages

**Login (`login.html`):**

- Username/password form
- "Forgot password" link
- Link to registration

**Register (`register.html`):**

- User registration form
- Password confirmation
- Terms acceptance

**Key CSS:** `auth.css`

### Error Pages

**404 Page (`404.html`):**

- "404 - Page Not Found" message
- Navigation back to home
- Helpful links

**403 Page (`403.html`):**

- "403 - Forbidden" message
- Login suggestion
- Contact administrator link

**Key CSS:** `error.css`

### Admin Pages

All admin pages share a consistent layout with:

- Sidebar navigation
- Data tables with sorting
- Search and filter controls
- Pagination
- Create/Edit forms
- Action buttons (Edit, Delete, Toggle Status)

**User Management (`user-management.html`):**

- User CRUD operations
- Role assignment
- Status management

**Role Management (`role-management.html`):**

- Role CRUD operations
- Permission management
- User count display

**Quiz Management (`quiz-management.html`):**

- Quiz CRUD operations
- Question management
- Image upload interface

**Question Management (`question-management.html`):**

- Question CRUD operations
- Answer options management
- Question type selection

**Key CSS:** `admin.css`

## 💡 Key Features Implementation

### Responsive Navigation

```html
<nav class="navbar">
  <div class="nav-container">
    <a href="home.html" class="nav-logo">Quiz App</a>
    <div class="nav-menu">
      <a href="home.html">Home</a>
      <a href="quizzes.html">Quizzes</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="nav-actions">
      <a href="login.html" class="btn btn-outline">Login</a>
      <a href="register.html" class="btn btn-primary">Register</a>
    </div>
  </div>
</nav>
```

### Card Components

Reusable card pattern used throughout:

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-content">
    <!-- Card content -->
  </div>
  <div class="card-footer">
    <!-- Card actions -->
  </div>
</div>
```

### Data Tables (Admin)

Consistent table structure with:

- Sortable headers
- Row hover effects
- Action buttons column
- Responsive overflow

### Form Components

Standardized form inputs:

- Labels with clear hierarchy
- Input validation states
- Consistent spacing
- Button groups (Cancel/Submit)

### Status Badges

Visual status indicators:

- Green badge for "Active"
- Red badge for "Inactive"
- Rounded corners with padding

## 🔧 JavaScript Functionality

### Main JavaScript (`assets/js/main.js`)

**Features:**

- Mobile menu toggle
- Form validation helpers
- Dynamic table sorting
- Search and filter functionality
- Modal dialogs
- Toast notifications

**Key Functions:**

```javascript
// Mobile menu toggle
function toggleMobileMenu() { ... }

// Form validation
function validateForm(formId) { ... }

// Table sorting
function sortTable(columnIndex) { ... }

// Search functionality
function searchTable(query) { ... }
```

## 🎨 CSS Architecture

### Modular CSS Structure

1. **reset.css** - Normalizes browser defaults
2. **variables.css** - Theme configuration
3. **main.css** - Core styles and utilities
4. **Page-specific CSS** - Isolated styles per page

### CSS Naming Convention

- **BEM-inspired** naming for components
- **Utility classes** for common patterns
- **State classes** prefixed with `is-` or `has-`

Examples:

```css
.card {
}
.card-header {
}
.card-title {
}
.btn-primary {
}
.is-active {
}
.has-error {
}
```

### Utility Classes

Commonly used utilities:

```css
.container {
}
.flex {
}
.grid {
}
.text-center {
}
.mt-4 {
}
.p-6 {
}
.rounded {
}
.shadow {
}
```

## 📊 Admin Dashboard Features

### User Management

- List all users with pagination
- Search by username/email
- Filter by role and status
- Create new users
- Edit user details
- Delete users
- Toggle active/inactive status

### Role Management

- List all roles
- Create new roles
- Edit role details
- Delete roles (with checks)
- View user count per role
- Toggle role status

### Quiz Management

- List all quizzes
- Create new quizzes with images
- Edit quiz details
- Delete quizzes
- View associated questions
- Toggle quiz visibility

### Question Management

- List all questions
- Create questions with multiple answers
- Edit question details
- Delete questions
- Mark correct answers
- Associate with quizzes

## 🚀 Future Enhancements

### Phase 1 (Planned)

- [ ] Add JavaScript validation for all forms
- [ ] Implement client-side routing
- [ ] Add loading states and animations
- [ ] Implement toast notifications
- [ ] Add modal dialogs for confirmations

### Phase 2 (Future)

- [ ] Integrate with backend API
- [ ] Add real authentication
- [ ] Implement quiz taking functionality
- [ ] Add user profiles
- [ ] Implement quiz results tracking

### Phase 3 (Advanced)

- [ ] Real-time quiz features
- [ ] Quiz leaderboards
- [ ] Social sharing
- [ ] Advanced analytics dashboard
- [ ] Mobile app version

## 📝 Code Quality

### HTML Best Practices

- Semantic HTML5 elements
- Proper heading hierarchy
- Accessible forms with labels
- Alt text for images
- ARIA labels where needed

### CSS Best Practices

- Mobile-first responsive design
- CSS custom properties for theming
- Modular, reusable components
- Consistent naming conventions
- Efficient selectors

### JavaScript Best Practices

- Clean, readable code
- Consistent naming (camelCase)
- Commented functions
- Error handling
- Event delegation where appropriate

## 🔍 Browser Support

This project supports:

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Assets Credits

### Images

- Hero images: Custom design
- Quiz covers: Placeholder images
- Team photos: Placeholder avatars

### Icons

- Logo: Custom design
- UI icons: Custom SVG icons

## 🐛 Known Issues

None currently. Please report issues as they arise.

## 📄 Version History

### v1.0.0 (Current)

- ✅ Complete HTML structure for all pages
- ✅ Responsive CSS styling
- ✅ Basic JavaScript functionality
- ✅ Admin dashboard pages
- ✅ Authentication pages
- ✅ Error pages (404, 403)
- ✅ User-facing pages (Home, About, Contact, Quizzes)

## 👥 Contributing

This is an educational project. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Message Convention

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 📄 License

This project is part of an educational assignment.

## 🙏 Acknowledgments

- Inspired by modern quiz platforms
- Design patterns from contemporary web applications
- CSS architecture influenced by BEM and utility-first approaches

## 📧 Contact

For questions or feedback about this project, please use the contact form on the website or reach out through the course platform.

---

**Built with ❤️ as part of Web Development Course**

_Last Updated: December 12, 2025_
