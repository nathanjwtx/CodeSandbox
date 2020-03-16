import "./styles.css";
import { fromJS } from 'immutable';

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const dataRows = fromJS([{
  UID: '1', 
  DLN: '2'
}]);

const test = dataRows.map((r) =>
  fromJS(r.DLN);

console.log(dataRows.get('UID'));
