async function loadShirts() {

    const response = await fetch("shirts.json");

    const shirts = await response.json();

    const container =
        document.getElementById("products");

    shirts.forEach(shirt => {

        container.innerHTML += `

            <article class="card">

                <img
                    src="${shirt.image}"
                    alt="${shirt.title}"
                    class="card-image"
                >

                <div class="card-content">

                    <h2 class="card-title">
                        ${shirt.title}
                    </h2>

                    <a
                        href="${shirt.amazon}"
                        target="_blank"
                        class="card-link"
                    >
                        View on Amazon
                    </a>

                </div>

            </article>

        `;
    });

}

loadShirts();
