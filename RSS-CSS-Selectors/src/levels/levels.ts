import { Level } from "../types/types";

export const levels: Level[] = [
  {
    name: "Level 1",
    toDo: "Select the plates",
    selector: "plate",
    htmlCode: `
    <plate></plate>
    <plate></plate>
    `,
  },
  {
    name: "Level 2",
    toDo: "Select the apple on the plate",
    selector: "plate apple",
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
    htmlCode: `
    <plate>
      <orange class="small"></orange>
    </plate>
    <plate>
      <apple class="small"></apple>
    </plate>
    `,
  },
];
