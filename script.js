//your JS code here. If required.
function delayAndResolve(delay, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

async function updateOutputText() {
  const outputElement = document.getElementById('output');
  if (!outputElement) {
    console.error("Element with ID 'output' not found.");
    return;
  }

  try {
    const result = await delayAndResolve(1000, 'Hello, world!');
    outputElement.textContent = result;
    console.log('Text updated successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to start the process
updateOutputText();


