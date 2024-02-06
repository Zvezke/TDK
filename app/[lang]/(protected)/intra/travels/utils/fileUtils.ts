export const getFileNameFromUrl = (url: string) => {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split("/");
  const fileName = pathParts.pop();
  return fileName;
};
