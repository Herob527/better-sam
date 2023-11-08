import SamJs from "./index";
import characters from "./characters.json";

const mappings = {};

let opts = characters[0].opts;

document.addEventListener("DOMContentLoaded", function () {
  const charactersElement = document.getElementById("charactersContainer");
  const reinit = () => {
    ["speed", "pitch", "mouth", "throat"].forEach((e) => {
      const t = document.getElementById(e);
      t.value = opts[e];

      t.oninput = function (e) {
        opts[e.target.id] = e.target.value;
        document.getElementById(`${e.target.id}-lbl`).innerText =
          e.target.id.charAt(0).toUpperCase() +
          e.target.id.substr(1) +
          ": " +
          e.target.value;
      };
    });
  };
  reinit();

  characters.forEach((el) => {
    const btn = document.createElement("button");
    btn.dataset.name = el.name;
    btn.innerText = el.name;
    btn.addEventListener("click", () => {
      opts = characters.find((e) => e.name === el.name).opts;
      reinit();
    });
    charactersElement.appendChild(btn);
  });
  document.getElementById("fmm").addEventListener("click", function (e) {
    e.preventDefault(),
      new SamJs(opts).download(document.getElementById("speechinput").value);
  });

  document.getElementById("fmm2").addEventListener("click", function (e) {
    e.preventDefault();
    let val = document.getElementById("speechinput").value;
    Object.entries(mappings).forEach(([key, value]) => {
      val = val.replaceAll(new RegExp(key, "g"), value);
    });
    console.log(val);
    new SamJs(opts).speak(val);
  });
});
