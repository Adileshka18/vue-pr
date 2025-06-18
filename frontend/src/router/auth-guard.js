import store from '../store';

export default function(to, from, next) {
  const isAuthenticated = store.getters.isUserLoggedIn; // Используем геттер isUserLoggedIn
  console.log('AuthGuard: isAuthenticated:', isAuthenticated, 'User:', store.getters.user); // Отладка
  if (isAuthenticated) {
    next();
  } else {
    next('/login?loginError=true');
  }
}