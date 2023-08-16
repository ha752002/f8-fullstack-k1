var listData = [
    {
        title: "Bài Viết 1",
        img: "https://fastly.picsum.photos/id/208/300/200.jpg?hmac=hDgpZAiwVPMo7q649pjqP3ED8-BFV3TPitoeJsK46cQ",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        incidunt natus rem quia numquam obcaecati tempora perspiciatis
        consectetur reprehenderit explicabo nihil officia id? Similique nisi
        eum quos ea accusantium corporis.`,
    },
    {
        title: "Bài Viết 2",
        img: "https://fastly.picsum.photos/id/208/300/200.jpg?hmac=hDgpZAiwVPMo7q649pjqP3ED8-BFV3TPitoeJsK46cQ",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        incidunt natus rem quia numquam obcaecati tempora perspiciatis
        consectetur reprehenderit explicabo nihil officia id? Similique nisi
        eum quos ea accusantium corporis.`,
    },
    {
        title: "Bài Viết 3",
        img: "https://fastly.picsum.photos/id/208/300/200.jpg?hmac=hDgpZAiwVPMo7q649pjqP3ED8-BFV3TPitoeJsK46cQ",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        incidunt natus rem quia numquam obcaecati tempora perspiciatis
        consectetur reprehenderit explicabo nihil officia id? Similique nisi
        eum quos ea accusantium corporis.`,
    },
];

var renderHtml = `<div class="sections">
${listData.map(function (section) {
    return ` <div class="section-item">
    <img src="${section.img}" />
    <div class="section-item-content">
      <h3>${section.title}</h3>
      <p>
      ${section.desc}
      </p>
    </div>
  </div>`;
}).join("")}
</div > `

document.write(renderHtml);