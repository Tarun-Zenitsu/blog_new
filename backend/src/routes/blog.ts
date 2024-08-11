import { Hono } from "hono";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@tarun_zenitsu/blog";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middleware for authorization
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";

  const token = header.split(" ")[1];
  if (!token) {
    c.status(401);
    return c.json({ success: false, message: "Unauthorized" });
  }
  try {
    const user = await verify(token, c.env.JWT_SECRET);
    c.set("jwtPayload", user.id);
    await next();
  } catch (error) {
    c.status(401);
    return c.json({ success: false, message: "Unauthorized" });
  }
});

// Create a new blog post
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const authorId = c.get("jwtPayload");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      success: false,
      message: "Input not correct",
    });
  }

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId,
      },
    });
    return c.json({
      success: true,
      id: blog.id,
    });
  } catch (error) {
    c.status(500);
    return c.json({ success: false, message: "Failed to create blog" });
  }
});

// Update an existing blog post
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      success: false,
      message: "Input not correct",
    });
  }

  try {
    const updateBlog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.json({
      success: true,
      id: updateBlog.id,
    });
  } catch (error) {
    c.status(500);
    return c.json({ success: false, message: "Failed to update blog" });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (blogs.length === 0) {
      c.status(404);
      return c.json({ success: false, message: "No blogs found" });
    }

    return c.json({ success: true, blogs });
  } catch (error) {
    c.status(500);
    return c.json({ success: false, message: "Failed to fetch blogs" });
  }
});

// Get a specific blog post
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id,
      },
    });
    if (blog) {
      return c.json({ success: true, blog });
    } else {
      c.status(404);
      return c.json({ success: false, message: "Blog not found" });
    }
  } catch (error) {
    c.status(500);
    return c.json({ success: false, message: "Failed to fetch blog" });
  }
});

// Todo pagination
// blogRouter.get("/bulk", async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//   try {
//     const blogs = await prisma.blog.findMany({
//       select: {
//         content: true,
//         title: true,
//         id: true,
//         author: {
//           select: {
//             name: true,
//           },
//         },
//       },
//     });
//     if (!blogs) {
//       c.status(404);
//       return c.json({ success: false, message: "Blog not found" });
//     }
//     return c.json({
//       blogs,
//     });
//   } catch (error) {
//     c.status(500);
//     return c.json({ success: false, message: "Failed to fetch blog" });
//   }
// });
