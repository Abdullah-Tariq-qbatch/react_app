async function fetchData_six() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const json = await res.json();
    console.log(json)
  } catch (error) {
    console.log("Something went wrong");
    console.warn(error);
  }
}

async function printData() {
  await fetchData_six();
  console.log('Finished fetching data');
}

printData()
