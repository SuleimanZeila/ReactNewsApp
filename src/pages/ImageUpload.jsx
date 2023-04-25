import { useState } from 'react';

const ImageUpload = () => {
    const current_user = localStorage.getItem('username')
    const imageId = localStorage.getItem('imageId');
    
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image, `${imageId}.jpg`);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      
      console.log(data);
      localStorage.removeItem("imageId");
      window.location.href = "/allposts";
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    {imageId ? (
        <form className='m-40 p-20' onSubmit={handleSubmit}>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label><br />
            <input accept="image/*" onChange={handleFileChange} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" /><br />
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> <br /><br />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
            </form>
    ):('Post your Article First')}
   
    </>
    
  );
};

export default ImageUpload;
