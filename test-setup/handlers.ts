import { http, HttpResponse } from "msw";

import { user } from "./mocks/user";
export const handlers = [
  http.get("https://api.github.com/users/romanova-maria", () => {
    return HttpResponse.json(user);
  }),
];
