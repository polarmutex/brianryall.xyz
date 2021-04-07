export type Post = {
    title: string;
    slug: string;
    creationDate: string;
    excerpt: string;
    tags: string[];
    hasAffiliateLink: boolean;
    readingTime: string;
    hidden: boolean;
    html: string;
};
export default Post;
