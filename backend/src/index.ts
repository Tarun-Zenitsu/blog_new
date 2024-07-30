import { Hono } from "hono";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
      sucess: true,
      jwt,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      success: false,
      message: error,
    });
  }
});

app.get("/", (c) => {
  return c.text("signup route");
});

app.post("/api/v1/signin", (c) => {
  return c.text("signin");
});

app.post("/api/v1/blog", (c) => {
  return c.text("all post");
});

app.put("/app/v1/blog", (c) => {
  return c.text("update post");
});

app.get("/api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);

  return c.text("blog by id");
});

app.get("/api/v1/blog/bluk", (c) => {
  return c.text("all blog");
});

export default app;
