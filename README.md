# Food Delivery App

A full-stack mobile application for food ordering built with React Native (Expo) and NestJS.

## Project Structure

```
react-native/
├── client/          # React Native + Expo mobile application
├── server/          # NestJS API backend
└── README.md        # This file
```

## Technologies Used

### Client (Mobile App)
- **React Native 0.76.9** with **Expo 52** - Cross-platform mobile framework
- **TypeScript** - Type-safe code
- **Nativewind** - Tailwind CSS for React Native
- **React Navigation** + **expo-router** - Navigation and file-based routing
- **Redux Toolkit** + **redux-persist** - State management with persistence
- **@tanstack/react-query** - Data fetching and state management
- **React Hook Form** - Form validation and handling
- **Axios** - API client
- **@stripe/stripe-react-native** - Payment processing
- **react-native-toast-message** - Toast notifications
- **react-native-reanimated** - Animations
- **react-native-gesture-handler** - Gesture handling

### Server (API Backend)
- **NestJS 11** - Progressive Node.js framework
- **PostgreSQL** - Relational database
- **Prisma ORM** - Database client and migration tool
- **JWT + Passport** - Authentication with access and refresh tokens
- **argon2** - Password hashing
- **class-validator / class-transformer** - DTO validation
- **Stripe** - Payment processing
- **Jest** - Testing framework

## Client Architecture

### File Structure
The client follows a feature-based directory structure under `app/`:

```
client/app/
├── navigation/     # Route configuration and navigator setup
├── components/     # Reusable UI components (organized by layout, common, etc.)
├── providers/      # React context providers (Auth, Theme, etc.)
├── hooks/          # Custom React hooks
├── store/          # Redux store configuration and slices
├── services/       # API services and external integrations
├── types/          # TypeScript type definitions
├── config/         # Application configuration
├── app.tsx         # Root App component
└── main.tsx        # Entry point
```

### Key Architecture Patterns
- **React Navigation + expo-router**: File-based routing with deep linking support
- **Redux Toolkit + redux-persist**: Global state management with persistence
- **React Query**: Server state management, caching, and synchronization
- **Context API**: For theming, authentication, and other global concerns
- **Custom hooks**: Encapsulating reusable logic (useAuth, useCart, useDebounce, etc.)
- **Component composition**: UI built with reusable, composable components

### Navigation
- File-based routing using `expo-router`
- Custom navigator via `PrivateNavigator`
- Bottom tab menu for authenticated users
- Protected routes based on authentication state

### State Management
- **Redux Toolkit**: Global state (user, cart, favorites)
- **redux-persist**: Persists storage across app launches
- **React Query**: Server data fetching, caching, and synchronization
- **Local hooks**: Component-local state management

---

## Server Architecture

### File Structure
The server follows a modular NestJS structure under `src/`:

```
server/src/
├── auth/           # Authentication module (JWT, local strategies)
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── auth.module.ts
│   ├── dto/        # Authentication DTOs
│   ├── decorators/ # Custom decorators (Auth, CurrentUser)
│   └── strategies/ # JWT strategies
├── user/           # User management module
│   ├── user.controller.ts
│   ├── user.service.ts
│   ├── user.module.ts
│   └── dto/        # User DTOs
├── product/        # Product module
│   ├── product.controller.ts
│   ├── product.service.ts
│   ├── product.module.ts
│   └── dto/        # Product DTOs
├── category/       # Category module
│   ├── category.controller.ts
│   ├── category.service.ts
│   ├── category.module.ts
│   └── dto/        # Category DTOs
├── order/          # Order module
│   ├── order.controller.ts
│   ├── order.service.ts
│   ├── order.module.ts
│   └── dto/        # Order DTOs
├── app.controller.ts    # Root controller
├── app.service.ts       # Root service
├── app.module.ts        # Root module
├── main.ts              # Application entry point
├── prisma-service.ts    # Prisma service configuration
├── decorators/          # Custom decorators (Auth, CurrentUser)
├── config/              # Configuration files
└── generated/           # Prisma client generation
```

