export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
    async jwt(props) {
      // console.log("*********************callbacks-jwt-props: ", props);
      const { token, user } = props
      // console.log("*********************token, user", token, user);
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;  // 死活获取不到isAdmin,
      }
      // console.log("*********************token", token);
      return token;
    },
    async session(props) {
      const { session, token } = props
      // console.log("*********************callbacks-session-props: ", props);
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      // console.log("*********************session", session);
      return session;
    },
    authorized(props) {
      const { auth, request } = props
      // console.log("*******************auth, request: ", auth, request.nextUrl);
      // console.log("*******************auth: ", auth);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

      // if (isOnAdminPanel && !user?.isAdmin) {
      //   return false;
      // }

      // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

      if (isOnBlogPage && !user) {
        return false;
      }

      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
