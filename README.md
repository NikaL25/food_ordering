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

## Available Scripts

### Client
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