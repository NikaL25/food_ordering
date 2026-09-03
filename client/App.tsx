import "./global.css"
import Toast from '@/components/ui/Toast';
import Navigation from '@/navigation/Navigation';
import AuthProvider from '@/providers/auth/AuthProvider';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/store";
import { Provider } from "react-redux";
import { StripeProvider } from '@stripe/stripe-react-native'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
        <AuthProvider>
            <SafeAreaProvider>
              <StripeProvider publishableKey={process.env.STRIPE_KEY as string}>
                  <Navigation />
              </StripeProvider>           
            </SafeAreaProvider>
          </AuthProvider>
            <StatusBar barStyle="light-content" />
            <Toast />
            </PersistGate>
        </Provider>
      </QueryClientProvider>
)};
