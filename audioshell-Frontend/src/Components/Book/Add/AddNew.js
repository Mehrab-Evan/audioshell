import { React, useState } from "react";

const AddNew = () => {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [audio, setAudio] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    setTitle("");
    setAuthor("");
    setDescription("");
    setCategory("");
    setTag("");
    setCover("");
    setAudio("");
    event.preventDefault();

    const formData = {
      cover,
      title,
      audio,
      author,
      description,
      category,
      tag,
    };

    const apiUrl = "http://127.0.0.1:8000/api/insert";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content w-[800px] flex-col lg:flex-row-reverse">
        <div className="card w-full shadow-2xl border border-slate-700 bg-base-100">
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center text-[#5865F2]">
                Add New
              </h1>
            </div>
            <div className="form-control">
              <label htmlFor="">Cover photo</label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                onChange={(event) => setCover(event.target.file[0])}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Title</label>
              <input
                type="text"
                className="input input-bordered"
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Audio</label>
              <input
                class="someClass"
                type="file"
                name="UploadAudio"
                accept="audio/mp3"
                onChange={(event) => setAudio(event.target.file[0])}
              />{" "}
            </div>
            <div className="form-control">
              <label htmlFor="">Author</label>
              <input
                type="text"
                className="input input-bordered"
                onChange={(event) => setAuthor(event.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">Description</label>
              <textarea
                className="input input-bordered"
                name="description"
                id=""
                cols="30"
                rows="4"
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>
            <div className="form-control">
              <label htmlFor="">Category</label>
              <select
                name="category"
                id="category-select"
                className="py-2 input input-bordered"
                onChange={(event) => setCategory(event.target.value)}
              >
                <option value="">--Please choose an option--</option>
                <option value="free">Free</option>
                <option value="paid">Paid</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="">Tags</label>
              <input
                type="text"
                className="input input-bordered"
                onChange={(event) => setTag(event.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#5865F2]" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
