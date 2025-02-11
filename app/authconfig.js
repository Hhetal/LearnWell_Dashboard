export const authConfig = {
    providers: [],
    pages: {
        signIn: "/login",
// If we are not authenticated we will redirected to these login page..
    },
    callbacks: {
        authorized({ auth, request }) {
          const isLoggedIn = auth?.user;
          const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
          if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false;
          } else if (isLoggedIn) {
            return Response.redirect(new URL("/dashboard", request.nextUrl));
          }
          return true;
        },
    },
};