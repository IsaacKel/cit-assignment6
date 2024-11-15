import useFetchImages from "../hooks/useFetchImages";

function ImagesFor({ id, apiKey }) {
  const imageData = useFetchImages(id, apiKey);
  const baseUrl = "https://image.tmdb.org/t/p/";
  const fileSize = "w45";

  return (
    <div>
      {imageData.map((image, index) => (
        <img
          key={index}
          src={`${baseUrl}${fileSize}${image.file_path}`}
          alt="specified user"
        />
      ))}
    </div>
  );
}

export default ImagesFor;