### Key Architecture Patterns
- **NestJS Modular Structure**: Feature-based modules (auth, user, product, category, order)
- **Dependency Injection**: Services injected via constructor
- **Prisma ORM**: Type-safe database access with auto-generated client
- **JWT Authentication**: Access and refresh token pattern
- **Guard-based Protection**: `@Auth()` decorator guards routes
- **Pipe-based Validation**: `@ValidationPipe` for DTO validation
- **DTO Pattern**: `class-validator` and `class-transformer` for data validation/transformation
- **Service Layer**: Business logic separated from controllers

### API Organization
- **Controllers**: HTTP request handling
- **Services**: Business logic
- **Modules**: Feature grouping and encapsulation
- **DTOs**: Request/response data transfer objects
- **Decorators**: Custom pipeline elements (guards, pipes, current user)

### Database
- **PostgreSQL** as the relational database
- **Prisma ORM** for type-safe database operations
- **Schema** defines: User, Product, Category, Order, OrderItem models
- **Migrations** managed via Prisma migration system

### Middleware & Pipeline
- CORS enabled globally
- Global prefix `api`
- Request validation using pipes
- Authentication via JWT strategy
- Role-based access control through guards
Navigate to `client/` directory:

- `npm start` or `expo start` - Start the Expo development server
- `npm android` - Start Android app (requires Android Studio)
- `npm ios` - Start iOS app (macOS only)
- `npm web` - Start web version

### Server
Navigate to `server/` directory:

- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Start the production server (port 4200)
- `npm run start:dev` - Start development mode with auto-reload
- `npm run start:debug` - Start debug mode
- `npm run start:prod` - Start production mode
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint
- `npm run test` - Run tests
- `npm run test:cov` - Run tests with coverage

## Environment Configuration

### Client (`client/.env`)
- `SERVER_URL` - Backend API URL
  - Android Emulator: `http://10.0.2.2:4200`
  - Physical Device on same WiFi: Use your machine's local IP (e.g., `http://192.168.1.100:4200`)
  - iOS Simulator: `http://localhost:4200`
- `STRIPE_KEY` - Stripe publishable key for payments

### Server (`server/.env`)
- `DATABASE_URL` - PostgreSQL connection string (format: `postgresql://username:password@host:port/database?schema=public`)
- `JWT_SECRET` - Secret key for JWT token signing
- `STRIPE_SECRET_KEY` - Stripe secret key for payment processing

## Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm, yarn, or pnpm
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- PostgreSQL database

### 1. Clone the repository
```bash
git clone <repository-url>
cd react-native
```

### 2. Set up the server
```bash
cd server
cp .env.example .env  # or create .env with required variables
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run start:dev
```

The server will run on `http://localhost:4200` by default.

### 3. Set up the client
```bash
cd client
cp .env.example .env  # or create .env with required variables
npm install
npm start
```

### 4. Running the application
1. Start the server first: `npm run start:dev` in the server directory
2. Start the client: `npm start` in the client directory
3. Use the Expo Go app on your device or an emulator/simulator
4. The client will connect to the server based on the `SERVER_URL` in `.env`

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/login/access-token` - Refresh access token

### Users
- `GET /api/users/profile` - Get user profile (auth required)
- `PATCH /api/users/profile/favorites/:productId` - Toggle favorite (auth required)

### Products
- `GET /api/products` - Get all products (optional searchTerm query)
- `GET /api/products/by-slug/:slug` - Get product by slug
- `GET /api/products/by-category/:categorySlug` - Get products by category

### Categories
- `GET /api/categories` - Get all categories
- `GET /api/categories/by-slug/:slug` - Get category by slug

### Orders
- `GET /api/orders` - Get all orders (auth required)
- `GET /api/orders/by-user` - Get orders by user (auth required)
- `POST /api/orders/place-order` - Place a new order (auth required)

## Project Features

- User authentication with JWT (access + refresh tokens)
- Product catalog with search and category filtering
- Favorite products functionality
- Shopping cart functionality
- Order placement and management
- Payment integration with Stripe
- Protected routes and role-based access
- Persistent state using Redux Persist and React Query
- Responsive UI with Tailwind CSS (NativeWind)

## Available Screens (Client)
- Auth (login/register)
- Home
- Category
- Product detail
- Search
- Explorer
- Cart
- Favorites
- Profile
- Order confirmation (Thanks)

## Available Routes (Navigation)
- Auth
- Home
- Favorites
- Search
- Explorer
- Profile
- Cart
- Category (with slug parameter)
- Product (with slug parameter)
- Thanks (order confirmation)