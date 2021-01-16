export interface App {
  data: {
    articles: {
      description: string;
      publishedAt: string;
      source?: { 
        name: string; 
      };
      title: string;
      url: string;
      urlToImage: string;
    }
  }[]
}