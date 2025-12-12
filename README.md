# 🎯 Quiz Management System - Tailwind CSS Edition

A modern, responsive quiz management platform built with **Tailwind CSS v4**, featuring a clean utility-first approach, comprehensive admin dashboard, and seamless user experience. This implementation showcases the power of Tailwind CSS's browser CDN for rapid development without build tools.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Key Highlights

- 🎨 **Tailwind CSS v4** - Utilizing the latest browser CDN for zero-config styling
- 📱 **Fully Responsive** - Mobile-first design that adapts to all screen sizes
- 🔐 **Authentication Flow** - Complete login/register system with state management
- 👨‍💼 **Admin Dashboard** - Comprehensive management interface for all resources
- 🎯 **Utility-First** - Leveraging Tailwind's utility classes for rapid development
- ♿ **Accessible** - ARIA labels, semantic HTML, and keyboard navigation
- 🚀 **Zero Build** - No compilation required, runs directly in the browser

## 📋 Features

### 🎓 User-Facing Features

- **Dynamic Home Page** - Hero section with featured quizzes and call-to-action
- **Quiz Catalog** - Browse and search available quizzes with beautiful card layouts
- **Team Showcase** - About page featuring team members with professional profiles
- **Contact System** - Interactive contact form with validation and feedback
- **User Authentication**
  - Secure login interface
  - User registration with validation
  - Password recovery flow
- **User Profile Management**
  - Dropdown menu with user avatar
  - Profile settings access
  - Quick logout functionality

### 👨‍💼 Admin Management Features

- **User Management** - Complete CRUD operations for user accounts with role assignment
- **Role Management** - Define custom roles with permissions and access control
- **Quiz Management** - Create, edit, and organize quizzes with rich content
- **Question Management** - Manage questions with multiple choice answers and correct answer marking
- **Advanced Tables** - Sortable, searchable data tables with pagination
- **Status Management** - Toggle active/inactive states with visual indicators
- **Bulk Operations** - Export data and perform batch actions

### 🎨 Design Features

- **Consistent Design System** - Unified color palette and typography across all pages
- **Interactive Components** - Hover effects, transitions, and smooth animations
- **Responsive Navigation** - Collapsible mobile menu with smooth transitions
- **Toast Notifications** - User feedback for actions and errors
- **Loading States** - Skeleton screens and spinners for better UX
- **Error Pages** - Custom 404 and 403 pages with helpful navigation

## 🛠️ Technology Stack

### Core Technologies

- **HTML5** - Semantic markup with modern web standards
- **Tailwind CSS v4** - Utility-first CSS framework via browser CDN
- **Vanilla JavaScript (ES6+)** - Clean, modern JavaScript without dependencies

### Tailwind CSS Features Used

- **Custom Theme Configuration** - Using `@theme` directive for brand colors
- **Responsive Design** - Mobile-first breakpoints (sm, md, lg, xl)
- **Custom Components** - Reusable component classes
- **State Variants** - Hover, focus, active, disabled states
- **CSS Variables** - Dynamic theming with CSS custom properties
- **Browser CDN** - No build process required

### Design Patterns

- **Event Delegation** - Efficient event handling for dynamic content
- **Component-Based Architecture** - Modular, reusable UI components
- **State Management** - Client-side authentication state
- **Data Attributes** - Semantic element selection and state control

## 📁 Project Structure

```
assignment-fee/
├── fee/
│   ├── home.html              # Landing page with hero section
│   ├── quizzes.html           # Quiz catalog with search
│   ├── about.html             # About page with team showcase
│   ├── contact.html           # Contact form page
│   ├── login.html             # User login page
│   ├── register.html          # User registration page
│   ├── quiz-management.html   # Quiz CRUD dashboard
│   ├── question-management.html # Question CRUD dashboard
│   ├── user-management.html   # User CRUD dashboard
│   ├── role-management.html   # Role CRUD dashboard
│   ├── 404.html               # Page not found error
│   ├── 403.html               # Access forbidden error
│   └── assets/
│       ├── css/
│       │   └── styles.css     # Custom CSS extensions
│       ├── js/
│       │   └── main.js        # Core JavaScript functionality
│       ├── icons/
│       │   └── logo.png       # Application logo
│       └── images/
│           ├── hero.png       # Hero section image
│           ├── quizzes/       # Quiz cover images
│           │   ├── quiz-1.png
│           │   ├── quiz-2.png
│           │   └── quiz-3.png
│           └── teams/         # Team member avatars
│               ├── team-1.png
│               ├── team-2.png
│               └── team-3.png
└── README.md
```

