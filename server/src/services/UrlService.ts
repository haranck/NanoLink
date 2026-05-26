import crypto from "crypto";

export class UrlService {
  private urlStore: Map<string, string> = new Map();

  createShortUrl(url: string): string {
    const code = crypto.randomBytes(4).toString("hex");
    this.urlStore.set(code, url);
    return code;
  }

  getOriginalUrl(code: string): string | undefined {
    return this.urlStore.get(code);
  }

}