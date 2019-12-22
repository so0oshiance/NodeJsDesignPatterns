class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }
  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error('Only Markdown files!'));
    }
    this.fs.readFile(path, format, (error, content) => {
      if (error) {
        console.error(error);
        return callback(error);
      }
      return callback(null, content);
    });
  }
}
module.exports = FS_Proxy;
