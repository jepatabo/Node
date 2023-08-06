const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.text();
    // Handle the response data
    console.log(newData);
    return newData;
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};

//Call Function
const exampleData = { animal: "lion" };
postData("/add", exampleData);
