async function loadShirts() {

    const response = await fetch('shirts.json');
    const shirts = await response.json();

    const container =
        document.getElementById('products');

    shirts.forEach(shirt => {

        const card = document.createElement('article');

        card.className = 'card';

        card.innerHTML = `
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
                    rel="noopener noreferrer"
                    class="card-link"
                >
                    View on Amazon
                </a>

            </div>
        `;

        container.appendChild(card);

    });

}

loadShirts();
