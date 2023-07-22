function getUniqueKey() {
    const timestamp = Date.now();
    const randomSuffix = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomSuffix}`;
  }

export {getUniqueKey}