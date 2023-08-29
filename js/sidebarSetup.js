import { getElement } from "./utils.js";
import { navTags } from "./data.js";
import { displayRadioBtns } from "./radioButtons.js";

const sidebarTagsUl = getElement(".sidebar-tags-ul");

sidebarTagsUl.innerHTML = navTags
  .map((item) => {
    //   console.log(item);
    const { tag, subtags } = item;
    return `<li>
              <h4 class="tag-btn gradient-hover-effect">${tag}</h4>
              <ul>
              ${subtags
                .map((subtag) => {
                  const { subtagName, subtagClass } = subtag;
                  return `<li>
                  <button class="settings-btn checkbox-btn" data-tag="${tag}" data-subtag="${subtagClass}">
                    <div class="checkbox-btn-middle-part">
                      <div
                        class="checkbox-btn-middle-part"
                      ></div>
                    </div></button>${subtagName}
                </li>`;
                })
                .join("")}
                
              </ul>
            </li>`;
  })
  .join("");
const radioBtns = [...sidebarTagsUl.querySelectorAll(".settings-btn")];
displayRadioBtns(radioBtns);
console.log(radioBtns);
// to do:
//  "checked show" class get from local storage
