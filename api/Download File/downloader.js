var Downloader = require('nodejs-file-downloader');

( async () => {
    const downloader = new Downloader({
        url: 'http://212.183.159.230/200MB.zip',
        path: './test.zip',
        onProgress: function( percentage , chunk , remainingSize ) {
            console.log('% '+percentage);
            // console.log('Current chunk of data: '+chunk);
            console.log('Remaining bytes: '+remainingSize);
        },
        onBeforeSave:(deducedFileName)=>{
            console.log('Deduced file name: '+deducedFileName);
        }
})
try {
    await downloader.download();
} catch (error) {
    console.log("Download failed",error);
}
})();