import { config } from "./config.js";

/**
 * Sends a POST request to the specified API route with the given data.
 * Returns a promise that resolves with the parsed JSON response or rejects with an error.
 *
 * @param {string} route - The API route to send the request to.
 * @param {Object} data - The data to be sent in the request body.
 * @returns {Promise<Object>} - A promise that resolves with the API response as a JSON object.
 */
async function api(route, data) {
  const url = config.api.url + route;
  const timeoutDuration = config.api.timeoutDuration;
  const showConsole = config.api.showConsole;

  // Create a controller to handle request timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutDuration);

  if (showConsole) {
    console.log(data ? data : "", ` --> ${route}`);
  }

  try {
    // Prepare and send the request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    // Clear the timeout
    clearTimeout(timeoutId);

    //parse the JSON response
    const jsonResponse = await response.json();

    // Show the response if required
    if (showConsole && response.ok) {
      console.log(`${route} -->`, jsonResponse);
    }
    if (!response.ok) {
      console.error(`${route} -->`, jsonResponse);
    }

    //Return the JSON response
    return jsonResponse;
  } catch (error) {
    // Handle errors (including timeout and network issues)
    if (error.name === "AbortError") {
      console.error("The request timed out.");
    } else {
      console.error("Fetch error: ", error);
    }
  }
}

export { api };
