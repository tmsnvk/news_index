export class AppDTO {
  data: {
    articles: {
      readonly description: string;
      readonly publishedAt: string;
      readonly source?: {
        name: string;
      };
      readonly title: string;
      readonly url: string;
      readonly urlToImage: string;
    }[]
  }
}