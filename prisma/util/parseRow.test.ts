import { parseRow } from "./parseRow";

describe("parseRow", () => {
  it("returns an object with the row contents", () => {
    const rowHtml = `
      <tr> 
        <th rowspan="2" class="confluenceTh"><p><br></p><p><br></p><p>1</p></th> 
        <th rowspan="2" class="confluenceTh"><p><br></p><p><br></p><p>Pop&nbsp;</p></th> 
        <td class="highlight-red confluenceTd" data-highlight-colour="red">Cadd9</td> 
        <td class="highlight-red confluenceTd" data-highlight-colour="red">C#M9/C</td> 
      </tr> 
      <tr> 
        <td class="confluenceTd"><p>E4</p><p>D4</p><p>G3</p><p>C3</p></td> 
        <td class="highlight-blue confluenceTd" data-highlight-colour="blue"><p>F4</p><p>D#4</p><p>C4</p><p>C#3</p></td> 
      </tr> 
    `;
    expect(parseRow(rowHtml)).toEqual({
      number: 1,
      genre: "Pop",
      chords: [
        { name: "Cadd9", notes: [60, 67, 74, 76] },
        { name: "C#M9/C", notes: [61, 72, 75, 77] },
      ],
    });
  });
});