## 🎨 Design System

### Tailwind CSS Configuration

The project uses Tailwind CSS v4's `@theme` directive for custom theming:

```css
@theme {
  --color-primary: #38b6ff;
  --color-secondary: #f1f5f9;
  --color-muted: #64748b;
  --color-foreground: #0f172a;
  --color-background: #ffffff;
  --color-border: #e2e8f0;
}
```

### Color Palette

| Color      | Hex Code  | Usage                                  |
| ---------- | --------- | -------------------------------------- |
| Primary    | `#38b6ff` | CTAs, active states, links             |
| Secondary  | `#f1f5f9` | Backgrounds, cards, subtle sections    |
| Muted      | `#64748b` | Secondary text, placeholders, disabled |
| Foreground | `#0f172a` | Primary text, headings                 |
| Border     | `#e2e8f0` | Dividers, card borders, input borders  |
| Background | `#ffffff` | Main background, cards                 |

### Custom Utility Classes

```css
.bg-primary {
  background-color: #38b6ff;
}
.text-primary {
  color: #38b6ff;
}
.bg-secondary {
  background-color: #f1f5f9;
}
.text-muted {
  color: #64748b;
}
.border-input {
  border-color: #e2e8f0;
}
```

### Typography

- **Font Family**: System font stack for optimal performance
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...;
  ```
- **Font Sizes**: Responsive scale using Tailwind's text utilities
  - `text-sm` (0.875rem) - Small text, captions
  - `text-base` (1rem) - Body text
  - `text-lg` (1.125rem) - Emphasized text
  - `text-xl` to `text-4xl` - Headings
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: Optimized for readability with Tailwind's leading utilities

### Spacing System

Tailwind's default spacing scale (4px base unit):

- `p-1` to `p-12` - Padding
- `m-1` to `m-12` - Margin
- `gap-1` to `gap-12` - Flexbox/Grid gaps
- `space-x-*` and `space-y-*` - Child spacing

### Container System

```css
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile */
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 1.5rem; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 2rem; /* Desktop */
  }
}
```

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

## � Detailed Page Documentation

### 🏠 Home Page (`home.html`)

**Purpose**: Landing page introducing the platform and showcasing featured quizzes

**Key Sections**:

- Hero section with call-to-action
- Featured quizzes grid (3 cards)
- Responsive navigation header
- Footer with site information

**Tailwind Features Used**:

- `grid grid-cols-1 md:grid-cols-2` - Responsive hero layout
- `gap-6` - Consistent spacing between elements
- `hover:shadow-lg transition-shadow` - Interactive card effects
- `text-2xl font-bold tracking-tighter` - Typography utilities

### 📚 Quizzes Page (`quizzes.html`)

**Purpose**: Browse and search available quizzes

**Key Sections**:

- Quiz code input form
- Quiz catalog grid
- Search and filter functionality
- Quiz cards with metadata

**Tailwind Features Used**:

- `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3` - Responsive grid
- `rounded-xl border shadow-md` - Card styling
- `flex justify-between items-center` - Card header layout
- `hover:shadow-lg` - Interactive states

### 👥 About Page (`about.html`)

**Purpose**: Team information and platform introduction

**Key Sections**:

- Platform description
- Contact information with icons
- Team member showcase grid
- Circular avatar images

**Tailwind Features Used**:

- `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3` - Team grid
- `rounded-full` - Circular avatars
- `flex flex-col gap-6` - Vertical layouts
- `text-center` - Centered content

### 📧 Contact Page (`contact.html`)

**Purpose**: Contact form and information

**Key Sections**:

- Contact form with validation
- Contact information display
- Social media links
- Form submission handling

**Tailwind Features Used**:

- `grid grid-cols-1 md:grid-cols-2 gap-8` - Two-column layout
- `focus:outline focus:ring` - Form input states
- `transition-colors` - Smooth interactions
- Form validation styles

### 🔐 Authentication Pages

**Login (`login.html`)**:

- Username/password form
- "Remember me" checkbox
- "Forgot password" link
- Link to registration

**Register (`register.html`)**:

- User registration form
- Password confirmation
- Terms acceptance checkbox
- Form validation

**Tailwind Features**:

- `max-w-md mx-auto` - Centered form container
- `space-y-4` - Consistent form field spacing
- Button variants with hover states
- Error message styling

### ⚠️ Error Pages

**404 Page (`404.html`)**:

- "Page Not Found" message
- Navigation options
- Helpful links back to main sections

**403 Page (`403.html`)**:

- "Access Forbidden" message
- Login suggestion for protected resources
- Contact support option

## 🎯 Admin Dashboard Features

### 📊 User Management (`user-management.html`)

**Features**:

- User listing with sortable columns
- Search by username/email
- Filter by role and status
- Create/Edit/Delete operations
- Role assignment dropdown
- Status toggle (Active/Inactive)

**Tailwind Components**:

```html
<!-- Table with Tailwind classes -->
<table class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-50">
    <tr>
      <th
        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        Username
      </th>
    </tr>
  </thead>
