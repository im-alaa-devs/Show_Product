const add = document.getElementById("add");
const div = document.querySelector(".products");

add.addEventListener("click", () => {

    div.innerHTML = `<h2>Loading...</h2>`;
    fetch("https://dummyjson.com/products")
        .then((res) => {
            return res.json();
        })

        .then((data) => {

            console.log(data);

            let content = "";

            data.products.forEach((user) => {

                content += `
                    <div class="card" style="width: 18rem;">

                        <img src="${user.images[0]}" class="card-img-top" alt="${user.title}">

                        <div class="card-body">

                            <h5 class="card-title"> ${user.title}</h5>
                            <p class="card-text"> ${user.description}</p>
                            <p class="card-text text-success fs-3">$${user.price}</p>
                            <button class="btn btn-primary w-100"> View Products</button>

                        </div>

                    </div>
                `;
            });

            div.innerHTML = content;
        })

        
        });