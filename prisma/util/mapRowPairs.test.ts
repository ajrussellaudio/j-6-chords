import { load } from "cheerio";
import { mapRowPairs } from "./mapRowPairs";

describe("eachRowPair", () => {
  it("loops over two rows", () => {
    const rowHtml = load(`
      <table>
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
        <tr> 
          <th rowspan="2" class="confluenceTh"><p><br></p><p><br></p><p>5</p></th> 
          <th rowspan="2" class="confluenceTh"><p><br></p><p><br></p><p>Jazz</p></th> 
          <td class="highlight-red confluenceTd" data-highlight-colour="red">EM9</td> 
          <td class="highlight-red confluenceTd" data-highlight-colour="red">FM9</td> 
        </tr> 
        <tr> 
          <td class="confluenceTd"><p>F#4</p><p>D#4</p><p>G#3</p><p>E3</p></td> 
          <td class="confluenceTd"><p>G4</p><p>E4</p><p>A3</p><p>F3</p></td> 
        </tr> 
      </table>
    `);

    const callback = jest.fn().mockImplementation(() => "generated");

    const pairs = mapRowPairs(rowHtml, callback);

    expect(callback).toHaveBeenCalledTimes(2);
    expect(pairs).toEqual(["generated", "generated"]);
  });
});