</table>
```

### 🎭 Role Management (`role-management.html`)

**Features**:

- Role CRUD operations
- Permission assignment
- User count per role
- Role description management
- Status management

**Layout**:

- Sidebar navigation
- Main content area with data table
- Add/Edit role form
- Pagination controls

### 📝 Quiz Management (`quiz-management.html`)

**Features**:

- Quiz CRUD operations
- Image upload interface
- Description editor
- Question association
- Quiz code generation
- Status management

**Interactive Elements**:

- Modal dialogs for confirmation
- Toast notifications for actions
- Drag-and-drop image upload
- Rich text editor integration

### ❓ Question Management (`question-management.html`)

**Features**:

- Question CRUD operations
- Multiple choice answer management
- Correct answer marking
- Quiz association
- Bulk import functionality

**Form Components**:

- Dynamic answer fields
- Add/Remove answer buttons
- Radio buttons for correct answer
- Question type selector

## 💡 Usage Guide

### For End Users

1. **Browse Quizzes**

   - Navigate to home page
   - View featured quizzes
   - Click "Take a Quiz" to see full catalog

2. **Take a Quiz**

   - Enter quiz code on quizzes page
   - Click "Take Quiz" button
   - Follow quiz instructions

3. **User Account**
   - Register for new account
   - Login with credentials
   - Access user dropdown for profile options
   - Change password as needed
   - Logout when finished

### For Administrators

1. **Access Admin Dashboard**

   - Login with admin credentials
   - Click "Management" in navigation
   - Select management section from sidebar

2. **Manage Users**

   - View all users in table
   - Search/filter as needed
   - Click "Add User" to create new
   - Edit existing users with Edit icon
   - Delete users with Delete icon
   - Toggle user status

3. **Manage Quizzes**

   - View quiz list
   - Create new quiz with Add button
   - Upload quiz cover image
   - Add questions to quiz
   - Publish or unpublish quizzes

4. **Manage Questions**
   - View question bank
   - Create multiple choice questions
   - Mark correct answers
   - Associate with quizzes
   - Edit or delete questions

## 🔧 Configuration & Customization

### Theme Customization

Edit the `@theme` directive in any HTML file:

```html
<style type="text/tailwindcss">
  @theme {
    --color-primary: #your-color;
    --color-secondary: #your-color;
    /* Add more custom colors */
  }
</style>
```

### JavaScript Configuration

In `assets/js/main.js`:

```javascript
// Authentication state for development
const isAuthenticated = true; // Set to false to test logged-out state

// Mobile menu toggle
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");

// User dropdown toggle
const userDropdownMenu = document.getElementById("userDropdownMenu");
const userAvatarBtn = document.getElementById("userAvatarBtn");
```

### Adding Custom Components

Create reusable components with Tailwind utilities:

```html
<!-- Custom Card Component -->
<div class="rounded-xl border border-border shadow-md bg-card p-6">
  <h3 class="text-xl font-bold text-foreground mb-2">Card Title</h3>
  <p class="text-muted-foreground">Card content goes here.</p>
