import { getElement } from "./utils.js";
import { navTags } from "./data.js";
import { displayRadioBtns } from "./radioButtons.js";
import { activeSettings } from "./settings.js";

const sidebarTagsUl = getElement(".sidebar-tags-ul");
const radioBtns = [...sidebarTagsUl.querySelectorAll(".settings-btn")];
displayRadioBtns(radioBtns);
sidebarTagsUl.innerHTML = navTags
  .map((item) => {
    const { tag, subtags } = item;
    return `<li>
              <h4 class="tag-btn gradient-hover-effect">${tag}</h4>
              <ul>
              ${subtags
                .map((subtag) => {
                  const { subtagName, subtagClass } = subtag;
                  let checked = "";
                  let activeSettingsArray = activeSettings();
                  if (activeSettingsArray.includes(subtagClass)) {
                    checked = "checked";
                  }
                  return `<li>
                  <button class="settings-btn checkbox-btn" data-tag="${tag}" data-subtag="${subtagClass}">
                    <div class="checkbox-btn-middle-part">
                      <div
                        class="checkbox-btn-middle-part ${checked}"
                      ></div>
                    </div></button>${subtagName}
                </li>`;
                })
                .join("")}
                
              </ul>
            </li>`;
  })
  .join("");
