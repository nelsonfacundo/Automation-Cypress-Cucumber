const fs = require("fs");
const path = require("path");

const reportsFolder = path.join(__dirname, "cypress", "reports");

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // Recursively delete subfolders
        deleteFolderRecursive(curPath);
      } else {
        // Delete file
        fs.unlinkSync(curPath);
      }
    });

    // Delete the empty directory
    fs.rmdirSync(folderPath);
  }
}

deleteFolderRecursive(reportsFolder);

console.log("Reportes eliminados exitosamente.");
