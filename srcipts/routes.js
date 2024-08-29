
/**
 * 创建一个 JSON 文件，包含当前book的路由的文档路由
 */

const fs = require("fs");
const path = require("path");

// 路径名字  上传新的书籍时需要修改
const pathName = 'ts-learn'
const directoryPath = path.join(__dirname, `../src/docs/${pathName}`);
const fileName = `${pathName}.json`



const customSort = (a, b) => {
  const getChapterNumber = (str) => parseInt(str.match(/(\d+)/)[1], 10);

  const chapterA = getChapterNumber(a);
  const chapterB = getChapterNumber(b);

  return chapterA - chapterB;
};

const genLink = (path, name) => {
  return `/docs/${path}/${name}`
}


fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  const markdownFiles = files.filter((file) => path.extname(file) === ".md");

  // console.log('Markdown files in the directory:');
  //  markdownFiles.forEach(file => console.log(file));

  const sortedFiles = markdownFiles
    .filter((item) => item !== "index.md")
    .sort(customSort);

  const routes = sortedFiles.map((file) => {
    const name = file.replace(".md", "");
    const link = genLink(pathName, name);
    return { text: name, link };
  });

  // 将排序后的数组保存为 JSON 文件
  const jsonContent = JSON.stringify(routes, null, 2);

  fs.writeFile(fileName, jsonContent, "utf8", (err) => {
    if (err) {
      console.error("Error writing JSON file:", err);
    } else {
      console.log("JSON file has been saved.");
    }
  });
});