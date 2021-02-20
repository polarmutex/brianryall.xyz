import fs from "fs";
import path from 'path';
import matter from 'gray-matter';


const postList = getAllFiles('src/routes/blog');

const blogPosts = postList.map((postPath) => {
    const postObject = matter(fs.readFileSync(postPath, 'utf-8'));
    let routePath = path.dirname(postPath).replace('src/routes', '');
    if(routePath === '/blog') {
        routePath = postPath.replace('src/routes', '').replace(path.extname(postPath), '');
    }
    return {...postObject.data, type: 'post', path: routePath};
});

function getAllFiles(directory, fileArray) {
    let files = fs.readdirSync(directory);

    fileArray = fileArray || [];

    files.forEach((file) => {
        if(fs.statSync(`${directory}/${file}`).isDirectory()) {
            fileArray = getAllFiles(`${directory}/${file}`, fileArray);
        } else {
            const filePath = path.join(`${directory}/${file}`) ;
            if(path.extname(filePath) === '.md' || path.extname(filePath) === '.svx') {
                fileArray.push(filePath);
            }
        }
    });
    return fileArray;
}

export const allPosts = blogPosts.sort((a, b) => {
    if(new Date(a.date) < new Date(b.date)) return 1;
    if(new Date(a.date) > new Date(b.date)) return -1;
    return 0;
});
