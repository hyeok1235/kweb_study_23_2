const fs = require("fs");
const util = require("util");
const path = require("path");

const dir_arr = ["./test"];

const readdir = util.promisify(fs.readdir);
const stat_promise = util.promisify(fs.stat);

async function searchDirectory(base_dir) {
    try {
        // First iterate through the initial directory and add path into elements
        const init_arr = await readdir(base_dir);
        const full_arr = init_arr.map((element) => path.join(base_dir, element));

        let full_length = full_arr.length;
        for(let i = 0; i < full_length; i++) {
            const stats_await = await stat_promise(full_arr[i]);
                if(stats_await.isDirectory()) {
                    searchDirectory(full_arr[i]);
                } else if(path.extname(full_arr[i]) == ".js") {
                console.log(full_arr[i]);
            }
        }
    } catch (err) {
        console.log(err);
    }
};

(async() => {
    await searchDirectory("./test");
})();