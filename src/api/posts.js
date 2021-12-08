import { getAPI, postAPI } from './index';

export const getPosts = async () => {
    const result = await getAPI(`/blog/post`);
    console.log('getPosts : ', result);
    return result.data;
};

export const setPost = async ({userID, title, contents}) => {
    const postData = {
        userID: userID,
        title: title,
        contents: contents,
    };
    const result = await postAPI(`/posts`, postData);
    return result.data;
};