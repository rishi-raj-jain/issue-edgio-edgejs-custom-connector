import { Router } from "@edgio/core/router";

export default new Router()
  .match("/l0-api/:path*", ({ proxy }) => {
    proxy("origin", { path: ":path*" });
  })
  .fallback(({ renderWithApp }) => {
    renderWithApp();
  });
