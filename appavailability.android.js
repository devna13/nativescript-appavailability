var application = require("application");

exports.available = function (uri) {
  return new Promise(function (resolve, reject) {
    try {
      try {
        var pm = com.tns.NativeScriptApplication.getInstance().getPackageManager();
        pm.getPackageInfo(uri, android.content.pm.PackageManager.GET_ACTIVITIES);
        resolve(true);
      } catch(e) {
        resolve(false);
      }
    } catch (ex) {
      console.log("Error in appavailability.available: " + ex);
      reject(ex);
    }
  });
};