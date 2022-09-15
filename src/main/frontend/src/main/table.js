import "./table.css";


function Tables() {
  return (
    <table className="table-scroll small-first-col">
  <thead>
    <tr>
      <th>Head 1</th>
      <th>Head 2</th>
      <th>Head 3</th>
      <th>Head 4</th>
    </tr>
  </thead>
  <tbody className="body-half-screen">
    <tr>
      <td>1</td>
      <td>First row</td>
      <td>3</td>
      <td>4</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>A very long cell content comes here, just to test it all!!!</td>
      <td>4</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td />
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>There is an empty cell above!</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr><tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td> Last row</td>
    </tr>
  </tbody>
</table>

  );
}

export default Tables;