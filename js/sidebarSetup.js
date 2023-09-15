import { getElement, setCheckedState } from "./utils.js";
import { navTags } from "./data.js";
import { setupSettings } from "./settings.js";

const sidebarTagsUl = getElement(".sidebar-tags-ul");
setupSettings();
sidebarTagsUl.innerHTML = navTags
  .map((item) => {
    const { tag, subtags } = item;
    return `<li>
              <h4 class="tag-btn tag-btn-gradient gradient-hover-effect">${tag}</h4>
              <ul>
              ${subtags
                .map((subtag) => {
                  const { subtagName, subtagClass, checked } = setCheckedState(
                    tag,
                    subtag
                  );
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
