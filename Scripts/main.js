const apiKey = 'paste your api key here'; 

// Get today's date in ISO format (YYYY-MM-DD)
const today = new Date().toISOString().slice(0, 10);

// Build the API URL to get the most popular video of the day
const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=1&regionCode=US&videoCategoryId=10&key=${apiKey}&publishedAfter=${today}T00:00:00Z`;

// Fetch the data from the YouTube API
fetch(apiUrl)
	.then(response => response.json())
	.then(data => {
		// Get the video data
		const video = data.items[0];
		
		// Build the HTML to embed the video
		const videoHtml = `
			<h2>${video.snippet.title}</h2>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			<p>${video.snippet.description}</p>
		`;
		
		// Insert the HTML into the page
		document.querySelector('#video-container').innerHTML = videoHtml;
	})
	.catch(error => console.error(error));
