import { Level } from "../types/types";

export const levels: Level[] = [
  {
    name: "Level 1",
    toDo: "Select the plates",
    selector: "plate",
    selectorsToSelect: ["plate"],
    htmlCode: `
<plate></plate>
<plate></plate>
    `,
  },
  {
    name: "Level 2",
    toDo: "Select the apple on the plate",
    selector: "plate apple",
    selectorsToSelect: ["apple"],
    htmlCode: `
<plate>
  <apple></apple>
</plate>
    `,
  },
  {
    name: "Level 3",
    toDo: "Select the small apple on the plate",
    selector: ".small",
    selectorsToSelect: [".small"],
    htmlCode: `
<plate>
  <apple></apple>
</plate>
<plate>
  <apple class="small"></apple>
</plate>
    `,
  },
  {
    name: "Level 4",
    toDo: "Select the only small apple on the plate",
    selector: "apple.small",
    selectorsToSelect: ["apple.small"],
    htmlCode: `
<plate>
  <orange class="small"></orange>
</plate>
<plate>
  <apple class="small"></apple>
</plate>
    `,
  },
  {
    name: "Level 5",
    toDo: "Select the melon on the plate",
    selector: "melon",
    selectorsToSelect: ["melon"],
    htmlCode: `
<plate>
  <melon></melon>
</plate>
    `,
  },
  {
    name: "Level 6",
    toDo: "Select all the fruits on the plate",
    selector: "plate > *",
    selectorsToSelect: ["apple", "orange", "melon"],
    htmlCode: `
<plate>
  <apple>
    <orange>
      <melon></melon>
    </orange>
  </apple>
</plate>
    `,
  },
  {
    name: "Level 7",
    toDo: "Select plate and melon",
    selector: "plate:has(melon), melon",
    selectorsToSelect: ["plate:has(melon)", "melon"],
    htmlCode: `
<plate>
  <orange></orange>
</plate>
<plate>
  <apple class="small"></apple>
</plate>
<plate>
  <melon></melon>
</plate>
    `,
  },
  {
    name: "Level 8",
    toDo: "Select the apple on the last plate",
    selector: "plate:last-child apple",
    selectorsToSelect: ["plate:last-child apple"],
    htmlCode: `
<plate>
  <apple></apple>
  <orange></orange>
</plate>
<plate>
  <orange></orange>
  <apple></apple>
</plate>
<plate>
  <orange></orange>
  <apple></apple>
</plate>
    `,
  },
  {
    name: "Level 9",
    toDo: "Select all the fruits except the oranges",
    selector: "plate :not(orange)",
    selectorsToSelect: ["plate :not(orange)"],
    htmlCode: `
<plate>
  <apple></apple>
  <orange></orange>
</plate>
<plate>
  <apple></apple>
  <orange></orange>
  <melon></melon>
</plate>
<plate>
  <apple></apple>
  <melon></melon>
</plate>
    `,
  },
  {
    name: "Level 10",
    toDo: "Select the second apple on the plate",
    selector: "plate apple:nth-child(2)",
    selectorsToSelect: ["plate apple:nth-child(2)"],
    htmlCode: `
<plate>
  <apple></apple>
  <apple></apple>
  <apple></apple>
</plate>
<plate>
  <apple></apple>
</plate>
<plate>
  <apple></apple>
  <apple></apple>
  <apple></apple>
</plate>
    `,
  },
];
