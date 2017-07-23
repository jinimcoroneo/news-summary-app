var assert = {
  isTrue: function(assertionToCheck, msg) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + msg);
    } else {
      console.log("Test passed")
    };
  }
};
