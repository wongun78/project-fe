# Quiz App

A modern, responsive quiz application built with HTML, Tailwind CSS, and vanilla JavaScript.

## 📋 Features

- **User Authentication**: Login and registration system with authentication state management
- **Quiz Management**: Create, edit, and manage quizzes and questions
- **User Management**: Admin panel for managing users and roles
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Navigation**: Dropdown menus and mobile navigation with smooth transitions
- **Role-based Access**: Different access levels for users and administrators

## 🛠️ Technologies

- **Frontend**: HTML5, CSS3
- **Framework**: Tailwind CSS v4 (Browser CDN)
- **JavaScript**: Vanilla JS (ES6+)
- **Design Pattern**: Event delegation, CSS custom properties
- **Icons**: SVG icons
- **Responsive**: Mobile-first approach with breakpoints

## 📁 Project Structure

```
fee/
├── home.html              # Landing page
├── quizzes.html           # Quiz listing page
├── about.html             # About page
├── contact.html           # Contact page
├── login.html             # Login page
├── register.html          # Registration page
├── quiz-management.html   # Quiz management dashboard
├── question-management.html # Question management dashboard
├── user-management.html   # User management dashboard
├── role-management.html   # Role management dashboard
├── 403.html               # Forbidden error page
├── 404.html               # Not found error page
└── assets/
    ├── css/
    │   └── styles.css     # Custom styles
    ├── js/
    │   └── main.js        # Main JavaScript file
    ├── icons/
    │   └── logo.png       # App logo
    └── images/
        ├── quizzes/       # Quiz images
        └── teams/         # Team member images
```

## 🎨 Design System

### Color Palette

- **Primary**: `#38b6ff` - Brand color for CTAs and active states
- **Secondary**: `#f1f5f9` - Light background for sections
- **Foreground**: `#0f172a` - Main text color
- **Muted**: `#64748b` - Secondary text and placeholders
- **Border**: `#e2e8f0` - Borders and dividers
- **Background**: `#ffffff` - Main background

### Typography

- Font stack: System fonts (default)
- Responsive text sizing with Tailwind utilities

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd assignment-fee
```

2. Open with a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using Node.js (http-server)
npx http-server -p 8000
```

3. Open your browser and navigate to:

```
http://localhost:8000/fee/home.html
```

## 💡 Usage

### For Users

1. Visit the homepage
2. Browse available quizzes
3. Login or register to take quizzes
4. View your profile from the dropdown menu

### For Administrators

1. Login with admin credentials
2. Access Management section from navigation
3. Manage quizzes, questions, users, and roles
4. Use sidebar navigation to switch between management sections

## 🎯 Key Features

### Navigation

- **Responsive navbar**: Collapses to mobile menu on small screens
- **Active states**: Current page highlighted in navigation
- **User dropdown**: Access to profile, change password, and logout
- **Authentication control**: Shows login/register or user avatar based on auth state

### Management Dashboard

- **Quiz Management**: CRUD operations for quizzes
- **Question Management**: Create and organize quiz questions
- **User Management**: Manage user accounts and permissions
- **Role Management**: Define and assign user roles

### Authentication

- Login and registration pages
- Session management with `isAuthenticated` flag
- Protected routes for authenticated users
- Data attributes for UI control (`data-auth-ui`, `data-guest-ui`)

## 🔧 Configuration

### JavaScript Configuration

Edit `assets/js/main.js` to configure:

- `isAuthenticated`: Set to `true` or `false` for development

### Custom Styles

Add custom styles in `assets/css/styles.css`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## 📝 Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no code change)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 📄 License

This project is created for educational purposes.

## 👥 Authors

- **Kien Nguyen** - Initial work

## 🙏 Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- Design inspiration from modern web applications
- Icons and images used for educational purposes
