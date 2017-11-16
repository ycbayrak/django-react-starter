import React from 'react';
import ReactDOM from 'react-dom';

export default class FeedBackForm extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
  }
  render() {
    return (
        <div className="Feedback">
          <form>
              <fieldset>
                <label htmlFor="nameField">Name</label>
                <input type="text" placeholder="CJ Patoilo" id="nameField" />
                <label htmlFor="ageRangeField">Age Range</label>
                <select id="ageRangeField">
                  <option value="0-13">0-13</option>
                  <option value="14-17">14-17</option>
                  <option value="18-23">18-23</option>
                  <option value="24+">24+</option>
                </select>
                <label htmlFor="commentField">Comment</label>
                <textarea placeholder="Hi CJ …" id="commentField"></textarea>
                <div className="float-right">
                  <input type="checkbox" id="confirmField" />
                  <label className="label-inline" htmlFor="confirmField">Send a copy to yourself</label>
                </div>
                <input className="button-primary" type="submit" value="Send" />
              </fieldset>
        </form>
        </div>
      );
  }
}