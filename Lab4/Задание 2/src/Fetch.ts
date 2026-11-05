import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

export async function getOddPosts(): Promise<PostDTO[]> {
    const allPosts = await api.getPosts();
    const oddPosts = allPosts.filter(post => post.id % 2 !== 0);
    return oddPosts.slice(0, 5);
}

export async function getEvenComments(): Promise<CommentDTO[]> {
    const allComments = await api.getComments();
    const evenComments = allComments.filter(comment => comment.id % 2 === 0);
    return evenComments.slice(0, 5);
}
