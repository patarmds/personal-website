// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NotionAPI } from 'notion-client'

export default async function handler(req, res) {
    const notion = new NotionAPI()
    const recordMap = await notion.getPage('4120ff349db04d88bdb5ff62d9d9da87')
    res.status(200).json(recordMap)
  }
  

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async function handler(req, res) {
//     const { Client } = require('@notionhq/client');
//     const notion = new Client({ auth: process.env.NOTION_API_KEY });
//     const pageId = "4120ff349db04d88bdb5ff62d9d9da87";
//     const response = await notion.blocks.retrieve({ 
//         block_id: pageId,
//     });
//     res.status(200).json(response)
//   }
  