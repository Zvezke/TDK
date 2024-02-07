export const getFileNameFromUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split("/");
    const fileName = pathParts.pop();
    return fileName;
  } catch (error) {
    console.log("getFileNameFromUrl, error", error);
    return null;
  }
};
