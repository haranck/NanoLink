import { nanoid } from "nanoid";

export class UrlService {
  private urlStore: Map<string, string> = new Map();

  createShortUrl(url: string): string {
    const code = nanoid(5);
    this.urlStore.set(code, url);
    return code;
  }

  getOriginalUrl(code: string): string | undefined {
    return this.urlStore.get(code);
  }

}