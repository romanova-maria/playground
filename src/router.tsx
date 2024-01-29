import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { HomemadeStorybook, ClicksGame, About } from "./pages";
import { Layout } from "./layouts";
import axios from "axios";

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export const routesConfig: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "*", element: <Navigate to="/" /> },
      {
        path: "/",
        element: <ClicksGame />,
      },
      {
        path: "/storybook",
        element: <HomemadeStorybook />,
      },
      {
        path: "/about",
        element: <About />,
        loader: async ({ request: { signal } }): Promise<User> => {
          try {
            const { data } = await axios.get<User>(
              "https://api.github.com/users/romanova-maria",
              {
                signal,
              },
            );
            return data;
          } catch (error) {
            throw new Error(`Something went wrong: ${error}`);
          }
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);

export { Outlet, useLoaderData } from "react-router-dom";
