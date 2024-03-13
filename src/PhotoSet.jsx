export const PhotoSet = () => {
  return (
    <div>
      PhotoSet
      <form>
        <label htmlFor="files">Select files:</label>
        <input type="file" id="files" name="files" multiple />
        <input type="submit" />
      </form>
    </div>
  );
};
