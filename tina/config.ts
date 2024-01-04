import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "",
  clientId: "",
  token: "",
  build: {
    publicFolder: "static",
    outputFolder: "admin",
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "page",
        path: "/blog",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "blocks",
            label: "Blocks",
            type: "object",
            list: true,
            templates: [
              {
                name: "welcomeHero",
                label: "welcome hero",
                fields: [
                  {
                    name: "message",
                    type: "rich-text",
                  },
                  {
                    name: "links",
                    label: "links",
                    type: "object",
                    list: true,
                    fields: [
                      { type: "string", name: "link" },
                      { type: "string", name: "label" },
                      {
                        type: "string",
                        name: "style",
                        options: ["simple", "button"],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
