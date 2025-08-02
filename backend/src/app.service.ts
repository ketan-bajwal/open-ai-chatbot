import { Injectable } from '@nestjs/common';
import OpenAI from "openai";

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  async fetchResponse(body: any): Promise<string> {
    const openai = new OpenAI({
      apiKey: "<OPENAI_API_KEY>",
    });

    try {
      const result = await openai.responses.create({
        model: "gpt-4o-mini",
        input: body.message,
        store: true,
      });
      console.log(result.output_text);
      return result.output_text;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
