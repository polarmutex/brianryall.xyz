import fs from "fs";
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Post from '$lib/types/post';

const HAS_EXTENSION = /\.[^/.]+$/

// Do I still need this?
function getAllFiles(directory, fileArray) {
    let files = fs.readdirSync(directory);

    fileArray = fileArray || [];

    files.forEach((file) => {
        if (fs.statSync(`${directory}/${file}`).isDirectory()) {
            fileArray = getAllFiles(`${directory}/${file}`, fileArray);
        } else {
            const filePath = path.join(`${directory}/${file}`);
            if (path.extname(filePath) === '.md' || path.extname(filePath) === '.svx') {
                fileArray.push(filePath);
            }
        }
    });
    return fileArray;
}

const posts = fs
    .readdirSync('./data/posts')
    .filter((elem) => elem.endsWith('.svx'))
    .map((postFilename): Post => {
        const postContent = fs.readFileSync(`./data/posts/${postFilename}`, {
            encoding: 'utf8',
        });

        const postGrayMatter = matter(postContent);

        const renderer = new marked.Renderer();
        const html = marked(postGrayMatter.content, { renderer });

        return {
            ...(postGrayMatter.data as Post),
            html: marked(html),
            slug: postFilename.replace(HAS_EXTENSION, ""),
        };
    })
    .filter((post) => !post.hidden)
    .sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime())

export default posts
