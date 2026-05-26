import { Request, Response } from "express";
import { UrlService } from "../services/UrlService";
import { IUrl } from "../interfaces/IUrl";

const urlService = new UrlService();

export class UrlController {

  shortenUrl(req: Request, res: Response): void {
    const { originalUrl } = req.body as IUrl;
    const url = originalUrl || req.body.url;

    const code = urlService.createShortUrl(url);

    const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
    res.json({
      shortUrl: `${baseUrl}/${code}`
    });
  }
 
  redirectUrl(req: Request, res: Response): void {
    const { code } = req.params as { code: string };

    const originalUrl = urlService.getOriginalUrl(code);

    if (!originalUrl) {
      res.status(404).json({ error: "URL not found" });
      return;
    }

    res.redirect(originalUrl);
  }

}