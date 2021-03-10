const fetchImages = async (query) => {
  try {
    const parent = document.querySelector(".images");
    parent.innerHTML = "";
    const images = await fetch(
      "http://www.splashbase.co/api/v1/images/search?query=" + query
    );
    const data = await images.json();
    console.log(data);
    data.images.forEach((image) => {
      const card = ` <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
               src="${image.url}"
               
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div class="card-body">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>`;
      parent.innerHTML += card;
    });
  } catch (error) {
    console.log(error);
  }
};
window.onload = function () {
  const btn = document.querySelector("#load-images");
  btn.addEventListener("click", async () => {
    await fetchImages("car");
  });
};
