// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const { Client } = require('@notionhq/client');
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_DATABASE_BLOG_ID;
    const response = await notion.databases.query({ 
        database_id: databaseId,
        sorts: [
            {
              property: 'created_at',
              direction: 'descending',
            },
          ],
    });
    let Blogs = [];
    response.results.map((row) => {
        Blogs.push({
            "id" : row.id,
            "title" : row.properties.title.title[0].plain_text ?? "Untitled",
            "tags" : row.properties.tags.multi_select ?? [],
            "body" : row.properties.body.rich_text[0].plain_text ?? "No Content",
            "created_at" : row.properties.created_at.created_time
        })
    })
    res.status(200).json(Blogs)
  }
  