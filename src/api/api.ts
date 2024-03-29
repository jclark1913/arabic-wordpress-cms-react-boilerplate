const SITE_URL = import.meta.env.VITE_WORDPRESS_SITE_URL;
const BASE_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}`;

/**A basic class to help simplify API calls to the WordPress CMS. This assumes
 * that the WordPress site is hosted on wordpress.com, is using the REST API and
 * is public. We also assume that editing/posting is handled through the
 * Wordpress admin dashboard and not through the API. As such, this class only
 * contains methods for fetching data using GET requests.
 * @class WordPressAPI
 */
export class WordPressAPI {

  /**Base static method for making requests
   * @param {string} endpoint - The endpoint to fetch data from
   * @param {Record<string, string>} params - A dictionary of query parameters
  */
  static async request(endpoint: string, params: Record<string, string>): Promise<any> {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.set(key, params[key]));

    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /** GET all posts w/ optional search term and tag
   * @param {string} searchTerm - A search term to filter posts by
   * @param {string} tag - A tag to filter posts by
  */
  static async getPosts(searchTerm: string, tag: string): Promise<any> {
    const response = await WordPressAPI.request("posts", { search: searchTerm, tag: tag });
    return response;
  }

  /** GET a single post by ID
   * @param {number} postId - The ID of the post to fetch
  */
  static async getPost(postId: number): Promise<any> {
    const response = await WordPressAPI.request(`posts/${postId}`, {});
    return response;
  }

  /** GET a single post by its slug. Useful for getting "about" page for example
   * @param {string} slug - The slug of the post to fetch
  */
  static async getPostBySlug(slug: string): Promise<any> {
    const response = await WordPressAPI.request("posts/slug:" + slug, {});
    return response;
  }
}