</div>

<!-- Custom Button Component -->
<button
  class="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 py-2 font-medium transition-colors hover:bg-primary/90"
>
  Click Me
</button>
```

## 📱 Responsive Design Details

### Breakpoint Strategy

```
Mobile First Approach:
├── Base styles (Mobile < 640px)
├── sm: (≥ 640px) - Small tablets
├── md: (≥ 768px) - Tablets
├── lg: (≥ 1024px) - Laptops
└── xl: (≥ 1280px) - Desktops
```

### Responsive Patterns Used

**Navigation**:

- Mobile: Hamburger menu → Full-screen overlay
- Desktop: Horizontal navigation bar

**Content Grid**:

- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns

**Admin Tables**:

- Mobile: Horizontal scroll
- Desktop: Full table display

**Forms**:

- Mobile: Stacked fields
- Desktop: Side-by-side layout

### Mobile Optimization

```html
<!-- Responsive Grid Example -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items adapt to screen size -->
</div>

<!-- Responsive Text Example -->
<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
  <!-- Text size scales with screen -->
</h1>

<!-- Responsive Padding Example -->
<div class="p-4 sm:p-6 lg:p-8">
  <!-- Padding increases on larger screens -->
</div>
```

## 🎨 Tailwind CSS Implementation Details

### Why Tailwind CSS v4 Browser CDN?

**Advantages**:

- ✅ **Zero Configuration** - No build tools or npm installation required
- ✅ **Instant Setup** - Include one script tag and start styling
- ✅ **Modern Features** - Access to latest Tailwind v4 features
- ✅ **Custom Theming** - Use `@theme` directive for brand colors
- ✅ **JIT Engine** - Just-In-Time compilation in the browser
- ✅ **Perfect for Prototyping** - Rapid development without setup overhead

**Implementation**:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<style type="text/tailwindcss">
  @theme {
    /* Your custom theme here */
  }
  /* Your custom CSS here */
</style>
```

### Custom Utility Classes

Beyond Tailwind's defaults, custom utilities are defined:

```css
/* Brand Colors */
.bg-primary {
  background-color: #38b6ff;
}
.text-primary {
  color: #38b6ff;
}
.bg-secondary {
  background-color: #f1f5f9;
}
.text-muted {
  color: #64748b;
}

/* Component Classes */
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
```

### Component Patterns

**Card Pattern**:

```html
<div
  class="rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden"
>
  <div class="relative h-48 w-full overflow-hidden">
    <img src="image.png" class="h-full w-full object-cover" />
  </div>
  <div class="p-6">
    <h3 class="text-xl font-bold text-foreground mb-2">Title</h3>
    <p class="text-sm text-muted-foreground">Description</p>
  </div>
</div>
```

**Button Variants**:

```html
<!-- Primary Button -->
<button
  class="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-2 font-medium hover:opacity-90 transition-all shadow-sm"
>
  Primary Action
</button>

<!-- Outline Button -->
<button
  class="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
>
  Secondary Action
</button>
```

**Form Input Pattern**:

```html
<div class="space-y-2">
  <label class="text-sm font-medium leading-none">Label</label>
  <input
    type="text"
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    placeholder="Enter value"
  />
</div>
```

## 🚀 Performance Considerations

### Browser CDN Performance

**Caching**:

- Tailwind CDN is cached by browsers
- Shared across multiple sites using same CDN
- Fast initial load on repeat visits

**Bundle Size**:

- ~3.5MB project size (including images)
- Tailwind CDN loaded separately
- No build step means no bundle optimization needed

**Best Practices**:

- Use semantic HTML to reduce class complexity
- Leverage browser caching for assets
- Optimize images before deployment
- Consider lazy loading for images

### JavaScript Performance

```javascript
// Event delegation for efficiency
document.addEventListener("click", (e) => {
  if (e.target.matches(".pagination-btn")) {
    // Handle pagination
  }
});

// Debounced search
let searchTimeout;
function handleSearch(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    performSearch(query);
  }, 300);
}
```

## 🧪 Testing & Quality Assurance

### Manual Testing Checklist

**Responsive Design**:

