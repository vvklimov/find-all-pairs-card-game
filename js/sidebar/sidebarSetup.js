import { getElement } from "../utils.js";
import { navTags } from "../data.js";

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
                  return `<li>
                  <button class="settings-btn checkbox-btn">
                    <div class="checkbox-btn-middle-part">
                      <div
                        class="checkbox-btn-middle-part checked checked-show"
                      ></div>
                    </div></button>${subtag}
                </li>`;
                })
                .join("")}
                
              </ul>
            </li>`;
  })
  .join("");
// to do:
//  "checked show" class get from local storage
