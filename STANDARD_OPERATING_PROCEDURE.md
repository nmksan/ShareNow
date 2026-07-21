# ShareNow - Standard Operating Procedure (SOP)

## Document Control
- **Document Title:** Standard Operating Procedure for ShareNow Project
- **Version:** 1.0
- **Last Updated:** July 21, 2026
- **Repository:** nmksan/ShareNow
- **Primary Language:** TypeScript / Angular 2

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Development Environment Setup](#development-environment-setup)
3. [Repository Structure](#repository-structure)
4. [Development Workflow](#development-workflow)
5. [Code Standards & Guidelines](#code-standards--guidelines)
6. [Build & Deployment Process](#build--deployment-process)
7. [Testing Requirements](#testing-requirements)
8. [Version Control & Branching](#version-control--branching)
9. [Documentation Standards](#documentation-standards)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

### Project Description
**ShareNow** - A platform designed to make managing shared resources and life easier. The application facilitates seamless sharing capabilities across users.

### Technology Stack
- **Primary Language:** TypeScript
- **Frontend Framework:** Angular 2 (2.0.0-beta.15)
- **Build Tool:** TypeScript Compiler (tsc)
- **Package Manager:** npm
- **Development Server:** lite-server
- **Module System:** SystemJS
- **Reactive Programming:** RxJS (5.0.0-beta.2)

### Key Dependencies
```json
{
  "angular2": "2.0.0-beta.15",
  "systemjs": "0.19.26",
  "es6-shim": "^0.35.0",
  "reflect-metadata": "0.1.2",
  "rxjs": "5.0.0-beta.2",
  "zone.js": "0.6.10"
}
```

---

## Development Environment Setup

### Prerequisites
- **Node.js:** v4.x or v5.x (compatible with npm 3.x+)
- **npm:** Version 3.0 or higher
- **TypeScript:** v1.8.10 or higher
- **Git:** Latest stable version

### Initial Setup Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/nmksan/ShareNow.git
cd ShareNow
```

#### 2. Navigate to UI Implementation Directory
```bash
cd ui_implemention
```

#### 3. Install Dependencies
```bash
npm install
```

This command will:
- Install all npm dependencies listed in `package.json`
- Automatically run the `postinstall` script to install TypeScript typings
- Set up the project for development

#### 4. Verify Installation
```bash
npm run tsc
```

Successful compilation confirms the environment is properly configured.

### Development Server
To start the development server with live reload:
```bash
npm start
```

This command:
- Compiles TypeScript files
- Starts TypeScript file watcher (`tsc -w`)
- Launches lite-server for live browser reload

**Access Point:** http://localhost:3000 (default lite-server port)

---

## Repository Structure

```
ShareNow/
├── Documents/              # Project documentation and requirements
├── ui_design/              # UI/UX design files
├── ui_implemention/        # Main implementation directory
│   ├── node_modules/       # npm dependencies (git-ignored)
│   ├── typings/            # TypeScript type definitions (git-ignored)
│   ├── package.json        # npm configuration and dependencies
│   └── [source files]      # TypeScript source code
├── .gitignore              # Git ignore rules
├── README.md               # Project readme
├── Requirnment.docx        # Project requirements document
└── STANDARD_OPERATING_PROCEDURE.md  # This file
```

### Ignored Files
The following directories are excluded from version control:
- `ui_implemention/node_modules/` - npm packages
- `ui_implemention/typings/` - TypeScript type definitions

---

## Development Workflow

### Daily Development Process

#### 1. Before Starting Work
```bash
# Update your local repository
git pull origin master

# Navigate to implementation directory
cd ui_implemention

# Install any new dependencies
npm install
```

#### 2. Start Development Server
```bash
# Start the development environment with watchers and live reload
npm start

# The server will compile TypeScript and watch for changes
# Browser will auto-refresh when files are modified
```

#### 3. During Development
- Make changes to TypeScript source files
- The `tsc -w` watcher will automatically compile your changes
- The browser will auto-refresh via lite-server
- Monitor the console for compilation errors

#### 4. Creating Features
- Create feature branches from master (see [Version Control & Branching](#version-control--branching))
- Make commits with clear, descriptive messages
- Push to remote branch regularly

#### 5. Before Submitting Code
- Verify all TypeScript compiles without errors
- Test functionality in the browser
- Run any project-specific tests (see [Testing Requirements](#testing-requirements))
- Update documentation as needed

### Build Process

#### TypeScript Compilation
```bash
# One-time compilation
npm run tsc

# Watch mode (recommended during development)
npm run tsc:w
```

#### Full Build
```bash
npm start
# This runs: tsc && concurrently "npm run tsc:w" "npm run lite"
```

---

## Code Standards & Guidelines

### TypeScript/Angular 2 Standards

#### Naming Conventions
- **Files:** Use kebab-case for filenames (e.g., `user-service.ts`, `app-component.ts`)
- **Classes:** Use PascalCase (e.g., `AppComponent`, `UserService`)
- **Functions/Methods:** Use camelCase (e.g., `getUserData()`, `formatDate()`)
- **Constants:** Use UPPER_SNAKE_CASE (e.g., `MAX_USERS`, `API_ENDPOINT`)
- **Variables:** Use camelCase (e.g., `userData`, `isLoading`)

#### File Organization
- One class/component per file
- Keep related logic grouped together
- Import statements at the top of files
- Related imports should be grouped and separated

#### Angular 2 Component Structure
```typescript
// Imports
import { Component, Input, Output, EventEmitter } from 'angular2/core';

// Decorator
@Component({
  selector: 'app-component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})

// Class
export class ComponentNameComponent {
  // Properties
  @Input() data: any;
  @Output() eventName = new EventEmitter();

  // Constructor
  constructor() {
    // Initialization
  }

  // Lifecycle hooks
  ngOnInit() {}

  // Public methods
  publicMethod() {}

  // Private methods
  private privateMethod() {}
}
```

#### Code Comments
- Add comments for complex logic
- Document public methods with JSDoc comments
- Avoid obvious comments
- Keep comments updated with code changes

Example:
```typescript
/**
 * Fetches user data from the API
 * @param userId - The ID of the user
 * @returns Promise<User> - User object
 */
public getUserData(userId: string): Promise<User> {
  // Implementation
}
```

#### Type Safety
- Always use TypeScript types (avoid `any` when possible)
- Define interfaces for data structures
- Use proper return types for functions

```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

function getUser(id: string): User {
  // Implementation
}
```

### Code Review Checklist
- [ ] Code compiles without errors
- [ ] TypeScript types are properly defined
- [ ] Naming conventions are followed
- [ ] Comments explain complex logic
- [ ] No console errors or warnings
- [ ] Changes are tested
- [ ] Documentation is updated

---

## Build & Deployment Process

### Local Build
```bash
cd ui_implemention
npm run tsc
```

### Development Build with Server
```bash
cd ui_implemention
npm start
```

### Production Considerations
- Minify TypeScript output (configure in `tsconfig.json`)
- Consider using a production-grade server instead of lite-server
- Implement environment-specific configurations
- Add build optimization flags

### Deployment Steps
1. Ensure all code is tested and reviewed
2. Merge feature branches to master
3. Tag release version (see [Version Control & Branching](#version-control--branching))
4. Build production-ready version
5. Deploy to hosting environment
6. Run smoke tests
7. Monitor for errors

---

## Testing Requirements

### Unit Testing
- **Framework Recommendation:** Jasmine (compatible with Angular 2)
- **Runner Recommendation:** Karma

### Testing Standards
- Write tests for all public methods
- Aim for >80% code coverage
- Test error handling paths
- Mock external dependencies

### Running Tests
```bash
# Add test configuration to package.json when tests are implemented
npm run test
```

### Manual Testing Checklist
- [ ] Application loads without errors
- [ ] Core features work as designed
- [ ] Navigation functions correctly
- [ ] Data binding works properly
- [ ] Forms validate correctly
- [ ] Error messages display appropriately
- [ ] Responsive design functions on mobile/tablet

---

## Version Control & Branching

### Branch Naming Convention
- `master` - Production-ready code
- `develop` - Development integration branch (if used)
- `feature/description` - New features (e.g., `feature/user-authentication`)
- `bugfix/description` - Bug fixes (e.g., `bugfix/login-error`)
- `hotfix/description` - Production hotfixes (e.g., `hotfix/critical-security`)

### Commit Message Guidelines
- Use clear, descriptive messages
- Start with a verb in imperative mood
- Keep first line under 50 characters
- Add detailed explanation if needed (separated by blank line)

Examples:
```
Add user authentication component
Fix navigation button styling
Update API endpoint configuration
```

### Pull Request Process
1. Create a feature branch from master
2. Make commits with clear messages
3. Push branch to remote
4. Create pull request with:
   - Clear title describing changes
   - Description of what was changed and why
   - Reference to related issues (if any)
   - Screenshots (for UI changes)
5. Request code review
6. Address feedback
7. Merge to master when approved

### Merging Strategy
- Prefer squash merge for feature branches (keeps history clean)
- Allow merge commits for releases
- Delete branch after merging

---

## Documentation Standards

### Code Documentation

#### README Files
- Each major directory should have its own README
- Include setup instructions
- Document specific configurations
- Add examples where applicable

#### Inline Documentation
- Comment complex algorithms
- Document non-obvious decisions
- Explain business logic
- Update comments with code changes

#### TypeScript Files
Use JSDoc format for public APIs:
```typescript
/**
 * Description of the function
 * @param param1 - Description
 * @param param2 - Description
 * @returns Description of return value
 * @throws ErrorType - Description of error
 * @example
 * // Usage example
 * functionName(param1, param2);
 */
```

### Project Documentation
- Keep Requirements document updated
- Document architecture decisions
- Maintain API documentation
- Create user guides for features
- Document configuration options

---

## Troubleshooting

### Common Issues & Solutions

#### 1. npm Install Fails
**Problem:** Installation stops with errors
```bash
# Solution 1: Clear npm cache
npm cache clean --force

# Solution 2: Delete node_modules and reinstall
rm -rf node_modules
npm install

# Solution 3: Update npm
npm install -g npm@latest
```

#### 2. TypeScript Compilation Errors
**Problem:** `npm run tsc` shows errors
```bash
# Solution 1: Check Node/npm versions
node --version
npm --version

# Solution 2: Reinstall TypeScript
npm install typescript@1.8.10 --save-dev

# Solution 3: Verify tsconfig.json exists and is correct
```

#### 3. Browser Auto-Refresh Not Working
**Problem:** lite-server not detecting changes
```bash
# Solution 1: Restart the development server
# Press Ctrl+C in terminal
# Run: npm start

# Solution 2: Check file permissions
# Ensure files aren't read-only

# Solution 3: Clear browser cache
# Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
```

#### 4. typings Installation Fails
**Problem:** Typings command not found
```bash
# Solution: Install typings globally
npm install -g typings

# Then reinstall
npm postinstall
```

#### 5. Port Already in Use
**Problem:** lite-server can't start on port 3000
```bash
# Solution 1: Find process on port 3000 and kill it
# Linux/Mac:
lsof -i :3000
kill -9 <PID>

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Solution 2: Change lite-server port
# Create bs-config.json in ui_implemention directory:
{
  "server": {
    "baseDir": ".",
    "port": 3001
  }
}
```

### Getting Help
1. Check this SOP document
2. Review project documentation in Documents/ directory
3. Check Requirements.docx for project specifications
4. Review console error messages carefully
5. Check npm package documentation
6. Consult with team members

---

## Contact & Support

- **Project Owner:** @nmksan
- **Repository:** https://github.com/nmksan/ShareNow
- **Issues:** Use GitHub Issues for bug reports
- **Discussions:** Use GitHub Discussions for features/questions

---

## Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-07-21 | nmksan | Initial SOP Document Creation |

---

## Document Approval & Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Lead | | | |
| Technical Lead | | | |

---

**End of Document**