- [ ] Test all pages on mobile (320px - 768px)
- [ ] Test all pages on tablet (768px - 1024px)
- [ ] Test all pages on desktop (1024px+)
- [ ] Verify navigation collapses correctly
- [ ] Check all modals and dropdowns

**Functionality**:

- [ ] Test all form submissions
- [ ] Verify authentication state toggle
- [ ] Test admin CRUD operations
- [ ] Check pagination controls
- [ ] Verify search and filter functions

**Browser Compatibility**:

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

**Accessibility**:

- [ ] Keyboard navigation works
- [ ] ARIA labels present
- [ ] Form labels associated correctly
- [ ] Color contrast sufficient
- [ ] Focus states visible

## 🔍 Code Quality Standards

### HTML Best Practices

```html
<!-- ✅ Good: Semantic HTML -->
<article class="quiz-card">
  <header class="quiz-header">
    <h3>Quiz Title</h3>
  </header>
  <main class="quiz-content">
    <!-- Content -->
  </main>
</article>

<!-- ❌ Bad: Non-semantic -->
<div class="quiz-card">
  <div class="quiz-header">
    <div>Quiz Title</div>
  </div>
  <!-- Content -->
</div>
```

### Tailwind Class Organization

```html
<!-- Recommended order: layout → display → sizing → spacing → styling → effects -->
<div
  class="
  flex flex-col          <!-- Layout -->
  items-center          <!-- Alignment -->
  w-full max-w-md       <!-- Sizing -->
  px-4 py-6            <!-- Spacing -->
  bg-white rounded-lg   <!-- Styling -->
  shadow-lg             <!-- Effects -->
"
>
  Content
</div>
```

### JavaScript Best Practices

```javascript
// ✅ Good: Clear variable names, const/let usage
const userDropdownMenu = document.getElementById("userDropdownMenu");
const isAuthenticated = true;

function toggleDropdown() {
  userDropdownMenu.classList.toggle("hidden");
}

// ❌ Bad: var, unclear names
var menu = document.getElementById("userDropdownMenu");
var auth = true;
```

## 🤝 Contributing

### Getting Started

1. **Fork the repository**

   ```bash
   git clone <your-fork-url>
   cd assignment-fee
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**

   - Follow existing code style
   - Use Tailwind utilities when possible
   - Test on multiple screen sizes

4. **Commit your changes**

   ```bash
   git add .
   git commit -m 'feat: add amazing feature'
   ```

5. **Push to your fork**

   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Include screenshots if UI changes

### Commit Message Convention

Following [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:

- `feat:` - New feature (triggers minor version bump)
- `fix:` - Bug fix (triggers patch version bump)
- `docs:` - Documentation only changes
- `style:` - Code style changes (formatting, no code change)
- `refactor:` - Code refactoring without feature change
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks, dependency updates

**Examples**:

```bash
feat(auth): add password reset functionality
fix(navbar): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(admin): improve table formatting
refactor(quiz): simplify quiz card component
```

### Code Style Guide

**Tailwind CSS**:

- Use Tailwind utilities first before custom CSS
- Follow mobile-first approach
- Keep class lists organized and readable
- Use consistent spacing patterns

**JavaScript**:

- Use ES6+ features (const, let, arrow functions)
- Follow camelCase for variables and functions
- Add comments for complex logic
- Keep functions small and focused

**HTML**:

- Use semantic HTML5 elements
- Include alt text for images
- Add ARIA labels for accessibility
- Maintain proper heading hierarchy

## 📚 Additional Resources

### Tailwind CSS v4

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind v4 Browser CDN Guide](https://tailwindcss.com/docs/browser)
- [Tailwind Play - Online Editor](https://play.tailwindcss.com/)
- [Tailwind UI Components](https://tailwindui.com/)

### Learning Resources

- **Tailwind CSS Crash Course** - Brad Traversy (YouTube)
- **Tailwind Labs YouTube Channel** - Official tutorials
- **Tailwind Weekly** - Newsletter with tips and tricks
- **Awesome Tailwind CSS** - Curated list of resources

### Design Inspiration

- [Dribbble](https://dribbble.com/) - UI/UX design inspiration
- [Tailwind Components](https://tailwindcomponents.com/) - Free components
- [Flowbite](https://flowbite.com/) - Tailwind component library
- [Headless UI](https://headlessui.com/) - Unstyled accessible components

## 🐛 Known Issues & Limitations

### Current Limitations

1. **Browser CDN Performance**

   - Initial load time slightly higher than compiled CSS
   - Not recommended for production at scale
   - Consider building CSS for production deployment

2. **No Build Process**

   - Cannot tree-shake unused utilities
   - No CSS purging
   - Larger CSS payload in browser

3. **JavaScript State Management**
   - Simple client-side state only
   - No persistence across page reloads
   - Consider adding localStorage for production

### Planned Improvements

- [ ] Add form validation library
- [ ] Implement toast notification system
- [ ] Add loading states and animations
- [ ] Integrate with backend API
- [ ] Add dark mode support
- [ ] Implement accessibility audit tools

## 📦 Deployment

### Static Hosting Options

**Recommended Platforms**:

- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment from Git
- **GitHub Pages** - Free hosting for public repos
- **Cloudflare Pages** - Fast global CDN

### Deployment Steps

**Using Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd assignment-fee
vercel --prod
```

