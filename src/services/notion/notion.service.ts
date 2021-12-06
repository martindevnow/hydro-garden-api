import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';

@Injectable()
export class NotionService {
  private readonly client: Client;
  constructor() {
    this.client = new Client({
      auth: process.env.NOTION_SECRET,
    });
    console.log('secret', process.env.NOTION_SECRET);
  }

  create(data: any) {
    console.log('create');
    console.log({ data });
  }
}
