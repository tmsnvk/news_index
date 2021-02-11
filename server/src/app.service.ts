import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  constructor() {}

  root() {
    return `<p>You cannot pass! Please visit the site <a href="https://tamasnovak.net/newsindex?utm_source=backend">from its front-end</a>.</p>`;
  }
}