**Using GitHub Pages**:

```bash
# Push to GitHub
git push origin main

# Enable GitHub Pages in repository settings
# Select branch: main, folder: / (root)
```

### Environment Configuration

For production deployment:

1. **Update Base URLs** - Replace relative paths if needed
2. **Optimize Images** - Compress images for faster loading
3. **Add Analytics** - Google Analytics, Plausible, etc.
4. **Configure HTTPS** - Ensure all resources load over HTTPS
5. **Add Meta Tags** - SEO and social media tags

## 📊 Project Statistics

- **Total Files**: 13 HTML pages
- **CSS Files**: 1 custom stylesheet
- **JavaScript Files**: 1 main script
- **Images**: 7 assets (hero, quizzes, team)
- **Total Size**: ~3.5MB (uncompressed)
- **Lines of Code**: ~5,000+ lines (HTML + CSS + JS)

## 📄 License

This project is created for **educational purposes** as part of a web development course.

**Usage Rights**:

- ✅ Free to use for learning and education
- ✅ Modify and extend for personal projects
- ✅ Share with proper attribution
- ❌ Commercial use requires permission
- ❌ Redistribution without credit

## 👥 Credits & Attribution

### Development

- **Primary Developer**: Kien Nguyen (kiennt169)
- **Course**: Web Development with HTML, CSS, JavaScript
- **Institution**: [Your Institution]
- **Date**: December 2025

### Technologies

- **Tailwind CSS v4** - Utility-first CSS framework
- **Tailwind Labs** - For excellent documentation and tools

### Design Resources

- **Hero Image** - Custom illustration
- **Quiz Images** - Educational placeholders
- **Team Photos** - Placeholder avatars
- **Icons** - SVG icons (custom/open source)

### Inspiration

- Modern quiz platforms (Kahoot, Quizizz, Google Forms)
- Admin dashboard templates (Tailwind UI, DaisyUI)
- Contemporary web design trends (2024-2025)

## 📧 Contact & Support

### Project Maintainer

- **Name**: Kien Nguyen
- **Student ID**: kiennt169
- **GitHub**: [@kiennt169](https://github.com/kiennt169)
- **Email**: [your-email]

### Getting Help

- **Issues**: Report bugs via GitHub Issues
- **Questions**: Use GitHub Discussions
- **Feature Requests**: Open an issue with "enhancement" label

### Feedback

We welcome feedback on:

- Code quality and organization
- UI/UX improvements
- Documentation clarity
- Accessibility enhancements
- Performance optimizations

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

- ✅ Modern HTML5 semantic markup
- ✅ Tailwind CSS v4 utility-first styling
- ✅ Responsive design principles
- ✅ Vanilla JavaScript DOM manipulation
- ✅ Authentication flow implementation
- ✅ CRUD operations UI design
- ✅ Admin dashboard architecture
- ✅ Accessibility best practices
- ✅ Git version control
- ✅ Technical documentation

---

**Built with ❤️ using Tailwind CSS v4 Browser CDN**

_Last Updated: December 12, 2025_  
_Version: 1.0.0_  
_Branch: task-02 (Tailwind CSS Implementation)_
