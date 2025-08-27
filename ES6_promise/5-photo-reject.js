export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} connot be processed`));
}
