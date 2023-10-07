export const render = (portfolio) => {
    const postEl = document.querySelector(".grid__row");
    if (portfolio.length) {
        portfolio.forEach(({ image, title, desc }) => {
            const columnDiv = document.createElement("div");
            columnDiv.classList.add("grid__column-4");

            const itemWrapperDiv = document.createElement("div");
            itemWrapperDiv.classList.add("cbp-item-wrapper");

            const figureElement = document.createElement("figure");
            figureElement.classList.add("cbp-item___img");

            const imgElement = document.createElement("img");
            imgElement.src = image;
            imgElement.alt = "";

            const iconDiv = document.createElement("div");
            iconDiv.classList.add("cbp-item-icon");

            const iElement = document.createElement("i");
            iElement.classList.add("fa", "fa-clone");

            const figcaptionElement = document.createElement("figcaption");
            figcaptionElement.classList.add("cbp-item__detail");

            const titleParagraph = document.createElement("p");
            titleParagraph.classList.add("cbp-item__detail-title");
            titleParagraph.textContent = title;

            const infoParagraph = document.createElement("p");
            infoParagraph.classList.add("cbp-item__detail-info");
            infoParagraph.textContent = desc;

            iconDiv.appendChild(iElement);
            figureElement.appendChild(imgElement);
            figureElement.appendChild(iconDiv);
            figcaptionElement.appendChild(titleParagraph);
            figcaptionElement.appendChild(infoParagraph);
            itemWrapperDiv.appendChild(figureElement);
            itemWrapperDiv.appendChild(figcaptionElement);
            columnDiv.appendChild(itemWrapperDiv);

            postEl.append(columnDiv);
        })

    }

    loading.style.display = "none";

}